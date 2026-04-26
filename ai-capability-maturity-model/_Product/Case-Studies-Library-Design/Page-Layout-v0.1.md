---
title: Case Studies Library — Page Layout v0.1
date: 2026-04-26
status: draft (Phase D plan, pre-implementation)
maintainer: rafa
---

# Page Layout · v0.1

Design plan for adding the 5 Class B prototype cards to `/case-studies/` alongside the existing 5 Class A cards. **No HTML yet** — this document locks the structural and editorial decisions before implementation.

## Goal

Take `/case-studies/` from a 5-card AI-adoption page to a **10-card library split into two named sections**, each with a brief introduction, while preserving the card markup the live site already uses (per the earlier decision to leave the existing page mechanics alone).

## Current state of `/case-studies/`

- Hero with H1 + breadcrumb-style secondary nav (NAV-002 shipped 2026-04-25)
- Single `<div class="cases-grid">` containing 5 `case-card` divs:
  Samsung · Klarna · Shopify · Air Canada · Boom
- Standard CTA block (Take the assessment + Schedule a call)
- Footer

## Target state

- Hero updated to acknowledge the two-section structure
- Two H2-delineated sections, each with a 1–2 paragraph intro + a `cases-grid`
- 10 cards total: 5 Class A (existing) + 5 Class B (new prototypes)
- Breadcrumb / secondary nav updated to handle 10 anchors

---

## Design decisions to lock

### 1. Section naming

Two sections, each gets a short noun phrase + an explanatory subtitle. Working candidates:

| Section | Working name | Alternatives |
|---|---|---|
| **A** (5 existing AI cases) | **Today's adoption stories** | "AI adoption · in progress" · "Live cases" · "What's happening now" |
| **B** (5 new tech-arc cases) | **Lessons from past tech eras** | "How protocols emerge" · "Tech-arc precedents" · "Historical analogs" · "The pattern at other scales" |

**Recommendation:** *Today's adoption stories* (A) and *Lessons from past tech eras* (B). Avoids Protocolized jargon ("protocols," "arcs," "precedents"); matches the user's editorial principle that case bodies talk about the case, not about the model.

### 2. Section ordering

**Two options:**

- **A → B:** lead with the AI cases (what readers came for), close with the historical lens. Matches reader expectation; existing page already starts with Class A; Class B reads as the "and here's why this pattern keeps recurring" follow-on.
- **B → A:** lead with historical precedent, then show the same shape in AI today. More pedagogical (pattern first, instances second). Risk: readers who came for the AI content scroll past historical material to find what they expected.

**Recommendation:** **A → B**. Reader-flow argument wins. The Class B section's intro can explicitly carry the "and here's the same shape three to seventy years earlier" framing.

### 3. Visual differentiation between sections

**Three levels of intensity:**

- **Subtle** (recommended): H2 heading + intro paragraph between the two grids. Same card style across both. The class is signalled by the section label and the level-pill colour, not by separate card design.
- **Medium:** subtle plus a soft background tint difference between sections (Class A on default `--bg`, Class B on `--surface`).
- **Strong:** distinct card variants per class (different border treatment, different drilldown CTAs).

**Recommendation:** **Subtle.** The cards already differentiate by `level-pill` colour; adding section-level visual difference risks fragmenting the page. Subtle keeps the library legible as one continuous library.

### 4. Card grid format

Currently one column of full-width cards. With 10 cards, that's a long scroll.

**Options:**

- **Keep one column** — 10 cards × ~150px each = ~1,500px scroll per section. Tolerable; matches existing reading rhythm.
- **Two columns** at desktop, one column at mobile — halves the scroll length but means two cards visible side-by-side compete for attention.
- **Two columns with a featured first card** — first card per section is full-width (the "anchor"), remaining four are 2×2 grid.

**Recommendation:** **Keep one column.** Cards are dense (drilldown content + question + mechanism + body); side-by-side reads as crowded. The user explicitly asked to "leave the website as is" mechanically — this is the lowest-risk choice.

### 5. Section intro copy

Each section needs 1–2 paragraphs (≤ 100 words) introducing what's in it and why. The intros should follow the same voice principle as the cards: plain language, no maturity-model jargon, no cross-references to the other section by name.

**Section A intro — proposed framing:**

> Recent AI deployments where the protocol layer's presence or absence drove the outcome. Each case names a specific organisation, a specific decision, and what happened next. Read these as live experiments — none of them are finished.

**Section B intro — proposed framing:**

> Earlier technology shifts whose adoption patterns are now visible in retrospect. Each case picks one historical moment — a memo, a mandate, a single ship voyage — where a coordination protocol installed itself, and traces what happened over the following decades. Read these for the shape, not the technology.

These are starter drafts. Lock during implementation.

