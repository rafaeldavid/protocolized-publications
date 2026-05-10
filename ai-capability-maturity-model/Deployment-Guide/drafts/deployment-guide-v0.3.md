# Adopting AI within your organization

*A practical guide for understanding, and accelerating, AI adoption through the lens of protocols, with use cases and lessons from the Protocol Institute and other organizations.*

**Protocolized — Protocols for Business Practice**
v0.3 | May 2026

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
9. The new nature of work
10. Additional resources

---

## Foreword: The evolution of AI at work

AI-enabled workflows and tools are appearing all around you. The question now is whether anyone in your organization can describe what good adoption looks like, and the opportunities and failure modes likely to emerge.

Recent research on AI at work documents a consistent symptom. AI intensifies individual work — expanding task scope, increasing multitasking, extending hours beyond the boundary of the workday. The intensification is real, and treating it as a worker-wellbeing problem misses what is producing it. The workforce is discovering new coordination patterns faster than organizations can standardize them. Overload, disorientation, mania, and fear of being left behind, is what it feels like from the inside.

The trajectory has been fast. In 2024, using AI at work meant interfacing with a chat window. In 2025, agentic tools moved into developer workflows. In 2026, the same pattern reached every other function — analysts, lawyers, marketers, account executives — moving from a chatbot you ask a question to an agent that delegates work end to end. Most organizations crossed those boundaries without a framework of orientation. Most of us have been unsure if we're getting better at adoption or just busier.

Over the last year, the Protocols for Business Special Interest Group of the Protocol Institute has been building that orientation framework. This guide, a tool-agnostic adoption model, is the executive-facing distillation of it. It includes new concepts, case studies, a diagnostic, as well as common success and failure modes. The patterns are field-tested and meant to be lifted into your own context.

Before you dive in, it's crucial to understand that AI is not a tool, a platform, or a product. It is a technology paradigm — a class of systems with structural properties (probabilistic outputs, generative capacity, indeterminate failure distributions) that an organization integrates into its operating model rather than deploys to employees. While *deployment* is the action of standing up a particular tool, policy, or workflow, *adoption* names the long arc of an organization's integration with the paradigm itself. This guide is about adoption.

---

## Chapter 1 — Introducing the AI Adoption Guide

Most enterprises are discussing and planning for AI as if it were an next enterprise software productivity solution. It is not, and the failure modes that follow from that assumption are predictable.

AI systems are probabilistic. The same input can produce different outputs; the failure distribution cannot be characterized in advance. Deterministic software has bugs whose modes are, at least in principle, enumerable. AI failures are not — the distribution shifts with every model update, input domain, context length, and tooling configuration. The correct response to AI uncertainty is protocol design to manage the new problems that come hand-in-hand with AI affordances.

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

The failure mode is access-without-output-governance. As AI becomes entrenched at various localities (e.g. customer communications, financial models, meeting notes, contracting), output quality is determined by individual judgment. Klarna's 2023–2025 deployment is an example case: 90% daily AI adoption, two-thirds of customer-service chats handled by AI, $40M in claimed profit improvement, then a public CEO reversal in May 2025 citing outputs "generic, repetitive, insufficiently nuanced." The competency that the displaced human contractor embodied — empathy, escalation judgment, nuance — was attempted to be duplicated as a kit. Anthropic's legal team self-reports the inverse: extended the team's capability through an AI plugin based on team's actual memos, risk frameworks, and policy documents.

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

The most common question deployment leads ask is *where do we start?* The most common mistake is to answer it from the deployment lead's desk. The use case that matters in your organization is not a slot to be filled from a list of approved candidates; it is a pattern that already exists somewhere in your operations and that the adoption program's job is to surface, name, and harvest.

AI adoption is a protocol-design problem, and protocols cannot be designed centrally for a function whose work the central team has never done. The deployment lead's role at the start is closer to discovery than architecture: find where domain experts are already running AI on their own time, and treat their unwritten workflow as the first artifact to support.

### Pre-pilot readiness check

Before identifying a use case, run a quick readiness check with the executive sponsor. The check is not about which use case is right; it is about whether the organization can support a real pilot at all.


