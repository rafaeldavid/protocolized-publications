# _Product

Product-management artifacts for the AI CMM website (protocolized.dev). Handles feedback intake, parsing, and roadmapping across quarterly iteration cycles.

## Directory layout

- **Feedback-Inbox/** — raw feedback, preserved verbatim. One file per session, named `YYYY-MM-DD-{source-slug}.md`. Never edited after intake.
- **Backlog.md** — parsed items, grouped by theme. Each item has an ID, source link back to inbox, scope, rationale, and status.
- **Roadmap.md** — items selected for the current iteration. Moves items from backlog → roadmap → shipped.

## Lifecycle

1. Feedback arrives (client call, internal review, user test, Rafa's own notes) → dumped into `Feedback-Inbox/` verbatim.
2. Parse session: walk through the raw feedback, split into discrete items, add each to `Backlog.md` with an ID. Mark the inbox file as parsed once done.
3. Planning session (quarterly): pick items from `Backlog.md` → move to `Roadmap.md` with target ship date.
4. Shipping: update item status in `Backlog.md` as work progresses. When shipped, note the commit/deploy in the item.

## ID scheme

Theme prefix + 3-digit sequence:

- `DESIGN-###` — visual design, aesthetics, graphics, anchor illustrations
- `IA-###` — information architecture: pages, nav, URL structure
- `ASSESS-###` — assessment tool (questions, options, flow, results)
- `CONTENT-###` — copy, concepts, messaging, new terminology
- `FEATURE-###` — discrete new features (slide deck, tooling evaluator)
- `BRAND-###` — positioning, tagline, voice

## Status values

- `intake` — just parsed from inbox, not yet triaged
- `triaged` — scope and rationale confirmed, sized roughly
- `planned` — on current roadmap
- `shipping` — work in progress
- `shipped` — deployed, with commit/deploy reference
- `wont-do` — explicitly declined, with reason

## Cadence

Target one parse + plan cycle per quarter. Between cycles, `Feedback-Inbox/` accumulates; during the cycle we batch-parse and re-plan the roadmap.
