# AI Adoption Case Studies — Factual Overview

Confirmed facts only. No conclusions or analysis.

---

## Shadow Adoption Cases

### Samsung Electronics — ChatGPT data leak (2023)

**Incident timeline.** In April 2023, three Samsung Semiconductor engineers independently submitted sensitive material to ChatGPT via personal accounts within a single month. Incident 1: an engineer pasted proprietary source code from a semiconductor database to request a bug fix. Incident 2: another engineer pasted confidential equipment code for debugging. Incident 3: a third engineer uploaded a full internal meeting transcript and requested a summary with action items. None of the submissions were authorized.

**Scope.** At the time, Cyberhaven estimated 3.1% of enterprise ChatGPT users had submitted confidential company data, and that a 100,000-person company would be sharing confidential data with OpenAI hundreds of times per week.

**Immediate response.** Samsung implemented an emergency prompt cap of 1,024 bytes per ChatGPT session per employee. Samsung subsequently banned all generative AI tools for employees. Samsung Semiconductor launched an internal LLM development program as a direct response.

**Follow-on (2024–2026).** Samsung developed Samsung Gauss, released as Gauss 2.0 (multimodal, 14 languages, code generation) with tiered variants (Compact, Balanced, Supreme) and an internal no-code "Agentic Builder." Samsung partially reversed its external AI ban: ChatGPT access was restored in select divisions (Samsung SDI, Samsung Display, Samsung Electronics) under new security guidelines, with teams working on sensitive product development still excluded. Galaxy S26 (expected 2026) is planned as the first Samsung device with system-wide agentic AI. A separate 2025 breach — 270,000 Samsung Germany customer support tickets leaked by a threat actor exploiting credentials stolen from third-party vendor Spectos GmbH via 2021 malware — drew attention to AI-assisted data exploitation. That breach was a supply-chain credential incident, not an employee-to-AI-tool leak.

**Sources:** Gizmodo (April 2023); Bloomberg (May 2023); Cybersecurity Dive (April 2023); SammyGuru (2025); SammMobile (2025); WebAsha (2025)

---

### Legal profession — AI hallucination sanctions (2023–2026)

**Original incident.** In May 2023, U.S. District Judge Kevin Castel (SDNY) sanctioned attorneys in *Mata v. Avianca* for submitting a brief containing ChatGPT-generated case citations that did not exist. This was the first high-profile court sanction for AI hallucination in legal filings.

**Scale as of early 2026.** Researcher Damien Charlotin's public database tracks 550+ publicly reported hallucination cases; 712 judicial decisions worldwide address AI hallucinations; 90% of those decisions were issued in 2025; 324 are in U.S. courts; 128+ named lawyers are implicated. The rate accelerated from approximately 2 cases per week (before spring 2025) to 2–3 cases per day (fall 2025).

**Selected sanctions (2025).** *ByoPlanet v. Johansson* (S.D. Fla., August 2025): $86,000 — the largest single sanction reported to date for AI hallucination. *MyPillow/Lindell case* (federal, Colorado): $3,000 per attorney, 24+ fabricated citations. *Mississippi case*: $20,000 fine plus mandatory CLE. *Bankruptcy case* (federal): $5,500 plus required attendance at a national AI training program. *California appellate court* (September 2025): first state appellate opinion sanctioning a lawyer specifically for AI hallucinations; described as the largest fine issued by a California court for AI fabrications. *Self-represented litigant* (December 2025): $2,900 ($100 per false citation, 29 instances).

**New liability dimension (September 2025).** A California Court of Appeals declined to award fees to a party that failed to detect opposing counsel's hallucinated citations, raising the question of a duty to detect adversarial AI errors.

**ABA guidance.** The ABA issued Formal Opinion 512 (July 2024): lawyers must have "reasonable understanding" of AI capabilities and limitations and must verify all AI-generated output. State bars issued similar guidance.

**Bar referrals.** At least one federal judge referred all counsel to their respective state bars as part of a sanction order. No confirmed disbarment resulting directly from AI hallucination has been reported as of March 2026.

**Industry response.** By late 2025, 80% of AmLaw 100 firms had established formal AI governance boards. The North Carolina Bar Association published guidance in January 2026 titled "Beyond the Ban: Why Your Law Firm Needs a Realistic AI Policy in 2026."

**Sources:** Court records (*Mata v. Avianca* 2023; *ByoPlanet v. Johansson* 2025); VinciWorks (August 2025); ABA Law Practice Magazine (2025); Sterne Kessler 2025 year-in-review; NPR (July 2025); Volokh Conspiracy (December 2025); LawNext (September 2025); NCBA (January 2026)

