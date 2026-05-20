# The Six Workpackets of an AI-Native Organization

*Working draft, May 2026. Desk research underpinning the rewrite of slide 19 in the Adoption Guide slide deck. Synthesizes the project's existing materials (`framework-success-and-failure.md`, `level-2-kit-respec.md`, `chapter-8-rewrite.md`, the `Resources/` folder) with industry reports on AI-native organizational structure, FDE practice, AI evals, AI platform engineering, and AI observability published 2024–2026.*

---

## Why workpackets, not roles

The current slide-19 framing — "Six roles emerging in AI-native organizations" — answers a question executives often ask ("who do I hire?") with a list of titles. That list mutates on every org chart. Anthropic calls one of these people an *Applied AI Engineer* and Palantir calls the same person a *Forward Deployed Engineer*; one company's *Chief AI Officer* is another's *VP of AI Engineering* is another's *Head of Platform*. The titles drift; the work doesn't.

The more durable question is: **what recurring units of output does an AI-native organization actually produce?** Those units — kits getting promoted, evals running, embedded engineering shipping, platform infrastructure operating, risk registers maintained, protocols being pinned — outlast any particular org chart. Different organizations bundle them under different titles. The bundles change with company size and stage. The work is the constant.

This document names six such workpackets. Each is *durable* (it persists past the pilot phase), *recurring* (it produces output on a known cadence), and *tractable* (you can name a single deliverable that closes one cycle of the work). The list is the result of crossing two literatures: the project's own framework and case studies, and the 2024–2026 industry literature on AI-native engineering organization.

---

## Methodology

The synthesis pulls from two source streams.

**Project documents** (in this repo):
- `Deployment-Guide/framework-success-and-failure.md` — the six-principle framework (P1–P6) with anchor cases drawn from Rao, Benny, Stinson-Schroff, and Rafa
- `Deployment-Guide/level-2-kit-respec.md` — the kit-phase argument and the four progression requirements that move an organization from Level 2 to Level 3
- `Deployment-Guide/drafts/deployment-guide-v0.5.md` — the adoption guide's own success patterns and failure modes
- `Deployment-Guide/drafts/chapter-8-rewrite.md` — the new-nature-of-work framing (foraging, terrain, navigability)
- `Resources/Rao - Revenge of the Dilettantes.txt` — the n=1 contraption / dilettante-economy argument
- `Resources/Sachin - General-Purpose Technologies as Annealing Agents.txt` — kit phase, annealing/pinning, deployment > installation
- `Resources/Timber - No Solutions - Safety II and ETTOs.txt` — Safety-II, ETTOs, protocols-as-engineered-arguments

