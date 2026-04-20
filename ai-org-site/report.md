# Org Design After Code Commoditisation

*P4BSIG working paper. 2026-04-19. Companion exercise: `npc.here.now/ai-org/exercise`.*

---

This report documents five prior commoditisations of expert technical work and derives an organisational pattern applicable to LLM-era code production. The five cases are spreadsheet adoption (1979–1995), numerical-control machining (1949–1990), electronification of US equity trading (1971–2014), cloud operations (2006–2020), and Klarna's AI customer-support reversal (2024–2025). The pattern predicts four moves: expertise migrates to adjacent layers; a new internal role forms between the commoditised tool and the operational business; budget authority relocates; macro conditions set timing. The report closes with headcount bands, a contract-clause checklist, a token-economics worked example, and first-eval guidance.

The audience is operations-technical readers at firms above ~100 engineering full-time-equivalents (FTE) who will absorb agentic AI into an existing organisation. Greenfield startup design, vendor-winner prediction, and salary bands are out of scope. Readers seeking a capability maturity model should refer to the [AI Capability Maturity Model v4](https://protocolized.dev/ai-maturity-model/).

## The four-move pattern

Across the five cases, expertise moved to specification, evaluation, integration, and vendor management rather than disappearing. One new internal role stabilised per case: spreadsheet-native analyst (FP&A), NC programmer (engineering office), quant researcher (trading desk), site reliability engineer (engineering), escalation handler plus AI trainer (customer support). Budget authority moved from central IT toward line-of-business buyers in four of five cases; cloud was the exception, re-centralising spend via platform engineering. Adoption accelerated in recessions (1980–1982, 2001, 2008) and scaled during periods of cheap capital (1983–1990, 2009–2021); the end of zero-interest-rate policy (ZIRP) in March 2022 is the closest contemporary analogue and [preceded, not followed, the AI-era layoff wave](https://newsletter.pragmaticengineer.com/p/zirp-software-engineers) ([Orosz 2022](https://newsletter.pragmaticengineer.com/p/zirp-software-engineers)).

| Case | Commoditised input | New internal role | Budget direction |
| --- | --- | --- | --- |
| Spreadsheets 1979–95 | Financial modelling | FP&A analyst | CIO → LOB |
| NC/CNC 1949–90 | Machinist craft | NC programmer | Shop floor → engineering office |
| Electronification 1971–2014 | Price discovery | Quant / low-latency engineer | Floor partnership → integrated bank |
| Cloud 2006–20 | Data-centre operations | SRE / platform / FinOps | Capex → opex; then partial re-centralisation |
| Klarna 2024–25 | Tier-1 customer support | Escalation handler + AI trainer | CX → partial CX rehire |

## Spreadsheets (1979–1995)

VisiCalc shipped for the Apple II in October 1979 ([Bricklin & Frankston 2004](https://conservancy.umn.edu/items/82511821-e518-42f4-89da-90a7e14fc0e0)). Lotus 1-2-3 shipped for the IBM PC in January 1983. Microsoft Excel shipped for Macintosh in 1985 and Windows in 1987. Before these tools, a pro-forma or sensitivity analysis required a request to the data-processing department for a custom COBOL report, with a multi-day turnaround, or a junior analyst working on a ledger pad. Iteration collapsed from days to seconds at the analyst's desk.

Departments bought the IBM PC plus Lotus 1-2-3 under office-equipment capex, bypassing the management information systems (MIS) function. [Levy 1984](https://harpers.org/archive/1984/11/a-spreadsheet-way-of-knowledge/) documents the cultural shift: analysts and MBA-trained managers absorbed modelling work previously submitted to DP. Fed funds peaked at 19.1% in June 1981 during the Volcker tightening cycle ([St Louis Fed 2025](https://www.stlouisfed.org/-/media/project/frbstl/stlouisfed/publications/review/pdfs/2025/jan/volcker-tightening-cycle-explaining-1982-course-reversal.pdf)); high rates made DCF sensitivity analysis commercially urgent. Lotus and Excel scaled through the 1983–1987 recovery and the late-1980s leveraged-buyout era.

[Garson 1988](https://openlibrary.org/books/OL2209392M/The_electronic_sweatshop) documents the inverse case in the same decade: airline reservation systems, social-work case-management software, and fast-food point-of-sale systems encoded worker discretion into software, reducing role authority. The tool was similar; the outcome depended on who already owned the judgment. Spreadsheet adopters owned the modelling judgment; the DP department owned only the production step.

Comparison to 2024–2026 AI coding adoption: end-user procurement on corporate cards; the CIO bypassed; a previously expert-only capability converted to personal use.

*Try this org in the exercise: [`preset=1985-fpna`](https://npc.here.now/ai-org/exercise?preset=1985-fpna)*

## Numerical-control machining (1949–1990)

John Parsons received a US Air Force contract in 1949 to automate helicopter-rotor template milling. MIT's Servomechanisms Laboratory produced the first numerically-controlled milling machine in 1952 under Gordon Brown. Computerised numerical control (CNC) stabilised as the standard through the 1970s. [Noble 1984](https://archive.org/details/forcesofproducti0000nobl) documents that a competing technology called record-playback worked in parallel: a machinist guided the cutter, the machine recorded and replayed the movements, authorship remained on the shop floor. Management selected NC over record-playback because NC moved authorship to a programmer in the engineering office.

[Boustan et al 2022](https://www.nber.org/papers/w30400) report that CNC-adopting plants shifted labour composition toward programmers and away from machinists, with plant-level employment falling in the decade after adoption. US Bureau of Labor Statistics series show machinist employment peaked in 1970 and declined ~34% by 1980. Contract machine shops grew as make-versus-buy tilted toward buy.

[Womack, Jones & Roos 1990](https://www.amazon.com/Machine-That-Changed-World-Production/dp/0743299795) document Toyota's opposite deployment. Taiichi Ohno's jidoka ("automation with a human touch," developed from 1948) gave line workers andon-cord authority to halt production on a defect. Toyota reduced engineering hours and development time by roughly 50% against American peers in the 1989 dataset. Same commoditisation pressure; inverted org outcome.

An AI coding tool admits both deployment modes. Deployed as copilot, it surfaces suggestions to an engineer who retains authorship. Deployed as autonomous agent, it produces code for human review. The choice determines which roles persist.

*Try this org in the exercise: [`preset=nc-programmer`](https://npc.here.now/ai-org/exercise?preset=nc-programmer)*

## Electronification of US equity markets (1971–2014)

NASDAQ launched as an electronic quotation system on 8 February 1971, replacing telephone-and-tape price dissemination ([SEC Historical Society](https://www.sechistorical.org/museum/galleries/msr/msr03b_nasdaq.php)). London's Big Bang on 27 October 1986 abolished the jobber-broker distinction and moved trading from the floor to terminals. Decimalisation in US markets on 29 January 2001 eliminated the fractional spread that sustained specialist market-making economics. Regulation NMS (2007) mandated electronic routing to the best-priced venue. The Flash Crash of 6 May 2010 provided the first public legibility event for the new regime ([SEC/CFTC 2010](https://www.sec.gov/news/studies/2010/marketevents-report.pdf)).

New internal roles stabilised inside the decade: quant researcher, low-latency engineer, execution-algorithm product manager. Four firms — Getco, Virtu, Citadel Securities, Jane Street — replaced specialist market-making through software; headcount composition shifted toward physicists, FPGA engineers, and network specialists. By 2014 the industry ran most of its volume through a small number of firms that ran roughly 1960-era specialist desk headcounts.

The mechanism is comparable to LLM encoding of coding tasks: tacit expert judgement (order-flow reading; function-body generation) was moved into software. Migration paths for displaced humans: adjacent roles that design, tune, and supervise the software; or exit from the industry. Partial migration is the likely outcome for AI coding, based on the 10–15% plant-level employment decline reported in Boustan et al.

Macro timing: decimalisation was a regulatory shock that destroyed the old economics quickly; ZIRP (2009–2022) funded the subsequent quant-firm build-out. The March 2022 end of ZIRP plus the 2023–2026 AI capex cycle is the closest contemporary analogue. Hyperscaler AI capex is financed through debt and special-purpose vehicles rather than ZIRP-era equity ([MUFG 2025](https://www.mufgamericas.com/insights/ai-supercycle)); provider pricing is likely to tighten through 2027–2028 as those instruments roll.

Industry-level concentration: a side-effect, not a firm-level decision. Individual operators cannot manage this through internal org design.

*Try this org in the exercise: [`preset=quant-desk`](https://npc.here.now/ai-org/exercise?preset=quant-desk)*

## Cloud operations (2006–2020)

Amazon shipped S3 in March 2006 and EC2 in August 2006. The commoditised input was data-centre operations: provisioning, capacity planning, networking. Four new internal roles stabilised over the following decade.

1. **DevOps** (2009). [Allspaw & Hammond 2009](https://www.youtube.com/watch?v=LdOe18KhtT4) framed deployment frequency as an org-design variable at Velocity. Patrick Debois convened DevOpsDays in Ghent in October 2009. [Kim 2013](https://itrevolution.com/product/the-phoenix-project/) brought the category into Fortune 500 IT.
2. **Site Reliability Engineering.** Ben Treynor Sloss founded SRE at Google in 2003. [Beyer et al 2016](https://sre.google/sre-book/table-of-contents/) codified the discipline externally.
3. **Platform engineering.** [Skelton & Pais 2019](https://teamtopologies.com) formalised internal developer platforms. Spotify open-sourced Backstage on 16 March 2020 ([Spotify 2025](https://engineering.atspotify.com/2025/04/celebrating-five-years-of-backstage/)). Platform engineering is the re-centralising counter-move to DevOps decentralisation.
4. **FinOps.** The FinOps Foundation joined the Linux Foundation in 2020. Corey Quinn's Duckbill Group (2016) serves as the cottage-industry reference for cloud-bill optimisation.

Infrastructure spend moved from five-year capex depreciation to monthly consumption. Gartner client data through the 2010s tracks rising opex share of IT budget. AWS launched at 5.25% Fed funds, not under ZIRP. The 2008 financial crisis was the inflection: CFOs cutting capex adopted cloud for pay-per-use economics; Salesforce and NetSuite took SaaS share through 2008–2009 on the same logic ([SaaS-Capital](https://www.saas-capital.com/blog-posts/how-do-saas-companies-perform-in-a-recession/)). ZIRP (2009–2022) funded the subsequent cloud-native startup wave and its specialist roles.

The pattern is not one-way. DevOps decentralised operations into product teams through the 2010s; platform engineering partly reversed the move by consolidating toolchains into a central function. AI-era capacity distribution is likely to follow the same arc, with re-centralisation around a central AI platform team by 2027–2028 in firms that distributed AI engineering into every team early. FinOps is the direct precedent for token FinOps.

*Try this org in the exercise: [`preset=cloud-ops`](https://npc.here.now/ai-org/exercise?preset=cloud-ops)*

## Klarna AI customer-support reversal (2024–2025)

Klarna issued a press release on 27 February 2024 claiming its AI assistant performed work equivalent to 700 full-time agents, handled 2.3 million conversations in its first month, resolved inquiries in 2 minutes (versus 11 for humans), and projected $40M in 2024 profit improvement ([Klarna 2024](https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/)). For fifteen months this was the reference case for AI labour substitution in knowledge work.

In May 2025 Klarna rehired human agents after customer-satisfaction scores declined. CEO Sebastian Siemiatkowski stated in interview that the firm had over-weighted cost and efficiency against quality ([Bergen 2025](https://www.bloomberg.com/news/articles/2025-05-08/klarna-turns-from-ai-to-humans-again)).

Three operational implications:

1. **Last-mile resistance.** Customer interactions where brand and retention are measured resist automation even when throughput metrics improve. Klarna's regression was in CSAT, not in call volume.
2. **Role persistence shifts, it does not vanish.** The surviving role is escalation handler plus AI trainer: the human who handles cases the AI flags, maintains the prompt library and evaluation set, and owns the handoff.
3. **Round-trip automation.** Substitute-then-rehire can occur within 24 months. Reversibility is a first-class design property, not a roadmap concession.

[Gray & Suri 2019](https://ghostwork.info/) provide the precedent: pre-LLM "AI" systems already ran on invisible human labour at the edges (moderators, labellers, crash graders). The Klarna arc confirms the edge workforce is structural.

*Try this org in the exercise: [`preset=klarna-reversal`](https://npc.here.now/ai-org/exercise?preset=klarna-reversal)*

## Synthesis for AI-era code

### Expertise migration

The AI-era migration targets are specification (what to build), evaluation (is the output correct), integration (does it fit the running system), and governance (auditability and defensibility). The cluster of ML engineer, MLOps engineer, and security engineer roles that stabilised between 2017 and 2024 is one answer, decomposing a single generalist role further ([Beauchemin 2017](https://www.freecodecamp.org/news/the-rise-of-the-data-engineer-91be18f1e603/)). Mid-career software engineers displaced by agentic coding move toward specification and evaluation functions; the partial-migration and partial-exit ratios from the electronification case (roughly 10–15% plant-level employment decline in Boustan et al) are the baseline expectation.

### The translator role: eval engineer

The new internal role forming in the AI case is the **eval engineer**: designs regression harnesses for model upgrades, maintains the golden set that procurement and release gates are measured against, specifies acceptance criteria for AI features, and owns correctness under model drift. Structural parallel: SRE in the cloud case. SRE emerged because uptime became a problem when data-centre operations commoditised; the eval engineer is emerging because correctness becomes a problem when code generation commoditises. Evidence the role is stabilising:

- [Husain 2024](https://hamel.dev/blog/posts/evals/) and associated workshop curriculum
- OpenAI Evals framework, open-sourced 2023, widely forked
- Anthropic's published evaluation methodology
- Tool ecosystem: [Braintrust](https://www.braintrust.dev/) (YC W24), Langfuse, LangSmith
- Decomposition of "ML engineer" into eval-engineer and applied-AI-engineer titles in 2024–2026 job postings ([LinkedIn Economic Graph 2025](https://economicgraph.linkedin.com/))

The forward-deployed engineer (FDE) is a GTM innovation at AI vendors, not an internal translator class. [Andrusko 2026](https://a16z.com/the-palantirization-of-everything/) documents the Palantir FDE pattern being replicated across Anthropic, OpenAI, Scale, Sierra, and Harvey; job-posting data suggests several-fold growth in 2025. [Schmidt 2024](https://a16z.com/services-led-growth/) frames it as services-led growth. FDE is relevant to founders deciding GTM motion, not to operators consuming AI inside a firm.

### Vendor management

SaaS proliferation did not reduce procurement discipline. It produced FinOps (2019–2020), SaaS-management tools (BetterCloud, Zylo, Productiv), and license optimisation as a named function. The median enterprise runs ~130 SaaS applications and wastes a material share of SaaS spend ([BetterCloud 2024](https://www.bettercloud.com/monitor/state-of-saasops-2024/)). AI-era model procurement will follow the same pattern, crossed with genuine model-portability and training-data indemnity questions.

### Budget locus

Spreadsheet, Salesforce, and MarTech shifts moved buying authority from CIO toward LOB and CMO ([Brinker 2024](https://chiefmartec.com/2024/05/marketing-technology-landscape-2024-supergraphic/), documenting 14,106 marketing-technology vendors in 2024 versus 150 in 2011). Cloud partially reversed via platform engineering. AI-era spend is likely to bifurcate: central AI platform team owning model selection, evaluation, guardrails, and budget; distributed AI capacity inside every LOB; Legal gaining authority over licence terms and training-data risk.

The Chief AI Officer (CAIO) title has grown materially since 2022 and is present in roughly one-third of the Fortune 500 on current trends ([IBM IBV 2024](https://www.ibm.com/thought-leadership/institute-business-value/en-us/report/ceo-generative-ai)); durability is contested ([Fortune 2024](https://fortune.com/2024/08/16/chief-ai-officer-fortune-500/)). CAIO may track CIO-of-2000: a title marking institutional response, then dissolving into CTO/CDO lieutenancy within a decade. Hire the function; let the title settle.

### Last mile

*Last mile* is the residue of work that resists commoditisation because error cost, retention damage, or regulatory liability scales non-linearly near the edge of the task. The commoditised core becomes cheap; the cost of any individual failure at the boundary does not. Every case in this report produced a last-mile residue, and that residue defined which human role persisted.

Case-level residues:

- **Spreadsheets.** Auditability, modelling-assumption review, and sign-off on material decisions. The analyst who owned the model kept discretion; the clerk feeding a central DP department did not.
- **NC/CNC.** Setup, fixturing, first-article inspection, process engineering, and response to tool wear or material anomalies. Machines cut; humans diagnose.
- **Electronification.** Order handling at illiquid or distressed moments. The Flash Crash of 6 May 2010 was a last-mile failure — systems trading normally on normal days, no human intervention authority defined for abnormal ones ([SEC/CFTC 2010](https://www.sec.gov/news/studies/2010/marketevents-report.pdf)).
- **Cloud.** On-call incident response, irregular-workload capacity planning, regulated data residency. Software absorbs routine ops; the residue is irregular ops plus compliance.
- **Klarna.** Escalations, complaints with retention impact, and judgment calls about brand risk. Rehired agents handle the tail the automation could not resolve at CSAT-acceptable quality.

Three considerations for AI-era operators:

1. **Measure edge-case quality independently of volume metrics.** Klarna's throughput was healthy; CSAT collapsed. Throughput-only dashboards hide last-mile failure until retention damage is booked.
2. **Staff the residue before automating the core.** The escalation handler, on-call SRE, or process-engineering machinist must exist before the commoditised function is cut. Reversing the order means discovering the residue at the moment the automation fails, with no available workforce.
3. **Budget for substitute-and-rehire within a 24-month window.** Klarna's round-trip ran roughly 15 months. Contracts, headcount plans, and compensation structures that assume one-way automation create the most expensive reversal mode.

The last-mile residue is the most reliable predictor of surviving role shape. It is also the point at which productivity claims for AI should be discounted most heavily: compression against the core is legible; degradation at the edge is not, until it compounds.

### Macro conditioning

Every case has a macro accelerant. Volcker rates (1980–1982) for spreadsheets. Japanese competition and the 1980–1982 recession for CNC. Decimalisation (2001) and Regulation NMS (2007) for electronification. The 2008 financial crisis for cloud; ZIRP (2009–2022) for its role-proliferation wave. The March 2022 end of ZIRP preceded Meta's March 2023 "Year of Efficiency" (layoffs of ~21,000, framed explicitly as delayering). AI-era layoffs at Salesforce, IBM, Dropbox, and Duolingo (2024–2025) are a second wave where AI is more directly load-bearing.

Return-to-office mandates preceded agentic AI deployment: Meta June 2023; Google January 2024; Amazon September 2024 for January 2025. Anduril's always-onsite policy predates the entire AI wave. [Bloom 2022](https://siepr.stanford.edu/news/two-beers-pandemic-and-workplace-revolution) does not support the coordination-cost argument typically offered for RTO. The mandates correlate with the post-ZIRP employer-leverage shift, not with AI adoption. "AI companies require onsite" is a downstream observation, not a causal claim.

## Tactical artefacts

### Headcount bands for a central AI platform team

The following bands are observed defaults for 2026. They assume a single general-purpose engineering organisation (not a specialised domain like HFT or regulated health/finance, which add roles) and are indicative rather than prescriptive.

| Engineering FTE | Central AI platform | Embedded applied-AI (LOB) | Eval engineers | Red-team / security | FinOps (token) |
| --- | --- | --- | --- | --- | --- |
| <100 | 0 | 1–2 total | 0 (shared with applied-AI) | 0 | 0 (via existing FinOps) |
| 100–300 | 2–4 | 1 per major LOB | 1 | 0 (quarterly external) | 0–0.5 |
| 300–1,000 | 6–12 | 1 per ~50 engineers | 2–3 | 1 (part-time) | 1 |
| 1,000–2,000 | 12–20 | 1 per ~40 engineers | 3–5 | 2–3 | 1–2 |
| 2,000+ | 20–40 | 1 per ~30 engineers | 5–10 | 3–5 (red-team unit) | 2–4 |

Central platform composition at the 6–12 band: 1–2 principal engineers, 3–5 platform engineers, 1–2 eval engineers, 1 security engineer, 1 FinOps analyst. At the 20–40 band: add a model-contracts lead reporting dual to Legal, and a dedicated RAG/retrieval sub-team if retrieval-augmented workflows are material.

### Contract-clause checklist for foundation-model procurement

Five clauses to negotiate in every foundation-model agreement:

1. **Training-data indemnity.** Vendor indemnifies against copyright claims on model outputs. Specify dollar cap, remediation process, and whether indemnity survives contract termination. Most 2024–2026 default contracts cap indemnity at fees paid; negotiate a multiplier.
2. **Egress and continuity.** Export prompts, fine-tuned weights (where applicable), conversation logs, and evaluation data on termination in a portable format. Specify transition assistance if the vendor deprecates a model in current production use; minimum notice window 180 days.
3. **Pre-production eval access.** Access to model upgrades before general availability, for regression testing. Define notice period for model-card-altering changes. Default contracts rarely include this; ask.
4. **Rate-limit and availability SLAs.** Contractual rate limit, not the published one. Remedy for outage (credits, not just force-majeure language). Specify degraded-mode behaviour during provider incidents.
5. **Jurisdictional routing.** Data-residency pinning for prompts and completions. Specify processing regions, logging regions, training-exclusion region lists. Required for regulated industries; increasingly load-bearing for EU AI Act compliance.

Clauses 2 and 3 are weakest in default 2024–2026 contracts. Negotiate explicitly or budget for the cost of portability work as a contingency.

### Token economics and cost-composition shift

Every prior commoditisation shifted the composition of operating expenditure in the affected function, not only its total. Labour share fell; machine, data-feed, or compute share rose. Historical benchmarks:

- **US durable-goods manufacturing, 1970–2010.** Labour share of value added fell from ~30% to ~15% as automation including CNC matured ([Baily & Bosworth 2014](https://www.brookings.edu/articles/us-manufacturing-understanding-its-past-and-its-potential-future/); BLS productivity accounts). Machinist employment fell 34% between 1970 and 1980; net US machinist count declined from ~470,000 (1970) to ~235,000 (2010) per BLS Occupational Employment Statistics.
- **Equity trading, 2000–2014.** NYSE floor traders fell from ~5,500 to under 300. Surviving market-making firms' technology spend (co-location, FPGAs, market-data feeds, engineering headcount) rose from <5% of operating costs in the late 1990s to roughly 20–40% by the mid-2010s; precise share varies by firm (10-K filings).
- **IT operations, 2010–2023.** IT opex share of total IT budget rose from ~70% (2014) to ~77% (2020) per Gartner client data. Cloud as share of IT infrastructure spend grew from <5% (2010) to >30% (2023) per IDC. Sysadmin and network-engineering roles partially substituted to SRE, DevOps, platform engineering; net IT-operations headcount grew in absolute terms while composition shifted.
- **Klarna customer experience, 2023–2025.** Pre-AI CX ran on ~700 tier-1 agents. Klarna's claimed $40M profit improvement in 2024 equals ~1.4% of 2023 revenue of ~$2.8B ([Klarna 2023 annual report](https://www.klarna.com/international/press/klarna-publishes-annual-report-2023/)). Post-reversion steady-state savings are plausibly 0.5–0.8% of revenue after partial rehire plus token and eval-staff costs.

Cost-composition shift across the five cases:

| Case | Function | Pre-commoditisation dominant cost | Post-commoditisation dominant cost | Affected-role headcount change |
| --- | --- | --- | --- | --- |
| Spreadsheets | FP&A | DP charges + clerk wages | Analyst wages + PC + software | DP-dependent clerks declined; analyst count grew |
| NC/CNC | Precision machining | Machinist wages + tooling | Programmer wages + CNC capital + electricity | Machinists: -34% (1970–1980), continued decline |
| Electronification | Market-making | Specialist capital + floor rent + partner draw | Quant wages + co-lo + FPGAs + data feeds | NYSE specialists: 5,500 → <300 (14 years) |
| Cloud | IT operations | 5-year server capex + sysadmin | Monthly consumption + SRE/platform/FinOps | Net IT-ops headcount grew; composition shifted |
| Klarna | Tier-1 CX | Agent wages | Token spend + eval/trainer + partial rehire | 700 FTE → partial reversion |

### Engineering headcount projection

Four of the five cases show affected-function headcount declining 15–60% over 5–15 years, with adjacent new roles absorbing 20–40% of the displaced count. Cloud is the outlier: net IT-operations headcount grew because new roles absorbed more labour than the commoditisation displaced.

For AI-era software engineering, a plausible 2026–2031 trajectory is 10–25% reduction in total engineering FTE at AI-heavy firms, concentrated in junior and mid-level implementation roles. Adjacent eval-engineer, applied-AI-engineer, and platform-engineering roles absorb 30–50% of the displacement. Stanford HAI reports ~66,000 US job postings mentioning generative AI in 2024, up from ~16,000 in 2023 ([Stanford HAI 2025](https://hai.stanford.edu/ai-index/2025-ai-index-report)). Both displacement and replacement are visible in posting data; net firm-level direction depends on deployment choice and evaluation rigour.

### Token-spend worked example: 2,000-FTE engineering organisation

Assumptions: average fully-loaded engineering comp $250,000 (2026 US; inclusive of benefits, equity, overhead, facilities); standard coding-assistant adoption at current vendor pricing ([Anthropic](https://www.anthropic.com/pricing); [OpenAI](https://openai.com/api/pricing/), retrieved 2026-04-19).

| Line item | Range | % of engineering labour |
| --- | --- | --- |
| Engineering labour (2,000 × $250K) | $500M/year | 100% |
| Coding-assistant inference ($30–80/eng/month) | $0.7–1.9M/year | 0.14–0.38% |
| Agentic use (3–10× multiplier: retrieval, CI, test gen) | $2–20M/year | 0.4–4% |
| Non-engineering generative-AI (CX, sales enablement, search) | variable; typical 0.5–3× engineering line | 0.2–12% |
| Total AI spend (full agentic + non-engineering) | $5–40M/year | 1–8% |

At 15% engineering headcount reduction over 3 years, labour savings are ~$75M/year. A $20M annual token spend that enables the reduction produces net savings of ~$55M, contingent on the remaining 1,700 engineers producing output equivalent to the original 2,000. Klarna over-estimated this ratio in 2024 and reversed in 2025. Conservative 2026–2031 planning assumes 5–15% effective productivity-equivalence loss in the first 12 months post-automation, with recovery over 12–24 months if evaluation harnesses and prompt libraries are maintained.

### Three cost-shift properties

1. Labour share declines, compute/data share rises. Token spend plausibly runs 1–5% of engineering labour in 2026, rising to 10–25% by 2029–2030 if agentic adoption deepens. Historical trajectories (manufacturing labour share 30% → 15%; trading-firm tech share <5% → 20–40%; cloud 0% → 30%+ of IT infrastructure) support the scale.
2. Transition periods run both costs in parallel. Every prior case showed a 2–5 year window of concurrent incumbent headcount and new infrastructure spend. Budget 2026–2028 accordingly.
3. Variable cost scales with usage, not seats. Budget caps enforce per-workflow or per-agent. Provider pricing is likely to tighten through 2027–2028 as hyperscaler AI-capex financing rolls over ([MUFG 2025](https://www.mufgamericas.com/insights/ai-supercycle)); contract for price-protection clauses where feasible.

### Chargeback treatment

Tag every API call with team, product, and workflow identifiers. Build monthly team-level dashboards. Cap per-team spend at 1.5× prior-quarter usage. Escalate overruns to the central platform team with a 7-day resolution SLA.

### First eval to build

The first evaluation harness is the one for the task most likely to be automated next. Selection criteria:

- Clear golden labels exist (resolved / not resolved; correct / incorrect; accepted / rejected)
- Volume sufficient for statistical power (minimum ~100 labelled examples; preferably 500+)
- Regression cost is bounded (individual errors cost less than the cost of running the eval)
- Business impact is measurable (linked to a revenue, retention, or incident metric)

Typical first-eval candidates:

- Last 30 days of production code-review comments, labelled as resolved-correctly / not
- Last 100 customer-support tickets, labelled as resolved-correctly / not
- Last 50 closed incidents with root-cause tags
- Last 200 sales-lead qualifications with outcome labels

Build the eval before deploying the automation it gates. The cost is 1–3 FTE-weeks for an initial harness; budget quarterly refresh at ~0.5 FTE-weeks. Tools: Braintrust, Langfuse, OpenAI Evals, or a custom harness against pytest.

## Four scenarios

Four end-states the pattern admits. These are not predictions; they are plausible topologies anchored on specific precedents.

1. **Central AI platform plus distributed LOB capacity.** Closest precedent: cloud era. Most common observed shape among firms above ~300 engineers. See headcount band table above. [`preset=central-platform`](https://npc.here.now/ai-org/exercise?preset=central-platform)
2. **Services-led growth firm.** Closest precedent: Palantir. FDE-heavy GTM, pre- and post-sales engineering dominant among non-R&D functions. Applies to AI vendors, not to operators consuming AI. [`preset=services-led`](https://npc.here.now/ai-org/exercise?preset=services-led)
3. **Legal-anchored bifurcation.** Procurement and compliance own more of the AI lifecycle than under SaaS. CAIO reports to General Counsel or an AI-and-Risk committee. Closest precedent: CIO → CMO shift, with destination Legal rather than Marketing. Likely in regulated industries (financial services, healthcare, defence). [`preset=legal-bifurcation`](https://npc.here.now/ai-org/exercise?preset=legal-bifurcation)
4. **Partial reversion.** Firm automates aggressively, regresses on quality, partially rehires, settles on hybrid escalation-handler plus AI-trainer structure at customer edge. Closest precedent: Klarna. [`preset=partial-reversion`](https://npc.here.now/ai-org/exercise?preset=partial-reversion)

Outcome depends on the deployment choice documented by Noble (copilot versus autonomous), the vendor-lock posture documented by the SaaS case, and the reversibility tolerance documented by Klarna.

---

## Bibliography

- Allspaw, John, & Paul Hammond. 2009. "10+ Deploys per Day: Dev and Ops Cooperation at Flickr." Velocity. <https://www.youtube.com/watch?v=LdOe18KhtT4>
- Andrusko, Marc. 2026. "The Palantirization of Everything." a16z. <https://a16z.com/the-palantirization-of-everything/>
- Anthropic. 2026. *Pricing*. <https://www.anthropic.com/pricing> (retrieved 2026-04-19)
- Beauchemin, Maxime. 2017. "The Rise of the Data Engineer." freeCodeCamp. <https://www.freecodecamp.org/news/the-rise-of-the-data-engineer-91be18f1e603/>
- Bergen, Mark. 2025. "Klarna Turns from AI to Humans Again." Bloomberg, May 2025. <https://www.bloomberg.com/news/articles/2025-05-08/klarna-turns-from-ai-to-humans-again>
- BetterCloud. 2024. *State of SaaSOps 2024*. <https://www.bettercloud.com/monitor/state-of-saasops-2024/>
- Beyer, Betsy, et al. 2016. *Site Reliability Engineering*. O'Reilly. <https://sre.google/sre-book/table-of-contents/>
- Bloom, Nicholas. 2022. "Two Beers, a Pandemic, and a Workplace Revolution." Stanford SIEPR. <https://siepr.stanford.edu/news/two-beers-pandemic-and-workplace-revolution>
- Boustan, Leah, et al. 2022. "Computerized Machine Tools, Employment, and Productivity." NBER Working Paper 30400. <https://www.nber.org/papers/w30400>
- Bricklin, Dan, & Bob Frankston. 2004. VisiCalc oral history, Charles Babbage Institute. <https://conservancy.umn.edu/items/82511821-e518-42f4-89da-90a7e14fc0e0>
- Brinker, Scott. 2024. "Marketing Technology Landscape 2024 Supergraphic." chiefmartec.com. <https://chiefmartec.com/2024/05/marketing-technology-landscape-2024-supergraphic/>
- Fortune. 2024. "The Rise — and Possible Fall — of the Chief AI Officer." August 2024. <https://fortune.com/2024/08/16/chief-ai-officer-fortune-500/>
- Garson, Barbara. 1988. *The Electronic Sweatshop*. Simon & Schuster. <https://openlibrary.org/books/OL2209392M/The_electronic_sweatshop>
- Gray, Mary L., & Siddharth Suri. 2019. *Ghost Work*. Houghton Mifflin Harcourt. <https://ghostwork.info/>
- Husain, Hamel. 2024. "A Field Guide to Evaluations." <https://hamel.dev/blog/posts/evals/>
- IBM Institute for Business Value. 2024. *The CEO's Guide to Generative AI*. <https://www.ibm.com/thought-leadership/institute-business-value/en-us/report/ceo-generative-ai>
- Kim, Gene. 2013. *The Phoenix Project*. IT Revolution. <https://itrevolution.com/product/the-phoenix-project/>
- Klarna. 2024. Press release, 27 February 2024. <https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/>
- Levy, Steven. 1984. "A Spreadsheet Way of Knowledge." *Harper's*, November 1984. <https://harpers.org/archive/1984/11/a-spreadsheet-way-of-knowledge/>
- LinkedIn Economic Graph. 2025. <https://economicgraph.linkedin.com/>
- MUFG. 2025. "Financing the AI Supercycle." <https://www.mufgamericas.com/insights/ai-supercycle>
- Noble, David F. 1984. *Forces of Production*. Knopf. <https://archive.org/details/forcesofproducti0000nobl>
- OpenAI. 2026. *API Pricing*. <https://openai.com/api/pricing/> (retrieved 2026-04-19)
- Orosz, Gergely. 2022. "ZIRP and Software Engineers." Pragmatic Engineer. <https://newsletter.pragmaticengineer.com/p/zirp-software-engineers>
- SaaS-Capital. n.d. "How Do SaaS Companies Perform in a Recession?" <https://www.saas-capital.com/blog-posts/how-do-saas-companies-perform-in-a-recession/>
- Schmidt, Joe. 2024. "Trading Margin for Moat." a16z. <https://a16z.com/services-led-growth/>
- SEC Historical Society. 2018. "Transformation and Regulation: Equities Market Structure, 1934 to 2018." <https://www.sechistorical.org/museum/galleries/msr/msr03b_nasdaq.php>
- SEC/CFTC. 2010. *Findings Regarding the Market Events of May 6, 2010*. <https://www.sec.gov/news/studies/2010/marketevents-report.pdf>
- Skelton, Matthew, & Manuel Pais. 2019. *Team Topologies*. IT Revolution. <https://teamtopologies.com>
- Spotify Engineering. 2025. "Celebrating Five Years of Backstage." <https://engineering.atspotify.com/2025/04/celebrating-five-years-of-backstage/>
- Stanford HAI. 2025. *AI Index Report 2025*. <https://hai.stanford.edu/ai-index/2025-ai-index-report>
- St Louis Fed. 2025. "Volcker Tightening Cycle: Explaining the 1982 Course Reversal." <https://www.stlouisfed.org/-/media/project/frbstl/stlouisfed/publications/review/pdfs/2025/jan/volcker-tightening-cycle-explaining-1982-course-reversal.pdf>
- Womack, James P., Daniel T. Jones, & Daniel Roos. 1990. *The Machine That Changed the World*. Rawson.
