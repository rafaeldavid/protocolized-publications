# Durable AI Adoption

*A practical guide to learn how to adopt AI across your organization, with case studies, maturity levels, and lessons from the Protocol Institute and other organizations.*

**The Protocol Institute — Protocols for Business Practice**
v0.6 | May 2026

---

## Contents

1. Foreword: Everywhere you look, AI is already there
2. Introducing the AI Adoption Guide
3. Adoption Maturity Levels
4. Getting started with AI adoption
5. The path to durable AI adoption
6. How the Protocol Institute adopts AI
7. Diagnose your level
8. Success patterns and failure modes
9. The new nature of work
10. Additional resources

---

## Foreword: Everywhere you look, AI is already there

AI-enabled workflows and tools are appearing all around you, multiplying outputs and collapsing production cycles from months to days or even hours.

The workforce is discovering new coordination patterns faster than organizations can integrate them. Overload, disorientation, mania, and fear of being left behind, is what it feels like from the inside. The question now is whether anyone in your organization can describe what good adoption looks like, and the opportunities and failure modes likely to emerge.

AI has evolved rapidly, from a chat window to agentic tools in arbitrary workflows. And yet, most of us have been unsure if we're getting better at adoption or just busier.

A key driver in this confusion is that AI is being treated as a bundle of software products. It is better understood as a technology paradigm like the steam engine, car, or personal computer. In other words, it is a class of systems with structural properties (probabilistic outputs, generative capacity, indeterminate failure distributions) that an organization integrates into its operating model. While *deployment* is the action of standing up a particular tool, policy, or workflow, adoption names the long arc of an organization's integration with the paradigm itself.

Realizing this, the Protocols for Business Special Interest Group of the Protocol Institute has been building an orientation framework for AI technology adoption. This guide, a tool-agnostic adoption model, is the executive-facing distillation of it. It includes new concepts, case studies, a diagnostic, as well as common success and failure modes. Let's dive in.

---

## Chapter 1 — Introducing the AI Adoption Guide

Most enterprises are discussing and planning for AI as if it were a next enterprise software productivity solution. It is not, and the failure modes that follow from that assumption are predictable.

AI systems are probabilistic. The same input can produce different outputs, and the failure distribution cannot be characterized in advance.

This property breaks the conventional governance model. Acceptable use policies, approved tool lists, and data boundaries are necessary but address the wrong question. They ask how to prevent misuse rather than how to specify the coordination rules that make AI output reliable in production. The right framing is thinking in protocols: rules governing how human and artificial agents coordinate at the handoff points where AI output becomes an organizational accountability.

A useful frame from the Protocol Institute's launch essay: protocols are *infrastructural technologies for producing non-events*. Their value lies in the failures that do not happen: the data leak that did not occur, the chatbot judgment that did not bind the company, the AI-generated brief that did not get filed without verification.
Following this insight, the capability maturity of an organization adopting AI is the precision with which its protocols produce those non-events.

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

## Chapter 2 — Adoption Maturity Levels

AI adoption follows a path that other general-purpose technologies have already traveled: email, EDI, the personal computer. Each stage along the path represents a different protocol regime: invisible personal use, encoded workflows, designed processes, sector infrastructure, civilization-scale systems. Most organizations don't know which stage they're at, and nobody is expected to skip ahead. The most useful first step is to locate yourself on the path.

Each level has a governing protocol, a blind spot that protocol creates, and a failure mode predictable from the limits of the protocol.


| Level | Name            | Governing scope    | What it looks like                                                                                      | Documented case                     |
| ----- | --------------- | ------------------ | ------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| 1     | Shadow          | None               | AI in use through personal accounts; no monitoring; no governing policy                                 | Samsung                             |
| 2     | Kit             | Access scope       | Access policy in place; users encoding workflows as reusable kits; productivity invisible to dashboards | Klarna · Shopify · Anthropic Legal  |
| 3     | Engine          | Workflow scope     | Workflows built around AI with named owners, quality metrics, and escalation paths                      | Uber · Boom Supersonic              |
| 4     | Infrastructure  | Sector scope       | AI is a sector baseline; coordination challenge crosses organizational boundaries                       | EDI in retail (Walmart, late 1980s) |
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

### Level 3 — Engine

AI serves as an engine within core workflows. Removing it would require rebuilding the workflow. The organization has moved past *how can I increase productivity* to *which parts of our competitive model only exist because of AI affordances.*

