# CLAUDE.md — Durable AI Adoption (lecture deck)

## What this is
A standalone **reveal.js** lecture deck, *Durable AI Adoption* — a ~20–30 min talk (15 slides) derived from the AI Adoption Guide. Single self-contained `index.html` + `assets/`. It is a **separate artifact** from the live guide deck (`../html/slides.html`, slug `plush-muse-q9bz`, ai.protocolized.dev) — do not touch that one when editing this.

- **Live (custom domain):** https://ai.protocolized.dev/townhallslidesjune2026/ — also at `https://deep-harbor-qm8w.here.now/`.
- The custom mount is a here.now **link** (slug → path on a custom domain): `POST https://here.now/api/v1/links` with `{"location":"townhallslidesjune2026","slug":"deep-harbor-qm8w","domain":"ai.protocolized.dev"}` and the account API key. The domain `ai.protocolized.dev` is active on the account (root serves the guide, slug `plush-muse-q9bz`). Re-publishing to the slug updates what the path serves automatically — no need to re-create the link.

## Deploy
```bash
# from this directory
bash ~/.claude/skills/here-now/scripts/publish.sh . --slug deep-harbor-qm8w --client claude-code --title "Durable AI Adoption — Lecture"
```
The publisher sometimes prints "unchanged, skipped" even after edits — verify with `curl -s <url> | grep <new-text>` rather than trusting that line.

## Brand
Institute vein (cobalt `#0064ff`) on warm paper `#f9f8f5`. Fonts (loaded via Google Fonts in `<head>`): **Instrument Serif** = all headings (weight 400, never bold), **Lora** = body prose, **Outfit** = UI/eyebrows/labels/badges. Accent rust `#d85a30` only via `accent-deep #9e3d18` for small text (AA-safe). Source of truth for tokens: `../../../protocolinstitute-brandkit/` (brand.json / brand.css / `scripts/contrast-check.mjs`). Favicon = brand P-mark at `assets/favicon.svg`.

## Content sources (keep faithful)
- Prose / cases: `../drafts/deployment-guide-v0.6.md`.
- **Dual-track level names** (the canonical mapping) came from the official deck `../html/slides.html` ("The dual nature of AI adoption"): Cultivated = Play · Kit · Practice · Vernacular · Fluency; Governed = Shadow · Sanctioned · Engine · Infrastructure · Planetary.
- Tone is **adoption-positive**, not risk-led: lead with opportunity / success patterns; failures appear as secondary captions. Thread the two tracks (governed + cultivated) throughout.

## Layout architecture (non-obvious, don't re-break)
- `Reveal.initialize({ center:true, controls:true, controlsLayout:'edges', slideNumber:false, ... })`. `center:true` does the vertical centering — do **not** add `height:100%` to `.reveal .slides section` (it defeats centering and pushes content into the fixed wordmark/footer; this bug was fixed once already).
- The wordmark (top-left) and `#deckfoot` (bottom) are **fixed chrome OUTSIDE `.reveal`**. Per-slide `.foot` blocks are `display:none` data only; a small script mirrors the current slide's chapter + position ("Chapter 2 · 7 / 15") into `#deckfoot`, and switches the wordmark to a light variant on dark slides (`data-background-color` luminance check). Slide position is shown in the footer, not via reveal's corner number (turned off to avoid overlapping the edge arrows).
- Buttons: the global `.reveal a` cobalt color outranks `.btn` — button color rules are scoped `.reveal a.btn{...}` so white/mint button text shows. Keep that.
- **Spacing rhythm:** label/kicker→title and title→body gaps are ≥8px (compact components like the ladder use ~5px). When adding a card label above a title, give it `display:block; margin-bottom:~9px` or it collides.

## Verify changes (always)
Serve + screenshot at native size, because reveal scales:
```bash
python3 -m http.server 8765   # then use Playwright MCP at 1280x720, cache-bust with ?v=N
```
Walk each slide; check for overlap with the wordmark/footer, content overflow, and contrast.

## Slide map (15)
1 Title · 2 Already adopting (positive) · 3 Paradigm not app · **4 The path so far (4-era two-track timeline)** · 5 Two-tracks thesis · 6 Govern the outputs · 7 Divider "Five levels, two tracks" (balance image) · 8 Dual maturity ladder (Shadow greyed=passed, **Kit highlighted="market is now"**, per-level thumbnails) · 9 Examples across both paths · 10 Historical analogue (tractor/kit) · 11 Success patterns (blue cards; grey "PREVENTS·" failure block) · 12 New nature of work · 13 Diagnose (assessment button → ai.protocolized.dev/#assessment) · 14 Workshop announcement (mint button → AI Kitcraft page) · (workshop is the dark slide).

## Assets
`assets/` holds the favicon, per-level ladder thumbnails (`lvl1-play`…`lvl5-fluency`, sourced from `../html/images/`), the title hero (`primordial-soup.webp`), and the divider balance image (`duality-balance.png`, originally brand kit `retro-vintage__sop-2025-accelerating-order` — that library was retired in favour of the 8-piece house art set, so this local copy is now the only source). ~2MB total; convert PNGs→WebP if leaner is needed. Remove an asset from `assets/` only after confirming `index.html` no longer references it.

## Open threads
- Both custom mounts are LIVE (`ai.protocolized.dev/townhallslidesjune2026` and `.../kitcraft`); slide 14's Kitcraft button points to `https://ai.protocolized.dev/kitcraft/`. Assessment button → `https://ai.protocolized.dev/#assessment` (an anchor in the live guide deck).
- Possible reorder: the timeline (4) and the two-tracks thesis (5) are adjacent and slightly overlap — could merge/reorder if desired.
