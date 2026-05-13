# Deployment Guide v0.1 — Chapter Outline

**Purpose:** Pre-prose review point. Each chapter below specifies opening line, beats, evidence, and length budget. Once approved, this becomes the spine of `drafts/deployment-guide-v0.1.md`.

**Total target:** ~5,500 words (matches Cowork PDF body length).

---

## Foreword: The evolution of AI at work *(~250 words)*

**Opening line:** "You lead a team that has begun deploying AI. Adoption is climbing. The question now is whether anyone in the organization can describe what good deployment looks like at this stage and what the next stage requires."

**Beats:**
- Hook: AI adoption is producing the symptoms that recent HBR research identifies — work intensification, scope expansion, multitasking — but those are symptoms of something more specific: organizations are at different levels of a maturity ladder and most don't have a map.
- Frame: Over the last several months the Protocols for Business SIG of the Protocol Institute has been building that map. This guide is the deployment-manager-facing distillation of it.
- The trajectory of AI at work has been fast: in 2024, AI use meant a chat window; in 2025, agentic tools moved into developer workflows; in 2026, those same patterns reached every other knowledge function.
- Setup: This guide walks through how to deploy AI across an organization, with a tool-agnostic five-level model, case studies from the Protocol Institute and other organizations, and field-tested patterns for moving up the ladder.
- One line on tool-agnosticism: the patterns are not specific to one vendor. The case studies name vendors where the public record names them.

**Evidence:**
- HBR observation on intensification (already cited in blog post v1.1 — same source)
- Trajectory line adapted from Cowork foreword (their phrasing, restructured)

**Image:** None — text only foreword.

---

## Chapter 1 — Introducing the AI Deployment Guide *(~600 words)*

**Opening line:** "Most enterprises are deploying AI as if it were the next enterprise software stack. It is not, and the failure modes that follow from that assumption are predictable."