At this level, specific workflows have defined input preparation standards, output verification checkpoints, escalation triggers, and feedback loops. Inference is core to function. New protocols emerge to specify the boundary between AI autonomy and human judgment. The blind spot is temporal: workflow-level protocols govern internal operations but cannot coordinate across functions, with external partners, or with regulators operating at different speeds.

The failure mode is temporal divergence. AI accelerates some workflows while external dependencies — client review cycles, regulatory response, cross-functional handoffs — remain at a different pace. Uber's engineering organization is the most thoroughly documented case. By March 2026, 84% of developers are active agentic-coding users, 65–72% of code is AI-generated, and 11% of pull requests are opened by agents. CTO Dara Khosrowshahi: "AI is enabling people to become superhumans in terms of their productivity and the impact that we can realize for our end users." The bottleneck shifted from coding to code review, and Uber responded with two protocol systems: Code Inbox (smart assignment of agent-generated PRs based on code ownership and review service-level obligations) and U Review (AI-assisted review that reduces human review burden). Boom Supersonic illustrates the same pattern in a safety-critical domain: AI-enabled iteration is the design methodology, compressing timelines in such a way that forced them to integrate upstream in their supply chain.

*Historical parallel — 2008–2015.* Software teams redesigned workflows around git and CI/CD. Competitive output depended on how well the deployment workflow was designed. Domain expertise — what a good code review looks like, how to structure a release strategy — became the limiting constraint.

### Level 4 — Infrastructure

AI capability has become a sector baseline. Individual organizational advantage has mostly dissipated. The governance challenge is now collective: how the industry coordinates AI use, handles shared risks, and establishes interoperability standards.

Trading partners, regulators, and competitors operate within shared interfaces. Individual maturity is necessary but not sufficient — an organization at Level 3 alone does not produce the network effect that Level 4 requires. The blind spot is what an individual organization cannot see beyond its own boundary: the second-order effects of sector-wide AI adoption, the shared attack surface, the cascading failures that follow when several organizations' protocols rest on a common assumption.

The failure mode is sector fragility. The protocol that made the sector work also makes the sector vulnerable to a single point of failure. Walmart's 1990s mandate of Electronic Data Interchange (EDI) for all suppliers is the cleanest historical case: not adopting EDI meant not participating in the market, but the resulting integration also meant that one large supply-chain failure could propagate across hundreds of trading partners. The 2017 NotPetya attack exploited the same shared-protocol surface in containerized shipping. Sector-scale AI adoption is at the equivalent of EDI's mandate phase; the corresponding fragility patterns have not yet been documented because the timeline is too short, but the structural pattern is predictable.

*Historical parallel — late 1980s to 1990s.* EDI in retail or banking SWIFT in finance. Each became table stakes; each created the failure modes that follow from shared infrastructure.

### Level 5 — Planetary

AI is embedded within civilization-scale coordination systems: supply chains, financial infrastructure, public health surveillance, energy grids. The governance challenge is legibility — understanding what the systems are doing well enough to intervene when they fail.

No single actor controls the full system. Coordination happens through layers of inherited protocol, much of it decades old and entangled, much of it now operating at scales its designers did not anticipate. The blind spot is systemic: the failure modes are emergent properties of protocol interaction, and often not properties of any one component.

The failure mode is legibility collapse. The system continues to function — most of the time — but no one can fully describe what it is doing or why. The 2021 Facebook BGP misconfiguration took multiple platforms offline globally before any organization could respond, because the protocol stack had grown opaque to its own operators. Internet protocols (TCP/IP, BGP) are the present-day case: they run trillion-dollar coordination flows, no actor controls them, and the people who could explain how they work are aging out of the workforce. Civilization-scale AI infrastructure — supply-chain optimization layers, fraud-detection networks, public-health surveillance systems — is being built on top of similar protocol stacks, with the same legibility risk compounded by the additional opacity of the AI systems themselves.

*Historical parallel — 1980s to present.* The internet's own protocol layer. TCP/IP and BGP were designed for cooperative use among a small number of well-resourced operators. Their use at planetary scale has produced the legibility problem they were not designed to handle.

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

The half-day audit per function surfaces three things: where AI is already running unsupervised, which unwritten processes are worth encoding, and which function is the bottleneck.

