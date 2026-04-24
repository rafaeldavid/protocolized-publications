---
week_of: YYYY-MM-DD           # Monday of the week covered
scan_date: YYYY-MM-DD         # when the scan ran
scan_type: auto               # auto | manual
status: proposed              # proposed | reviewed | merged | rejected
reviewer:                     # filled when Rafa reviews
deployed:                     # deploy date, if proposed lede merged
---

# Week NN, YYYY — AI workforce scan

## Scan parameters
- Time window: YYYY-MM-DD to YYYY-MM-DD
- Focus: workforce AI enablement + adoption signals for operational leaders
- Sources scanned: [list categories hit — analyst reports, enterprise news, regulatory, tooling releases]
- New observations added to `research/`: [list slugs, or "none"]

## TL;DR
- One-sentence bullet on the week's dominant signal
- One-sentence bullet on the most operationally-relevant shift
- One-sentence bullet on anything new that reshapes a level definition

## Signals

### Signal 1 — [Headline]
- **Category:** event | tooling | research | signal | regulatory
- **What happened:** 2-3 sentences. What, when, scale.
- **Source(s):** URL(s)
- **Relevance to CMM:** which level(s) this touches, and how
- **Relevance to operational leaders:** what an operational leader reading the site this week needs to know
- **Research entry:** link to `research/<slug>.md` if added, else "not ingested"

### Signal 2 — ...

(Minimum 3 signals per weekly brief; more if warranted. No filler — skip the week if nothing materially new.)

## Proposed lede update

### Current lede (from `lede-history.md`)
> [paste current live lede verbatim]

### Recommendation
- [ ] No change — current lede still accurate (with reasoning)
- [ ] Proposed new lede below

### Proposed new lede (if changing)
> [new paragraph — keep the rhetorical structure: opening assertion, three concrete employee behaviors, closing reframe]

### Rationale
What shifted this week that warrants the change. Which signals support it. What the new lede captures that the old one doesn't.

## Reviewer notes
(Rafa fills in — accept / edit / reject, and any commentary)

## Deploy
(Filled when merged. Commit SHA, deploy time, here.now slug.)