| Question                                                                                                          | Pass condition                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Has the organization completed a security and legal review of the most likely AI tools and data being considered? | Data boundaries, connector permissions, legal alignment, and auditability documented |
| Does an executive sponsor exist with budget authority for the pilot?                                              | Named individual; budget approved through Phase 2 (Months 2–3)                       |
| Have two or three pilot teams been identified with motivated leads?                                               | Champions named; their function leads aware and supportive                           |
| Are success metrics defined for *the pilot itself* — not the use case?                                            | Specific, baselined, observable in weekly check-ins                                  |


If any answer is no, address it before committing to a pilot timeline. Pilots that launch without these conditions produce reported activity but not durable productivity gain.

Notice what is not on the readiness checklist: a list of approved use cases, a function-by-function curriculum, a product roadmap. Those decisions get made in the next phase, by the people who will run the work.

### Surface what is already happening

Before selecting a candidate use case, do an audit of what is already in motion. Most organizations are already at Level 1 — they simply cannot see it. The audit is likely half-day exercise per function and does three things.

1. First, *find the shadow workflows.* Ask each function lead, separately and informally: who on your team is already using AI for work, and on what? The answers — usually a handful of names per function — are your champion shortlist. These are people who have absorbed early failure on their own time and learned where AI helps and where it does not.
2. Second, *find the unwritten processes.* Ask each function lead: what does your most experienced person do that no one has written down? Where does the "I just know how" knowledge live? These are the candidate kits — work that follows a knowable pattern, has a clear quality bar, and runs often enough to repay encoding. The unwritten process is the protocol; AI is the thing that lets the protocol scale beyond the one person who carries it.
3. Third, *find the bottleneck.* Per Chapter 2, the function that matters for adoption priority is not the one with the most AI excitement but the one where AI exposure × stakes is highest and protocol precision is lowest. The bottleneck is usually visible to the people downstream of it: ask what work consistently arrives late, in the wrong format, or with insufficient context, and the upstream function is your candidate.

The output of the audit is a short list of four to six candidate use cases, surfaced by each function's own champions. The deployment lead uncovers the list; the function chooses what to run.

### Evaluation criteria for a candidate use case

Not every shadow workflow is a good first pilot. A candidate is worth running when it meets four conditions.

- **Recurring.** The work happens often enough — weekly or more — that a kit produced this quarter pays back this quarter.
- **Encodes tacit expertise.** A domain expert can describe the steps if asked, but no one has written them down. Encoding the steps is the value, not speeding them up.
- **Observable result.** The deliverable is concrete and someone external to the pilot team can tell whether it improved. *More writing produced* is not observable; *time from input to a draft the manager will accept* is.
- **Bounded blast radius.** A bad output during the pilot is recoverable. The first kit is not the contract that goes to the regulator or the customer email that goes out automatically. Those use cases come after the kit has been hardened against misuse.

Use cases that meet all four criteria are **durable**. Use cases that meet three or fewer should be parked; the work to make them pilot-ready is itself the protocol-design problem the guide is about.

### What not to do

The pattern that fails reliably is to pick the first use case from a vendor case study, a competitor announcement, or a framework like this one. Each of these is an artifact from a different organization, with a different fault-line, a different talent layer, and different stakes. 

Importing the use case imports the failure. The right question is not *what did the vendor's reference customer do?* The right question is *whose unwritten process in this organization does AI most cleanly encode?* The candidate that emerges from that question is local by construction.

---

## Chapter 4 — Driving AI adoption at scale

Adopting a new technology paradigm, such as AI, will happen regardless of organizational intent. But getting your organization to use it well — durably, across functions, without producing predictable failure modes at scale — is the harder problem. The pattern that produces durable adoption is *bottom-up discovery, top-down scale.* 

Champions discover the workflows that matter; the organization promotes what worked so that the next user inherits it, and helps network use-cases together. The two halves are not interchangeable. Top-down attempts to skip the discovery half produce reported adoption without underlying kit growth — the most common failure mode in published case studies, and the cleanest indicator that an adoption program is in trouble.

### The three-phase framework


| Phase    | Timeline   | Target level             | Key actions                                                                                                                          | Entry criteria                                                              | Exit criteria                                                                                           |
| -------- | ---------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Evaluate | Month 1    | Champions identified     | Run the audit; identify 2–3 champion teams; install pre-built kits as starter templates; connect 1–2 core systems                    | Pre-pilot readiness check passed                                            | Champions producing real deliverables on their own use cases                                            |
| Seed     | Months 2–6 | Champions reach L2 (Kit) | Champions run their own workflows weekly; check-ins; measure against the criteria the champion proposed; demo wins to adjacent teams | At least one deliverable shipped per champion team                          | Champions writing their own kits; at least three named, owned, shared kits per pilot team               |
| Harvest  | Months 6+  | Department reaches L3    | Promote kits to admin-provisioned department library; onboard the next wave of users; assign protocol designer to harvest patterns   | At least three promotable kits identified; department lead approves rollout | Kit reuse measurable across teams; new hires inheriting workflows; declining "how do I" support tickets |


