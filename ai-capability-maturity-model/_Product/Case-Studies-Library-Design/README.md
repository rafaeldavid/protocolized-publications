# Case Studies Library — design

Workstream for IA-007 (`Backlog.md`): converting the current 5-card `/case-studies/` page into a **library** with two distinct case classes, a unified card template, ~15+ entries at launch, and inline placement of select cases on other site surfaces.

This folder mirrors `_Product/Assessment-v2-Design/` — design lives here as iterating drafts; nothing in here is published until promoted.

## Process (mirrors the Quiz-v0.8 workflow)

```
Phase A — Inventory & taxonomy
   audit every case study referenced anywhere in the repo;
   tag by class (A/B), level (L1–L5), archetypes, function, era;
   surface gaps and overlaps.
   →   Inventory-v0.1.md

Phase B — Page design brief
   based on the inventory, recommend page architecture, card template,
   filtering/search, inline-pepper rules, layout pattern (with UX
   reference to comparable library/portal sites).
   →   Spec-v0.1.md

Phase C — Card template + content prototypes
   lock the card template, write 2–3 prototype Class A and Class B
   cards in the new template; iterate.
   →   Card-Template-v0.1.md  +  prototype cards in /prototypes/

Phase D — Implementation
   build the page; replace /case-studies/. Backfill remaining cards.
```

Phases A and B are the upfront work. Phase C blocks on direction approval from Rafa. Phase D is implementation against an approved spec.

## Inputs

- `_Product/Backlog.md` IA-007 (the spec brief)
- `_Observations/research/` (32 entries, of which ~6 are AI-adoption case studies)
- `Litepaper/litepaper-bibliography.md` (additional referenced cases not yet seeded)
- `case-studies/index.html` (current 5-card surface)
- `homepage/index.html`, `levels/index.html`, `Litepaper/html/index.html`, `Blog-Post/SIG-update/publish/index.html` (cross-page mentions)
- The 6 seed Class B cases from IA-007: containerization, Excel/spreadsheets + org design, corporate email adoption, Git + CI/CD, EDI in retail/manufacturing, internet protocols

## Outputs (this folder)

| File | Phase | Status |
|---|---|---|
| `Inventory-v0.1.md` | A | _drafting_ |
| `Spec-v0.1.md` | B | _pending Phase A_ |
| `Card-Template-v0.1.md` | C | _pending Phase B approval_ |
| `prototypes/` | C | _pending_ |

## Out of scope

- Visual design of the page (waits for DESIGN-001 — the whole-site aesthetic refresh).
- Per-card sub-page split (IA-001 phase B pattern, applied to cases). Defer until a card has earned its own page.
- Auto-import from any external source. Class B cards are hand-written from primary sources.
