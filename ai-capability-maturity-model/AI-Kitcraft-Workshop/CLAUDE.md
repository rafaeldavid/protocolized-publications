# CLAUDE.md — AI Kitcraft (workshop landing page)

## What this is
A single-page **registration / express-interest landing page** for the **AI Kitcraft** hands-on workshop at the **2026 Protocol Symposium** (*New Nature*, online, **Sep 21–25 2026**). Self-contained `index.html` + `assets/` + `announcement.md` (reusable blurbs). Facilitated by the Protocols for Business SIG; organizers Rafael Fernández & Sachin Benny.

- **Live (custom domain):** https://ai.protocolized.dev/kitcraft/ — also at `https://bold-steeple-73wb.here.now/`. The mount is a here.now **link**: `POST https://here.now/api/v1/links` `{"location":"kitcraft","slug":"bold-steeple-73wb","domain":"ai.protocolized.dev"}`. Re-publishing to the slug updates the path automatically.
- Symposium registration opens **July 2026**; until then the page is pre-registration (express interest), so the CTA captures interest rather than "register".

## Deploy
```bash
# from this directory
bash ~/.claude/skills/here-now/scripts/publish.sh . --slug bold-steeple-73wb --client claude-code --title "AI Kitcraft — A Hands-On AI Tooling Workshop"
```
Verify with `curl`, not the publisher's "unchanged/skipped" line.

## Brand
Institute cobalt `#0064ff` base **+ New Nature green accent** (forest `#0f6e56`, deep `#085041`, tint `#e1f5ee`), rust `#d85a30` rarely. Warm paper `#f9f8f5`. Fonts: Instrument Serif (headings, 400), Lora (body), Outfit (UI). Tokens live in `../../protocolinstitute-brandkit/` (brand.json / brand.css); run `cd ../../protocolinstitute-brandkit/scripts && npm test` to check contrast if you touch colors. Favicon = `assets/pi-mark.svg`. Imagery rule: **only the brand's curated editorial artwork**, never real-person photos/screenshots/charts. Hero = green "New Nature" collage (`assets/hero-new-nature.png`).

## The express-interest form (important)
Posts JSON to the existing **Cloudflare/Discord worker** — same inbox as ai.protocolized.dev:
- Endpoint: `POST https://protocolized-inbox.rafaeldf2.workers.dev/contact`
- Body: `{ name, email, message, subject:"AI Kitcraft Workshop — Interest", _hp }` (`_hp` = honeypot; the structured fields — org, recurring task, tooling-ready — are packed into `message`).
- The worker has an **origin allowlist** in `../../../_Infrastructure/protocolized-inbox/src/index.ts` (`ALLOWED_ORIGINS`). This page's here.now slug AND `https://ai.protocolized.dev` are both allow-listed, so the form works on the slug now and will work at `ai.protocolized.dev/kitcraft` with no redeploy. To change the allowlist you must `cd` there and `npx wrangler deploy` (needs interactive `wrangler login` — the user runs it).
- Graceful fallback: if the relay can't be reached (CORS/network), the form offers a prefilled `mailto:team@protocol-institute.org` so interest is never lost.

## Content
Workshop spec (abstract, audience, prerequisites, takeaways, sessions, organizers, foundations) is rendered directly in `index.html`; `announcement.md` holds one-liner / social / Discord / email variants — keep its `LINK` pointing at the live URL. Cap stated as 10–15 participants (note: symposium's own target is 30–50). Format = 1 presentation ("Fog of War Kit Building") + 4 working sessions + async Discord.

## Verify changes
Serve locally and screenshot desktop (1440) + mobile (390) with Playwright MCP:
```bash
python3 -m http.server 8766
```
Check hero text legibility over the collage (a left-anchored dark gradient keeps it readable), the nav "Register Now" button, responsive single-column on mobile, and that the form's worker endpoint + honeypot are intact.

## Open threads
- Custom-domain mount (`ai.protocolized.dev/kitcraft`) is LIVE; `announcement.md` and the deck's slide-14 button use the clean URL. The form works there (origin allow-listed).
- No keynote/facilitator confirmations beyond the two organizers.