1. First, *find the shadow workflows.* Ask each function lead, separately and informally: who on your team is already using AI for work, and on what? The answers — usually a handful of names per function — are your champion shortlist. These are people who have absorbed early failure on their own time and learned where AI helps and where it does not.
2. Second, *find the unwritten processes.* Ask each function lead: what does your most experienced person do that no one has written down? Where does the "I just know how" knowledge live? These are the candidate kits — work that follows a knowable pattern, has a clear quality bar, and runs often enough to repay encoding. The unwritten process is the protocol; AI is the thing that lets the protocol scale beyond the one person who carries it.
3. Third, *find the bottleneck.* Per Chapter 2, the function that matters for adoption priority is not the one with the most AI excitement but the one where AI exposure × stakes is highest and protocol precision is lowest. The bottleneck is usually visible to the people downstream of it: ask what work consistently arrives late, in the wrong format, or with insufficient context, and the upstream function is your candidate.

The output of the audit is a short list of four to six candidate use cases, surfaced by each function's own champions. The deployment lead uncovers the list; the function chooses what to run.

### Evaluating potential pilot use cases

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

## Chapter 4 — The path to durable AI adoption

Adopting a new technology paradigm, such as AI, will happen regardless of organizational intent. But getting your organization to use it well — durably, across functions, without producing predictable failure modes at scale — is the harder problem. The pattern that produces durable adoption is *bottom-up discovery, top-down scale.*

Champions discover the workflows that matter; the organization promotes what worked so that the next user inherits it, and helps network use-cases together. The two halves are not interchangeable.

### Bottom-up discovery, top-down scale

The pattern unfolds across three phases. Each phase has an approach (the work to do), a timeline, a target, and an exit signal that tells you when to move on.


| Phase   | Approach                                                                                                                                                                                  | Timeline   | Target                                                                                                       | Exit signal                                                                                |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| Forage  | Find champions among people already experimenting on their own time. Install missing prerequisites and connect data sources so they move past plain chatbots.                             | Month 1    | Champions identified — 2–3 motivated practitioners running real workflows on real data.                      | Each champion team has produced a real deliverable on a real use case the champion chose.  |
| Seed    | Champions demonstrate AI-assisted workflows on real work. Skeptics convert by seeing four-hour reviews compress to forty-five minutes — not by argument. Track champion-authored kit count. | Months 2–6 | Champions reach Level 2 (Kit) — encoding their workflows into reusable, shareable components.                | At least three named, owned, shared kits per pilot team.                                   |
| Harvest | Promote pilot-built kits company-wide. The adoption lead paves the upward path — failure to harvest leaves gains personal and temporary.                                                  | Months 6+  | Department reaches Level 3 (Engine) — kits promoted to shared infrastructure with named owners.            | Kit reuse measurable across teams; new hires inheriting workflows on day one.              |


#### Phase 1 — Forage

Find your champions. The right champions are the people in the organization already experimenting with AI on their own time, surfaced through the Chapter 3 audit. They are not adversarial skeptics who need to be converted; conversion happens later, through the demonstrations the champions produce. Ask each function lead to nominate one champion — and to validate the nomination against the audit's shadow-workflow list, so the champion is the actual practitioner rather than the function's politically convenient pick.

Install missing prerequisites — pre-built starter templates the champions can adapt rather than write from scratch — and connect the data sources their candidate use cases require. Without connected systems the champions stay stuck at AI chatbots. With them, meaningful deliverables on a real workflow are reachable, often within weeks.

Phase 1 is complete when each champion team has produced a real deliverable on a real use case the champion chose. Hours saved is not the metric; *something the function would otherwise not have achieved* is the metric.

#### Phase 2 — Seed

Encourage the champions to show their teams what their workflows look like with AI in them. Skeptics convert when they see a four-hour contract review happen in forty-five minutes on a real contract from their own queue. Run weekly check-ins. The check-ins are not for course-correction; pilot teams need room to find edge cases and report them while they are fresh. The check-ins surface which use cases are landing and which kits are stabilizing into something worth promoting.

The signal that the pilot is working is not hours saved. It is *champions starting to build their own reusable kits.* When a sales rep takes the call-prep workflow she has been running by hand and turns it into a `/call-prep` skill, she has crossed from casual usage to workflow kit usage. Track how many champion-authored kits exist at the end of the pilot. That count is the leading indicator for the harvest phase.

#### Phase 3 — Harvest

Every kit built during the pilot is an asset. The marketing team's blog-review kit becomes the template comms teams adapt for their own use. The finance variance-analysis kit one analyst built becomes the kit the whole finance organization runs. Tribal knowledge gets encoded and reused rather than walking out the door when someone leaves.

