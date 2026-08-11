# protocolized-inbox

Cloudflare Worker that proxies contact-form submissions and (in future) copy-editor comments from `protocolized.dev` pages to Discord — without exposing webhook URLs in client source.

## Why it exists

The pages at `protocolized.dev` ship a contact form that submits directly to a Discord webhook. The webhook URL is visible in page source; an abuser could spam the channel. This worker:

- Holds the Discord webhook as a server-side secret
- Rate-limits submissions per IP (5/hr, KV-backed)
- Drops honeypot spam silently
- Caps field lengths
- Restricts CORS origins to `protocolized.dev` and the here.now staging mounts

## Deploy

```bash
cd _Infrastructure/protocolized-inbox/

# 1. Install deps
npm install

# 2. Provision the rate-limit KV namespace
npx wrangler kv namespace create RATE_LIMIT
# → paste the returned id into wrangler.toml under kv_namespaces

# 3. Set the Discord webhook secret
npx wrangler secret put DISCORD_WEBHOOK
# (paste the new Discord webhook URL when prompted)

# 4. Deploy
npx wrangler deploy
```

The worker will be available at `https://protocolized-inbox.<subdomain>.workers.dev`.

## Endpoints

### `POST /contact`

Public contact-form endpoint.

```json
{
  "name": "string (required, ≤100)",
  "email": "string (optional, ≤200)",
  "message": "string (required, ≤2000)",
  "subject": "string (optional, ≤100, default: 'Contact form')",
  "_hp": "honeypot — leave empty"
}
```

Returns `{ ok: true }` on success, `{ error: "..." }` otherwise.

### `POST /comment` (passcode-protected)

Copy-editor comment-mode endpoint. Requires `X-Comment-Passcode` header matching the `COMMENT_PASSCODE` secret.

```json
{
  "page": "URL or path of the page being commented on (required, ≤200)",
  "before": "the highlighted text (required, ≤800)",
  "suggestion": "the proposed replacement (optional, ≤1500)",
  "note": "free-form note (optional, ≤500)",
  "reviewer": "reviewer name (optional, ≤80)"
}
```

Each accepted submission is written as a single JSON entry to the `EDITS` KV namespace under key `edit:<ISO-timestamp>:<random-id>`. Nothing is forwarded to Discord — submissions accumulate in KV and are pulled down as a CSV when ready to synthesize.

Required secrets (otherwise endpoint returns `503 Comment mode not configured`):

```bash
npx wrangler secret put COMMENT_PASSCODE          # any string; share with editors
```

### `GET /comment/export.csv` (admin-only)

Streams every stored edit suggestion as a single RFC-4180 CSV with columns:

`timestamp, reviewer, page, before, suggestion, note, ip`

Gated by the `EXPORT_SECRET` admin secret (separate from the editor passcode — leak of the editor passcode does not leak the export). Provide the secret via either:

- Header: `X-Export-Secret: <value>`
- Query param: `?secret=<value>` (handy for one-shot `curl` to file)

Required secret:

```bash
npx wrangler secret put EXPORT_SECRET             # admin-only; do NOT share with editors
```

**Pulling the CSV down:**

```bash
curl -fSL -o protocolized-edits.csv \
  "https://protocolized-inbox.<subdomain>.workers.dev/comment/export.csv?secret=YOUR_EXPORT_SECRET"
```

Then import the CSV into your synthesis workflow — open in Numbers/Excel, or `csvkit`, or scan-and-cluster as new backlog items in `_Product/Backlog.md`.

Submissions are not auto-deleted from KV after export. To prune after synthesis, list and delete keys matching `edit:` via `wrangler kv key list --binding=EDITS --prefix=edit:` and `wrangler kv key delete --binding=EDITS <key>`.

### `GET /comment-mode.js`

Serves the copy-editor client bundle (CSS + JS, IIFE) included by every page on the site via `<script src="https://protocolized-inbox.<subdomain>.workers.dev/comment-mode.js" defer></script>`. The bundle goes dormant unless an editor activates it.

