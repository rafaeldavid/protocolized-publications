# CLAUDE.md — Robots as Protocol Citizens (workshop landing page)

## What this is
A single-page **express-interest landing page** for the **Robots as Protocol Citizens** hands-on workshop at the **2026 Protocol Symposium** (*New Nature*, online, **Sep 21–25 2026**). Self-contained `index.html` + `assets/` + `announcement.md`. Hosted by the **Distributed Robotics Research Group** (new SIG); organizers Anuraj R & Rafael Fernández.

Forked from `../ai-capability-maturity-model/AI-Kitcraft-Workshop/` — same chrome (fixed top bar, gutter scroll-spy, section rhythm, worker-backed form), different vein and content.

- **Live at <https://npc.here.now/robotworkshop/>** (slug `hollow-willow-kgrt`, published 2026-08-11). This is the interim home; `ai.protocolized.dev/robots/` is still the intended final mount.
- The page is **workshop-primary**: the SIG is context, not the headline. Its dedicated section was removed (2026-08-11) and reduced to a two-sentence blurb in `#organizers` plus an outbound link to <https://protocol-institute.org/sigs/drg/about/> (also in the footer). The topics list, the two-modes/two-venues cards, and the "protocols are engineered arguments" framing now live only in `announcement.md` — pull from there if the SIG ever needs its own page.