At this phase, team onboarding is often markedly different. A new hire who installs the department's promoted kits on day one starts with a different model of work. They inherit the encoded workflows before they have time to develop bad habits, and the floor for the whole team rises. The adoption lead's role at this phase is not to build kits. It is to make sure the path upward is paved — that promoted kits exist, that named owners exist, that the protocol designer has been engaged to harvest the patterns the kits reveal, and that the next champion has somewhere to go after the first pilot.

A failure to harvest is a common failure mode. The pilot succeeds; the kits stay personal; the gain stays local and often temporary. The protocol designer's job is to read across the kits the champions produced, identify the workflow shape they reveal, and propose the verification checkpoint that turns a kit into a workflow integrated as business-as-usual. Without that step, the organization plateaus at a kit-rich Level 2 and the next adoption wave starts again from initial discovery.

### Six categories of new work in AI-native organizations

The recurring units of output an AI-native organization produces are the constant; the titles you bundle them into are not. The same six categories of work appear in different orgs under different names — *Applied AI Engineer*, *Forward Deployed Engineer*, *Chief AI Officer*, *VP of AI Engineering* — but the work is the same.

For a deeper analysis of how these categories were derived, the project documents they ground in, and the industry sources used, see `Deployment-Guide/workpackets-analysis.md`.

**Kit Harvesting.** Surfacing the AI workflows people are already running on their own — in personal repos, vaults, scripts, custom GPTs — and promoting the best into shared infrastructure with named owners. Composed of a per-function audit, a promotion review, and the engineering work to make a kit operable by another user.

**Evals.** Defining what "good" means for each AI workflow and building the test harness that measures it. Composed of golden datasets, rubrics co-authored with domain experts, and a scoring runner that fires on every prompt or model change. Maintenance grows as failure modes surface and feed back into the suite.

**Forward Deployment.** Embedding engineers inside functions — alongside lawyers, sales reps, analysts — to build the AI workflows that function depends on. The engineer pairs with domain experts, reads their existing work product, and ships the production integration. Each engagement is project-shaped and closes when the loop runs end-to-end.

**Platform Operations.** Operating the shared AI infrastructure domain teams build on: model gateway (routing across providers), versioned prompt and skill registries, eval pipelines in CI, observability (latency, cost, quality, drift), cost controls, and vendor management. A 24/7 system; major upgrades quarterly.

**Risk Stewardship.** Maintaining the AI risk register and the technical interlocks that bound what AI is allowed to do. Composed of the register (models, data, blast radius), permission boundaries (autonomous vs human-approved vs forbidden), constitutional infrastructure (sandboxes, planning-only modes, write-locks, rollback paths), and the audit trail.

**Context Stabilization.** Curating the context AI systems depend on and keeping it stable across models, tools, and agents. Composed of context gathering, curation (authoritative sources, current versions), ontology work (entity definitions and category boundaries), and stabilization so the legal team's "contract" and the agent's "contract" don't silently diverge.

The most consequential boundary is between **platform operations** and **risk stewardship**. The platform engineer shapes what AI *can* do; the risk steward shapes what AI is *allowed* to do, and how its outputs are checked. Collapsing them into a single role is the most reliable way to let capability outpace accountability.

---

## Chapter 5 — How the Protocol Institute adopts AI

The Protocol Institute is the home of *Protocolized* magazine and the successor to the Summer of Protocols program (2023–2025). Its mission is to advance the theory and practice of protocol design across domains, and to build the field and community capable of stewarding the planetary-scale process of *protocolization* — the slow, largely invisible means by which human behaviors become standardized into the coordinating infrastructure of civilization.

The Institute is organized as a small core team and several Special Interest Groups (SIGs), each focused on a different research or practice area. Two of those working patterns illustrate the model in practice — one at the Level 1 → Level 2 (Kit) transition inside a SIG, and one at Level 3 (Engine) in the magazine's visual production pipeline.

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

The SIG expects new norms to continue emerging, some of which may become standards or protocols. Some early examples include using formal ontologies for research and GitHub as a center for collaboration.

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

> ### Note on this chapter *(placeholder — v0.6)*
>
> The current live assessment is built against an earlier version of the model in which Level 2 was named *Sanctioned*. The Kit re-spec used in this guide will be reflected in the next version of the assessment. Until then, treat the live assessment as the placement instrument and treat this guide's *Level 2 — Kit* description as the operational definition you should plan against. An integrated version of the diagnostic, with the Kit framing and bottleneck-function detection specific to this guide, will ship alongside v1.0 of the AI Adoption Guide.

