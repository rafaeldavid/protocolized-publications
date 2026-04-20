# Litepaper — Bibliography, Quotes, and Resource Gaps

**Version:** 0.4 (quote extraction complete)
**Date:** 2026-03-18
**Purpose:** Curated resource list for litepaper drafting. Includes section mapping, citable claims, Chicago-style bibliography, and gap analysis.

**Note on quotes:** Verbatim quotes confirmed from source catalog annotations are marked ✓. Claims paraphrased from annotations are marked [PARAPHRASE — extract verbatim from source PDF before citing]. McKinsey (entry 18) requires re-verification from the full report.

---

## Part 1 — Curated Resources by Litepaper Section

### Section 1: The problem with existing AI maturity models

| # | Source | What it contributes |
|---|--------|-------------------|
| 38 | Humphrey — Managing the Software Process | SEI CMM intellectual lineage: five levels, "initial" = individual heroics, maturity = reliable process — establishes the framework this model builds on |
| 14 | Microsoft RAI Maturity Model | What the best existing model measures — and the gap it leaves (responsible AI, not uncertainty governance) |
| 15 | Accenture Art of AI Maturity | 63% of organizations are AI Experimenters; the Foundation/Differentiation axis; CEO sponsorship finding |
| 13 | BCG AI Maturity Matrix | National-level frame — useful contrast to show why organizational model is needed |
| 17 | Menlo Ventures State of GenAI | 16% of enterprises have deployed true agents — empirical anchor for where most orgs actually are |
| 18 | McKinsey State of AI 2025 | Adoption vs. value capture gap; 33% → 65% adoption but results still lagging |
| 34 | Shadow AI prevalence roundup | 3.1% of enterprise ChatGPT users submitting confidential data; 86% of healthcare orgs have shadow AI |

### Section 2: A protocol-framed model

| # | Source | What it contributes |
|---|--------|-------------------|
| 20 | Rao — Introduction to the Protocol Reader | Definition of protocol as coordination mechanism; the foundational vocabulary |
| 21 | Rao/Nast — Theorizing Protocolization I | Protocols as "new nature" — formal grounding for why AI tools require protocol-level response |
| 23 | Rao — What is Formal Protocol Theory? | Methodology of protocol framing; why it differs from policy or compliance |
| 24 | Rao — Constructing the Evil Twin of AI | "Smooth to striated" behavioral space framing — the theoretical basis for why maturity = constrained optionality |
| 35 | Table: Learning to See Business Protocols | Protocol trade pattern — every protocol trades one class of problem for another; direct precedent for level-by-level failure mode logic |
| 3  | Benny — Why Does AI Development Look Like 1980s Software Planning? | Ontological drift — the mechanism by which low-maturity AI governance fails |

### Section 3: The five levels

**Level 1 — Shadow**

| # | Source | What it contributes |
|---|--------|-------------------|
| 28 | Samsung ChatGPT leak | Three engineers, proprietary data, April 2023 — canonical L1 case |
| 29 | Legal hallucination sanctions | 550+ cases, $86K fine, ABA Formal Opinion 512 — governance failure at scale |
| 30 | Healthcare shadow AI | 86% of healthcare orgs have shadow AI incidents; 3.1% of users submitting confidential data |
| 34 | Shadow AI prevalence roundup | IBM: shadow AI incidents cost $4.63M on average vs. baseline; 97% lacked proper AI access controls |

**Level 2 — Sanctioned**

| # | Source | What it contributes |
|---|--------|-------------------|
| 31 | Klarna | 90% daily adoption → "generic, repetitive, insufficiently nuanced" → rehiring; the L2 failure arc |
| 32 | Shopify | Lütke's "non-optional" memo — mandate without workflow design |
| 33 | Duolingo | Contractor replacement → user backlash → DAU growth at "lower end of projections" |
| 37 | Moffatt v. Air Canada | Chatbot deployed without accountability protocol; "separate entity" defense rejected — corporate liability for AI output |
| 4  | Armstrong — The Hottest Job in Tech | L2→3 transition requires embedded workflow design; FDE as the transition enabler |

**Level 3 — Designed**

| # | Source | What it contributes |
|---|--------|-------------------|
| 1/2 | Uber (Pragmatic Summit + Orosz) | Level 3 in practice: designed workflows, new bottleneck (code review), purpose-built tooling |
| 8  | Scholl — Vertical Integration (Slacker Index) | Slacker Index as diagnostic for governance bottleneck; L3→4 transition is collapsing the ratio |
| 5  | Scianna — Building an FDE Team | Gravel road + demo-as-spec: practical tools for first governed workflow; Auftragstaktik for distributed AI authority |
| 27 | Rao — Have Your Factory Call My Factory | F2F pipeline: what Level 3 looks like at individual level when enterprise is still at Level 1 |
| 36 | Ranganathan/Ye — HBR | Intensification = symptom of missing protocol layer; empirical evidence for the L3/L1 mismatch |

