# AI Adoption Guide — Project Brief

**Document type:** Single-landing-page handbook
**Audience:** Deployment managers, operations VPs, AI champions inside enterprises that have begun adopting AI but lack a framework for navigating it
**Status:** Pre-draft v0.1 (content-first pass)

---

## What this is

A tool-agnostic deployment guide for AI in organizations, written in enterprise whitepaper voice. Reads as a single landing page. Structurally modeled on Anthropic's *Claude Cowork Deployment Handbook* (eight sections), but lifted out of vendor specifics and grounded in the AI Capability Maturity Model published by the Protocols for Business Special Interest Group of the Protocol Institute.

The reader is the deployment manager who has installed AI, watched adoption climb, and now faces the question: *what's next, and how do we know we're getting better at this rather than just busier?*

## Hero

> **Adopting AI within your organization**  
> A practical guide for understanding, and accelerating, AI adoption through the lens of protocols, with use cases and lessons from the Protocol Institute and other organizations.

## Thesis (one sentence)

Most organizations fail at AI adoption because they treat it as a technology control problem (acceptable use, approved tools, data boundaries) when it is a protocol-design problem; this guide gives the deployment manager a five-level model and the field-tested patterns for moving an organization up the ladder one level at a time.

## Defining move: Level 2 reframed as Kit

The canonical AI Capability Maturity Model uses *Sanctioned* as the name of Level 2. For this guide only, Level 2 is renamed **Kit** and reframed accordingly:

- *Sanctioned* describes the policy artifact — the org has issued an access policy and stood up an enterprise license.
- *Kit* describes the productivity artifact — users have begun encoding their workflows into reusable components (markdown skills, prompt templates, scheduled jobs, shared notebooks). The kits are the real productivity unit at this stage; the policy is necessary but inert without them.

The Kit framing is grounded in:

1. Sachin Benny, *AI, tractors, and the productivity paradox* (2026): kits are components meant to be tinkered with; the kit phase of a technology is invisible to economic stats but produces the human capital that later integration machinery (the firm) capitalizes on.
2. Ronald Kline and Trevor Pinch on *interpretive flexibility* in the Social Construction of Technology (SCOT) tradition: rural users repurposing the early automobile as a tractor, corn sheller, water pump, and laundry-driver — eventually forcing manufacturers to produce the dedicated tractors and trucks that "users, so easily overlooked in writing the story of technology, had made their mark" on.
3. The Cowork handbook's own Level 2 ("turn it into a skill — a markdown file that runs the same task the same way every time"): the Cowork product itself describes Level 2 as the *kit-encoding* level. The framing was already there; this guide names it.

The Kit re-spec is locked in `[level-2-kit-respec.md](level-2-kit-respec.md)` before any prose is written.

## Structure

Mirrors the Cowork Deployment Handbook with two modifications: Chapter 5 swaps Anthropic teams for Protocol Institute teams, and a new Chapter 7 (success patterns and failure modes) is inserted before the closing.


| #   | Chapter                               | Cowork analogue                   | Word budget |
| --- | ------------------------------------- | --------------------------------- | ----------- |
| —   | Foreword                              | Foreword                          | ~250        |
| 1   | Introducing the AI Adoption Guide     | Introducing Claude Cowork         | ~600        |
| 2   | An adoption model in five levels      | A maturity model: five levels     | ~1,000      |
| 3   | Getting started with AI adoption      | Getting started                   | ~600        |
| 4   | Driving AI adoption at scale          | Driving Cowork adoption at scale  | ~700        |
| 5   | How the Protocol Institute deploys AI | How teams at Anthropic use Cowork | ~1,200      |
| 6   | Diagnostic *(placeholder for v0.1)*   | — *(new)*                         | ~150        |
| 7   | Success patterns and failure modes    | — *(new)*                         | ~600        |
| 8   | New forms of work                     | Leveling up with Cowork           | ~250        |
| —   | Additional resources                  | Additional resources              | ~150        |
|     | **Total**                             |                                   | **~5,500**  |


