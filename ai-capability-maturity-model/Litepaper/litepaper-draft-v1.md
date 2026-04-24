# The AI Capability Maturity Model
## A protocol framework for governing AI adoption

**Protocolized — Protocols for Business Practice**
March 2026 | Version: 1 (first draft)

*Companion outputs: [interactive diagnostic tool](https://protocolized.dev/ai-maturity-model/) · [blog post](https://protocolized.dev/blog-the-missing-layer/)*

---

**Summary**

- 88% of organizations use AI in at least one function; only 39% report any impact on earnings, and only ~6% qualify as high performers.[^1] The gap is not tooling — it is protocol design.
- Existing AI maturity models measure adoption rates, tooling coverage, and responsible-AI dimension scores. None of them measure whether an organization has designed the coordination layer between AI outputs and human judgment.
- This model defines maturity as the precision of the governing protocol: how precisely specified is the handoff between AI output and organizational accountability?
- Five levels: **Shadow** (no protocol), **Sanctioned** (access governed), **Designed** (workflows governed), **Infrastructural** (sector-governed), **Planetary** (civilization-scale). Each has a predictable failure mode derived from what its governing protocol cannot see.

---

## 1. The problem with how organizations measure AI maturity

Existing AI maturity models measure the wrong thing. The Microsoft Responsible AI Maturity Model[^2] evaluates 24 dimensions of responsible AI practice — governance culture, tooling, cross-disciplinary expertise. Accenture's Art of AI Maturity[^3] classifies firms as Experimenters, Innovators, or Achievers based on performance outcomes. BCG's AI Maturity Matrix[^4] places economies on a national readiness grid. These are valuable instruments. None of them measure whether an organization has designed the coordination layer that makes AI output reliable in production.

This is why organizations can score well on existing frameworks while the failure modes the frameworks were designed to prevent keep happening. By mid-2025, attorneys had been sanctioned in 550 publicly reported cases involving AI-hallucinated citations, including an $86,000 fine — the largest single sanction on record.[^5] The governance boards, usage guidelines, and AI tools policies at most law firms are Level 2 interventions: access and usage governed. The sanctions are a Level 1 failure: no verification protocol between AI output and professional accountability.

The original CMM, developed at Carnegie Mellon's Software Engineering Institute in 1986,[^6] measured software process repeatability — the ability to get the same outcome reliably. That was the right unit for deterministic software. It is the wrong unit for probabilistic AI. The governance question is not "how do we get the same output every time?" AI cannot be made to do that. The question is "how do we govern the cases where the output is wrong?" That requires a different unit of measurement: the precision of the coordination protocol between AI output and human judgment.

McKinsey's 2025 State of AI survey captures the gap empirically.[^7] 88% of organizations use AI in at least one function. Only 39% report any EBIT impact. Only ~6% qualify as high performers (>5% EBIT impact with significant enterprise value). The differentiators between high performers and others are protocol design decisions: high performers are 2.8 times more likely to have fundamentally redesigned workflows around AI; 65% have human-in-the-loop validation versus 23% of others; senior leadership owns AI governance at 48% of high performers versus 16% of others.[^8] The gap is not adoption. It is protocol precision.

---

## 2. Why governing uncertainty is the right unit of maturity

AI systems are **probabilistic and non-deterministic**. The same input can produce different outputs; the failure distribution cannot be fully characterized in advance. This is a structural property of how large language models work, not a quality defect to be engineered away. Organizational governance cannot be designed around the assumption that AI outputs are correct. It must be designed around the assumption that some outputs will be wrong — in ways that cannot be predicted in advance.

The conventional response to uncertainty is risk management: calculate the probability of failure, reduce it toward an acceptable threshold. Risk management is appropriate when the failure distribution is characterizable. In AI deployment, it is not. A 1% hallucination rate is a risk management input; it does not tell you what to do when the 1% appears in a legal brief, a medical recommendation, or a customer-facing contract. The Menlo Ventures (2025) report finds that enterprise GenAI is "the fastest-scaling software category in history," with only 16% of enterprise deployments qualifying as true agents.[^9] The governance frameworks have not scaled at the same rate.

**Protocol governance** specifies the handoff regardless of probability. It answers: which AI outputs require human verification before use? By whom, by what method, and what happens when verification fails? This design is independent of how often AI is wrong. A protocol for verifying AI-generated legal citations must exist whether the AI is correct 99% of the time or 60% of the time. Risk management tells you how often the system fails; protocol governance specifies who catches the failure and how.

Venkatesh Rao defines a protocol as "a stratum of codified behavior that allows for the construction or emergence of complex coordinated behaviors at adjacent loci."[^10] The critical property: a protocol governs coordination across actors without requiring shared goals or central authority. This is exactly what AI governance requires. The AI system and the human reviewer do not share goals. No central authority can monitor every AI interaction at organizational scale. A protocol is the only coordination mechanism that scales to those conditions.

Rao's framing from "Constructing the Evil Twin of AI" captures the maturity trajectory: "protocols turn smooth behavior spaces (such as open, unbuilt terrain) into striated behavior spaces (such as a system of roads)."[^11] Without governing protocols, AI operates in smooth space — producing any output, accessing any data, making any claim. Protocol design converts smooth space into striated space: defined lanes, handoff points, escalation triggers. Maturity is the progressive striation of AI behavior across an organization's workflows.

**Governing uncertainty**, in practice, reduces to three conditions for any function:
1. The organization knows which AI outputs require human verification before use
2. A defined process exists for that verification
3. A feedback mechanism exists when verification fails

The diagnostic question that locates any function on the model: *"When your AI system produces a wrong answer here, what happens next — and who is accountable?"* If the honest answer is "we'd probably not notice," the function is at Level 1 regardless of what tools are deployed.

---

## 3. The five levels

Organizations do not occupy a single level uniformly. A Shopify engineering team may operate at Level 3 for code generation while its HR function has no verification protocol for AI-assisted candidate screening. For planning purposes, track departmental profiles separately. For risk assessment, the effective maturity level is the **bottleneck**: the highest-stakes, highest-AI-exposure function where protocol precision is lowest. The bottleneck sets the organization's liability ceiling.

---

### Level 1 — Shadow
*AI is being used. No protocol governs the outputs.*

At Level 1, employees use AI tools through personal accounts, outside IT visibility, without organizational awareness. This is the default state of every organization that has not designed an explicit access policy. Reco.ai (2025) reports 71% of enterprise employees use unauthorized AI tools, with an average discovery lag of more than 400 days.[^12] Cyberhaven found that 73.8% of employee ChatGPT use occurs on personal accounts, with corporate data input to AI up 485% year-over-year in Q1 2024.[^13]

The Level 1 failure mode is **unaccountable AI access**: AI systems operate with organizational data, and no protocol specifies accountability for the outputs. The failure is not the tool — it is the absence of any handoff structure between the tool's output and organizational accountability.

The Samsung case is canonical.[^14] Three engineers independently submitted proprietary source code, equipment specifications, and an internal meeting transcript to personal ChatGPT accounts within one month in April 2023. No protocol governed the boundary between personal AI tools and confidential data. Samsung banned all GenAI tools and built an internal alternative (Samsung Gauss) — a reactive exit from Level 1 at significant cost. The IP exposure from those three interactions was permanent.

In healthcare, shadow AI is not an incident — it is the sector baseline. 86% of healthcare organizations had shadow AI incidents by 2025 (symplr survey).[^15] The Office for Civil Rights clarified in 2024 that sending protected health information to any AI service without a Business Associate Agreement is a reportable HIPAA breach, regardless of whether the employee intended to share sensitive data. The regulatory response converts shadow adoption from a behavioral problem into a structural liability.

In the legal profession, attorneys used personal AI accounts for case law research and brief drafting without firm authorization or verification protocols. ABA Formal Opinion 512 (July 2024) now requires lawyers to maintain "reasonable understanding" of AI capabilities and verify all AI-generated output before submission.[^16] Courts have responded with escalating sanctions, and the pattern continues to expand across practice areas.

**Characteristic of Level 1:** shadow adoption is universal. Every organization with employees has it. The transition is not eliminating shadow use — it is making the problem visible by granting sanctioned access under defined conditions.

*Historical parallel — late 1990s:* Employees used personal Hotmail and Yahoo accounts for business communication before corporate email was ubiquitous. Shadow email created IP, legal, and compliance exposure that resolved through IT-provisioned corporate email with governance. Shadow AI is structurally identical: personal accounts, organizational exposure, IT-governed solution required.

---

### Level 2 — Sanctioned
*AI access has been granted. The outputs have not been governed.*

At Level 2, the organization has issued an AI access policy: approved tools, usage guidelines, in some cases a mandate. The protocol governs who can use which AI tools. It does not govern what AI produces or how outputs are verified before consequential use. The organization can now see that AI is being used. It cannot see whether what AI produces is reliable enough for the uses it is being put to.

The Klarna case is the clearest example of Level 2 failure at enterprise scale.[^17] By May 2024, 90% of Klarna employees were using AI tools daily — the highest publicly reported enterprise adoption rate. The company claimed a $40M profit improvement. Then the CEO publicly reversed on AI-only customer service, citing outputs that were "generic, repetitive, insufficiently nuanced." Rehiring began. The tool worked; the output governance protocol was absent.

The Air Canada case established the legal boundary.[^18] Air Canada's customer-service chatbot asserted a refund policy that did not exist. Air Canada argued the chatbot was a "separate legal entity" bearing no relationship to the company's obligations. The BC Civil Resolution Tribunal rejected this argument: "It is unclear why Air Canada believes that it is not responsible for the information provided by its agent."[^19] The company was liable for all information provided through its customer-facing system, regardless of whether an AI generated it. The governance failure was the absent escalation protocol — no path from uncertain chatbot output to human review before the commitment was made.

Shopify illustrates Level 2 at its most productive instance, and also its ceiling.[^20] CEO Tobias Lütke's memo made AI use "non-optional": teams must demonstrate AI cannot do a task before requesting headcount. Revenue grew 30% year-over-year for full year 2025; operating expenses fell from 45% to 35% of revenue. The access mandate is working. The governance gap persists: no published standard for what AI proficiency requires in non-technical roles, no verification protocol for customer-facing content generated by AI. The mandate exists; the protocol for what happens when the output is wrong does not.

Duolingo offers a related case.[^21] The company replaced native-speaker contractors with AI. Those contractors were not just production resources — they were the quality-assurance protocol. Removing them without replacing the protocol created a cultural nuance gap invisible in production volume metrics. User backlash pushed DAU to "the lower end of projections" in Q2 2025.

**The Level 2 transition requirement:** redesign the governing protocol from access-scope to output-scope. Define which AI outputs require human verification before use, by whom, by what method, and what happens when verification fails. This is not adding a review step — it is designing the handoff protocol between AI output and organizational accountability.

Two regulatory instruments are accelerating this transition. ABA Formal Opinion 512 makes output verification a mandatory professional obligation in the legal profession. The EU AI Act (Regulation 2024/1689)[^22] requires documented human oversight protocols for high-risk AI deployments — including hiring and HR management systems — before August 2026. For organizations with these functions under EU regulatory scope, Level 2-to-3 is a compliance deadline.

*Historical parallel — early 2000s:* Organizations provisioned corporate email without retention or e-discovery protocols. The forcing function was litigation: *Zubulake v. UBS Warburg* (2003) established that organizations were liable for email they could not produce in discovery. The AI liability cases — Air Canada, legal hallucination sanctions — are playing the same structural role.

---

### Level 3 — Designed
*AI is embedded in specific workflows with defined verification protocols.*

At Level 3, the organization has designed specific workflows where AI operates within defined protocols: input preparation standards, output verification checkpoints, escalation triggers, and feedback loops. AI is embedded in how particular work is done, not merely authorized as a tool. The protocol governs output quality within those workflows.

Uber's engineering organization is the most thoroughly documented Level 3 case.[^23] By March 2026: 84% of developers are active agentic coding users; 65–72% of code is AI-generated inside IDE tools; 11% of PRs are opened by agents. CTO Dario Khosrowshahi: "AI is enabling people to become superhumans in terms of their productivity and the impact that we can realize for our end users."[^24] Dedicated agent use cases exist for dead code cleanup, migrations, and bug fixes, each with defined scope and review requirements.

The Level 3 failure mode appeared at Uber precisely as the model predicts: **temporal divergence**. AI-generated PR volume outpaced code review capacity. AI accelerated code generation while the downstream review step remained at human pace. Uber's protocol response — Code Inbox (smart assignment of AI-generated PRs with service-level obligations) and U Review (AI-assisted code review) — is the Level 3-to-4 transition in action. The designed workflow had generated a new bottleneck; the organization built protocol infrastructure for it.

Boom Supersonic is a late Level 3 case from aerospace.[^25] Boom's structural analysis software (mkBoom) runs automatically from parametric aircraft configurations — the design methodology depends on it. Boomless Cruise, a key product discovery, emerged through AI-enabled iteration cycles that would have taken months under previous methods. As CEO Blake Scholl describes: "the real magic isn't the time savings — it's sort of a Jevon's Law of engineering: when engineering iteration is quick and cheap, many more designs can be evaluated and a much better design can be discovered."[^26] Boom's business model depends on its AI-enabled design protocols. The aerospace industry does not yet depend on Boom's approach — that distinction separates Level 3 (organizational competitive reliance) from Level 4 (sector infrastructure).

The Level 3 blind spot is temporal: workflow-level protocols govern internal operations but cannot coordinate across functions, with external partners, or with regulators operating at different speeds. The organization's AI-accelerated clock runs faster than its coordination environment. Code review, legal review, financial approval — all can become the downstream bottleneck when an AI-designed workflow upstream produces outputs faster than the adjacent human review structure can absorb.

**The Level 3 transition requirement:** extend workflow-level protocols into cross-function and cross-boundary coordination. Build infrastructure for the bottlenecks the designed workflows create — output volume management, review SLOs, external coordination standards. The transition from Level 3 to Level 4 is not better governance of individual workflows; it is governing the coordination system those workflows generate.

*Historical parallel — 2005–2015:* Git solved the problem of multiple developers editing the same codebase simultaneously. The pull request protocol converted individual development into coordinated production. AI-generated code volume recreates the same coordination problem at a higher rate. Code Inbox is Git-style coordination applied to the AI-human review boundary.

---

### Level 4 — Infrastructural
*AI protocols are sector infrastructure. The governance problem has moved to the inter-organizational level.*

At Level 4, AI protocols have become standard infrastructure within a sector — shared, standardized, and expected. Individual organizations no longer design their own AI handoff protocols from scratch; they implement and extend sector standards. AI governance in those functions is no longer a competitive differentiator — it is a table-stakes requirement.

Uber's four-layer agentic platform architecture — internal AI platform built on Michelangelo; internal Uber context (source code, docs, Slack, JIRA); industry agents (Claude Code, Copilot, Codex, Cursor); and specialized agents (Minion, Autocover, U Review) — is Level 4 infrastructure within Uber.[^27] AI costs have grown 6x since 2024; the organization has stopped relying on off-the-shelf tooling and designs the protocols through which AI operates at organizational scale. Full Level 4 would require this infrastructure to become a sector standard: the point at which a software engineering organization without equivalent AI governance operates at a structural productivity deficit relative to the sector floor.

No confirmed organizational case anchors exist at Level 4. Financial services is the most likely near-term sector: AI-assisted trading, credit decisions, and fraud detection are approaching standard capability. When they become infrastructure, the governance problem shifts from intra-organizational to inter-organizational. A single bank's AI governance cannot protect it from correlated failures across the sector's shared models and data distributions.

The Level 4 failure mode is **infrastructure dependency without sector-level governance**: when AI becomes sector infrastructure, a single organization's protocol maturity cannot guarantee its own outcomes. Shared AI protocols create dependencies whose failure produces cascading consequences that no single organization's internal governance was designed to absorb.

The emerging protocol for the Level 3-to-4 transition is **agent handoff contracts**: explicit documents governing how AI agents hand off to each other or to humans. The components crystallizing in enterprise AI: (1) scope declaration — what the agent can and cannot do unilaterally; (2) output format specification — what a complete handoff looks like; (3) escalation trigger — conditions under which the agent must pause and request human judgment. This is the API contract equivalent for autonomous agents operating across organizational boundaries. Rao's "Have Your Factory Call My Factory" describes the structural problem: factories coordinating through shared file systems and transmittal documents, each operating autonomously but coordinating at defined handoff points.[^28]

**The Level 4 transition requirement:** participate in sector-level protocol design, not just internal governance. Engage regulatory frameworks (EU AI Act, NIST AI RMF, sector-specific guidance) as protocol design inputs, not compliance checklists. Build governance that accounts for external AI dependencies the organization does not control.

*Historical parallel — 1970s–1990s:* Electronic Data Interchange (EDI) standardized how organizations exchanged business documents across company boundaries. Before EDI, each pair of trading partners negotiated its own data format. EDI converted bespoke bilateral coordination into sector infrastructure. Agent handoff contracts are the AI-era equivalent: standardizing how AI systems coordinate across organizational boundaries.

---

### Level 5 — Planetary
*AI protocols are civilization infrastructure. Maintaining governance legibility is the challenge.*

Level 5 has no confirmed organizational case anchors. It is described here as a trajectory and a warning.

At Level 5, AI protocols are embedded in critical systems as deeply as TCP/IP or the electrical grid. No single organization manages them; they are maintained through collective mechanisms — standards bodies, regulatory frameworks, market dynamics. The failure mode is **protocol invisibility without reflexive governance**: infrastructure so successful that the governance mechanisms designed around it lag the scale and stakes they govern.

The ISO shipping container is the cleanest historical analogue.[^29] Standardized in 1968, containerization reorganized global trade within two decades. The Maersk ransomware attack of 2017 is the canonical Level 5 failure: containerization and internet protocols had converged into a single attack surface with no governance framework adequate to the combined system. Two invisible infrastructures created a failure mode neither protocol was designed to prevent. AI protocols embedded in financial clearing, power distribution, and supply chain coordination are on this trajectory.

TCP/IP itself is the Level 5 template: it became so successful it became the invisible default assumption of all digital coordination. The governance mechanisms (IETF, ICANN) were designed before the internet became critical infrastructure. They remain inadequate to the scale and stakes they now govern. AI protocols are on the same trajectory, at a shorter time horizon.

Level 5 is not a transition target. It is a warning about the failure mode of success: protocols that become invisible lose the organizational memory needed to govern them.

---

## 4. Emerging protocols: the transition infrastructure

A specific class of coordination mechanisms is emerging to govern enterprise AI use. These are protocols, not policies: they govern behavior at handoff points without requiring shared goals or central enforcement. Each maps to a specific level transition.

**Table 1: Emerging governance protocols by level transition**

| Protocol | Level transition | What it governs | Sector |
|----------|-----------------|-----------------|--------|
| BAA extension to AI vendors | L1 → L2 | Contractual accountability for AI vendor data handling | Healthcare |
| Output verification obligation (ABA 512) | L1 → L2 | Mandatory human verification step before professional use | Legal |
| Risk-tiered deployment classification (EU AI Act) | L2 → L3 | Pre-deployment classification with defined governance requirements | Cross-sector (EU) |
| PR/output SLOs and smart routing (Code Inbox pattern) | L3 → L4 | Volume and routing of AI-generated outputs through human review | Software engineering |
| Agent handoff contracts | L4 → L5 | Scope, output format, escalation triggers between AI agent systems | Emerging |

What these five protocols share: each converts a previously discretionary human judgment into a designed coordination mechanism. ABA 512 converts "the lawyer decides whether to verify" into a mandatory protocol step. Code Inbox converts "engineers decide which PRs to review first" into a classified, routed, SLO-governed workflow. Each scales because it is a protocol, not a person.

Git is the reference point. Git did not improve code quality. It created the handoff structure — branch, commit, pull request, merge — that allowed code quality to be governed at scale across distributed teams. These emerging protocols are doing the same for AI: creating the handoff structures that allow AI output quality to be governed at scale. The organizations building to them now are building governance that will be sector-standard within years. Organizations that wait for full standardization will implement them under regulatory or liability pressure, at higher cost and lower control.

---

## 5. Where organizations are now — and what the distribution predicts

Most organizations are at Level 1 or Level 2. The evidence from 2024–2026 surveys is consistent on this finding.

McKinsey (2025): 88% adoption, but 66% have not yet begun scaling AI across the enterprise.[^30] Only 39% report any EBIT impact. Menlo Ventures (2025): 63% of enterprise AI deployments are still prompt design, RAG, or fixed workflows — not true agents.[^31] Reco.ai: 71% of enterprise employees use unauthorized AI tools, indicating Level 1 co-exists beneath whatever Level 2 access mandates have been issued.[^32] IBM survey: only 39% of CEOs report adequate AI governance.[^33]

A cohort of approximately 6–15% of organizations has designed AI into specific workflows with explicit governance. McKinsey's high performers (6%) have fundamentally redesigned workflows and human-in-the-loop validation. Accenture's Achievers (12%) have CEO sponsorship and industrialized tooling, and are 3.5 times more likely than Experimenters to see AI-influenced revenue exceed 30% of total revenues.[^34] OpenAI's data shows frontier organizations sending 6 times more messages per seat than median enterprises.[^35] The differentiator between these organizations and the majority is protocol design, not tools.

The model predicts the distribution will become more bimodal. Level 3 organizations compound: AI-designed workflows generate data that improves the protocol, which improves the workflow, which generates more data. Level 2 organizations plateau: access mandates without output governance do not generate the feedback needed to improve. The gap between Achievers and Experimenters is a protocol design gap that will widen without deliberate intervention.

Three regulatory instruments are creating forced transitions in specific sectors:

- **EU AI Act** (August 2026): organizations deploying AI in hiring, HR management, credit scoring, or other high-risk categories under EU scope face a mandatory Level 2-to-3 transition. Access-only governance is legally insufficient for these functions.[^36]
- **NIST AI RMF 1.0** (2023): the US government's voluntary framework — Govern, Map, Measure, Manage — maps directly to L3+ protocol design requirements and is being incorporated into OCC and HHS sector guidance.[^37]
- **HHS/OCR HIPAA overhaul (2025)**: proposed elimination of the "required vs. addressable" distinction and mandatory annual audits press healthcare organizations toward formalized governance beyond access-only protocols.

Organizations outside these forcing functions face a choice: design the Level 2-to-3 transition voluntarily, or wait for a liability event. The Air Canada chatbot case — $812 in direct damages, incalculable reputational cost, and a legal precedent now cited across enterprise AI governance discussions — is the model for what forces the transition reactively at Level 2.

---

## 6. How to use this model

The model's primary value is predictive. Placing your organization on the model identifies the failure mode that is approaching before it materializes as a crisis. The goal is not to score well — it is to identify the specific protocol design change that prevents the next failure.

**Step 1: Map AI exposure by function.**
List every function where AI produces outputs that affect decisions: customer communications, code, financial analysis, legal review, HR decisions, clinical recommendations, contracts. This is the inventory the model operates on.

**Step 2: Apply the governing uncertainty test to each function.**
Ask: *"When your AI system produces a wrong answer here, what happens next — and who is accountable?"*

| Answer | Level |
|--------|-------|
| "We'd probably not notice" / "It hasn't happened yet" | Level 1 |
| "Someone notices and flags it after the fact" | Level 2 |
| "There is a review process before the output is used" | Level 3 |
| "We have error metrics, escalation paths, and the protocol updates when the error rate changes" | Level 4 |
| "The protocol is infrastructure — we monitor the infrastructure, not individual outputs" | Level 5 |

**Step 3: Identify the bottleneck.**
The function with the lowest answer and the highest consequences — revenue, liability, patient safety, regulatory exposure — is the bottleneck. That is the organization's effective governance level for risk assessment. A Level 3 engineering organization with a Level 1 HR function has a Level 1 liability ceiling in any employment-related AI dispute.

**Step 4: Identify the transition requirement.**
Use the level descriptions to identify the specific protocol design change the bottleneck function requires:

- L1 → L2: Issue a formal access policy. Grant sanctioned access to approved tools under defined conditions.
- L2 → L3: Redesign the governing protocol from access-scope to output-scope. Define verification requirements before consequential use.
- L3 → L4: Extend workflow-level protocols into cross-function and cross-boundary coordination.
- L4 → L5: Participate in sector-level protocol design and standards processes.

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

[^2]: Mihaela Vorvoreanu, Amy Heger, Samir Passi, et al. (Microsoft AETHER Committee), "Microsoft Responsible AI Maturity Model," Microsoft Research, May 2023. The model is built on 80+ hours of interviews with 90+ participants and organizes 24 empirically derived dimensions across three categories.

[^3]: Accenture, "The Art of AI Maturity," Accenture Research, 2024.

[^4]: Boston Consulting Group, "BCG AI Maturity Matrix," November 2024.

[^5]: VinciWorks; ABA Law Practice Magazine; court records (*Mata v. Avianca*, 2023; *ByoPlanet v. Johansson*, 2025). 550+ publicly reported hallucination cases as of early 2026; 712 judicial decisions worldwide. ByoPlanet fine: $86,000.

[^6]: Watts S. Humphrey, *Managing the Software Process* (Reading, MA: Addison-Wesley Longman, 1989). CMM commissioned by the US Department of Defense (1986). CMMI (2002) superseded the original; currently maintained by ISACA.

[^7]: Singla et al., "The State of AI in 2025."

[^8]: Ibid. McKinsey defines high performers as organizations reporting >5% EBIT impact from AI with "significant value" from AI enterprise-wide. "High performers are nearly three times as likely as others are to say their organizations have fundamentally redesigned individual workflows in their deployment of AI."

[^9]: Menlo Ventures, "2025 State of Generative AI in the Enterprise," November 2025. "Fastest-scaling software category in history" is Menlo Ventures' direct characterization of the $37B (2025) enterprise GenAI market.

[^10]: Venkatesh Rao, "Introduction to the Protocol Reader," Summer of Protocols, 2023, citing Danny Ryan.

[^11]: Venkatesh Rao, "Constructing the Evil Twin of AI," *Protocolized*, 2025.

[^12]: Reco.ai (2025), as cited in shadow AI prevalence roundup.

[^13]: Cyberhaven Q1 2024 data, as cited in shadow AI prevalence roundup. IBM Security, "Cost of a Data Breach Report 2025," puts shadow AI incidents at $4.63M average cost — $670K above baseline.

[^14]: Gizmodo / Bloomberg reporting on Samsung ChatGPT data leak, April–May 2023.

[^15]: symplr, "2025 Enterprise Healthcare IT Survey," 2025. Average healthcare breach cost: $7.42M, 279 days to resolve (IBM 2025).

[^16]: ABA Formal Opinion 512, July 2024.

[^17]: Fast Company; Fortune; TechCrunch. Klarna AI deployment and reversal reporting, 2023–2025. Klarna headcount: ~5,527 (2022) → ~3,100 (IPO, September 2025).

[^18]: *Moffatt v. Air Canada*, 2024 BCCRT 149 (British Columbia Civil Resolution Tribunal, February 14, 2024). https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html.

[^19]: *Moffatt v. Air Canada*, 2024 BCCRT 149, para. 29. Confirmed verbatim in Protocols for Business Special Interest Group, Protocolized, "Finding Fault Lines within the Firm," *Protocolized*, 2026.

[^20]: CNBC; Digital Commerce 360. Shopify AI mandate reporting, April 2025. Tobias Lütke: "Frankly, I don't think it's feasible to opt out of learning the skill of applying AI."

[^21]: TechCrunch; Fortune. Duolingo AI-first reporting, 2024–2025.

[^22]: European Parliament and Council of the European Union, Regulation (EU) 2024/1689 (AI Act), *Official Journal of the European Union*, July 12, 2024. https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng. Compliance for most obligations: August 2, 2026.

[^23]: Anshu Chada and Ty Smith, "Uber: Leading Engineering through an Agentic Shift," The Pragmatic Summit, March 10, 2026; Gergely Orosz, "How Uber Uses AI for Development: Inside Look," *The Pragmatic Engineer*, March 10–11, 2026.

[^24]: Chada and Smith, "Uber: Leading Engineering through an Agentic Shift."

[^25]: Blake Scholl, "Move Fast and Don't Break (Safety Critical) Things," *Boom Supersonic*, August 10, 2025; "Move Fast and Don't Break (Safety Critical) Things Part 2: Vertical Integration," *Boom Supersonic*, September 14, 2025. https://bscholl.substack.com/p/move-fast-and-dont-break-safety-critical. XB-1 built by ~50 engineers at ~$190M — Scholl claims an order-of-magnitude improvement over comparable aerospace programs.

[^26]: Scholl, "Move Fast and Don't Break (Safety Critical) Things."

[^27]: Orosz, "How Uber Uses AI for Development." Four-layer architecture verbatim: "(1) Internal AI platform built on Michelangelo, (2) Internal Uber context (source code, docs, Slack, JIRA), (3) Industry agents (Claude Code, Copilot, Codex, Cursor), (4) Specialized agents (Minion background agent, Autocover test generation, uReview code review)."

[^28]: Venkatesh Rao, "Have Your Factory Call My Factory," *Protocolized*, March 2026. The shared Dropbox folder and "manuscript transmittal" server described in the essay are the precursor form of what agent handoff contracts formalize.

[^29]: Protocolized, "Table: Learning to See Business Protocols," *Protocolized*, 2026.

[^30]: Singla et al., "The State of AI in 2025."

[^31]: Menlo Ventures, "2025 State of Generative AI in the Enterprise."

[^32]: Reco.ai, as cited in shadow AI prevalence roundup.

[^33]: IBM CEO survey, 2024, as cited in shadow AI prevalence roundup. IBM Security also reports 97% of organizations experiencing AI-related security incidents lacked proper AI access controls.

[^34]: Accenture, "Art of AI Maturity."

[^35]: OpenAI, "State of Enterprise AI 2025."

[^36]: EU AI Act, Regulation 2024/1689. Fines for non-compliance: up to €35M or 7% of global annual turnover for prohibited practices; up to €15M or 3% for other violations.

[^37]: National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, January 26, 2023. https://doi.org/10.6028/NIST.AI.100-1.

---

## Bibliography

Accenture. "The Art of AI Maturity." Accenture Research, 2024. https://www.accenture.com/us-en/insights/technology/art-of-artificial-intelligence-maturity.

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

Rao, Venkatesh. "Introduction to the Protocol Reader." Summer of Protocols, 2023.

Rao, Venkatesh. "Constructing the Evil Twin of AI." *Protocolized*, 2025.

Rao, Venkatesh. "Have Your Factory Call My Factory." *Protocolized*, March 2026.

Rao, Venkatesh, and Patrick Nast. "Theorizing Protocolization I: New Nature." *Protocolized*, 2026.

Ranganathan, Aruna, and Xingqi Maggie Ye. "AI Doesn't Reduce Work — It Intensifies It." *Harvard Business Review*, February 2026.

Scholl, Blake. "Move Fast and Don't Break (Safety Critical) Things." *Boom Supersonic*, August 10, 2025. https://bscholl.substack.com/p/move-fast-and-dont-break-safety-critical.

Scholl, Blake. "Move Fast and Don't Break (Safety Critical) Things Part 2: Vertical Integration." *Boom Supersonic*, September 14, 2025.

Singla, Alex, Alexander Sukharevsky, Bryce Hall, Laraina Yee, Michael Chui, and Tara Balakrishnan. "The State of AI in 2025: Agents, Innovation, and Transformation." McKinsey & Company, November 2025. https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai.

Protocolized. "Table: Learning to See Business Protocols." *Protocolized*, 2026.

---

*Word count (body only, excluding notes and bibliography): approximately 5,400 words*
*Estimated print length: 10–11 pages at standard formatting*
*Status: First draft — for author review before publication*
