# Deploying AI across your organization

*A practical guide for understanding AI through the lens of protocols, with use cases and lessons from the Protocol Institute and other organizations.*

**Protocolized — Protocols for Business Practice**
v0.1 | May 2026

*Companion outputs: [interactive diagnostic tool](https://protocolized.dev/ai-maturity-model/) · [blog post](https://protocolized.dev/blog-the-missing-layer/) · [litepaper*](https://protocolized.dev/litepaper-ai-protocols/)

---

## Contents

1. Foreword: The evolution of AI at work
2. Introducing the AI Deployment Guide
3. A maturity model in five levels
4. Getting started with AI deployment
5. Driving AI adoption at scale
6. How the Protocol Institute deploys AI
7. Diagnose your level
8. Common success patterns and failure modes
9. Leveling up
10. Additional resources

---

## Foreword: The evolution of AI at work

You lead a team that has begun deploying AI. Adoption is climbing. The question now is whether anyone in the organization can describe what good deployment looks like at this stage and what the next stage requires.

Recent research on AI at work documents a consistent symptom. AI intensifies individual work — expanding task scope, increasing multitasking, extending hours beyond the boundary of the workday. The intensification is real, and treating it as a worker-wellbeing problem misses what is producing it. The workforce is discovering new coordination patterns faster than organizations can standardize them. The experience of overload is what a missing protocol layer feels like from inside.

The trajectory has been fast. In 2024, using AI at work meant interfacing with a chat window. In 2025, agentic tools moved into developer workflows. In 2026, the same pattern reached every other function — analysts, lawyers, marketers, account executives — moving from a chatbot you ask a question to an agent that delegates work end to end. Most organizations crossed those boundaries without a framework for telling whether they were getting better at deployment or just busier.

Over the last year, the Protocols for Business Special Interest Group of the Protocol Institute has been building that framework. This guide is the deployment-manager-facing distillation of it. The five-level model is tool-agnostic. The case studies name vendors where the public record names them. The patterns are field-tested and meant to be lifted into your own context.



---

## Chapter 1 — Introducing the AI Deployment Guide

Most enterprises are deploying AI as if it were the next enterprise software stack. It is not, and the failure modes that follow from that assumption are predictable.

AI systems are probabilistic. The same input can produce different outputs; the failure distribution cannot be fully characterized in advance. Deterministic software has bugs whose modes are in principle enumerable. AI failures are not — the distribution shifts with model version, input domain, context length, and deployment configuration. Risk management can estimate the rate. Enumeration is not the right tool for the job. The governing response to AI uncertainty is protocol design for what happens when an output is wrong, before the wrong output has been identified.

This property breaks the conventional governance model. Acceptable use policies, approved tool lists, and data boundaries are necessary but address the wrong question. They ask how to prevent misuse rather than how to specify the coordination rules that make AI output reliable in production. The right framing is protocol design: specifying the rules governing coordination behavior between agents — human and artificial — at the handoff points where AI output enters organizational accountability.

### Five terms this guide depends on


| Term           | Working definition                                                                                                                                                                                                         |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Protocol**   | A coordination mechanism that specifies in advance how actors behave at a handoff point, without requiring shared goals or central enforcement.                                                                            |
| **Governance** | The protocols through which an organization decides which AI outputs to accept, verify, or reject. Distinct from compliance (adherence to external standards) and oversight (after-the-fact monitoring).                   |
| **Kit**        | A reusable component a user has built to make AI behave the same way the same time on the same task. Markdown skills, prompt templates, scheduled jobs, shared notebooks, small scripts.                                   |
| **Maturity**   | The precision with which the governing protocols specify the boundary between AI autonomy and human judgment. A property of coordination design, not of tools, adoption rate, or compliance coverage.                      |
| **Bottleneck** | The function where the gap between AI exposure and protocol precision is largest and highest-stakes. The bottleneck constrains the organization's effective governance level regardless of how mature other functions are. |


### Three claims this guide rests on

Most organizations are at Levels 1 or 2. Menlo Ventures' 2025 *State of GenAI in the Enterprise* survey found that 16% of enterprise deployments qualify as true agents — implying roughly 84% sit at the lower levels. Adoption is broad; deployment maturity is not.

The path forward is bottom-up discovery, top-down scale. Champions discover the workflows that matter to their function. Organizations identify which of those workflows generalize and provision them as shared assets. Centrally-designed workflows fail without input from the domain experts who would use them; centrally-promoted kits succeed when they have already been proven by hand.

The binding constraint at the boundary between levels is domain expertise, not AI capability. Two non-technical operators can run a sophisticated AI production pipeline if they can specify the workflow clearly. What they cannot do without domain knowledge is specify what good output looks like or where the AI's errors matter.

### What this guide is not

It is not a security checklist. Your IT team owns the data-handling, connector, and audit review; that work is necessary and is not duplicated here. It is not a vendor recommendation. The model is tool-agnostic; the case studies name tools where the public record does. It is not a fixed playbook. The right specifics at each level depend on which function is your bottleneck — and identifying that function is itself the diagnostic task.

---

## Chapter 2 — A maturity model in five levels

Five levels describe how organizations move from invisible AI use to AI as coordination infrastructure. Each level has a governing protocol, and each level's failure modes follow predictably from the limits of that protocol.


| Level | Name            | What it looks like                                                                                      | Documented case                                    |
| ----- | --------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| 1     | Shadow          | AI in use through personal accounts; IT has no inventory; no governing policy                           | Samsung Electronics (April 2023)                   |
| 2     | **Kit**         | Access policy in place; users encoding workflows as reusable kits; productivity invisible to dashboards | Klarna *(failure)* · Anthropic Legal *(promotion)* |
| 3     | Designed        | Workflows built around AI with named owners, quality metrics, and escalation paths                      | Uber engineering · Boom Supersonic · Rao/Dixon F2F |
| 4     | Infrastructural | AI is a sector baseline; coordination challenge crosses organizational boundaries                       | EDI in retail (Walmart, late 1980s)                |
| 5     | Planetary       | AI governs civilization-scale systems; legibility is the governance challenge                           | Internet protocols (TCP/IP, BGP)                   |


**Level 1 — Shadow.** AI tools entered through employee initiative. Individuals use personal accounts for work tasks, no policy governs what data leaves the organization, and exposure is invisible until a leak, a regulatory inquiry, or a quality failure surfaces it. In April 2023, three Samsung Electronics engineers independently submitted proprietary source code, equipment specifications, and a meeting transcript to ChatGPT through personal accounts within one month. Samsung discovered the exposure only after the fact, banned external AI tools enterprise-wide, then built and selectively re-admitted under protocol. Reco.ai (2025) reports 71% of enterprise employees use unauthorized AI tools, with an average 400-day discovery lag. Shadow adoption is not deviant behavior — it is a baseline that every organization passes through.

**Level 2 — Kit.** The organization has issued an access policy and provisioned enterprise licenses. Underneath that policy layer, users are encoding their workflows as kits — reusable components that make AI behave the same way the same time on the same task. The kits are the productivity unit at this stage; the policy is necessary but inert without them.

This guide names Level 2 *Kit* rather than *Sanctioned* on the strength of work by Sachin Benny and the Social Construction of Technology (SCOT) tradition. Benny argues that the kit phase of a technology — when users tinker, repurpose, and build reusable components without standardized methods — is invisible to economic statistics but produces the human capital that later integration machinery capitalizes on. The historical case is documented by Ronald Kline and Trevor Pinch on the early American automobile. From roughly 1903 to 1950, rural users employed cars as general-purpose power sources: jacking up rear wheels to drive corn shellers and washing machines, yoking automobiles to plows. Their interpretive flexibility — what Kline and Pinch identify as a distinct kind of creativity from inventor-tinkering — eventually drove Ford to release dedicated trucks in 1916 and the industry to produce specialized tractors. Quoting Kline and Pinch: "the users, so easily overlooked in writing the story of technology, had made their mark." The same arc is underway with AI. Most enterprise AI value is currently accumulating in the kit layer; most enterprise governance instruments are not pointed at it.

The Klarna case shows what kit-stripping looks like. Between 2023 and 2025 Klarna deployed AI customer service to the equivalent of 700 agents, reached 90% daily AI adoption, and reported a $40M profit improvement in the first year. CEO Sebastian Siemiatkowski reversed the AI-only position publicly in May 2025 and began rehiring human agents, citing outputs "generic, repetitive, insufficiently nuanced." The tool worked; the kit was missing. The displaced human contractor had been simultaneously a production step and a quality-check step; removing the human without encoding what the human did into a reusable kit destroyed the quality protocol invisibly. Anthropic's own legal team shows the inverse pattern. The team built its first AI plugin in an afternoon by pointing Claude at the team's actual work product — memos, risk frameworks, policy documents — and turning that body of practice into a reusable kit. The plugin is now the team's standard intake protocol. The Level 2-to-3 transition is the moment a kit gets promoted from a personal artifact to an organizational one with a named owner and a verification checkpoint.

**Level 3 — Designed.** AI is embedded in core workflows. Removing it would require rebuilding the workflow, not substituting a human. Uber's engineering organization is the most thoroughly documented case. By March 2026, 84% of developers were active agentic-coding users, 65–72% of code was AI-generated, and 11% of pull requests were opened by agents. The new bottleneck shifted from coding to code review, and Uber responded by designing two protocol systems: Code Inbox (smart assignment of agent-generated PRs based on code ownership and explicit review service-level obligations) and U Review (AI-assisted review that reduces human review burden). These are protocol infrastructure for the new bottleneck — not tools for improving code quality but handoff structures that govern the AI-to-human review boundary. Boom Supersonic illustrates the same pattern in a safety-critical domain: AI-enabled iteration is the design methodology, not a productivity layer on top of one. Rao and Dixon's factory-to-factory book pipeline (Chapter 6) shows the bilateral version of the pattern at the two-person scale.

**Level 4 — Infrastructural.** AI capability has become a sector baseline. Individual organizational advantage has been competed away. The governance challenge is now collective: how does the industry coordinate AI use, handle shared risks, and establish interoperability standards. Individual maturity is necessary but not sufficient. The cleanest historical analogy is Electronic Data Interchange (EDI) in retail and manufacturing in the late 1980s and 1990s. Walmart mandated EDI for all suppliers; not adopting meant not participating in the market.

**Level 5 — Planetary.** AI governs critical civilization-scale coordination systems: supply chains, financial infrastructure, public health surveillance. The governance challenge is no longer adoption or protocol design but legibility — understanding what the systems are doing well enough to intervene when they fail. The historical analogy is the internet's own protocol stack today: TCP/IP and BGP run trillion-dollar coordination flows that no single actor controls. The 2021 Facebook BGP misconfiguration took multiple platforms offline globally before any organization could respond.

Organizations occupy multiple levels simultaneously across functions. The effective maturity level for risk purposes is the bottleneck — the highest-stakes function where protocol precision is lowest. Identifying that function is the primary diagnostic task and the subject of the rest of this guide.



---

## Chapter 3 — Getting started with AI deployment

The most common question deployment teams ask is some version of *where do we start?* The most useful answer is to think of AI deployment as a ladder where each rung builds on the one below it. Level 0 is the chat window, where most users already are. The job of a deployment is to move every user one rung higher than where they are today, not to skip to Level 4 in the first month. Nobody needs to reach Level 4 in the first month. The path upward has to be paved before users can climb it.

### Choosing your first use case

Good pilot work falls into one or more of four categories.

- **High volume, high repetition.** Work that happens dozens of times a week and follows a knowable pattern, such as meeting prep, data pulls, or weekly reports.
- **Information-dense synthesis.** Anywhere a human is spending time being the integration layer between systems. Pipeline reviews, regulatory monitoring across jurisdictions, quarterly financial narratives.
- **Bottleneck-creating work.** Speeding up cross-functional work that does not save one person time but unblocks everyone downstream. Legal review of marketing assets and creative briefs are the standard examples.
- **Expertise-dependent but process-driven.** Business reviews, specialized recruiting screens, product reviews. The work depends on judgment, but the judgment follows a process the team's best people have internalized without writing it down. This category pays back the most: encode the process in a kit and everyone on the team inherits it.

### Structure your evaluation

Three things to do before users are waiting on the deployment.

**Run the security review.** Whatever AI tooling you select reads files and connects to enterprise systems. Your IT team will want to understand the data boundaries, the connector permission model, and the auditability options. Do this work before users start asking when the tool ships.

**Pick two or three pilot teams, not one.** A single team gives you one data point. A handful gives you enough to separate the pattern from the team. Pick teams with a motivated lead who is already experimenting with AI on their own time. They will surface the use cases that matter to their function rather than the ones a top-down mandate would prescribe.

**Define success in numbers, not adjectives.** *Hours saved per week* is measurable. *Transformation* is not. *Reduced contract review time from five days to one* is measurable. *Improved efficiency* is not. The numbers are also what you will use to decide which kits get promoted.

### Starting points by function

Each row below is a Level 1 entry point — a single, real deliverable AI produces against your actual files and systems. They are chosen because they convert cleanly into Level 2 kits once a team has run them by hand a few times.


| Function  | First use case                                            | What you'd measure                                    |
| --------- | --------------------------------------------------------- | ----------------------------------------------------- |
| Legal     | NDA review against your playbook                          | Review turnaround time; queue depth                   |
| Finance   | Variance analysis with root-cause commentary              | Time from close to narrative; analyst hours per cycle |
| Sales     | Pre-call research and brief generation                    | Prep time per call; rep-reported confidence           |
| Product   | PRD drafting from customer feedback and analytics         | Time to first reviewable draft                        |
| HR        | Performance review drafting from rubric and manager notes | Cycle completion rate; manager time per review        |
| Marketing | Campaign brief to asset draft against brand guidelines    | Concept-to-review time; rounds of revision            |




---

## Chapter 4 — Driving AI adoption at scale

Deploying the technology is the easy part. Getting an organization to actually use it well is much harder. The pattern that produces durable adoption is *bottom-up discovery, top-down scale*. Champions discover the workflows that matter; the organization promotes what worked so that the next user inherits it.


| Phase    | Timeline   | Target level             | Actions                                                                                               | What you'd expect to see                                                                     |
| -------- | ---------- | ------------------------ | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Evaluate | Month 1    | Champions reach L1       | Security review; identify 2–3 champion teams; install pre-built kits; connect 1–2 core systems        | Champions reporting use cases; first "this saved me an hour" moments                         |
| Pilot    | Months 2–3 | Champions reach L2 (Kit) | Champions run real workflows weekly; check-ins; measure against criteria; demo wins to adjacent teams | Measurable time savings; champions writing their own kits                                    |
| Scale    | Months 4–6 | Department reaches L3    | Promote pilot kits to admin-provisioned department library; onboard the next wave of users            | Kit reuse across teams; new hires inheriting workflows; declining "how do I" support tickets |


### Month 1: evaluate

Find your champions. The right champions are the people in the organization already experimenting with AI on their own time, not adversarial skeptics who need to be converted. Ask each function lead to nominate one. Point the champions at their function's first use case from the table in the previous chapter, install the prerequisite kits, and connect the data sources they will need. Without connected systems the champions stay stuck at Level 0 chat. With them, a Level 1 deliverable is reachable in week one.

### Months 2 and 3: pilot

Encourage your champions to show their teams what their workflows look like with AI in them. Skeptics convert when they see a four-hour contract review happen in forty-five minutes on a real contract. Run weekly check-ins. The check-ins are not for course-correction — pilot teams need room to find edge cases and report them while they are fresh — but for early visibility into which use cases are landing.

The signal that the pilot is working is not hours saved. It is *champions starting to write their own kits.* When a sales rep takes the call-prep workflow she has been running by hand and turns it into a `/call-prep` skill, she has crossed from Level 1 to Level 2. When she schedules it to run automatically before every external calendar event, she is at Level 3. Track how many champion-authored kits exist at the end of the pilot. That count is the leading indicator for the scale phase.

### Months 4 through 6: scale

This is where the economics shift. Every kit built during the pilot is an asset. The marketing team's blog-review kit becomes the template comms teams adapt for their own use. The finance variance-analysis kit one analyst built becomes the kit the whole finance org runs. Tribal knowledge gets encoded and reused rather than walking out the door when someone leaves.

Scale also changes the onboarding equation. A new hire who installs the department's promoted kits on day one starts at Level 2, not Level 0. They get the encoded workflows before they have time to develop bad habits, and the floor for the whole team rises. The deployment manager's role at this phase is not to build kits. It is to make sure the path upward is paved — that promoted kits exist, that named owners exist, that the next champion has somewhere to go after the first pilot.



---

## Chapter 5 — How the Protocol Institute deploys AI

The Protocol Institute is the home of *Protocolized* magazine and the successor to the Summer of Protocols program (2023–2025). Its mission is to advance the theory and practice of protocol design across domains, to build the field and community capable of stewarding the planetary-scale process of *protocolization* — the slow, largely invisible means by which human behaviors become standardized into the coordinating infrastructure of civilization.

The Institute is organized as a small core team plus several Special Interest Groups (SIGs), each focused on a different research or practice area. Two of those working patterns illustrate the maturity model in practice — at Level 2 and at Level 3.

### Case study 1 — SIGBIZ AI Enablement Advisory

#### The problem

The Protocols for Business Special Interest Group was tasked with building an AI Capability Maturity Model for enterprise deployment teams: a desk-research synthesis spanning 40 sources, a blog post, an 8-page litepaper, an interactive HTML diagnostic, and the deployment guide you are currently reading. The work needed to be defensible enough to cite, specific enough to be actionable for a deployment manager, and produced on a timeline a small SIG team could sustain. Conventional approaches to a publication of this scope — a research firm or a consulting engagement — were out of reach. So was the conventional approach to building an HTML diagnostic, which would require a dedicated engineering team and a custom React app.

#### The approach

The SIG built a kit-rich workflow. Several distinct kits emerged through the work, each starting as one person's reusable component and getting promoted to a SIG-shared artifact with a named owner.

- *The model kit.* A YAML domain-specific language (`ai-cmm-v3.yaml`) captures the model's structure — five levels, six protocol dimensions, failure modes, transition requirements, case anchors. Both humans and AI can read and edit it. Every prose output is generated against this single source of truth. Updating a level's failure modes once propagates across the blog, the litepaper, and the artifact.
- *The source catalog kit.* `Research/source-catalog.md` is an annotated bibliography with consistent metadata, citation format, and category tagging across 40 entries. Every claim in every output is checked against the catalog. Adding a new source updates one place; the next draft inherits the citation.
- *The layout-test kit.* A 21-criterion automated test suite runs after any structural change to the artifact's HTML. It catches regressions in spacing, typography, and component alignment before review.
- *The style-guide kit.* `_REPORT-STYLE.md` is a checklist of voice and structure standards — finding-first sentences, named numbers, AI-trope avoidance, em-dash discipline — applied against every draft before it goes to review.

The SIG runs the kits weekly. Drafts are produced by Claude against the YAML DSL, checked against the source catalog, tested against the layout suite, and edited against the style guide. No one writes a draft from scratch. The role of the SIG members is editorial judgment, source quality, and decisions about which arguments to make — work that depends on domain expertise the AI does not have.

#### The impact

The full publication suite — blog post, litepaper, artifact, plus this deployment guide — was produced by a SIG team of part-time members rather than a writing team operating at the prose level. The same kits are reusable for the next SIG project. The kits are the durable asset; the publication is what the kits produce on a given run.

> The interesting question for the SIG was never whether AI could write a litepaper. It was what kits the SIG needed to build so that any future SIG project starts at Level 2 rather than at Level 0.

The SIG's work also illustrates an honest property of Level 2: it is mid-promotion, not finished. Some of the kits live in shared infrastructure with named owners; others are still personal artifacts in the process of being promoted. The Level 2-to-3 transition is the moment a kit gets a verification checkpoint — a defined review step before its output reaches an external party — and that work continues across SIG projects.

### Case study 2 — *Protocolized* magazine editorial pipeline

#### The problem

*Protocolized* sustains a publishing pipeline that spans short-form essays, long-form research, and book-length archival projects. Two decades of accumulated writing — blog archives, newsletter back-catalog, social posts — sit in disconnected formats and need to be reissued as books and ebooks. Conventional publishing operations would require an in-house publishing team or an outsourced agency. Neither is available at the scale the magazine operates.

#### The approach

Two factories, connected at a designed handoff point. Venkatesh Rao, the magazine's Director of Research, operates a personal Claude Code factory on his laptop. The factory is hosted in a Dropbox folder hierarchy where each subfolder has its own `claude.md` file specifying the work that happens there. Rao's factory takes raw archival material — Twitter archives, blog posts, newsletters — and produces rough first-draft manuscripts. His long-time publishing collaborator Jenna Dixon operates a separate Claude Code factory that takes those manuscripts and produces finished print and ebook artifacts ready for Amazon distribution.

The handoff between them is a shared Dropbox folder plus a *manuscript transmittal server* Dixon built for metadata. When Rao submits a `.docx` file from his factory, Dixon's factory returns revised requirements — styling issues, layout concerns, permissions metadata — that Rao's factory needs to address before hers can begin design. He instructs his factory to fix them and returns the file. What flows between the factories is not finished work. It is intermediate production states, specifications, and revised requirements — the industrial intermediates that flow between specialized firms in any production economy.

#### The impact

Neither Rao nor Dixon writes code. Neither has touched a line of content text in the production process. What they bring is domain expertise — Rao's writing and editorial judgment, Dixon's twenty years of publishing-industry knowledge. Claude Code provides commodity technical execution at the shell level. Currently, Rao's factory dashboard shows two-dozen book projects in flight — output volume that would require a small in-house publishing team in the conventional model.

> The fascinating thing? This very corporate-seeming pipeline was set up by two people who basically don't code. What we do bring to the party though, is domain expertise.
> — Venkatesh Rao, *Have Your Factory Call My Factory* (Protocolized, March 2026)

The Level 3 marker is the protocol layer between the factories. The manuscript transmittal server is a designed, repeatable, named-owner coordination mechanism. It is the difference between two people swapping files (a Level 2 kit pattern, fragile and bilateral) and two factories shaking hands at a defined interface (a Level 3 designed workflow, replicable and inheritable). The same pattern is repeating elsewhere in the Protocol Institute's collaborations — in hobbyist robotics work, in the publishing of the 2026 Long Now collaboration, and in the editorial pipeline of *Protocolized* itself.

---

## Chapter 6 — Diagnose your level

Before deciding what to do next, place your organization on the model. Most organizations occupy multiple levels simultaneously across functions. The level that matters for risk and prioritization is the bottleneck — the highest-stakes function where the protocol is least precise.

The diagnostic asks five questions, each surfacing a different cut of the maturity profile.

1. **Visibility.** Does IT have an inventory of AI tools in use across the organization, including personal accounts? If the answer is no, at least one function is at Level 1 regardless of how mature the others are.
2. **Output governance.** For your most-used AI workflow, what happens when the AI is wrong? If the answer is a shrug, a case-by-case correction, or *it hasn't happened yet*, the workflow is at Level 2.
3. **Kit layer.** Can you name three reusable AI components your team has built and shared? Markdown skills, prompt templates, scheduled jobs. If you cannot name three, the kit layer is missing — Level 2 by policy, not by practice.
4. **Workflow design.** Is at least one core workflow built around AI with a named owner, a quality metric, and a documented escalation path when the workflow fails? If yes, that workflow is at Level 3. The number of Level 3 workflows is the leading indicator for the organization's overall trajectory.
5. **Sector position.** Is your AI capability competitive parity, ahead, or behind the dominant players in your sector? Sector position determines whether Level 4 is on the horizon or already arrived.

The five answers map to a level placement and to a *bottleneck function* — the function where the gap between AI exposure and protocol precision is largest. Most of the diagnostic value sits in the bottleneck identification, not in the headline level. A Level-3-on-average organization with a Level-1 customer-facing function should treat the customer-facing function first, regardless of how mature its engineering org is. The recommended first move depends on the bottleneck, not the average.

> ### Run the diagnostic *(coming soon)*
>
> A standalone version of the diagnostic is live now at [protocolized.dev/ai-maturity-model](https://protocolized.dev/ai-maturity-model). The integrated version, with bottleneck-function detection and recommendations specific to this guide, will ship in v1.0 of the AI Deployment Guide.

The remainder of this guide gives you the patterns and pitfalls to look for once you know your level. Use the standalone diagnostic to identify it.

---

## Chapter 7 — Common success patterns and failure modes

Across organizations that have moved up the maturity model, five patterns recur. Across organizations that stalled, five failure modes recur. Both lists are useful as a checklist before pilot decisions.

### Five success patterns

1. **Champion-led pilots over top-down mandates.** The champions discover the use cases that matter to their function. Top-down mandates produce reported adoption without underlying kit growth.
2. **Kit harvesting over central design.** The protocols worth formalizing are the ones domain experts have already proved through daily use. The organization's job is to identify, capture, and systematize them — not to design new ones from a central governance function.
3. **Named workflow owners.** Every promoted kit has a person responsible for its evolution. Kits without named owners stagnate and brittle out within a quarter.
4. **Output-scope governance, not access-scope.** The protocol that matters is the one that governs what AI produces and who reviews it before it reaches a consequential decision. An access policy is necessary but does not produce reliability on its own.
5. **Domain-embedded protocol designers.** Protocol design happens inside functions, by people with domain expertise (the Forward Deployed Engineer pattern), not in a central governance team. Centrally-assigned governance staff lack the domain knowledge required to tell a high-value kit from a brittle one.

### Five failure modes

1. **Mandate without criteria.** Leadership declares AI use non-optional but defines no standard for what compliance looks like. Adoption metrics rise; durable productivity does not. *Pattern observed at Shopify (April 2025 memo, no published competency standard for non-technical roles).*
2. **Turnkey replacement of dual production-and-QA roles.** AI replaces a human role that was simultaneously a production step and a quality-check step. The kit that the displaced human embodied — pattern recognition, empathy, escalation judgment — is destroyed before being encoded. *Pattern observed at Klarna (customer service AI reversed May 2025) and Duolingo (native-speaker contractor replacement, 2024).*
3. **Policy without handoff.** AI is deployed for external-facing or legally consequential functions without a verification protocol between AI output and organizational accountability. *Pattern observed at Air Canada (BC Civil Resolution Tribunal, 2024 — chatbot stated a bereavement-fare policy that did not exist; the airline was held liable).*
4. **Shadow F2F invisible to enterprise governance.** The most sophisticated AI work in the organization — bilateral, high-trust factory-to-factory pipelines between domain experts — is invisible to the enterprise. The governance response calibrated to shadow-use risk eliminates the value-creating activity it cannot see.
5. **Premature standardization.** The organization tries to centrally design the official AI workflow before users have iterated through enough kit forms to know what works. The official workflow is rejected in practice. Users keep their personal kits in the shadows; the org has a published standard with zero adoption.

Each failure mode is the predictable consequence of treating AI deployment as a control problem rather than a protocol-design problem. Each success pattern is what protocol design looks like in practice.



---

## Chapter 8 — Leveling up

Across very different organizations and SIG teams, the arc is the same: connect the tool to real work, get one deliverable back, encode what worked as a kit, share it with the next user.

You don't need every employee using the same kits to call a deployment successful. You need every employee more productive than they were before, and a clear path to the next rung of the ladder. The teams in this guide didn't transform their organizations in a single step. They each took one rung, then kept going.

The deployment manager's job is to make sure the path upward is paved — that promoted kits exist, that named owners exist, that the next champion has somewhere to go after the first pilot. Nobody needs to reach Level 4 in the first month. The organization that consistently moves up one level is the one that gets the durable productivity gain.



---

## Additional resources

### Read

- *The AI Capability Maturity Model* — full litepaper at [protocolized.dev/litepaper-ai-protocols](https://protocolized.dev/litepaper-ai-protocols/)
- *The Missing Protocol Layer* — blog post at [protocolized.dev/blog-the-missing-layer](https://protocolized.dev/blog-the-missing-layer/)
- *Have Your Factory Call My Factory* — Venkatesh Rao on the F2F editorial pipeline
- *AI, tractors, and the productivity paradox* — Sachin Benny on the kit phase of technology adoption
- *Introducing the Protocol Institute* — the launch essay describing the Institute's mission and structure

### Diagnose

- The AI Maturity Model standalone diagnostic at [protocolized.dev/ai-maturity-model](https://protocolized.dev/ai-maturity-model)

### Engage

- The Protocols for Business Special Interest Group (SIGBIZ) — Protocol Institute Discord
- *Protocolized* magazine — Substack
- The Protocol Institute — [protocolized.summerofprotocols.com](https://protocolized.summerofprotocols.com)

---

*v0.1 — May 2026. Protocols for Business Special Interest Group, Protocol Institute.*