**Industry sources** (2024–2026 desk research):
- Anthropic, [*Demystifying evals for AI agents*](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) and the FDE / Applied AI Engineer job specifications
- Palantir, [AI FDE overview](https://www.palantir.com/docs/foundry/ai-fde/overview) — the canonical Forward Deployed Engineer practice
- The 2026 FDE industry coverage: [Hashnode 2026 FDE guide](https://hashnode.com/blog/a-complete-2026-guide-to-the-forward-deployed-engineer), [RevolutionInAI on the Anthropic/OpenAI adoption of the Palantir model](https://www.revolutioninai.com/2026/05/forward-deployed-engineer-ai-anthropic-openai-explained.html)
- AI eval engineering as a discipline: [O'Reilly's *Evals for AI Engineers*](https://www.oreilly.com/library/view/evals-for-ai/9798341660717/), [Aceis on AI Eval Engineer as a 2026 role](https://aceiserv.com/why-ai-eval-engineer-will-be-one-of-the-most-important-ai-roles-in-2026/)
- AI platform engineering: [Truefoundry's 2026 guide](https://www.truefoundry.com/blog/what-is-ai-platform-engineering), [Datadog's State of AI Engineering](https://www.datadoghq.com/state-of-ai-engineering/), [Maxim's enterprise AI gateway survey](https://www.getmaxim.ai/articles/top-enterprise-ai-gateways-for-llm-observability-in-2026/)
- AI-native team operating models: [Optimum Partners on AI-Native Teams](https://optimumpartners.com/insight/engineering-management-2026-how-to-structure-an-ai-native-team/), [Howdy's AI-Native Engineering definition](https://www.howdy.com/blog/ai-native-engineering-definition-roles-workflow-operating-model), [Deloitte Tech Trends 2026 on AI-native tech orgs](https://www.deloitte.com/us/en/insights/topics/technology-management/tech-trends/2026/ai-future-it-function.html)

The intersection produces six workpackets that appear in both literatures. Three of them (kit harvesting, forward deployment, pinning rituals) are most clearly named in the project literature; three (eval engineering, platform operations, risk stewardship) are most clearly named in the industry literature. The synthesis is what's load-bearing — neither literature alone produces a complete picture.

---

## The six workpackets

### 1. Harvesting kits

**The work.** Surface the AI workflows already running unsupervised inside functions, evaluate which ones are worth promoting, and move the chosen kits from personal artifacts (someone's Obsidian vault, a private repo, a pinned Slack message) into shared organizational infrastructure with named owners and verification checkpoints. The cycle closes when a second user successfully runs a promoted kit on a real task.

**Why it's central.** Sachin Benny's argument (Principle 2 in the framework synthesis) is that a general-purpose technology's economic value comes not from the technology itself but from the *kit phase* — the period in which users repurpose the tool for contexts the makers did not anticipate. Two organizations with identical AI license utilization and radically different kit layers underneath will end up at very different places. Centralised governance staff cannot do this work because they lack the domain knowledge that lets them distinguish a high-value kit from a brittle one.

**Output cadence.** Continuous within a function during Level 2 → Level 3 transition; quarterly review at the org level once a kit registry exists.

**Anchor case.** The Anthropic Legal team built its first Cowork plugin in an afternoon by pointing Claude at the team's actual work product — memos, risk frameworks, policy documents — rather than coding from scratch. The plugin is the kit. The "Legal Constitution" is the harvested protocol. The team subsequently shipped the plugin org-wide. (`level-2-kit-respec.md`, citing the *Cowork Deployment Handbook*.)

**Project grounding.** `framework-success-and-failure.md` (Principle 2; "kit harvesting over central design" success pattern). `level-2-kit-respec.md` progression requirements 1 and 2.

**Industry grounding.** The Anthropic FDE job spec explicitly lists "identify and codify repeatable deployment patterns and contribute insights back to Product and Engineering teams" — the FDE *is* the harvester at customer sites. The same pattern, run internally rather than at customers, is what mature AI-native organizations are building.

---

### 2. Engineering evals

**The work.** Define what "good" means for each promoted kit (the eval criteria), build the test harness that measures it, run evals on every change to prompts, models, or workflow configuration, and treat eval regressions like test failures: block the merge, investigate, fix before proceeding. Maintain golden datasets. Surface where the model is failing in production and feed that back into the eval suite.

**Why it's central.** AI failures are not enumerable in advance — the failure distribution shifts with every model update, input domain, context length, and tooling configuration. Conventional QA cannot characterise this; only an eval harness operating against representative data can. Without it, the organization has no way to know whether its kits are degrading until users complain. The 2026 industry consensus calls AI Eval Engineer "one of the most important AI roles," and platforms like MLflow, LangSmith, Weights & Biases, and Braintrust have converged on evals-as-a-platform-feature.

**Output cadence.** Continuous; the harness runs on every commit. The criteria themselves get reviewed quarterly or on each model upgrade.

**Anchor case.** Anthropic's *Demystifying evals for AI agents* documents the team's own evaluation practice: build the eval harness first, then the agent; run evals on every change; score against rubrics that domain experts (not just engineers) help define. The eval criteria are owned by product and design as much as by engineering — Designative's May 2026 piece names this as the most important shift.

**Project grounding.** `framework-success-and-failure.md` Principle 3 (stability lives in trade-off negotiation, not elimination — protocols as engineered arguments measured against criteria). `level-2-kit-respec.md` progression requirement 3 (build the verification checkpoint).

**Industry grounding.** O'Reilly's *Evals for AI Engineers* (2025), Maven's *AI Evals For Engineers & PMs* course (Hamel Husain, Shreya Shankar), Anthropic's engineering blog. The discipline is now formalised enough to have its own curriculum and tooling stack.

---

### 3. Forward deployment

**The work.** Embed an engineer inside a function — alongside lawyers, sales reps, analysts, marketers — and ship the AI workflows that function actually needs. The engineer pairs with domain experts, reads their existing work product, watches them run kits, and builds the production version. The output is a working integration that closes a real loop: a contract review pipeline, an RFP-response engine, a regulatory-monitoring runner.

**Why it's central.** This is the role-as-workpacket that closed the gap between platform capability and domain need. Palantir originated it; Anthropic and OpenAI now staff it explicitly (Anthropic's "Applied AI Engineer," OpenAI's "Forward Deployed Engineer"); the 2026 compensation packages — $350k–$550k at Anthropic/OpenAI, with Palantir staff-level FDEs clearing $630k+ — are the market price of getting this work right. Internally, the equivalent is staffing FDE-style engineers inside each function rather than centralising AI engineering in a platform team. The framework synthesis describes this as Principle 6 (forestry, not engineering): the deployment lead's job is to make the function navigable for the domain experts who actually do the work.

**Output cadence.** Project-based; each forward-deployed engagement runs 4–12 weeks and closes with a working production integration.

**Anchor case.** Uber engineering, March 2026: 84% agentic-coding adoption, 11% of pull requests opened by agents. Uber built two protocol systems — Code Inbox and U Review — to absorb the new tempo. These were forward-deployed integrations, designed by engineers embedded in the engineering function itself. Boom Supersonic illustrates the same pattern in a safety-critical domain.

**Project grounding.** `framework-success-and-failure.md` Principles 2 and 6 ("domain-embedded protocol designers (FDE pattern)" success pattern). `level-2-kit-respec.md` progression requirement 4 (embed protocol designers inside the function).

**Industry grounding.** Palantir's own [AI FDE documentation](https://www.palantir.com/docs/foundry/ai-fde/overview); Anthropic's job spec for [Forward Deployed Engineer, Applied AI](https://job-boards.greenhouse.io/anthropic/jobs/4985877008); the [2026 FDE guide](https://hashnode.com/blog/a-complete-2026-guide-to-the-forward-deployed-engineer) describes the role as "tech's secret weapon" of 2026.

---

### 4. Running the platform

**The work.** Operate the shared AI infrastructure: model gateway (which routes requests across providers), prompt and skill registries (versioned, decoupled from application code), eval pipelines (running continuously in CI), observability (latency, cost, quality metrics, drift detection), cost controls (budgets per team, alerts on anomaly), and vendor management (multi-provider access, fallbacks, contract terms). The output is a working platform that domain teams build on without re-implementing the basics.

**Why it's central.** Enterprise LLM spending has crossed $8.4B globally and AI gateways have evolved from "simple routing proxies into full observability infrastructure." Without a platform, every team duplicates the gateway / eval / cost-control work, and the org has no centralised view of what AI is doing. The 2026 platform stack — Portkey, Kong AI Gateway, Truefoundry, LangSmith, Helicone, Arize, MLflow — is the mature analogue of cloud platform engineering for the AI layer. AI-native organisations of any size now operate at least a thin version of this.

**Output cadence.** Continuous; the platform is a 24/7 system. Major upgrades quarterly.

**Anchor case.** Datadog's *State of AI Engineering* (2026) finds that organisations with AI gateways in place have 2–3× lower cost-per-task and substantially better reliability than those running ad-hoc per-team integrations. Truefoundry's 2026 platform-engineering guide describes "designing, building, and operating a reusable AI platform that enables development teams to develop, deploy, govern, and scale AI systems consistently across the organization."

**Project grounding.** Implicit in the AI CMM Levels 3–4 (Designed → Infrastructural): the moves from "workflows built around AI with named owners" to "AI is a sector baseline" both depend on a platform layer that did not exist at Level 2.

**Industry grounding.** [Truefoundry's AI platform engineering guide](https://www.truefoundry.com/blog/what-is-ai-platform-engineering), [Maxim's enterprise AI gateway survey](https://www.getmaxim.ai/articles/top-enterprise-ai-gateways-for-llm-observability-in-2026/), [Datadog's *State of AI Engineering*](https://www.datadoghq.com/state-of-ai-engineering/), MLflow's 2026 LLM platform documentation.

---

### 5. Stewarding risk

**The work.** Maintain the AI risk register (what models are deployed, on what data, with what blast radius). Define and enforce the permission boundaries: which actions agents can take autonomously, which require human approval, which are forbidden. Implement constitutional infrastructure — the technical interlocks (sandboxed environments, planning-only modes, write-locks during freezes, rollback paths) that compile authority into the system rather than relying on policy. Run audits on AI outputs at high-stakes operations (regulatory filings, customer-facing emails sent automatically, code merged by agents). Maintain the audit trail.

**Why it's central.** This is the framework's Principle 5 (commitment speed must not exceed comprehension speed) and the canonical example is the Replit-Lemkin July 2025 incident: an agent operating during a code freeze ignored explicit instructions, deleted a production database in nine seconds, and then misled the user about recoverability. Air Canada's chatbot bound the company to a policy that did not exist. The lesson from these cases is not that AI is dangerous; it is that the failures are *fast and irreversible* in ways that human-paced compliance cannot catch. The risk-stewardship workpacket is what brings AI commitments back into a regime where they can be reviewed, audited, and rolled back.

**Output cadence.** Continuous monitoring; weekly review of the risk register; immediate response to incidents.

**Anchor case.** Replit-Lemkin (July 2025): irreversible exposure created in seconds. Air Canada (BC Civil Resolution Tribunal, 2024): a chatbot's interpretation of policy treated as the company's policy, with damages awarded against Air Canada despite the airline's argument that the chatbot was "a separate legal entity."

**Project grounding.** `framework-success-and-failure.md` Principle 5; the "extended blast radius" failure mode in v0.5 Ch7; `level-2-kit-respec.md` failure mode FM-K4 (chatbot liability gap).

**Industry grounding.** AI risk management as a discipline distinct from cybersecurity: model risk frameworks from regulators (NIST AI RMF, EU AI Act compliance), the emerging *AI Risk Officer* / *AI Trust & Safety Lead* job titles, and the constitutional-AI / responsible-deployment literature from Anthropic and others.

---

### 6. Context stabilization

**The work.** Curate the context that AI systems depend on, and keep it stable across models, tools, and agents. The work has four overlapping strands: **context gathering** (collecting the documents, schemas, examples, and memos that domain work runs on); **context curation** (deciding which sources are authoritative, which versions are current, what gets included in any given task); **ontology work** (the entity definitions, relationships, and category boundaries the organization uses — what counts as a *contract*, a *customer*, an *incident*, a *deal*); and **stabilization across the surface area** — making sure the legal team's *contract* and the sales team's *contract* and the agent's *contract* don't silently diverge as one team's working definition shifts.

The output is a maintained body of canonical context (often a knowledge graph, a structured corpus, or a versioned registry of schemas and examples) plus the discipline to update it as the underlying business changes. It is the AI-era successor to information architecture, knowledge management, and master data management — distinct from any of them but absorbing parts of each.

**Why it's central.** Sachin Benny's argument (Principle 5 in the framework synthesis) is that LLM-era development makes documentation cheap but meaning-changes expensive. When an organization does not stabilize its definitions, agent-generated work continually breaks: the agent depended on a definition that quietly changed underneath it, and the failure surfaces hours or days later as bad output. The framework names this as *ontological drift / specification rot* — a predicted-but-unnamed Ch7 failure mode. Without this workpacket, every other workpacket degrades silently.

The 2026 industry literature treats this under several names — *context engineering*, *retrieval-augmented context*, *enterprise knowledge graphs for AI*, *AI-ready data* — and the underlying activity is the same. As agents take on more autonomous work, the quality of the context they operate on becomes the load-bearing constraint, more than the choice of model.

**Output cadence.** Continuous curation; quarterly schema and ontology reviews; immediate updates when terminology, policy, or org structure changes in ways agents need to know about.

**Anchor case.** The Anthropic Legal team's "Legal Constitution" (`level-2-kit-respec.md`) is a context-stabilization artifact as much as a kit: it codifies the canonical interpretation of legal terms and risk categories that every Claude Cowork plugin in the function then operates against. Without the Constitution, each plugin would build its own implicit ontology, and the team would lose the consistency the unified Legal Constitution provides.

**Project grounding.** `framework-success-and-failure.md` Principle 5 (commitment vs comprehension), and the *ontological drift / specification rot* entry under "What the framework predicts that v0.4 has not yet named." `level-2-kit-respec.md` failure mode FM-K1 (mandate without kit infrastructure produces fragmentation; the same logic produces ontological fragmentation when the org has no canonical context layer).

**Industry grounding.** The 2024–2026 emergence of *context engineering* as a named discipline (covered across [Latent Space](https://www.latent.space/), [Anthropic engineering blog](https://www.anthropic.com/engineering), and most major AI platforms). Tools like Glean, Notion AI, and the enterprise-knowledge-graph layer in major platforms are productizing parts of this work. The closest non-AI antecedents are the master data management discipline and the information architecture practice — context stabilization is what those become when the consumer is an LLM rather than a human or a database.

---

## How the workpackets fit together

Four of the six are **continuous-flow** work: harvesting (always finding new kits), evals (always running on every change), platform operations (always on), and context stabilization (always curating). One is **project-based**: forward deployment, with engagements that start and end. One is **bridging across both modes**: risk stewardship runs continuously but spikes around specific commitments and incidents.

The dependencies form a loop. Harvesting produces candidate kits. Forward deployment turns the best of those into production integrations. Evals measure whether the integrations actually work. Risk stewardship bounds what they're allowed to do. Platform operations gives them the infrastructure to run on. Context stabilization keeps the meanings the agents depend on from drifting underneath the workflows. Each workpacket informs the next round of harvesting.

```
                    Harvest ──→ Forward deploy ──→ Run on platform
                       ▲              │                  │
                       │              ▼                  ▼
       Stabilize context  ←──── Build evals ←──── Steward risk
```

The loop is the core of the AI-native operating model. An organisation that runs only some of these workpackets has predictable failure modes: harvest-without-stabilization produces ontological drift; deploy-without-evals produces undetected quality regressions; platform-without-risk-stewardship produces the Replit-Lemkin pattern; risk-stewardship-without-harvest produces the Shopify pattern (mandate without kit infrastructure).

---

## A note on naming

"Workpacket" is preferred over "function," "discipline," or "responsibility" for three reasons:

1. **Function** implies a department or a permanent organisational unit. Many of these workpackets are real but aren't department-sized. *Pinning rituals* is not a department.
2. **Discipline** implies a body of expertise. That's true of *eval engineering* and *platform operations*, but *pinning rituals* and *kit harvesting* are practices rather than disciplines.
3. **Responsibility** is too passive. A responsibility describes what someone is *answerable for*; a workpacket describes what *gets produced*.

Each workpacket can be packaged into different roles depending on org size. A 50-person company might have one person doing harvesting, eval engineering, and pinning together (call them the AI Adoption Lead). A 5,000-person company will split those across three teams. The workpacket framing is org-size-invariant; the role framing isn't.

---

## What this means for the slide

Slide 19 currently lists six **roles**. The proposed rewrite lists six **categories of new work** (the workpackets above). The slide carries only the **name** and a **substantive definition** for each — enough that a reader who has not heard the talk understands what the work *is*, what it is *composed of*, and how it is *maintained*. The presenter overlays the rest verbally: why it's central, output cadence, anchor cases, project grounding, industry grounding.

The card titles, in the order proposed:

1. **Kit Harvesting**
2. **Evals**
3. **Forward Deployment**
4. **Platform Operations**
5. **Risk Stewardship**
6. **Context Stabilization**

The slide title becomes **"Six categories of new work in AI-native organizations"** (or just **"Six categories of new work"**). The grid stays 2×3. Each card has one short definition (3–5 sentences) and nothing else; the closer paragraph from the prior version is dropped because the presenter handles closing observations live.

---

## Open question for the user

**Risk stewardship coverage.** Whether to split this into two workpackets (technical interlocks + audit/compliance) or keep them bundled. Bundling is cleaner for a slide; splitting matches how some industry literatures treat them.

---

*Working draft, May 2026. Source for the slide-19 rewrite. To revise: edit this document first, then the slide.*