---

## Chapter 7 — Success patterns and failure modes

Four emerging failure modes and four emerging success patterns recur across organizations that have moved up the maturity model. Each success pattern is the mitigation for the failure mode it pairs with.

### Failure modes

**Premature optimization.** *Standardizing before the kit phase has done its work.* The organization tries to centrally design the official AI workflow before users have iterated through enough kit forms to know what works, and before the underlying technology has stabilized. The published standard is rejected or rapidly outdated in practice; users keep their personal kits in the shadows. Two adjacent variants compound the cost. *Premature consolidation* collapses several functioning kits into a single "AI platform" before the variation has paid off. *Premature procurement* commits the organization to a vendor stack before the function knows what it actually needs.
*Mitigated via:* Kit harvesting over central design.

**Disorientation.** *Commitments outpace shared understanding; exposure accumulates invisibly.* The organization's commitments accumulate faster than its ability to update shared understanding and constrain action. Adoption climbs, per-employee work intensifies, and no one in the function can describe whether the team is getting better or just busier. The gap is structural: the imbalance is between commitment speed and reorientation speed, and exposure accumulates invisibly until it becomes binding. Harvard Business Review research (May 2026) documents the worker-level signal as *psychological debt* — cognitive offloading, reduced autonomy, diminished competence, identity threat — outcomes that correlate with lower AI use and greater avoidance, even among employees who acknowledge AI's value.
*Mitigated via:* Planning after production.

**Tempo misalignment.** *Output stacks up at the slowest neighbor.* AI accelerates different pieces of a workflow at different paces. Output stacks up at the slowest process, or partner. A team may look productive in isolation and broken in operation. Uber's engineering response is the canonical adaptation: with 65–72% of code AI-generated and 11% of pull requests opened by agents, the bottleneck shifted from coding to review, and the organization built two new protocol systems — Code Inbox to route agent-generated PRs to the right reviewer, and U Review to reduce human review burden — to absorb the new tempo.
*Mitigated via:* Differential gear trains.

**Extended blast radius.** *Permissions outpace judgment, faster than humans can intervene.* An AI agent's permissions or operational scope outpace its judgment, and a failure becomes consequential before any human can intervene. The internal version is Replit's July 2025 incident: during a 12-day vibe-coding experiment, the agent ignored explicit instructions during a code freeze, deleted a production database containing records of 1,206 executives and 1,196 companies, then misled the user about whether the data was recoverable. The external version is Air Canada (BC Civil Resolution Tribunal, 2024) — the chatbot stated a bereavement-fare policy that did not exist, and the airline was held liable.
*Mitigated via:* Constitutional software.

### Success patterns

**Kit harvesting over central design.** *Wait for variation to express itself before standardizing.* The protocols worth formalizing are the ones domain experts have already proved through daily use, not the ones a central team designs from outside. The organization's job is to identify, capture, and systematize the kits champions have already built and to wait for variation to express itself before standardizing. Where premature optimization closes the kit phase before its work is done, kit harvesting closes it on the basis of evidence.

**Planning after production.** *Plan from observed reality, not from intention.* AI-mediated work produces commitments at a tempo that traditional upfront planning cannot keep up with — the plan is permanently behind the work. The mitigation is to invert the planning order: let production run at its native speed, then plan continuously from the observed state. The deployment lead's quarterly plan becomes a rolling synthesis built from what the function has actually produced, not from what it intended to produce.

**Differential gear trains.** *Buffer the tempo mismatch instead of throttling either side.* When AI accelerates one part of a workflow but not the parts it depends on, the answer is not to slow the AI down or speed the humans up. It is to design a coordination layer that lets each part run at its native tempo without one breaking the other. Engineers know this from car differentials: a mechanical assembly that transmits power between components rotating at different rates. The deployment-lead version is buffers, queues, async handoffs, and tempo-aware routing protocols. Uber's Code Inbox is the canonical case: agent-generated pull requests do not enter the human review queue at agent tempo; they are routed, batched, and assigned in a way that reconciles the two paces.

**Constitutional software.** *Compile governance constraints into code that runs.* When an agent's permissions or operational scope outpace its judgment, policy alone cannot intervene fast enough — by the time a human reads the alert, the production database is already deleted. The mitigation is to encode the organization's governance constraints in code itself: sandboxed environments the agent cannot escape, separate development and production boundaries it cannot cross, planning-only modes that withhold execution authority until a human gates it, and revocation paths that compile authority into technical interlocks rather than relying on human reaction time.