---

### Healthcare sector — shadow AI and HIPAA exposure (2024–2026)

**Prevalence data.** A 2025 symplr survey of healthcare IT executives found shadow AI incidents at 86% of organizations surveyed (up from 81% in 2024). A separate 2025 survey of 500+ healthcare workers found 17% admitted to using unauthorized AI tools. Only 35% of healthcare organizations reported the ability to track their own AI usage.

**Data submitted.** Documented categories of sensitive data submitted by healthcare workers to unauthorized AI tools include: patient data, prior-authorization letters, policy numbers, and patient CSVs.

**Breach cost data.** IBM's 2025 Cost of a Data Breach Report: average healthcare breach cost $7.42 million, took 279 days to resolve. Breaches involving shadow AI cost $4.63 million on average across all sectors — $670,000 above the baseline. 97% of organizations that experienced AI-related security incidents lacked proper AI access controls. 44% of organizations experiencing a shadow AI security incident suffered confirmed data compromise.

**Named 2025 breaches with AI involvement:**

- *Healthcare Interactive* (July 2025): AI-powered insurance enrollment and benefits administration platform. Unauthorized access and data exfiltration between July 8–12, 2025; 3,056,950 individuals' PHI compromised.

- *Catholic Health / Serviceaide* (fall 2025): agentic AI vendor Serviceaide disclosed a misconfiguration in a Catholic Health Elasticsearch database that left data of 483,126 patients in Buffalo, NY inadvertently public between September 19 and November 5, 2025.

- *Oracle Health / Cerner* (from January 2025): breach of Oracle Health's legacy Cerner systems, discovered approximately January 22, 2025; affected dozens of named hospitals; patient notifications ongoing through mid-2025.

**OCR enforcement trajectory.** OCR announced 10 settlements in the first five months of 2025; 20+ by September 2025 — on pace to exceed prior annual records. Individual fines ranged from $25,000 to $3,000,000. None of the 2025 settlements publicly identified as directly attributable to shadow AI tool use.

**Proposed regulatory change.** HHS/OCR proposed HIPAA Security Rule overhaul (January 6, 2025): would eliminate the "required vs. addressable" safeguard distinction; mandate annual audits, network segmentation mapping, multi-factor authentication, and encryption across all covered entities. Final rule not in effect as of March 2026.

**Sources:** symplr 2025 enterprise survey; IBM Cost of a Data Breach Report 2025; Healthcare Dive (2025); HIPAAJournal (Healthcare Interactive breach); Becker's Hospital Review (Serviceaide and Oracle/Cerner); Foley Hoag HIPAA enforcement outlook (2026); TechTarget HealthTech Security

---

## Broad-Mandate Adoption Cases

### Klarna — enterprise-wide ChatGPT deployment (2023–2025)

**Deployment.** Klarna deployed ChatGPT Enterprise to all employees globally. No deployment date or total employee count at time of deployment has been publicly specified. CEO Sebastian Siemiatkowski was the public champion of the initiative.

**Adoption figures (May 2024 press release).** 90% of Klarna employees using AI tools daily — the highest publicly reported enterprise adoption rate of any named company at that date. Breakdown: 93% in communications, 88% in marketing, 86% in legal. An internal AI assistant named "Kiki" was answering 2,000 employee questions per day (250,000+ total at time of reporting).

**Customer service deployment.** Klarna deployed a customer-facing AI assistant in partnership with OpenAI. In February 2024, the company reported the assistant handled two-thirds of all customer service chats in its first month.

**Headcount trajectory.** Employees at end of 2022: approximately 5,527. Employees at end of 2024: approximately 3,422 (a 38% reduction). Employees at IPO (September 2025): approximately 3,100.

**Claimed financial impact.** Klarna claimed a $40 million profit improvement for 2024 attributed to AI.

**Reversal (May 2025).** CEO Siemiatkowski publicly stated the AI customer service cuts "went too far." The company cited customer complaints about AI replies described internally as "generic, repetitive, insufficiently nuanced." Klarna began rehiring human customer service agents in a remote, flexible model targeting students, parents, and rural workers. No specific rehire count was disclosed.

**IPO (September 10, 2025).** Klarna listed on the NYSE (ticker: KLAR), pricing at $40/share above its $35–$37 range; raised $1.37 billion; valued at approximately $17–19.65 billion. (2021 valuation peak was $45.6 billion.) Approximately 3,100 employees held equity; approximately 40 became millionaires.

