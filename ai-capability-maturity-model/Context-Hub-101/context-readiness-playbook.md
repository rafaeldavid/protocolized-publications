# Context Hub 101

A context hub is the layer of firm information that lets new AI tools work the way your firm already works. This page explains what a context hub is, what goes into one, and how to get yours ready, whether you are one advisor setting up your own tools or an operations team standing up shared infrastructure for the whole firm.

---

## What is a context hub?

A **context hub** is the curated layer of information that sits between your raw systems (the CRM, custodian feeds — the firms that hold client assets — planning software, recorded client meetings, the email archive) and the AI tools you connect to them. It holds the operating context an AI tool needs to act correctly: who's who, how the firm communicates, how it produces client work, who the clients are, what has already happened with each household, and what the tool is allowed to touch.

The simplest way to understand it: a context hub is **onboarding for AI tools, made machine-readable.** A new client service associate reads the procedures manual, learns the firm's terminology, meets the advisors, and gets system access. An AI tool re-reads its equivalent from scratch on every session, at machine speed, so the hub has to be structured and stay current on its own.

A context hub is the organized, trustworthy layer of firm information an AI tool reads to learn how your firm works and what it is allowed to do.

---

## Why does AI software need one?

Without a hub, every AI tool starts cold. Someone pastes in context by hand, the tool guesses at the firm's conventions, and nothing it learns carries to the next session.

A hub changes what coordinates the work. The signals your team already watches all day are scattered across systems: a new-account application returned three days ago for a missing signature, an account transfer to another firm stalled while the other side holds it up, a client payout with a hard year-end deadline that still has not been processed, a billing run that did not reconcile, a service request that has aged past its turnaround target. When those signals are structured and trustworthy, AI tools can read them and act on them continuously rather than waiting for someone to notice and assign the work.[^stigmergy]

---

## What are the elements of a context hub?

A context hub has three layers. Keep them separate. Most failures come from connecting AI tools to the wrong one.

### 1️⃣ Source systems

Where your data lives today: the CRM, custodian portals, planning software, recorded client meetings, the email archive, shared drives. High-volume, messy, and authoritative.

- AI tools do **not** read this directly.
- It stays where it is. You project from it; you do not move it.

### 2️⃣ Context layer (the hub)

A curated version of those source systems: structured, deduplicated, tagged with where it came from and how much to trust it, and registered so nothing is added ad hoc.

- This is the layer you actually build.
- Everything downstream depends on its quality.

### 3️⃣ Surfacing

How a specific AI tool gets the right slice at the right moment.

