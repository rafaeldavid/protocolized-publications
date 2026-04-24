# Roadmap

Items selected for the current iteration slice, pulled from [`Backlog.md`](Backlog.md). Iteration labels use dates, not sequential numbers — timestamps are the convention across this project (see also `_Deploy-Archive/`, `lede-history.md`, `_Observations/weekly-briefs/`).

## Current slice · 2026-04-24 → 2026-05-01

**Goal:** ship small usability wins addressed in the v1 feedback, and close out the weekly-observation pipeline. Builds momentum without pre-committing to the larger redesign direction.

### Track C — usability per feedback (site-facing, visible)

| Item | Scope | Est. | Status |
|---|---|---|---|
| `COPY-001` | Tagline "Protocols for AI adoption" under the Protocolized wordmark, all 4 pages | 30 min | **shipped 2026-04-24** |
| `IA-006` | Homepage restructure (quadrantology-shape: one primary CTA) + nav relabel across all 4 pages | 3 h | shipping |
| `ASSESS-004` | Results-block CTAs: "send to a peer" + "discuss with the SIG" (reuses rafa-inbox worker → Discord forwarding) | 1 h | queued |
| `IA-003` | Case Studies top-level page (dedicated mount) — supersedes the anchor-link stand-in from IA-006 | 2 h | queued |

**Dropped from slice:** `ASSESS-001` (shorten option text) — absorbed into the larger `ASSESS-005` redesign. Not worth patching copy on a quiz we're about to rebuild.

### Track A — observations infrastructure (invisible but structural)

| Item | Scope | Est. |
|---|---|---|
| `OBS-003` | `update-lede.sh` runbook: accept a proposed lede from a weekly brief → edit `Artifact/publish/index.html` → republish → append to `lede-history.md`. One command. | 2 h |
| `OBS-001` part 2 | Seed the remaining ~25 bibliography entries into `_Observations/research/` | 2 h (delegated) |

**Target ship date:** 2026-05-01. Order: Track C first (visible progress), Track A after (infrastructure that the first accepted lede will need).

**Pre-ship archive:** create `_Deploy-Archive/2026-05-01-track-c-ship/` before republishing the first Track-C change. Post-ship archive once all of Track C is live.

## Next slice · 2026-05-02 → 2026-05-08

**Two design briefs to produce** (structured Q&A sessions, not implementation):

1. **Redesign direction brief** (`_Product/Design-Brief-Redesign-2026-05-08.md`) — aesthetic direction, nav architecture, content organization, designer-vs-Claude-frontend-design-skill question. Scopes the larger redesign arc.
2. **`ASSESS-005` diagnostic brief** (`_Product/Design-Brief-Assess-005-2026-05-08.md`) — question set, scoring model, data model, storage/privacy/consent, UX flow. Scopes the quiz v2 build.

These can run in parallel or sequentially depending on bandwidth. Both are pre-reqs for anything in the "Later" slice below.

## Later · redesign slice (dates TBD at end of Q&A)

The step-change redesign per the feedback — aesthetic refresh, IA restructure, new features (tooling evaluator, slide deck, lexicon, about page with contributors, etc.). Scope + sequencing set by the design brief from the prior slice. Likely 6–8 weeks of work.

## Shipped

### 2026-04-24
- Migration from `rafathebuilder-ZK/protocols-AI-capability-maturity-model` → `rafaeldavid/protocolized-publications` (canonical consolidation)
- `_Deploy-Archive/2026-04-24-pre-migration/` captured before migration (restorable snapshot)
- `_Product/` set up: README, feedback inbox, backlog, this roadmap
- `_Observations/` set up: schemas, 13 research entries seeded from bibliography (part 1 of OBS-001)
- `OBS-002` — weekly scan routine created on claude.ai/code/routines, first scheduled run 2026-04-27 09:02 Berlin