This matches the body length of the Cowork PDF when laid out as a single landing page.

## Case study sources

**Five-level table (Chapter 2)** — pulled from the existing case study catalog in `Research/case-studies-overview.md`:


| Level               | Case study                                                                                                                                                                          | Status             |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| 1 — Shadow          | Samsung (April 2023, three engineers)                                                                                                                                               | Documented         |
| 2 — Kit             | Shopify (mandate without criteria, creating opportunities for adoption - neutral case), Klarna (CS reversal - negative case), Anthropic Legal team (kit harvesting — positive case) | Documented         |
| 3 — Designed        | Uber engineering, Boom Supersonic, Rao/Dixon F2F                                                                                                                                    | Documented         |
| 4 — Infrastructural | EDI in retail/manufacturing (Walmart), ISO containerization 1975–1990                                                                                                               | Historical analogy |
| 5 — Planetary       | Internet protocols (TCP/IP, BGP); 2021 Facebook BGP outage                                                                                                                          | Historical analogy |


**Protocol Institute case studies (Chapter 5)** — two, mapping to L2 and L3:

1. **SIGBIZ AI Enablement Advisory** *(Level 2 — Kit)* — composed from the patterns documented in this GitHub repo (the AI CMM project itself: YAML DSL as kit, multiple draft iterations, layout-test scripts, source catalog, style guide). User refines for accuracy.
2. **Magazine Editorial Pipeline** *(Level 3 — Designed)* — Rao/Dixon F2F book manuscript factory, drawn from Rao's *Have Your Factory Call My Factory* (Protocolized, March 2026).

## Voice and tone

Per `_REPORT-STYLE.md`, with one specific note: this guide should match the register of the enterprise adoption handbooks, such as the Cowork Guide, Salesforce Implementation Guides, Gainsight Implementation Guides — enterprise deployment whitepaper with full sentences, accessible language. Finding-first sentences, named numbers and names, no adjectives or adverbs unless necessary.

The Cowork register specifically:

- Opens chapters with one declarative sentence stating what the chapter does
- Uses tables for parallel comparison
- Uses pull-out sidebars for case studies
- Uses one-paragraph "the problem / the approach / the impact" structure for case studies
- Avoids first-person; uses "the team" or names

## Image plan

Image plates between chapters (not decorative — each plate sits at a chapter break and references a Protocolized essay). Reuse from `../Artifact/images/`:

- `theorizing-protocolization.png` — chapter 1 break (Introducing)
- `from-destination-ai-to-intelligence-media.png` — chapter 2 break (Five levels)
- `mechanical-currents.jpeg` — chapter 3 break (Getting started)
- `have-your-factory-call-my-factory.png` — chapter 4 or 5 break (Adoption / Protocol Institute)
- `finding-fault-lines.jpg` — chapter 7 break (Success / failure)
- `constructing-the-evil-twin-of-ai.png` — chapter 8 break (Leveling up)

The diagnostic block (Chapter 6) is a placeholder card in v0.1 — no image.

## Out of scope (for v0.1)

- HTML/CSS/JS — content first, only markdown
- The interactive diagnostic itself — Chapter 6 is a copy-only placeholder
- New case studies beyond the documented set — no fabricated cases
- Updates to the canonical YAML model

## Acceptance criteria for v0.1

A single markdown file at `drafts/deployment-guide-v0.1.md` that:

1. Hits the structure above with the word budgets within ±15%
2. Replaces Sanctioned with Kit per the locked re-spec
3. Cites every claim that isn't common knowledge with the existing source catalog
4. Reads as enterprise whitepaper, not Substack post
5. Passes the style-guide AI-tropes check (no negative parallelism, em-dash overuse, "precisely because" adverbs, fractal summaries, "serves as")
6. Has Cowork as one of several worked examples — not the central one

---

*Last updated: 2026-05-09*