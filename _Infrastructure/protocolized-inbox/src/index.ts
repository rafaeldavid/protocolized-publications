/**
 * protocolized-inbox — Cloudflare Worker proxy for protocolized.dev
 *
 * Accepts contact-form submissions and forwards them to a Discord webhook
 * the client never sees. Same worker hosts the copy-editor comment-mode
 * client bundle (served from /comment-mode.js) and the matching POST
 * endpoint that records edit suggestions to KV (no Discord) so they can
 * be exported as CSV and synthesized into the backlog by hand.
 *
 * Routes:
 *   POST /contact            — homepage / page-level "Schedule a call" form
 *   POST /comment            — copy-editor edit suggestions (passcode-protected)
 *   GET  /comment/export.csv — download all stored suggestions (admin secret)
 *   GET  /comment-mode.js    — client bundle for editors (CSS+JS, IIFE)
 *   OPTIONS *                — CORS preflight
 *
 * Defenses:
 *   - Honeypot: any non-empty `_hp` field in the body is silently dropped
 *   - Rate limit: 5 requests / hour / IP via KV (RATE_LIMIT binding)
 *   - Length cap: name 100, email 200, message 2000 chars
 *   - CORS: only the origins below
 */

// Imported as text via wrangler [[rules]] type="Text" rule for **/*.bundle.js
// (see wrangler.toml). Wrangler embeds the file contents as a string at deploy.
import COMMENT_MODE_BUNDLE from "./comment-mode.bundle.js";

interface Env {
  DISCORD_WEBHOOK?: string;
  COMMENT_PASSCODE?: string;
  EXPORT_SECRET?: string;
  RATE_LIMIT?: KVNamespace;
  EDITS?: KVNamespace;
}

interface EditRow {
  ts: string;
  page: string;
  before: string;
  suggestion: string;
  note: string;
  reviewer: string;
  ip: string;
}

const ALLOWED_ORIGINS = [
  "https://protocolized.dev",
  "https://www.protocolized.dev",
  "https://ai.protocolized.dev",
  // here.now staging mounts (so testing on slug URLs works too):
  "https://gleaming-sketch-5q8b.here.now",
  "https://humble-gorge-n5j4.here.now",
  "https://plush-nutmeg-h2rj.here.now",
  "https://eager-poplar-8bw6.here.now",
  "https://arctic-ribbon-7nvb.here.now",
  "https://witty-garnet-6k4f.here.now",
  "https://plush-muse-q9bz.here.now",
  // local dev:
  "http://localhost:8000",
  "http://localhost:3000",
  "http://127.0.0.1:8000",
];

const RATE_LIMIT_CONTACT_PER_HOUR = 5;    // public form — keep abuse-resistant
const RATE_LIMIT_COMMENT_PER_HOUR = 100;  // copy-editing is volume work

function corsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get("Origin") || "";
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-Comment-Passcode, X-Export-Secret",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function json(data: unknown, status: number, cors: Record<string, string>): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...cors },
  });
}

async function checkRateLimit(env: Env, ip: string, scope: string, limit: number): Promise<boolean> {
  if (!env.RATE_LIMIT) return true; // KV not bound yet; allow
  const key = `rl:${scope}:${ip}`;
  const raw = await env.RATE_LIMIT.get(key);
  const count = raw ? parseInt(raw, 10) : 0;
  if (count >= limit) return false;
  await env.RATE_LIMIT.put(key, String(count + 1), { expirationTtl: 3600 });
  return true;
}

function getIp(req: Request): string {
  return (
    req.headers.get("CF-Connecting-IP") ||
    req.headers.get("X-Forwarded-For")?.split(",")[0].trim() ||
    "unknown"
  );
}

function clip(s: string, max: number): string {
  return (s || "").trim().slice(0, max);
}

async function postToDiscord(webhook: string, content: string): Promise<boolean> {
  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: content.slice(0, 1950) }),
  });
  return res.ok;
}

// ─── Route: POST /contact ─────────────────────────────────────────────────
async function handleContact(req: Request, env: Env, cors: Record<string, string>): Promise<Response> {
  if (!env.DISCORD_WEBHOOK) {
    return json({ error: "Webhook not configured" }, 500, cors);
  }

  const ip = getIp(req);
  if (!(await checkRateLimit(env, ip, "contact", RATE_LIMIT_CONTACT_PER_HOUR))) {
    return json({ error: "Rate limit exceeded. Try again later." }, 429, cors);
  }

  let body: { name?: string; email?: string; message?: string; subject?: string; _hp?: string };
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400, cors);
  }

  // Honeypot — silently accept, never forward
  if (body._hp) return json({ ok: true }, 200, cors);

  const name = clip(body.name || "", 100);
  const email = clip(body.email || "", 200);
  const message = clip(body.message || "", 2000);
  const subject = clip(body.subject || "Contact form", 100);

  if (!name || !message) {
    return json({ error: "Missing required fields" }, 400, cors);
  }

  const lines = [
    `📬 **${subject}**`,
    `**From:** ${name}${email ? ` · ${email}` : ""}`,
    `**IP:** ${ip}`,
    "",
    message,
  ];

  const ok = await postToDiscord(env.DISCORD_WEBHOOK, lines.join("\n"));
  return ok
    ? json({ ok: true }, 200, cors)
    : json({ error: "Could not deliver. Please email team@protocol-institute.org." }, 502, cors);
}