**Source:** `src/comment-mode.bundle.js` — embedded as a string at deploy time via the wrangler `[[rules]] type = "Text"` rule on `**/*.bundle.js`.

**Activation paths (for editors):**
1. **URL param** — visit any page with `?edit=<passcode>`, e.g. `https://protocolized.dev/?edit=hunter2`. The bundle stores the passcode in `sessionStorage`, strips the param from the URL, and turns on edit mode for the rest of the tab session.
2. **Keyboard shortcut** — `⌘⇧E` (or `Ctrl⇧E` on Windows) opens a passcode prompt. Same effect.

**Editor flow:**
1. Banner appears at the top: `EDIT MODE | <page> | reviewer name | hint | Leave`.
2. Highlight any text on the page → small dark popup appears with `✏ Suggest edit`.
3. Click → modal opens with **Before** (read-only, the selection) and **After** (textarea, pre-filled with the original; user edits). Optional **Note** for rationale.
4. Submit → POSTs to `/comment` with the passcode. Edits arrive in the editor's Discord channel; the suggestion also lands in a session-only "Session edits" gutter on the page (collapsible, top-right).
5. `Leave` clears `sessionStorage` and returns the page to normal-reader state.

**Privacy / security notes:**
- The passcode is the only gate; treat it like a password. The bundle itself is public — anyone can read it. Without the right passcode, every POST returns `401`.
- Comments are NOT stored in the reader's browser beyond the session edits gutter (which is in-memory only). They are sent to Discord, where rafa actions them.
- Rotate `COMMENT_PASSCODE` if it leaks — no harm to existing edits, but new ones from the leaked passcode will be locked out on rotation.

## Post-deploy: rotate the old webhook

After confirming the worker works, **rotate the existing Discord webhook URL** in the Discord channel settings. Anything still using the old URL (e.g., a search engine that indexed the page source) will stop working — which is the point.

## Operating notes

- **Logs:** `npx wrangler tail` to stream live invocation logs.
- **Rate limit:** 5 successful requests per IP per hour. After that, `429`. Reset is rolling.
- **CORS:** edit `ALLOWED_ORIGINS` in `src/index.ts` if a new mount is added.
- **Cost:** Free tier handles ~100k requests/day; this site won't get close.

## Email notification for /contact (added 2026-08-11)

`/contact` submissions are relayed to Discord as always, **and** — for the
Distributed Robotics workshop only — emailed to the organizers via Cloudflare
Email Sending.

**Scoped on purpose.** This worker is shared by protocolized.dev, the AI Kitcraft
page and the robotics workshop. Only submissions whose `subject` contains
`NOTIFY_SUBJECT_MATCH` (default `"Distributed Robotics"`) are emailed; every
other form keeps its previous Discord-only behaviour. Set the var to `""` to
email on every submission.

Delivery is best-effort and independent: a submission succeeds if Discord **or**
email got it, and it is written to KV either way. An email failure is logged
(`wrangler tail`) and never fails the form.

### One-time setup

```bash
# 1. Onboard the sender domain (REQUIRED — until this is done, sends throw
#    E_SENDER_NOT_VERIFIED, which is caught and logged; Discord still works).
npx wrangler email sending enable protocolized.dev
npx wrangler email sending list        # confirm it is listed

# 2. Set the recipients (kept out of the repo as a secret)
npx wrangler secret put NOTIFY_EMAILS
# paste at the prompt: comma-separated organizer addresses, no spaces needed.
# Deliberately a secret, not a [vars] entry — this repo is public and these are
# personal addresses.

# 3. Deploy
npx wrangler deploy
```

`NOTIFY_FROM` (in `[vars]`) is the sender address and must be on the onboarded
domain. `replyTo` is set to the submitter, so replying in Gmail goes straight to
the attendee rather than to the no-reply sender.

### Verify

```bash
npx wrangler tail            # then submit the robotics form
```
Expect a Discord message and mail at both addresses. `E_SENDER_NOT_VERIFIED` in
the tail means step 1 has not finished propagating.