### 6. Breadcrumb / secondary nav update

Current `NAV-002` breadcrumb on `/case-studies/` is a single horizontal row of 5 case-name links (Shadow Data Leak · Mandate Reversal · etc). With 10 cards, that row becomes too long for desktop and unusable on mobile.

**Three options:**

- **Two-row breadcrumb:** row 1 labelled "Today's adoption stories" with 5 links; row 2 labelled "Lessons from past tech eras" with 5 links. Same `.nav-secondary` styling, just two rows.
- **Compressed jump-to:** two top-level links — *Adoption stories* / *Past tech eras* — that scroll-anchor to each section's H2. Per-card breadcrumbs gone.
- **Hybrid:** two top-level section links + accordion-revealing the per-case breadcrumbs underneath each.

**Recommendation:** **Two-row breadcrumb.** Preserves the per-case wayfinding readers already get from NAV-002; the row structure visually previews the two-section organisation; existing `.nav-secondary` styling absorbs it without new CSS.

### 7. Hero

Current hero says something like "Five case studies — concrete cases at each level of the model" (paraphrasing CONTENT-008 framing). With 10 cards, the count and the framing both need an update.

**Proposed hero copy:**

- H1: *Case studies* (unchanged, or "Library" added — see open question below)
- Subtitle: *Recent AI deployments and the technology adoption patterns they echo.*
- Strapline (the small mono line): *10 cases · 2 sections · curated*

Pulls from the absorbed CONTENT-008 reframing intent (real-time changes everywhere → curated reference). Avoids "5 / 10" count dependence in the H1 itself so adding cards later doesn't break copy.

### 8. Standard CTA

Keep as-is — the existing "Take the assessment / Schedule a call" block sits below the second cases-grid.

### 9. Mobile

The two-row breadcrumb wraps to multiple lines on narrow viewports — known good behaviour from existing `.nav-secondary`. The cards are already mobile-responsive in current markup. No changes needed.

---

## Implementation order (Phase D, after this is approved)

1. Update hero copy (H1, subtitle, strapline)
2. Update breadcrumb to two-row pattern
3. Insert H2 + intro for Section A *Today's adoption stories* above the existing `cases-grid`
4. Insert H2 + intro for Section B *Lessons from past tech eras* below the existing grid
5. Add new `<div class="cases-grid">` for Class B with the 5 prototype HTML cards (Excel · Email/Gates · Git · EDI · Containerization)
6. Verify anchor IDs match the breadcrumb links
7. Single-page render check (desktop + mobile)
8. Republish to `plush-nutmeg-h2rj.here.now`

Estimated scope: ~30 minutes of editing + 10 minutes of QA. Backlog: this completes the Phase D track of IA-007 for the v1 launch.

---

## Open questions for the user before implementation

