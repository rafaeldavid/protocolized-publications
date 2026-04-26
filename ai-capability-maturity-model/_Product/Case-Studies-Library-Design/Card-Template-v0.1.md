---
title: Case Studies Library — Card Template v0.1
date: 2026-04-26
status: draft (Phase C of IA-007)
maintainer: rafa
---

# Card Template · v0.1

A single template for both case classes (A — AI adoption stories; B — technology-arc precedents). One template keeps the library legible to the reader; the editorial *framing* differs by class.

- **Class A** cards tell a specific story arc with named actors, a turning point, and a concrete outcome — sometimes failure, sometimes success.
- **Class B** cards tell a *value-emergence* story: what the protocol enabled, how it became infrastructure, how it stayed in place. Class B cards are not failure-pairings unless the failure is itself the value (e.g. BlackBerry's collapse demonstrating the L1/L2 incumbent pattern). The locked Class B-5 selection (`Inventory-v0.1.md` "Class B-5 selection (locked)") follows this principle.

## Schema

### Required frontmatter (YAML)

```yaml
slug: string                        # anchor id, kebab-case (e.g. excel-visicalc)
title: string                       # full card title (≤ 60 chars; readable)
class: A | B                        # case class
level: L1 | L2 | L3 | L4 | L5 | "spans"   # primary maturity level mapped
era: string                         # year range or single year ("1979–present", "1995", "1956–1970s")
function:                           # one or more — list, not freeform
  - engineering                     # canonical values (extend list as cases land):
  - finance                         #   engineering, finance, marketing, sales,
  - operations                      #   operations, supply-chain, hr, legal,
  - supply_chain                    #   customer-service, content, all
  - all
archetypes:                         # 0+ from the canonical 10
  - Folkway                         # Vanguard · Traveller · Architect ·
  - Guild                           # Integrator · Tinkerer · Ratifier ·
                                    # Warden · Broker · Folkway · Guild
class_a_pairing: slug?              # Class B only: the Class A this card sharpens
                                    # (or null if standalone)
status: draft | review | live       # publication state
sources_count: int                  # external authoritative sources cited
```

### Required body sections (in order)

1. **One-line frame** — ≤ 25 words. Used as thumbnail / list-view subtitle.
2. **The case** — 2–3 paragraphs. What happened, when, who. For Class B, the event/era anchor; for Class A, the specific incident.
3. **What the protocol enabled** (Class B) / **What the protocol absence cost or earned** (Class A) — 1–2 paragraphs. The substantive lesson.
4. **For AI today** — 1 paragraph. How this case sharpens reasoning about an L<n> AI-adoption decision today, *or* (for Class B) which Class A failure or success it pairs with.
5. **Website card (HTML)** — the rendered card as it would appear on `/case-studies/`, in the same `<div class="case-card">` markup as the existing live cards (Samsung, Klarna, Shopify, Air Canada, Boom). Includes:
   - Anchor `id` matching the slug
   - `level-pill` with "Level <N> — <Name>"
   - `case-org` with the canonical external anchor URL (primary source preferred)
   - `case-sector` (function- or domain-shaped — for cases without a single org, use the function/domain rather than an org name)
   - `case-body` (≤ 75 words, distilled from section 2)
   - `case-mechanism` (one-line summary of the protocol pattern, ≤ 20 words)
   - `case-question` (one diagnostic question matching the level's framing — turns the case into an L<n> reader-facing prompt)
   - Drilldown button + `drill-content` (~100–150 words; matches the live cards' "What happened next" / "Why Level 3 and not higher" depth). For Class B success-mode cards, default CTA copy: "Why this is the L<n> success mode ↓"
   - **Render notes** below the HTML block: anchor id, level-pill wording, sector-line shape, external-link choice, drilldown CTA copy
6. **Sources** — 3–6 bulleted citations with URLs and dates. Primary first, secondary second.

### Optional body sections

- **Era markers** — for spanning-arc cases. A timeline of 3–6 anchored dates, each with a one-line significance note. Recommended for L4, L5, and any Class B "spans" entry.
- **Planetary scale-marker** — for L4/L5 cards. The chokepoint, infrastructure layer, or geographic constraint that makes the case planetary. (Suez canal for L5 containerization; the Walmart loading-dock RFID-mandate ripple for L4 EDI; etc.)
- **Where else this case appears** — cross-page placement reference (homepage, levels, litepaper §, blog). Useful for the future library's "see also" layer; pulls from the inventory's cross-page placement audit.

## Worked example

The full Excel/Visicalc card, written to this template, lives at:

`prototypes/B1-excel-visicalc.md`

Read it as the canonical realisation of the template. The other four locked picks (Email/Gates, Git, EDI, Containerization) follow the same shape.

## Voice principles (across all cards)

- **Cards are self-contained.** No cross-references to other Class A or Class B cases in body text. The reader's first encounter with each card should not require knowledge of any other card. The case stands on its own; the cross-class teaching pair (e.g. Excel ↔ Samsung) lives in metadata (`class_a_pairing`) and gets surfaced by the page chrome, not by the card's prose.
- **Body text describes the case in plain language.** Maturity-model references (L1, L2, archetype names like "Folkway", protocol-trade jargon like "the substrate-emergence pattern") **do not appear in body text**. They live in:
  - **Frontmatter metadata** — `level`, `archetypes`, `class_a_pairing`
  - **Level pill** — "Level 1 — Shadow"
  - **Drilldown CTA copy** — labels like "Why this is the L1 success mode" function as titles for the drilldown content, not assertions in the prose itself
  Body paragraphs talk about what happened, when, who, why — and how the same shape shows up today, in plain practitioner language. The maturity model is the lens the reader brings; the case provides the facts.
- **Terse, factual, citation-grade.** Match the `_Observations/research/` voice. Avoid editorialising; let the case carry the lesson.
- **No hero narratives.** Successful cases are described mechanically (what shipped, when, what conventions emerged), not as visionary leadership stories. Apple-Story tropes get cut.
- **Quote verbatim, sparingly.** A well-chosen quote per card is better than three paraphrases.
- **Class B cards do not predict.** They describe what the protocol layer ended up doing in retrospect. Inferences "for AI today" are the only forward-leaning sentences in the card; everything else is past tense.

## Open questions

These are template-shape questions worth flagging for Phase D (implementation):

1. **Card length.** Worked example (Excel) is ~600 words of long-form body + ~150 words of frontmatter + sources block + ~75-word body in the rendered website card. Is this the right ceiling, or should the long-form body be tighter?
2. ~~**HTML rendering.**~~ → **Resolved 2026-04-26.** Each prototype card now carries a "Website card (HTML)" section that mirrors the existing `/case-studies/` markup. Live page stays unchanged for now (per user direction); when the library ships, the rendered HTML in this section is the deliverable.
3. ~~**Cross-class linking.**~~ → **Resolved 2026-04-26.** Cross-class pairings live in `class_a_pairing` metadata only — surfaced by page chrome, not by the body prose of either card. Body text is self-contained per the voice principle above.
4. **Multi-media.** Excel/Visicalc, mobile, and containerization cards all benefit from images/screenshots. The template is text-only for now; image fields can be added in v0.2 once the visual system (DESIGN-001) is locked.

## What this template doesn't yet do

- Doesn't enforce a card-level archetype-coverage budget (the inventory's "Broker has no card" gap stays unaddressed).
- Doesn't carry an explicit "rebuttal" or "what readers commonly misread" field. Two of the locked picks (Excel, Cloud-if-revisited) have well-known mythologisations the card might want to inoculate against; the worked example absorbs this into the body, but a dedicated field could surface it.
- Doesn't carry a "research depth flag" — i.e. no machine-readable signal that this card is grounded in 1 vs 5 sources. Phase D may want this for editorial review.

## Promotion to v1.0

This is v0.1 — drafted to fit the locked Class B-5. Promote to v1.0 once all 5 prototype cards exist and have been reviewed; Phase D implementation builds the live page against v1.0.
