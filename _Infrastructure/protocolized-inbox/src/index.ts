/**
 * protocolized-inbox — Cloudflare Worker proxy for protocolized.dev
 *
 * Accepts contact-form submissions and forwards them to a Discord webhook
 * the client never sees. Same worker is structured to host the future
 * comment-mode endpoint without a redeploy of the routing layer.
 *
 * Routes:
 *   POST /contact  — homepage / page-level "Schedule a call" form
 *   POST /comment  — copy-editor comment mode (passcode-protected, future)
 *   OPTIONS *      — CORS preflight
 *
 * Defenses:
 *   - Honeypot: any non-empty `_hp` field in the body is silently dropped
 *   - Rate limit: 5 requests / hour / IP via KV (RATE_LIMIT binding)
 *   - Length cap: name 100, email 200, message 2000 chars
 *   - CORS: only the origins below
 */

interface Env {
  DISCORD_WEBHOOK?: string;
  DISCORD_COMMENT_WEBHOOK?: string;
  COMMENT_PASSCODE?: string;
  RATE_LIMIT?: KVNamespace;
}

const ALLOWED_ORIGINS = [
  "https://protocolized.dev",
  "https://www.protocolized.dev",
  // here.now staging mounts (so testing on slug URLs works too):
  "https://gleaming-sketch-5q8b.here.now",
  "https://humble-gorge-n5j4.here.now",
  "https://plush-nutmeg-h2rj.here.now",
  "https://eager-poplar-8bw6.here.now",
  "https://arctic-ribbon-7nvb.here.now",
  "https://witty-garnet-6k4f.here.now",
  // local dev:
  "http://localhost:8000",
  "http://localhost:3000",
  "http://127.0.0.1:8000",
];

const RATE_LIMIT_PER_HOUR = 5;

function corsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get("Origin") || "";
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

function json(data: unknown, status: number, cors: Record<string, string>): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...cors },
  });
}

async function checkRateLimit(env: Env, ip: string): Promise<boolean> {
  if (!env.RATE_LIMIT) return true; // KV not bound yet; allow
  const key = `rl:${ip}`;
  const raw = await env.RATE_LIMIT.get(key);
  const count = raw ? parseInt(raw, 10) : 0;
  if (count >= RATE_LIMIT_PER_HOUR) return false;
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
  if (!(await checkRateLimit(env, ip))) {
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

// ─── Route: POST /comment (future, passcode-protected) ────────────────────
async function handleComment(req: Request, env: Env, cors: Record<string, string>): Promise<Response> {
  if (!env.DISCORD_COMMENT_WEBHOOK || !env.COMMENT_PASSCODE) {
    return json({ error: "Comment mode not configured" }, 503, cors);
  }
  const provided = req.headers.get("X-Comment-Passcode") || "";
  if (provided !== env.COMMENT_PASSCODE) {
    return json({ error: "Unauthorized" }, 401, cors);
  }

  const ip = getIp(req);
  if (!(await checkRateLimit(env, ip))) {
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
  const note = clip(body.note || "", 500);
  const reviewer = clip(body.reviewer || "anon", 80);

  if (!page || !before) {
    return json({ error: "Missing required fields" }, 400, cors);
  }

  const lines = [
    `✏️ **Edit suggestion** · ${reviewer}`,
    `**Page:** ${page}`,
    "**Before:**",
    "```",
    before,
    "```",
    "**Suggestion:**",
    "```",
    suggestion || "(no replacement provided)",
    "```",
    note ? `**Note:** ${note}` : "",
  ].filter(Boolean);

  const ok = await postToDiscord(env.DISCORD_COMMENT_WEBHOOK, lines.join("\n"));
  return ok
    ? json({ ok: true }, 200, cors)
    : json({ error: "Could not deliver." }, 502, cors);
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

    return json({ error: "Not found" }, 404, cors);
  },
};