### Named roles

Six roles carry the work across the three phases. Some are full-time positions; others are responsibilities assigned to existing staff. The cleanest implementations name the role-holder explicitly in writing.


| Role                               | Accountability                                                                                            |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Executive sponsor                  | Budget authority; clears organizational obstacles; signs off on scale decisions                           |
| Adoption lead                      | Owns the program end to end across phases; runs the audit; runs the check-ins; reports to sponsor         |
| Function champion                  | A motivated user inside a function who chooses the pilot use case and writes the first kits               |
| Kit owner                          | The person responsible for a specific promoted kit's evolution; updates it; fields questions              |
| Protocol designer (FDE-equivalent) | Embedded in a function; identifies which kits are worth formalizing; designs the verification checkpoints |
| Security reviewer                  | Owns the data-handling, connector, and audit review; gates phase entries on readiness                     |


A note on the boundary between adoption lead and function champion. The adoption lead does not pick the use case. The adoption lead picks the *champion*, the *function*, and the *evaluation rubric*. The use case is the champion's call, audited but not assigned. This is the operational form of *kit harvesting over central design* — the success pattern named in Chapter 7. Where it is violated, the failure modes catalogued there follow.

### Phase 1 — Evaluate

Find your champions. The right champions are the people in the organization already experimenting with AI on their own time, surfaced through the Chapter 3 audit. They are not adversarial skeptics who need to be converted; conversion happens later, through the demonstrations the champions produce. Ask each function lead to nominate one champion — and to validate the nomination against the audit's shadow-workflow list, so the champion is the actual practitioner rather than the function's politically convenient pick.

Install missing prerequisites — pre-built starter templates the champions can adapt rather than write from scratch — and connect the data sources their candidate use cases require. Without connected systems the champions stay stuck at AI chatbots. With them, meaningful deliverables on a real workflow is reachable, often within weeks.

Phase 1 is complete when each champion team has produced a real deliverable on a real use case the champion chose. Hours saved is not the metric; *something the function would otherwise not have achieved* is the metric.

### Phase 2 — Seed

Encourage the champions to show their teams what their workflows look like with AI in them. Skeptics convert when they see a four-hour contract review happen in forty-five minutes on a real contract from their own queue. Run weekly check-ins. The check-ins are not for course-correction; pilot teams need room to find edge cases and report them while they are fresh. The check-ins surface which use cases are landing and which kits are stabilizing into something worth promoting.

The signal that the pilot is working is not hours saved. It is *champions starting to build their own reusable kits.* When a sales rep takes the call-prep workflow she has been running by hand and turns it into a `/call-prep` skill, she has crossed from casual usage to workflow kit usage. Track how many champion-authored kits exist at the end of the pilot. That count is the leading indicator for the scale phase.

### Phase 3 — Harvest

Every kit built during the pilot is an asset. The marketing team's blog-review kit becomes the template comms teams adapt for their own use. The finance variance-analysis kit one analyst built becomes the kit the whole finance organization runs. Tribal knowledge gets encoded and reused rather than walking out the door when someone leaves.

At this phase, team onboarding is often markedly different. A new hire who installs the department's promoted kits on day one starts with a different model of work. They inherit the encoded workflows before they have time to develop bad habits, and the floor for the whole team rises. The adoption lead's role at this phase is not to build kits. It is to make sure the path upward is paved — that promoted kits exist, that named owners exist, that the protocol designer has been engaged to harvest the patterns the kits reveal, and that the next champion has somewhere to go after the first pilot.

A failure to harvest is a common failure mode. The pilot succeeds; the kits stay personal; the gain stays local and often temporary. The protocol designer's job is to read across the kits the champions produced, identify the workflow shape they reveal, and propose the verification checkpoint that turns a kit into a workflow integrated as business-as-usual. Without that step, the organization plateaus at a kit-rich Level 2 and the next adoption wave starts again from initial discovery.

---

