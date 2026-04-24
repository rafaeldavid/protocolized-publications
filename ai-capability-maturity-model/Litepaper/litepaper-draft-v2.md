# The AI Capability Maturity Model
## A protocol framework for governing AI adoption

**Protocolized — Protocols for Business Practice**
March 2026 | Version: 2 (revised draft)

*Companion outputs: [interactive diagnostic tool](https://protocolized.dev/ai-maturity-model/) · [blog post](https://protocolized.dev/blog-the-missing-layer/)*

---

**Summary**

- 88% of organizations use AI in at least one function; only 39% report any impact on earnings, and only ~6% qualify as high performers.[^1] The gap is not tooling — it is protocol design.
- Existing AI maturity models measure adoption rates, tooling coverage, and responsible-AI dimension scores. None of them measure whether an organization has designed the coordination layer between AI outputs and human judgment.
- This model defines maturity as the precision of the governing protocol: how precisely specified is the handoff between AI output and organizational accountability?
- Five levels: **Shadow** (no protocol), **Sanctioned** (access governed), **Designed** (workflows governed), **Infrastructural** (sector-governed), **Planetary** (civilization-scale). Each level has a governing protocol, a blind spot, and a predictable failure mode derived from what that protocol cannot see.
- Protocols trade one class of problem for another — they do not eliminate problems. Each level transition is a deliberate trade: accepting a new, more governable problem in place of the previous, less governable one.

---

## 1. The problem with how organizations measure AI maturity

Existing AI maturity models measure the wrong thing. The Microsoft Responsible AI Maturity Model[^2] evaluates 24 dimensions of responsible AI practice — governance culture, tooling, cross-disciplinary expertise. Accenture's Art of AI Maturity[^3] classifies firms as Experimenters, Innovators, or Achievers based on performance outcomes. BCG's AI Maturity Matrix[^4] places economies on a national readiness grid. These are valuable instruments. None of them measure whether an organization has designed the coordination layer that makes AI output reliable in production.

The Microsoft model is the most analytically rigorous. It explicitly warns that "a level 5 in tooling does not have the same impact as level 5 in culture and leadership. Therefore, a particular high level is not meaningful when abstracted away from the context of its dimension and interdependency with other dimensions."[^5] This is accurate — and it identifies the model's own limitation. Dimensional scores cannot be aggregated into a governance diagnosis because the dimensions are not independent. What the model does not provide is a way to identify which dimension, in which function, at which moment, is the binding constraint on the organization's ability to govern AI output in production. That identification requires a different unit of analysis.

The Accenture model's Experimenter/Achiever split captures a real performance gap. 12% of firms are Achievers; 63% are Experimenters; the Achievers are 3.5 times more likely to see AI-influenced revenue exceed 30% of total revenue.[^6] But this is a performance outcome measure, not a governance design diagnosis. It tells you where firms are; it does not tell you what they need to design to move forward. Knowing that 63% of organizations are AI Experimenters does not explain why they are stuck, which function is the binding constraint, or what design change would move them.

The BCG model operates at the national level — useful for policy, not diagnostic at the organizational level where deployment decisions are made. None of these models is wrong. They measure real things. What they measure is not the variable that determines whether an organization can produce reliable outcomes from AI at scale.

This is why organizations can score well on existing frameworks while the failure modes the frameworks were designed to prevent keep happening. By mid-2025, attorneys had been sanctioned in 550 publicly reported cases involving AI-hallucinated citations, with 712 judicial decisions worldwide citing AI hallucinations — including an $86,000 single fine, the largest on record.[^7] Most law firms had AI governance boards, usage policies, and approved tool lists by 2024. Those are Level 2 interventions: access and usage governed. The sanctions are a Level 1 failure: no verification protocol between AI output and professional accountability. A firm can have a detailed AI policy and still have no protocol governing what happens when the AI is wrong.

The original CMM,[^8] developed at Carnegie Mellon's Software Engineering Institute in 1986, measured software process repeatability — the ability to produce the same outcome reliably from a defined process. Level 1 (Initial) was characterized by individual heroics: success depended on who worked on the project, not on the process. Level 5 (Optimizing) was characterized by continuous process improvement grounded in quantitative feedback. That was the right unit for deterministic software. Repeatability is achievable for deterministic systems. It is not achievable for probabilistic AI: you cannot make a large language model produce the same output every time from the same input. The governance question shifts. It is no longer "how do we get the same output reliably?" It is "how do we govern the range of outputs we will get?" That requires a different measurement unit: the precision of the coordination protocol between AI output and human judgment.

McKinsey's 2025 State of AI survey places this precisely.[^9] 88% of organizations use AI in at least one function. Only 39% report any EBIT impact. Only ~6% qualify as high performers. The differentiators are not tools: high performers are 2.8 times more likely to have fundamentally redesigned workflows around AI, 65% have human-in-the-loop validation versus 23% of others, and senior leadership owns AI governance at 48% of high performers versus 16% of others. McKinsey's own conclusion: "Meaningful enterprise-wide bottom-line impact from the use of AI continues to be rare." The gap is protocol precision, not adoption.

---

## 2. The theoretical frame: governing uncertainty through protocol design

### The nature of AI uncertainty

AI systems are **probabilistic and non-deterministic**. The same input can produce different outputs; the failure distribution cannot be fully characterized in advance. This is a structural property of how large language models and generative AI systems work. It means that organizational governance cannot be designed around the assumption that AI outputs are correct — it must be designed around the assumption that some fraction of outputs will be wrong, in ways that cannot be predicted, at a rate that will not reach zero.

This structural property distinguishes AI governance from every prior enterprise software governance problem. Deterministic software has bugs, but the failure modes are in principle enumeratable. AI failure modes are not. The probability distribution of hallucination shifts with model version, input domain, context length, and deployment configuration. Risk management can estimate the rate; it cannot enumerate the cases. The governing response is not risk reduction. It is protocol design for what happens when an output is wrong — before the wrong output has been identified.

### Why protocol, not policy or compliance

Three governance mechanisms are frequently conflated: policy, compliance, and protocol. The distinction matters because they address different coordination problems and fail differently.

A **policy** requires central enforcement. "No employee shall use AI for customer-facing communications without manager approval" is a policy. It specifies a prohibition or requirement but depends on central authority (the manager, the legal team, the IT department) to monitor and enforce it. Policy scales poorly: as AI use becomes pervasive and simultaneous across thousands of interactions, central enforcement becomes the bottleneck.

**Compliance** is adherence to external requirements — regulatory standards, audit frameworks, contractual obligations. Compliance governance asks "are we meeting the standard?" It is backward-looking: the standard was defined before the deployment, the audit evaluates the deployment against it. Compliance frameworks cannot anticipate the specific failure modes of novel AI deployments; they can only codify what has been identified and standardized. The EU AI Act, NIST AI RMF, and ABA Formal Opinion 512 are compliance frameworks. They are necessary but not sufficient for governing AI in production.

A **protocol** specifies in advance how actors behave at a handoff point, without requiring shared goals or central enforcement. The pull request protocol in software development is an example: it specifies how code moves from a developer's branch to the shared codebase (branch → commit → review → approve/reject → merge), without requiring a manager to review every commit. The protocol governs the handoff; the engineers operate within it autonomously. Venkatesh Rao defines protocol as "a stratum of codified behavior that allows for the construction or emergence of complex coordinated behaviors at adjacent loci."[^10] The critical feature is that protocols scale because they do not require central authority. Alfred North Whitehead observed that "civilization advances by extending the number of important operations which we can perform without thinking of them."[^11] Protocols are the mechanism of that extension — they convert governance from a discretionary act into an automatic one.

This is what AI governance requires. The AI system and the human reviewer do not share goals: the AI system is optimizing for output generation; the human reviewer is optimizing for output quality. No central authority can monitor every AI interaction at organizational scale — at 84% developer adoption with 11% of PRs opened by agents (Uber's March 2026 figures), the volume is already beyond any reviewer's span of attention. A protocol is the only coordination mechanism that scales.

### The cost structure shift: ontological drift

Sachin Benny identifies a specific mechanism by which the absence of governing protocols produces failure in AI-enabled organizations: ontological drift. In traditional software development, the cost of documentation and specification is high; the cost of changing a term's meaning midstream is low (you update the docs). The LLM era inverts this: "LLMs make documentation, specifications, diagrams, and written artifacts essentially free — but they make ontological drift extremely expensive. When agents, tools, and auto-generated artifacts depend on stable definitions, changing the meaning of a term or schema midstream breaks everything."[^12]

The implication is structural: AI-enabled organizations must front-load precision. Definitions must be stable before deployment begins. The protocol layer — the specification of what a term means, what output format a handoff requires, what "verified" means for a given function — cannot be negotiated in production. Benny observes: "Organizations compensate by freezing definitions, front-loading clarity, and minimizing mid-cycle reinterpretation. This is a return to Waterfall — not because people suddenly prefer big plans but because the communication structure that Waterfall requires (stable meanings, fixed interfaces, slow-changing schemas) now incurs the lowest transaction costs."[^13] This is not a regression. It is a rational response to the cost structure of probabilistic systems: you cannot fix the ontology in production, so you must fix it before production.

The protocol layer is the organizational mechanism through which ontology is stabilized. An organization that has not designed its governing protocols — which outputs mean what, who is accountable for which verification, what an acceptable output looks like — will encounter ontological drift at scale. That drift is the mechanism of the Level 2 failure mode.

### Smooth space and striated space

Rao's framing from "Constructing the Evil Twin of AI" captures the maturity arc precisely: "protocols turn smooth behavior spaces (such as open, unbuilt terrain) into striated behavior spaces (such as a system of roads)."[^14] Without governing protocols, AI operates in smooth space: it can produce any output, access any data, make any claim. Smooth space is not inherently dangerous; it is ungovernable. You cannot optimize something you cannot measure, and you cannot measure something that has no defined lanes.

Protocol design converts smooth space into striated space: defined lanes, handoff points, escalation triggers, feedback loops. Maturity is the progressive striation of AI behavior across an organization's functions. Each maturity level represents a specific degree of striation — and the failure mode at each level is what happens at the boundary of the striated zone, where the organization's governing protocols end and smooth space begins.

### The protocol trade

Protocols do not eliminate problems. They trade one class of problem for another. The "Table: Learning to See Business Protocols" documents this pattern across physical and institutional contexts: every protocol that solves the coordination problem of one system creates the coordination problem of the next.[^15] The ISO shipping container solved the coordination problem of incompatible cargo handling — and created the coordination problem of containerized port congestion, global supply chain fragility, and a standardized attack surface for ransomware. The protocol was not a mistake; it was the right trade. But the trade is real, and the new problem is predictable in structure even if not in timing.

The same pattern drives each level of this model. Level 2 (Sanctioned access) solves the problem of invisible AI use — and creates the problem of unverified AI output at scale. Level 3 (Designed workflows) solves the output quality problem — and creates the problem of temporal divergence between AI-accelerated functions and the human review infrastructure around them. Level 4 (Infrastructural) solves the intra-organizational bottleneck — and creates the problem of sector-level fragility when infrastructure fails. The model is not a set of aspirational targets. It is a map of predictable trades.

### Key definitions

These terms carry specific meanings throughout this paper. Where they diverge from common usage, the divergence is intentional.

**Protocol:** A coordination mechanism that specifies in advance how actors behave at a handoff point, without requiring shared goals or central enforcement. Distinct from *policy* (requires central enforcement to function) and *process* (describes sequence, not coordination across actors with different goals).

**Governance:** The set of protocols through which an organization decides which AI outputs to accept, verify, or reject. Distinct from *compliance* (adherence to external standards) and *oversight* (monitoring after the fact, not designing the handoff).

**Uncertainty:** The irreducible non-determinism of AI outputs — same input, different output, failure distribution not fully characterizable in advance. Distinct from *risk* (calculable probability) and *error* (implies a definable correct answer). Governing uncertainty requires protocol design; governing risk requires probability management.

**Maturity:** The precision with which an organization's governing protocols specify the boundary between AI autonomy and human judgment. A property of coordination design, not of tools, adoption rate, or compliance coverage.

**Bottleneck:** The function where the gap between AI exposure and protocol precision is largest and highest-stakes. The bottleneck constrains the organization's effective governance level regardless of how mature other functions are. Identifying the bottleneck is the primary diagnostic task.

---

## 3. The five levels

Organizations do not occupy a single level uniformly. A Shopify engineering team may operate at Level 3 for code generation while its HR function has no verification protocol for AI-assisted candidate screening. For planning purposes, track departmental profiles separately. For risk assessment, the effective maturity level is the **bottleneck**: the highest-stakes, highest-AI-exposure function where protocol precision is lowest.

As the "Finding Fault Lines within the Firm" memo observes: "In geology, fault lines are not identified by close surface inspection. They are discovered when accumulated stress forces the underlying structure to express itself. Our discussions highlighted how protocols behave similarly. Persistent problems and persistent [performance gaps] point less to local error or exceptional talent than to the protocols through which pressure concentrates and trade-offs are stabilized."[^16] The bottleneck function is the fault line. It is not always visible until a liability event or a competitor's advantage reveals it.

The level descriptions below are structured around four elements: the governing protocol that exists at that level, the blind spot that protocol creates, the failure mode that follows from the blind spot, and the transition requirement — the specific design change needed to move forward.

---

### Level 1 — Shadow
*AI is being used. No protocol governs the outputs.*

**Governing protocol:** None. AI tools are used through personal accounts, outside IT visibility, without organizational awareness. No coordination mechanism specifies what data can be used as input, what outputs require review, or who is accountable for outputs used in consequential decisions.

**Blind spot:** The organization cannot see what AI is doing with its data, what outputs are entering decisions, or where liability is accumulating. The exposure is invisible not because it is small but because no instrument is positioned to measure it.

**Failure mode: Unaccountable AI access.** AI systems operate with organizational data and produce outputs used in organizational decisions with no protocol specifying accountability for either. When the failure surfaces — a data leak, a sanctioned professional, a customer misled by a chatbot — the organization has no protocol to invoke and no record to audit. The failure is not the tool's failure; it is the absence of any handoff structure between the tool's output and organizational accountability.

**The empirical picture.** Reco.ai (2025) reports 71% of enterprise employees use unauthorized AI tools; the average discovery lag exceeds 400 days.[^17] Cyberhaven found that 73.8% of employee ChatGPT use occurs on personal accounts, with corporate data input to AI growing 485% year-over-year in Q1 2024.[^18] Gartner (2025) reports 69% of organizations have confirmed or suspected prohibited GenAI use. IBM Security documents that 97% of organizations experiencing AI-related security incidents lacked proper AI access controls.[^19] These are not outlier statistics from technology-averse sectors. They are baselines.

**The Samsung case.** In April 2023, three Samsung semiconductor engineers independently submitted proprietary materials to personal ChatGPT accounts within one month: source code from a semiconductor database maintenance tool; source code for identifying defective equipment; and a full internal meeting transcript.[^20] No protocol governed the boundary between personal AI tools and confidential IP. The engineers were not malicious — they were solving real problems with available tools. Samsung's response was to ban all GenAI tools enterprise-wide, then build an internal alternative (Samsung Gauss). That response is the expensive, slow exit from Level 1: reactive, visible only after the exposure, and carrying permanent IP loss. The Cyberhaven data makes clear Samsung was not exceptional — it was representative of what happens at 3.1% of enterprise ChatGPT users on any given day.

**Healthcare as a structural case.** Shadow AI in healthcare is not an incident pattern. It is a sector condition. 86% of healthcare organizations had shadow AI incidents by 2025 (symplr survey); 17% of clinical workers admit using unauthorized AI for clinical tasks.[^21] The Office for Civil Rights clarified in 2024 that sending protected health information to any AI service without a signed Business Associate Agreement is a reportable HIPAA breach, regardless of employee intent. This regulatory clarification is the forcing mechanism for the Level 1-to-2 transition in healthcare: it makes the existing contractual instrument (the BAA) the governance layer for AI vendor relationships, converting invisible exposure into a defined compliance obligation. The BAA is the Level 1 protocol — not because it was designed for AI, but because it already specifies what a vendor can do with organizational data.

**The legal profession.** Attorneys used personal AI accounts for case law research and brief drafting without firm authorization or verification protocols. ABA Formal Opinion 512 (July 2024) now requires lawyers to maintain "reasonable understanding" of AI capabilities and verify all AI-generated output before submission.[^22] Courts have escalated: 550+ publicly reported hallucination cases; 712 judicial decisions worldwide; an $86,000 fine in *ByoPlanet v. Johansson*. The legal profession is instructive because the failure pattern repeats across jurisdictions and practice areas. This is not a handful of careless attorneys. It is the predictable output of a professional sector that reached Level 2 intent (AI use is recognized as legitimate) without Level 2 execution (verification protocol between AI output and professional accountability).

**Characteristic of Level 1:** shadow adoption is universal. Every organization with employees has it. The transition is not eliminating shadow use — it is making the problem visible by granting sanctioned access under defined conditions.

*Historical parallel — late 1990s:* Employees used personal Hotmail and Yahoo accounts for business communication before corporate email was ubiquitous. Shadow email created IP, legal, and compliance exposure that resolved through IT-provisioned corporate email with governance. Shadow AI is structurally identical. The resolution is the same type of transition — at higher stakes, at faster pace, and against an adversarial landscape of AI-assisted social engineering that shadow-email-era IT governance was not designed to address.

**Transition requirement:** Issue a formal AI access policy. Grant sanctioned access to approved tools under defined conditions. This does not solve the governance problem — it makes the problem visible and, therefore, governable. The transition from Level 1 to Level 2 converts invisible exposure into visible adoption.

---

### Level 2 — Sanctioned
*AI access has been granted. The outputs have not been governed.*

**Governing protocol:** Access scope. The organization has issued an AI access policy — approved tools, usage guidelines, in some cases a mandate. The protocol governs who can use which AI tools under what conditions. It does not govern what AI produces or how outputs are verified before consequential use.

**Blind spot:** The organization can see that AI is being used. It cannot see whether what AI produces is reliable enough for the purposes it is being put to. The governing protocol has no visibility into the handoff between AI output and decision. That handoff is ungoverned.

**Failure mode: Access-without-output-governance.** The protocol solves the adoption problem. It does not design the coordination mechanism between output and judgment. As AI becomes more pervasive — as outputs enter customer communications, financial models, clinical notes, contracts, and legal submissions — the quality of those outputs is determined by individual judgment rather than by protocol. When that judgment fails, the organization is accountable for an output it has no mechanism to review systematically, verify reliably, or audit after the fact.

**Klarna: the full arc.** Klarna's AI deployment between 2023 and 2025 is the clearest longitudinal record of Level 2 failure at enterprise scale.[^23] By May 2024, 90% of Klarna employees were using AI tools daily — the highest publicly reported enterprise adoption rate. The company claimed that its AI customer service agent, deployed to 700 agents' worth of work, produced a $40M profit improvement in its first year. These numbers were real. What followed was also real: CEO Sebastian Siemiatkowski publicly reversed the AI-only customer service position, citing outputs that were "generic, repetitive, insufficiently nuanced." Klarna began rehiring human customer service staff in 2025. The $40M was real; so was the reversal. The tool worked. The output governance protocol was absent. The access mandate created the adoption; the absent quality protocol created the ceiling.

The Klarna case is frequently misread as evidence that AI customer service does not work. It is evidence that sanctioned access without output governance produces a predictable failure arc: high initial adoption metrics, quality degradation that does not show in adoption metrics, and a reversal that comes as a surprise because no protocol was generating leading indicators of the quality problem.

**Duolingo: the invisible protocol removal.** Duolingo replaced native-speaker language content contractors with AI in 2024.[^24] The contractors were not just production resources — they were the quality-assurance protocol. They caught cultural nuance gaps that automated volume metrics do not surface. Removing them without replacing the protocol created a quality deficit that was invisible in content production volume. User backlash drove daily active user growth to "the lower end of projections" in Q2 2025 earnings. The governance failure was not AI adoption — it was the organizational failure to recognize that the contractors were doing protocol work, not just production work. When you remove a quality-assurance protocol to cut costs, you do not reduce costs — you defer the quality cost until users notice.

**Air Canada: the liability boundary.** Air Canada's customer-service chatbot asserted a bereavement fare refund policy that did not exist.[^25] Air Canada argued before the BC Civil Resolution Tribunal that the chatbot was a "separate legal entity" bearing no relationship to the airline's obligations. The Tribunal rejected this directly: "It is unclear why Air Canada believes that it is not responsible for the information provided by its agent. Air Canada cannot absolve itself of responsibility by submitting that the information was provided by a separate computer program."[^26] Damages: $812.02. Legal precedent: organizations are liable for all outputs their AI systems produce on company-operated channels. The governance failure was not the chatbot's incorrect output — that is a Level 1 risk management problem. The failure was the absent escalation protocol: no path from uncertain chatbot output to human review before the commitment was made, and no mechanism for the chatbot to signal its own uncertainty.

**Shopify: productive Level 2, visible ceiling.** Shopify illustrates Level 2 at its most productive, and also where the ceiling is. CEO Tobias Lütke's April 2025 memo made AI use non-optional: "Frankly, I don't think it's feasible to opt out of learning the skill of applying AI." Teams must demonstrate AI cannot do a task before requesting headcount. Revenue grew 30% year-over-year for full year 2025; operating expenses fell from 45% to 35% of revenue. The mandate is producing real efficiency gains. The governance gap persists: no published standard for what AI proficiency requires in non-technical roles, no systematic verification protocol for customer-facing content generated by AI, no documented escalation path for AI outputs that cannot be verified by the employee producing them. The access mandate exists without a protocol for what happens when the output is wrong.

**The transition mechanism: the Forward Deployed Engineer.** The Level 2-to-3 transition requires redesigning the governing protocol from access-scope to output-scope. In practice, this design work cannot be done from a central governance function alone — it requires someone who understands both the AI system's capabilities and the workflow it is entering. Evan Armstrong identified the Forward Deployed Engineer (FDE) as the emerging role that enables this transition: "The largest reason that the FDE has happened today is because AI will end up being a bigger and more important platform shift than the cloud was. The biggest changes are not even technological, they are operational."[^27]

The FDE embeds in the customer or business function and designs the workflow protocol from inside: identifying where AI output requires verification, what verification looks like for that specific task, and what feedback loops should govern the protocol's refinement. Mark Scianna describes the core method: "Build the gravel road: Discover and construct the minimum viable path to the outcome that moves the needle/solves the user's pain point. Fast, a bit ugly, but true — and this will expose patterns (reusable primitives, inputs/outputs, workflows, feature sets, knobs) you may later pave into the platform."[^28] The gravel road is the first output-scope governing protocol for a function. It is provisional and function-specific; that is its value. It makes the protocol concrete before anyone knows what the right protocol is.

OpenAI now deploys FDEs exclusively to customers spending $10M+ per year, at $200–300K salary, with an effective floor of $1M+ contract value.[^29] This is a market signal about where the transition from Level 2 to Level 3 is valued — and how expensive it is when the design work is done reactively through professional services rather than built into the organization's own capability.

*Historical parallel — early 2000s:* Organizations provisioned corporate email without retention or e-discovery protocols. The forcing function was litigation: *Zubulake v. UBS Warburg* (2003) established that organizations were liable for email they could not produce in discovery. The AI liability cases — Air Canada, legal hallucination sanctions — are playing the same structural role.

**Transition requirement:** Redesign the governing protocol from access-scope to output-scope. For the bottleneck function: define which AI outputs require human verification before use, by whom, by what method, and what happens when verification fails. This is the gravel road — specific to one function, provisional, and designed to generate feedback about what the protocol should become.

---

### Level 3 — Designed
*AI is embedded in specific workflows with defined verification protocols.*

**Governing protocol:** Workflow scope. The organization has designed specific workflows where AI operates within defined protocols: input preparation standards, output verification checkpoints, escalation triggers, and feedback loops. AI is embedded in how particular work is done — not just authorized as a tool. The protocol specifies the boundary between AI autonomy and human judgment within those workflows.

**Blind spot:** Workflow-level protocols govern internal operations. They cannot coordinate across functions, with external partners, or with regulators operating at different speeds. The organization's AI-accelerated clock runs faster than its coordination environment.

**Failure mode: Temporal divergence.** AI accelerates some workflows while external dependencies — client review cycles, regulatory response, cross-functional handoffs, downstream quality checks — remain at human pace. The governing protocol is well-designed internally; it cannot govern the coordination points that cross the workflow boundary. Output volume grows faster than review capacity. Functions that have been AI-redesigned operate at a different tempo than those that have not. The organization's AI efficiency creates misalignment with the rest of its operating environment.

**Uber: the designed workflow and its bottleneck.** Uber's engineering organization is the most thoroughly documented Level 3 case.[^30] By March 2026: 84% of developers are active agentic coding users; 65–72% of code is AI-generated inside IDE tools; 11% of PRs are opened by agents. The designed workflows exist: dedicated agent use cases for dead code cleanup, codebase migrations, and bug fixes, each with defined scope and review requirements. Dario Khosrowshahi: "AI is enabling people to become superhumans in terms of their productivity and the impact that we can realize for our end users."[^31]

The temporal divergence failure mode appeared precisely as the model predicts. AI-generated PR volume outpaced code review capacity. The pipeline generated output faster than the review protocol could absorb it. Uber's response was protocol design: Code Inbox (smart assignment of AI-generated PRs based on code ownership, with explicit service-level obligations for review time) and U Review (AI-assisted code review that reduces human review burden). These are not tools — they are protocol infrastructure for the new bottleneck. The designed workflow created a downstream review problem; the Level 3-to-4 transition built a downstream review protocol.

The four-layer agentic platform architecture Uber has built — (1) internal AI platform built on Michelangelo, (2) internal Uber context (source code, docs, Slack, JIRA), (3) industry agents (Claude Code, Copilot, Codex, Cursor), (4) specialized agents (Minion, Autocover, U Review) — is not a tooling choice. It is a protocol architecture: each layer specifies the interface through which the next layer operates.[^32] The architecture is the governing protocol made structural.

**Boom Supersonic: governance as competitive infrastructure.** Boom Supersonic is a late Level 3 case in a domain where the stakes of protocol failure are higher than code review queues.[^33] Boom's structural analysis software (mkBoom) runs automatically from parametric aircraft configurations — the design methodology depends on it. AI-enabled iteration is not an accelerant applied to an existing design process; it is the design process. Removing it would not slow Boom down — it would require rebuilding the methodology.

Blake Scholl describes the effect through the concept of Jevons's Law applied to engineering: "the real magic isn't the time savings — it's sort of a Jevon's Law of engineering: when engineering iteration is quick and cheap, many more designs can be evaluated and a much better design can be discovered."[^34] Boomless Cruise — a key product capability — emerged through that iteration. It was not in the original design objectives. It was discovered because the iteration cycle was fast enough to find it.

The quantitative case is the Slacker Index: total lead time divided by actual working time. Scholl's turbine blade example is the clearest articulation: a turbine blade that costs $1M per engine to produce has a six-month lead time, of which perhaps days are actual working time. The Slacker Index is enormous. A $2M 3D printer reduces lead time to 24 hours and enables daily iteration. "It doesn't just shave months off a schedule. It changes the physics of what's possible. Problems that would be existential with a year-long lead time become solvable with a 24-hour iteration cycle."[^35] Boom's AI-enabled design process has compressed aerospace engineering's Slacker Index in the same way. The competitive moat is not the tool — it is the designed workflow that the tool makes possible, and the protocol governance that makes the workflow reliable enough to bet a safety-critical program on.

Boom is late Level 3, not Level 4, because the aerospace industry does not yet depend on Boom's design approach. Boom's business model is competitively reliant on its AI-enabled protocols. The aerospace industry's production economics are not yet reorganized around AI iteration at Boom's pace. That distinction — organizational competitive reliance versus sector infrastructure — is the Level 3/Level 4 boundary.

**Ontological drift at Level 3.** Benny's ontological drift thesis is most legible at Level 3. Organizations that have designed AI into workflows face a specific fragility: the protocol depends on stable definitions. "When agents, tools, and auto-generated artifacts depend on stable definitions, changing the meaning of a term or schema midstream breaks everything."[^36] At Level 3, this means that workflow redesign — the work of the FDE and the platform team — must be done before the workflow goes to production. Definitional changes in production are expensive because the AI-generated artifact trail depends on stable ontology. The organization that designs well at Level 3 front-loads precision and treats mid-cycle redefinition as a protocol violation, not a normal iteration step.

*Historical parallel — 2005–2015:* Git solved the problem of multiple developers editing the same codebase simultaneously. The pull request protocol converted individual development into coordinated production. AI-generated code volume recreates the same coordination problem at a higher rate. Code Inbox is Git-style coordination applied to the AI-human review boundary — the same structural solution, required because the same coordination problem has recurred at a higher volume.

**Transition requirement:** Extend workflow-level protocols into cross-function and cross-boundary coordination. Build infrastructure for the bottlenecks the designed workflows create — output volume management, review SLOs, external coordination standards. The Level 3-to-4 transition is not better governance of individual workflows; it is governing the coordination system those workflows generate.

---

### Level 4 — Infrastructural
*AI protocols are sector infrastructure. The governance problem has moved to the inter-organizational level.*

**Governing protocol:** Sector scope. AI protocols have become standard infrastructure within a sector — the coordination mechanisms are shared, standardized, and expected. Individual organizations no longer design their own AI handoff protocols from scratch; they implement and extend sector standards. The governance problem has shifted from internal workflow design to inter-organizational coordination and sector-level risk.

**Blind spot:** The organization's AI governance is sound internally but depends on external infrastructure it does not control. The sector's shared AI protocols create dependencies whose failure produces consequences that no single organization's governance was designed to prevent.

**Failure mode: Infrastructure dependency without sector-level governance.** When AI becomes sector infrastructure, a single organization's protocol maturity cannot guarantee its own outcomes. Financial clearing, healthcare referrals, and supply chain coordination all run through shared AI protocols when they become standard infrastructure. A failure in that shared protocol propagates without containment across organizations that built their governance to handle internal failures, not sector-wide ones.

**Uber approaching Level 4.** Uber's four-layer platform architecture is Level 4 infrastructure within Uber — proprietary sector infrastructure for the organization's AI-enabled engineering. AI costs have grown 6x since 2024; the organization has stopped relying on off-the-shelf tooling and designs the protocols through which AI operates at organizational scale.[^37] Full Level 4 would require this infrastructure to become a sector standard: the point at which a software engineering organization without equivalent AI governance operates at a structural productivity deficit relative to the sector floor. That point has not yet arrived, but the trajectory from Uber's current state suggests it is within a three-to-five year horizon for enterprise software engineering.

**Financial services as the near-term transition sector.** AI-assisted trading, credit decisions, and fraud detection are approaching sector-standard capability in financial services. The governance implications are already visible: when a model failure produces correlated credit decisions across multiple institutions simultaneously, no single institution's internal AI governance protocol can contain the propagation. The governance problem shifts from "what does our AI do?" to "what does the sector's shared AI infrastructure do, and who governs it?" The NIST AI RMF's four functions — Govern, Map, Measure, Manage — map directly to L3+ protocol design requirements, and OCC guidance is beginning to incorporate them for banking sector AI.[^38]

**Agent handoff contracts: the emerging protocol.** The Level 3-to-4 transition requires a new class of coordination document: the agent handoff contract. Rao's "Have Your Factory Call My Factory" describes the structural problem that these contracts solve. Two AI-enabled factories coordinating on a shared project operate autonomously — each with its own agent stack, its own workflow protocols, its own ontology — but must coordinate at defined handoff points. "The handoff point between us is a shared Dropbox folder plus a 'manuscript transmittal' server she's set up for metadata."[^39] The shared folder and the transmittal document are the precursor form of what agent handoff contracts must formalize as AI coordination scales.

The components crystallizing in enterprise AI: (1) **scope declaration** — what the agent can and cannot do unilaterally, which decisions require human judgment, which data it can access without additional authorization; (2) **output format specification** — what a complete, acceptable handoff looks like, what metadata must accompany the output, what the receiving agent or human needs to process it; (3) **escalation trigger** — the specific conditions under which the agent must pause autonomous operation and request human judgment before proceeding. This is the API contract equivalent for autonomous agent coordination. As AI systems coordinate at sector scale, these contracts become the protocol infrastructure that makes inter-organizational AI coordination reliable.

*Historical parallel — 1970s–1990s:* Electronic Data Interchange standardized how organizations exchanged business documents across company boundaries. Before EDI, each pair of trading partners negotiated its own data format for purchase orders, invoices, and shipping notices. EDI converted bespoke bilateral coordination into sector infrastructure that made just-in-time supply chains possible. Agent handoff contracts are the AI-era equivalent.

**Transition requirement:** Participate in sector-level protocol design, not just internal governance. Engage regulatory frameworks as protocol design inputs, not compliance checklists. Build governance that accounts for external AI dependencies the organization does not control, and engage in the standards processes that will define those dependencies.

---

### Level 5 — Planetary
*AI protocols are civilization infrastructure. Maintaining governance legibility is the challenge.*

Level 5 has no confirmed organizational case anchors. It is described here as a trajectory and a warning.

**Governing protocol:** Planetary scope. AI protocols are embedded in critical systems as deeply as TCP/IP, the electrical grid, or the ISO container standard. No single organization manages them; they are maintained through collective mechanisms — standards bodies, regulatory frameworks, market dynamics, international treaty. The protocols are invisible in the sense that Whitehead meant: they have become part of the operations we perform without thinking of them.

**Blind spot:** Protocols that become invisible lose the organizational memory needed to govern them. The people who designed the protocol have moved on. The organizations that depend on it lack the literacy to recognize when it is failing. The governance mechanisms were designed for a smaller version of the infrastructure.

**Failure mode: Protocol invisibility without reflexive governance.** Infrastructure so successful that the governance mechanisms designed around it lag the scale and stakes they govern. Failures are hard to attribute (no single organization owns the protocol), hard to isolate (failure propagates before any actor can intervene), and hard to fix (the governance mechanisms are as invisible as the infrastructure itself). As Stinson-Schroff observes, the failure mode of systemic infrastructure is often not a dramatic collapse but a slow degradation: "mechanical currents" — the incremental pressures that accumulate in complex systems until the structure expresses itself.[^40]

**The containerization analogue.** The ISO shipping container is the cleanest historical analogue for planetary protocol embedding.[^41] Standardized in 1968 (20ft and 40ft dimensions), containerization reorganized global trade within two decades. Port infrastructure was rebuilt; trucking and rail networks were redesigned; just-in-time supply chains became possible. By the 2000s, containerization was invisible — the default assumption of all global logistics planning. The Maersk ransomware attack of 2017 is the canonical Level 5 failure mode: containerization and internet protocols had converged into a single attack surface. NotPetya spread from Ukrainian accounting software through Maersk's global logistics network, halting operations at ports on six continents, causing $300M in losses in ten days. Two invisible infrastructures — physical container logistics and internet protocols — created a failure mode that neither protocol was individually designed to prevent. The governance gap was not in either protocol; it was in the absence of any governance mechanism for their intersection.

**TCP/IP as the Level 5 template.** TCP/IP became so successful it became the invisible default assumption of all digital coordination. The governance mechanisms — IETF, ICANN, the Border Gateway Protocol's routing trust model — were designed before the internet became critical infrastructure. They are now inadequate to the scale and stakes they govern. The BGP hijacking attacks, DNS poisoning campaigns, and systematic routing manipulation that now occur routinely are failures of governance mechanisms that were not designed for adversarial infrastructure at planetary scale. AI protocols are on the same trajectory, at a shorter time horizon, in an environment that is already adversarial.

Level 5 is not a transition target. It is a warning about the failure mode of success: protocols that become invisible lose the organizational memory needed to govern them.

---

## 4. Emerging protocols: the transition infrastructure

A specific class of coordination mechanisms is emerging to govern enterprise AI use. These are protocols — they govern behavior at handoff points without requiring shared goals or central enforcement — and each maps to a specific level transition. The table below names them; the analysis that follows explains what makes each one a protocol rather than a policy, and why that distinction matters for organizational design.

**Table 1: Emerging governance protocols by level transition**

| Protocol | Level transition | What it governs | Sector |
|----------|-----------------|-----------------|--------|
| BAA extension to AI vendors | L1 → L2 | Contractual accountability for AI vendor data handling | Healthcare |
| Output verification obligation (ABA Formal Opinion 512) | L1 → L2 | Mandatory human verification step before professional use | Legal |
| Risk-tiered deployment classification (EU AI Act) | L2 → L3 | Pre-deployment classification with defined governance requirements per tier | Cross-sector (EU) |
| PR/output SLOs and smart routing (Code Inbox pattern) | L3 → L4 | Volume and routing of AI-generated outputs through human review | Software engineering |
| Agent handoff contracts | L4 → L5 | Scope, output format, escalation triggers between AI agent systems | Emerging |

**Business Associate Agreements extended to AI vendors (L1 → L2 — Healthcare).** The Business Associate Agreement is a contractual instrument already established in HIPAA compliance. It specifies what a vendor can and cannot do with protected health information: retention limits, audit rights, breach notification obligations, permitted uses. The HHS Office for Civil Rights' 2024 clarification extended this instrument to AI vendors: any AI service that processes PHI must have a signed BAA, or transmitting data to it constitutes a reportable breach. The BAA was not designed for AI. Its application to AI vendor relationships is an example of an existing protocol being extended rather than a new protocol being invented. This is why it works at scale: the contractual infrastructure already exists; the governance question reduces to whether the instrument is in place. The BAA converts the Level 1 problem (invisible data flows to AI vendors) into a Level 2 condition (vendor data handling is contractually governed). It does not solve output governance; it creates the legal foundation for the next protocol layer.

**Output verification obligation (L1 → L2 — Legal professions).** ABA Formal Opinion 512 (July 2024) requires lawyers to have "reasonable understanding" of AI capabilities and to verify all AI-generated output before submission. This is a protocol because it specifies the handoff structure (lawyer-reviews-AI-output) and makes that structure mandatory through professional licensing rather than firm policy. The enforcer is not the firm's IT department — it is the bar association and the courts. Courts have responded with escalating sanctions precisely because the verification step failed at the handoff point. What makes this different from a usage policy: the obligation to verify is independent of what the firm's AI access policy says. A law firm could have the most permissive AI access policy imaginable; the verification obligation attaches to the professional regardless. This is the structural property of a protocol: it governs the handoff without depending on the organization's own governance for its enforcement.

**Risk-tiered deployment classification (L2 → L3 — EU AI Act).** The EU AI Act (Regulation 2024/1689) establishes a mandatory pre-deployment classification of AI systems into risk tiers, with specific governance requirements for each tier.[^42] High-risk AI systems — including hiring and HR management software, credit scoring systems, biometric identification, critical infrastructure, and systems affecting access to education — must have documented human oversight protocols, conformity assessments, and technical documentation before deployment. The classification is not optional: an organization cannot choose to deploy a high-risk system with access-only governance and claim compliance. The classification step is the protocol — it precedes deployment and triggers specific governance obligations. For organizations with EU employees or customers in high-risk function categories, August 2026 is a mandatory Level 2-to-3 transition deadline. The Act makes the organizational choice that the model describes as the Level 2-to-3 transition — from access-scope to output-scope governance — legally required in specific contexts. Fines for non-compliance reach €35M or 7% of global annual turnover.

**PR/output SLOs and smart routing (L3 → L4 — Software engineering).** The Code Inbox and U Review pattern that Uber has built is the first well-documented instance of a Level 3-to-4 transition protocol in software engineering. As AI-generated PR volume grows, the human review queue becomes ungovernable through individual judgment alone. The protocol that emerges has three components: (1) intake classification — distinguishing AI-generated from human-authored commits and PRs, so that routing decisions can be made on that basis; (2) smart routing — ownership-based assignment of AI-generated work to reviewers with relevant context, without requiring a human coordinator to make each assignment; (3) service-level obligations — time-bounded review commitments that make review a governed process with measurable performance rather than a discretionary activity. What makes this a protocol rather than a tool: Code Inbox does not review PRs — it specifies the handoff structure through which PRs reach reviewers and establishes accountability for the review step. The protocol scales because it governs the handoff without requiring central oversight of each individual review.

**Agent handoff contracts (L4 → L5 — Emerging).** Agent handoff contracts are still in formation as a protocol pattern. The earliest instances are informal: Rao's shared Dropbox folder and transmittal document, Uber's Code Inbox intake classification, the structured output formats that AI coding tools have begun to standardize. The protocol is crystallizing around three components described above. What will distinguish mature agent handoff contracts from current practice is the formalization of the escalation trigger: the specific, pre-defined conditions under which an agent must pause autonomous operation and request human judgment before proceeding. This is the hardest component to specify because it requires the organization to enumerate — in advance — the conditions under which AI judgment is insufficient. That enumeration is governance work. It requires domain knowledge, risk modeling, and deliberate design. Organizations that build this capability now, before agent coordination at scale becomes standard, will be positioned to participate in the sector-level protocol design that Level 4 requires.

**What these protocols have in common.** Each converts a previously discretionary human judgment into a designed coordination mechanism. ABA 512 converts "the lawyer decides whether to verify" into a mandatory protocol step. Code Inbox converts "engineers decide which PRs to review first" into a classified, routed, SLO-governed workflow. In each case, the protocol scales because it does not require a human coordinator at every handoff. The coordination is built into the structure. This is the pattern Whitehead identified in civilization-level protocol adoption: advancing by extending the operations we can perform without thinking about them.

Git is the reference point. Git did not improve code quality. It created the handoff structure — branch, commit, pull request, merge — that allowed code quality to be governed at scale across distributed teams with no central coordinator managing each integration. These emerging protocols are doing the same for AI: creating the handoff structures that allow AI output quality to be governed at scale. Organizations building to them now are building governance that will be sector-standard within years. Organizations that wait for full standardization will implement them under regulatory or liability pressure, at higher cost and lower control.

---

## 5. Where organizations are now — and what the distribution predicts

Most organizations are at Level 1 or Level 2. The evidence from 2024–2026 surveys is consistent on this finding, and it is consistent enough that the distribution can be described with reasonable confidence.

McKinsey (2025): 88% adoption, but 66% have not yet begun scaling AI across the enterprise.[^43] Only 39% report any EBIT impact; 22% say they are scaling agents anywhere; no more than 10% of any single function uses agents at scale. Menlo Ventures (2025): 63% of enterprise AI deployments are still prompt design, RAG, or fixed workflows — not true agents.[^44] Reco.ai: 71% of enterprise employees use unauthorized AI tools, indicating that Level 1 conditions co-exist beneath whatever Level 2 access mandates have been issued.[^45] IBM survey: only 39% of CEOs report adequate AI governance; 61% report pushing adoption faster than governance readiness.

These figures describe the majority. They are concentrated at Level 1 and early Level 2: access policies exist (or are being developed); output governance protocols do not. The Klarna, Shopify, and Duolingo cases represent Level 2 at enterprise scale — the mandate has been issued; the output governance design has not followed.

A cohort of approximately 6–15% of organizations has designed AI into specific workflows with explicit governance. McKinsey's high performers (6%) have fundamentally redesigned workflows and have human-in-the-loop validation at 65% versus 23% for others. Accenture's Achievers (12%) have CEO sponsorship, industrialized tooling, and are 3.5 times more likely than Experimenters to see AI-influenced revenue exceed 30% of total revenues.[^46] OpenAI's data shows frontier organizations sending 6 times more messages per seat than median enterprises, with API reasoning token consumption growing 320x from November 2024.[^47] The differentiator between these organizations and the majority is protocol design at the workflow level.

The model predicts the distribution will become more bimodal. Level 3 organizations compound: AI-designed workflows generate data that improves the protocol, which improves the workflow, which generates more data. Benny's cost-structure analysis makes this concrete — organizations that have front-loaded precision into stable definitions and designed workflow protocols now incur the lowest transaction costs for continuing AI integration. Their AI infrastructure accrues. Level 2 organizations plateau: access mandates without output governance do not generate the feedback needed to improve. The gap between Achievers and Experimenters is a protocol design gap that will widen without deliberate intervention. McKinsey's "Meaningful enterprise-wide bottom-line impact from the use of AI continues to be rare" is, under this analysis, a prediction as much as an observation.

Three regulatory instruments are creating forced transitions in specific sectors. The EU AI Act's August 2026 compliance deadline makes Level 2-to-3 mandatory for high-risk deployments under EU scope. NIST AI RMF 1.0 (2023) — Govern, Map, Measure, Manage — maps directly to L3+ protocol design requirements and is being incorporated into OCC and HHS sector guidance.[^48] The HHS/OCR HIPAA overhaul proposes eliminating the "required vs. addressable" distinction and mandating annual security audits and encryption, pushing healthcare organizations toward formalized governance beyond access-only protocols. These forcing functions will reach approximately 20–30% of enterprise AI deployments in the US and EU. The remaining 70–80% will design the transition voluntarily or reactively.

The Air Canada chatbot case is the model for reactive transition at Level 2. $812 in direct damages; legal precedent now cited across enterprise AI governance discussions; reputational cost that cannot be quantified. The reaction — updating AI governance policies, adding escalation paths for customer-service AI, reviewing chatbot output protocols — costs more and produces less than designing the protocol before deployment.

---

## 6. How to use this model

The model's primary value is predictive. Placing your organization on the model identifies the failure mode that is approaching before it materializes as a crisis. The goal is not to score well — it is to identify the specific protocol design change that prevents the next failure.

The diagnostic question "When your AI system produces a wrong answer here, what happens next — and who is accountable?" is the operative instrument. It should be applied function by function. The answers map directly to levels. The bottleneck — the function with the lowest answer and the highest consequences — is the organization's effective governance level for risk purposes.

**Step 1: Map AI exposure by function.**
List every function where AI produces outputs that affect decisions: customer communications, code, financial analysis, legal review, HR decisions, clinical recommendations, contracts, regulatory submissions. This is the inventory the model operates on.

**Step 2: Apply the governing uncertainty test to each function.**

| Answer to "what happens when AI is wrong here?" | Level |
|--------|-------|
| "We'd probably not notice" / "It hasn't happened yet" | Level 1 |
| "Someone notices and flags it after the fact" | Level 2 |
| "There is a review process before the output is used" | Level 3 |
| "We have error metrics, escalation paths, and the protocol updates when the error rate changes" | Level 4 |
| "The protocol is infrastructure — we monitor the infrastructure, not individual outputs" | Level 5 |

**Step 3: Identify the bottleneck.**
The function with the lowest answer and the highest consequences is the bottleneck. A Level 3 engineering organization with a Level 1 HR function has a Level 1 liability ceiling in any employment-related AI dispute. A Level 3 financial analysis team with a Level 2 customer communications function has a Level 2 regulatory exposure in any customer-facing AI liability case. The bottleneck does not average up. It sets the floor.

**Step 4: Identify the transition requirement.**
Use the level descriptions to identify the specific protocol design change the bottleneck function requires. The transition requirement at each level is specific:

- **L1 → L2:** Issue a formal access policy. Grant sanctioned access to approved tools under defined conditions. Make the exposure visible.
- **L2 → L3:** Redesign the governing protocol from access-scope to output-scope. Define verification requirements before consequential use. Build the gravel road for the bottleneck function.
- **L3 → L4:** Extend workflow-level protocols into cross-function and cross-boundary coordination. Build infrastructure for the downstream bottlenecks the designed workflows create.
- **L4 → L5:** Participate in sector-level protocol design and standards processes. Build governance that accounts for external AI dependencies the organization does not control.

**The protocol trade, forward.** Each transition requires accepting a new class of problem in place of the previous one. The Level 1-to-2 transition converts invisible exposure into visible compliance risk. The Level 2-to-3 transition converts adoption-with-unknown-quality-floor into workflow governance with visible quality metrics and new bottlenecks at workflow boundaries. The Level 3-to-4 transition converts intra-organizational governance into inter-organizational coordination problems. These are not regressions — they are the right trades. The new problem at each level is more governable than the one it replaces, because it is visible, bounded, and addressable through protocol design rather than through reactive incident response.

**What this model does not tell you:**
- Which specific AI tools to use or avoid
- What will happen to AI capabilities in 12–24 months
- Whether any specific AI output is correct
- How to satisfy any specific regulatory requirement — consult sector-specific guidance
- What level your organization should be at by a specific date — there is no universal pace

Maturity is not a race. The failure mode at each level is not being at that level — it is staying at that level while AI exposure grows and the protocol gap widens. A Level 1 organization actively designing its exit is in better shape than a Level 3 organization that has stopped evolving its protocols.

---

*For the interactive self-assessment and level-specific diagnostic output, see [protocolized.dev/ai-maturity-model/](https://protocolized.dev/ai-maturity-model/).*

---

## Notes

[^1]: Alex Singla, Alexander Sukharevsky, Bryce Hall, Laraina Yee, Michael Chui, and Tara Balakrishnan, "The State of AI in 2025: Agents, Innovation, and Transformation," McKinsey & Company, November 2025. Survey: 1,993 respondents, 105 nations, June–July 2025.

[^2]: Mihaela Vorvoreanu, Amy Heger, Samir Passi, et al. (Microsoft AETHER Committee), "Microsoft Responsible AI Maturity Model," Microsoft Research, May 2023.

[^3]: Accenture, "The Art of AI Maturity," Accenture Research, 2024.

[^4]: Boston Consulting Group, "BCG AI Maturity Matrix," November 2024.

[^5]: Vorvoreanu et al., "Microsoft Responsible AI Maturity Model," p. 8.

[^6]: Accenture, "The Art of AI Maturity." Direct quote: "they're 3.5 times more likely than Experimenters to see their AI-influenced revenue surpass 30% of their total revenues."

[^7]: VinciWorks; ABA Law Practice Magazine; court records (*Mata v. Avianca*, 2023; *ByoPlanet v. Johansson*, 2025). 550+ publicly reported hallucination cases; 712 judicial decisions worldwide; $86,000 fine in ByoPlanet.

[^8]: Watts S. Humphrey, *Managing the Software Process* (Reading, MA: Addison-Wesley Longman, 1989). CMM commissioned by the US Department of Defense (1986). CMMI (2002) superseded the original; currently maintained by ISACA.

[^9]: Singla et al., "The State of AI in 2025." Direct quote: "Meaningful enterprise-wide bottom-line impact from the use of AI continues to be rare."

[^10]: Menlo Ventures, "2025 State of Generative AI in the Enterprise," November 2025. Enterprise GenAI market: $37B (2025). "Fastest-scaling software category in history" is Menlo Ventures' direct characterization.

[^11]: Venkatesh Rao, "Introduction to the Protocol Reader," Summer of Protocols, 2023, citing Danny Ryan.

[^12]: Alfred North Whitehead, cited in Rao, "Introduction to the Protocol Reader."

[^13]: Sachin Benny, "Why Does AI Development Look Like 1980s Software Planning?" *Summer Lightning*, November 16, 2025.

[^14]: Ibid.

[^15]: Venkatesh Rao, "Constructing the Evil Twin of AI," *Protocolized*, 2025.

[^16]: Protocolized, "Table: Learning to See Business Protocols," *Protocolized*, 2026.

[^17]: Protocols for Business Special Interest Group, Protocolized, "Finding Fault Lines within the Firm," *Protocolized*, 2026.

[^18]: Reco.ai (2025), as cited in shadow AI prevalence roundup.

[^19]: Cyberhaven Q1 2024 data, as cited in shadow AI prevalence roundup.

[^20]: IBM Security, "Cost of a Data Breach Report 2025," 2025. Shadow AI incidents cost $4.63M on average — $670K above baseline. 97% statistic from same report.

[^21]: Gizmodo / Bloomberg reporting on Samsung ChatGPT data leak, April–May 2023. Cyberhaven estimated 3.1% of enterprise ChatGPT users had submitted confidential company data at time of reporting.

[^22]: symplr, "2025 Enterprise Healthcare IT Survey," 2025. Average healthcare breach cost: $7.42M, 279 days to resolve (IBM 2025).

[^23]: ABA Formal Opinion 512, July 2024.

[^24]: Fast Company; Fortune; TechCrunch. Klarna AI deployment and reversal reporting, 2023–2025. Headcount: ~5,527 (2022) → ~3,100 (IPO, September 2025).

[^25]: TechCrunch; Fortune. Duolingo AI-first reporting, 2024–2025.

[^26]: *Moffatt v. Air Canada*, 2024 BCCRT 149 (British Columbia Civil Resolution Tribunal, February 14, 2024). https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html.

[^27]: *Moffatt v. Air Canada*, 2024 BCCRT 149, para. 29. Confirmed verbatim in Protocols for Business Special Interest Group, Protocolized, "Finding Fault Lines within the Firm," *Protocolized*, 2026.

[^28]: Evan Armstrong, "The Hottest Job in Tech," *The Leverage*, August 5, 2025.

[^29]: Mark Scianna, "How to Build Your Forward Deployed Engineering Team," *Per Aspera*, September 17, 2025. Direct quote confirmed verbatim.

[^30]: Armstrong, "The Hottest Job in Tech." FDE cost and contract floor confirmed. Workday 2012 IPO: 35% of revenue from on-site professional services — cited as prior analog for services-heavy platform transitions.

[^31]: Anshu Chada and Ty Smith, "Uber: Leading Engineering through an Agentic Shift," The Pragmatic Summit, March 10, 2026; Gergely Orosz, "How Uber Uses AI for Development: Inside Look," *The Pragmatic Engineer*, March 10–11, 2026.

[^32]: Chada and Smith, "Uber: Leading Engineering through an Agentic Shift."

[^33]: Orosz, "How Uber Uses AI for Development." Four-layer architecture verbatim confirmed.

[^34]: Blake Scholl, "Move Fast and Don't Break (Safety Critical) Things," *Boom Supersonic*, August 10, 2025. https://bscholl.substack.com/p/move-fast-and-dont-break-safety-critical. XB-1 built by ~50 engineers at ~$190M; zero safety incidents across the program.

[^35]: Ibid. Jevons's Law quote confirmed verbatim.

[^36]: Blake Scholl, "Move Fast and Don't Break (Safety Critical) Things Part 2: Vertical Integration," *Boom Supersonic*, September 14, 2025. Slacker Index and turbine blade example confirmed. Quote confirmed verbatim.

[^37]: Benny, "Why Does AI Development Look Like 1980s Software Planning?"

[^38]: Orosz, "How Uber Uses AI for Development."

[^39]: National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, January 26, 2023. https://doi.org/10.6028/NIST.AI.100-1. NIST AI 600-1 (Generative AI profile, 2024) is the GenAI-specific supplement.

[^40]: Venkatesh Rao, "Have Your Factory Call My Factory," *Protocolized*, March 2026. Quote confirmed verbatim.

[^41]: Timber Stinson-Schroff, "Mechanical Currents," *Protocolized*, 2025.

[^42]: Protocolized, "Table: Learning to See Business Protocols."

[^43]: European Parliament and Council of the European Union, Regulation (EU) 2024/1689 (AI Act), *Official Journal of the European Union*, July 12, 2024. https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng. Compliance for most obligations: August 2, 2026.

[^44]: Singla et al., "The State of AI in 2025."

[^45]: Menlo Ventures, "2025 State of Generative AI in the Enterprise."

[^46]: Reco.ai (2025), as cited in shadow AI prevalence roundup.

[^47]: Accenture, "The Art of AI Maturity."

[^48]: OpenAI, "State of Enterprise AI 2025." API reasoning token consumption: 320x growth. 40–60 minutes/day saved per active ChatGPT Enterprise user.

[^49]: NIST AI RMF 1.0; Generative AI profile (NIST AI 600-1). Also referenced in OCC AI Risk Management guidance (2024) and HHS sector guidance.

---

## Bibliography

Accenture. "The Art of AI Maturity." Accenture Research, 2024. https://www.accenture.com/us-en/insights/technology/art-of-artificial-intelligence-maturity.

Armstrong, Evan. "The Hottest Job in Tech." *The Leverage*, August 5, 2025.

Benny, Sachin. "Why Does AI Development Look Like 1980s Software Planning?" *Summer Lightning*, November 16, 2025.

Boston Consulting Group. "BCG AI Maturity Matrix." November 2024. https://web-assets.bcg.com/95/38/a3ada1a74c6a813f7fe10ac432e9/bcg-ai-maturity-matrix-2024.pdf.

Chada, Anshu, and Ty Smith. "Uber: Leading Engineering through an Agentic Shift." Talk presented at The Pragmatic Summit, published by *The Pragmatic Engineer*, March 10, 2026.

European Parliament and Council of the European Union. "Regulation (EU) 2024/1689 of the European Parliament and of the Council of 13 June 2024 Laying Down Harmonised Rules on Artificial Intelligence (Artificial Intelligence Act)." *Official Journal of the European Union*, July 12, 2024. https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng.

Humphrey, Watts S. *Managing the Software Process*. Reading, MA: Addison-Wesley Longman, 1989.

Menlo Ventures. "2025 State of Generative AI in the Enterprise." November 2025. https://menlovc.com/2025-the-state-of-generative-ai-in-the-enterprise/.

Microsoft AETHER Committee (Vorvoreanu, Mihaela, Amy Heger, Samir Passi, et al.). "Microsoft Responsible AI Maturity Model." Microsoft Research, May 2023. https://www.microsoft.com/en-us/research/uploads/prod/2023/05/RAI_Maturity_Model_Aether_Microsoft_WhitePaper.pdf.

*Moffatt v. Air Canada*, 2024 BCCRT 149 (British Columbia Civil Resolution Tribunal, February 14, 2024). https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html.

National Institute of Standards and Technology. *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*. NIST AI 100-1. Gaithersburg, MD: National Institute of Standards and Technology, January 26, 2023. https://doi.org/10.6028/NIST.AI.100-1.

OpenAI. "State of Enterprise AI 2025." 2025.

Orosz, Gergely. "How Uber Uses AI for Development: Inside Look." *The Pragmatic Engineer*, March 10–11, 2026.

Protocols for Business Special Interest Group, Protocolized. "Finding Fault Lines within the Firm." *Protocolized*, 2026.

Ranganathan, Aruna, and Xingqi Maggie Ye. "AI Doesn't Reduce Work — It Intensifies It." *Harvard Business Review*, February 2026.

Rao, Venkatesh. "Introduction to the Protocol Reader." Summer of Protocols, 2023.

Rao, Venkatesh. "Constructing the Evil Twin of AI." *Protocolized*, 2025.

Rao, Venkatesh. "Have Your Factory Call My Factory." *Protocolized*, March 2026.

Rao, Venkatesh, and Patrick Nast. "Theorizing Protocolization I: New Nature." *Protocolized*, 2026.

Scianna, Mark. "How to Build Your Forward Deployed Engineering Team." *Per Aspera*, September 17, 2025.

Scholl, Blake. "Move Fast and Don't Break (Safety Critical) Things." *Boom Supersonic*, August 10, 2025. https://bscholl.substack.com/p/move-fast-and-dont-break-safety-critical.

Scholl, Blake. "Move Fast and Don't Break (Safety Critical) Things Part 2: Vertical Integration." *Boom Supersonic*, September 14, 2025.

Singla, Alex, Alexander Sukharevsky, Bryce Hall, Laraina Yee, Michael Chui, and Tara Balakrishnan. "The State of AI in 2025: Agents, Innovation, and Transformation." McKinsey & Company, November 2025. https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai.

Stinson-Schroff, Timber. "Mechanical Currents." *Protocolized*, 2025.

Protocolized. "Table: Learning to See Business Protocols." *Protocolized*, 2026.

---

*Word count (body only, excluding notes and bibliography): approximately 8,700 words*
*Estimated print length: 14–15 pages at standard formatting*
*Status: Second draft — for author review*
