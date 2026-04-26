# Feed (`/feed/`) — design

Workstream for `FEATURE-005` (`Backlog.md`): a daily-refreshing public-facing feed of AI-adoption news, blogs, and essays — curated for organizational changes and announcements rather than generic AI hype.

This folder mirrors `_Product/Assessment-v2-Design/` and `_Product/Case-Studies-Library-Design/` — design lives here as iterating drafts; nothing here is published until promoted.

## What it is, in one paragraph

A new top-level page on protocolized.dev that gives readers a daily reason to come back. ~5–10 link-cards a day, each carrying source attribution, a one-line take on *why this matters for AI adoption*, and a link to the original. Reverse-chronological with day-grouping headers. Editorial voice: neutral commons (BRAND-001) — closer to a Pew topic page than to Techmeme. The discovery layer (which sources, how surfaced) is shared infrastructure with OBS-002 (the internal weekly scan that proposes lede updates); the synthesis layer differs.

## What it is **not**

- A generic AI news firehose. The page rejects benchmarks, model-release noise, hot-take opinion, and anything not directly about how organizations adopt or fail to adopt AI.
- A blog or commentary site. Each item gets one sentence of framing, not an essay.
- A social feed. No comments, no upvotes, no infinite scroll. Just a curated index, refreshed daily.
- A replacement for `_Observations/research/`. Items that earn case-study status get researched into the existing observations corpus; the feed is the antechamber.

## Process (mirrors the case-studies-library workstream)

```
Phase A — Source allowlist & discovery brief
   audit which sources reliably produce AI-adoption-relevant content;
   compare discovery mechanisms (RSS, Google Alerts, Brave Search API,
   SerpAPI, LLM-driven crawl); recommend.
   →   Sources-v0.1.md

Phase B — Page design brief
   layout, card template, filtering/search, RSS export, archive
   strategy, naming (Feed / Today / Pulse / Signal / The Stack).
   Reference UX from comparable curator pages.
   →   Spec-v0.1.md

Phase C — Pipeline architecture
   pick: manual / scheduled-agent / hybrid / RSS-only.
   Lock storage (KV vs git-committed JSON/MD vs D1), dedup strategy,
   editorial promotion flow (if hybrid), RSS export shape.
   →   Pipeline-v0.1.md

Phase D — Implementation
   build the page; provision the worker route(s); set up the
   scheduled remote agent; wire the in-page promotion UI if hybrid.
```

Phases A–C are upfront work. Phase D is implementation against an approved spec.

## Inputs

- `_Product/Backlog.md` FEATURE-005 (the brief)
- `_Product/Backlog.md` OBS-002 (the related internal scan; shared discovery layer)
- `_Observations/research/` (32 entries — examples of what "case-study-shaped" looks like)
- `_Observations/lede-history.md` (what the artifact's hero has cycled through)
- `_Product/Backlog.md` BRAND-001 (neutral-commons positioning) and BRAND-002 (distinctive terminology)

## Outputs (this folder)

| File | Phase | Status |
|---|---|---|
| `Sources-v0.1.md` | A | _pending_ |
| `Spec-v0.1.md` | B | _pending Phase A_ |
| `Pipeline-v0.1.md` | C | _pending Phase B_ |
| `prototypes/` | D | _pending_ |

## Out of scope

- The page's visual design (waits for `DESIGN-001` — the whole-site aesthetic refresh).
- A user-account / personalisation system. Single anonymous public feed for all readers.
- Notifications (push, email digest). Could come later as a separate FEATURE-### once the feed proves itself.
- Editorial writing on each item (these are one-line frames, not essays — that's the entire editorial position).

## Open architectural questions (top of the brief)

1. **Discovery mechanism** — Google Alerts (RSS-only, brittle), Brave Search API, SerpAPI, RSS aggregation of an allowlist, LLM crawl, or hybrid?
2. **Cadence** — truly daily, weekday-only, twice-weekly? Editorial cost vs. reader expectation.
3. **Volume per day** — 5? 10? 15? Less is more for editorial trust; more risks bloat.
4. **Pipeline shape** — manual curation / fully-automated agent / hybrid (agent fetches drafts, editor promotes)? Hybrid is the recommendation in `FEATURE-005` but Phase C decides.
5. **Storage** — KV (like comment mode), git-committed JSON/MD (like the triage queue), or D1 (overkill probably)?
6. **Dedup** — same story across multiple sources: how to surface only one, attributed to the best source?
7. **Naming** — "Feed" is the working name. Candidates: Today, Pulse, Signal, The Stack, Daily Read, Adoption Watch.
8. **RSS export** — yes, surface the feed at `/feed.xml` so other publications can subscribe?
9. **Archive** — how many days visible on the live page? Where do older items roll off to?
10. **Inline pepper** — is the feed surface only on `/feed/`, or also a "today's signals" widget on `/`?

## Coordination

- **OBS-002** must coordinate or merge. Recommendation in the FEATURE-005 brief: ship FEATURE-005 first as the simpler public surface; OBS-002 inherits the discovery infrastructure. Phase C decides the architectural split.
- **Comment-mode worker** (`_Infrastructure/protocolized-inbox/`) is the natural host for any worker routes the feed needs. Don't spin up a new worker.
- **Schedule skill** (the daily triage agent at `trig_01S7GMjH7nU7MpYg9P7DfkW2`) is the pattern for any scheduled remote agent.
