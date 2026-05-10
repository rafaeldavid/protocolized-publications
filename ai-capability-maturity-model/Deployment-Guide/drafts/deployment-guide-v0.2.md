# Adopting AI within your organization

*A practical guide for understanding, and accelerating, AI adoption through the lens of protocols, with use cases and lessons from the Protocol Institute and other organizations.*

**Protocolized — Protocols for Business Practice**
v0.2 | May 2026

*Companion outputs: [interactive diagnostic tool](https://protocolized.dev/ai-maturity-model/) · [blog post](https://protocolized.dev/blog-the-missing-layer/) · [litepaper*](https://protocolized.dev/litepaper-ai-protocols/)

---

## Contents

1. Foreword: The evolution of AI at work
2. Introducing the AI Adoption Guide
3. An adoption model in five levels
4. Getting started with AI adoption
5. Driving AI adoption at scale
6. How the Protocol Institute adopts AI
7. Diagnose your level
8. Success patterns and failure modes
9. New forms of work
10. Additional resources

---

## Foreword: The evolution of AI at work

You lead a team that has begun adopting AI. AI-enabled workflows and tools are appearing all around you. The question now is whether anyone in your organization can describe what good adoption looks like, and the opportunities and failure modes likely to emerge.

Recent research on AI at work documents a consistent symptom. AI intensifies individual work — expanding task scope, increasing multitasking, extending hours beyond the boundary of the workday. The intensification is real, and treating it as a worker-wellbeing problem misses what is producing it. The workforce is discovering new coordination patterns faster than organizations can standardize them. Overload, disorientation, mania, and fear of being left behind, is what it feels like from the inside.

The trajectory has been fast. In 2024, using AI at work meant interfacing with a chat window. In 2025, agentic tools moved into developer workflows. In 2026, the same pattern reached every other function — analysts, lawyers, marketers, account executives — moving from a chatbot you ask a question to an agent that delegates work end to end. Most organizations crossed those boundaries without a framework of orientation. Most of us have been unsure if we're getting better at adoption or just busier.

Over the last year, the Protocols for Business Special Interest Group of the Protocol Institute has been building that orientation framework. This guide, a tool-agnostic adoption model, is the executive-facing distillation of it. It includes new concepts, case studies, a diagnostic, as well as common success and failure modes. The patterns are field-tested and meant to be lifted into your own context.

Before you dive in, it's crucial to understand that AI is not a tool, a platform, or a product. It is a technology paradigm — a class of systems with structural properties (probabilistic outputs, generative capacity, indeterminate failure distributions) that an organization integrates into its operating model rather than deploys to employees. While *deployment* is the action of standing up a particular tool, policy, or workflow, *Adoption* names the long arc of an organization's integration with the paradigm itself. This guide is about adoption.

---

## Chapter 1 — Introducing the AI Adoption Guide

Most enterprises are discussing and planning for AI as if it were an next enterprise software productivity solution. It is not, and the failure modes that follow from that assumption are predictable.

AI systems are probabilistic. The same input can produce different outputs; the failure distribution cannot be characterized in advance. Deterministic software has bugs whose modes are, at least in principle, enumerable. AI failures are not — the distribution shifts with every model update, input domain, context length, and tooling configuration. The correct response to AI uncertainty is protocol design to manage the new problems, that come hand-in-hand with AI affordences.

This property breaks the conventional governance model. Acceptable use policies, approved tool lists, and data boundaries are necessary but address the wrong question. They ask how to prevent misuse rather than how to specify the coordination rules that make AI output reliable in production. The right framing is thinking in protocols: specifying the rules governing coordination behavior between agents — human and artificial — at the handoff points where AI output becomes an organizational accountability.

A useful frame from the Protocol Institute's launch essay: protocols are *infrastructural technologies for producing non-events*. Their value lies in the failures that do not happen — the data leak that did not occur, the chatbot judgment that did not bind the company, the AI-generated brief that did not get filed without verification. Karl Weick called these *dynamic non-events*: outcomes whose absence is invisible until the protocol fails to produce them. 

AI adoption maturity is the precision with which an organization's protocols produce reliable AI outputs as a non-event.

### Key Terms


| Term                  | Working definition                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **AI**                | A class of generative, probabilistic systems (large language models, multimodal models, and the agentic systems built on top of them) whose outputs cannot be fully predicted from their inputs.                                                                                                                                                                                                                                                                                     |
| **Dynamic Non-Event** | A desirable outcome that must be continuously produced rather than achieved once, and that becomes visible only when it fails.                                                                                                                                                                                                                                                                                                                                                       |
| **Protocol**          | A coordination mechanism that specifies in advance how actors behave at a handoff point, without requiring shared goals or central enforcement. Protocols are infrastructural technologies for producing dynamic non-events at scale — outcomes such as safety, reliability, and quality that are visible only when they fail. The Protocol Institute also describes protocols as engineered arguments: predefined rules that let actors make trade-offs without becoming embattled. |
| **Governance**        | A combination of protocols, norms, technologies, and policies through which an organization decides which AI systems to activate, and which outcomes to accept, verify, or reject. Distinct from compliance (adherence to external standards) and oversight (internal monitoring).                                                                                                                                                                                                   |
| **Kit**               | A reusable component an individual or team has built to make AI behave the same way the same time on the same task. Examples include markdown skills, prompt templates, scheduled jobs, shared notebooks, small scripts. Also commonly known as module or apparatus.                                                                                                                                                                                                                 |
| **Maturity**          | The precision with which the governing protocols specify the boundary between AI autonomy and human judgment. A property of coordination design, not of tools, adoption rate, or compliance coverage.                                                                                                                                                                                                                                                                                |
| **Tension**           | A tradeoff plus a conflict (Tim Beiko, 2024). Distinct from a tradeoff: tradeoffs precipitate decisions that enjoy finality once made; tensions describe dynamic states that require ongoing management. Tensions cannot be solved, only navigated. A popular tension often discussed in business operations is the dynamic relationship between efficiency and thoroughness ("ETTO principle").                                                                                     |
| **Bottleneck**        | The function where the gap between AI usage and protocol precision is largest and highest-stakes. The bottleneck constrains the organization's opportunity regardless of how mature other functions are.                                                                                                                                                                                                                                                                             |


---

## Chapter 2 — An adoption model in five levels

Five levels describe how organizations move from invisible AI use to AI as coordination infrastructure. Each level has a governing protocol, a blind spot that protocol creates, and a failure mode predictable from the limits of the protocol.


| Level | Name            | Governing scope    | What it looks like                                                                                      | Documented case                     |
| ----- | --------------- | ------------------ | ------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| 1     | Shadow          | None               | AI in use through personal accounts; There is no monitoring; no governing policy                        | Samsung                             |
| 2     | Kit             | Access scope       | Access policy in place; users encoding workflows as reusable kits; productivity invisible to dashboards | Klarna · Shopify · Anthropic Legal  |
| 3     | Designed        | Workflow scope     | Workflows built around AI with named owners, quality metrics, and escalation paths                      | Uber · Boom Supersonic              |
| 4     | Infrastructural | Sector scope       | AI is a sector baseline; coordination challenge crosses organizational boundaries                       | EDI in retail (Walmart, late 1980s) |
| 5     | Planetary       | Civilization scope | AI is integrated into civilization-scale systems; legibility is the governance challenge                | Internet protocols (TCP/IP, BGP)    |


### Level 1 — Shadow

AI tools entered through individual initiative rather than organizational decision. Employees use personal accounts for work tasks, no policy governs what data leaves the organization, and exposure is invisible until a leak, a regulatory inquiry, or a quality failure surfaces it.

Governing protocols are absent. No coordination mechanism specifies what tools may be used, what data may be submitted, what outputs require review, or who is accountable for outputs used in consequential decisions. The blind spot follows directly: the organization cannot distinguish reckless personal use from sophisticated bilateral pipelines; both are invisible.

The failure mode is unaccountable AI access. AI systems operate with organizational data and produce outputs entering organizational decisions without any protocol governing accountability. When the failure surfaces — a data leak, a sanctioned professional, a customer misled by a chatbot — the organization has to improvise. Often there is no protocol to invoke and no record to audit. In April 2023, three Samsung Electronics engineers independently submitted proprietary source code, equipment specifications, and a meeting transcript to ChatGPT through personal accounts within one month. Samsung discovered the exposure only after the fact, banned external AI tools enterprise-wide, then built and selectively re-admitted under protocol. Reco.ai (2025) reports 71% of enterprise employees use unauthorized AI tools, with an average 400-day discovery lag. Shadow adoption is universal; the failure condition is remaining at Level 1 while AI exposure grows.

*Historical parallel — late 1990s.* Employees used personal Hotmail and Yahoo accounts for business communication before corporate email was ubiquitous. Shadow email created IP, legal, and compliance exposure that resolved through IT-provisioned corporate email with governance.

### Level 2 — Kit

Leadership has decided AI adoption is strategically necessary and granted broad access. Enterprise licenses are in place; an access policy exists; integration accelerates. Underneath the policy layer, users are encoding their workflows into kits — reusable components (markdown skills, prompt templates, scheduled jobs, shared notebooks) that attempt to make AI behave the same way the same time on the same task. The kits are the productivity unit at this level; the policy is necessary but inert without them.

The primary governing protocol is access scope. The organization has likely specified who can use which AI tools under what conditions. It has not specified what AI produces or how outputs are verified before consequential use. The blind spot is the kit layer itself — the dashboards measure license utilization, not the user-encoded components that are doing the actual productivity work. Two organizations with identical license utilization but different kit layers underneath end up at different places.

The failure mode is access-without-output-governance. As AI becomes entrenched at various localities (e.g. customer communications, financial models, meeting notes, contracting), output quality is determined by individual judgment. Klarna's 2023–2025 deployment is an example case: 90% daily AI adoption, two-thirds of customer-service chats handled by AI, $40M in claimed profit improvement, then a public CEO reversal in May 2025 citing outputs "generic, repetitive, insufficiently nuanced." The competency that the displaced human contractor embodied — empathy, escalation judgment, nuance — was attempted to be duplicated as a kit. Anthropic's legal team self-reports the inverse: extended the teams capability through an AI plugin based on team's actual memos, risk frameworks, and policy documents.

*Historical parallel — early 20th century.* Rural users repurposed automobiles as general-purpose power sources from 1903 to 1950, driving corn shellers, washing machines, and water pumps from jacked-up rear wheels. Their interpretive flexibility (Kline and Pinch, in the SCOT tradition) eventually drove Ford to release dedicated trucks in 1916 and the industry to produce specialized tractors. The kit phase of a technology produces the human capital that later integration machinery capitalizes on (Sachin Benny, 2026).

### Level 3 — Designed

AI serves as an engine within core workflows. Removing it would require rebuilding the workflow. The organization has moved past *how can I increase productivity* to *which parts of our competitive model only exist because of AI affordances.*

At this level, specific workflows have defined input preparation standards, output verification checkpoints, escalation triggers, and feedback loops. Inference is core to function. New protocols emerge to specify the boundary between AI autonomy and human judgment. The blind spot is temporal: workflow-level protocols govern internal operations but cannot coordinate across functions, with external partners, or with regulators operating at different speeds.

The failure mode is temporal divergence. AI accelerates some workflows while external dependencies — client review cycles, regulatory response, cross-functional handoffs — remain at a different pace. Uber's engineering organization is the most thoroughly documented case. By March 2026, 84% of developers are active agentic-coding users, 65–72% of code is AI-generated, and 11% of pull requests are opened by agents. CTO Dara Khosrowshahi: "AI is enabling people to become superhumans in terms of their productivity and the impact that we can realize for our end users." The bottleneck shifted from coding to code review, and Uber responded with two protocol systems: Code Inbox (smart assignment of agent-generated PRs based on code ownership and review service-level obligations) and U Review (AI-assisted review that reduces human review burden). Boom Supersonic illustrates the same pattern in a safety-critical domain: AI-enabled iteration is the design methodology, compressing timelines in such a way that forced them to integrate upstream in their supply chain.

*Historical parallel — 2008–2015.* Software teams redesigned workflows around git and CI/CD. Competitive output depended on how well the deployment workflow was designed. Domain expertise — what a good code review looks like, how to structure a release strategy — became the limiting constraint.

### Level 4 — Infrastructural

AI capability has become a sector baseline. Individual organizational advantage has mostly dissipated. The governance challenge is now collective: how the industry coordinates AI use, handles shared risks, and establishes interoperability standards.

Trading partners, regulators, and competitors operate within shared interfaces. Individual maturity is necessary but not sufficient — an organization at Level 3 alone does not produce the network effect that Level 4 requires. The blind spot is what an individual organization cannot see beyond its own boundary: the second-order effects of sector-wide AI adoption, the shared attack surface, the cascading failures that follow when several organizations' protocols rest on a common assumption.

The failure mode is sector fragility. The protocol that made the sector work also makes the sector vulnerable to a single point of failure. Walmart's 1990s mandate of Electronic Data Interchange (EDI) for all suppliers is the cleanest historical case: not adopting EDI meant not participating in the market, but the resulting integration also meant that one large supply-chain failure could propagate across hundreds of trading partners. The 2017 NotPetya attack exploited the same shared-protocol surface in containerized shipping. Sector-scale AI adoption is at the equivalent of EDI's mandate phase; the corresponding fragility patterns have not yet been documented because the timeline is too short, but the structural pattern is predictable.

*Historical parallel — late 1980s to 1990s.* EDI in retail or banking SWIFT in finance. Each became table stakes; each created the failure modes that follow from shared infrastructure.

### Level 5 — Planetary

AI is embedded within civilization-scale coordination systems: supply chains, financial infrastructure, public health surveillance, energy grids. The governance challenge is legibility — understanding what the systems are doing well enough to intervene when they fail.

No single actor controls the full system. Coordination happens through layers of inherited protocol, much of it decades old and entangled, much of it now operating at scales its designers did not anticipate. The blind spot is systemic: the failure modes are emergent properties of protocol interaction, and often not properties of any one component.

The failure mode is legibility collapse. The system continues to function — most of the time — but no one can fully describe what it is doing or why. The 2021 Facebook BGP misconfiguration took multiple platforms offline globally before any organization could respond, because the protocol stack had grown opaque to its own operators. Internet protocols (TCP/IP, BGP) are the present-day case: they run trillion-dollar coordination flows, no actor controls them, and the people who could explain how they work are aging out of the workforce. Civilization-scale AI infrastructure — supply-chain optimization layers, fraud-detection networks, public-health surveillance systems — is being built on top of similar protocol stacks, with the same legibility risk compounded by the additional opacity of the AI systems themselves.

*Historical parallel — 1980s to present.* The internet's own protocol layer. TCP/IP and BGP were designed for cooperative use among a small number of well-resourced operators. Their use at planetary scale has produced the legibility problem they were not designed to handle.

### Bottleneck heterogeneity

Organizations occupy multiple levels simultaneously across functions. The effective maturity level for risk purposes is the bottleneck: the highest-stakes function where protocol precision is lowest. Identifying that function is the primary diagnostic task and the subject of Chapter 7.

The "Finding Fault Lines within the Firm" memo (Protocolized, 2026) observes the structural pattern: "In geology, fault lines are not identified by close surface inspection. They are discovered when accumulated stress forces the underlying structure to express itself. Persistent problems and persistent performance gaps point less to local error or exceptional talent than to the protocols through which pressure concentrates and trade-offs are stabilized." The bottleneck function is the fault line. It is not always visible until a liability event or a competitor's advantage reveals it.

---

## Chapter 3 — Getting started with AI adoption

The most common question teams ask is *where do we start?* The most useful answer treats AI adoption as a ladder where each rung builds on the one below it. Level 0 is the chat window, where most users already are. The job of an adoption program is to move every user one rung higher than they are today, not to skip to Level 4 in a few months.

### Pre-pilot readiness check

Before selecting a use case, run a quick readiness check with the executive sponsor.


| Question                                                                | Pass condition                                                      |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Has your organization completed a security and legal review of the AI tools and related data being considered?    | Data boundaries, connector permissions, legal alignment, and auditability documented |
| Does an executive sponsor exist with budget authority for the pilot?    | Named individual; budget approved through Phase 2 (Months 2–3)      |
| Have two or three pilot teams been identified with motivated leads?     | Champions named; their function leads aware and supportive          |
| Are success metrics defined?                 | Specific outcomes or KPIs with baselines; measurable in weekly check-ins        |

If any answer is no, address it before committing to a pilot timeline. Pilots that launch without these conditions produce reported activity but not durable productivity gain.

### Choosing your first use case

Good AI pilot work falls into one or more of four categories.

- **High volume, high repetition.** Work that happens dozens of times a week and follows a knowable pattern, such as meeting prep, data pulls, or weekly reports.
- **Information-dense synthesis.** Anywhere a human is spending time being the integration layer between systems. Pipeline reviews, regulatory monitoring across jurisdictions, quarterly financial narratives.
- **Bottleneck-creating work.** Speeding up cross-functional work that does not save one person time but unblocks everyone downstream. Legal review of marketing assets and creative briefs are the standard examples.
- **Expertise-dependent but process-driven.** Business reviews, specialized recruiting screens, product reviews. The work depends on judgment, but the judgment follows a process the team's best people have internalized without writing it down. This category pays back the most: encode the process in a kit and everyone on the team inherits it.

### Starting points by function

Each row below is a Level 1 entry point — a single, real deliverable AI produces against your actual files and systems. Each is chosen because it converts cleanly into a Level 2 kit once a team has run it by hand a few times.


| Function  | First use case                                            | What you'd measure                                    | Time to first deliverable |
| --------- | --------------------------------------------------------- | ----------------------------------------------------- | ------------------------- |
| Legal     | NDA review against your playbook                          | Review turnaround time; queue depth                   | 2 weeks                   |
| Finance   | Variance analysis with root-cause commentary              | Time from close to narrative; analyst hours per cycle | 3 weeks                   |
| Sales     | Pre-call research and brief generation                    | Prep time per call; rep-reported confidence           | 2 weeks                   |
| Product   | PRD drafting from customer feedback and analytics         | Time to first reviewable draft                        | 3 weeks                   |
| HR        | Performance review drafting from rubric and manager notes | Cycle completion rate; manager time per review        | 4 weeks                   |
| Marketing | Campaign brief to asset draft against brand guidelines    | Concept-to-review time; rounds of revision            | 3 weeks                   |


---

## Chapter 4 — Driving AI adoption at scale

Adopting the technology is the easy part. Getting an organization to actually use it well is much harder. The pattern that produces durable adoption is *bottom-up discovery, top-down scale.* Champions discover the workflows that matter; the organization promotes what worked so that the next user inherits it.

### The three-phase framework


| Phase    | Timeline   | Target level             | Key actions                                                                                                                              | Entry criteria                                                              | Exit criteria                                                                                           |
| -------- | ---------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Evaluate | Month 1    | Champions reach L1       | Security review; identify 2–3 champion teams; install pre-built kits; connect 1–2 core systems                                           | Pre-pilot readiness check passed                                            | Champions producing real Level 1 deliverables; first measured time savings                              |
| Pilot    | Months 2–3 | Champions reach L2 (Kit) | Champions run real workflows weekly; check-ins; measure against criteria; demo wins to adjacent teams                                    | At least one Level 1 deliverable shipped per champion team                  | Champions writing their own kits; at least three named, owned, shared kits per pilot team               |
| Scale    | Months 4–6 | Department reaches L3    | Promote pilot kits to admin-provisioned department library; onboard the next wave of users; assign protocol designer to harvest patterns | At least three promotable kits identified; department lead approves rollout | Kit reuse measurable across teams; new hires inheriting workflows; declining "how do I" support tickets |


### Named roles

Six roles carry the work across the three phases. Some of these are full-time positions; others are responsibilities assigned to existing staff. The cleanest implementations name the role-holder explicitly in writing.


| Role                               | Accountability                                                                                            |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Executive sponsor                  | Budget authority; clears organizational obstacles; signs off on scale decisions                           |
| Adoption lead                      | Owns the program end to end across phases; runs the check-ins; reports to sponsor                         |
| Function champion                  | A motivated user inside a function whose pilot work demonstrates value; writes the first kits             |
| Kit owner                          | The person responsible for a specific promoted kit's evolution; updates it; fields questions              |
| Protocol designer (FDE-equivalent) | Embedded in a function; identifies which kits are worth formalizing; designs the verification checkpoints |
| Security reviewer                  | Owns the data-handling, connector, and audit review; gates phase entries on readiness                     |


### Phase 1 — Evaluate

Find your champions. The right champions are the people in the organization already experimenting with AI on their own time, not adversarial skeptics who need to be converted. Ask each function lead to nominate one. Point the champions at their function's first use case, install the prerequisite kits, and connect the data sources they will need. Without connected systems the champions stay stuck at Level 0 chat. With them, a Level 1 deliverable is reachable in week one.

### Phase 2 — Pilot

Encourage the champions to show their teams what their workflows look like with AI in them. Skeptics convert when they see a four-hour contract review happen in forty-five minutes on a real contract. Run weekly check-ins. The check-ins are not for course-correction; pilot teams need room to find edge cases and report them while they are fresh. Their purpose is early visibility into which use cases are landing.

The signal that the pilot is working is not hours saved. It is *champions starting to write their own kits.* When a sales rep takes the call-prep workflow she has been running by hand and turns it into a `/call-prep` skill, she has crossed from Level 1 to Level 2. When she schedules it to run automatically before every external calendar event, she is at Level 3. Track how many champion-authored kits exist at the end of the pilot. That count is the leading indicator for the scale phase.

### Phase 3 — Scale

This is where the economics shift. Every kit built during the pilot is an asset. The marketing team's blog-review kit becomes the template comms teams adapt for their own use. The finance variance-analysis kit one analyst built becomes the kit the whole finance organization runs. Tribal knowledge gets encoded and reused rather than walking out the door when someone leaves.

Scale also changes the onboarding equation. A new hire who installs the department's promoted kits on day one starts at Level 2, not Level 0. They inherit the encoded workflows before they have time to develop bad habits, and the floor for the whole team rises. The adoption lead's role at this phase is not to build kits. It is to make sure the path upward is paved — that promoted kits exist, that named owners exist, that the next champion has somewhere to go after the first pilot.

---

## Chapter 5 — How the Protocol Institute adopts AI

The Protocol Institute is the home of *Protocolized* magazine and the successor to the Summer of Protocols program (2023–2025). Its mission is to advance the theory and practice of protocol design across domains, and to build the field and community capable of stewarding the planetary-scale process of *protocolization* — the slow, largely invisible means by which human behaviors become standardized into the coordinating infrastructure of civilization.

The Institute is organized as a small core team and several Special Interest Groups (SIGs), each focused on a different research or practice area. Two of those working patterns illustrate the model in practice — at Level 2 (Kit) and at Level 3 (Designed).

### Case study 1 — SIGBIZ AI Enablement Advisory

#### The problem

The Protocols for Business Special Interest Group was tasked with building an AI Capability Maturity Model for enterprise adoption teams: a desk-research synthesis spanning forty sources, a blog post, an eight-page litepaper, an interactive HTML diagnostic, and the adoption guide you are currently reading. The work needed to be defensible enough to cite, specific enough to be actionable for an adoption lead, and produced on a timeline a small SIG team could sustain. Conventional approaches to a publication of this scope — a research firm or a consulting engagement — were out of reach. So was the conventional approach to building an HTML diagnostic, which would require a dedicated engineering team and a custom React app.

#### The approach

The SIG built a kit-rich workflow. Several distinct kits emerged through the work, each starting as one person's reusable component and getting promoted to a SIG-shared artifact with a named owner.

- *The model kit.* A YAML domain-specific language (`ai-cmm-v3.yaml`) captures the model's structure — five levels, six protocol dimensions, failure modes, transition requirements, case anchors. Both humans and AI can read and edit it. Every prose output is generated against this single source of truth. Updating a level's failure modes once propagates across the blog, the litepaper, the artifact, and this guide.
- *The source catalog kit.* `Research/source-catalog.md` is an annotated bibliography with consistent metadata, citation format, and category tagging across forty entries. Every claim in every output is checked against the catalog. Adding a new source updates one place; the next draft inherits the citation.
- *The layout-test kit.* A 21-criterion automated test suite runs after any structural change to the artifact's HTML. It catches regressions in spacing, typography, and component alignment before review.
- *The style-guide kit.* `_REPORT-STYLE.md` is a checklist of voice and structure standards — finding-first sentences, named numbers, AI-trope avoidance, em-dash discipline — applied against every draft before it goes to review.

The SIG runs the kits weekly. Drafts are produced against the YAML DSL, checked against the source catalog, tested against the layout suite, and edited against the style guide. No one writes a draft from scratch. The role of the SIG members is editorial judgment, source quality, and decisions about which arguments to make — work that depends on domain expertise the AI does not have.

#### The impact

The full publication suite — blog post, litepaper, artifact, plus this adoption guide — was produced by a SIG team of part-time members rather than a writing team operating at the prose level. The same kits are reusable for the next SIG project. The kits are the durable asset; the publication is what the kits produce on a given run.

> The interesting question for the SIG was never whether AI could write a litepaper. It was what kits the SIG needed to build so that any future SIG project starts at Level 2 rather than at Level 0.

The SIG's work also illustrates an honest property of Level 2: it is mid-promotion, not finished. Some kits live in shared infrastructure with named owners; others remain personal artifacts in the process of being promoted. The Level 2-to-3 transition is the moment a kit gets a verification checkpoint — a defined review step before its output reaches an external party — and that work continues across SIG projects.

### Case study 2 — *Protocolized* magazine editorial pipeline

#### The problem

*Protocolized* sustains a publishing pipeline that spans short-form essays, long-form research, and book-length archival projects. Two decades of accumulated writing — blog archives, newsletter back-catalog, social posts — sit in disconnected formats and need to be reissued as books and ebooks. Conventional publishing operations would require an in-house publishing team or an outsourced agency. Neither is available at the scale the magazine operates.

#### The approach

Two factories, connected at a designed handoff point. Venkatesh Rao, the magazine's Director of Research, operates a personal Claude Code factory on his laptop. The factory is hosted in a Dropbox folder hierarchy where each subfolder has its own `claude.md` file specifying the work that happens there. Rao's factory takes raw archival material — Twitter archives, blog posts, newsletters — and produces rough first-draft manuscripts. His long-time publishing collaborator Jenna Dixon operates a separate Claude Code factory that takes those manuscripts and produces finished print and ebook artifacts ready for distribution.

The handoff between them is a shared Dropbox folder plus a *manuscript transmittal server* Dixon built for metadata. When Rao submits a `.docx` file from his factory, Dixon's factory returns revised requirements — styling issues, layout concerns, permissions metadata — that Rao's factory needs to address before hers can begin design. He instructs his factory to fix them and returns the file. What flows between the factories is not finished work. It is intermediate production states, specifications, and revised requirements — the industrial intermediates that flow between specialized firms in any production economy.

#### The impact

Neither Rao nor Dixon writes code. Neither has touched a line of content text in the production process. What they bring is domain expertise — Rao's writing and editorial judgment, Dixon's two decades of publishing-industry knowledge. Claude Code provides commodity technical execution at the shell level. Currently, Rao's factory dashboard shows two-dozen book projects in flight — output volume that would require a small in-house publishing team in the conventional model.

> The fascinating thing? This very corporate-seeming pipeline was set up by two people who basically don't code. What we do bring to the party though, is domain expertise.
> — Venkatesh Rao, *Have Your Factory Call My Factory* (Protocolized, March 2026)

The Level 3 marker is the protocol layer between the factories. The manuscript transmittal server is a designed, repeatable, named-owner coordination mechanism. It is the difference between two people swapping files (a Level 2 kit pattern, fragile and bilateral) and two factories shaking hands at a defined interface (a Level 3 designed workflow, replicable and inheritable). The same pattern is repeating elsewhere across the Protocol Institute's collaborations — in hobbyist robotics work, in the publishing of the 2026 Long Now collaboration, and in the editorial pipeline of *Protocolized* itself.

---

## Chapter 6 — Diagnose your level

Before deciding what to do next, place your organization on the model. Most organizations occupy multiple levels simultaneously across functions. The level that matters for risk and prioritization is the bottleneck — the highest-stakes function where the protocol is least precise.

### Five questions

The diagnostic asks five questions, each surfacing a different cut of the maturity profile.

1. **Visibility.** Does IT have an inventory of AI tools in use across the organization, including personal accounts? If the answer is no, at least one function is at Level 1 regardless of how mature the others are.
2. **Output governance.** For your most-used AI workflow, what happens when the AI is wrong? If the answer is a shrug, a case-by-case correction, or *it hasn't happened yet*, the workflow is at Level 2.
3. **Kit layer.** Can you name three reusable AI components your team has built and shared? Markdown skills, prompt templates, scheduled jobs. If you cannot name three, the kit layer is missing — Level 2 by policy, not by practice.
4. **Workflow design.** Is at least one core workflow built around AI with a named owner, a quality metric, and a documented escalation path when the workflow fails? If yes, that workflow is at Level 3. The number of Level 3 workflows is the leading indicator for the organization's overall trajectory.
5. **Sector position.** Is your AI capability competitive parity, ahead, or behind the dominant players in your sector? Sector position determines whether Level 4 is on the horizon or already arrived.

### Identifying the bottleneck

The five answers map to a level placement and to a *bottleneck function* — the function where the gap between AI exposure and protocol precision is largest. Most of the diagnostic value sits in the bottleneck identification, not in the headline level. A Level-3-on-average organization with a Level-1 customer-facing function should treat the customer-facing function first, regardless of how mature its engineering org is. The recommended first move depends on the bottleneck, not the average.

### From level to next move

Each level has a single first move. Treat it as the most-leveraged investment for an organization at that level; supplemental work matters less until this move has been made.


| Current level       | First move                                                                                                                                          |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 — Shadow          | Inventory AI use; sanction at least one tool; issue a minimum data-boundary policy                                                                  |
| 2 — Kit             | Inventory the kit layer; promote one kit from a personal artifact to an organizational one with a named owner and a verification checkpoint         |
| 3 — Designed        | Identify the temporal-divergence bottleneck (the function where AI output velocity exceeds review capacity) and design the protocol that governs it |
| 4 — Infrastructural | Engage with sector standards bodies; identify the shared-protocol surface that creates the most concentrated risk                                   |
| 5 — Planetary       | Invest in legibility — instrumentation, documentation, knowledge-transfer to the next generation of operators                                       |


> ### Run the diagnostic *(coming soon)*
>
> A standalone version of the diagnostic is live now at [protocolized.dev/ai-maturity-model](https://protocolized.dev/ai-maturity-model). The integrated version, with bottleneck-function detection and recommendations specific to this guide, will ship in v1.0 of the AI Adoption Guide.

---

## Chapter 7 — Success patterns and failure modes

Across organizations that have moved up the maturity model, five patterns recur. Across organizations that stalled, five failure modes recur. Both lists are useful as a checklist before pilot decisions.

### Five success patterns

**Champion-led pilots over top-down mandates.** The champions discover the use cases that matter to their function. Top-down mandates produce reported adoption without underlying kit growth.

**Kit harvesting over central design.** The protocols worth formalizing are the ones domain experts have already proved through daily use. The organization's job is to identify, capture, and systematize them — not to design new ones from a central governance function.

**Named workflow owners.** Every promoted kit has a person responsible for its evolution. Kits without named owners stagnate and become brittle within a quarter.

**Output-scope governance, not access-scope.** The protocol that matters is the one that governs what AI produces and who reviews it before it reaches a consequential decision. An access policy is necessary but does not produce reliability on its own.

**Domain-embedded protocol designers.** Protocol design happens inside functions, by people with domain expertise (the Forward Deployed Engineer pattern), not in a central governance team. Centrally-assigned governance staff lack the domain knowledge required to tell a high-value kit from a brittle one.

### Five failure modes

**Mandate without criteria.** Leadership declares AI use non-optional but defines no standard for what compliance looks like. Adoption metrics rise; durable productivity does not. Pattern observed at Shopify (April 2025 memo, no published competency standard for non-technical roles).

**Turnkey replacement of dual production-and-QA roles.** AI replaces a human role that was simultaneously a production step and a quality-check step. The kit that the displaced human embodied — pattern recognition, empathy, escalation judgment — is destroyed before being encoded. Pattern observed at Klarna (customer service AI reversed May 2025) and Duolingo (native-speaker contractor replacement, 2024).

**Policy without handoff.** AI is deployed for external-facing or legally consequential functions without a verification protocol between AI output and organizational accountability. Pattern observed at Air Canada (BC Civil Resolution Tribunal, 2024 — chatbot stated a bereavement-fare policy that did not exist; the airline was held liable).

**Shadow F2F invisible to enterprise governance.** The most sophisticated AI work in the organization — bilateral, high-trust factory-to-factory pipelines between domain experts — is invisible to the enterprise. The governance response calibrated to shadow-use risk eliminates the value-creating activity it cannot see.

**Premature optimization.** The organization tries to centrally design the official AI workflow before users have iterated through enough kit forms to know what works, and before the technology components mature. The official workflow is rejected or rapidly outdated in practice. Users keep their personal kits in the shadows; the organization has a published standard that's unused.

Each failure mode is the predictable consequence of treating AI adoption as a control problem rather than a protocol-design problem. Each success pattern is what protocol design looks like in practice.

---

## Chapter 8 — New forms of work

The argument so far has been that an organization advances along the AI adoption ladder by promoting kits, designing workflows, and building protocols. There is a second argument worth naming explicitly: as the organization advances, the shape of work itself changes.

The factory-owner economy is a useful frame for the change. Venkatesh Rao describes the pattern as the rise of "bespoke F2F artisanal capitalism" — work organized neither as jobs nor gigs but as factory-to-factory connections between operators who own their AI infrastructure. The principal factors of production are intelligence-on-tap, computers, and internet connections. New roles are emerging that did not exist three years ago: the kit author, the protocol designer, the F2F operator, the bricoleur (in Karl Weick's sense — someone who creates order from whatever materials happen to be at hand). Some of these roles are being formalized inside enterprises (the Forward Deployed Engineer at OpenAI, the AI Initiatives director at companies like Jamf). Most are not yet, and the organizations that recognize them first will have a recruiting advantage.

The Coase argument predicts a structural shift. Firms exist, Ronald Coase wrote in 1937, because they reduce transaction costs the open market cannot handle cheaply. Lawrence and Lorsch added the second cost in 1967: as organizations differentiate, *integration* costs rise — the cost of holding specialized teams together under a single coordinating frame. AI changes both costs asymmetrically. External transaction costs are falling — a solo operator with the right tools can find specialists, evaluate contractors, synthesize scattered knowledge, and write enforceable specifications more cheaply than a mid-sized firm could. Internal integration costs are rising — AI accelerates the pace and volume of output inside each function, and the integration burden of reconciling AI-assisted outputs across teams lands on individuals rather than disappearing. The mid-market gets squeezed from both sides; the very large firm with integration machinery and the solo operator with an AI stack are the structural winners.

Civilization advances, Alfred North Whitehead observed, by extending the number of important operations it can perform without thinking about them. The Protocol Institute's own version, modified for the protocols of dynamic non-events, is closer: civilization advances by increasing the number of important non-events it can produce without thinking about them. AI adoption is an exercise in producing reliable AI outputs as a non-event — an outcome whose absence is invisible until the protocol fails to produce it. The organizations that adopt AI well are the ones that build, level by level, the protocol infrastructure that produces those non-events at scale.

You don't need every employee using the same kits to call adoption successful. You need every employee more productive than they were before, a clear path to the next rung of the ladder, and a recognition that the work itself is changing on the way up.

---

## Additional resources

### Read

- *The AI Capability Maturity Model* — full litepaper at [protocolized.dev/litepaper-ai-protocols](https://protocolized.dev/litepaper-ai-protocols/)
- *The Missing Protocol Layer* — blog post at [protocolized.dev/blog-the-missing-layer](https://protocolized.dev/blog-the-missing-layer/)
- *Have Your Factory Call My Factory* — Venkatesh Rao on the F2F editorial pipeline
- *AI, tractors, and the productivity paradox* — Sachin Benny on the kit phase of technology adoption
- *Introducing the Protocol Institute* — the launch essay describing the Institute's mission and structure
- *Finding Fault Lines within the Firm* — the bottleneck-as-fault-line framing

### Diagnose

- The AI Maturity Model standalone diagnostic at [protocolized.dev/ai-maturity-model](https://protocolized.dev/ai-maturity-model)

### Engage

- The Protocols for Business Special Interest Group (SIGBIZ) — Protocol Institute Discord
- *Protocolized* magazine — Substack
- The Protocol Institute — [protocolized.summerofprotocols.com](https://protocolized.summerofprotocols.com)

---

*v0.2 — May 2026. Protocols for Business Special Interest Group, Protocol Institute.*