**Level 4 — Infrastructural**

| # | Source | What it contributes |
|---|--------|-------------------|
| 1/2 | Uber | Four-layer platform architecture; 6x cost increase; code review as first-class bottleneck |
| 15 | Accenture | Achievers (12%): CEO sponsorship, industrialized tooling, cross-cutting talent — what L4 looks like |
| 16 | OpenAI State of Enterprise AI | Frontier orgs: 6x more messages than median; 2x per seat — empirical evidence for the L4/L1 gap |
| 4  | Armstrong — FDE | Platform feedback loop (FDE discovery → platform abstraction) — what moves an org from project-specific to integrated |

**Level 5 — Planetary**

| # | Source | What it contributes |
|---|--------|-------------------|
| 7/11 | Scholl — XB-1 and Jevons's Law | Jevons's Law: when iteration is cheap, new decision spaces open — the non-linear payoff of Level 5 |
| 24 | Rao — Evil Twin of AI | "Smooth to striated" framing; AI as optionality-to-structure converter; L5 as full striation |
| 25 | Stinson-Schroff — Mechanical Currents | Systemic fragility as the failure mode of planet-scale protocols |

### Section 4: How to use this model

| # | Source | What it contributes |
|---|--------|-------------------|
| 26 | Rafa — Finding Fault Lines | Bottleneck heterogeneity in practice — weakest function sets the org-level maturity |
| 15 | Accenture | Foundation/Differentiation axes as diagnostic dimensions |
| 14 | Microsoft | Warning against averaging scores — dimensions are interdependent, not additive |

### Section 5: Where organizations are now + regulatory context

| # | Source | What it contributes |
|---|--------|-------------------|
| 17 | Menlo Ventures | 16% true agents; 63% still using prompt design / RAG / fixed workflows |
| 15 | Accenture | 63% AI Experimenters; 12% AI Achievers |
| 18 | McKinsey | 65% have adopted GenAI; value capture still lagging |
| 16 | OpenAI | Widening capability gap: frontier orgs vs. median |
| 34 | Shadow AI roundup | Shadow AI prevalence — 86% healthcare, 3.1% enterprise ChatGPT users submitting confidential data |
| 36 | HBR | AI adoption intensifies work without organizational absorption — empirical evidence for stuck pattern |
| 39 | NIST AI RMF 1.0 | US enterprise governance reference: Govern / Map / Measure / Manage — maps to L3+ protocol design requirements |
| 40 | EU AI Act 2024/1689 | Global compliance forcing function: high-risk AI (hiring, HR) requires documented human oversight from August 2026 |

---

## Part 2 — Key Citable Claims Per Source

### Entry 1 — Uber: Leading engineering through an agentic shift
- "AI is enabling people to become superhumans in terms of their productivity and the impact that we can realize for our end users." ✓ (verbatim, uber-agentic-shift-transcript.txt)
- 84% of Uber developers are active agentic coding users (March 2026) ✓
- 65–72% of code is AI-generated inside IDE tools ✓
- Claude Code adoption: 32% of developers in December 2025 → 63% in February 2026 ✓
- Code review became the primary operational bottleneck as agentic PR volume grew ✓

### Entry 2 — How Uber uses AI for development: inside look
- 11% of PRs opened by agents (March 2026) ✓
- AI-related costs up 6x since 2024 ✓
- Internal tools built for the agentic era: Minion, Shepherd, Autocover, Code Inbox, U Review ✓
- "Uber's agentic systems, split across four layers" — (1) Internal AI platform built on Michelangelo, (2) Internal Uber context (source code, docs, Slack, JIRA), (3) Industry agents (Claude Code, Copilot, Codex, Cursor), (4) Specialized agents (Minion background agent, Autocover test generation, uReview code review). ✓ (verbatim label, How Uber uses AI for development_ inside look.txt)