**Post-IPO CEO statements.** In February 2026, Siemiatkowski stated (citing Dario Amodei's analysis) that white-collar workforces would shrink by a third by 2030, and projected Klarna's own headcount would fall from ~3,000 to below 2,000 via natural attrition (~20%/year), not active layoffs. The company announced plans to raise salaries rather than grow headcount. In May 2025, Klarna's Q1 earnings were presented via an AI-generated avatar of the CEO.

**Sources:** Klarna press releases (2024); Fast Company (2025); Fortune (May 2025, February 2026); Entrepreneur (2025); CNBC (September 2025); TechCrunch (May 2025); mlq.ai (2025)

---

### Shopify — AI non-optional mandate (April 2025)

**Mandate.** On April 7, 2025, CEO Tobias Lütke circulated an internal memo that subsequently became public. Key provisions: AI use was declared "non-optional" at all levels; employees must demonstrate AI use in project phases; teams must prove AI cannot perform a task before requesting new headcount; AI competency was made a formal component of performance reviews and hiring decisions. Direct quote from memo: "Frankly, I don't think it's feasible to opt out of learning the skill of applying AI."

**Pre-mandate context.** Shopify's headcount had fallen from approximately 11,600 (2022) to approximately 8,100 (end of 2024) through prior layoff rounds unrelated to the April mandate.

**Enforcement measures implemented.** AI proficiency questions were added to Shopify's performance review questionnaire. Job applicants are required to complete AI assessments as part of the hiring process.

**Headcount at time of reporting (early 2026).** Approximately 8,000 employees. No layoffs linked to the April 2025 mandate have been reported.

**CEO follow-up statement.** Approximately three months after the memo, Lütke posted publicly that the mandate "worked" and described employees performing tasks at "100X the work done." No independently verified productivity data was published.

**Financial results (Full Year 2025).** Revenue growth: 30% year-over-year. Free cash flow margin: 17%. Q4 2025 was the highest quarterly revenue in company history. Operating expenses: 35% of revenue (down from 45% in 2023 and 38% in 2024). Ten consecutive quarters of double-digit FCF margins.

**Reported observations.** Senior employees with 10+ years tenure were reported to find AI integration harder to adopt than junior staff. No major employee public action has been reported in response to the mandate.

**Sources:** CNBC (April 2025); Digital Commerce 360 (April 2025); Shopify Q4 2025 financial results; HRDaily Advisor (April 2025)

---

### Duolingo — AI-first pivot and contractor replacement (2024–2025)

**First contractor reduction (January 2024).** Duolingo cut approximately 10% of its contractor workforce, primarily translators and content creators. The company attributed the decision to AI capability replacing those functions.

**April 2025 internal memo.** CEO Luis von Ahn circulated an internal memo (subsequently made public) declaring an "AI-first" operating model. Key provisions: headcount increases would only be approved if teams could first demonstrate they had exhausted automation options; contractor roles would not be backfilled when AI could substitute.

**CEO production claim (September 2025).** Von Ahn stated that with the same number of full-time employees, Duolingo could produce "four or five times as much content." No independent verification of this figure was published.

**User backlash (May 2025).** Duolingo's Instagram and TikTok accounts were flooded with negative user comments. The company pulled all videos from both platforms. During Q2 2025 earnings, von Ahn acknowledged community backlash had pushed daily active user growth to the "lower end of projections."

**CEO clarification (August 2025).** Von Ahn stated the April memo "did not give enough context" and clarified that no full-time employees had been laid off as a result of the AI-first strategy.

**Full Year 2025 financial results.** Revenue: $1.04 billion (39% year-over-year growth). Net income: $414.1 million (up 367% year-over-year). Daily active users: 50 million+. Gross margin: 72.5% (down approximately 40 basis points; company attributed decline to rising generative AI and hosting costs).

**Stock performance.** DUOL stock declined approximately 50% from its 2025 peak. Price-to-sales ratio fell to 4.8 — the lowest since IPO.

**Product quality.** Language educators and linguists have publicly raised concerns about cultural accuracy and linguistic nuance in AI-generated content. No independent third-party quality assessment has been published as of March 2026.

**Sources:** TechCrunch (January 2024); The Register (April 2025); Fortune (August 2025); Duolingo Full Year 2025 investor relations release; Intellectia.ai (2025); Becker's (2025)

---

---

## High-Maturity AI Adoption Cases

### Uber — agentic AI shift (2022–2026)

**Background.** Uber began deploying GitHub Copilot for developer tab-completion in approximately 2022–2023 (referred to internally as "pair programming"). As of early 2024, the company began transitioning toward agentic AI tools running asynchronously — what Uber refers to as "peer programming."

**Adoption figures (as of March 2026, per Pragmatic Summit talk and Pragmatic Engineer report).** 84% of Uber developers are active agentic coding users. 92% use AI agents at least monthly. 65–72% of code is AI-generated within IDE tools. 100% of code written by CLI agents such as Claude Code is AI-generated. Claude Code adoption nearly doubled in three months: 32% of developers in December 2025, rising to 63% in February 2026. 11% of pull requests are opened by agents.

**Velocity figures.** Copilot-era (pair programming) gain: approximately 10–15% improvement in diff velocity. Agentic-era gains are described by Uber as qualitatively different in kind, not just degree, though no specific aggregate productivity percentage is published for the agentic period.

**Primary use cases for agents.** Dead code cleanup. Library migrations. Bug fixes. Documentation generation.

**Internal tooling built in response.** Uber built four purpose-built internal tools in response to the volume increase from agentic use: (1) *Minion* — background agent platform; (2) *Shepherd* — migration management for large-scale codebase changes; (3) *Autocover* — automated unit test generation, producing 5,000+ unit tests per month; (4) *Code Inbox* — unified PR inbox with smart assignment, SLAs, and Slack batching; (5) *U Review* — AI-assisted code review.

**New bottleneck created.** As AI-generated PRs multiplied, code review became the primary operational bottleneck. More PRs were being opened faster than reviewers could process them; Code Inbox and U Review were built specifically to address this.

**Cost trajectory.** AI-related costs at Uber increased 6x between 2024 and early 2026. Token cost optimization is described as a first-class operational priority.

**CEO framing (public statement).** "AI is enabling people to become superhumans in terms of their productivity."

**Platform architecture.** Uber's AI development platform has four layers: (1) internal ML platform (Michelangelo-based); (2) internal context layer (codebase, docs, Slack, JIRA); (3) industry agents (Claude Code, Cursor, GitHub Copilot, Codex); (4) specialized agents (Autocover, U Review).

**Sources:** Pragmatic Summit conference talk (Anshu Chada, Ty Smith, March 2026); The Pragmatic Engineer newsletter (Gergely Orosz, March 2026); transcript at `../Resources/uber-agentic-shift-transcript.txt`

---

### Boom Supersonic — XB-1 development and the mkBoom iteration system (2017–2026)

**Background.** Boom Supersonic is a Denver-based aerospace company developing Overture, a commercial supersonic passenger jet. XB-1 is its demonstrator aircraft — intended to validate supersonic aerodynamics, safety systems, and performance. XB-1 was the first independently developed supersonic jet and the first new civil supersonic aircraft to fly since Concorde.

**Team and cost.** XB-1 was designed and built by a team of approximately 50 engineers at a cost of approximately $190 million. Comparable programs in traditional aerospace have historically required larger teams and significantly higher costs, though no direct published comparison figure is cited in the primary sources.

**mkBoom tool.** Boom built mkBoom, a proprietary aircraft design tool that automates full aircraft analysis from a parametric configuration file. An engineer can modify a design parameter and receive a complete aircraft performance analysis — including aerodynamics, fuel burn, range, structural loads — without manually reconfiguring each downstream model. The tool enables iteration at a pace not achievable with traditional aerospace analysis chains.

**Seating/fuselage example.** During XB-1 development, a proposed fuselage redesign initially appeared to cost 1,000 miles of range. Further iteration through mkBoom revealed the loss was recoverable through complementary changes, and the process ultimately produced "Boomless Cruise" — a flight mode in which the sonic boom refracts away from the ground via atmospheric temperature gradients. This outcome was discovered through iteration; it was not the original design objective.

**Slacker Index.** Defined by CEO Blake Scholl as: total lead time ÷ actual working time. Two documented examples from XB-1 development:

- *Damper actuator*: $60,000 per unit, 52-week lead time. When a spare was damaged, the team froze iteration on that component, costing approximately 6 weeks across the program.
- *Symphony engine turbine blades*: $1,000,000 per engine, 6-month lead time per set. Boom purchased a $2,000,000 3D printer capable of producing blades in 24 hours. At that unit price, the printer paid for itself in one set of blades. Iteration frequency on the blades shifted from semi-annual to daily.

**Safety record.** XB-1 completed its flight test program with zero safety incidents. Pre-flight preparation included 20,000+ hours of data review, 80 briefing sessions, and 27 full-aircraft tests before first flight.

**Ejection seat decision.** Boom removed the ejection seat from XB-1, judging the seat itself to be a net safety risk (ejection in a supersonic flight envelope carries its own risk profile). Removal required adding redundant systems and conducting additional pre-flight rehearsals to compensate.

**Boomless Cruise and regulatory outcome.** XB-1 flight testing contributed to demonstration of Mach Cutoff — the phenomenon in which a sonic boom refracts away from the ground in specific atmospheric conditions. In June 2025, President Trump signed an Executive Order legalizing supersonic flight over the United States, a change in U.S. policy that had been in place since 1973.

**Safety culture practices.** Boom operates a transparent (non-anonymous) near-miss reporting system. The rationale given: anonymous reporting reduces signal quality because reporters describe situations less precisely. Trust-based transparent reporting produces more detailed incident data.

**Sources:** Blake Scholl essays (Parts 1–3, and "The airplane that unlocked the supersonic age"); all available at `../Resources/`

---

## AI Governance Failure — Organizational Vignette

### Air Canada — chatbot liability (2024)

**Incident.** A passenger named Jake Moffatt contacted Air Canada's website chatbot in late 2022 while booking a flight following a family bereavement. The chatbot provided information about Air Canada's bereavement fare policy, telling Moffatt that he could book a full-price ticket, travel, and then apply for a bereavement discount retroactively within 90 days of the travel date.

**Actual policy.** Air Canada's bereavement fare policy required the discounted fare to be applied at the time of booking. Retroactive claims were not permitted under the formal policy.

**What happened.** Moffatt followed the chatbot's guidance, booked and traveled at full price, then applied for a retroactive refund. Air Canada denied the claim, citing its formal policy. Moffatt took the matter to the British Columbia Civil Resolution Tribunal.

**Ruling (February 2024).** The BC Civil Resolution Tribunal ruled in favor of Moffatt. The tribunal rejected Air Canada's argument that the chatbot was a separate entity for which the airline bore no responsibility. Air Canada was ordered to pay Moffatt $812.02 CAD in damages and fees. The ruling established that an airline is responsible for information provided by its own automated customer service systems, regardless of whether that information was generated by AI.

**Air Canada's stated position during the case.** Air Canada argued the chatbot was "a separate legal entity that is responsible for its own actions." The tribunal rejected this framing.

**Sources:** BC Civil Resolution Tribunal decision (February 2024); widely reported including CBC, The Guardian, BBC

---

## Agentic Coordination — Practitioner Case

### Venkatesh Rao / Jenna Dixon — factory-to-factory book publishing pipeline (2025–2026)

**Background.** Venkatesh Rao is a writer and researcher whose 20 years of blog and newsletter archives constitute the raw material for a book publishing program. Jenna Dixon is a publishing industry professional. Neither has a software engineering background.

**Rao's factory.** Rao set up a Claude Code-based manuscript production system. The factory takes raw material from blog and newsletter archives as input and produces rough manuscripts. As of early 2026, the factory dashboard shows approximately two dozen book projects in various stages of production simultaneously.

**Dixon's factory.** Dixon built a separate Claude Code-based factory to take rough manuscripts and produce finished print and ebook volumes. She uses Vellum design software in the workflow and is developing custom tooling to replace components. To date she has produced two books for Rao personally and handled the full publishing output for the Summer of Protocols and Protocolized programs, described by Rao as including "a complex Protocol Kit and four books."

**Coordination mechanism.** The two factories exchange work via a shared Dropbox folder and a "manuscript transmittal" metadata server that tracks handoff state. Rao describes this as a factory-to-factory (F2F) link — each factory is autonomous; the protocol governing the handoff is explicit and minimal. Neither party needs to understand the internal operation of the other's factory.

**Domain knowledge requirement.** Rao and Dixon both describe domain knowledge (publishing, editing, design) as the limiting constraint on the pipeline — not technical skill. Neither built the Claude Code factories through prior coding experience; both describe acquiring the necessary capability through iteration with the tools.

**Sources:** Venkatesh Rao, "Have Your Factory Call My Factory" (Protocolized, March 2026); available at `../Resources/Have Your Factory Call My Factory.pdf`

---

*Last updated: 2026-03-15*
