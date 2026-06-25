# Brand kit — backlog & decision log

A traceable record of issues and opportunities found **while building real
artifacts** with this kit (the *Durable AI Adoption* lecture deck and the *AI
Kitcraft* workshop landing page, June 2026), and how each was resolved. New
findings go here with the same shape: **Finding → Pattern → Resolution → Status.**

## The larger pattern (why these happened)
The kit was a **specification** (tokens + rules), not a **system you build with**.
Both artifacts used almost none of the `.pi-*` classes and re-implemented buttons,
nav, cards, spacing, and contrast handling inline — re-introducing the same bugs
each time. Five root patterns:

1. **Spec-without-implementation gap** — tokens ≠ a usable system, so consumers re-derive and re-bug.
2. **Assertions rot into lies when not enforced** — brand.json *claimed* AA on accent fills; it was false.
3. **A false constraint reality broke on day one** — "no dark mode," yet both artifacts had dark hero/CTA bands.
4. **No shared substrate → divergence** — deck and landing solved identical problems differently.
5. **Designed for the wrong reader** — a human design doc, but the builders are agents moving fast; quality was caught reactively by the user, not proactively by the kit.

v1.1 addresses all five: a real component + behavior layer (`brand.css` + `brand.js`),
a first-class dark-surface contract, executable verification (contrast + preflight +
a Playwright definition-of-done), and agent-builder docs.

---

## Resolved in v1.1

### Accessibility & contrast
- **A1 — `brand.json` asserted "white meets AA on accent fills"; it was false** (white-on-accent 3.87:1; accent-on-tint **3.36:1**). *Found: Featured-badge contrast check.* → Built `scripts/contrast-check.mjs`; added `accent-deep` (#9e3d18); turned `color.accessibility` into a tested contract. **[done]**
- **A2 — Gutter nav failed AA over dark bands** (active link **1.23:1** on the dark hero/apply; the inactive grey `#a3a3ab` was already **2.36:1** on paper). *Found: Kitcraft gutter review, measured in Playwright.* → Dark-surface tokens; nav base = `text-secondary` (AA); brand.js flips `.pi-on-dark`; active state is the cobalt **line** (survives the flip). 4 on-dark pairings added → **21/21 pass**. **[done]**
- **A3 — "No dark mode" was a false constraint** (Pattern 3). → Reframed principle: dark **surfaces** are first-class (`surface-dark`, `on-dark`, `on-dark-muted`, `on-dark-line`) + auto-flip; dark **mode** (a toggle) still out. **[done]**
- **A4 — `accent` misused as text.** → Per-token text-safety documented; `accent-deep` for text; both in the contract. **[done]**

### Typography
- **T1 — Orphan/widow words in titles & paragraphs.** *Found: Kitcraft "hanging words".* → `h1–h4{text-wrap:balance}` + `p,li{text-wrap:pretty}` shipped as a default in brand.css. **[done]**
- **T2 — "Is this a new font?"** was a `.lead` (grey/larger) vs body (dark) mismatch — same font. *Found: deck slide-5 font review.* → Rule documented (use lead only as the dek under a heading) + gotcha. **[done]**
- **T3 — Two-serif pairing reads as "too many fonts."** → Documented as deliberate (display serif + reading serif). **[done]**

### Spacing & layout
- **S1 — Kicker→title gaps of 1px (cards) and 0px (ladder); title→body 7px.** *Found: deck + Kitcraft spacing reviews, measured in Playwright.* → Rhythm tokens (`gap-label-title` 9px, `gap-title-body` 10px, `gap-group` 20px) baked into `.pi-eyebrow` / `.pi-section-head`; rule + qc gap check. **[done]**
- **S2 — "Scrunched-left" single-column text.** *Found: Kitcraft alignment.* → `.pi-section-head` centered-intro pattern. **[done]**

### Components
- **C1 — Left-gutter nav rebuilt from scratch** (scroll-spy + on-dark + mobile). *Found: Kitcraft nav request.* → `.pi-gutter` + brand.js scroll-spy + on-dark flip. **[done]**
- **C2 — Button text invisible** (white on cobalt) from a global `a{color}` override. *Found: deck slide-13 buttons.* → `a.pi-btn` color rules outrank `a`; `.pi-btn--on-image` variant; gotcha + preflight check. **[done]**
- **C3 — Card images didn't fit** (181px image in a 231px card) from a global `img{max-width:100%}`. *Found: Kitcraft foundations, measured in Playwright.* → `.pi-card--media` (`max-width:none` + `overflow:hidden`); gotcha + preflight check. **[done]**
- **C4 — "Image with CTA overlaid" pattern** (deck CTA slides). → `.pi-figure-cta` + scrim + `.pi-btn--on-image`. **[done]**
- **C5 — Multi-column list cramped on mobile.** *Found: Kitcraft mobile.* → `.pi-cols-2` collapses to one column <680px. **[done]**
- **C6 — Mobile menu needed** (the gutter is desktop-only). → `.pi-hamburger` + `.pi-mobile-menu` + brand.js toggle. **[done]**

### Process / verification
- **P1 — Quality was caught reactively by the user, not the kit** (every fix surfaced via render-and-measure). → `scripts/preflight.mjs` (static lint), `scripts/qc.md` (Playwright definition-of-done), and a `quality` section + DoD in llms.txt. **[done]**
- **P2 — Favicon re-wired per artifact.** → `build.head` drop-in snippet; favicon in `agent_files`. **[done]**
- **P3 — Link-preview vs decorative imagery confusion.** → Documented: `og:image` for link cards (`.pi-card--media`); curated artwork for decoration. **[done]**

---

## Deferred (with reason)
- **Showcase `index.html` demo of the v1.1 components** — the kit's own page still demonstrates v1.0 classes. Deferred to keep this change focused on the substrate + verification + docs; the new components are specified and live in `brand.css`/`brand.js`. *Next.*
- **CI wiring** — run `contrast-check` + `preflight` on every push. Recommended; not yet configured (no CI in this repo).
- **Self-hosting Computer Modern** (the brand-preferred serif at the front of the stack) — still falls back to the loaded Instrument Serif. Out of scope.
- **A single-serif variant** for consumers who find the two-serif pairing too much — considered; not built (the pairing is intentional).
