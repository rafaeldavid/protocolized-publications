# Roadmap

Items selected for the current iteration slice, pulled from [`Backlog.md`](Backlog.md). Iteration labels use dates, not sequential numbers — timestamps are the convention across this project (see also `_Deploy-Archive/`, `lede-history.md`, `_Observations/weekly-briefs/`).

## Current slice · 2026-04-24 → 2026-05-01

**Goal:** ship small usability wins addressed in the v1 feedback, and close out the weekly-observation pipeline. Builds momentum without pre-committing to the larger redesign direction.

### Track C — usability per feedback (site-facing, visible)

| Item | Scope | Est. |
|---|---|---|
| `COPY-001` | Tagline "Protocols for AI adoption" on homepage hero (and nav chrome across site) | 30 min |
| `ASSESS-001` | Shorten assessment response option text to short phrases + smaller detail underneath | 1 h |
| `ASSESS-004` | Results-block CTAs: "send to a peer" + "schedule a call" (Calendly or email) | 1 h |
| `IA-003` | Case Studies top-level page (3-paras version pointing at the 5 existing research entries) | 2 h |

### Track A — observations infrastructure (invisible but structural)

| Item | Scope | Est. |
|---|---|---|
| `OBS-003` | `update-lede.sh` runbook: accept a proposed lede from a weekly brief → edit `Artifact/publish/index.html` → republish → append to `lede-history.md`. One command. | 2 h |
| `OBS-001` part 2 | Seed the remaining ~25 bibliography entries into `_Observations/research/` | 2 h (delegated) |

**Target ship date:** 2026-05-01. Order: Track C first (visible progress), Track A after (infrastructure that the first accepted lede will need).

**Pre-ship archive:** create `_Deploy-Archive/2026-05-01-track-c-ship/` before republishing the first Track-C change. Post-ship archive once all of Track C is live.

## Next slice · 2026-05-02 → 2026-05-08

**Foundational Q&A for the redesign direction.** Not implementation — a structured conversation to settle: aesthetic direction, nav architecture, content organization, designer-or-Claude-frontend-design-skill question. Output: a design brief (`_Product/Design-Brief-2026-05-08.md`) that becomes the scope document for the larger redesign slice.

## Later · redesign slice (dates TBD at end of Q&A)

The step-change redesign per the feedback — aesthetic refresh, IA restructure, new features (tooling evaluator, slide deck, lexicon, about page with contributors, etc.). Scope + sequencing set by the design brief from the prior slice. Likely 6–8 weeks of work.

## Shipped

### 2026-04-24
- Migration from `rafathebuilder-ZK/protocols-AI-capability-maturity-model` → `rafaeldavid/protocolized-publications` (canonical consolidation)
- `_Deploy-Archive/2026-04-24-pre-migration/` captured before migration (restorable snapshot)
- `_Product/` set up: README, feedback inbox, backlog, this roadmap
- `_Observations/` set up: schemas, 13 research entries seeded from bibliography (part 1 of OBS-001)
- `OBS-002` — weekly scan routine created on claude.ai/code/routines, first scheduled run 2026-04-27 09:02 Berlin