## The commitment model (the thing that makes this page different)
Kitcraft was a **notify list**. This is an **express-interest + kit-commitment** page: participants buy and keep their own robot (~$150–200), so the page carries a real **bill of materials** (`#robot`) and a five-step **pre-workshop checklist** (order → build → test on Freenove's stock software → clone repo → point a coding agent at it). The form's key field is the `commit` checkbox.

Rationale: the workshop proposal's alternative was organizers buying 10–25 shared robots (~€1500–5000 budget). That was **not** taken — if the budget is later approved, the BOM section and the commit checkbox both need rewriting.

## Deploy
```bash
# from this directory — the slug is pinned, don't mint a new one
bash ~/.claude/skills/here-now/scripts/publish.sh . --slug hollow-willow-kgrt --client claude-code \
  --title "Robots as Protocol Citizens — 2026 Protocol Symposium"
```
Re-publishing to the slug updates the mounted path automatically. Verify with `curl`, not the publisher's "unchanged/skipped" line.

The mount is a here.now **handle link** (`npc` is the account handle) — note there is **no** `domain` field for handle links, unlike the custom-domain form:
```bash
curl -sS https://here.now/api/v1/links -H "Authorization: Bearer $(cat ~/.herenow/credentials)" \
  -H "Content-Type: application/json" -d '{"location":"robotworkshop","slug":"hollow-willow-kgrt"}'
```
To later move it to `ai.protocolized.dev/robots/`, add `"domain":"ai.protocolized.dev"` and `"location":"robots"`. Propagates in <60s. **If you move it, update the four absolute social-card URLs and the `<link rel="canonical">` in the `<head>`** — scrapers do not resolve relative `og:image` paths.

**Form origins:** the contact worker allow-lists `https://npc.here.now`, `https://hollow-willow-kgrt.here.now` and `https://ai.protocolized.dev` (`ALLOWED_ORIGINS` in `../_Infrastructure/protocolized-inbox/src/index.ts`). Those edits are committed but **need a deploy to take effect**: `cd ../_Infrastructure/protocolized-inbox && npx wrangler deploy` (interactive `wrangler login` required, so the user runs it).

## Social card
`assets/og-card.png` (1200×630) is rendered from `_og-card.html`, which carries its own regeneration command in a comment. Edit the HTML, re-render, re-publish. `_og-card.html` ships with the site (here.now publishes the directory as-is) but is `noindex` and unlinked.

## Brand
Protocol Institute **Institute vein**, tuned to the hero artwork. The New Nature green was removed (2026-08-11) — it read as borrowed from Kitcraft rather than belonging to this page. Three roles, kept strictly separate:

| Role | Token | Used for |
|---|---|---|
| cobalt | `--pi-action-primary` `#0064ff` | links, eyebrows, numerals, focus rings, gutter marker |
| indigo | `--pi-indigo` `#092cba` | labels and metadata: `.spec`, `.daylabel`, `.org .role`, avatars, success status |
| rust | `--pi-accent-strong` `#c04b22` | every conversion CTA, `.steps` circles, `.commit` box, tick rings |

Indigo is sampled from **art_1's palette in the brand kit's `metadata.json`** (`#092cba` mediumblue), which is the kit's documented way to harmonize a layout with its artwork. The rule of thumb: if it converts, it's rust; if it's a label, it's indigo; everything else is cobalt.

`--pi-accent-strong` `#c04b22` is a **derived step, not a kit token**. Bare rust `#d85a30` carries only 3.87:1 under white so it cannot fill a 16px button; `#c04b22` gives 4.92:1 white text *and* 3.72:1 against the navy ground. This is the same move the kit already made when it added `accent-deep` for rust-as-text — worth pushing back into the brand kit's `BACKLOG.md`.

Warm paper `#f9f8f5`. Fonts: Instrument Serif (headings), Lora (body), Outfit (UI).

**Dark surfaces use `#02113c`** (deep cobalt, sampled from the hero artwork) rather than Kitcraft's dark green — this is the main visual differentiator. On-dark accent is `#9dc4ff`. Both dark bands (`.dark`) and the hero flip the gutter nav to light automatically.

Imagery is the brand kit's **house art set** (`../protocolinstitute-brandkit/assets/images/protocolized_generic_art_*.png`), re-encoded as sized JPEGs in `assets/`:
- `hero-stack.jpg` (art_1 — stacked planes, reads as a protocol stack)
- `art-cube.jpg` (art_6 — flattest piece, sits behind text)
- `fnd-*.jpg` (art_2/2b/3b/4 at 440px for the foundations thumbnails)

**Never** real-person photos, screenshots, or charts. (`art-network.jpg`/art_5 was dropped with the SIG section; re-add from the brand kit if a coordination illustration is ever needed.)

## Verify before shipping (definition of done)
```bash
node ../protocolinstitute-brandkit/scripts/preflight.mjs index.html   # 0 fail expected
cd ../protocolinstitute-brandkit/scripts && npm test                  # 21/21 pairings
python3 -m http.server 8771                                           # then screenshot 1440 + 390
```
Two things the standard checks do **not** cover, so re-check by hand if you touch colors:
1. The kit's contrast contract covers neither this page's **dark-cobalt** ground nor its indigo/rust roles. All 39 pairings were verified by hand — the tightest are the CTA (4.92:1 text, 3.72:1 boundary on navy) and the tick/commit rust rings (3.36:1, UI minimum 3:1). Re-check by hand if you shift any of the three role colors.
   The CTA's **hover** fill (`accent-deep`) is only 2.73:1 on navy, so on dark surfaces hover adds a white ring (`box-shadow`) to carry the boundary instead. Don't remove it.
2. Preflight's `a.btn{color}` warning is a **known false positive** here: the fix is `color` on the `.btn` base class, which wins on specificity over the global `a{color}`. Verified in-browser: every button computes white text. Do not "fix" it by adding an `a.btn` rule — that out-specifies the `--primary`/`--cta` modifiers and breaks them.

Three footguns already handled, don't reintroduce:
- `.chip` is a flex row, so a `<b>` mid-sentence gets `gap` space on **both** sides. Lead with the bold instead.
- `text-wrap:pretty` rags badly in the narrow `#stack` cards; those paragraphs are set back to `text-wrap:wrap`.
- An `h2.oneline` longer than the 50ch `.section-head` **looks left-shifted**: a nowrap line that overflows its box spills right rather than staying centred. Use `.section-head--wide` (70ch) for those — `#organizers` needs it. Check with: text centre vs `clientWidth/2`.

Nav labels use standard workshop vocabulary (Overview / What you'll learn / What you'll build / Schedule / Equipment / Prerequisites / Instructors / Express interest) and the section eyebrows are kept identical to them — change both together or the scroll-spy stops making sense.

## The express-interest form
Posts to the same Cloudflare/Discord worker as Kitcraft and ai.protocolized.dev:
- `POST https://protocolized-inbox.rafaeldf2.workers.dev/contact`
- Body `{ name, email, message, subject:"Distributed Robotics Workshop — express interest", _hp }` (`_hp` = honeypot; background, kit commitment, and the free-text note are packed into `message`).
- Only `email` is required. Submissions are persisted to KV; pull them with
  `curl "https://protocolized-inbox.rafaeldf2.workers.dev/contact/export.csv?secret=$EXPORT_SECRET"`.
- `no-cors` + `text/plain` body avoids a preflight; the response is opaque so success is confirmed optimistically, with a prefilled `mailto:` fallback on network failure.
- **Submissions also email the organizers** (added 2026-08-11) via Cloudflare Email Sending, on top of the Discord relay. Gated on the subject containing `"Distributed Robotics"` (`NOTIFY_SUBJECT_MATCH`), so Kitcraft and the protocolized.dev forms stay Discord-only. **If you change this page's `SUBJECT` constant, the email notification silently stops** — keep the phrase, or update the var. Recipients live in the `NOTIFY_EMAILS` secret, not in the repo. Requires `wrangler email sending enable protocolized.dev` once; see `../_Infrastructure/protocolized-inbox/README.md`.
- A latent worker bug was fixed alongside: `/contact` used to require `name`, so any submission from a form where name is optional was rejected with a 400 — and because the page posts `no-cors`, the visitor saw a success message and the signup was lost. It now requires a message plus *either* name or email. This affected AI Kitcraft too.

## Open threads
- **Date/venue**: the workshop is placed at the Symposium (Sep 21–25, online), but no session times are set.
- **Session mapping**: the brief listed seven slash-separated phrases for "2 sessions each day", so the 4-session split (intro+stack / code set-up // build+fix / identity+MCP+marketplace) is an interpretation. Splitting session 4 into two is a small edit if 5 sessions were meant.
- **YakRover vs. YakRobot**: the two source proposals disagree. This page uses **YakRover** throughout, matching `yakrover-protocols`, `#yak-rover`, and the YakRoboticsGarage org. Confirm before announcing.
- **Robot hardware**: the SIG's `yakrover-protocols` sub-project runs on a ~$150 ESP32-S3 rover, but this workshop's BOM is the **Freenove car kit + Raspberry Pi**. The `#sig` section deliberately omits the ESP32 board detail so the page doesn't contradict itself. If the workshop switches to the ESP32 rover, the whole `#robot` section changes.
- **Prices** in the BOM are indicative ranges, marked as such on the page. Nobody should be asked to buy before the exact part list is confirmed by email.
- No participant cap is stated (Kitcraft said 10–15); the proposal never set one.