**Beats:**
1. AI is non-deterministic — same input, different output, failure distribution not fully characterizable in advance. (One paragraph; pull from litepaper §2.)
2. This property breaks the conventional governance model. Acceptable use policies, approved tool lists, and data boundaries are necessary but address the wrong question.
3. The right question is protocol design: specifying coordination rules at the handoff points where AI output enters organizational accountability.
4. **Define five working terms** (mini-glossary, expanded from the litepaper's term set):
   - *Protocol* — coordination mechanism specifying behavior at a handoff point, without requiring shared goals or central enforcement
   - *Governance* — the protocols through which the organization decides which AI outputs to accept, verify, or reject
   - *Kit* — a reusable component a user has built to make AI behave the same way the same time on the same task
   - *Maturity* — the precision with which the governing protocols specify the boundary between AI autonomy and human judgment
   - *Bottleneck* — the function where the gap between AI exposure and protocol precision is largest and highest-stakes
5. Three claims this guide rests on:
   - Most organizations are at Levels 1–2. Menlo Ventures 2025: 84% are not yet running true agents.
   - The path forward is bottom-up discovery, top-down scale. Champions surface kits; organizations promote them.
   - The binding constraint at the boundary between Levels is domain expertise, not AI capability. Two non-technical operators can run sophisticated AI pipelines if they can specify the workflow clearly; what they cannot do without domain knowledge is specify what good output looks like.
6. Sidebar: what this guide isn't.
   - Not a security checklist. (Security review is necessary but covered by your IT team.)
   - Not a vendor recommendation. (The model is tool-agnostic.)
   - Not a fixed playbook. (The specifics of each level depend on which function is your bottleneck.)

**Evidence:**
- Menlo Ventures 2025 figure (catalog entry 17)
- McKinsey 2025 — high performers redesign workflows; ~6% qualify (catalog entry 18)

**Image:** `theorizing-protocolization.png` at chapter break.

**Voice notes:**
- Lead with the finding ("Most enterprises are deploying AI as if…"), not with the mini-glossary
- Use the table format for the five terms — easier to scan
- No "in this chapter we will" or "this chapter covers"

---

## Chapter 2 — A maturity model in five levels *(~1,000 words)*

**Opening line:** "Five levels describe how organizations move from invisible AI use to AI as coordination infrastructure. Each level has a governing protocol; each level's failure modes follow predictably from the limits of that protocol."

**Beats:**
- Open with a five-level summary table (matches Cowork's Chapter 2 table format):

| Level | Name | What it looks like | Documented case |
|-------|------|---------------------|-----------------|
| 1 | Shadow | AI in use through personal accounts; IT has no inventory; no governing policy | Samsung (April 2023) |
| 2 | **Kit** | Access policy in place; users encoding workflows as reusable kits; productivity invisible to dashboards | Klarna (negative); SIGBIZ AI CMM project (positive) |
| 3 | Designed | Workflows built around AI with named owners, quality metrics, escalation paths | Uber engineering; Boom Supersonic; Rao/Dixon F2F |
| 4 | Infrastructural | AI is a sector baseline; coordination challenge crosses organizational boundaries | EDI in retail (Walmart, late 1980s) |
| 5 | Planetary | AI governs civilization-scale systems; legibility is the governance challenge | Internet protocols (BGP, TCP/IP) |

- One short paragraph per level (~150 words each, 5 levels = 750):

  - **Level 1 — Shadow.** The organization cannot distinguish high-value individual AI use from reckless shadow use because both are invisible. Cite Samsung; cite the Reco.ai 71% / 400+ day discovery lag figures (catalog entry 34).
  - **Level 2 — Kit.** The organization has issued a policy and provisioned access. Underneath, the productivity unit is the kit: users encoding workflows into reusable components. The Kline/Pinch precedent — rural users repurposing the early automobile, eventually forcing manufacturers to produce dedicated tractors — is the structural pattern. (Two-line callout to the SCOT framework: this guide names Level 2 *Kit* because the kit-building activity is the productivity story, while the access policy is only the policy story.) Cite Klarna as the case where kits were not built before scale; cite Anthropic Legal as the case where a kit was built and shipped.
  - **Level 3 — Designed.** AI is embedded in core workflows. Removing it would require rebuilding the workflow. Cite Uber: 84% developer adoption; 11% of PRs opened by agents; Code Inbox and U Review as the Level 3 protocols built around the new bottleneck. Cite Rao/Dixon F2F as the bilateral version of the same pattern.
  - **Level 4 — Infrastructural.** AI capability has become a sector baseline. The coordination challenge crosses organizational boundaries. Historical analogy: ISO containerization 1975–1990, the intermodal protocol layer.
  - **Level 5 — Planetary.** AI governs civilizational coordination systems. The challenge is legibility. Historical analogy: TCP/IP and BGP today.

- Closing paragraph: "Organizations occupy multiple levels simultaneously across functions. The effective maturity level for risk purposes is the bottleneck — the highest-stakes function where protocol precision is lowest. Identifying that function is the primary diagnostic task and the subject of the rest of this guide."

**Evidence:**
- All case studies grounded in `Research/source-catalog.md`
- The Kline/Pinch SCOT reference cited inline in the Level 2 paragraph
- Sachin essay cited as the source for the Kit framing

**Image:** `from-destination-ai-to-intelligence-media.png` at chapter break.

**Voice notes:**
- Each per-level paragraph opens with a one-sentence finding, then evidence
- The Kit reframe gets explicit naming in this chapter — readers see the change

---

## Chapter 3 — Getting started with AI deployment *(~600 words)*

**Opening line:** "The most common question deployment teams ask is some version of *where do we start?* The most useful answer is to think of AI deployment as a ladder where each rung builds on the one below it."

**Beats:**
1. The Level 0 → Level 1 → Level 2 ladder. Level 0 is the chat window — most users are already there. The job of a deployment is to move every user one level higher, not to skip to Level 4 in the first month.
2. Choosing your first use case. Four categories of good pilot work (lifted from Cowork, restructured for tool-agnostic phrasing):
   - High-volume, high-repetition work (meeting prep, data pulls)
   - Information-dense synthesis (regulatory monitoring, pipeline reviews, financial reports)
   - Bottleneck-creating work (legal review of marketing assets, creative briefs)
   - Expertise-dependent but process-driven work (business reviews, recruiting screens, product reviews)
3. Structure your evaluation. Three things to do before users are waiting on it:
   - Security review with the IT team
   - Pick two or three pilot teams, not one. A handful of data points beats a single one.
   - Define success in numbers, not adjectives. "Hours saved per week" is measurable; "transformation" is not.
4. Starting points by function. Adapt Cowork's table to a tool-agnostic version:

| Function | First use case | What you'd measure |
|----------|---------------|---------------------|
| Legal | NDA review against your playbook | Review turnaround time; queue depth |
| Finance | Variance analysis with root-cause commentary | Time from close to narrative; analyst hours per cycle |
| Sales | Pre-call research and brief generation | Prep time per call; rep-reported confidence |
| Product | PRD drafting from customer feedback and analytics | Time to first reviewable draft |
| HR | Performance review drafting from rubric and manager notes | Cycle completion rate; manager time per review |
| Marketing | Campaign brief to asset draft against brand guidelines | Concept-to-review time; rounds of revision |

5. Closing line: each of these is a Level 1 entry point. They convert into Level 2 kits once a team has run them by hand a few times.

**Evidence:**
- Function table adapted from Cowork's pp.11–12

**Image:** `mechanical-currents.jpeg` at chapter break.

---

## Chapter 4 — Driving AI adoption at scale *(~700 words)*

**Opening line:** "Deploying the technology is the easy part; getting an organization to actually use it well is much harder. The pattern that produces durable adoption is bottom-up discovery, top-down scale."

**Beats:**
1. Three-phase table:

| Phase | Timeline | Target level | What you'd do | What you'd expect to see |
|-------|----------|--------------|----------------|-------------------------|
| Evaluate | Month 1 | Champions reach L1 | Security review; identify champions; install pre-built kits; connect 1–2 core systems | Champions report use cases; first "this saved me an hour" moments |
| Pilot | Months 2–3 | Champions reach L2 | Champions run real workflows weekly; check-ins; measure against criteria; demo wins | Measurable time savings; champions write their own kits |
| Scale | Months 4–6 | Department reaches L3 | Promote pilot kits to admin-provisioned department library; onboard next wave of users | Kit reuse across teams; new hires inheriting workflows; declining "how do I" support tickets |

2. Month 1 — Evaluate. Find your champions. Don't pick adversarial skeptics; pick the people who are already using AI on their own. They will surface the use cases that matter to their function rather than the ones a top-down mandate would prescribe.
3. Months 2–3 — Pilot. The signal that a pilot is working is not hours saved. It is *champions starting to write their own kits.* When a sales rep takes the call-prep workflow she has been running by hand and turns it into a `/call-prep` skill, she has crossed from Level 1 to Level 2. When she schedules it to run before every external calendar event, she's at Level 3.
4. Months 4–6 — Scale. Every kit built during the pilot is an asset. The marketing team's blog-review kit becomes the template comms kits inherit. Tribal knowledge gets encoded and reused rather than walking out the door when someone leaves. *Bottom-up discovery, top-down scale.*
5. Onboarding effect: a new hire who installs the department's promoted kits on day one starts at Level 2, not Level 0. The floor for the whole team rises.

**Evidence:**
- Anthropic Legal example as the kit-promotion case (cited in Ch 5)
- Adapted from Cowork pp.13–15

**Image:** `have-your-factory-call-my-factory.png` at chapter break.

---

## Chapter 5 — How the Protocol Institute deploys AI *(~1,200 words)*

**Opening line:** "The Protocol Institute is a community of researchers, practitioners, and writers organized into Special Interest Groups, with the *Protocolized* magazine as its flagship publication. Two of its working patterns illustrate the maturity model in practice — at Level 2 and at Level 3."

**Beats:**

### Brief intro to the Protocol Institute *(~150 words)*

- What it is — successor to the Summer of Protocols (2023–2025), home of *Protocolized* magazine
- Mission line — quote from the Stinson-Schroff/Protocolized launch post
- Org structure: Protocolized + SIGs + infrastructure
- The two SIGs/teams the case studies are drawn from: SIGBIZ (Protocols for Business, run by Rafa Fernandez) and the *Protocolized* magazine editorial team

### Case Study 1: SIGBIZ AI Enablement Advisory — exploratory kit-making *(~600 words, mapped to Level 2 / Kit)*

**Structure (matches Cowork's Problem / Approach / Impact format):**

- **The problem.** The Protocols for Business SIG was tasked with building an AI Capability Maturity Model — a desk-research synthesis spanning 40 sources, a blog post, an 8-page litepaper, and an interactive HTML diagnostic — with a small team of part-time SIG members and a tight timeline. Conventional approaches to a publication of this scope (a research firm or a consulting engagement) were out of reach. So was the conventional approach to building an HTML diagnostic (an engineering team and a custom React app).

- **The approach.** The SIG built a kit-rich workflow. Several distinct kits emerged:
  - *The YAML DSL kit* (`ai-cmm-v3.yaml`) — a structured representation of the model that both humans and AI can read and edit. Every prose output (blog, litepaper, artifact) is generated from this single source. Updating a level's failure modes once propagates across all outputs.
  - *The source catalog kit* (`Research/source-catalog.md`) — an annotated bibliography with consistent metadata and citation format. Every claim in every output is checked against this catalog. Adding a source updates one place; the next draft inherits the citation.
  - *The layout-test kit* (`layout-test.py`) — a 21-criterion automated test suite that runs after any structural change to the artifact. Catches regressions before review.
  - *The style-guide kit* (`_REPORT-STYLE.md`) — a checklist of voice and structure standards applied against every draft before it goes to review.

  Each kit started as one person's reusable component. Each was promoted to a SIG-shared artifact with a named owner. The SIG runs the kits weekly — drafts are produced by Claude against the YAML DSL, checked against the source catalog, tested against the layout suite, edited against the style guide. No one writes a draft from scratch.

- **The impact.** The full publication suite — blog post, litepaper, artifact, plus this deployment guide — was produced by a SIG team operating at the kit level rather than a writing team operating at the prose level. The same model is now reusable for the next SIG project. The kits are the durable asset; the publication is what the kits produce on a given run.

- **Sidebar quote / pull-out:** "The interesting question for the SIG was never *can AI write a litepaper for us.* It was *what kits do we need to build so that any future SIG project starts at Level 2 and not Level 0.*"

**Composed from the patterns documented in this repo. Rafa to refine for accuracy.**

### Case Study 2: Magazine Editorial Pipeline — designed F2F *(~450 words, mapped to Level 3 / Designed)*

**Structure (Problem / Approach / Impact):**

- **The problem.** *Protocolized*, the Protocol Institute's flagship magazine, sustains a publishing pipeline that spans short-form essays, long-form research, and book-length archival projects. Two decades of accumulated writing — blog archives, newsletter back-catalog, social posts — sit in disconnected formats and need to be reissued as books. Conventional publishing operations would require an in-house publishing team or an outsourced agency. Neither is available at the scale the magazine operates.

- **The approach.** Two factories, connected. Venkatesh Rao operates a personal Claude Code factory on his laptop: Dropbox-hosted, with a folder hierarchy where each folder has its own `claude.md` file specifying the work it does. The factory takes raw archival material and produces rough first-draft manuscripts. Jenna Dixon operates a separate factory that takes those manuscripts and produces finished print and ebook artifacts ready for Amazon distribution.

  The handoff point between them is a shared Dropbox folder plus a *manuscript transmittal server* Dixon set up for metadata. When Rao submits a `.docx` from his factory, Dixon's factory returns revised requirements — styling issues, layout concerns — that his factory needs to address before hers can begin design. He instructs his factory to fix them and returns the file. What flows between them is not finished work. It is intermediate production states, specifications, and revised requirements — *industrial intermediates*, not documents to be read.

- **The impact.** Neither Rao nor Dixon writes code. Neither has touched a line of content text in the production process. What they bring is domain expertise — Rao's writing and editorial judgment, Dixon's publishing-industry knowledge. The Claude Code infrastructure provides commodity technical execution. *Currently, my factory dashboard shows a couple of dozen book projects in flight,* Rao writes — output volume that would require a small in-house publishing team in the conventional model.

  The Level 3 marker is the F2F protocol layer: the manuscript transmittal server is a designed, repeatable, named-owner coordination mechanism. It is the difference between two people swapping files (Level 2 kit pattern) and two factories shaking hands at a defined interface (Level 3 designed workflow).

- **Sidebar quote:** *"The fascinating thing? This very corporate-seeming pipeline was set up by two people who basically don't code. What we do bring to the party though, is domain expertise."* — Rao, *Have Your Factory Call My Factory*, Protocolized, March 2026.

**Source:** Rao, Venkatesh. *Have Your Factory Call My Factory.* Protocolized (Obliquities), 2026-03-02. Status: documented.

**Image:** None additional — `have-your-factory-call-my-factory.png` already lives as the chapter-4-or-5 break image.

---

## Chapter 6 — Diagnose your level *(~400 words, fully-formed chapter with placeholder CTA)*

**Opening line:** "Before deciding what to do next, place your organization on the model. Most organizations occupy multiple levels across functions; the level that matters for risk and prioritization is the bottleneck — the highest-stakes function where the protocol is least precise."

**Beats:**
1. The diagnostic asks five questions, each surfacing a different cut of the maturity profile:
   - *Visibility* — does IT have an inventory of AI tools in use, including personal accounts?
   - *Output governance* — for your most-used AI workflow, what happens when the AI is wrong?
   - *Kit layer* — can you name three reusable AI components your team has built and shared?
   - *Workflow design* — is at least one core workflow built around AI with a named owner and quality metric?
   - *Sector position* — is your AI capability competitive parity, ahead, or behind the dominant players in your sector?
2. The five answers map to a level placement and to a *bottleneck function* — the function where the gap between AI exposure and protocol precision is largest. Most diagnostic value sits in the bottleneck identification, not the headline level.
3. The recommended first move depends on the bottleneck, not the average level. A Level-3-on-average organization with a Level-1 customer-facing function should treat the customer-facing function first, regardless of how mature its engineering org is.
4. Closing paragraph: a placeholder CTA card pointing to the existing standalone diagnostic at `protocolized.dev/ai-maturity-model`. The card has the visual format of an interactive launcher (button styled, label visible) but with a "Coming soon" tag and the redirect to the standalone version.

**CTA card copy (placeholder):**
> **Run the diagnostic** *(coming soon)*
> A standalone version of this diagnostic is live now at [protocolized.dev/ai-maturity-model](https://protocolized.dev/ai-maturity-model). The integrated version, with bottleneck-function detection and recommendations specific to this guide, will ship in v1.0.

**Image:** None additional — the CTA card is the visual element.

**Voice note:** Chapter is fully formed. Reader gets the diagnostic *concept* and a workable path forward, even though the in-page interactive component isn't built yet. The standalone artifact link is the live version they can use today.

---

## Chapter 7 — Common success patterns and failure modes *(~600 words)*

**Opening line:** "Across organizations that have moved up the maturity model, five patterns recur. Across organizations that stalled, five failure modes recur. Both lists are useful as a checklist before pilot decisions."

**Beats:**
- Two short numbered lists (sentence + one-line gloss each):

  **Five success patterns:**
  1. Champion-led pilots over top-down mandates
  2. Kit harvesting — promote what users built rather than designing the official workflow centrally
  3. Named workflow owners — every promoted kit has someone responsible for its evolution
  4. Output-scope governance, not access-scope — the protocol governs what AI produces, not what tools are licensed
  5. Domain-embedded protocol designers (FDE pattern) — protocol design happens inside functions, not in a central governance team

  **Five failure modes:**
  1. Mandate without criteria *(Shopify pattern — high adoption, undefined competency standard)*
  2. Turnkey replacement of dual production-and-QA roles *(Klarna; Duolingo — kit-stripping)*
  3. Policy without handoff *(Air Canada — chatbot output entered consequential decisions without verification protocol)*
  4. Shadow F2F invisible to enterprise governance *(Rao/Dixon at scale inside enterprises — Level 3 individuals embedded in Level 1 organizations)*
  5. Premature standardization *(centrally-designed workflow rejected in practice; users keep their personal kits in shadow)*

- Closing line: "Each failure mode is the predictable consequence of treating AI deployment as a control problem instead of a protocol-design problem. Each success pattern is what protocol design looks like in practice."

**Evidence:**
- All cases drawn from existing source catalog
- Cross-references to the Kit re-spec and to the litepaper

**Image:** `finding-fault-lines.jpg` at chapter break.

---

## Chapter 8 — Leveling up *(~250 words)*

**Opening line:** "Across very different organizations and SIG teams, the arc is the same: connect the tool to real work, get one deliverable back, encode what worked as a kit, share it with the next user."

**Beats:**
- You don't need every employee using the same kits to call a deployment successful. You need every employee more productive than they were before, and a clear path to the next rung of the ladder.
- The teams in this guide didn't transform their organizations in a single step. They each took one rung at a time, and kept going.
- The deployment manager's job is to make sure the path upward is paved — that promoted kits exist, that named owners exist, that the next champion has somewhere to go after the first pilot.
- Closing line: "Nobody needs to reach Level 4 in the first month. The organization that consistently moves up one level is the one that gets the durable productivity gain."

**Image:** `constructing-the-evil-twin-of-ai.png` at chapter break.

---

## Additional resources *(~150 words)*

**Structure:**

- **Read** — links to the AI CMM litepaper, the blog post (*The Missing Protocol Layer*), this guide's source catalog
- **Diagnose** — link to `protocolized.dev/ai-maturity-model` (existing artifact)
- **Engage** — link to the Protocols for Business SIG, the Protocolized magazine, the Protocol Institute Discord

---

## Open items — resolved

1. ~~SIGBIZ case-study voice~~ — Resolved: third-person, SIG as subject (no first-person plural).
2. ~~Diagnostic block weight~~ — Resolved: fully-formed Ch 6 with a "coming soon" CTA card pointing to the standalone artifact at `protocolized.dev/ai-maturity-model`. Ch 6 budget updated from ~150 to ~400 words. Total guide budget now ~5,750.