---

## Chapter 8 — The new nature of work

*AI-mediated work is here to stay.*

AI-mediated tools and workflows are no longer features of the workplace; they have become part of the workplace itself — closer to weather or terrain than to thermostats or leather. This is *new nature*: technologically mediated conditions that have become immutable and indefinitely persistent. The dominant posture then becomes foraging, adapting behavior of someone inhabiting a landscape rather than the top-down planning of an architect with a blueprint. In short: the work environment is increasingly something that cannot be engineered. Instead, the AI-mediated work environment is the world your team inhabits.

The shift changes what the deployment should focus on. Older models focused on defining standard operating procedures, enforcing compliance, adjusting when the metric drifts. Now, the volume of AI-assisted output is too high to inspect case-by-case. New kits surface from the floor faster than any central process can catalogue them. The tools themselves shift behavior on every model update. Teams exposed to all of this no longer calibrate replicable outputs like a controlled system. The AI deployment lead's job under those conditions is to make the new landscape navigable, and survivable — to provide the maps, keep the trails open, keep the lighthouse lit, and help re-orient when a team starts moving toward a pattern that compounds risk.

Hiring, performance, and onboarding follow. The candidate who follows an SOP rigorously is no longer the central hire; the candidate who finds their way through unfamiliar terrain is. The scarce skill is closer to applied curiosity than to AI literacy — building an internal map fast, noticing what works, sharing it with the team.

We are entering a new nature of work. The job is not to finish a platform deployment; it is to keep the function navigable as the landscape shifts, again and again. The outcome of a successful adoption program is not the kits, the workflows, or the published policies. It is a function whose people know how to work in this new nature, and whose managers know how to keep it inhabitable. The terrain will keep shifting, fast.

---

## About The Protocol Institute

The Protocol Institute is an independent research organization studying protocols — the rules and coordination structures that shape interaction across diplomacy, software, medicine, governance, and beyond. Evolved from the Ethereum Foundation-funded Summer of Protocols program (2023–2025), it continues that work through research, publishing, and community building across organizational theory, infrastructure studies, and governance design. Protocolized is its flagship publication; the AI Capability Maturity Model is one of its practitioner-facing frameworks, produced by the Protocols for Business leads.

Reach us at [team@protocol-institute.org](mailto:team@protocol-institute.org)

---

## Additional resources

### Companion outputs from this project

The AI Adoption Guide is one of four publications by the Protocols for Business Special Interest Group on the AI Capability Maturity Model.

- *[The AI Capability Maturity Assessment](https://protocolized.dev/assessment/)* — Protocols for Business SIG. Protocolized, 2026.
- *[The AI Capability Maturity Model: A Litepaper](https://protocolized.dev/litepaper-ai-protocols/)* — Protocols for Business SIG. Protocolized, March 2026.
- *[The Missing Protocol Layer](https://protocolized.dev/blog-the-missing-layer/)* — Protocols for Business SIG. Protocolized, March 2026.

### Source materials

- *[AI, tractors, and the productivity paradox](https://read.technically.dev/p/the-ai-productivity-paradox)* — Sachin Benny. Technically, 2026.
- *[Finding Fault Lines within the Firm](https://protocolized.summerofprotocols.com/p/finding-fault-lines-within-the-firm)* — Protocols for Business SIG. Protocolized, January 2026.
- *[Have Your Factory Call My Factory](https://protocolized.summerofprotocols.com/p/have-your-factory-call-my-factory)* — Venkatesh Rao. Protocolized, March 2026.
- *[Introducing the Protocol Institute](https://protocolized.summerofprotocols.com/p/introducing-the-protocol-institute)* — Timber Stinson-Schroff. Protocolized, April 2026.
- *[Protocol Fiction Aesthetics](https://protocolized.summerofprotocols.com/p/protocol-fiction-aesthetics)* — James Langdon. Protocolized, November 2025.

### Engage

- *[Protocolized](https://protocolized.summerofprotocols.com)* magazine.
- Protocols for Business Special Interest Group (SIGBIZ). Working group of the Protocol Institute. Contact: [team@protocol-institute.org](mailto:team@protocol-institute.org)

---

Protocols for Business Special Interest Group, The Protocol Institute.