### Entry 3 — Why Does AI Development Look Like 1980s Software Planning?
- "In the LLM era, the cost structure flips. LLMs make documentation, specifications, diagrams, and written artifacts essentially free—but they make ontological drift extremely expensive. When agents, tools, and auto-generated artifacts depend on stable definitions, changing the meaning of a term or schema midstream breaks everything." ✓ (verbatim, Why Does AI Development Look Like 1980s Software Planning_.txt) [This passage contains both the definition of ontological drift and the cost-structure flip thesis]
- "Organizations compensate by freezing definitions, front-loading clarity, and minimizing mid-cycle reinterpretation. This is a return to Waterfall—not because people suddenly prefer big plans but because the communication structure that Waterfall requires (stable meanings, fixed interfaces, slow-changing schemas) now incurs the lowest transaction costs." ✓ (verbatim, Why Does AI Development Look Like 1980s Software Planning_.txt)

### Entry 4 — The Hottest Job in Tech
- OpenAI deploys FDEs to customers spending $10M+/year ✓
- FDE cost: $200–300K salary; services rule of thumb ≤25% of Year-1 contract value → effective $1M+ floor ✓
- Workday 2012 IPO: 35% of revenue from on-site professional services ✓
- "The largest reason that the FDE has happened today is because AI will end up being a bigger and more important platform shift than the cloud was. The biggest changes are not even technological, they are operational." ✓ (verbatim, The Hottest Job in Tech - by Evan Armstrong - The Leverage.txt)

### Entry 5 — How to Build Your Forward Deployed Engineering Team
- "Build the gravel road: Discover and construct the minimum viable path to the outcome that moves the needle/solves the user's pain point. Fast, a bit ugly, but true — and this will expose patterns (reusable primitives, inputs/outputs, workflows, feature sets, knobs) you may later pave into the platform." ✓ (verbatim, How to Build Your Forward Deployed Engineering Team.txt)
- "FDE runs on the military concept of Auftragstaktik, where HQ sets the objective and delegates tactical execution almost entirely to the field team." ✓ (verbatim, How to Build Your Forward Deployed Engineering Team.txt)
- "If it's working, in a healthy loop, revenue per FDE will rise as software replaces the engineers who are bridging the gap between what the product can do and what the customer needs." ✓ (verbatim, How to Build Your Forward Deployed Engineering Team.txt)

