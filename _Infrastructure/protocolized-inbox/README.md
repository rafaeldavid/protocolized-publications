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

### `POST /comment` (future, passcode-protected)

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

Forwards to `DISCORD_COMMENT_WEBHOOK` (separate webhook from the contact form). Set up later when comment mode is implemented:

```bash
npx wrangler secret put DISCORD_COMMENT_WEBHOOK
npx wrangler secret put COMMENT_PASSCODE
```

## Post-deploy: rotate the old webhook

After confirming the worker works, **rotate the existing Discord webhook URL** in the Discord channel settings. Anything still using the old URL (e.g., a search engine that indexed the page source) will stop working — which is the point.

## Operating notes

- **Logs:** `npx wrangler tail` to stream live invocation logs.
- **Rate limit:** 5 successful requests per IP per hour. After that, `429`. Reset is rolling.
- **CORS:** edit `ALLOWED_ORIGINS` in `src/index.ts` if a new mount is added.
- **Cost:** Free tier handles ~100k requests/day; this site won't get close.