- **Live queries** into systems of record (the CRM, custodian feeds) through a secure connector.
- **Retrieval** over a knowledge corpus (meeting notes, financial plans, past decisions).
- **Instruction files** for stable rules (the firm's conventions and guardrails).
- **Memory** for what the tool learns across sessions.

### Two kinds of context: the shared hub and a tool's own working notes

The three layers above are the **shared** hub — durable, firm-wide, the same for everyone. A working AI tool also keeps a second kind of context that is entirely its own: its notes for the job in front of it. Keep the two apart.

- **The shared hub** — durable, firm-wide knowledge; curated and governed; read by every tool.
- **A tool's working context** — a scratchpad for one task: its plan, progress, retries, and intermediate output. Private to the run, ephemeral by design.

Most of a tool's moment-to-moment context is the second kind, and it should **not** flow back into the shared hub. Promoting half-finished reasoning or run-specific scratch would pollute the firm's knowledge the same way dumping raw documents does.

The exception is the **durable lesson.** When a tool resolves a recurring problem in a new way, or finds that a stated convention is wrong, that lesson should graduate into the shared hub so every other tool benefits. This is the grow-by-correction loop (later in this guide), run as a one-way gate: the tool *proposes* the update, and it is promoted only after it is verified, in scope, and not already there — logged through the audit trail and the named owner. Run-specific scratch stays where it is.

> ℹ️ **The test for what graduates:** would another tool, on a different job next month, be helped by this — or is it only true for this run? The first belongs in the hub; the second stays local.

**What local context looks like today.** Software teams already run this split, and the patterns transfer directly. A coding agent's local context usually includes a few recognizable files:

- **A project instructions file** (`CLAUDE.md` or `AGENTS.md`) — the repo's stable conventions and gotchas. *Mostly shared:* durable and hub-worthy; new gotchas it learns are promotion candidates.
- **A status or progress tracker** (a `MILESTONES.md`, a task board, a TODO list) — what is done and what is next. *Mixed:* this run's checkboxes are ephemeral; a finished decision recorded there may graduate.
- **The repo `README`** — what the project is and how to run it. *Shared:* durable, belongs in the hub.
- **A scratchpad or plan for the current task** — the agent's working reasoning, intermediate output, and retries. *Local and ephemeral:* never promote this.

The wealth-management parallel is exact. A tool working the exception queue keeps a private run list — "the items I touched today, what I tried, what failed." That is scratch; it disappears with the run. The new resolution it discovers ("a transfer rejected for a name mismatch is fixed by refiling with the corrected name") is the durable lesson that graduates into the shared hub.

---

## What kinds of context do you collect?

Seven types. Each has a different natural shape, a different home, a different path to the tool, and a different refresh rhythm. Do not treat them all as documents to upload.

### 1️⃣ Identity and structure

Who's who: the advisor-to-household assignments, team pods, branch structure, who the compliance officer is, who can approve what.

- **Shape:** structured table or chart.
- **Refresh:** on change, roughly monthly.

### 2️⃣ Voice and lexicon

How the firm communicates: client communication tone, required disclosures, and the firm's own terminology (you say "households," not "accounts"; "Conservative Growth" means the 40/60 model).

- **Shape:** a compliance-approved style guide plus a glossary.
- **How tools get it:** written into the tool's standing instructions.
- **Refresh:** rarely.

### 3️⃣ Craft and patterns

How the firm produces client work: financial-plan templates, the firm's model portfolios, the review-meeting deck format, approved email templates.

- **Shape:** a set of templates and worked examples.
- **How tools get it:** loaded on demand, not all at once.
- **Refresh:** per engagement type.

### 4️⃣ Relationships and state

Who the clients are and where things stand: client records, account balances, account status, open service requests, the new-business pipeline.

- **Shape:** a live system of record (the CRM and the feeds from the firms that hold client assets).
- **How tools get it:** queried live. **Do not copy it into a document** — it goes stale within a day.
- **Refresh:** continuous.

### 5️⃣ Episodic memory

What has already happened: recorded client review meetings, advisor notes, and how the team resolved past problems ("the last time an account transfer was rejected because the name on the account did not match, here is what fixed it").

- **Shape:** transcribed, summarized, and made retrievable as a corpus.
- **How tools get it:** retrieval.
- **Refresh:** continuous ingest.

### 6️⃣ Procedural

How work gets done: the new-client onboarding checklist, the account-transfer runbook, the year-end required-payout process, the quarterly billing run, the reconciliation steps.

- **Shape:** step-by-step playbooks.
- **Refresh:** when the process changes.

### 7️⃣ Permissions and scope

What a tool may touch: an AI tool may draft a client email but never send it; may read account holdings but never place a trade; may flag a payment request for review but never move client funds; must stay inside client-facing disclosure rules.

- **Shape:** a policy, backed by real access control.
- **How tools get it:** stated in the instructions **and** enforced in the system permissions. The two must agree.
- **Refresh:** governed.

> ℹ️ Two rules apply to every type. **Query the live, ingest the slow:** query what changes often (account state), ingest what changes slowly (plans, decisions, procedures). **Tier by trust:** tag each source with its origin and a weight, so a ratified investment policy statement outranks an advisor's offhand note, which outranks a forwarded article.

### Example — a brand and design guardrail file

Voice (type 2) and craft (type 3) often live in one artifact: a **brand and design guardrail file**. The current convention is a single markdown file — machine-readable tokens at the top (exact colors, fonts, spacing) and plain-language rules below.[^design] The tokens tell a tool *what* your values are; the prose tells it *how* to apply them, which is what stops generic, off-brand output. The example below is generic — swap in your own values.

```yaml
---
brand: Northwind                 # replace with your own
tokens:
  color:
    primary: "#1a4d8f"           # main actions and links only
    accent:  "#e8a33d"           # small highlights, never body text
    text:    "#1c1c24"
    surface: "#ffffff"
    border:  "#e5e5ea"
  font:
    heading: "Georgia, serif"
    body:    "Inter, system-ui, sans-serif"
  radius: 8px                    # one corner radius everywhere
  space:  [4, 8, 16, 24, 40]     # use these spacing steps only
---

# Brand and design guardrails

## Voice — restrained and editorial; plain words, short sentences, no hype
- DO write:    "Track your spending in one place."
- DON'T write: "Unlock powerful insights with our revolutionary platform!"
- Never use exclamation points, or the words "delight", "seamless", "revolutionary".
- Spell the product "Northwind", never "NorthWind" or "NW".

## Layout
- Favor whitespace over decoration. When unsure, remove an element.
- One primary action per screen, in color.primary. Everything else is secondary.
- Use only the spacing steps above for margin and padding. No arbitrary values.

## Components
- Buttons use the radius above, never a full pill. Primary is filled, secondary is outline.
- color.accent is for small highlights only (a badge, an active tab). Never a background.
- Body text is always color.text on color.surface, 16px minimum.

## Sources — reuse these, never invent
- Components: import from the @northwind/ui library. Don't hand-roll a button,
  modal, or input that already exists there.
- Icons: the Lucide set only, 1.5px stroke. No emoji, no mixed icon packs.
- Logos and brand assets: /brand/assets/ (SVG only). Never recreate or recolor the logo.
- Photography and illustration: the approved library at /brand/media/. No external stock.
- Fonts: self-hosted from /brand/fonts/. Do not load fonts from a CDN.
- When the right component or asset does not exist, ask — do not improvise one.

## Never
- Drop shadows heavier than 0 1px 3px rgba(0,0,0,.08).
- More than two font families.
- Gradients, unless explicitly requested.
```

- **The tokens** give exact values, so a tool never invents a hex code, a font, or a spacing step.
- **The voice do / don't pairs** are the highest-signal part: show a good and a bad sentence rather than describing the tone in the abstract.
- **The "Never" list** encodes the specific mistakes you have seen before — the grow-by-correction habit applied to design.
- **The "Sources" list** points the tool at your real component library, icon set, and asset paths, so it reuses what already exists instead of fabricating a button or recreating the logo.
- **One file, versioned, one source of truth.** Generate any tool-specific copies from it rather than maintaining several.

---

## How do you prepare a document for retrieval?

Corpus-style context (meeting notes, financial plans, past decisions) cannot go into a hub as whole files. A 40-page recorded review is useless as one blob — a tool needs the two minutes about the client's retirement date, not the whole meeting. Three steps turn a raw document into something a tool can retrieve precisely.

### 1️⃣ Chunk the document

Split each document into passages small enough to retrieve on their own. A **chunk** is one such passage.

- A common default is roughly **512 tokens** per chunk (about 350–400 words).[^reference]
- Smaller chunks retrieve more precisely but lose surrounding context; larger chunks carry more context but return noise. Start at the default and adjust only if retrieval is too narrow or too broad.

### 2️⃣ Overlap the chunks

Let neighboring chunks share a small amount of text at their edges, typically **about 64 tokens** (30–40 words) of overlap.

- Without overlap, a statement that lands on a chunk boundary gets cut in half, and neither chunk retrieves cleanly. Example: a service note reads *"…so we cleared the rejected transfer by | refiling it with the corrected account name."* If the split (`|`) falls mid-sentence, one chunk says "we cleared the rejected transfer by" and the next says "refiling it with the corrected account name." Neither matches a query about how to fix a transfer that was rejected for a name mismatch.
- Overlap keeps the full statement inside at least one chunk, so the resolution is always retrievable as a unit.

### 3️⃣ Enrich each chunk with metadata

Attach generated context to every chunk so retrieval can match on meaning, not just literal words. On ingest, run each chunk through a fast, low-cost model to produce a summary, categories, and source fields.

A raw chunk is just text:

> "...the transfer was rejected because the name on the account did not match; we refiled with the corrected name and the required signature verification..."

The enriched record adds structure around it:

```json
{
  "title": "Transfer rejection — Patel retirement account",
  "date": "2026-04-18",
  "source_type": "service_request_note",
  "summary": "An incoming account transfer was rejected because the account name did not match; resolved by refiling with the corrected name and the required signature verification.",
  "categories": ["account-transfer", "returned-paperwork", "rejections"],
  "owner": "Ops — J. Reyes",
  "household_id": "H-4821",
  "trust_weight": 1.0,
  "text": "...the transfer was rejected because the name on the account did not match; we refiled with..."
}
```

- The **summary** and **title** are embedded alongside the body, so a query like *"how do we fix a transfer that was rejected because the name did not match?"* matches the gist even when the chunk never uses those exact words. This is the institutional memory that today lives only in the head of whoever handled it last.
- The **categories** let you filter retrieval by topic, and **trust_weight** feeds the tiering from the section above.
- The **household_id** and **owner** let a tool pull only the records it is allowed to see for the household in front of it.
- Use a **shared category vocabulary** across all sources (the same tags for a meeting note, a financial plan, and a CRM entry) so cross-source retrieval stays consistent.

> ℹ️ One more trick: give each document a single "what is this about" summary chunk in addition to its body chunks. When that summary chunk ranks high, run a second query to pull the matching body chunks, so the tool reads the actual notes rather than the abstract.

---

## How ready is your context?

Context readiness comes in four levels. Find yours before you start. As in any maturity model, **your weakest type sets your level** — a polished communication guide does not make up for ungoverned permissions.

### 1️⃣ Scattered (L1)

The CRM, custodian portals, and shared drives exist; AI tools get ad-hoc copy-paste each session. Where most firms start.

### 2️⃣ File-native (L2)

A standing instructions file, a few curated reference docs, and per-user memory. A prepared advisor or analyst.

### 3️⃣ Curated hub (L3)

A source registry, tiered retrieval, an ingest pipeline, and one source of truth that projects into tool-readable surfaces. An operations team.

### 4️⃣ Live and governed (L4)

Live connections into systems of record, tool memory with audit logs, an explicit scope and permission policy, and a named owner. A firm running AI tools in production.

> ℹ️ Individuals usually move L1 to L2. Operations teams move L2 to L3 to L4. Do the individual setup first even at firm scale — the hub is the same patterns at larger size.

---

## How do you set it up as an individual?

Five steps, doable in an afternoon. This is the highest-leverage work most people skip.

1. **Write a lean instructions file.** Include only **non-inferable facts** — what a tool cannot work out by looking at the systems in front of it. Start with a few lines and one gotcha, and add a line each time the tool gets something wrong.
  **Inferable** (leave it out — the tool can already see it): which CRM the firm uses, the list of clients, what account types a household holds.
   **Non-inferable** (write it down — it is a convention, preference, or guardrail): "Never state or imply a performance guarantee in any client-facing text." "We say 'households,' not 'accounts.'" "'Conservative Growth' is our name for the 40%-stock/60%-bond portfolio, not the reverse." "Branch 12 clients pay a flat advisory fee; never pitch commission-based products to them." "All client email is drafted only — route it to the service team, never send."
2. **Capture voice and lexicon** in one short style-and-glossary doc, referenced from the instructions file. Define firm terms inline.
3. **Convert repeated workflows into reusable playbooks.** Anything explained more than twice (the prep for a review meeting, the onboarding steps) becomes a saved playbook: a short description, a few examples, the steps.
4. **Turn on memory** so the tool keeps what it learns about how you work.
5. **Connect your live tools** — calendar, CRM, planning software — through a secure connector, so the tool queries current state instead of pasted snapshots.

> ℹ️ More context is not better. Bloated, auto-generated instructions files often *degrade* a tool's performance.[^bloat] Keep yours short and human-written.

---

## How do you build it for the firm?

The firm hub is the individual setup plus three additions: a **registry**, a **pipeline**, and **governance**.

**To reach a curated hub (L3):**

- **Stand up a source registry** — one file listing every source (CRM, custodian feed, meeting archive, plan library), its type, its trust weight, and its sync cadence. New sources register here; nothing is added ad hoc.
- **Pick one source of truth per asset and generate from it.** Each asset has one canonical home (the investment policy statement library, the model-portfolio definitions), and tool-readable summaries are generated from it under a do-not-edit header.
- **Build the ingest pipeline.** Chunk, overlap, and enrich each source (see *How do you prepare a document for retrieval?* above), then deduplicate so the same decision recorded in three places counts once.
- **Tier and normalize at retrieval.** Apply the registry's trust weights, and normalize every source into one shape so a CRM note, a plan, and a meeting transcript look identical downstream.

**To reach live and governed (L4):**

- **Connect systems of record through a secure gateway** with single sign-on, audit trails, and per-system permissions. Query live; do not copy.
- **Declare scope explicitly and enforce it** in both the instructions and the system permissions (draft-only on client communications, read-only on positions).
- **Give tools governed memory** — persistent, with audit logs, so supervision and books-and-records obligations are met and one team's learnings can be shared safely.[^memory]
- **Name an owner** for the registry and the refresh loop. The single biggest predictor of a hub that stays useful is one accountable person, working across operations, compliance, and IT.

---

## How do you keep it from going stale?

Context decays. A hub built once and never refreshed is worse than no hub, because tools trust it. Hold four disciplines.

- **Project from a single source of truth.** Never let a tool-facing summary become a second place to edit.
- **Sync incrementally.** Each source tracks a timestamp so refreshes process only what changed: account state every few minutes, the plan library daily.
- **Grow by correction.** Add to the context each time a tool gets something wrong. Those corrections are the backlog.
- **Curate down, not only up.** Because volume degrades performance, cut on a schedule, not only when something breaks.

**Anti-patterns to avoid:**

- **The dump** — pasting whole documents or wiring tools to raw systems.
- **Copying live data** — snapshotting the CRM into a static doc. It is wrong within a day. Query it.
- **Auto-generated instructions** — machine-written instruction files measurably hurt performance.
- **No registry** — ad-hoc sources rebuild the original scattered mess inside the hub.
- **No owner** — the hub silently goes stale and trust inverts.

---

## What does a context hub look like in practice?

Picture a regional wealth-management firm with 40 advisors across six branches. Every piece it needs already exists, scattered across systems a new AI tool cannot see:


| Type                    | Where it lives at the firm today                                                                                                                      |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identity and structure  | Advisor-to-household assignments and team pods in the CRM; the compliance org chart; who can approve money movement                                   |
| Voice and lexicon       | The compliance-approved communication guide and disclosure language                                                                                   |
| Craft and patterns      | Financial-plan templates, the model portfolios, the review-meeting deck, the returned-paperwork follow-up email templates                             |
| Relationships and state | Client records, balances, account status, the returned-paperwork and stalled-transfer queues, open service requests in the CRM and asset-holder feeds |
| Episodic memory         | Transcribed client review meetings, advisor notes, and how past problems were resolved                                                                |
| Procedural              | The onboarding checklist, the transfer runbook, the year-end payout process, the quarterly billing run, the reconciliation steps                      |
| Permissions and scope   | The standing rule that a tool may draft but never send client communications, read but never trade, and flag but never move client funds              |


Now consider what the operations manager does with this. A new AI tool wired to the hub can watch the exception queues and, for each stalled item, retrieve the runbook, pull the household's state from the CRM, draft the corrective email or the next step for a person to approve, and note what it did. The tool does not approve money movement or send client mail; it clears the rote work up to the point a human is required.

The work to get there is to project each source into a layer the tool can read, tier them by trust, and keep them synced. The gap to a live, governed hub is the same at every firm: live connections into the CRM and custodian feeds, governed memory with an audit trail that compliance will require, and one accountable owner for the refresh loop.

---

## Where to start

**As an individual, this week:**

- Write a lean instructions file — non-inferable facts only
- Capture voice and lexicon in one short doc
- Convert your two most-repeated workflows into saved playbooks
- Turn on memory and connect your live tools through a secure connector

**As an operations team, this quarter:**

- Fill the seven-type inventory for the firm
- Create the source registry with trust weights and sync cadences
- Generate tool-readable summaries from one source of truth per asset
- Put systems of record behind a secure gateway with auth and audit
- Name the owner of the registry and the refresh loop

---

[^stigmergy]: The idea that environmental traces (CRM fields, statuses, notes) coordinate work, rather than direct instruction, is developed in Tom Critchlow, "Of Termites & Tokens" (2026), which calls the pattern *stigmergy*.

[^reference]: The chunking, overlap, tiering, and enrichment figures here follow a documented reference implementation of a knowledge hub: the Protocol Institute's C3PO (2026).

[^bloat]: A 2026 ETH Zurich study found that bloated and auto-generated instruction files often degrade agent performance; the recommendation is to keep human-written instructions to non-inferable details (reported via InfoQ).

[^memory]: On persistent, auditable, shareable tool memory, see Anthropic, "Effective context engineering for AI agents," and Memory for Managed Agents (2026).

[^design]: The single-file format pairing machine-readable design tokens with prose rules follows the emerging DESIGN.md convention, open-sourced by Google Labs (2026).