## Chapter 5 — How the Protocol Institute adopts AI

The Protocol Institute is the home of *Protocolized* magazine and the successor to the Summer of Protocols program (2023–2025). Its mission is to advance the theory and practice of protocol design across domains, and to build the field and community capable of stewarding the planetary-scale process of *protocolization* — the slow, largely invisible means by which human behaviors become standardized into the coordinating infrastructure of civilization.

The Institute is organized as a small core team and several Special Interest Groups (SIGs), each focused on a different research or practice area. Two of those working patterns illustrate the model in practice — one at the Level 1 → Level 2 (Kit) transition inside a SIG, and one at Level 3 (Designed) in the magazine's visual production pipeline.

### Case study 1 — SIGBIZ AI Discovery Acceleration

#### The problem

Throughout 2025, most members of the Protocols for Business Special Interest Group were using AI tools for their own work, and almost none of that work was visible to anyone else in the SIG. Members were collecting their own prompts, scripting small workflows in personal repos, learning the same early lessons in parallel. The cost was learning loss. The community of practice was running in private.

The challenge was the standard Level 1 → Level 2 transition: make shadow use visible, encourage further adoption without prescribing tools, and harvest what members had discovered before it was forgotten.

#### The approach

The SIG settled on three lightweight moves rather than a formal program.

- **Encourage basic AI tools, not common stacks.** Members used whatever AI tool they were already using — Claude, ChatGPT, Gemini, the open-source local models — and brought whatever they had built. The SIG explicitly avoided sanctioning a single tool or rolling out a "preferred" stack. The goal was to surface real practice, not to begin from a clean tooling canvas.
- **Avoid optimization and scale; embrace customization.** No one was told their workflow was wrong, and no one was asked to standardize their prompts to a SIG template. The premise was that interpretive flexibility is the engine of the transition. The SIG's role was to surface what people had built organically.
- **Fortnightly show-and-tell.** Every two weeks, members brought workflows, kits, and failures to the meeting. Demos ran for a few minutes each, with the expectation that interested members would follow up one-to-one.

#### The impact

Three things have shifted. First, AI adoption inside the SIG is now visible. Second, mutual discussion improved: members are collaborating on kits. Lastly, ambitions have expanded.

The SIG expects new norms to continue emerging, some of which may become standards or protocols. Some early examples include using formal ontologies for research and Github as a center for collaboration.

> The SIG never decided to "build kits." It decided to make AI use visible to itself. The kits were the residue of that visibility.

The case study illustrates the cheapest viable Level 1 → Level 2 transition: a recurring meeting, a no-judgment posture, and a willingness to wait for the patterns to emerge from practice rather than to legislate them in advance.

### Case study 2 — *Protocolized* visual identity

#### The problem

*Protocolized* needed a visual language for a magazine whose editorial method openly integrates LLM-assisted writing. The conventional options each carried a cost. Off-the-shelf image generators (Midjourney, DALL·E, Stable Diffusion via consumer interfaces) produce outputs that read as the visual signature of the moment — a generic AI aesthetic that locates the magazine inside the same trough every other AI-assisted publication occupies. Commissioned human illustration would not scale to a weekly publishing cadence. Aesthetic nostalgia — mid-century pulp, *Astounding*-era illustration revival — would have been available off the shelf and was the wrong move on principle: as editor James Langdon argued, *Astounding's* original power came from embracing the contemporary art of its time, not from mimicking the look of an earlier one. Doing as *Astounding* did meant training models on the art of *now*.

#### The approach

The magazine commissioned two narrowly-defined image generation models, each developed in collaboration with a named artist and hosted on the TITLES platform.

- *The Hyperpress model*, by artist Darius Ou, is trained on art derived from 3D-printed structures sliced into 2D cross-sections — what Ou calls *Spaceland Trees*, after Abbott's *Flatland*. The model produces an abstract visual language oriented toward technological infrastructure rather than figurative protagonists.
- *The Langdon model* is trained by editor James Langdon on neumorphic digital interface elements combined with the traditional mark-making techniques used by archaeologists. The training material commits the model to a specific compositional logic.

Both models are deliberately narrow. As Langdon notes, they are "not primed by their training art to resolve figurative prompts" — a design constraint that prevents the magazine from drifting back into generic figurative AI illustration. The TITLES platform handles the protocol layer between artists and the publication: it names artists, gives them creative control over their training art, pays royalties on the use of their models, and stores image metadata onchain for human-legible proof of provenance. The models are publicly available for community use — the kit is shared infrastructure rather than a proprietary asset.

