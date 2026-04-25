# Roadmap

Items selected for the current iteration slice, pulled from [`Backlog.md`](Backlog.md). Iteration labels use dates, not sequential numbers — timestamps are the convention across this project (see also `_Deploy-Archive/`, `lede-history.md`, `_Observations/weekly-briefs/`).

## Current slice · 2026-04-25 → 2026-05-08

**Goal:** lock down the site for peer testing of the v0.9 archetype assessment, then move into editing depth (content polish + voice consistency across the deliverables).

### Track A — peer-testing readiness (next up)

| Item | Scope | Est. | Status |
|---|---|---|---|
| `OBS-004` | Contact form worker proxy — move Discord webhook off the client. Rate limit + honeypot + spam filter. **Ship before driving outside traffic.** | 2 h | queued (next) |
| (editing pass) | Content / voice / language consistency across homepage, levels, case studies, assessment, litepaper. Tighten copy for peer audience. | 6 h | scoping |

### Track B — content depth (parallel)

| Item | Scope | Est. | Status |
|---|---|---|---|
| `IA-002` | About page — introduces the SIG, names contributors, explains Protocolized / Protocol Institute / SOP relationship | 4 h | gated on contributor list + Protocol Institute naming decision |
| `OBS-001` part 2 | Seed remaining ~25 bibliography entries into `_Observations/research/` | 2 h | queued |
| `OBS-003` | `update-lede.sh` runbook | 2 h | queued |

**Target ship date:** 2026-05-08.

## Next slice · 2026-05-09 → 2026-05-22

Quiz extensions and assessment-page restructure:

| Item | Scope |
|---|---|
| `ASSESS-006` | Tooling assessment (separate quiz, 8–12 items) |
| `ASSESS-007` | Protocol-understanding assessment (separate quiz, 8–12 items) |
| `FEATURE-003` | Multi-quiz assessment hub — three cards on `/assessment/` (archetype + tooling + protocol-literacy), inline expand pattern. Tooling/protocol show "Coming soon" until 006/007 ship. |

## Later · design + structural

| Item | Scope |
|---|---|
| `DESIGN-001` | Aesthetic refresh (whole site) — palette, typography, visual system. After peer-feedback cycle reveals what's working. |
| `DESIGN-003` | Pyramid diagram, 5 level-highlighted variants. Pairs with maturity card on assessment result. |
| `IA-001` phase B | Split `/levels/` into 5 per-level URLs (deep linkability + SEO) |
| `BRAND-002` | Amplify distinctive terminology in headlines / pull quotes |
| `IA-004` | Lexicon page (stretch) |

## Shipped

### 2026-04-25 — Quiz v0.9 launch + post-launch polish
- **Assessment v0.9 design** (`_Product/Assessment-v2-Design/`): full design lineage from v0.6 evidence model → v0.7 forced-choice → v0.8 simulation testing → v0.9 hierarchical placement. 88% match rate validated against 100-simulation harness.
- **Quiz v0.9 shipped** to `https://protocolized.dev/assessment/` (slug `humble-gorge-n5j4`): 25-question forced-choice quiz (scope as Q1 + 24 paired statements), hierarchical scoring on 7 axes, dual archetype + maturity output.
- **Result page rich rendering**: tarot mascot per archetype (10 unique inline SVG icons), level badge per maturity (5 distinct icons + progress meter), full archetype profile (10 expand sections matching maturity card depth).
- **Admin shortcut**: `?archetype={Name}&level={Lkey}` deep-link for review and screenshots.
- **NAV-002**: breadcrumbs on `/case-studies/`, `/levels/`, `/assessment/` (litepaper-style `.nav-secondary` row).
- **CONTENT-003**: case studies page expanded 3 → 5; aligned to homepage list (Samsung · Klarna · Shopify · Air Canada · Boom).
- **Mobile fixes**: homepage hamburger menu wired up (was broken — no onclick / no JS / no `.open` CSS); footer reformatted for mobile across all 6 pages (stacked, centered, tap-target padding).
- **CTA polish**: result-page buttons centered with identical sizing; standard CTA above footer centered. Print button removed.
- **Copy edit**: scope question on `/assessment/` reframed as Q1 of 25 (no white box, no "six months from now" line); homepage hero subtitle updated.

### 2026-04-24
- Migration from `rafathebuilder-ZK/protocols-AI-capability-maturity-model` → `rafaeldavid/protocolized-publications` (canonical consolidation)
- `_Deploy-Archive/2026-04-24-pre-migration/` captured before migration (restorable snapshot)
- `_Product/` set up: README, feedback inbox, backlog, this roadmap
- `_Observations/` set up: schemas, 13 research entries seeded from bibliography (part 1 of OBS-001)
- `OBS-002` — weekly scan routine created on claude.ai/code/routines, first scheduled run 2026-04-27 09:02 Berlin
- `COPY-001` — Tagline "Protocols for AI adoption" shipped under Protocolized wordmark
- `IA-006` — Homepage restructure (quadrantology-shape: one primary CTA) shipped
- `IA-001` phase A — `/levels/` page split out from artifact
- `IA-003` — Case Studies page promoted to top-level mount
- Three published pages split from artifact: `/assessment/`, `/case-studies/`, `/levels/`