### Entry 7 — Move fast and don't break things [Part 1]
- XB-1 built by ~50 engineers at ~$190M — order of magnitude better than comparable aerospace programs ✓
- Boomless Cruise discovered through iteration — not original design objective ✓
- "But the real magic isn't the time savings—it's sort of a Jevon's Law of engineering: when engineering iteration is quick and cheap, many more designs can be evaluated and a much better design can be discovered." ✓ (verbatim, Move fast and don't break (safety critical) things.txt)

### Entry 8 — Vertical Integration (Slacker Index)
- Slacker Index = total lead time ÷ actual working time ✓
- Turbine blade case: $1M per engine, 6-month lead time → $2M 3D printer → 24-hour production, daily iteration ✓
- "It doesn't just shave months off a schedule. It changes the physics of what's possible. Problems that would be existential with a year-long lead time become solvable with a 24-hour iteration cycle." ✓ (verbatim, Move Fast and Don't Break (safety critical) Things Part 2_ Vertical Integration.txt)

### Entry 13 — BCG AI Maturity Matrix
- Only 5 of 73 economies qualify as AI Pioneers ✓
- AI use boosted some companies' revenues by 2.5x vs. competitors ✓
- Global AI spending projection: $632B by 2028 (Goldman Sachs, May 2024) ✓ [secondary citation]
- "Exposed Practitioners. This group includes developing and developed economies vulnerable to AI disruption due to more high-exposure sectors and low readiness." ✓ (verbatim, BCG-AI-Maturity-Matrix-2024.pdf) [The mismatch framing: high exposure + insufficient readiness = "Exposed Practitioners" archetype]

### Entry 14 — Microsoft RAI Maturity Model
- Built on 80+ hours of interviews and focus groups with 90+ participants ✓
- 24 empirically derived dimensions organized across three categories ✓
- "a level 5 in tooling does not have the same impact as level 5 in culture and leadership. Therefore, a particular high level is not meaningful when abstracted away from the context of its dimension and interdependency with other dimensions." ✓ (verbatim, Microsoft-Responsible-AI-Maturity-Model-2023.pdf) [Note: exact warning language confirmed; the bibliography paraphrase overstated it — the document does not say "does not compensate," but the interdependence warning is accurate]
- "Disciplines with sociotechnical expertise such as UX, anthropology, sociology, linguistics, etc. are engaged to address RAI issues." ✓ (verbatim, Microsoft-Responsible-AI-Maturity-Model-2023.pdf) [From the cross-discipline collaboration dimension, Level 3 description]

### Entry 15 — Accenture Art of AI Maturity
- 12% of firms are AI Achievers; 63% are AI Experimenters ✓
- "they're 3.5 times more likely than Experimenters to see their AI-influenced revenue surpass 30% of their total revenues." ✓ (verbatim, Accenture-Art-of-AI-Maturity-Report.pdf)
- Achievers are 25% more likely to scale AI pilots to production ✓
- 83% of Achievers have CEO and senior leadership sponsorship ✓
- BBVA: 4,000+ internal custom GPTs deployed ✓
- AI transformation happening 16 months faster than digital transformation (projected) ✓

### Entry 16 — OpenAI State of Enterprise AI 2025
- ChatGPT message volume grew 8x from November 2024 ✓
- API reasoning token consumption grew 320x ✓
- 40–60 minutes/day saved per active ChatGPT Enterprise user ✓
- 75% of workers report improved speed or quality ✓
- Frontier organizations send 6x more messages than median enterprises ✓
- "75% of workers report being able to complete tasks they previously could not perform, including programming support and code review, spreadsheet analysis and automation, technical tool development and troubleshooting, and custom GPT or agent design." ✓ (verbatim, OpenAI-State-of-Enterprise-AI-2025.pdf)

### Entry 17 — Menlo Ventures State of GenAI Enterprise 2025
- Enterprise GenAI market: $37B (2025) — "Fastest-scaling software category in history" ✓ (verbatim, Menlo-Ventures-State-of-GenAI-Enterprise-2025-notes.txt)
- Only 16% of enterprise deployments qualify as "true agents" (27% for startups) ✓
- Build vs. buy shift: 47% build / 53% buy (2024) → 24% build / 76% buy (2025) ✓
- 50% of developers use AI coding tools daily; teams report 15%+ velocity gains ✓

### Entry 18 — McKinsey State of AI in 2025 (verified from PDF)
- **CORRECTION:** Prior annotation cited "~33% (2023) → ~65% (2024)" — this figure is a misattribution from the historical time series. Do not use.
- 88% of organizations use AI in at least one function (2025 survey); 78% a year prior ✓
- Only 39% report any EBIT impact from AI; only ~6% qualify as high performers (>5% EBIT + "significant value") ✓
- 66% have not yet begun scaling AI across the enterprise ✓
- "Meaningful enterprise-wide bottom-line impact from the use of AI continues to be rare." ✓ (verbatim)
- Human-in-the-loop validation: 65% of high performers have it vs. 23% of others ✓
- Workflow redesign: high performers 2.8x more likely to have fundamentally redesigned workflows ✓
- "High performers are nearly three times as likely as others are to say their organizations have fundamentally redesigned individual workflows in their deployment of AI." ✓ (verbatim)
- Senior leadership ownership: high performers 3.0x more likely (48% vs. 16%) ✓
- Agentic AI: only 22% scaling agents anywhere; no more than 10% in any single function ✓
- Survey: 1,993 respondents, 105 nations, June 25–July 29, 2025 ✓
- Source file: `../Resources/the-state-of-ai-in-2025-vf.pdf` ✓

### Entry 20 — Rao — Introduction to the Protocol Reader
- "A protocol is a stratum of codified behavior that allows for the construction or emergence of complex coordinated behaviors at adjacent loci." ✓ (verbatim, Introduction-to-the-Protocol-Reader-Venkatesh-Rao.pdf — attributed to Danny Ryan, cited by Rao)
- "Though they arrive slowly, protocols typically install themselves in extraordinarily persistent ways, often turning into seemingly immortal and unconscious parts of our built environment. Their relative invisibility is a second major tell." ✓ (verbatim, Introduction-to-the-Protocol-Reader-Venkatesh-Rao.pdf)
- Framing source for: "Civilization advances by extending the number of important operations which we can perform without thinking of them." (Alfred North Whitehead, cited by Rao in context of protocol invisibility) ✓

### Entry 23 — Rao — What is Formal Protocol Theory?
- No explicit distinction between protocol and policy found in this document. FPT is framed as developing rigorous analytical tools for coordination mechanisms across scales — the precision argument comes from the analytical framework, not a direct policy/protocol contrast.
- "Session 6 (August 22 — upcoming). Impossibilities and Symmetries. In our upcoming session, we will start with the influential Witsenhausen counterexample and explore a core concern of any field dedicated to formal investigations – impossibilities and symmetries (or equivalently, conserved quantities)." ✓ (verbatim, What is Formal Protocol Theory_.pdf)
- Note: Use Entry 20 (Protocol Reader) and Entry 24 (Evil Twin) for the protocol definition and protocol/policy contrast in the litepaper — Entry 23 is better suited to the methodology/precision argument.

### Entry 24 — Rao — Constructing the Evil Twin of AI
- "To borrow a pair of terms from the postmodernists, protocols turn smooth behavior spaces (such as open, unbuilt terrain) into striated behavior spaces (such as a system of roads)." ✓ (verbatim, Constructing the Evil Twin of AI.pdf)

### Entry 26 — Protocols for Business SIG — Finding Fault Lines
- "In geology, fault lines are not identified by close surface inspection. They are discovered when accumulated stress forces the underlying structure to express itself. Our discussions highlighted how protocols behave similarly. Persistent problems and persistent point less to local error or exceptional talent than to the protocols through which pressure concentrates and trade-offs are stabilized." ✓ (verbatim, Finding Fault Lines within the Firm.pdf)
- "This matters because management subsumed in software behaves differently from practiced management. Protocols, when encoded in software, limit discretion in what is authorized and auditable. In contrast, management practice as a whole consists of what is necessary and effective in context." ✓ (verbatim, Finding Fault Lines within the Firm.pdf)
- Air Canada chatbot case (verbatim): "The court rejected this argument. It ruled that the chatbot was part of the airline's customer-facing system and that the company was responsible for the commitments it made, regardless of whether those commitments were generated by an AI system." ✓ (verbatim, Finding Fault Lines within the Firm.pdf)
- Note: Bottleneck heterogeneity argument (effective level = highest-stakes, weakest-governed function) is framed through the "governing clock" concept — slowest constraint sets pace for the entire system. Not stated as a single quotable sentence; use paraphrase with citation.

### Entry 27 — Rao — Have Your Factory Call My Factory
- [NOT FOUND — paraphrase only; do not cite as direct quote] The claimed quote "Neither of them writes code. Neither has touched a line of content text. What they bring is domain knowledge." does not appear in the source. The actual passage is first-person singular: "So far I haven't touched a line of content text, and haven't even looked at any code. I watch the action entirely at the shell level, like a factory floor supervisor." ✓ (verbatim, Have Your Factory Call My Factory.pdf)
- "The handoff point between us is a shared Dropbox folder plus a 'manuscript transmittal' server she's set up for metadata." ✓ (verbatim, Have Your Factory Call My Factory.pdf)

### Entry 28 — Samsung ChatGPT leak
- Three engineers submitted proprietary source code, equipment specifications, and an internal meeting transcript within one month (April 2023) ✓
- Cyberhaven estimate: 3.1% of enterprise ChatGPT users had submitted confidential company data ✓

### Entry 29 — Legal hallucination sanctions
- 550+ publicly reported hallucination cases tracked (as of early 2026); 712 judicial decisions worldwide ✓
- ByoPlanet v. Johansson: $86,000 fine — largest single sanction for AI hallucination ✓
- ABA Formal Opinion 512 (July 2024): lawyers must have "reasonable understanding" of AI capabilities and must verify all output ✓

### Entry 30 — Healthcare shadow AI
- 86% of healthcare organizations had shadow AI incidents (symplr 2025 survey) ✓
- Average healthcare breach cost: $7.42 million, 279 days to resolve (IBM 2025) ✓
- Shadow AI incidents cost $4.63M on average across all sectors — $670K above baseline ✓

### Entry 31 — Klarna
- 90% of Klarna employees using AI tools daily (May 2024) — highest publicly reported enterprise rate ✓
- CEO described AI customer service replies as "generic, repetitive, insufficiently nuanced" ✓ [PARAPHRASE — confirm exact CEO quote attribution]
- Klarna claimed $40M profit improvement for 2024 attributed to AI ✓
- Headcount reduction: ~5,527 (2022) → ~3,100 (IPO, September 2025) ✓

### Entry 32 — Shopify
- "Frankly, I don't think it's feasible to opt out of learning the skill of applying AI." — Tobias Lütke ✓
- Revenue growth: 30% YoY (Full Year 2025); operating expenses fell from 45% to 35% of revenue ✓

### Entry 33 — Duolingo
- CEO claimed 4–5x content production with same headcount (September 2025) ✓ [PARAPHRASE — no independent verification published]
- User backlash pushed DAU growth to "lower end of projections" (Q2 2025 earnings) ✓

### Entry 34 — Shadow AI prevalence roundup
- Gartner: 41% of employees acquire, modify, or create technology outside IT visibility ✓ [VERIFY source]
- IBM 2025: 97% of organizations experiencing AI-related security incidents lacked proper AI access controls ✓
- 44% of organizations experiencing shadow AI incident suffered confirmed data compromise ✓

### Entry 35 — Table: Learning to See Business Protocols
- Protocol trade pattern: protocols do not eliminate problems — they trade one class for another ✓
- [PARAPHRASE — extract canonical examples of protocol-as-trade from the table]

### Entry 36 — HBR — AI Doesn't Reduce Work, It Intensifies It
- [PARAPHRASE — extract central finding on intensification: expanding tasks, multitasking, working beyond normal hours]
- [PARAPHRASE — extract the intrinsic motivation finding — workers do this to themselves]

### Entry 37 — Moffatt v. Air Canada, 2024 BCCRT 149
- Tribunal held Air Canada liable for negligent misrepresentation based on chatbot output ✓
- Air Canada's "separate entity" defense (chatbot bears no relationship to the company) was rejected entirely ✓
- Damages: $812.02 (fare difference, pre-judgment interest, tribunal fees) ✓
- Decision date: February 14, 2024 ✓

### Entry 38 — Humphrey — Managing the Software Process (SEI CMM)
- Five levels: Initial (ad hoc), Repeatable (some repeatability), Defined (documented), Managed (measured), Optimizing (continuous improvement) ✓
- Level 1 characteristic: success depends on individual heroics, not replicable process ✓
- CMM originated at SEI, Carnegie Mellon University, commissioned by US Department of Defense (1986) ✓
- CMMI (2002) superseded the original CMM, integrating multiple frameworks; currently maintained by ISACA ✓

### Entry 39 — NIST AI RMF 1.0
- Released January 26, 2023 — primary US government AI risk guidance as of March 2026 ✓
- Four core functions: Govern, Map, Measure, Manage ✓
- Voluntary and non-sector-specific; referenced in proposed federal regulations and OCC/HHS sector guidance ✓
- Free PDF: https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf ✓
- Generative AI profile (NIST AI 600-1) released 2024 — GenAI-specific supplement ✓

### Entry 40 — EU AI Act (Regulation 2024/1689)
- Published in Official Journal of the EU: July 12, 2024; entered into force August 1, 2024 ✓
- Compliance timeline: prohibitions enforceable February 2, 2025; most obligations apply August 2, 2026 ✓
- High-risk AI categories include: hiring/HR management systems, credit scoring, critical infrastructure, medical devices ✓
- Fines: up to €35M or 7% of global turnover for prohibited practices; €15M or 3% for other violations ✓
- General purpose AI models (including LLMs) subject to transparency and documentation requirements from August 2025 ✓

---

## Part 3 — Chicago Bibliography (17th Edition, Notes-Bibliography Style)

Armstrong, Evan. "The Hottest Job in Tech." *The Leverage*, August 5, 2025.

Benny, Sachin. "Why Does AI Development Look Like 1980s Software Planning?" *Summer Lightning*, November 16, 2025.

Benny, Sachin. "Vibe Coding and the Maker Movement." *Technically / Summer of Protocols*, February 26, 2026.

Chada, Anshu, and Ty Smith. "Uber: Leading Engineering through an Agentic Shift." Talk presented at The Pragmatic Summit, published by *The Pragmatic Engineer*, March 10, 2026. https://www.youtube.com/watch?v=i1tZN41VKcE.

Boston Consulting Group. "BCG AI Maturity Matrix." November 2024. https://web-assets.bcg.com/95/38/a3ada1a74c6a813f7fe10ac432e9/bcg-ai-maturity-matrix-2024.pdf.

Singla, Alex, Alexander Sukharevsky, Bryce Hall, Laraina Yee, Michael Chui, and Tara Balakrishnan. "The State of AI in 2025: Agents, Innovation, and Transformation." McKinsey & Company, November 2025. https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai.

Menlo Ventures. "2025 State of Generative AI in the Enterprise." November 2025. https://menlovc.com/2025-the-state-of-generative-ai-in-the-enterprise/.

Microsoft AETHER Committee (Vorvoreanu, Mihaela, Amy Heger, Samir Passi, et al.). "Microsoft Responsible AI Maturity Model." Microsoft Research, May 2023. https://www.microsoft.com/en-us/research/uploads/prod/2023/05/RAI_Maturity_Model_Aether_Microsoft_WhitePaper.pdf.

OpenAI. "State of Enterprise AI 2025." 2025.

Orosz, Gergely. "How Uber Uses AI for Development: Inside Look." *The Pragmatic Engineer*, March 10–11, 2026.

Ranganathan, Aruna, and Xingqi Maggie Ye. "AI Doesn't Reduce Work — It Intensifies It." *Harvard Business Review*, February 2026.

Rao, Venkatesh. "Introduction to the Protocol Reader." Summer of Protocols, 2023.

Rao, Venkatesh. "What Is Formal Protocol Theory?" *Protocolized*, 2025.

Rao, Venkatesh. "Constructing the Evil Twin of AI." *Protocolized*, 2025.

Rao, Venkatesh. "Have Your Factory Call My Factory." *Protocolized*, March 2026.

Rao, Venkatesh, and Patrick Nast. "Theorizing Protocolization I: New Nature." *Protocolized*, 2026.

Rao, Venkatesh, Patrick Nast, et al. "Theorizing Protocolization II: Atomic Protocol Questions." *Protocolized*, 2026.

Protocols for Business Special Interest Group, Protocolized. "Finding Fault Lines within the Firm." *Protocolized*, 2026.

Scianna, Mark. "How to Build Your Forward Deployed Engineering Team." *Per Aspera*, September 17, 2025.

Scholl, Blake. "Move Fast and Don't Break (Safety Critical) Things." *Boom Supersonic*, August 10, 2025.

Scholl, Blake. "Move Fast and Don't Break (Safety Critical) Things Part 2: Vertical Integration." *Boom Supersonic*, September 14, 2025.

Scholl, Blake. "Building a Safety Culture: Move and Don't Break Safety Critical Things, Part III." *Boom Supersonic*, March 15, 2026.

Scholl, Blake. "Hiring: Skills vs. Aptitude." *Boom Supersonic*, August 18, 2025.

Scholl, Blake. "The Airplane That Unlocked the Supersonic Age." *Boom Supersonic*, January 28, 2026.

Scholl, Blake. "Your Aftermarket Profits Are My Disruptor's Opportunity." *Boom Supersonic*, September 24, 2025.

Stinson-Schroff, Timber. "Mechanical Currents." *Protocolized*, 2025.

Accenture. "The Art of AI Maturity." Accenture Research, 2024. https://www.accenture.com/us-en/insights/technology/art-of-artificial-intelligence-maturity.

Otter, Thomas. "WTF Is a Forward-Deployed Engineer?" *Work in Progress*, April 21, 2025.

Protocolized. "Table: Learning to See Business Protocols." *Protocolized*, 2026.

European Parliament and Council of the European Union. "Regulation (EU) 2024/1689 of the European Parliament and of the Council of 13 June 2024 Laying Down Harmonised Rules on Artificial Intelligence (Artificial Intelligence Act)." *Official Journal of the European Union*, July 12, 2024. https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng.

Humphrey, Watts S. *Managing the Software Process*. Reading, MA: Addison-Wesley Longman, 1989.

*Moffatt v. Air Canada*, 2024 BCCRT 149 (British Columbia Civil Resolution Tribunal, February 14, 2024). https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html.

National Institute of Standards and Technology. *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*. NIST AI 100-1. Gaithersburg, MD: National Institute of Standards and Technology, January 26, 2023. https://doi.org/10.6028/NIST.AI.100-1.

**Case study sources (cited by incident, not as standalone works):**

Gizmodo / Bloomberg / Cybersecurity Dive. Samsung ChatGPT data leak reporting. April–May 2023.

VinciWorks; ABA Law Practice Magazine; Court records (*Mata v. Avianca*, 2023; *ByoPlanet v. Johansson*, 2025). Legal AI hallucination sanctions.

symplr. "2025 Enterprise Healthcare IT Survey." 2025. IBM Security. "Cost of a Data Breach Report 2025." 2025.

Fast Company; Fortune; Entrepreneur; TechCrunch. Klarna AI deployment and reversal reporting, 2023–2025.

CNBC; Digital Commerce 360. Shopify AI mandate reporting, April 2025.

TechCrunch; Fortune. Duolingo AI-first reporting, 2024–2025.

Gartner; Cyberhaven; Reco.ai; IBM. Shadow AI prevalence data roundup, 2024–2025.

---

## Part 4 — Resource Gaps

### Critical gaps

**Gap 1: No CMM historical context** — ✅ FILLED (Entry 38: Humphrey, *Managing the Software Process*, 1989)

**Gap 2: McKinsey full report not directly accessed** — ✅ FILLED
PDF added to Resources as `the-state-of-ai-in-2025-vf.pdf`. All figures verified.
**Correction:** The "33%→65%" figure cited in prior annotation was a misattribution from the historical time series. Do not use.
Correct verified figures: 88% adoption (2025), 39% EBIT impact, ~6% high performers, 65% vs. 23% gap on human-in-the-loop validation.

**Gap 3: No peer-reviewed empirical source on AI governance failure rates** — PARTIALLY ADDRESSED
NIST AI RMF (Entry 39) and the legal/healthcare case studies (Entries 29, 30) provide regulatory and documented failure context. No academic error-rate study is in the catalog; the case studies and survey data (IBM breach costs, symplr healthcare data) serve as the empirical grounding.
- **Status:** Acceptable for v1 draft using current case study and survey evidence. Flag if a peer-reviewed error rate study is located.

**Gap 4: No source on the EU AI Act or US AI governance regulation** — ✅ FILLED (Entry 40: EU AI Act 2024/1689; Entry 39: NIST AI RMF 1.0)

**Gap 5: No source on AI workflow ROI measurement** — OPEN
The catalog has no source addressing how organizations measure AI workflow performance or what benchmarks exist.
- **Action:** Low priority for v1 draft; the OpenAI (Entry 16) and Accenture (Entry 15) data provide proxy productivity figures. Flag if Forrester or Gartner source is located.

**Gap 6: No source engaging the Air Canada chatbot liability case** — ✅ FILLED (Entry 37: *Moffatt v. Air Canada*, 2024 BCCRT 149)

### Secondary gaps

**Gap 7: Gartner shadow AI figure needs primary source** — OPEN
Entry 34 references a Gartner figure (41% of employees acquiring technology outside IT visibility) without a direct primary citation. Gartner reports require subscription.
- **Status:** Cite with explicit "Gartner, as cited in [secondary source]" attribution until primary source is verified. Do not present as directly verified.

**Gap 8: No source on the history of the "shadow IT" concept** — LOW PRIORITY
Can be handled in footnote without separate source. Defer.

**Gap 9: No academic source on technology adoption organizational dynamics** — LOW PRIORITY
Optional. Defer to post-v1.

---

## Part 5 — Gap-Filling Plan

### Immediate (do before first draft)

| Action | Status | Notes |
|--------|--------|-------|
| Add Air Canada case to source catalog as entry 37 | ✅ DONE | Entry 37: *Moffatt v. Air Canada*, 2024 BCCRT 149 |
| Find SEI CMM / CMMI history source | ✅ DONE | Entry 38: Humphrey, *Managing the Software Process* (1989) |
| Add NIST AI RMF (2023) to catalog | ✅ DONE | Entry 39: NIST AI 100-1, doi.org/10.6028/NIST.AI.100-1 |
| Add EU AI Act to catalog | ✅ DONE | Entry 40: Regulation (EU) 2024/1689, EUR-Lex |
| Verify McKinsey figures from full PDF | ✅ DONE | PDF in Resources. Correct figures: 88% adoption, 39% EBIT impact, 6% high performers. "33%→65%" figure was a misattribution — do not use. |

### Before final draft

| Action | Priority |
|--------|---------|
| Verify McKinsey 33%→65% figures from full PDF | High |
| Confirm Gartner 41% figure — cite as "[Gartner, as cited in X]" until primary is verified | High |
| Extract verbatim quotes from all [PARAPHRASE] entries (see list below) | High |
| Locate AI ROI / productivity measurement source | Medium |

### Quote extraction (local PDFs — do in one pass before drafting)

The following source files are in `../Resources/` and need verbatim quote extraction before first draft:

- `uber-agentic-shift-transcript.txt` — Entries 1, 2
- `Why Does AI Development Look Like 1980s Software Planning_.pdf` — Entry 3
- `The Hottest Job in Tech.pdf` — Entry 4
- `How to Build Your Forward Deployed Engineering Team.pdf` — Entry 5
- `Move fast and don't break (safety critical) things.pdf` — Entry 7
- `Move Fast and Don't Break (safety critical) Things Part 2_.pdf` — Entry 8
- `BCG-AI-Maturity-Matrix-2024.pdf` — Entry 13
- `Microsoft-Responsible-AI-Maturity-Model-2023.pdf` — Entry 14
- `Accenture-Art-of-AI-Maturity-Report.pdf` — Entry 15
- `OpenAI-State-of-Enterprise-AI-2025.pdf` — Entry 16
- `Constructing the Evil Twin of AI.pdf` — Entry 24
- `Have Your Factory Call My Factory.pdf` — Entry 27

---

*Last updated: 2026-03-18*