#### The impact

The visual production pipeline meets the Level 3 criteria. Named owners (Langdon as editor, Ou and Langdon as model artists), a verification checkpoint built into the model itself (the abstraction constraint that fails figurative prompts), and a designed coordination layer between the participating roles (TITLES handles attribution and royalties as protocol, not as case-by-case negotiation). The output is a coherent visual identity that holds across issues without each cover requiring an art-direction debate.

The case study illustrates a Level 3 pattern often missed in business contexts: protocol design extends to the *aesthetic* output, not only the textual or operational. Choosing to train narrow models on commissioned training art rather than to use stock generators is the same kind of move SIGBIZ made when it harvested its own kits rather than buying a tooling stack — designing the kit rather than inheriting one designed by a vendor whose interests are not the publication's.

---

## Chapter 6 — Diagnose your level

Before deciding what to do next, place your organization on the model. Most organizations occupy multiple levels simultaneously across functions. The level that matters for risk and prioritization is the bottleneck — the highest-stakes function where the protocol is least precise.

A standalone diagnostic is available as a web assessment at [protocolized.dev/assessment](https://protocolized.dev/assessment). It takes about two minutes. The user defines the evaluation scope (whole organization, business unit, function, or team), runs a 25-question questionnaire, and receives a placement on the five levels along with the relevant failure modes for that level and a recommended next action.

> ### Note on this chapter *(placeholder — v0.3)*
>
> The current live assessment is built against an earlier version of the model in which Level 2 was named *Sanctioned*. The Kit re-spec used in this guide will be reflected in the next version of the assessment. Until then, treat the live assessment as the placement instrument and treat this guide's *Level 2 — Kit* description as the operational definition you should plan against. An integrated version of the diagnostic, with the Kit framing and bottleneck-function detection specific to this guide, will ship alongside v1.0 of the AI Adoption Guide.

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

AI-mediated tools and workflows are no longer features of the workplace; they have become part of the workplace itself — closer to weather or terrain than to thermostats or leather. This is *new nature*: technologically mediated conditions that have become immutable and indefinitely persistent. The dominant posture then becomes foraging, adapting behavior of someone inhabiting a landscape rather than the top-down planning of an architect with a blueprint. In short: the work environment is increasingly something that cannot be engineered. Instead, the AI-mediated work environment is the world your team inhabits.

The shift changes what the deployment should focus on. Older models focused on defining standard operating procedures, enforcing compliance, adjusting when the metric drifts. Now, the volume of AI-assisted output is too high to inspect case-by-case. New kits surface from the floor faster than any central process can catalogue them. The tools themselves shift behavior on every model update. Teams exposed to all of this no longer calibrate replicable outputs like controlled system. The AI deployment lead's job under those conditions is to make the new landscape navigable, and survivable — to provide the maps, keep the trails open, keep the lighthouse lit, and help re-orient when a team starts moving toward a pattern that compounds risk.

Hiring, performance, and onboarding follow. The candidate who follows an SOP rigorously is no longer the central hire; the candidate who finds their way through unfamiliar terrain is. The scarce skill is closer to applied curiosity than to AI literacy — building an internal map fast, noticing what works, sharing it with the team.

We are entering a new nature of work. The job is not to finish a platform deployment; it is to keep the function navigable as the landscape shifts, again and again. The outcome of a successful adoption program is not the kits, the workflows, or the published policies. It is a function whose people know how to work in this new nature, and whose managers know how to keep it inhabitable. The terrain will keep shifting, fast.

---

## Additional resources

### Read

- *The AI Capability Maturity Model* — full litepaper at [protocolized.dev/litepaper-ai-protocols](https://protocolized.dev/litepaper-ai-protocols/)
- *The Missing Protocol Layer* — blog post at [protocolized.dev/blog-the-missing-layer](https://protocolized.dev/blog-the-missing-layer/)
- *Have Your Factory Call My Factory* — Venkatesh Rao on the F2F editorial pipeline
- *Protocol Fiction Aesthetics* — James Langdon on training the magazine's image-generation models ([protocolized, November 2025](https://protocolized.summerofprotocols.com/p/protocol-fiction-aesthetics))
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

*v0.3 — May 2026. Protocols for Business Special Interest Group, Protocol Institute.*