1. **Section names** — go with *Today's adoption stories* / *Lessons from past tech eras*, or pick alternatives from the table above?
2. **Section order** — confirm A → B (recommended) or flip to B → A?
3. **Visual differentiation** — confirm subtle (recommended) or want medium/strong?
4. **Hero H1** — keep as *Case studies* or change to *Case studies library* (more accurate to the new structure but adds a word)?
5. **Section intro copy** — accept the proposed drafts above, or want alternatives drafted?
6. **Breadcrumb pattern** — confirm two-row (recommended) or prefer compressed *jump-to* with no per-case links?
7. **Anything else to design before HTML lands** — page-level filtering chips? Search box? "Why these case studies" explanatory block? (All defaultable to no for v1, per user's earlier "leave website mostly as-is" direction.)

Decide these in any order; once locked I'll write the HTML and the section-intro copy in a single editing pass.

---

---

## Decisions locked (2026-04-26)

| Question | Locked answer |
|---|---|
| 1. Section names | **Today's AI Adoption Stories** (A) · **Lessons from the Past** (B) |
| 2. Order | **A → B** |
| 3. Visual differentiation | **Subtle** (H2 + intro per section, same card style across both) |
| 4. Hero H1 | **Case Studies** (unchanged) |
| 5. Section intros | redraft to factual-report voice (drafts below) |
| 6. Breadcrumb pattern | **Compressed jump-to** — only the two section names, not per-case links |
| 7. Anything else | **YES — collapsed-by-default cards** (new requirement, see below) |

### NEW requirement — collapsed-by-default cards

**User direction:** "Case Studies should be presented as name and summary, then click to expand for more information, so people can scroll easily and then pick the one they want to read as a full card."

This is a meaningful change to the existing page mechanics — the current 5 cards render fully expanded by default. The new pattern applies to all 10 cards (existing + new).

**Two-level disclosure hierarchy (per card)** *(locked 2026-04-26 — collapsed from a 3-level proposal):*

```
LEVEL 0 — collapsed (default state)
  ├── level-pill (e.g. "Level 1 — Shadow")
  ├── case-org (linked title with ↗ external arrow)
  ├── case-sector (subtitle line)
  ├── case-mechanism (1-line summary — the existing field doubles as the collapsed-state summary)
  └── "Read full case ↓" toggle button

LEVEL 1 — card expanded (single click reveals everything)
  ├── case-body (2–3 sentence narrative)
  ├── case-question (1-line diagnostic question)
  └── case-deep (~140 word deep dive — what was previously the drill-content under a separate "Why this is the L<n> mode" toggle)
```

The previous Level 2 (the second-click drilldown) is folded into Level 1 — clicking *Read full case* reveals the full body, the question, and the deep-dive paragraph in one move. No second click required.

**Implementation approach:**

- Reuse the existing `toggleContent(this)` JS function used by the drilldown buttons. The function already handles a `data-closed` / `data-open` button-text swap and toggles a sibling content block's display.
- Add a new wrapper `<div class="case-detail">` around `case-body` + `case-question` + the existing drilldown markup. Default `display: none`.
- Add a new `<button class="expand-toggle case-toggle" onclick="toggleContent(this)" data-closed="Read full case ↓" data-open="Hide ↑">Read full case ↓</button>` between `case-mechanism` and `case-detail`.
- CSS: `.case-card .case-detail { display: none; }` and `.case-card.expanded .case-detail { display: block; }` (or rely on the existing toggleContent class-handling).
- URL-anchor behavior: when a reader follows `/case-studies/#excel-visicalc`, JS auto-expands that card before scrolling. Small `DOMContentLoaded` hook reads `location.hash` and clicks the matching `.case-toggle`.
- Keyboard accessibility: card toggle button is keyboard-focusable; Enter/Space activates; `aria-expanded` attribute toggled.

This affects the existing 5 cards as well as the new 5 — they all get the new wrapper + toggle.

### Section intros — final factual drafts

**Section A — Today's AI Adoption Stories:**

> Five recent organizational AI deployments. Each card names the company, the year, what was deployed, and the outcome reported in public sources. Cases range from Level 1 shadow adoption to Level 3 designed integration.

**Section B — Lessons from the Past:**

> Five technology adoption arcs from earlier decades. Each card names the technology, the originating event or actor, and the protocol pattern that emerged. Cases span 1956 to 2005 and Levels 1 through 5.

Both intros: factual-report voice, no editorial framing, no "read these as..." literary moves.

### Breadcrumb — final form

```html
<div class="nav-secondary">
  <a href="#adoption-stories">Today's AI Adoption Stories</a>
  <a href="#lessons-from-the-past">Lessons from the Past</a>
</div>
```

Two links, both anchor-scroll to the matching H2 section. Per-case anchors (`#shadow-data-leak`, `#excel-visicalc`, etc.) still exist on each card, just not in the breadcrumb — usable for direct deep-linking and the auto-expand-on-hash behavior.

### Updated implementation order

1. Update hero — keep H1 *Case Studies*; refresh subtitle to acknowledge the two-section structure
2. Replace breadcrumb with two-link version
3. Add Section A intro paragraph and `<h2 id="adoption-stories">Today's AI Adoption Stories</h2>` above the existing `cases-grid`
4. Add `<div class="case-detail">` wrapper + `case-toggle` button to each of the existing 5 cards (Samsung, Klarna, Shopify, Air Canada, Boom)
5. Add `<h2 id="lessons-from-the-past">Lessons from the Past</h2>` + Section B intro paragraph + new `cases-grid` containing the 5 Class B prototype cards (Excel, Email/Gates, Git, EDI, Containerization), each in the same collapsed-by-default pattern
6. Small CSS additions for `.case-detail { display: none }` and `.case-card.expanded` state
7. Small JS addition: `DOMContentLoaded` hook that reads `location.hash` and auto-expands matching card
8. Single-page render check (desktop + mobile)
9. Republish to `plush-nutmeg-h2rj.here.now`

Estimated scope: ~45 min edit (up from 30 min because of the new expand pattern across all 10 cards) + 15 min QA.

---

## Out of scope for v0.1 page layout

- Per-card sub-page splitting (defer to a future IA-001-style phase)
- Filtering / search UI (defer until volume justifies — likely > 20 cards)
- Visual refresh aligned with DESIGN-001 (the whole-site aesthetic refresh is a separate workstream; this layout uses existing card markup so it inherits whatever DESIGN-001 lands later)
- Image / multimedia per card (template doesn't support yet; v0.2 if needed)
- Cross-class linking surfaced inline on cards (the `class_a_pairing` metadata exists but stays metadata for now per the editorial self-containment principle)
