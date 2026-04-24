# _Observations

Living record of what's happening in AI enablement and adoption. The observations here surround the operational leader the site speaks to — what their workforce is actually doing, what their peers are dealing with, what regulators and analysts are saying.

The CMM model itself (`_Model/`, when built) is revised only annually. Observations update continuously and flow into:

- The operational-leader lede on `protocolized.dev/ai-maturity-model/`
- Future surfaces: tooling evaluator (FEATURE-001), case studies page (IA-003), weekly brief archive

## Layers

- **research/** — primary-source corpus. Each file is one cited source: research paper, case study, regulatory doc, enterprise incident, tooling release. Seeded from the litepaper bibliography; grown continuously. Long-lived; updates rare.
- **weekly-briefs/** — dated output of weekly scans. Each brief contains scan parameters, signals found, and a proposed lede update (or "no change" with reasoning). Append-only.
- **lede-history.md** — audit trail of every change to the hero paragraph on the artifact page. Shows what was live when, what superseded it, and why.

## File-level schema

Every `research/` entry uses YAML frontmatter + markdown body. See `research/_TEMPLATE.md` for the canonical shape. Required fields:

- `id` — stable slug, e.g. `event-samsung-chatgpt-leak`
- `category` — `event | tooling | research | signal | regulatory`
- `date_observed` — when the thing happened (YYYY-MM or YYYY-MM-DD)
- `date_added` — when we logged it (YYYY-MM-DD)
- `source_quality` — `primary | secondary | anecdotal`
- `status` — `active | superseded | retracted`
- `affected_levels` — list of CMM levels this reshapes, e.g. `[1, 2]`
- `affected_functions` — list, e.g. `[engineering, legal]` or `[all]`
- `sources` — list of URLs
- `maintainer` — who owns the entry

Categories are discriminators, not tags. One category per entry.

## Lifecycle

```
  litepaper bibliography ─┐
                          ├─→  research/<slug>.md  ─┐
  weekly scan finds new ──┘                         │
                                                    ├─→ weekly brief synthesizes
                                                    │   (cites research/ entries)
                                                    │
                                                    └─→ proposed lede update
                                                        │
                                             Rafa reviews
                                                        │
                                          if accepted → deploy +
                                                        append to lede-history.md
```

## Cadence

- **Weekly:** agent produces `weekly-briefs/YYYY-WW-scan.md`
- **On demand:** same agent, triggered manually by Rafa
- **Annual:** model revision session reviews accumulated observations for anything that should reshape `_Model/`

## Scope of weekly scan

Pointed objective: **clarify workforce trends that surround an operational leader, and mirror what they are actually doing today**.

Not in scope: policy debates, hypothetical futures, model capability benchmarks, academic theory unless it lands on enterprise practice.

In scope:
- Enterprise AI adoption data (McKinsey, Menlo, Stanford HAI, analysts)
- Tooling landscape changes (new releases, usage shifts, vendor moves)
- Shadow/Sanctioned signals (bans, mandates, incidents)
- Regulatory/compliance deadlines hitting operational leaders
- Workforce composition shifts (hiring freezes/contractor replacements tied to AI)
- Case studies of real enterprise deployments and reversals

## See also

- `_Product/Backlog.md` — observation-work items tracked under `OBS-###`
- `_Product/Feedback-Inbox/` — where strategic direction enters