// ─── Route: POST /comment ─────────────────────────────────────────────────
// Records each edit suggestion as one KV entry under EDITS. No Discord;
// admin pulls everything down later via GET /comment/export.csv.
async function handleComment(req: Request, env: Env, cors: Record<string, string>): Promise<Response> {
  if (!env.COMMENT_PASSCODE || !env.EDITS) {
    return json({ error: "Comment mode not configured" }, 503, cors);
  }
  const provided = req.headers.get("X-Comment-Passcode") || "";
  if (provided !== env.COMMENT_PASSCODE) {
    return json({ error: "Unauthorized" }, 401, cors);
  }

  const ip = getIp(req);
  if (!(await checkRateLimit(env, ip, "comment", RATE_LIMIT_COMMENT_PER_HOUR))) {
    return json({ error: "Rate limit exceeded. Try again later." }, 429, cors);
  }

  let body: { page?: string; before?: string; suggestion?: string; note?: string; reviewer?: string };
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400, cors);
  }

  const page = clip(body.page || "", 200);
  const before = clip(body.before || "", 800);
  const suggestion = clip(body.suggestion || "", 1500);
  const note = clip(body.note || "", 2000);
  const reviewer = clip(body.reviewer || "anon", 80);

  if (!page || !before) {
    return json({ error: "Missing required fields" }, 400, cors);
  }

  const ts = new Date().toISOString(); // 2026-04-25T17:00:00.000Z
  const id = randomId(8);
  const key = `edit:${ts}:${id}`;
  const row: EditRow = { ts, page, before, suggestion, note, reviewer, ip };

  try {
    await env.EDITS.put(key, JSON.stringify(row));
  } catch (err) {
    return json({ error: "Storage write failed" }, 502, cors);
  }

  return json({ ok: true, id: key }, 200, cors);
}

// ─── Route: GET /comment/export.csv ───────────────────────────────────────
// Streams every stored edit suggestion as a single RFC-4180 CSV.
// Gated by EXPORT_SECRET — share that secret only with whoever runs
// `import-edits` against the backlog.
//
// Auth (any one):
//   - X-Export-Secret header
//   - ?secret=<value> query parameter (handy for one-shot curl)
async function handleCommentExport(req: Request, env: Env): Promise<Response> {
  const corsHeaders = { "Access-Control-Allow-Origin": "*" };
  if (!env.EXPORT_SECRET || !env.EDITS) {
    return new Response("Export not configured", { status: 503, headers: corsHeaders });
  }
  const url = new URL(req.url);
  const provided =
    req.headers.get("X-Export-Secret") ||
    url.searchParams.get("secret") ||
    "";
  if (provided !== env.EXPORT_SECRET) {
    return new Response("Unauthorized", { status: 401, headers: corsHeaders });
  }

  // List all keys under the edit: prefix. KV list returns paginated;
  // we walk cursors until done. For this volume (manual edit suggestions)
  // a single page is overwhelmingly likely.
  type ExportRow = EditRow & { id: string };
  const rows: ExportRow[] = [];
  let cursor: string | undefined = undefined;
  while (true) {
    const list: KVNamespaceListResult<unknown> = await env.EDITS.list({ prefix: "edit:", cursor });
    for (const k of list.keys) {
      const raw = await env.EDITS.get(k.name);
      if (!raw) continue;
      try {
        const r = JSON.parse(raw) as EditRow;
        rows.push({ id: k.name, ...r });
      } catch {
        // skip corrupted entries
      }
    }
    if (list.list_complete) break;
    cursor = list.cursor;
  }

  // Sort by timestamp ascending (KV list is lexicographic; our keys begin
  // with ISO timestamps, so this should already be sorted, but be defensive)
  rows.sort((a, b) => a.ts.localeCompare(b.ts));

  const header = ["id", "timestamp", "reviewer", "page", "before", "suggestion", "note", "ip"];
  const csvLines: string[] = [header.join(",")];
  for (const r of rows) {
    csvLines.push(
      [r.id, r.ts, r.reviewer, r.page, r.before, r.suggestion, r.note, r.ip].map(csvEscape).join(",")
    );
  }
  const csv = csvLines.join("\n") + "\n";

  return new Response(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="protocolized-edits-${new Date().toISOString().slice(0, 10)}.csv"`,
      "Cache-Control": "no-store",
      ...corsHeaders,
    },
  });
}

function csvEscape(value: string): string {
  const v = value == null ? "" : String(value);
  // RFC 4180: wrap in quotes if value contains comma, quote, CR, or LF.
  if (/[",\r\n]/.test(v)) {
    return '"' + v.replace(/"/g, '""') + '"';
  }
  return v;
}

function randomId(len: number): string {
  const bytes = new Uint8Array(len);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("").slice(0, len);
}

// ─── Route: GET /comment-mode.js ──────────────────────────────────────────
// Public bundle, no auth here — the bundle itself goes dormant unless the
// editor supplies a passcode (validated server-side on POST /comment).
function handleCommentModeBundle(req: Request): Response {
  // CORS for cross-origin <script src> includes is permissive for this
  // public asset (so each here.now slug + protocolized.dev can include it).
  const headers: Record<string, string> = {
    "Content-Type": "application/javascript; charset=utf-8",
    "Cache-Control": "public, max-age=300, s-maxage=300",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "X-Content-Type-Options": "nosniff",
  };
  return new Response(COMMENT_MODE_BUNDLE, { status: 200, headers });
}

// ─── Entrypoint ───────────────────────────────────────────────────────────
export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const cors = corsHeaders(req);

    if (req.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    const url = new URL(req.url);
    if (req.method === "POST" && url.pathname === "/contact") {
      return handleContact(req, env, cors);
    }
    if (req.method === "POST" && url.pathname === "/comment") {
      return handleComment(req, env, cors);
    }
    if (req.method === "GET" && url.pathname === "/comment/export.csv") {
      return handleCommentExport(req, env);
    }
    if (req.method === "GET" && url.pathname === "/comment-mode.js") {
      return handleCommentModeBundle(req);
    }

    return json({ error: "Not found" }, 404, cors);
  },
};
