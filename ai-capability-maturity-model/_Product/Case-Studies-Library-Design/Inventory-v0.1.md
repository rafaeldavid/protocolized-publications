---
title: Case Studies — Inventory v0.1
date: 2026-04-26 (extension pass)
status: draft (Phase A of IA-007)
maintainer: rafa
sources_referenced: 132
extension_pass: 2026-04-26 — Class A successes + Cloud + Mobile
---

# Case Studies Inventory · v0.1

This is the Phase A deliverable for IA-007 (Case Studies Library). It catalogs every case-shaped reference in the repo — across `_Observations/research/`, the published HTML pages (case-studies, homepage, levels, assessment, blog), the litepaper draft v7, and the litepaper bibliography — and tags each by class (A = AI-adoption story, B = technology-arc precedent), level (L1–L5), archetypes most relevant, function, era, frame, and where the case is currently surfaced. For Class A cases, the inventory includes a per-case external bibliography of authoritative sources (news, court records, company posts, analysis). For Class B cases, the inventory carries 3–5 anchor sources to seed the next research phase.

This inventory feeds the Phase B page-design spec (`Spec-v0.1.md`). It does not write Class B card content, redesign the page, or commission new research — those are downstream phases. The editorial principle for case selection: a case must be a specific identified org or incident with a story arc; surveys, frameworks, and theory pieces are excluded (they will appear as data sources or theoretical scaffolding behind the cards, not as cards themselves).

## Changelog

**2026-04-26 — extension pass:**
- Added L1 and L2 Class A success-story candidates (was failure-heavy). Eight slots investigated (A10–A18 with A13 reserved for "anonymous shadow-AI + thin-protocol-layer"); seven survived research and were written up as full Class A blocks (A10 Rao+Dixon F2F, A11 Simon Willison, A12 YC small-team, A14 Wikipedia AI-policy [provisional], A15 OpenAI FDE, A16 Palantir FDE, A17 BBVA reframed, A18 Stripe Toolshed); A13 dropped for lack of substantiating material.
- Added Cloud era and Mobile era as Class B entries (was missing the two biggest 20-year tech arcs). Numbered as **B10 (Cloud)** and **B11 (Mobile)** following the original B1–B9 (the IA-007 brief listed Cloud and Mobile as Class B #7 and #8 in its own seed list, but the inventory's existing B1–B9 sequence takes precedence; the canonical inventory order does not match the brief's listing order).
- All additions appended at the end of their respective sections; nothing in the original v0.1 was modified.
- New external URLs added to the Appendix as a dated addendum; front-matter `sources_referenced` updated from 88 to 132.

## Methodology

**Sources audited (in order):**

1. `_Product/Backlog.md` — the IA-007 brief itself (Class A list, Class B seed list, design questions, dependencies)
2. `_Product/Case-Studies-Library-Design/README.md` — workstream framing
3. `_Product/copy-edits/triage.md`, `README.md`, `AGENT-PROMPT.md`, `triage-state.json` — recent editor feedback (CONTENT-005, CONTENT-006, CONTENT-007 specifically about case studies)
4. All 32 entries in `_Observations/research/` — distinguishing case studies (specific orgs/incidents, ~7 entries) from research papers (frameworks, surveys, ~15 entries) from theory pieces (Rao essays, Protocolized SIG papers, ~10 entries)
5. `case-studies/index.html` — the current 5-card surface
6. `homepage/index.html` — landing-page case list and "Explore" cards
7. `levels/index.html` — historical-parallel cards (one per level — the existing Class B layer)
8. `assessment/index.html` — RESULTS object's `periodTech` and `containerization` throughline (rich Class B material across levels)
9. `Blog-Post/SIG-update/publish/index.html` — historical-parallel mentions, F2F (Rao/Dixon) example, Mann Gulch / Weick
10. `Litepaper/litepaper-draft-v7.md` — current working draft (full read; case-shaped material at every level)
11. `Litepaper/litepaper-bibliography.md` — Parts 1–3 (curated section mapping, citable claims, Chicago bibliography)
12. `_Observations/lede-history.md` — for context on the ongoing editorial voice

**External research:** Per-case web searches were planned for each of the eight Class A candidates and each of the six Class B seeds. Where a research/ entry already provided primary URLs (Bloomberg, BCCRT, NIST, etc.), those are kept as canonical and supplemented; where the repo's bibliography only listed publishers (e.g. "TechCrunch; Fortune") the inventory lists the specific articles where findable. External research findings appear inline in each case block as `Bibliography:`.

**Inclusion test:** A "case" is a specific identified org or incident with a story arc that could carry a card on a library page. Frameworks (Microsoft RAI, NIST AI RMF), surveys (McKinsey, Menlo, BCG, Accenture), aggregated industry stats (Cyberhaven, Reco.ai, IBM), and theoretical essays (Rao, Stinson-Schroff, Benny) are excluded. Borderline items (a survey with a specific named anchor; a theoretical piece that contains a case vignette) are noted with `borderline` and a reason.

**Caveats about completeness:** The repo audit was exhaustive across every file listed above. The external-source bibliographies are best-effort grounding from URLs already in the repo plus targeted web searches; some sources are aggregator citations where primary sources are paywalled (e.g. Gartner). Where a source could not be verified externally and only appears as a paraphrase in the repo, the inventory flags it `[unverified]`.

## Summary

- **Class A (AI adoption stories):** **9 original candidates + 8 extension-pass candidates = 17 (with 1 dropped) → 16 effective.** Original 9: 5 currently published on `/case-studies/` (Samsung, Klarna, Shopify, Air Canada, Boom) plus Uber agentic shift, BBVA 4,000+ custom GPTs, Duolingo contractor replacement, Legal hallucination cases. **Extension pass added (2026-04-26):** L1 success-mode candidates A10 Rao+Dixon F2F, A11 Simon Willison personal AI tooling, A12 YC small-team production AI (HumanLayer/Ambral/Vulcan), A14 Wikipedia AI-policy emergence (provisional); L2 success-mode candidates A15 OpenAI FDE program, A16 Palantir FDE origins, A17 BBVA reframed as L2→L3 transition success, A18 Stripe Toolshed + minions. A13 (anonymous "shadow AI + thin protocol layer") was dropped for lack of substantiating material.
- **Class B (technology arcs):** **8 original candidates + 2 extension-pass candidates = 10.** The 6 IA-007 seeds (containerization, spreadsheets, corporate email, Git/CI-CD, EDI, internet protocols) are *all* already used as historical-parallel cards on `/levels/`, on `/blog-the-missing-layer/`, in the assessment results, and in the litepaper draft v7 — the page-design phase will be promoting and unifying material that exists, not commissioning from scratch. Two additional Class B cases surface from the audit: **NotPetya / Maersk 2017** (litepaper §3 L5 explicit Level-5 case) and **2021 Facebook BGP outage** (`/levels/` L5 historical-parallel + `/blog/`). **Extension pass added (2026-04-26):** B10 (AWS S3/EC2 → Netflix → Capital One → ambient cloud) and B11 (App Store → BlackBerry collapse → Uber/Starbucks/Domino's mobile-first → ambient computing). Both are full-arc throughlines spanning L1→L5.
- **Borderline:** 4 items — legal hallucination case cluster (named cases inside an aggregated stat), shadow-AI-in-healthcare (named-vertical inside a stat roundup), the Rao/Dixon F2F factory case (named individuals, but used as a vignette inside L4 theory rather than a full case), Mann Gulch / Wag Dodge / Weick (the smokejumper case used in litepaper §3 L2 as a metaphor — historical, but not a tech-arc case).
- **Total external sources cited in this inventory:** 88 (counted in the Appendix).
- **Top 3 gaps in 1 line each:**
  1. **No L1 success-mode counter to Samsung.** The published L1 surface is monotonal (failure only). CONTENT-007 (now folded into IA-007) calls for a Folkway/Guild "organic protocol emergence" L1 case — none has been written.
  2. **No published L4 or L5 Class A case at all.** The current `/case-studies/` page tops out at Boom (L3). Uber and BBVA are on the homepage explore card and in the litepaper but missing as `/case-studies/` cards. NotPetya/Maersk and the 2021 Facebook BGP outage are L5 cases used only as historical analogs, not promoted to first-class cards.
  3. **Function coverage is heavily engineering / customer-service.** Marketing, finance, HR, legal-as-internal-function, ops, supply-chain are largely absent at case level (the legal-hallucination cluster covers legal practitioners, not legal-as-corporate-function).

## Coverage matrix

Original v0.1 coverage:

|              | Class A | Class B | Total |
|--------------|---------|---------|-------|
| L1           | 2       | 1       | 3     |
| L2           | 4       | 1       | 5     |
| L3           | 2       | 1       | 3     |
| L4           | 1*      | 1       | 2     |
| L5           | 2       | 2       | 4     |
| Spans levels | 0       | 2       | 2     |
| **Total**    | **11**  | **8**   | **19**|

*Uber is counted at both L3 and L4 (litepaper labels it "approaching Level 4"); the L3 cell counts the Uber-as-L3-exemplar use, the L4 cell counts the Uber-approaching-L4 use. Containerization sits in "Spans levels" because the assessment uses it as a throughline across all 5 result pages. EDI also spans (L1 inception → L4 sector adoption); Walmart-EDI specifically is L4-anchored. Class A total counts Uber once.

After extension pass (2026-04-26):

|              | Class A (orig) | Class A (success ext.) | Class B | Total |
|--------------|----------------|------------------------|---------|-------|
| L1           | 2              | 4 (A10 · A11 · A12 · A14)** | 1   | 7     |
| L2           | 4              | 3 (A15 · A16 · A17)       | 1     | 8     |
| L2 → L3      | 0              | 1 (A18)                   | 0     | 1     |
| L3           | 2              | 0                          | 1     | 3     |
| L4           | 1*             | 0                          | 1     | 2     |
| L5           | 2              | 0                          | 2     | 4     |
| Spans levels | 0              | 0                          | 4 (B1 · B6 · B10 · B11) | 4 |
| **Total**    | **11**         | **8** (A13 dropped)         | **10** | **29** |

**A14 (Wikipedia AI-policy emergence) is provisional pending Phase B confirmation. The extension pass does not add any L3/L4/L5 Class A cases — those gaps remain (Phase B should consider promoting Uber A7, BBVA A8/A17, NotPetya/Maersk B8, Facebook BGP B9 to address the L4/L5 vacuum on `/case-studies/`).

## Class A — AI adoption stories

| # | Title | Slug | Level | Archetypes most relevant | Function | Frame | Source files in repo | Currently surfaced on |
|---|---|---|---|---|---|---|---|---|
| A1 | Samsung ChatGPT leak | `shadow-data-leak` | L1 | Tinkerer, Folkway, Warden | Engineering | Failure — invisible exposure forced reactive ban | `_Observations/research/samsung-chatgpt-leak.md` | `/case-studies/`, `/`, litepaper §3 L1, assessment failure-mode |
| A2 | Klarna mandate reversal | `mandate-reversal` | L2 | Vanguard, Ratifier | Customer service | Failure — mandate without output governance | `_Observations/research/klarna-ai-mandate-reversal.md` | `/case-studies/`, `/`, litepaper §3 L2, assessment failure-mode + archetype examples |
| A3 | Shopify "non-optional" memo | `non-optional-mandate` | L2 | Vanguard, Integrator | All (cross-cutting) | Mixed — productive ceiling, ungoverned quality | `_Observations/research/shopify-lutke-memo.md` | `/case-studies/`, `/`, litepaper §3 L2, assessment failure-mode |
| A4 | Duolingo contractor replacement | (not on `/case-studies/`) | L2 | Vanguard, Warden | Content / HR / Marketing | Failure — quality-check protocol erased | `_Observations/research/duolingo-contractor-replacement.md` | `/` (named), litepaper §3 L2 — **not on `/case-studies/` despite MILESTONES claim of CONTENT-003 shipping with Duolingo** |
| A5 | Air Canada chatbot liability (Moffatt v.) | `chatbot-liability` | L2 | Warden, Ratifier | Legal / Customer service | Failure — accountability protocol absent | `_Observations/research/moffatt-v-air-canada.md` | `/case-studies/`, `/`, litepaper §3 L2 + §5, assessment failure-mode |
| A6 | Boom Supersonic mkBoom workflow | `designed-workflow` | L3 | Architect, Traveller | Engineering / Product design | Success — designed governance alongside capability | `_Observations/research/scholl-move-fast-pt1.md`, `scholl-vertical-integration.md` | `/case-studies/`, `/`, litepaper §3 L3, assessment archetype examples |
| A7 | Uber agentic shift (Code Inbox / U Review / 4-layer) | (not on `/case-studies/`) | L3 → L4 | Architect, Integrator | Engineering | Success — protocol design for new bottleneck | `_Observations/research/uber-agentic-shift.md` | litepaper §3 L3 + §3 L4, assessment archetype examples + L3 failure-mode example — **homepage explore card lists Boom, not Uber** |
| A8 | BBVA — 4,000+ (now 20,000+) custom GPTs | (not anywhere as a card) | L3 → L4 | Architect, Integrator | All (cross-cutting; legal, risk, marketing, finance) | Success — institutional-scale platform from ChatGPT Enterprise | `_Observations/research/accenture-art-of-ai-maturity.md` (single-line citation) | Litepaper §1 (one-line stat in McKinsey/Accenture context), assessment Architect archetype examples — **no dedicated research entry** |
| A9 | Legal hallucination cases (composite: Mata v. Avianca, ByoPlanet v. Johansson, ABA Op. 512) | (not on `/case-studies/`) | L1 | Folkway, Warden | Legal (practitioners) | Failure — at-scale shadow AI with named-case anchors | `_Observations/research/legal-hallucination-sanctions.md` | Litepaper §1, §3 L1 (named); aggregated stats also in litepaper §1 — **borderline**: a named-case cluster sitting inside an aggregated stat (550+ tracked cases, 712 judicial decisions) |

### A1 · Samsung ChatGPT leak
- **Level:** L1
- **Year:** April 2023 (incidents); May 2 2023 (ban)
- **Frame:** Three semiconductor engineers pasted proprietary source code, equipment-defect detection code, and an internal meeting transcript into personal ChatGPT accounts within a 20-day window. Discovery was after-the-fact. Samsung's response was reactive: a 1024-byte input cap, then a full enterprise GenAI ban on May 2 2023, then a multi-year arc to internal alternative (Samsung Gauss) and selective re-admission.
- **Failure or success mode:** Failure — drove the case for sanctioning. Canonical L1 cautionary tale.
- **Archetypes most relevant:** Tinkerer (engineers acting independently with real productivity benefit), Folkway (shadow adoption pattern at scale), Warden (Samsung's eventual response posture).
- **Function affected:** Engineering (semiconductor R&D specifically).
- **Source in repo:** `_Observations/research/samsung-chatgpt-leak.md`
- **Currently surfaced on:** `/case-studies/` (`#shadow-data-leak` card), homepage explore card ("Samsung — shadow AI data leak"), litepaper §3 L1 (extended treatment with 3.1% Cyberhaven anchor), assessment L1 failure-mode card ("Data leakage to third-party AI services"), `/levels/` L1 card grounds the spreadsheets historical-parallel against this incident pattern.
- **Strengths:** Canonical L1 case; widely known; primary-source reporting (Bloomberg) holds up; clean three-part arc (incident → ban → internal alternative) makes the Level-1 exit path legible.
- **Weaknesses:** Monotonal failure framing; CONTENT-007 calls for an L1 success-mode counterpart from the Folkway/Guild end (organic protocol emergence). Samsung's bibliography in the repo cites Bloomberg + Forbes only; litepaper footnote [^21] adds Gizmodo. Cross-source comparison is light.
- **Ambiguity / [unverified]:** Samsung's official corporate statement is referenced ("Company memo cited 'transmission of sensitive information'") but no direct link to the memo is in the repo or in the public reporting cited.
- **Bibliography:**
  1. Mark Gurman, "Samsung Bans Generative AI Use by Staff After ChatGPT Leak," *Bloomberg*, May 2, 2023. https://www.bloomberg.com/news/articles/2023-05-02/samsung-bans-chatgpt-and-other-generative-ai-use-by-staff-after-leak
  2. Sergiu Gatlan / Devin Coldewey, "Samsung Bans Use of Generative AI Tools Like ChatGPT After April Internal Data Leak," *TechCrunch*, May 2, 2023. https://techcrunch.com/2023/05/02/samsung-bans-use-of-generative-ai-tools-like-chatgpt-after-april-internal-data-leak/
  3. Roberto Torres, "Samsung Employees Leaked Corporate Data in ChatGPT: Report," *CIO Dive*, May 3, 2023. https://www.ciodive.com/news/Samsung-Electronics-ChatGPT-leak-data-privacy/647137/ (this is the URL the case-card already links to)
  4. Siladitya Ray, "Samsung Bans ChatGPT For Employees After Sensitive Code Leak," *Forbes*, May 2, 2023. https://www.forbes.com/sites/siladityaray/2023/05/02/samsung-bans-chatgpt-and-other-chatbots-for-employees-after-sensitive-code-leak/
  5. Lauren Leffer, "Oops: Samsung Employees Leaked Confidential Data to ChatGPT," *Gizmodo*, April 6, 2023. https://gizmodo.com/chatgpt-ai-samsung-employees-leak-data-1850307376 (earliest reporting; precedes the corporate ban)
  6. Cyberhaven research note on enterprise ChatGPT data exposure (Q1 2024 update): 3.1% of enterprise ChatGPT users have submitted confidential data; 73.8% of usage on personal accounts. https://www.cyberhaven.com/research (paywalled; cited as primary in litepaper [^18][^19])

### A2 · Klarna mandate reversal
- **Level:** L2
- **Year:** February 2024 (deployment announcement) → May 2025 (public reversal)
- **Frame:** Klarna's AI customer-service deployment claimed work equivalent to 700 agents and reported 90% daily AI tool adoption among employees. Headcount fell from ~5,527 (2022) to ~3,100 (IPO, Sept 2025). By May 2025 CEO Sebastian Siemiatkowski publicly reversed the AI-only customer-service position, citing outputs that were "generic, repetitive, insufficiently nuanced," and began rehiring under an "Uber-style" remote-flex model. Framed publicly as quality, not cost.
- **Failure or success mode:** Failure — but with a productive arc (acknowledgement, reversal, hybrid model rebuild). The cleanest L2 longitudinal record at enterprise scale.
- **Archetypes most relevant:** Vanguard (moved aggressively, publicly), Ratifier (reversal posture as the org caught up to its own deployment).
- **Function affected:** Customer service primarily; also a referendum on the broader AI-replaces-headcount narrative.
- **Source in repo:** `_Observations/research/klarna-ai-mandate-reversal.md`
- **Currently surfaced on:** `/case-studies/` (`#mandate-reversal` card), homepage explore card, litepaper §3 L2 (extended treatment with Siemiatkowski quote), assessment "Quality floor collapse" failure-mode card and Vanguard archetype examples.
- **Strengths:** Two distinct primary sources (the Feb 2024 Klarna press release; Bloomberg's May 2025 reversal piece); the longitudinal arc is the case's whole value.
- **Weaknesses:** Per CONTENT-005, the current `/case-studies/` card reads as "four detached facts" (90% adoption / two-thirds of CS / $40M / reversal) rather than narrative; reviewer asked for cause-and-effect rewrite specifying which function was replaced (customer service) and whether layoffs were total or partial. Reviewer also wants the takeaway reframed from "governance-paralysis loop" to "last-mile work AI capabilities can't actually solve" with reference to [npc.here.now/ai-org/](https://npc.here.now/ai-org/).
- **Ambiguity / [unverified]:** "Generic, repetitive, insufficiently nuanced" attribution to Siemiatkowski is paraphrased in repo (`bibliography.md` Entry 31 flags `[PARAPHRASE — confirm exact CEO quote attribution]`). Some sources frame the quote as paraphrase of his Bloomberg interview rather than direct words; others (entrepreneur.com, AINewsWire) carry "We went too far." Direct verbatim source needs locking before customer-facing republication.
- **Bibliography:**
  1. Klarna Press, "Klarna AI assistant handles two-thirds of customer service chats in its first month," February 27, 2024. https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/
  2. Marton Eder, "Klarna Turns From AI to Real Person Customer Service," *Bloomberg*, May 8, 2025. https://www.bloomberg.com/news/articles/2025-05-08/klarna-turns-from-ai-to-real-person-customer-service
  3. Sherin Shibu, "Klarna Is Hiring Customer Service Agents After AI Couldn't Cut It," *Entrepreneur*, May 9, 2025. https://www.entrepreneur.com/business-news/klarna-ceo-reverses-course-by-hiring-more-humans-not-ai/491396
  4. Tech.co, "Klarna Reverses AI Overhaul," May 2025. https://tech.co/news/klarna-reverses-ai-overhaul (the URL the case-card already links to)
  5. Reference reading per CONTENT-005: Venkatesh Rao, "AI and Org Design," NPC Memo, [npc.here.now/ai-org/](https://npc.here.now/ai-org/) — for the "last-mile / protocols-have-reasons" reframe.

### A3 · Shopify "non-optional" memo
- **Level:** L2
- **Year:** April 7, 2025 (memo leaked + confirmed by Lütke on X)
- **Frame:** CEO Tobi Lütke posted an internal memo titled "Reflexive AI usage is now a baseline expectation at Shopify." The memo made AI use a baseline employment expectation, required teams to demonstrate AI cannot do a task before requesting headcount, and folded AI competency into performance reviews and hiring decisions. Stack endorsed in the memo: Copilot, Claude, Cursor, internal `chat.shopify.io`, and "Proxy." Revenue grew 30% YoY for FY2025; opex fell from 45% to 35% of revenue.
- **Failure or success mode:** Mixed — productive ceiling. The mandate is producing real efficiency; the governance gap is the absence of a competency standard for non-technical roles, no systematic verification protocol for customer-facing AI content, no documented escalation path. Litepaper frames as "Level 2 at its most productive, and also its ceiling."
- **Archetypes most relevant:** Vanguard (mandate-from-the-top posture), Integrator (the implementation reality across teams).
- **Function affected:** All (cross-cutting; mandate is org-wide).
- **Source in repo:** `_Observations/research/shopify-lutke-memo.md`
- **Currently surfaced on:** `/case-studies/` (`#non-optional-mandate` card), homepage explore card, litepaper §3 L2, assessment "Mandate without criteria" failure-mode card.
- **Strengths:** Lütke posted the full memo himself on X (April 7 2025), giving primary-source verification of the headline quote. Clean financial counterweight (30% YoY growth) prevents pure-failure framing.
- **Weaknesses:** Repo's `samsung-chatgpt-leak.md`-style entry is shorter than peer entries and the source pointer is to a local resources stub (`../../Resources/shopify-lutke-memo.md`) rather than primary URLs; bibliography Entry 32 lists "CNBC; Digital Commerce 360" as venues without direct links. The entry's `## Gaps` section explicitly flags "need direct verbatim confirmation of full memo language beyond the widely quoted sentence."
- **Ambiguity / [unverified]:** The "translations sped up 100x" claim in the memo (per Slator coverage) is not in the repo entry and is not load-bearing in any case-card use. Memo full text is on Lütke's X post — the canonical primary source.
- **Bibliography:**
  1. Tobi Lütke, "I heard this internal memo of mine is being leaked right now, so here it is," X (formerly Twitter), April 7, 2025. https://x.com/tobi/status/1909231499448401946 — primary source; full memo text.
  2. Tobi Lütke, "Reflexive AI usage is now a baseline expectation at Shopify" (X post quoting the memo title sentence), April 7, 2025. https://x.com/tobi/status/1909251946235437514
  3. Mark Brohan, "Internal memo: Shopify CEO declares AI 'non-optional,'" *Digital Commerce 360*, April 8, 2025. https://www.digitalcommerce360.com/2025/04/08/internal-memo-shopify-ceo-declares-ai-non-optional/
  4. Jacob Cohen, "Shopify CEO Tobi Lütke confirms leaked internal memo on social media," *Tech Startups*, April 7, 2025. https://techstartups.com/2025/04/07/shopify-ceo-tobi-lutke-confirms-leaked-internal-memo-on-social-media-about-hiring-ai-before-humans/
  5. Jeff Beer, "Shopify's CEO Just Issued a Bold AI Ultimatum," *Marketing AI Institute*, April 8, 2025. https://www.marketingaiinstitute.com/blog/shopify-ceo-ai-memo
  6. Sarah Hippold, "In Internal Memo, Shopify CEO Says AI Has Already Sped Up Translations 100x," *Slator*, April 8, 2025. https://slator.com/in-internal-memo-shopify-ceo-says-ai-has-already-sped-up-translations-100x/
  7. *The Verge*, "Shopify Tobi Lütke AI memo developers engineers," April 7, 2025. https://www.theverge.com/news/644943/shopify-tobi-lutke-ai-memo-developers-engineers (the URL the case-card already links to)

### A4 · Duolingo contractor replacement
- **Level:** L2
- **Year:** Late 2023 (first contractor cut, ~10%) → October 2024 (further cuts) → April–May 2025 ("AI-first" memo + Fortune backlash) → August 2025 (Q2 earnings)
- **Frame:** Duolingo cut ~10% of its contractor workforce in late 2023, with another round in October 2024 — translators first, then writers — replacing them with AI. CEO Luis von Ahn issued an "AI-first" memo in spring 2025; consumer backlash followed on social media. Q2 2025 earnings: DAU growth came in at 40% YoY (vs. 60% in Q2 2024 and Q2 2023) — described by the company as "the lower end of projections." Von Ahn later said he "didn't give enough context."
- **Failure or success mode:** Failure — quality-check protocol erased. The contractors were both production and the QA protocol; removing them eliminated the cultural-nuance check that volume metrics did not capture.
- **Archetypes most relevant:** Vanguard (mandate-from-top), Warden (the reactive walk-back posture).
- **Function affected:** Content production, marketing/brand, HR/contractor management.
- **Source in repo:** `_Observations/research/duolingo-contractor-replacement.md`
- **Currently surfaced on:** Homepage explore card mentions the case but **not on `/case-studies/`**. Litepaper §3 L2 carries the extended treatment. Case-studies page footnote in MILESTONES says "Replaced Boom Supersonic with Shopify, added Duolingo and Air Canada" and that the final 5 cases are Samsung/Klarna/Shopify/Duolingo/Air Canada — but the live page (and homepage explore card) actually lists Boom in slot 5, not Duolingo. **This is a deployment-vs-MILESTONES discrepancy worth surfacing in Phase B.**
- **Strengths:** Quantitative anchor (DAU growth gap: 40% vs. 60%) is a clean trailing-metric story. Von Ahn's own walk-back gives an on-record CEO statement.
- **Weaknesses:** Repo entry's source pointer is to a local stub (`../../Resources/duolingo-ai-first-reporting.md`), not primary URLs. The 4–5x content-production claim is flagged `[PARAPHRASE — no independent verification published]` in repo. No direct link to Q2 2025 earnings transcript in the repo.
- **Ambiguity / [unverified]:** "AI-first" was the framing of the original April–May 2025 memo, but von Ahn explicitly walked back what it meant: "I do not see AI as replacing what our employees do." Care needed in describing the case as "AI replaced contractors" — von Ahn distinguishes contractors from full-time employees.
- **Bibliography:**
  1. Megan Crouse, "Duolingo to Replace Human Contractors With Bots, Become 'AI-First,'" *TechRepublic*, April 29, 2025. https://www.techrepublic.com/article/news-duolingo-replaces-contractors-ai/
  2. Marina Temkin, "Is Duolingo the face of an AI jobs crisis?" *TechCrunch*, May 4, 2025. https://techcrunch.com/2025/05/04/is-duolingo-the-face-of-an-ai-jobs-crisis/
  3. Sage Lazzaro, "Duolingo CEO walks back AI-first comments," *Fortune*, May 24, 2025. https://fortune.com/2025/05/24/duolingo-ai-first-employees-ceo-luis-von-ahn/
  4. Sara Friedman, "Duolingo went 'AI-first' and then came the consumer backlash," *Yahoo Finance / Sherwood News*, August 2025. https://finance.yahoo.com/news/duolingo-went-ai-first-then-070000682.html — sourcing for Q2 2025 DAU shortfall (40% YoY vs. 60% in 2024).
  5. Sara Friedman, "Duolingo CEO admits his controversial AI memo 'did not give enough context,'" *Yahoo Finance*, August 2025. https://finance.yahoo.com/news/duolingo-ceo-admits-controversial-ai-172247813.html
  6. *BeyondSPX*, "Duolingo's AI-First Gamble: Why Management Is Willing to Miss Guidance for a Decade-Long Education Monopoly," October 2025 (Q3 2025 earnings context). https://www.beyondspx.com/quote/DUOL/news/duolingo-beats-q3-2025-earnings-raises-fullyear-guidance-amid-strategic-shift

### A5 · Air Canada chatbot liability (Moffatt v. Air Canada)
- **Level:** L2
- **Year:** November 2022 (incident) → February 14, 2024 (BCCRT decision)
- **Frame:** Jake Moffatt, after his grandmother's death November 2022, asked Air Canada's chatbot about bereavement-fare policy. The chatbot said the rate could be claimed retroactively; the actual published policy was the opposite. Air Canada refused the refund and argued at the BC Civil Resolution Tribunal that the chatbot was a "separate legal entity" responsible for its own statements. Tribunal Member Christopher Rivers rejected the defence and ruled Air Canada liable for negligent misrepresentation. Damages awarded: CA$650.88 in core damages (canlii records the figure that way; some commentary cites CA$812.02 inclusive of pre-judgment interest and tribunal fees — verify before re-citing).
- **Failure or success mode:** Failure — accountability protocol absent. The "separate legal entity" defence is the textbook example of how *not* to handle AI-output liability.
- **Archetypes most relevant:** Warden (the post-incident posture Air Canada ended up with), Ratifier (the wait-for-the-courts framing of the original deployment).
- **Function affected:** Legal / customer service.
- **Source in repo:** `_Observations/research/moffatt-v-air-canada.md` (only `source_quality: primary` Class A entry — links to canlii ruling).
- **Currently surfaced on:** `/case-studies/` (`#chatbot-liability` card), homepage explore card, litepaper §3 L2 (extended treatment with verbatim tribunal quote) and §5 (as "model for reactive transition at Level 2"), assessment "Chatbot liability gap" failure-mode card, also referenced in `_Observations/research/finding-fault-lines.md` as a verbatim case treatment.
- **Strengths:** Primary source is the canlii ruling itself — strongest sourcing of any Class A case. Public-record tribunal language is directly quotable. Cross-referenced extensively across the repo (litepaper, finding-fault-lines, EU AI Act entry).
- **Weaknesses:** The card's link target is a BBC travel article, not the primary canlii URL — could be upgraded. Damages figure has minor source disagreement (CA$650.88 in canlii summary vs. CA$812.02 sometimes-cited inclusive figure — repo entry uses $812.02).
- **Ambiguity / [unverified]:** The "$812.02 inclusive" figure originates in the repo's research entry; new external research found the canlii write-up referencing CA$650.88 plus pre-judgment interest and tribunal fees. Phase B should reconcile to the canlii primary number.
- **Bibliography:**
  1. *Moffatt v. Air Canada*, 2024 BCCRT 149 (British Columbia Civil Resolution Tribunal, February 14, 2024) — primary source. https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html
  2. Maria O'Brien, "Lying Chatbot Makes Airline Liable: Negligent Misrepresentation in Moffatt v Air Canada," *CanLII Commentary*, 2025. https://www.canlii.org/en/commentary/doc/2025CanLIIDocs1963 — peer-reviewed legal commentary; the closest thing to scholarly authority on the case.
  3. Charles S. Morgan and Lyndsay A. Wasser, "Moffatt v. Air Canada: A Misrepresentation by an AI Chatbot," *McCarthy Tétrault TechLex Blog*, February 2024. https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot
  4. Cynthia E. Maag and Jaclyne Reive, "BC Tribunal Confirms Companies Remain Liable for Information Provided by AI Chatbot," *American Bar Association — Business Law Today*, February 2024. https://www.americanbar.org/groups/business_law/resources/business-law-today/2024-february/bc-tribunal-confirms-companies-remain-liable-information-provided-ai-chatbot/ — relevant for US business-law audience.
  5. Maria Yagoda, "Air Canada must honor refund policy invented by its chatbot," *BBC Travel*, February 22, 2024. https://www.bbc.com/travel/article/20240222-air-canada-chatbot-misinformation-what-travellers-should-know (the URL the case-card already links to)
  6. Repo cross-reference: Protocols for Business SIG, "Finding Fault Lines within the Firm," *Protocolized*, 2026 — contains the verbatim tribunal-summary the litepaper cites: "The court rejected this argument. It ruled that the chatbot was part of the airline's customer-facing system and that the company was responsible for the commitments it made, regardless of whether those commitments were generated by an AI system."

### A6 · Boom Supersonic — mkBoom designed workflow
- **Level:** L3 (late L3, per litepaper)
- **Year:** XB-1 supersonic flight January 28, 2025; Scholl essay series August–September 2025; *Boomless Cruise* announcement February 2025
- **Frame:** Boom's mkBoom proprietary aircraft design software automates whole-aircraft analysis (weights, propulsion, aerodynamics) from a parametric configuration file — running a complete simulated mission per design iteration. XB-1 (the demonstrator) was built by ~50 engineers at ~$190M. *Boomless Cruise* — supersonic flight without an audible boom (Mach cutoff physics) — was discovered through the iteration cycle, not as an original design objective; XB-1 broke the sound barrier three times during its first supersonic flight without an audible boom reaching the ground (Jan 28, 2025). Scholl articulates "Jevons's Law of engineering": when iteration is cheap, more designs are evaluated and a much better one is discovered. Slacker Index (Part 2): collapsing supply-chain lead times via vertical integration (turbine blade: $1M with 6-month lead → $2M 3D printer with 24-hour iteration).
- **Failure or success mode:** Success — "designed governance alongside capability." Litepaper case for Level 3 with the specific late-L3-not-L4 framing: Boom's business model depends on AI-enabled protocols; the aerospace industry doesn't yet depend on Boom's design approach.
- **Archetypes most relevant:** Architect (platform-builder posture for an internal AI workflow), Traveller (the business is built around the AI-enabled capability rather than augmenting an existing one).
- **Function affected:** Engineering / product design / supply chain (via Slacker Index lens in Part 2).
- **Source in repo:** `_Observations/research/scholl-move-fast-pt1.md` (Jevons's Law); `scholl-vertical-integration.md` (Slacker Index, Part 2). Both have primary-source URLs and verbatim quotes.
- **Currently surfaced on:** `/case-studies/` (`#designed-workflow` card), homepage explore card, litepaper §3 L3 (extended with Jevons's Law and Slacker Index quotes), assessment Architect/Traveller archetype examples.
- **Strengths:** Best-sourced Class A success case in the repo. Two primary-source Scholl essays, multiple verbatim quotes confirmed. Boom's own press releases provide independent corroboration of XB-1 milestones.
- **Weaknesses:** "Zero safety incidents across the XB-1 program" claim (`/case-studies/` card) is not directly sourced in the litepaper bibliography — flag as `[unverified]` until a direct citation is found. The case is increasingly used as a positive counter to the L1/L2 failure pile; risk of overuse.
- **Ambiguity / [unverified]:** The card frames mkBoom as "structural analysis" software; the company's own description is broader (full whole-aircraft analysis: weights, propulsion, aerodynamics). Worth tightening the description in Phase B.
- **Bibliography:**
  1. Blake Scholl, "Move Fast and Don't Break (Safety Critical) Things," *Boom Supersonic Blog*, August 10, 2025 — primary source for Jevons's Law of engineering. https://blog.boomsupersonic.com/move-fast-and-dont-break-safety-critical-things (also cross-posted to bscholl.substack.com)
  2. Blake Scholl, "Move Fast and Don't Break (Safety Critical) Things Part 2: Vertical Integration," *Boom Supersonic Blog*, September 14, 2025 — primary source for Slacker Index. https://blog.boomsupersonic.com/move-fast-and-dont-break-safety-critical-things-part-2-vertical-integration
  3. Boom Supersonic, "Boom Supersonic Announces Boomless Cruise," Press Release, February 2025. https://boomsupersonic.com/press-release/boom-supersonic-announces-boomless-cruise
  4. Boom Supersonic, "Boom Year in Review 2025" (Flyby), 2025. https://boomsupersonic.com/flyby/boom-year-in-review-2025 — XB-1 first supersonic flight summary.
  5. *Aerotime*, "How Boom's XB-1 went supersonic without the noise," 2025. https://www.aerotime.aero/articles/boom-supersonic-boomless-cruise — independent technical reporting on the Mach-cutoff physics.
  6. Edward Russell, "New York to London in 3 Hours? Boom Supersonic's CEO Is Betting on 2029," *Skift*, August 28, 2025. https://skift.com/2025/08/28/new-york-to-london-in-3-hours-boom-supersonics-ceo-is-betting-on-2029/ — context for commercial Overture timeline.

### A7 · Uber agentic shift (Code Inbox · U Review · 4-layer platform)
- **Level:** L3 → L4 (litepaper labels Uber as "the most thoroughly documented Level 3 case" and separately as "approaching Level 4")
- **Year:** Pragmatic Summit talk March 10, 2026; Pragmatic Engineer companion writeup March 10–11, 2026; underlying tooling shipped through 2025–early 2026
- **Frame:** By March 2026: 84% of Uber developers are active agentic-coding users; 65–72% of code is AI-generated inside IDE tools; 11% of PRs are opened by agents; 92% of devs use agents monthly. Claude Code adoption: 32% (Dec 2025) → 63% (Feb 2026). AI-related costs up 6× since 2024. The four-layer agentic stack: (1) internal AI platform on Michelangelo; (2) internal Uber context (source code, docs, Slack, JIRA); (3) industry agents (Claude Code, Copilot, Codex, Cursor); (4) specialised internal agents (Minion, Shepherd, Autocover, Code Inbox, U Review). Code Inbox is smart-routing of agent-authored PRs to reviewers based on code ownership, with explicit review-time SLOs. U Review is AI-assisted code review reducing reviewer burden. The litepaper treats this as the canonical L3→L4 transition protocol pattern in software engineering.
- **Failure or success mode:** Success — protocol design for the new bottleneck. The case explicitly demonstrates the L3 failure mode (temporal divergence as PR volume outpaced review) *and* the protocol response (Code Inbox + U Review).
- **Archetypes most relevant:** Architect (the four-layer platform itself), Integrator (how teams consume it), Vanguard (the volume of investment is unusually aggressive even within frontier orgs).
- **Function affected:** Engineering (specifically code authorship, review, and release flow).
- **Source in repo:** `_Observations/research/uber-agentic-shift.md` — primary sources include the YouTube recording of the Pragmatic Summit talk and the Orosz Pragmatic Engineer writeup (both URLs in entry).
- **Currently surfaced on:** Litepaper §3 L3 (extended treatment with Khosrowshahi quote and full four-layer label) and §3 L4 (Uber-approaching-L4 framing); litepaper §4 (Code Inbox as the "L3→L4 transition protocol" exemplar in Table 1); assessment Architect/Integrator examples + L3 "Temporal divergence breakdown" failure-mode card explicitly cites Uber; **homepage explore card lists Boom Supersonic as the L3 case, not Uber** — Uber is missing from `/case-studies/` despite being treated as the canonical L3 case in the litepaper.
- **Strengths:** Unusually rich primary sourcing — the Pragmatic Summit recording is on YouTube and Orosz's writeup is publicly accessible; Uber's own engineering blog and Pragmatic Engineer LinkedIn announcement corroborate. The four-layer architecture label is verbatim-quotable.
- **Weaknesses:** No published `/case-studies/` card despite this being the most thoroughly grounded Class A success case. The "CTO Dario Khosrowshahi" attribution in the litepaper §3 L3 ("AI is enabling people to become superhumans...") is questionable — Dara Khosrowshahi is the CEO; Praveen Neppalli Naga is the CTO (Engineering). The quote is attributed in the repo simply as "verbatim, Uber transcript" — recheck speaker attribution before card publication.
- **Ambiguity / [unverified]:** The litepaper writes "CTO Dario Khosrowshahi" — but Khosrowshahi is the *CEO* (and his first name is "Dara," not "Dario"). This is a name + title error that should be fixed in litepaper v8 and not propagated to the case card. The actual speakers were Anshu(man) Chada and Ty Smith.
- **Bibliography:**
  1. Anshu(man) Chada and Ty Smith, "Uber: Leading Engineering through an Agentic Shift," The Pragmatic Summit (San Francisco), March 10, 2026 — primary source. https://www.youtube.com/watch?v=i1tZN41VKcE
  2. Gergely Orosz, "How Uber uses AI for development: inside look," *The Pragmatic Engineer*, March 10–11, 2026 — primary companion writeup with the four-layer architecture diagram. https://newsletter.pragmaticengineer.com/p/how-uber-uses-ai-for-development
  3. Uber Engineering on X, March 2026 — official Uber Engineering announcement of the talk. https://x.com/UberEng/status/2033946334571729125
  4. Maja Ferle, "How Uber Engineers Use AI Agents," *ShiftMag*, 2026. https://shiftmag.dev/how-uber-engineers-use-ai-agents-8617/
  5. *CIO*, "How agentic AI will reshape engineering workflows in 2026," 2026. https://www.cio.com/article/4134741/how-agentic-ai-will-reshape-engineering-workflows-in-2026.html
  6. *Business Honor*, "Praveen Neppalli Naga Says Uber Engineers Embrace Autonomous AI Coding Shift," March 2026. https://businesshonor.com/2026/03/uber-adopt-agentic-ai-automate-software-development — useful for confirming Naga (not Khosrowshahi) as CTO.

### A8 · BBVA — internal custom-GPT platform (4,000 → 20,000+)
- **Level:** L3 → L4 (litepaper §1 cites BBVA as an L4-style Achiever; assessment lists BBVA in the Architect archetype examples)
- **Year:** May 2024 (initial 3,300 ChatGPT Enterprise accounts) → late 2024 (expanded to 11,000) → 2025 (rolling out to all 120,000 employees in 25 countries) → December 2025 onward (20,000+ custom GPTs reported)
- **Frame:** BBVA's enterprise-scale ChatGPT deployment is repeatedly cited in the repo as the "industrialised tooling" exemplar for the Accenture Achievers archetype and the litepaper's L4-style infrastructural-tooling claim. The new (post-`research/` entry) external research surfaces a much richer story than the single-line "4,000+ custom GPTs" the repo carries: BBVA started with 3,300 accounts in May 2024, expanded to 11,000, and is now rolling out to all 120,000 employees globally; reported 20,000+ custom GPTs created across legal, risk, marketing, talent, and finance with up to 80% efficiency gains in some workflows. Specific named GPTs include "Credit Analysis Pro" for risk analysts.
- **Failure or success mode:** Success — institutional-scale platform built on top of a third-party AI vendor. A different shape of L4 from Uber's case (Uber built the four-layer stack; BBVA layered on ChatGPT Enterprise + custom GPTs).
- **Archetypes most relevant:** Architect (institutional-scale platform), Integrator (workflow-by-workflow rollout discipline).
- **Function affected:** All — explicitly cross-cutting: legal, risk, marketing, talent, finance, customer-facing, all named in BBVA's own materials.
- **Source in repo:** `_Observations/research/accenture-art-of-ai-maturity.md` — single one-line citation only ("BBVA: 4,000+ internal custom GPTs deployed"). **No dedicated `_Observations/research/bbva-*.md` entry exists.** Phase B should commission one.
- **Currently surfaced on:** Litepaper §1 (named in the McKinsey/Accenture context as one-line stat); assessment Architect archetype examples; **not on `/case-studies/`, not on homepage explore card.**
- **Strengths:** Unusually rich primary sourcing once the OpenAI partnership posts are surfaced — BBVA's own innovation team has published several detailed posts. The 80% efficiency-gain claim is from BBVA's own materials, not third-party.
- **Weaknesses:** Repo grounding is thin (one line). The "4,000+" figure is from the Accenture report and is now stale (the figure is 20,000+ as of late 2025). Needs a dedicated research entry. Cross-source comparison currently nonexistent.
- **Ambiguity / [unverified]:** The "4,000+ custom GPTs" figure cited everywhere in the repo is sourced from Accenture's 2024 report; the 20,000+ figure is from BBVA's own December 2025 materials and OpenAI's case study. Phase B should reconcile.
- **Bibliography:**
  1. OpenAI, "BBVA puts AI in the hands of every team with OpenAI" (case study), 2024. https://openai.com/index/bbva/ — original 3,300-account rollout.
  2. OpenAI, "How BBVA is scaling AI from pilot to practice across the org," 2025. https://openai.com/index/bbva-2025/ — expansion stage.
  3. OpenAI, "BBVA and OpenAI collaborate to transform global banking," December 2025. https://openai.com/index/bbva-collaboration-expansion/ — full 120,000-employee rollout.
  4. BBVA, "BBVA sparks a wave of innovation among its employees with the deployment of ChatGPT Enterprise," BBVA News, 2024. https://www.bbva.com/en/innovation/bbva-sparks-a-wave-of-innovation-among-its-employees-with-the-deployment-of-chatgpt-enterprise/ — BBVA primary corporate source.
  5. BBVA, "BBVA is now using ChatGPT to streamline legal queries and marketing processes," BBVA News, 2024. https://www.bbva.com/en/innovation/bbva-is-now-using-chatgpt-to-streamline-legal-queries-and-marketing-processes/ — function-level deployment detail.
  6. *Fintech Global*, "BBVA rolls out ChatGPT Enterprise in global AI banking push," December 12, 2025. https://fintech.global/2025/12/12/bbva-rolls-out-chatgpt-enterprise-in-global-ai-banking-push/ — independent reporting on the 120,000-employee rollout.
  7. *AI News*, "BBVA embeds AI into banking workflows using ChatGPT Enterprise," 2025. https://www.artificialintelligence-news.com/news/bbva-embeds-ai-into-banking-workflows-using-chatgpt-enterprise/

### A9 · Legal hallucination cases (composite: Mata v. Avianca, ByoPlanet v. Johansson, ABA Op. 512)
- **Level:** L1 (canonical L1 at scale)
- **Year:** 2023 (*Mata v. Avianca*, $5K sanction) → July 2024 (ABA Formal Opinion 512) → July 17, 2025 (*ByoPlanet v. Johansson*, ~$86K sanction) → early 2026 (550+ tracked cases, 712 judicial decisions)
- **Frame:** A growing body of court-record evidence of attorneys filing briefs containing AI-fabricated case citations. Earliest canonical case: *Mata v. Avianca* (S.D.N.Y., June 2023), $5,000 sanction against Steven Schwartz, Peter LoDuca, and Levidow, Levidow & Oberman P.C. for filing a brief containing six fictitious cases generated by ChatGPT. Largest single sanction to date: *ByoPlanet International v. Johansson* (S.D. Fla., July 17, 2025), nearly $86,000 in sanctions against attorney James Martin Paul, who used hallucinated citations across eight matters; Judge Liebowitz dismissed all four pending matters without prejudice + leave to amend, ordered fee/cost shifting, ordered Paul to attach the sanctions order to any future filing in S.D. Fla. for two years, and referred him to the Florida Bar. Regulatory forcing function: ABA Formal Opinion 512 (July 2024) requires lawyers to maintain "reasonable understanding" of AI capabilities and verify all output. As of early 2026, 550+ publicly tracked hallucination cases and 712 judicial decisions worldwide noting AI-generated misinformation.
- **Failure or success mode:** Failure at scale — the case for L1 being structural, not anecdotal. The legal profession reached "Level 2 intent (AI use is recognized as legitimate) without Level 2 execution (a verification protocol between AI output and professional accountability)" (litepaper §3 L1).
- **Archetypes most relevant:** Folkway (broad shallow individual adoption below firm visibility), Warden (the bar associations and courts as the post-incident enforcers). Distinct in that the enforcer is professional licensing, not the firm.
- **Function affected:** Legal (practitioners specifically — partners, solo practitioners, attorney teams); the firm is the second-order accountable party but the practitioner is the protocol-violation point.
- **Source in repo:** `_Observations/research/legal-hallucination-sanctions.md` — has primary URLs to VinciWorks tracker, ABA Op. 512, and CourtListener for ByoPlanet.
- **Currently surfaced on:** Litepaper §1 (named cases anchor "550+ publicly reported hallucination cases" stat) and §3 L1 (extended treatment); assessment failure-mode (regulatory exposure card mentions HIPAA / GDPR but legal-hallucinations specifically appear in the L1 narrative). **Not on `/case-studies/`.** **Borderline:** the "case" is really a *cluster* of cases inside an aggregated stat.
- **Strengths:** Three clean primary anchors (the FindLaw/Justia rulings for Mata; the FindLaw ruling and Sterne Kessler tracker for ByoPlanet; ABA's published opinion for Op. 512). The aggregated stat (550+, 712 decisions) is independently tracked by VinciWorks. Multiple publishers in the legal-tech space have written extensive analysis.
- **Weaknesses:** Borderline as a "case." If treated as a single composite card, the framing has to be careful — the named anchors (Mata, ByoPlanet) are vehicles for a structural story, not stand-alone cases. The *Mata* sanction was modest ($5K) — the narrative weight is on the precedent, not the financial impact.
- **Ambiguity / [unverified]:** Repo's `legal-hallucination-sanctions.md` cites the ByoPlanet sanction as "$86,000" — Sterne Kessler and VinciWorks both cite the figure as "nearly $86,000" or "approximately $85,907." Phase B should resolve to the precise figure from the July 17, 2025 sanctions order.
- **Bibliography:**
  1. *Mata v. Avianca, Inc.*, 678 F.Supp.3d 443 (S.D.N.Y. 2023) — primary ruling. https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2022cv01461/575368/54/ (also at https://caselaw.findlaw.com/court/us-dis-crt-sd-new-yor/2335142.html)
  2. *Mata v. Avianca, Inc.*, Wikipedia entry — well-sourced overview with attorney names and timeline. https://en.wikipedia.org/wiki/Mata_v._Avianca,_Inc.
  3. *ByoPlanet International, LLC v. Johansson and Gilstrap*, S.D. Fla., July 17, 2025 sanctions order. https://caselaw.findlaw.com/court/us-dis-crt-sd-flo/117513089.html
  4. American Bar Association, Standing Committee on Ethics and Professional Responsibility, "Formal Opinion 512: Generative Artificial Intelligence Tools," July 29, 2024. https://www.americanbar.org/groups/professional_responsibility/publications/professional_lawyer/2024/formal-opinion-512/
  5. Sterne Kessler, "AI IP Year in Review — AI Hallucinations in Court Filings and Orders: A 2025 Review of Sanctions Across the Courts and Rule Proposals," 2026. https://www.sternekessler.com/news-insights/insights/ai-ip-year-in-reviewai-hallucinations-in-court-filings-and-orders-a-2025-review-of-sanctions-across-the-courts-and-rule-proposals/
  6. VinciWorks, "When AI hallucinates and lawyers pay: The $86K legal wake-up call," 2025. https://vinciworks.com/blog/when-ai-hallucinates-and-lawyers-pay-the-86k-legal-wake-up-call/ — VinciWorks also maintains the running case tracker the repo cites (https://vinciworks.com/blog/ai-hallucinations-courts/).
  7. *NexLaw*, "AI Hallucination Sanctions 2026: The Complete Guide for US Lawyers," 2026. https://www.nexlaw.ai/blog/ai-hallucination-sanctions-2026/ — running aggregator.
  8. *Relativity*, "AI Case Law Update: The Lamborghini Doctrine of Hallucinations," 2025 — coverage of the *ByoPlanet* sanctions order. https://www.relativity.com/blog/ai-case-law-update-the-lamborghini-doctrine-of-hallucinations/

### Class A — Success-mode candidates (extension pass)

The original A1–A9 roster skewed failure-heavy, particularly at L1 and L2 where every published card is a cautionary tale (Samsung, Klarna, Air Canada, Duolingo). This section appends success-mode candidates surfaced through fresh research at the end of April 2026, written to the same depth as the A1–A9 detail blocks. They are *candidates* — Phase B will decide which graduate to `/case-studies/` cards, but each survived a research pass, has 3–6 authoritative external sources, and a candid weakness section. Naming convention: A10–A14 are L1 success candidates; A15–A18 are L2 success candidates.

#### A10 · Rao + Dixon F2F (factory-to-factory) writing pipeline
- **Level:** L1 (success — organic protocol emergence at individual scale)
- **Year:** Mid-2025 (the *Have Your Factory Call My Factory* essay codifies the pattern; the practice itself dates from earlier)
- **Frame:** Venkatesh Rao describes his collaboration with editor Jenna Dixon (also referenced in the repo as the editor figure in Rao's writing pipeline) as two independent AI-enabled "factories" handing off intermediate artifacts. Rao operates "at the shell level, like a factory floor supervisor"; Dixon runs her own pipeline; the handoff is "a shared Dropbox folder plus a 'manuscript transmittal' server she's set up for metadata." Neither party uses a shared editing surface, neither imposes the other's tooling, and the coordination protocol — the metadata server + folder discipline — is what makes the handoff legible. The writing gets shipped; the protocol is bilateral, organic, and entirely unsanctioned by any institution. This is the canonical "L1 success" pattern: protocols emerge at the boundary, not the centre.
- **Failure or success mode:** Success — organic protocol emergence. Specifically the Folkway/Guild positive case CONTENT-007 commissioned. Demonstrates that L1 is not synonymous with "no protocol" — it's "no *centrally sanctioned* protocol." The Rao/Dixon pipeline has plenty of protocol; what it lacks is institutional ratification.
- **Archetypes most relevant:** Folkway (the broader pattern of individual practitioners running personal AI factories below institutional visibility), Guild (the sophistication-concentrated-at-the-individual-practitioner shape that pre-dates platform absorption), Tinkerer (Rao's own posture as the shell-level orchestrator).
- **Function affected:** Content production / publishing (specifically writing-and-editing collaboration). Generalisable to any two-party knowledge-work handoff.
- **Source in repo:** `_Observations/research/rao-factory-to-factory.md` (already an Entry; promoted from "borderline" to a full Class A success block here).
- **Currently surfaced on:** Litepaper §4 (vignette, naming Rao + the editor); blog SIG-update post (referenced as the F2F pattern). **Not on `/case-studies/`, not on the homepage explore card.** Repo's `_Observations/research/rao-factory-to-factory.md` is the deepest grounding.
- **Strengths:** Primary-source grounding from Rao himself (the original essay is in the SOP corpus). The case is the *cleanest* L1 success in the repo because (a) it has an identified named pair, not an aggregate; (b) it surfaces the specific protocol artifact (Dropbox + metadata server) that makes the coordination work; (c) it grounds the Folkway/Guild archetypes that currently have no full-card representation. Closes the CONTENT-007 gap directly.
- **Weaknesses:** The "case" is two individuals collaborating, not an institutional actor. The standard reader question — "what does this teach my 5,000-person organisation?" — does not have an obvious answer; the litepaper's framing positions F2F as a pattern that scales bottom-up via Guild → Architect-in-domain, but that arc is theoretical not empirical. The case can be mythologised as "all you need is a Dropbox folder," which it is not — Rao and Dixon are unusually sophisticated practitioners. Honest framing: this is the L1 success *mode*, not a recipe for L1 success at scale.
- **Tension with existing Class A failure cases:** Sharpens Samsung. Samsung's three engineers were also operating in F2F-mode (independent shell-level workflows passing artifacts) — but without the metadata layer that made the Rao/Dixon handoff governable. The contrast is a teaching pair: "shadow AI without a handoff protocol fails (Samsung); shadow AI *with* a handoff protocol succeeds (Rao/Dixon)." This is a stronger pedagogical pairing than Samsung-alone.
- **Bibliography:**
  1. Venkatesh Rao, "Have Your Factory Call My Factory," *Protocolized* / Summer of Protocols, 2025. https://protocolized.summerofprotocols.com/p/have-your-factory-call-my-factory — primary source; the F2F pattern is articulated here.
  2. Local copy in repo: `Resources/Have-Your-Factory-Call-My-Factory.pdf` (cited in `_Observations/research/rao-factory-to-factory.md`).
  3. Cross-reference: Venkatesh Rao, "AI and Org Design," NPC Memo. https://npc.here.now/ai-org/ — companion essay laying out the org-design implications of F2F.
  4. Cross-reference: `_Observations/research/finding-fault-lines.md` (Protocols for Business SIG) — applies the F2F insight to enterprise firms.
  5. Cross-reference: `_Observations/research/uber-agentic-shift.md` — the platform-scale instantiation of the same pattern (Code Inbox is the Uber-internal F2F handoff protocol).

#### A11 · Simon Willison — datasette + LLM CLI (early personal AI tooling)
- **Level:** L1 (success — solo practitioner building production AI tooling before institutional sanctioning patterns existed)
- **Year:** 2017 (datasette launched) → November 2023 (the `llm` CLI public release) → ongoing through 2024–2026 (continuous tool-shed publication)
- **Frame:** Simon Willison — co-creator of Django, ex-Eventbrite/Lanyrd — has spent the last several years publishing a sustained body of personal AI tooling on his weblog and as open-source CLI tools. His `llm` package is a CLI utility and Python library for interacting with OpenAI, Claude, Gemini, Llama and dozens of other models, both via remote APIs and locally. His `simonw/tools` GitHub repository contains 77 HTML+JavaScript apps and 6 Python apps, "every single one built by prompting LLMs," with new prototypes added per week. Willison has explicitly framed his practice as "vibe-coding" — throwing absurd ideas at LLMs until they almost-sort-of work as a way to accelerate intuition-building. Crucially, this is happening *without an institution mediating* — Willison is one person, publishing in public, shipping tooling that other practitioners adopt and that informs how the broader software-engineering community understands AI use.
- **Failure or success mode:** Success — solo practitioner inventing the personal protocol layer in public. The "success" is twofold: (a) the tooling itself is durable and adopted (`llm` is a reference implementation in the LLM-CLI category); (b) the *practice of building in public* is itself the protocol — Willison's blog has become one of the canonical "how to actually use this stuff" sources for the developer community.
- **Archetypes most relevant:** Tinkerer (the canonical individual-experimentation posture), Folkway (the broader pattern of solo developers shipping AI tooling), Guild (the sophistication-concentrated-at-the-individual shape that institutional actors lag behind).
- **Function affected:** Engineering / developer tooling. Willison's audience is other developers, so the case is also implicitly about *teaching* as a function (the blog is the deliverable).
- **Source in repo:** **None.** Phase B should commission a `_Observations/research/willison-personal-ai-tooling.md` entry.
- **Currently surfaced on:** Not anywhere in the repo currently. Pure addition.
- **Strengths:** The output is verifiable in public (the GitHub repo, the published `llm` package, the blog archive going back years). Willison is a credentialed developer whose work has been independently covered by The Pragmatic Engineer (Orosz interviewed him specifically about AI-tools-without-the-hype). The case demonstrates a different L1 shape from Rao/Dixon: not bilateral handoff, but *solo + publish* as the protocol-emergence mechanism.
- **Weaknesses:** Willison is an outlier — a Django co-creator with a 20-year personal-blogging practice and unusually deep tooling instincts. Risk of mythologising into "anyone can do this" when the precondition is decades of accumulated craft. The case also doesn't generalise cleanly to enterprise contexts: Willison is his own customer, his own QA, and his own distribution channel, which are conditions most organisational L1 actors do not have. Honest framing: this is a *demonstration of what L1 success looks like in the wild*, not a transferable recipe.
- **Tension with existing Class A failure cases:** Less direct than Rao/Dixon. The closest tension is with the legal-hallucination cluster (A9): both are L1 cases involving solo professionals using AI in production. The contrast is *what protocol they have for verifying AI output*. Willison's protocol is "publish in public, get corrected by readers, iterate" — a lightweight reputational protocol. The sanctioned attorneys had no equivalent. The contrast surfaces the load-bearing claim: it's not the absence of institutional sanctioning that fails L1, it's the absence of *any* verification protocol.
- **Bibliography:**
  1. Simon Willison, personal weblog. https://simonwillison.net/ — primary source; the LLM tag is the running archive of his AI work.
  2. Simon Willison, `llm` documentation site. https://llm.datasette.io/ — primary source for the CLI tool.
  3. `simonw/tools` GitHub repository. https://github.com/simonw/tools — primary source for the "every tool built by prompting" claim.
  4. Gergely Orosz, "AI tools for software engineers, but without the hype – with Simon Willison," *The Pragmatic Engineer*, 2024. https://newsletter.pragmaticengineer.com/p/ai-tools-for-software-engineers-simon-willison — independent journalistic coverage; positions Willison as the practitioner-canonical voice in the LLM-CLI space.
  5. Simon Willison, "How I use LLMs to help me write code," *Substack*. https://simonw.substack.com/p/how-i-use-llms-to-help-me-write-code — the canonical first-person methodology essay.
  6. Michael Lynch, "Notes from Simon Willison's Interview on Software Misadventures," *mtlynch.io*. https://mtlynch.io/notes/simon-willison-software-misadventures/ — third-party synthesis with quotable claims about his personal practice.

#### A12 · YC F24/W25/S25 cohort — small-team production AI (HumanLayer, Ambral, Vulcan)
- **Level:** L1 → L2 trajectory (success — small teams shipping production AI without governance overhead, then building lightweight protocols as they grow)
- **Year:** F24 (Fall 2024) → W25 (Winter 2025) → S25 (Summer 2025) — three consecutive YC batches with documented Claude Code adoption; Anthropic's own case-study post published 2025–2026.
- **Frame:** Anthropic's own published case study covers three YC startups: HumanLayer (F24, built its entire platform with Claude Code), Ambral (W25, scaling AI-powered account management with Claude Code + Claude Agents SDK), and Vulcan Technologies (S25, regulatory-complexity tooling). Common pattern: 1–5 person teams; Claude Code as the primary engineering surface; no separate AI-governance function (the team *is* the governance); shipping production code that customers pay for, often within weeks of starting. Pragmatic Engineer corroborates the broader pattern: "44% of profitable SaaS products are now run by a single founder" (Stripe Indie Founder Report 2024). The protocol layer in these orgs is the founder's *own discipline* — eval scripts, git hygiene, customer feedback loops — not a separate review function.
- **Failure or success mode:** Success — protocol-via-discipline at small scale. The "L1 success" claim here is specifically that these teams have *no* sanctioning layer (because there's no IT department to sanction), no L2-style mandate (because there's no internal politics to mandate against), and yet ship production AI safely because the founders are simultaneously the engineers, the QA, and the customers' counterparty.
- **Archetypes most relevant:** Tinkerer (the founder posture), Folkway (the cohort-wide pattern), Vanguard (some of these teams move aggressively in public — HumanLayer's Anthropic case-study is itself a Vanguard-shaped move).
- **Function affected:** All — these are full-stack small companies; engineering is the visible function, but the founder is also doing sales, ops, and customer success.
- **Source in repo:** **None.** Phase B should commission a `_Observations/research/yc-small-team-ai-production.md` entry.
- **Currently surfaced on:** Not in the repo. Pure addition.
- **Strengths:** Anthropic's own case-study post is verifiable; YC's cohort lists are public; the named startups are tractable for follow-up research. The case fills the obvious gap in the existing roster: every Class A case so far is a 1,000+ employee org. The "small team" Class A is a different *shape* of success and surfaces a different bottleneck (the founder's own discipline + the customer-feedback loop, rather than institutional governance).
- **Weaknesses:** YC startups are a *selected* population — Anthropic's case study is marketing material as much as documentary, and the three named startups are not yet at scale where their patterns are stress-tested by enterprise complexity. The risk of mythologising: "you don't need governance, just be a YC startup." Honest framing: this works at 1–5 people because the team *is* the protocol; the question is what happens at 20, 100, 500. Likely outcome: each of these orgs either crosses into L2 deliberately (Vanguard route) or fails the transition. Phase B research should track which.
- **Tension with existing Class A failure cases:** Sharpens Klarna. Klarna mandated AI top-down at 5,000+ scale and the protocol layer was "the mandate" with no compensating discipline. The YC pattern shows that the missing ingredient is not "more governance" but *the founder/operator-as-the-protocol*. At 5 people the founder is the protocol; at 5,000 the founder cannot be the protocol; the L1→L2 transition is precisely about what replaces the founder-as-protocol layer. The YC case implicitly asks the L2 question without answering it.
- **Bibliography:**
  1. Anthropic, "How three YC startups built their companies with Claude Code," *Anthropic Blog*, 2025–2026. https://claude.com/blog/building-companies-with-claude-code — primary source; the named-cohort case study.
  2. Y Combinator, "Inside Claude Code With Its Creator Boris Cherny" (YC Startup Library). https://www.ycombinator.com/library/NJ-inside-claude-code-with-its-creator-boris-cherny — companion source; YC's own framing of the AI-engineering-team pattern.
  3. Y Combinator companies — AI category index, 2026. https://www.ycombinator.com/companies/industry/ai — population-level grounding for the cohort claim.
  4. Stripe, "2024 Indie Founder Report," 2024 — referenced in: https://startup.info/the-solo-founders-content-stack/ — for the "44% of profitable SaaS products run by a single founder" anchor stat.
  5. Freemius, "AI-Driven, Founder-Led: The 2025 State of Micro-SaaS," 2025. https://freemius.com/blog/state-of-micro-saas-2025/ — corroborating quantitative grounding.

#### A13 · [Dropped] Anonymous "shadow AI with thin protocol layer"
- **Level:** L1
- **Year:** N/A
- **Frame:** The brief asked about "anyone who deliberately *kept* shadow-AI usage but added a thin protocol layer (incident-log only, no permission gates) — this is the 'pre-protocol that works' L1." Research turned up a lot of essay-level *advice* to do this (multiple SIG / consulting blog posts arguing for "log don't gate") but no specific named org with a public account of having done it. The closest pattern in the literature is Stripe's Toolshed + minions architecture — but Stripe is a 5,000+ person company and its protocol layer is far more than incident-log-only; that case belongs in L3, not as an L1 success.
- **Status:** Dropped from this pass for lack of substantiating material. A named org for "shadow AI + incident log only" would be an excellent L1 success card — but Phase B should commission research, not assume the case exists.

#### A14 · Wikipedia's AI-policy emergence (Folkway-pattern at community scale)
- **Level:** L1 (success — community-driven protocol emergence around AI-generated content, mid-2023 onwards)
- **Year:** 2023 (first AfDs for AI-generated articles) → 2024–2025 (WP:WikiProject AI Cleanup formalised) → 2026 (multiple WP-language editions adopt explicit AI-content guidelines)
- **Frame:** Wikipedia's English edition is one of the few public-facing organisations that has watched generative-AI content arrive *as an exogenous shock* to an existing protocol regime, then evolved bottom-up community policy in response. Volunteer editors set up WikiProject AI Cleanup in 2024 to flag and rewrite AI-generated articles; the policies governing what is permitted are community-debated, not WMF-mandated; the protocol layer (WP:V verification, WP:RS reliable sources, etc.) was *already in place* and the AI question became "how do we apply existing protocols to this new content shape." The Folkway/Guild dynamic is unusually visible because Wikipedia's deliberation happens in the open. This is the closest the public web has to an "organic L1 success" at organisation-scale.
- **Failure or success mode:** Success-with-asterisks. The community is successfully *naming* the problem and applying existing verification protocols. The asterisk: the volume of AI content is rising faster than the cleanup project can absorb, and the long-run question is whether Wikipedia's existing protocol layer scales. As of early 2026 the answer is "barely yes." This would be a "Folkway-as-success" L1 case but with honest acknowledgement that the L1 protocol may be running out of headroom.
- **Archetypes most relevant:** Folkway (the entire Wikipedia editor community is the canonical Folkway), Guild (the AI Cleanup project specifically), Warden (the experienced editors who flag and revert).
- **Function affected:** Content / editorial / civic infrastructure. Generalisable to any community-moderated content surface.
- **Source in repo:** **None.** Phase B should commission a `_Observations/research/wikipedia-ai-content-policy.md` entry.
- **Currently surfaced on:** Not in the repo. Pure addition (and provisional — flagged for Phase B research before card promotion; the Wikipedia case is *plausible* as an L1 success but the writeup should land after a deeper read of the actual WP:AICLEANUP and WP:LLM project pages).
- **Strengths:** Wikipedia is a uniquely transparent organisation — every policy debate is in public, every edit is logged, the cleanup project has its own public dashboard. The case is also one of the very few that crosses the "is this a real organisation?" test cleanly while still being community-protocol-driven rather than corporate-protocol-driven.
- **Weaknesses:** This is a *flagged candidate* — the source bibliography below is illustrative; Phase B should confirm before promoting to a card. Wikipedia's voluntarist governance does not generalise to enterprise contexts. The case may also be more accurately described as "L1 trying to hold against L2-scale pressure" — i.e. a stress test of L1, not a clean success.
- **Tension with existing Class A failure cases:** Less direct. Wikipedia is the inverse Samsung — it has a protocol layer (WP:V, WP:RS) *predating* AI; the question is whether that protocol layer scales to AI-generated content. Samsung had no protocol layer at all. Their L1 trajectories are mirror-image: Wikipedia is testing whether existing protocol survives the AI shock; Samsung is the case of no protocol being shocked into one.
- **Bibliography:**
  1. WikiProject AI Cleanup, English Wikipedia. https://en.wikipedia.org/wiki/Wikipedia:WikiProject_AI_Cleanup — primary source for the cleanup project's scope and methodology.
  2. WP:LLM (Wikipedia policy on Large Language Models). https://en.wikipedia.org/wiki/Wikipedia:Large_language_models — primary source for the policy itself.
  3. Coverage from 2024–2025 in *404 Media*, *Ars Technica*, and *The Verge* on the AI-content-cleanup effort (specific URLs to be confirmed in Phase B research).
  4. Cross-reference: this case is structurally adjacent to the Mann Gulch / Wag Dodge "improvise from existing protocols under stress" pattern the litepaper §3 L2 invokes — worth flagging the parallel.

#### A15 · OpenAI's own Forward-Deployed Engineering practice
- **Level:** L2 (success — sanctioned-with-deliberate-protocol from day one); the practice itself enables L2→L3 transitions at customer organisations
- **Year:** 2024 (Colin Jarvis joins as FDE lead; team starts at 2 people) → end-2024 (~52 FDEs) → 2025–2026 (continued growth; named customers include Morgan Stanley, T-Mobile, Klarna, semiconductor manufacturers)
- **Frame:** OpenAI built its FDE practice deliberately as a *protocol* between vendor capability and customer operational reality. FDEs embed with customers spending $10M+/year, build evaluation frameworks, implement guardrails, and iterate with users over months. The case is double-headed: (a) OpenAI itself successfully sanctioned and protocolized this customer-facing function from day one, growing it from 2 to ~52 people in roughly a year while maintaining engineering quality; (b) the FDE customers (Morgan Stanley achieved 98% adoption; portfolio-wide 20–50% efficiency gains) are themselves L2→L3 transition cases enabled by the protocol layer the FDE provides. This is the closest "Vanguard sanctioned with deliberate review protocol from day one" case in the public record. Armstrong's Hottest-Job-in-Tech essay (already in the repo as `armstrong-fde.md`) names OpenAI's FDE program as the canonical L2→L3 transition role.
- **Failure or success mode:** Success — protocol-as-product-strategy. The FDE practice itself is the protocol layer that lets enterprise customers cross L2→L3 without building the capability internally. OpenAI's $1M+ contract floor is the price signal: the L2→L3 transition is expensive enough that frontier vendors are willing to embed engineering talent to make it happen.
- **Archetypes most relevant:** Architect (the FDE team is building reusable platform abstractions out of customer-specific work), Integrator (workflow-by-workflow embedding), Vanguard (OpenAI's posture in scaling the practice).
- **Function affected:** Customer success / professional services / engineering. From the *customer's* side, all functions (since FDEs deploy across whatever customer function is the highest-value problem).
- **Source in repo:** `_Observations/research/armstrong-fde.md` (already an Entry); `_Observations/research/uber-agentic-shift.md` (referenced as an end-state). Phase B could expand with a dedicated `_Observations/research/openai-fde-program.md` entry sourced from the ZenML LLMOps writeup.
- **Currently surfaced on:** Litepaper §3 L2 (FDE reference with Armstrong quote and Workday 2012 IPO precedent); litepaper §3 L3 (gravel-road quote from Scianna). **Not on `/case-studies/` as a card.**
- **Strengths:** Unusually rich primary sourcing — Armstrong's essay is canonical, OpenAI's own job listings provide ongoing primary documentation of the role, and the ZenML writeup is a substantive secondary source with quantitative anchors (98% Morgan Stanley adoption, 20–50% efficiency, team-growth trajectory). The case is also load-bearing for the litepaper's L2→L3 transition argument — promoting it to a `/case-studies/` card would tighten the litepaper-to-card linkage.
- **Weaknesses:** The case is *about* OpenAI's customers as much as about OpenAI itself, which makes the "subject" of the card ambiguous (is the case OpenAI, or Morgan Stanley, or the FDE pattern?). The $1M contract floor also makes this an *elite* L2→L3 mechanism — most organisations cannot afford an FDE, so the case can read as "here's the L2→L3 transition mechanism if you have $10M to spend." Honest framing: this is the *frontier's* L2 success; the median org's L2 success will look different.
- **Tension with existing Class A failure cases:** Strongly sharpens Klarna. Klarna is an OpenAI/FDE customer (named in the ZenML writeup). The FDE relationship is the *exact* protocol layer Klarna's mandate-without-output-governance failure pattern needed. The L2 failure (Klarna's mandate) and the L2 success protocol (OpenAI's FDE engagement) are the same case from opposite sides. This is the cleanest A→A pairing in the inventory.
- **Bibliography:**
  1. Evan Armstrong, "The Hottest Job in Tech," *The Leverage*, August 5, 2025. https://theleverage.beehiiv.com/p/the-hottest-job-in-tech — primary source; already in repo.
  2. ZenML LLMOps Database, "OpenAI: Forward Deployed Engineering: Bringing Enterprise LLM Applications to Production." https://www.zenml.io/llmops-database/forward-deployed-engineering-bringing-enterprise-llm-applications-to-production — secondary source with quantitative anchors (98% Morgan Stanley adoption, 20–50% efficiency, team growth from 2 → 52).
  3. OpenAI careers — Forward Deployed Engineer (NYC + SF + Platform). https://openai.com/careers/forward-deployed-engineer-(fde)-nyc-new-york-city/ and https://openai.com/careers/forward-deployed-engineer-(fde)-sf-san-francisco/ — primary source for ongoing practice.
  4. Mark Scianna, "How to Build Your Forward Deployed Engineering Team," *Per Aspera*, September 17, 2025 — already in litepaper bibliography. The "gravel road" methodology source.
  5. Gergely Orosz, "What are Forward Deployed Engineers, and why are they so in demand?" *The Pragmatic Engineer*. https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers — independent industry-coverage source.

#### A16 · Palantir's FDE pattern (the L2 historical analog OpenAI inherited)
- **Level:** L2 (success — historical, ~2010s onwards; the canonical FDE practice that OpenAI's program inherits)
- **Year:** Early 2010s (FDE model invented at Palantir for intelligence-agency customers) → 2016 (Palantir had more FDEs/"Deltas" than software engineers) → present (FDE remains the central role at Palantir)
- **Frame:** Palantir invented the Forward Deployed Engineer model in the early 2010s when intelligence-agency customers could not openly share what they needed. Instead of asking customers what they wanted, Palantir put engineers directly inside customer environments — the "Deltas" — to learn by observing, experimenting, and building in real time. The "gravel road to paved highway" methodology (Scianna canonised the term in 2025, but the practice originated at Palantir) describes the core protocol: FDEs build rough customer-specific solutions; the core engineering team studies them, finds patterns across customers, and elevates patterns into platform features. This is the structural mechanism the litepaper §3 L2 invokes when describing how Level 2 can be done well: a deliberately-designed embed-discover-elevate protocol, not "just sanction the tools and hope."
- **Failure or success mode:** Success — protocol-as-business-model. Palantir is unusual because the FDE model is not a service overlay on top of the product; the FDE *is* the product-discovery mechanism. Until 2016 Palantir had more FDEs than software engineers — meaning the company's primary cost structure was the protocol layer, and the platform was the *output* of running the protocol at scale.
- **Archetypes most relevant:** Architect (the platform-team-absorbing-patterns side), Integrator (the FDE-embedding side), Traveller (Palantir's whole business model is built around the FDE-driven workflow).
- **Function affected:** Originally defence / intelligence; expanded to government, healthcare, manufacturing, finance over the 2010s and 2020s.
- **Source in repo:** **None.** Referenced obliquely in the litepaper via Armstrong's FDE framing but not as a Palantir-specific case. Phase B should commission a `_Observations/research/palantir-fde-origins.md` entry.
- **Currently surfaced on:** Litepaper §3 L2 (FDE reference, Armstrong source) — but Palantir is not named in the litepaper, only the role pattern. **Not on `/case-studies/`.**
- **Strengths:** Decade-long track record — the FDE model has now run continuously at Palantir for ~15 years and is independently studied as a category of one. Multiple substantive secondary sources (Pragmatic Engineer, Everest Group, FDE Academy, Palantir's own engineering blog). The case provides historical depth that the OpenAI case (only ~2 years old) cannot.
- **Weaknesses:** Palantir is a politically charged company; using it as a case carries reputational baggage that other Class A cases do not. The case also generalises poorly — Palantir's FDEs are deeply specific to defence/intelligence customer culture, and the "engineer-embeds-with-customer" model is much harder to replicate in commercial-SaaS contexts. Honest framing: Palantir is the historical *prototype* of the L2 success protocol; OpenAI's adaptation is what most current commercial AI vendors can actually emulate.
- **Tension with existing Class A failure cases:** Sharpens both Klarna (mandate-without-protocol) and Air Canada (deployment-without-accountability-protocol). The Palantir contrast: deployment-as-protocol-discovery, not deployment-as-product-feature. If Klarna had run AI customer-service the way Palantir runs an intelligence-agency Delta engagement — embed an FDE for six months, build the gravel road, elevate the patterns — the mandate-without-output-governance failure mode probably does not occur.
- **Bibliography:**
  1. Gergely Orosz, "What are Forward Deployed Engineers, and why are they so in demand?" *The Pragmatic Engineer*. https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers — primary industry-press source; covers the Palantir origin story.
  2. Palantir Engineering Blog, "A Day in the Life of a Palantir Forward Deployed Software Engineer." https://blog.palantir.com/a-day-in-the-life-of-a-palantir-forward-deployed-software-engineer-45ef2de257b1 — primary source from inside Palantir.
  3. Everest Group, "Palantir: Inside the category of one – forward deployed software engineers." https://www.everestgrp.com/palantir-inside-the-category-of-one-forward-deployed-software-engineers-blog/ — analyst coverage with quantitative grounding.
  4. FDE Academy, "How Palantir Invented the Forward Deployed Engineer Model." https://fde.academy/blog/how-palantir-invented-the-forward-deployed-engineer-model — synthesis of the historical record.
  5. Marty Cagan / Silicon Valley Product Group, "Forward Deployed Engineers." https://www.svpg.com/forward-deployed-engineers/ — product-organisation perspective.
  6. Balaji Bal, "Understanding Palantir: Forward‑Deployed Engineers and the Making of an Unusual Platform Company," *Medium*, March 2026. https://medium.com/@balajibal/understanding-palantir-forward-deployed-engineers-and-the-making-of-an-unusual-platform-company-494dc7812f24 — recent long-form synthesis.

#### A17 · BBVA reframed — L2→L3 transition success (not just L4)
- **Level:** L2 → L3 (success — the original A8 entry tags BBVA L4; this re-framing argues BBVA reached L4 *because* it executed L2→L3 well, and the L2→L3 portion is a distinct, teachable success story)
- **Year:** May 2024 (3,300 ChatGPT Enterprise accounts) → late 2024 (11,000 accounts) → 2025 (rolling out to all 120,000 employees) → late 2025 (20,000+ custom GPTs) — same timeline as A8, re-framed.
- **Frame:** The original A8 entry (above) tags BBVA as L3 → L4. This extension entry argues that the L2 → L3 portion of BBVA's arc is a teachable success story in its own right and worth a distinct framing. Specifically: BBVA's May 2024 deployment was an L2 move (sanctioned ChatGPT Enterprise rollout), but unlike Klarna's L2 mandate it was paired *from day one* with a custom-GPT design discipline — specific named GPTs for specific functions ("Credit Analysis Pro" for risk analysts, legal-query GPTs for the legal function, marketing-process GPTs). That design discipline is the L2→L3 transition protocol. The L4 outcome (20,000+ custom GPTs, full 120,000-employee rollout) is downstream of having executed the L2→L3 transition protocol consistently across functions. This re-framing makes the BBVA case more useful as a *transition* exemplar than as an L4 endpoint.
- **Failure or success mode:** Success — function-by-function L2→L3 transition discipline. The teachable claim: BBVA reached infrastructural-scale (L4) outcomes by treating each function's AI deployment as an L2→L3 transition project (sanctioned tool + designed workflow), not as a top-down mandate.
- **Archetypes most relevant:** Architect (the institutional-scale platform), Integrator (workflow-by-workflow rollout), Ratifier (the BBVA Innovation team as the central ratifying body for new GPTs).
- **Function affected:** All cross-cutting (legal, risk, marketing, talent, finance, customer-facing).
- **Source in repo:** Same as A8 — `_Observations/research/accenture-art-of-ai-maturity.md` (one-line citation only). Phase B should commission a dedicated `_Observations/research/bbva-l2-l3-transition.md` entry.
- **Currently surfaced on:** Same as A8.
- **Strengths:** Same primary sources as A8 (OpenAI case studies, BBVA News, Fintech Global) but the re-framing surfaces the *protocol-by-function* mechanism that the L4-stat framing obscures. Closes the L2 success-mode gap directly: a real org, named functions, named GPTs, quantified outcomes (80% efficiency in some workflows).
- **Weaknesses:** Inherits A8's weakness (BBVA is reported on by OpenAI's marketing arm, which biases the narrative toward success). The L2→L3 reframing is *interpretive* — BBVA's own materials frame it as L4-scale infrastructure, not as a transition success. The reframe is editorially warranted but should be acknowledged.
- **Tension with existing Class A failure cases:** Direct contrast with Klarna (L2 failure) and Shopify (L2 mixed). Klarna deployed AI without a function-by-function protocol; Shopify mandated AI without a function-by-function competency standard; BBVA deployed AI with a function-by-function GPT-design discipline. The three cases together form a tight L2 case-cluster: same level, same era, three different protocol postures, three different outcomes.
- **Bibliography:** Same as A8 (re-use the seven OpenAI / BBVA / Fintech Global / AI News URLs). No new external URLs introduced by this re-framing.

#### A18 · Stripe Toolshed + minions (L3 success at internal-platform scale)
- **Level:** L2 → L3 (success — sanctioned-with-platform-discipline-from-the-start; transitions cleanly into L3 with the Toolshed MCP architecture)
- **Year:** 2024–2025 (Toolshed development) → 2025–2026 (1,300 PRs/week from "minions"; 1,370 engineers on Claude Code; 10,000-line Scala-to-Java migration in four days)
- **Frame:** Stripe deployed Claude Code across all 1,370 engineers via "a zero-configuration enterprise binary" and built an internal MCP server called Toolshed hosting nearly 500 tools that AI agents can call with a uniform interface. AI coding agents — internally called "minions" — ship roughly 1,300 PRs/week, often kicked off with a Slack emoji. Crucially, Stripe still reviews every AI-generated PR; the review process leans on automated confidence signals (test coverage, synthetic end-to-end tests, blue-green deploys with quick rollbacks) rather than disappearing. Engineers shifted from writing code to reviewing code. This is an *L2 success* (sanctioned with deliberate review protocol from day one) bridging into *L3 success* (the Toolshed + agent-PR review-process *is* the designed workflow).
- **Failure or success mode:** Success — protocol-as-platform. Stripe didn't mandate AI without a review protocol (the Klarna failure); it built the review protocol into the deployment from the start, then formalised it as the Toolshed/MCP layer.
- **Archetypes most relevant:** Architect (Toolshed is a platform-scale Architect move), Integrator (the per-team rollout discipline), Vanguard (1,370-engineer rollout in 2025–2026 is fast for a financial-infrastructure company).
- **Function affected:** Engineering (specifically: PR generation, code review, deployment).
- **Source in repo:** **None.** Phase B should commission a `_Observations/research/stripe-toolshed-minions.md` entry.
- **Currently surfaced on:** Not in the repo. Pure addition. Note that Stripe is mentioned obliquely in the litepaper (via Patrick Collison etc.) but the Toolshed/minions architecture is not.
- **Strengths:** Multiple substantive secondary sources (Lenny's Newsletter, ByteByteGo, Stripe's own engineering blog). Quantitative anchors throughout (1,300 PRs/week, 1,370 engineers, 10,000-line migration in four days). Stripe is independently credible as a careful engineering organisation, which makes the success claim less easily dismissed as marketing.
- **Weaknesses:** Stripe is a software-engineering organisation with unusual cultural alignment for this kind of rollout — replicating the pattern in a non-engineering-led firm is harder. The "1,300 PRs/week" stat is also unverified at primary-source level; the canonical reference is the ByteByteGo / Lenny's Newsletter writeup, which is secondary. Phase B research should confirm the figures from a Stripe-primary source.
- **Tension with existing Class A failure cases:** Sharpens Klarna (Stripe's review-protocol-from-day-one is exactly what Klarna lacked), Shopify (Stripe's competency-by-tooling-design contrasts with Shopify's mandate-by-memo), and complements Uber (A7 — both are engineering-org L3 successes; the difference is Stripe is in financial infrastructure where the regulatory-protocol baseline is higher).
- **Bibliography:**
  1. Lenny Rachitsky, "How Stripe built 'minions' — AI coding agents that ship 1,300 PRs per week," *Lenny's Newsletter — How I AI*, 2025–2026. https://www.lennysnewsletter.com/p/this-week-on-how-i-ai-how-stripe — primary industry-press coverage with the headline numbers.
  2. ByteByteGo, "How Stripe's Minions Ship 1,300 PRs a Week." https://blog.bytebytego.com/p/how-stripes-minions-ship-1300-prs — companion engineering-architecture writeup.
  3. Stripe Engineering, "Can AI agents build real Stripe integrations? We built a benchmark to find out," *Stripe Blog*, 2025. https://stripe.com/blog/can-ai-agents-build-real-stripe-integrations — primary source from Stripe on agent-evaluation methodology.
  4. Composio, "Stripe MCP Integration with Claude Code." https://composio.dev/toolkits/stripe/framework/claude-code — third-party perspective on Stripe's MCP exposure.
  5. Stripe MCP documentation. https://docs.stripe.com/mcp — primary source for the externally-exposed MCP surface.

## Class B — Technology arc cases

A note before the seeds: every one of the 6 IA-007 seed Class B cases is *already in use* across the published site — as historical-parallel cards on `/levels/`, as the containerization "throughline" across all 5 result pages of the assessment, as historical-parallel asides in the litepaper, and as Walmart-EDI / 2021-Facebook-BGP mentions in the blog post. Two additional Class B cases (NotPetya/Maersk and 2021 Facebook BGP) surface from the audit. The Phase B work is *promotion + unification + research-deepening*, not commissioning from blank.

| # | Title | Era | Likely level mapping | Repo mentions | Anchor sources |
|---|---|---|---|---|---|
| B1 | Containerization (shipping) — Malcom McLean → ISO standard → Maersk/Sea-Land | 1956 → ~2000 | Spans L1 (1950s–60s, pre-standard) → L2 (ISO mandate 1965–75) → L3 (intermodal design 1975–90) → L4 (universal adoption late 1980s) | Assessment "containerization" throughline (all 5 results); litepaper §3 L5 (NotPetya as L5 failure); levels page L4 (EDI parallel implicitly grounded in sectoral logistics) | Levinson "The Box"; ICTSI / WSC histories |
| B2 | Containerization (software) — Docker / Kubernetes / Borg | 2013 → 2018 | Trajectory L2 (Docker public release) → L3 (k8s mainstream) → L4 (orchestration substrate) | None located in repo for software-containerization specifically (the term "containerization" in the repo means shipping, not Docker) | Hykes PyCon 2013; Kubernetes 1.0; Borg paper |
| B3 | Spreadsheets + end-user computing — VisiCalc / Lotus 1-2-3 | 1979 → 1990s | L1 (shadow adoption pattern, 1980s) | `/levels/` L1 historical-parallel; assessment L1 historical parallel | Levinson PUP for the era; EuSpRIG for spreadsheet-error literature |
| B4 | Corporate email adoption — Exchange / Lotus Notes / *Zubulake v. UBS* | 1989–96 → 2003 (Zubulake) | L2 (mandate without workflow design); litepaper §3 L2 cites *Zubulake v. UBS* as the L2-forcing-function analog for AI liability | `/levels/` L2 historical-parallel; assessment L2 historical-parallel; litepaper §3 L2 (Zubulake parallel); litepaper §3 L1 (Hotmail/Yahoo shadow-email parallel) | Microsoft Exchange history; Zubulake rulings (Justia / opensource) |
| B5 | Git + CI/CD — BitKeeper crisis → GitHub | April 2005 → April 2008 (GitHub) → 2008–2015 (CI/CD maturity) | L3 (designed workflow); litepaper §3 L3 explicitly: "Git is the reference point. Git did not improve code quality. It created the handoff structure" | `/levels/` L3 historical-parallel; assessment L3 historical-parallel; litepaper §3 L3 + §4 (Git as the reference for emerging AI handoff protocols) | Torvalds Git turns 20; LWN BitKeeper origin story |
| B6 | EDI in retail and manufacturing — Walmart 1988 mandate; P&G partnership | 1988 → late 1990s | L4 (sector infrastructure); litepaper §4 explicitly uses EDI as the L4→L5 historical analog for "agent handoff contracts" | `/levels/` L4 historical-parallel; assessment L3-4 boundary; blog L4 historical-parallel; litepaper §4 EDI analog | Walmart EDI guides; P&G case studies; ANSI X12 history |
| B7 | Internet protocols — TCP/IP "flag day" 1983; BGP; IETF/ICANN | 1974 (Cerf/Kahn paper) → 1983 (ARPANET switchover) → present | L5 (planetary infrastructure); litepaper §3 L5 explicitly: "TCP/IP as the Level 5 template" | `/levels/` L5 historical-parallel; litepaper §3 L5 (BGP hijacking, DNS poisoning as governance failures) | Cerf/Kahn 1974 IEEE paper; ARPANET Wikipedia; CHM Internet at 40 |
| B8 | NotPetya / Maersk 2017 — supply-chain attack via M.E.Doc | June 2017 (5 days from outbreak to global) | L5 (the explicit Level-5 failure mode in the litepaper); two-protocol intersection (containerization + internet protocols) | Litepaper §3 L5 extended treatment ("$300M in 10 days") | Greenberg "Sandworm"; Wired NotPetya retrospective; Maersk earnings disclosure |
| B9 | 2021 Facebook BGP outage — October 4, 2021 | October 4, 2021 (single day, 6–7 hours) | L5 (the working historical-parallel for the levels page L5 card) | `/levels/` L5 historical-parallel; blog L5 historical-parallel | Engineering at Meta postmortem; Cloudflare blog; Wikipedia |

### B1 · Containerization (shipping) — Malcom McLean → ISO → Maersk/Sea-Land
- **Era:** April 26, 1956 (*Ideal-X* Newark→Houston, 58 containers) → 1965–68 (ISO 20ft/40ft standards adopted) → late 1980s (universal sector adoption) → 2000s (invisible default of global trade) → 2017 (NotPetya / Maersk failure mode)
- **Why it parallels AI:** The shipping container is the canonical "protocols turn smooth space into striated space" example used by both Rao (in Evil Twin) and the assessment's containerization throughline. Each Level 1→5 transition in AI maps to a step in the container's standardisation arc: 1950s pre-standard experimentation (L1 shadow); 1965–75 ISO mandate without intermodal infrastructure (L2 mandate without workflow design); 1975–90 intermodal protocols designed end-to-end by Maersk/Sea-Land (L3 designed workflow); late 1980s sector-wide adoption (L4 infrastructure); post-2000s invisible global default (L5 planetary, with NotPetya as its canonical L5 failure mode).
- **Likely level mapping:** **Spans L1 → L5.** This is the only Class B case the assessment uses as a full-arc throughline; preserve that treatment in Phase B.
- **Repo mentions:** Assessment RESULTS object: every one of the 5 result pages has a `containerization:` block (`L1`: McLean 1956 + pre-standard cranes; `L2`: ISO 1965–68 mandate + lagging port infrastructure; `L2-3` boundary: Maersk early intermodal; `L3`: Maersk/Sea-Land 1975–90 vertical integration; `L3-4` boundary: pre-universal adoption late 1980s); litepaper §2 cites the container as the protocol-trade exemplar; litepaper §3 L5 NotPetya / Maersk extended treatment.
- **Anchor sources for future research:**
  1. Marc Levinson, *The Box: How the Shipping Container Made the World Smaller and the World Economy Bigger*, Princeton University Press, 2006 (2nd ed. 2016) — canonical history. https://press.princeton.edu/books/paperback/9780691170817/the-box
  2. World Shipping Council, "History of Containerization" (industry retrospective). (no canonical URL located — research-needed: WSC has a history page that moves)
  3. International Maritime Organization, "ISO Container Series 1 specification (ISO 668)," historical record on the 20ft/40ft standardisation.
  4. Levinson's Marshall paper / *Invention of the Modern World* class lectures (publicly available video — Princeton).
  5. Brian J. Cudahy, *Box Boats: How Container Ships Changed the World*, Fordham University Press, 2006 — Maersk/Sea-Land focused.
- **Open research questions for the future card:** (1) What was Walmart's role specifically in pushing intermodal standardisation (the Walmart-EDI logic transferred to logistics)? (2) Is there a clean 1956-style "first AI protocol" anchor moment to use as a parallel? (3) Should the card use the assessment throughline pattern (one card showing the full arc) or split into one card per level transition?

### B2 · Containerization (software) — Docker / Kubernetes / Borg
- **Era:** March 15, 2013 (Solomon Hykes' PyCon 2013 lightning talk — public Docker debut) → 2014 (1.0) → 2014 (Kubernetes open-sourced by Google) → 2015 (Kubernetes 1.0) → ~2018 (Kubernetes mainstream / orchestration substrate)
- **Why it parallels AI:** Packaging-as-protocol. Docker turned application deployment from a per-environment improvisation into a portable artefact with a defined runtime contract — precisely the protocol-design move IA-007 frames AI tooling as needing. The Docker/Kubernetes arc also shows the *infrastructural absorption* pattern (Borg → public Kubernetes; Kubernetes → cloud-native default) that maps L3 → L4 → L5 trajectory. Notable: this is a *software* containerization; the IA-007 brief and the assessment use "containerization" to mean shipping. The two senses share the protocol-pattern but the surface metaphor is different — Phase B should disambiguate.
- **Likely level mapping:** **Trajectory L2 → L4.** Docker public 2013 = L2 sanctioned use of the runtime; mature internal Kubernetes adoption ~2018 = L3 designed workflow; cloud-native default ~2022+ = L4 infrastructural. Could be one card showing the arc or two (Docker as L2; Kubernetes as L4).
- **Repo mentions:** **None located.** "Container" in the repo always means shipping. Software containerization is referenced in the IA-007 brief (the seed list) but not anywhere in published docs. Phase B should write a fresh `_Observations/research/docker-kubernetes-containerization.md`.
- **Anchor sources for future research:**
  1. Solomon Hykes, "The future of Linux Containers" (lightning talk), PyCon 2013, March 15, 2013 — Docker's public debut. Video: https://www.youtube.com/watch?v=wW9CAH9nSLs (also https://www.youtube.com/watch?v=362sHaO5eGU); index: https://pyvideo.org/pycon-us-2013/the-future-of-linux-containers.html
  2. Docker, "Docker: Nine Years YOUNG," Docker Blog, 2022 (and "Ten Years of Docker" retrospective by Robert Polding, 2026). https://www.docker.com/blog/docker-nine-years-young/
  3. Burns, Grant, Oppenheimer, Brewer, and Wilkes, "Borg, Omega, and Kubernetes: Lessons learned from three container-management systems over a decade," ACM Queue / Communications of the ACM, 2016 — canonical Google retrospective. https://queue.acm.org/detail.cfm?id=2898444
  4. Google Cloud Platform Blog, "Kubernetes 1.0 announcement," July 21, 2015. https://cloudblog.withgoogle.com/products/gcp/kubernetes-v1-released/
  5. Kelsey Hightower, "Kubernetes The Hard Way," ongoing canonical pedagogical text. https://github.com/kelseyhightower/kubernetes-the-hard-way
- **Open research questions for the future card:** (1) Is the "k8s mainstream" date 2018 or later? CNCF survey data could anchor. (2) Which orgs are the *retrospective* equivalents of Klarna/Shopify for software containerization (i.e. the "we mandated Docker before designing the workflow" cases)? Spotify, Stripe, Netflix, Airbnb all have published architecture-evolution stories worth surfacing. (3) Should the AI-era parallel name MCP or LangChain as the equivalent "packaging-as-protocol" move?

### B3 · Spreadsheets + end-user computing — VisiCalc / Lotus 1-2-3
- **Era:** 1979 (VisiCalc on Apple II) → January 1983 (Lotus 1-2-3 launch on IBM PC, $495) → mid-1980s (70%+ market share) → 1990s (Excel displaces; Lotus persists as IT-shadow tool)
- **Why it parallels AI:** The clean L1 historical analog. Finance professionals adopted spreadsheets through individual initiative before IT or management had any policy; individual productivity gains were real; organisational risk from formula errors and uncontrolled data was invisible until it wasn't. Same Folkway/Tinkerer adoption shape Samsung exhibits with ChatGPT. Has the additional value of a spreadsheet-error literature (EuSpRIG) showing measurable downstream cost — a body of evidence AI-era shadow adoption doesn't yet have at the same depth.
- **Likely level mapping:** **L1.** Could also be used as a partial L2 (the Excel-as-default-analytics-tool story) but the L1 framing is the strongest.
- **Repo mentions:** `/levels/` L1 historical-parallel card ("Spreadsheets in accounting — Lotus 1-2-3, mid-1980s"); assessment L1 result `periodTech` block ("Individual accountants used Lotus 1-2-3 on personal computers for work that was officially done on mainframes. IT didn't know.").
- **Anchor sources for future research:**
  1. Stan Liebowitz, "Spreadsheet analysis," chapter from *Winners, Losers, and Microsoft*, 1999 — classic academic treatment. https://personal.utdallas.edu/~liebowit/book/sheets/sheet.html
  2. Steven Levy, "The Spreadsheet Way of Knowledge," *Harper's*, November 1984 — the canonical journalistic essay on spreadsheets and end-user computing.
  3. Dan Bricklin's official VisiCalc page. https://danbricklin.com/visicalc.htm — primary source from the inventor.
  4. Ray Panko / European Spreadsheet Risks Interest Group (EuSpRIG), "Spreadsheet Errors" research literature — the academic basis for spreadsheet-as-shadow-IT-risk claims. http://www.eusprig.org/
  5. Tim Harford, "The tyranny of spreadsheets" (BBC More or Less / *Cautionary Tales* podcast) — for accessible narrative framing, especially around the JPMorgan "London Whale" copy-paste error.
- **Open research questions for the future card:** (1) What's the canonical incident — JPMorgan London Whale (2012)? Reinhart-Rogoff Excel error (2013)? Both? (2) Was there an enterprise "spreadsheet ban" episode parallel to Samsung's ChatGPT ban — i.e. an org that tried prohibition and failed? (3) Does kitification (CONTENT-001 in backlog) trace from this lineage?

### B4 · Corporate email adoption — Exchange / Lotus Notes / *Zubulake v. UBS*
- **Era:** 1989 (Lotus Notes launches) → April 2, 1996 (Microsoft Exchange Server 4.0) → late 1990s (corporate email ubiquity) → 2003–2005 (*Zubulake v. UBS Warburg* — five-ruling sequence on e-discovery and email retention) → 2006 (FRCP amendment; e-discovery becomes formal procedural law)
- **Why it parallels AI:** The L2 historical analog with the cleanest forcing-function arc: mandated broadly without workflow design, then forced into governance by litigation. Litepaper §3 L2 makes the parallel explicit: "*Zubulake v. UBS Warburg* (2003) established that organizations were liable for email they could not produce in discovery. The AI liability cases — Air Canada, legal hallucination sanctions — are playing the same structural role." The Hotmail/Yahoo shadow-email pattern (litepaper §3 L1 historical-parallel) maps to AI's personal-account problem.
- **Likely level mapping:** **L2** for the mandate/Zubulake story; **L1** for the shadow-email-from-personal-accounts subnarrative (litepaper uses both).
- **Repo mentions:** `/levels/` L2 historical-parallel card ("Corporate email — Microsoft Exchange / Lotus Notes, early 1990s"); assessment L2 `periodTech` block; assessment L2-3 `periodTech` ("Corporate email → early Git adoption (transition period)"); litepaper §3 L1 (Hotmail/Yahoo shadow-email parallel) and §3 L2 (Zubulake parallel).
- **Anchor sources for future research:**
  1. *Zubulake v. UBS Warburg LLC*, 217 F.R.D. 309 (S.D.N.Y. 2003) — Zubulake I; the foundational e-discovery ruling. (Multiple subsequent rulings: Zubulake II–V.) https://en.wikipedia.org/wiki/Zubulake_v._UBS_Warburg (for the ruling sequence overview)
  2. Microsoft, "Celebrating 30 Years of Microsoft Exchange," Microsoft Tech Community Blog, 2026. https://techcommunity.microsoft.com/blog/exchange/celebrating-30-years-of-microsoft-exchange/4503439 — canonical timeline.
  3. Tom Pepper / Ray Ozzie origins of Lotus Notes; *cc:Mail* Wikipedia. https://en.wikipedia.org/wiki/Cc:Mail
  4. David Strom, "40 Years of Email," *Web Informant*, 2011. https://blog.strom.com/wp/?p=9770 — long-form history with corporate-email transitions.
  5. *The History of Email at the Smithsonian*, Smithsonian Institution Archives. https://siarchives.si.edu/blog/history-email-smithsonian
- **Open research questions for the future card:** (1) Is there a single "first known case where a CIO mandated email then later regretted it" anecdote? (2) What's the litepaper-style Klarna analog — an org that publicly walked back its email-only mandate? (3) Should this case absorb the related "meeting culture" failure pattern (where email overload drove the rise of meeting-as-coordination-override) as the L2 trade-off?

### B5 · Git + CI/CD — BitKeeper crisis → GitHub
- **Era:** April 3, 2005 (Torvalds begins Git development after BitKeeper licence revocation) → April 6, 2005 (Git announced) → April 2008 (GitHub launches) → 2008–2015 (CI/CD pipeline maturity, Travis CI 2011, Jenkins 2011, CircleCI 2011, GitHub Actions 2018)
- **Why it parallels AI:** The L3 historical analog. Litepaper §4 makes the case directly: "Git is the reference point. Git did not improve code quality. It created the handoff structure — branch, commit, pull request, merge — that allowed code quality to be governed at scale across distributed teams with no central coordinator managing each integration. These emerging protocols are doing the same for AI." The pull-request-as-protocol is the litepaper's load-bearing AI analog. Bonus: Git's own origin (BitKeeper licence crisis → 10-day urgent build) is a vivid story that maps to Samsung's "ban + build internal alternative" arc but at the OSS layer.
- **Likely level mapping:** **L3 → L4.** L3 for the workflow design (PR + branch + CI gates); L4 for the sector-infrastructure status Git/GitHub now occupies.
- **Repo mentions:** `/levels/` L3 historical-parallel ("Git and CI/CD — 2008–2015"); assessment L3 `periodTech` (extensive — Uber as the AI-era instance of exactly this pattern); assessment L2-3 `periodTech` (corporate-email-to-Git transition); litepaper §3 L3 (Git solved multi-developer coordination; Code Inbox = Git for AI-human review boundary); litepaper §4 (Git is the reference point).
- **Anchor sources for future research:**
  1. Linus Torvalds and Jenny Bryan, "Git turns 20: A Q&A with Linus Torvalds," GitHub Blog, April 7, 2025 — primary source from Torvalds on the BitKeeper story. https://github.blog/open-source/git/git-turns-20-a-qa-with-linus-torvalds/
  2. Charles Duan, "A Git Origin Story," *Linux Journal*, 2020. https://www.linuxjournal.com/content/git-origin-story — extended history.
  3. *Git*, Wikipedia — well-cited overview. https://en.wikipedia.org/wiki/Git
  4. Tom Preston-Werner, Chris Wanstrath, P.J. Hyett, GitHub launch announcement (April 2008) — primary launch material.
  5. Jez Humble and David Farley, *Continuous Delivery*, Addison-Wesley, 2010 — canonical CI/CD text.
  6. Chacon and Straub, *Pro Git* (Apress; free online). https://git-scm.com/book/en/v2 — the Git canonical reference; the "Short History of Git" chapter is the cleanest single source. https://git-scm.com/book/en/v2/Getting-Started-A-Short-History-of-Git
- **Open research questions for the future card:** (1) Is there a non-software example of "PR-as-protocol" worth surfacing (e.g. Wikipedia talk-pages, peer-review in scientific publishing)? Either expands the case's reach or muddles it. (2) The Git-vs-Mercurial-vs-Bazaar comparison in 2005–2008 is a real "competing protocol standardisation" story — worth a sidebar? (3) How directly does the Code Inbox / U Review pattern map to Git's PR pattern, and where does the analogy break?

### B6 · EDI in retail and manufacturing — Walmart 1988 mandate; P&G partnership
- **Era:** 1987 (Walmart-P&G integration: bilateral inventory data exchange via EDI + satellite) → 1988 (Walmart top-2,000-supplier EDI mandate) → 1992 (Walmart Retail Link) → late 1990s (sector standard) → present (still the dominant retail B2B exchange protocol; ~65% via AS2)
- **Why it parallels AI:** The L4 historical analog. Litepaper §4 makes the parallel explicit by citing EDI as the historical precedent for "agent handoff contracts" — the L4→L5 transition protocol pattern: "Before EDI, each pair of trading partners negotiated its own data format for purchase orders, invoices, and shipping notices. EDI converted bespoke bilateral coordination into sector infrastructure that made just-in-time supply chains possible. Agent handoff contracts are the AI-era equivalent." The Walmart-mandate story is also the canonical "single dominant actor forces a protocol on a sector" pattern — analogous to a hypothetical L4-shaping AI mandate from a frontier organization.
- **Likely level mapping:** **L4** (sector infrastructure). Has L1/L2 prehistory (pre-mandate experimentation; mandate without infrastructure) but the Walmart-mandate moment is L4-anchoring.
- **Repo mentions:** `/levels/` L4 historical-parallel card ("EDI in retail and manufacturing — late 1980s–1990s. Walmart mandated Electronic Data Interchange for all suppliers..."); assessment L3-4 boundary `periodTech` ("Early EDI adoption / Git at scale (late Level 3)"); blog L4 historical-parallel; litepaper §4 EDI as the L4→L5 analog for agent handoff contracts.
- **Anchor sources for future research:**
  1. *Wal-Mart's EDI Glossary*, 8th & Walton (long-time Walmart-supplier consultancy). https://www.8thandwalton.com/blog/walmart-glossary-edi-electronic-data-interchange/ — practitioner overview of the timeline and mandate.
  2. CIO Magazine, "How Wal-Mart Lost Its Technology Edge," 2007 — on EDI standardisation, retreat from RFID, and the Retail Link history. https://www.cio.com/article/274579/strategy-how-wal-mart-lost-its-technology-edge.html
  3. Robert E. Baligh, "Supply-Chain Partnership between P&G and Wal-Mart," ResearchGate (republished case). https://www.researchgate.net/publication/251289366_Supply-Chain_Partnership_between_PG_and_Wal-Mart
  4. ANSI X12 standardisation timeline — the formal protocol body governing EDI document formats. https://www.x12.org/ (their history page is the canonical authority on EDI document standards: 850 PO, 810 invoice, 856 ASN, etc.)
  5. *Supermarket News*, "The Changing Face of EDI" — EDI evolution / VAN-to-AS2 history. https://www.supermarketnews.com/independents-regional-grocers/the-changing-face-of-edi
  6. Marshall L. Fisher, "What Is the Right Supply Chain for Your Product?" *Harvard Business Review*, March–April 1997 — the foundational HBR article that places EDI in supply-chain strategy.
- **Open research questions for the future card:** (1) Is there a "Walmart but for AI" candidate yet — i.e. a frontier customer/regulator forcing protocol standardisation on a vendor ecosystem? (Possible candidates: BBVA's "every supplier must support our chat.shopify.io equivalent" if extended; or a regulatory move equivalent like the EU AI Act's high-risk classification.) (2) What was the *cost* of non-compliance for a Walmart supplier in 1988 — to anchor the L4 "you must adopt or you can't participate" dynamic in AI? (3) Should the case pair with the SWIFT-banking story (1973 onwards) as a non-retail L4 precedent?

### B7 · Internet protocols — TCP/IP "flag day" 1983; BGP; IETF/ICANN
- **Era:** May 1974 (Cerf/Kahn IEEE paper on TCP) → 1978 (TCP split into TCP and IP) → March 1982 (US DoD TCP/IP standard) → January 1, 1983 (ARPANET "flag day" — TCP/IP becomes the network's default) → 1989+ (BGP, DNS hierarchy, IETF formalization) → present (TCP/IP as invisible default; governance lag visible in BGP hijacking, DNS poisoning)
- **Why it parallels AI:** The L5 historical analog. Litepaper §3 L5: "TCP/IP became so successful it became the invisible default assumption of all digital coordination. The governance mechanisms — IETF, ICANN, the Border Gateway Protocol's routing trust model — were designed before the internet became critical infrastructure. They are now inadequate to the scale and stakes they govern. AI protocols are on the same trajectory, at a shorter time horizon, in an environment already adversarial." The flag-day pattern (designed switchover) is also a useful counter to "AI just emerges." The "governance designed for a smaller version of the infrastructure" failure mode is the L5 blind spot directly.
- **Likely level mapping:** **L5.** The single cleanest L5 case in the inventory.
- **Repo mentions:** `/levels/` L5 historical-parallel card ("Internet protocols — TCP/IP, SMTP, BGP, 2000s–present"); litepaper §3 L5 extended treatment (TCP/IP-as-template; BGP governance failures); blog L5 historical-parallel.
- **Anchor sources for future research:**
  1. Vinton G. Cerf and Robert E. Kahn, "A Protocol for Packet Network Intercommunication," *IEEE Transactions on Communications*, May 1974 — the foundational paper. (Available via IEEE Xplore; also indexed at https://historyofinformation.com/detail.php?id=915)
  2. *ARPANET*, Wikipedia — well-cited overview including the 1983 flag day. https://en.wikipedia.org/wiki/ARPANET
  3. Computer History Museum, "What Do Anniversaries Mean? Internet Protocols at 40," CHM Blog, 2024. https://computerhistory.org/blog/what-do-anniversaries-mean-internet-protocols-at-40/
  4. IEEE Communications Society, "TCP Design Published" milestone. https://www.comsoc.org/node/19581
  5. Janet Abbate, *Inventing the Internet*, MIT Press, 1999 — canonical academic history.
  6. Andrew Russell, *Open Standards and the Digital Age*, Cambridge University Press, 2014 — IETF / standards-body governance angle.
  7. RFC 4271 (BGP-4 specification, 2006) — the canonical BGP standard. https://datatracker.ietf.org/doc/html/rfc4271
  8. Cloudflare blog, "Understanding how Facebook disappeared from the Internet" (October 4, 2021 BGP outage explainer — pairs with B9). https://blog.cloudflare.com/october-2021-facebook-outage/
- **Open research questions for the future card:** (1) Is there a "BGP for AI" emerging — a routing-trust model for agent handoffs? Worth flagging in the card as an L5 design question, even unanswered. (2) The BGP hijacking history (the YouTube hijack 2008; the Pakistan-YouTube incident; Russia's repeated BGP manipulation) is its own sub-story — sidebar or full case? (3) Should this case carry the SMTP-as-anti-spam-failure story alongside, or is that a distraction?

### B8 · NotPetya / Maersk 2017
- **Era:** June 27, 2017 (NotPetya outbreak via M.E.Doc Ukrainian tax software supply-chain) → 5 days from outbreak to global incapacitation → ~10 days for Maersk to reset 4,000+ servers via single-surviving Ghana DC backup → 2018+ (Wired retrospective; Sandworm book; insurance market reckoning)
- **Why it parallels AI:** The litepaper's explicit Level-5 failure-mode case. NotPetya is the canonical "two invisible infrastructures (containerization + internet protocols) intersect" failure: "$300M in 10 days" for Maersk; ~$10B in cumulative damage industry-wide. As the litepaper §3 L5 puts it: "The governance gap was not in either protocol; it was in the absence of any governance mechanism for their intersection." This is the precise L5 "protocol invisibility without reflexive governance" failure mode — and the AI parallel is a future where AI protocols and (e.g.) financial-clearing protocols intersect with no joint governance mechanism.
- **Likely level mapping:** **L5** failure case. Could be a sidebar or sub-card under B7 (internet protocols) but earns its own card because the *intersection* nature is the load-bearing claim.
- **Repo mentions:** Litepaper §3 L5 extended treatment with $300M / 10 days anchor. Not on `/levels/`, not on `/case-studies/`, not in the assessment.
- **Anchor sources for future research:**
  1. Andy Greenberg, "The Untold Story of NotPetya, the Most Devastating Cyberattack in History," *Wired*, August 2018 — canonical long-form. (Adapted from the book.) https://www.wired.com/story/notpetya-cyberattack-ukraine-russia-code-crashed-the-world/
  2. Andy Greenberg, *Sandworm: A New Era of Cyberwar and the Hunt for the Kremlin's Most Dangerous Hackers*, Doubleday, 2019 — the book-length treatment. The Maersk chapter is the canonical case.
  3. Maersk earnings disclosure / press release on NotPetya cost ($250–300M), August 2017. https://www.cnbc.com/2017/08/16/maersk-says-notpetya-cyberattack-could-cost-300-million.html
  4. Istari, "Re-cap: The Untold Story of NotPetya, The Most Devastating Cyberattack in History," 2024 retrospective. https://istari-global.com/insights/spotlight/re-cap-the-untold-story-of-notpetya-the-most-devastating-cyberattack-in-history/
  5. CSO Online, "5 years after NotPetya: Lessons learned," 2022. https://www.csoonline.com/article/573049/5-years-after-notpetya-lessons-learned.html
  6. Henning Lahmann, "'An Attack on Maersk Strikes Everywhere at Once': International law and the Political Economy of Digitalization," *EJIL: Talk!*, 2018 — for the international-law / governance angle the litepaper hints at. https://www.ejiltalk.org/an-attack-on-maersk-strikes-everywhere-at-once-international-law-and-the-political-economy-of-digitalization/
  7. CBS News, "What can we learn from the 'most devastating' cyberattack in history?" — Greenberg interview. https://www.cbsnews.com/news/lessons-to-learn-from-devastating-notpetya-cyberattack-wired-investigation/
- **Open research questions for the future card:** (1) Is there a clear AI-era equivalent yet of "two-infrastructure intersection failure" — e.g. an AI agent + banking-rails interaction failure? (2) Insurance-market reckoning: NotPetya forced a re-write of cyber insurance "act of war" exclusions (Mondelez, Merck cases) — is there an AI-incident insurance analog forming? (3) Should this case explicitly include FedEx (TNT Express) and Merck damages alongside Maersk, or is the Maersk chapter the cleanest narrative?

### B9 · 2021 Facebook BGP outage — October 4, 2021
- **Era:** October 4, 2021, 15:39 UTC → ~21:00 UTC restoration; ~6–7 hours of global Facebook/Instagram/WhatsApp outage
- **Why it parallels AI:** The L5 working analog the `/levels/` page already uses. A backbone-router maintenance command, mishandled, took down Facebook's DNS infrastructure globally. Recovery required physical access to the Santa Clara data center because the company's own internal tooling depended on the very DNS that had withdrawn. As `/levels/` puts it: "The failure propagated before any single actor could respond. The internet's routing protocols are invisible until they fail — and when they fail, the failure is everywhere at once." Maps directly to the L5 failure mode: protocol invisibility without reflexive governance, plus protocol-self-dependency (the recovery tools depend on the failed protocol).
- **Likely level mapping:** **L5** failure case. Smaller in scale than NotPetya but the protocol-self-dependency dynamic is more cleanly visible.
- **Repo mentions:** `/levels/` L5 historical-parallel card; blog L5 historical-parallel.
- **Anchor sources for future research:**
  1. Santosh Janardhan, "More details about the October 4 outage," Engineering at Meta, October 5, 2021 — primary postmortem. https://engineering.fb.com/2021/10/05/networking-traffic/outage-details/
  2. Celso Martinho and Tom Strickx, "Understanding how Facebook disappeared from the Internet," Cloudflare Blog, October 4, 2021 — the cleanest external technical explainer; widely cited. https://blog.cloudflare.com/october-2021-facebook-outage/
  3. Brian Krebs, "What Happened to Facebook, Instagram, & WhatsApp?" *Krebs on Security*, October 4, 2021. https://krebsonsecurity.com/2021/10/what-happened-to-facebook-instagram-whatsapp/
  4. *2021 Facebook outage*, Wikipedia. https://en.wikipedia.org/wiki/2021_Facebook_outage
  5. Doug Madory, "Facebook's historic outage, explained," Kentik Blog. https://www.kentik.com/blog/facebooks-historic-outage-explained/
  6. Adam Engst, "How Facebook Vanished from the Internet," *TidBITS*, October 4, 2021. https://tidbits.com/2021/10/04/how-facebook-vanished-from-the-internet/
- **Open research questions for the future card:** (1) Was there a defined post-incident protocol change at Meta that's worth citing as "L5 reflexive governance in practice"? (2) The 2024 CrowdStrike/Microsoft outage (July 19, 2024) is the closer-in-time L5 incident and may have eclipsed the 2021 Facebook story as the canonical recent example — should this card pair with or be replaced by the CrowdStrike incident? (3) The "internal tools depend on the failed infrastructure" dynamic should be specifically named as a sub-pattern (it's the "governance-as-infrastructure" recursion the L5 page describes).

### B10 · Cloud era — AWS S3/EC2 → Netflix migration → cloud-native default

- **Era:** March 14, 2006 (S3 launch) → August 25, 2006 (EC2 public beta) → 2008 (Netflix begins migration after database corruption incident) → 2012 (AWS Well-Architected Framework first version) → 2015 (Vogels announces Well-Architected whitepaper at re:Invent) → January 2016 (Netflix completes 7-year migration; shuts last data centre) → 2018+ (multi-cloud era; Kubernetes mainstream) → 2020 (Capital One closes all 8 data centres, all-in on AWS) → 2020+ (cloud-native by default for new workloads)
- **Why it parallels AI:** This is the most directly analogous 20-year tech arc to the AI adoption pattern. The L1→L5 hindsight maps almost line-for-line:
  - **L1 — shadow cloud (2006–2010):** Individual developers spinning up unauthorised AWS accounts on personal credit cards to bypass IT procurement; the *exact* shape of the Samsung shadow-AI pattern, twenty years earlier. The protocol layer was non-existent; the productivity gain was real; the security/cost-governance risk was invisible until it wasn't.
  - **L2 — sanctioned (2010–2014):** CIO-approved vendor lists; corporate AWS contracts; ad-hoc cloud governance committees. The Klarna pattern: mandate without designed-workflow. Many "lift-and-shift" failures originate here — orgs sanctioned cloud-as-target but did not redesign workflows for it.
  - **L3 — designed (2014–2018):** Cloud-architect role becomes a standard hire; AWS Well-Architected Framework codifies the review protocol (2015 onwards); DevOps and Site Reliability Engineering emerge as the protocol-design disciplines. The Boom/Uber analog: deliberately designed workflow alongside the capability. Netflix's 2008–2016 migration is the canonical L3-executed-deliberately case.
  - **L4 — infrastructural (2018–2022):** Cloud-native by default for new workloads; Kubernetes mainstream; "cloud-first" becomes the IT mandate at major banks (Capital One closes all data centres in 2020); the cloud-vendor stack becomes the *default substrate* of new application development. EDI-Walmart analog: the cloud is now the sectoral coordination protocol.
  - **L5 — planetary (2022+):** The cloud is ambient; AWS/Azure/GCP outages are global events (the December 2021 AWS us-east-1 outage; the July 2024 CrowdStrike/Azure incident). Governance mechanisms designed for a smaller cloud lag the planetary scale they govern (data-sovereignty conflicts, AI-training-data-locality regulations).
- **Likely level mapping:** **Spans L1 → L5.** Like containerization-shipping (B1), this is a full-arc throughline — Phase B should consider treating it as a single arc-card with five level-keyed beats, mirroring the assessment's containerization throughline.
- **Repo mentions:** **Not directly in the repo as a case** — but referenced obliquely. The litepaper and assessment use *containerization* (shipping) and *internet protocols* as the L1→L5 throughlines; cloud is the missing modern equivalent that maps more closely to the AI adoption shape than either. The IA-007 brief (Backlog) explicitly added Cloud as B7 in the 2026-04-26 update.
- **Success vs failure split:**
  - **Canonical L3 success:** Netflix. Began migration 2008 after a major database-corruption incident; chose cloud-*native* (microservices rebuild) over lift-and-shift; completed 2016. Independent reporting consistently treats this as the gold-standard cloud migration. Note the success was *not* fast — seven years end to end. The success was deliberate workflow redesign, not speed.
  - **L4 success at scale:** Capital One. Eight-year journey ending December 2020; rebuilt 80% of applications cloud-native; went from monthly releases to multiple deploys/day; recycled 41 tons of copper closing data centres. Independently notable as the first US bank to go all-in on public cloud — a regulatory and cultural-protocol milestone, not just a technical one.
  - **L1/L2 failure at scale (composite):** Retail-and-financial-services laggards who tried lift-and-shift without workflow redesign. The literature is consistent: "60–70% of cloud migrations underperform" is the standard analyst finding, and the failure mode is overwhelmingly L2 (sanctioned without redesign). Specific named-laggard cases are harder to anchor with single sources because the failure shape is "we spent 5 years and didn't get the savings we expected" — visible in financial filings and analyst notes, not in a single Bloomberg piece. Phase B research should anchor at least one specific laggard.
  - **L5 failure mode (anchor):** December 7, 2021 AWS us-east-1 outage — affected Disney+, Netflix (briefly, despite multi-region), Slack, Robinhood, Coinbase, large parts of the IoT/smart-home ecosystem. The protocol-invisibility-without-reflexive-governance pattern in its purest form: customers who "depended on AWS" without realising they depended on a *single AWS region* discovered their architecture was not cloud-native, just cloud-hosted.
- **Why it parallels AI (1 paragraph):** The cloud era is the AI era's nearest historical analog and may be the single best Class B case to pepper through the litepaper and levels page. Both are platform shifts whose binding constraints are operational, not technological. Both began with shadow adoption that the institution couldn't see; both went through a sanctioned-but-ungoverned middle period that produced spectacular liability cases (cloud's was data-breach exposure; AI's is the Air Canada / legal-hallucination cluster); both produced new design disciplines (cloud-architect / SRE; FDE / AI-platform-team); both are now substrate-of-default for new workloads. The cloud arc also gives a *temporal* anchor for the AI arc: 17 years from S3 launch to ambient-default. AI started its visible adoption arc in late 2022; on the cloud-arc clock it is currently somewhere around 2009 — i.e. early L2, with most of the L2→L3 transition pain still ahead.
- **Anchor sources for future research:**
  1. Werner Vogels, *All Things Distributed* blog (running record from before S3 launch through present). https://www.allthingsdistributed.com/ — primary source from the AWS CTO; the closest thing to a canonical AWS-side history. The 2026 "S3 Files and the changing face of S3" entry surveys the evolution. https://www.allthingsdistributed.com/2026/04/s3-files-and-the-changing-face-of-s3.html
  2. Werner Vogels and Tom Killalea, "A Second Conversation with Werner Vogels," *ACM Queue / Communications of the ACM*, 2020. https://queue.acm.org/detail.cfm?id=3434573 — primary architectural retrospective covering the 1998 Distributed Computing Manifesto, S3's eight-services-at-launch design, and the evolution to 262 services by 2019.
  3. Yury Izrailevsky, Stevan Vlaovic, and Ruslan Meshenberg, "Completing the Netflix Cloud Migration," *About Netflix*, February 2016. https://about.netflix.com/en/news/completing-the-netflix-cloud-migration — primary source from Netflix on the seven-year migration.
  4. Capital One, "Lessons from Capital One's cloud migration journey," Capital One Software Blog. https://www.capitalone.com/software/blog/cloud-migration-journey/ — primary Capital One source. Companion: AWS Case Study, "Migrating from Data Centers to AWS." https://aws.amazon.com/solutions/case-studies/capital-one-all-in-on-aws/
  5. Steve Yegge, "Stevey's Google Platforms Rant" (accidentally-public 2011 Google+ post). https://gist.github.com/chitchcock/1281611 — primary source for the cultural-protocol argument that "platforms beat products"; the closest contemporary articulation of the API-mandate logic that distinguishes Amazon's cloud-native culture from rivals. (Companion: Kong, "API Mandate," summary of the Bezos memo. https://konghq.com/blog/enterprise/api-mandate)
  6. AWS Well-Architected Framework — origins (Vogels' 2015 re:Invent announcement) → 2026 documentation. https://aws.amazon.com/architecture/well-architected/ and https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html — primary source for the L3-protocol-document analog.
- **Open research questions for the future card:**
  1. Which specific lift-and-shift failure cases anchor the L2 cell? (Candidates: General Electric Predix, various retail bank cloud projects.) The literature has the pattern; specific sourceable named cases need confirming.
  2. Is the Capital One closure (2020) the cleanest L4 anchor or is there a stronger one (e.g. JPMorgan, Goldman Sachs, BMW)?
  3. Does the December 2021 AWS outage carry the L5 anchor or is the July 2024 CrowdStrike/Microsoft incident a stronger choice (more recent, more global, similar shape)?
  4. Should this card pair with B2 (containerization-software, Docker/Kubernetes) as a single "cloud-native arc" card, or stay distinct? They share the L3-onwards portion but diverge on origin.
- **Key research surprises:** Two worth flagging.
  - The Netflix migration is *less* of a cleanly-deliberate success than the popular narrative implies. The 2008 trigger was a database-corruption incident, not strategic foresight; the seven-year duration was driven by billing/customer-data complexity that took much longer than the streaming-service portion; and Netflix retained a CDN (Open Connect) that runs in their own colos, so "all in on cloud" is technically inaccurate. The honest L3 success framing is "Netflix completed a deliberate cloud-native rebuild over seven years following a forcing-function incident" — which still maps to the AI-adoption pattern but is more nuanced than "Netflix saw the future and moved fast."
  - The Yegge platforms rant (2011) is a load-bearing cultural-protocol document for the cloud era. It accidentally went public because Yegge was new to Google+ and didn't realise his post was public; the rant inadvertently documented Amazon's API mandate from the inside (Yegge had previously worked at Amazon) and contrasted Amazon's cloud-native culture with Google's product-shaped culture. It is rare to have such a clean inside-the-room-source for the cultural protocol of a platform-shift, and Phase B should treat it as a primary cultural-history source even though it is a rant on a defunct social network.

### B11 · Mobile era — App Store launch → mobile-eats-world → ambient computing

- **Era:** January 9, 2007 (Steve Jobs unveils iPhone) → July 10, 2008 (App Store launches with 500 apps; 10M downloads in 72 hours) → 2010–2013 (BlackBerry collapse: 43% US smartphone share Jan 2010 → 5% in 2012 → not-on-the-list 2013) → 2013 (Benedict Evans's "Mobile is Eating the World" first delivered) → 2014 (Mary Meeker reports mobile = 25% of web usage; Domino's mobile commerce inflection) → 2015 (Starbucks Mobile Order & Pay national rollout; mobile traffic > desktop in many sectors) → 2016 (Mary Meeker: mobile = 51% of digital media time) → 2018+ (BYOD/MDM mature; mobile-first → mobile-only design) → 2020+ (ambient computing era — wearables, Apple Pay ubiquity, in-store mobile checkout)
- **Why it parallels AI:** The L1 → L5 hindsight maps cleanly to the AI adoption shape, with the additional value that *every reader has personally lived through it*:
  - **L1 — shadow BYOD (2008–2011):** Employees buying personal iPhones and using them for work email/calendar/files; IT departments officially still supporting only BlackBerry. The Folkway pattern: individual productivity gain through unsanctioned personal devices, with invisible org-level data-exposure risk. The exact shape Samsung exhibits with personal-account ChatGPT.
  - **L2 — sanctioned MDM (2011–2014):** Mobile Device Management platforms (MobileIron, AirWatch, BlackBerry's own pivot) emerge to let IT permit personal devices with selective control. The Klarna pattern: sanctioned without designed workflow — many MDM rollouts did device-level governance without redesigning the actual mobile workflows the org needed.
  - **L3 — designed mobile-first (2013–2017):** Companies that hired mobile-first product teams, designed for thumb-and-glance from the ground up, treated mobile as a distinct product surface — Uber's RIBs architecture is the canonical engineering exemplar; Starbucks Mobile Order & Pay is the canonical product exemplar; Domino's "AnyWare" is the multi-surface exemplar. The Boom/Uber-AI analog: deliberately designed protocol alongside the new capability.
  - **L4 — infrastructural API-first (2017–2020):** Mobile becomes the default product surface; "responsive web" gives way to "mobile-first" → "mobile-only" for many categories; backends are rebuilt API-first because the mobile client demands it (this is the Bezos API mandate's downstream consequence at consumer scale). Sectoral coordination shifts to mobile-as-default — the EDI-Walmart analog: a single dominant pattern (mobile-first) becomes the sectoral protocol.
  - **L5 — ambient (2020+):** Smartphones become invisible-default; wearables, Apple Pay, smart-home, mobile-as-substrate-of-payments. Governance lag is now visible: app-tracking-transparency battles, EU DMA digital-markets regulation, China's app-sovereignty regime. The TCP/IP analog: governance mechanisms designed for a smaller mobile world lag the planetary scale they now govern.
- **Likely level mapping:** **Spans L1 → L5.** Like B1 and B7, this is a full-arc throughline.
- **Repo mentions:** **Not directly in the repo as a case.** The IA-007 brief (Backlog) explicitly added Mobile as B8 in the 2026-04-26 update.
- **Success vs failure split:**
  - **L3 success — engineering exemplar:** Uber's RIBs (Router-Interactor-Builder) cross-platform mobile architecture, codified circa 2017 to handle the scale problem the original MVC pattern couldn't solve. Independently notable because Uber open-sourced RIBs and other mobile-first companies adopted it. The architectural protocol was *visible* and shared.
  - **L3 success — product exemplar:** Starbucks Mobile Order & Pay (national US rollout September 2015). Forrester's "most successful mobile ordering app of all time"; 30% of US transactions paid through the app by Q3 FY17; mobile-app users spent 3× the average customer. Operational success: Starbucks's fastest-ever technology rollout. The protocol that made it work was a deliberate redesign of the in-store flow (separate pickup zone, barista screen integration), not just a new app on top of the existing flow.
  - **L3/L4 success — multi-surface exemplar:** Domino's "AnyWare" (2011 onwards). 2011 mobile app launched with the explicit goal of "ordering pizza in 17 seconds"; by 2020, >70% of Domino's sales were digital; stock went from ~$3 (2008) to >$400 (2020s). Independently striking because Domino's was a *traditional* fast-food chain that successfully treated mobile as its central product, not a bolt-on. The contrast with peer chains who bolted on apps without redesigning the order-pickup workflow is direct.
  - **L1/L2 failure — incumbent collapse:** BlackBerry. 43% US smartphone share January 2010 → 16% (2010) → 5% (2012) → off-list (2013); 87% stock decline 2010–2013. The failure mode is exactly the L1/L2 trap: BlackBerry held the *enterprise* protocol layer (BlackBerry Enterprise Server / BES) but failed to recognise that the BYOD shift moved purchasing power from IT to individual employees. The protocol layer they owned no longer mattered because the customer relationship that protocol governed had moved. Direct analog to AI: an incumbent who controls the existing-workflow protocol may not be the actor who controls the new workflow's protocol.
  - **L1/L2 failure — bolt-on apps:** Banks and retailers who bolted on apps without redesigning the workflow. Specific anchored cases harder to source single-link, but the analyst-coverage pattern is consistent: pre-2015 retail-bank mobile apps often replicated the desktop site rather than redesigning for thumb interaction; pre-2015 grocery mobile apps did the same. The cleanest single named-failure anchor in the literature is *less prominent* than the cloud-era equivalents because most of these orgs eventually retrofitted — Phase B research should pick one with a clean public arc.
- **Why it parallels AI (1 paragraph):** The mobile era is the second-best Class B parallel after cloud, and is more accessible to non-technical readers because everyone lived through it. The structural parallel is identical: a new capability arrives outside institutional sanction (BYOD = shadow AI); IT/management catches up with a control protocol (MDM = AI sanctioning policies); some organisations redesign their actual workflows around the new capability and win (Starbucks/Domino's/Uber = Boom/BBVA/Stripe); incumbents who fail to redesign lose their protocol position even if their product still works (BlackBerry = the future "incumbent who lost the AI workflow protocol"); the new capability becomes substrate-of-default and governance lags behind. The mobile arc also runs *faster* than the cloud arc — about 12 years from App Store launch to ambient default vs cloud's 17 — which is closer to the speed at which AI is propagating, and gives a useful pace anchor for the model.
- **Anchor sources for future research:**
  1. Apple, "iPhone SDK Keynote" (Steve Jobs introduces the App Store), March 6, 2008 — primary launch source. https://www.youtube.com/watch?v=xo9cKe_Fch8 (and WWDC 2008 keynote, June 9 2008). Wikipedia summary of Stevenote keynote series for context: https://en.wikipedia.org/wiki/Stevenote
  2. Cult of Mac, "App Store launch transforms the iPhone: Today in Apple history." https://www.cultofmac.com/apple-history/apple-app-store-launch — third-party historical anchor with the 10M-downloads-in-72-hours number.
  3. Benedict Evans, "Mobile is eating the world" — slides and essays, 2013–2016. https://www.ben-evans.com/benedictevans/2016/12/8/mobile-is-eating-the-world (and 2015 PDF: https://www.ben-evans.com/s/2015-Benedict-Evans-Mobile-eating-the-world.pdf) — primary canonical analyst source.
  4. Mary Meeker, "Internet Trends Report" (Kleiner Perkins, annual). 2014 report: https://www.kleinerperkins.com/perspectives/2014-internet-trends/ ; 2015 summary: https://qz.com/413342/mary-meekers-2015-internet-trends-report-all-the-slides-plus-highlights — primary quantitative anchors for mobile-as-share-of-internet over time.
  5. Uber Engineering, "Engineering the Architecture Behind Uber's New Rider App." https://www.uber.com/blog/new-rider-app-architecture/ — primary engineering source; companion: Uber RIBs GitHub repo. https://github.com/uber/RIBs
  6. Starbucks Mobile Order & Pay coverage: TechCrunch, "Starbucks' Mobile Order & Pay Now Live Nationwide," September 22 2015. https://techcrunch.com/2015/09/22/starbucks-mobile-order-pay-now-live-nationwide-delivery-service-in-testing-by-year-end/ ; Harvard Digital Innovation case, "Starbucks' Mobile App: A winner in bridging the retail / digital divide." https://d3.harvard.edu/platform-digit/submission/starbucks-mobile-app-a-winner-in-bridging-the-retail-digital-divide/
  7. Domino's mobile transformation: Future Platforms, "How Domino's Pizza Became the Mobile Brand of the Decade." https://www.futureplatforms.com/insights/how-dominos-pizza-became-the-mobile-brand-of-the-decade ; HBR case study (paywalled): https://store.hbr.org/product/domino-s-pizza-digital-transformation-in-the-pizza-industry/W77C83
  8. BlackBerry collapse: Solutions Review, "How The Consumerization of IT Killed BlackBerry and Built EMM." https://solutionsreview.com/mobile-device-management/how-the-consumerization-of-it-killed-blackberry-and-built-emm/ ; eWeek, "BlackBerry's Mobile Market Decline the Result of 10 Basic Factors." https://www.eweek.com/mobile/blackberry-s-mobile-market-decline-the-result-of-10-basic-factors/ ; Wikipedia, BlackBerry Limited. https://en.wikipedia.org/wiki/BlackBerry_Limited
- **Open research questions for the future card:**
  1. Is there a clean L1/L2 *named* failure case for "incumbent who bolted on a mobile app without redesigning the workflow" — equivalent to BlackBerry but in retail or banking? (Candidates: legacy department-store apps; mid-tier US retail bank apps circa 2012–2014.)
  2. Should the mobile-era card pair with B5 (Git/CI-CD) as a "design discipline emerges in response to a new substrate" pattern? They share the L3-design-discipline portion.
  3. The China parallel (WeChat as the mobile-first super-app; Alipay; the mobile-payments inflection 5–7 years ahead of the US) is its own L4/L5 sub-story. Sidebar or full sub-card?
  4. Does the Apple App Store / Google Play 30%-platform-tax story (Epic v. Apple, EU DMA) carry the L5 governance-failure angle, or is that a distraction from the protocol-pattern claim?
- **Key research surprises:** One worth flagging.
  - Steve Jobs was *initially against* third-party apps on the iPhone — the App Store happened despite his initial position, not because of it. This complicates the "designed deliberately from day one" reading: even at Apple, the L3 mobile workflow protocol was not predicted; it emerged from developer pressure. This is a useful inoculation against the temptation to treat any successful tech-arc card as "the founder saw the future." Most successful tech arcs include a moment where the protocol layer the platform's founder *didn't* want became load-bearing for the platform's success.

## Cross-page placement audit

A `✓` means the case is meaningfully present (full card, named in copy, archetype example, or explicit historical-parallel block); a `–` means absent; `(stat)` means present only as a one-line statistic; `(name)` means a passing name-drop without case treatment.

| Case (slug)              | / (homepage)     | /case-studies/                | /levels/                      | /litepaper/                                | /blog/                  | /assessment/                  |
|--------------------------|------------------|-------------------------------|-------------------------------|--------------------------------------------|-------------------------|-------------------------------|
| samsung-chatgpt-leak     | ✓ (named)        | ✓ (full card)                 | ✓ (grounds spreadsheets parallel) | ✓ (§3 L1 extended)                     | –                       | ✓ (failure mode, archetype underStress) |
| klarna-mandate-reversal  | ✓ (named)        | ✓ (full card)                 | –                             | ✓ (§3 L2 extended)                         | –                       | ✓ (failure mode + Vanguard examples) |
| shopify-non-optional     | ✓ (named)        | ✓ (full card)                 | –                             | ✓ (§3 L2 extended)                         | –                       | ✓ (failure mode card)          |
| duolingo-contractor      | ✓ (named)        | – **gap**                     | –                             | ✓ (§3 L2 extended) + §5 (named)            | –                       | ✓ (Vanguard archetype example) |
| moffatt-air-canada       | ✓ (named)        | ✓ (full card)                 | –                             | ✓ (§3 L2 + §5 + §3 L3 historical parallel) | –                       | ✓ (failure mode card)          |
| boom-supersonic          | ✓ (named)        | ✓ (full card)                 | –                             | ✓ (§3 L3 extended)                         | –                       | ✓ (Traveller archetype example) |
| uber-agentic-shift       | – **gap**        | – **gap**                     | –                             | ✓ (§3 L3 + §3 L4 + §4 + §5)                | –                       | ✓ (Architect archetype + L3 failure-mode example) |
| bbva-custom-gpts         | – **gap**        | – **gap**                     | –                             | ✓ (§1 stat + §5 implied)                   | –                       | ✓ (Architect archetype example) |
| legal-hallucinations     | –                | –                             | –                             | ✓ (§1 + §3 L1 named)                       | –                       | (implicit in L1 narrative)     |
| containerization-shipping| –                | –                             | – (EDI parallel only at L4)   | ✓ (§2 + §3 L5 NotPetya)                    | –                       | ✓ (throughline across all 5 results) |
| containerization-software| –                | –                             | –                             | –                                          | –                       | –                              |
| spreadsheets-lotus       | –                | –                             | ✓ (L1 parallel)               | –                                          | –                       | ✓ (L1 periodTech)              |
| corporate-email          | –                | –                             | ✓ (L2 parallel)               | ✓ (§3 L1 Hotmail/Yahoo + §3 L2 Zubulake)   | –                       | ✓ (L2 + L2-3 periodTech)       |
| git-ci-cd                | –                | –                             | ✓ (L3 parallel)               | ✓ (§3 L3 + §4 reference)                   | –                       | ✓ (L3 + L2-3 periodTech)       |
| edi-walmart              | –                | –                             | ✓ (L4 parallel)               | ✓ (§4 EDI as L4→L5 analog)                 | ✓ (L4 historical)       | ✓ (L3-4 periodTech)            |
| internet-protocols       | –                | –                             | ✓ (L5 parallel)               | ✓ (§3 L5 extended)                         | ✓ (L5 historical)       | – (L5 not in RESULTS map)      |
| notpetya-maersk          | –                | –                             | –                             | ✓ (§3 L5 extended, $300M anchor)           | –                       | –                              |
| facebook-bgp-2021        | –                | –                             | ✓ (L5 parallel)               | –                                          | ✓ (L5 historical)       | –                              |

**Patterns the audit surfaces:**

1. The **homepage explore card** lists 5 cases (Samsung · Klarna · Shopify · Air Canada · Boom). The `/case-studies/` page **also** has 5 cases — but the lists agree (Boom, not Duolingo). MILESTONES says CONTENT-003 shipped with Duolingo replacing Boom; the live state is the inverse. **This deployment-vs-MILESTONES discrepancy needs reconciling before the IA-007 spec is locked.**
2. **`/case-studies/` is currently L1–L3 only.** L4 and L5 have no Class A surface anywhere. Uber, BBVA, NotPetya/Maersk, and 2021 Facebook BGP are all available as L4 or L5 cases — promoting any of them to a `/case-studies/` card closes the gap.
3. The **assessment is a richer Class B surface** than the levels page. The assessment carries the full containerization throughline plus separate `periodTech` and `containerization` blocks per result; the levels page only has one historical-parallel block per level. Phase B can lift the assessment's Class B treatment as the model for the library page's Class B cards.
4. The **litepaper carries the deepest treatment of every case**. For Class A, the litepaper §3 has multi-paragraph treatments of Samsung, Klarna, Duolingo, Air Canada, Shopify, Uber, Boom, NotPetya/Maersk; for Class B it carries Zubulake, Git-as-PR-protocol, EDI-as-L4→L5 analog, ISO container, TCP/IP, BGP. The library cards should pull canonical phrasing from the litepaper rather than re-improvising.
5. The **blog has minimal case content** beyond the EDI-Walmart and Facebook-BGP historical parallels and the Rao/Dixon F2F vignette. Most cross-page cases live in the litepaper, the assessment, and the levels page.

## Gaps & overlaps

- **Level coverage gaps.** L4 and L5 have **zero Class A presence** in any reader-facing surface. The matrix shows 1 Class A at L4 (Uber, but not as a card) and 2 Class A at L5 (none promoted). The library page risks becoming an L1–L3 page (failures only, mostly) unless L4/L5 cards are promoted from existing material.
- **Archetype coverage.** Of the 10 archetypes (Vanguard · Traveller · Architect · Integrator · Tinkerer · Ratifier · Warden · Broker · Folkway · Guild), **Broker, Folkway, Guild, and Tinkerer have no full-card representation.** The closest:
  - *Tinkerer:* implied in Samsung's three engineers but Samsung is framed as a Folkway-shading-Warden case.
  - *Folkway:* implied in Samsung, more clearly anchored in the legal-hallucination cluster.
  - *Guild:* CONTENT-007 (now in IA-007) explicitly calls for a Guild L1 success story — none has been written.
  - *Broker:* no candidate at all.
- **Failure / success balance per level.** Currently:
  - L1: 2 published cases (Samsung, legal hallucinations) — 2 failures, 0 successes.
  - L2: 4 published cases (Klarna, Shopify, Duolingo, Air Canada) — 4 failures (Shopify is mixed but reads as failure on the card). 0 unambiguous successes.
  - L3: 2 published cases (Boom, Uber) — 2 successes, 0 failures.
  - L4: 0 published cases.
  - L5: 0 published cases (treatment exists in litepaper / levels but not promoted).

  The library reads as "failure failure failure success success — projection — projection." A Folkway/Guild L1 success and a clear L2 success would balance the curve.
- **Function coverage.** Heavy on **engineering** (Samsung, Boom, Uber, Git-as-Class-B), **customer service** (Klarna, Air Canada), **content/marketing** (Duolingo, Shopify-cross-cutting). Light on **finance** (BBVA only — and not yet a card), **legal-as-corporate-function** (legal-hallucination cluster covers practitioners not corporate legal), **HR** (no cases), **ops/supply-chain** (containerization is the only real anchor), **sales** (none), **clinical/healthcare** (only as a stat — symplr 86%, not a named case).
- **Era coverage.** Class A all 2022+; Class B spans 1956 (containerization) → 2021 (Facebook BGP). The 1990s is the thinnest decade in Class B (only corporate email carries it; even containerization peaks before and EDI is late-80s/early-90s). The 2005–2015 Web 2.0 / SaaS era is essentially absent — possible candidates: *Salesforce-in-the-enterprise* (mass adoption pattern), *Slack-replacing-email* (workflow disruption), *Workday* (referenced in litepaper §3 L2 via Armstrong but not as a case), *Zoom-pandemic-2020* (forced adoption analog).
- **Geographic coverage.** Predominantly US (Samsung is Korean; Klarna is Swedish; BBVA is Spanish; Air Canada is Canadian; Boom + Uber + Shopify + Duolingo are US/Canadian; legal-hallucinations are US). EU regulatory framing in litepaper, but no EU-anchored case. APAC absent (Samsung notwithstanding — the case is about the *incident* in Samsung's Korean R&D, not about Korean enterprise AI culture).
- **Overlap.** The Class A and Class B story arcs are *highly cross-referenced* in the litepaper:
  - Samsung's "ban then internal alternative" arc maps to BitKeeper → Git
  - Klarna mandate → Walmart EDI mandate
  - Air Canada chatbot liability → Zubulake e-discovery liability
  - Uber Code Inbox → Git PR protocol
  - NotPetya/Maersk → containerization + internet protocols intersection
  - Boom mkBoom → no clean Class B parallel yet (this is one of the few Class A cases without a built-in Class B partner)

  Phase B should consider whether the card template explicitly slots in the "Class A ⇄ Class B partner" relationship, or whether that's narrative-only.

## Open inventory questions for Phase B

1. ~~**Reconcile Boom-vs-Duolingo on `/case-studies/`.** MILESTONES claims CONTENT-003 shipped with Duolingo replacing Boom; the live page (and homepage explore card) lists Boom. Which is canonical for the library page launch?~~ → **Resolved 2026-04-26: Boom is canonical.** The CONTENT-003 resolution note in `Backlog.md` overstates what shipped; the live state is correct. Backlog + MILESTONES correction follows.
2. **Promote Uber to a `/case-studies/` card?** It is the most thoroughly grounded Class A case in the litepaper; the only case with both an L3 *and* an L4 framing; and the source of the canonical Code Inbox / U Review L3→L4 transition example. Strong argument for promotion.
3. **Promote BBVA to a `/case-studies/` card and write a `_Observations/research/bbva-*.md` entry?** BBVA is the only L4-shaped Class A success that's *not* engineering-functional. Closes the function-coverage gap.
4. **Promote NotPetya/Maersk and 2021 Facebook BGP from "historical parallel" to first-class L5 cards?** The litepaper treats both as substantive L5 cases, not just decorative parallels. The library card pattern could absorb them as Class A-or-B-hybrid (they're recent named incidents but they're really demonstrating Class B systemic failure modes).
5. **Should the library use a single card template with class-tagged metadata, or two distinct templates?** The IA-007 brief suggests one template with class tags. The audit suggests they may need different fields: Class A wants `failure_or_success_mode`, `function`, `archetype`; Class B wants `era`, `level_arc`, `repo_mention_count`, `class_a_partner_case`. A single template with conditional fields may be needed.
6. **Does the library need a level-filter chip?** The matrix shows L4 and L5 currently empty for Class A; if the page launches with chips and 0 results for "L4 / Class A", that's a poor first impression. Either backfill before launch (Q2 + Q3 + Q4 above) or sequence the chip rollout.
7. **Does the library need a function-filter chip, an archetype-filter chip, or both?** The audit confirms function is the most uneven dimension and likely the most-asked filter ("show me HR cases"). Archetype is more bespoke to Protocolized's vocabulary and may be better as a sidebar than a chip.
8. **Inline-pepper rules for Class B cases on other pages.** Most Class B cases are *already* peppered (the levels page is fully covered). The IA-007 brief says "pepper Class B cases throughout the site, not just on `/case-studies/`." The audit shows this is largely already done — the question is whether to pull *back* and consolidate (one card per case, one canonical placement) or *forward* and standardize (every Class B card gets a uniform "appears on these pages" cross-link list).
9. **The Rao/Dixon F2F factory case (litepaper §4, blog).** This is a vignette involving named individuals (Venkatesh Rao + Jenna Dixon) doing a real bilateral AI workflow. Borderline as a "case" because the individuals aren't enterprise actors and the use is editorial rather than business — but it's the cleanest L4-pattern-at-individual-scale demonstration in the repo. Include as a card or leave as litepaper-only?
10. **Editorial voice for failure cases.** Three of five published cards use a "what happened next" drilldown framing (Samsung, Klarna, Shopify) and two have a domain-specific drilldown (Air Canada "what happened next", Boom "why Level 3 and not higher"). The CONTENT-005 / CONTENT-006 feedback asks for narrative, not staccato facts — and asks the diagnostic-question pattern to be revisited. Lock the card-copy voice in Phase C against the new template.

## Class B-5 selection (locked 2026-04-26)

User decision in IA-007 design conversation (2026-04-26): the inaugural library will carry **5 Class B cards, one per maturity level**. Editorial principle: **value-emergence framing, not failure-mode pairing** — Class B cards highlight what protocols enabled (the upside that emerged from organic adoption, mandates that worked, infrastructure that became invisible), not what their absence cost. Failure-mode pairings are a Class A pattern.

| # | Card | Level | Editorial frame | Class B candidate from inventory |
|---|---|---|---|---|
| 1 | Excel / Visicalc | L1 | Folkway/Guild shadow usage → universal infrastructure (Packy McCormick "Excel Never Dies" anchor) | B3 |
| 2 | Email mandate — Bill Gates *Internet Tidal Wave* memo (1995) | L2 | Top-down sanctioning catches the institution up to existing personal practice; Microsoft mandates internet/email integration | B4 (reframed — *not* the Zubulake litigation framing) |
| 3 | Git + CI/CD | L3 | Designed coordination protocol; review-as-gate; PR-as-protocol-artifact | B5 |
| 4 | EDI / Walmart 1988 mandate | L4 | Sector-wide protocol forcing function — one actor's mandate elevates an entire industry to interoperable infrastructure (B2B protocol + JIT enablement) | B6 |
| 5 | Containerization (shipping) — McLean → ISO 668 → Maersk/Sea-Land → ambient global trade | L5 | Planetary infrastructure + just-in-time manufacturing + geography-as-protocol-substrate (chokepoints: Suez, Hormuz, Panama, Malacca) | B1 |

**Not selected (and the reasons):**

- B2 Containerization (software) — duplicative with B1 (same word, different industry) at launch; revisit in v2.
- B4 Email-as-Zubulake — rejected for failure-mode framing; the mandate-success frame (Gates memo) is what survives.
- B7 Internet protocols — L5 covered by B1; revisit in v2.
- B8 NotPetya/Maersk, B9 2021 FB BGP — L5 failure cases; keep as historical-parallel callouts on the L5 surface, not full library cards.
- B10 Cloud era — strong candidate (Netflix-snapshot at L4 was on the table), dropped in favour of EDI for L4 because (a) EDI elevates an *industry* not a single org and (b) using a non-tech-canon example breaks reader out of the silicon-valley-only frame. Revisit in v2 — likely as an L4 alternative or an L4→L5 transition arc.
- B11 Mobile era — dropped during selection; revisit in v2 (BlackBerry collapse remains the best single L1/L2 incumbent-failure analog if needed).

**Phase C action items unblocked by this lock:**

1. Commission one new `_Observations/research/` entry: `gates-internet-tidal-wave-1995.md` (or `email-mandate-1995-2005.md`). Anchor primary source: Bill Gates internal Microsoft memo, *The Internet Tidal Wave*, May 26, 1995 (public via DOJ antitrust trial).
2. Lock the card template: a single template across all five cards. Required fields surfaced by the lock: title, level (L1–L5), era markers, value-emergence narrative (1 paragraph), Class A pairing (where applicable), historical anchor (event + date), planetary chokepoint or scale-marker (where applicable, esp. L4–L5), 3–6 authoritative sources.
3. Write five prototype cards in the new template against the locked picks.

## Out of scope for v0.1

- Class A card commissioning (still pending: BBVA reframed, Uber promotion, NotPetya/FB BGP promotion — these are the inventory's Q2/Q3/Q4 from earlier, deferred to a separate Phase B Class-A pass).
- Page layout / chip design / filter UI — currently descoped per user direction (2026-04-26: leave the website as-is for now; work is on the card content).
- Per-card sub-page split (deferred to a future IA-001-style phase B).
- New Class A research and writing — including the Folkway/Guild L1 counterexample CONTENT-007 wants and the BBVA / Uber `_Observations/research/` entries that should be commissioned.
- Visual design — waits for DESIGN-001 (the whole-site aesthetic refresh).
- The Boom-vs-Duolingo MILESTONES reconciliation question itself (flagged here; resolved elsewhere).
- Reconciling the Khosrowshahi name + title error in litepaper §3 L3 (flagged here; should land in litepaper v8 work, not in the case-studies-library work).

## Appendix — sources cited

External URLs cited in this inventory, deduplicated and grouped by case. Counts to support `sources_referenced` count in the front matter.

**Class A — 50 unique URLs**

*A1 Samsung (6):*
1. Bloomberg, "Samsung Bans Generative AI Use," 2023-05-02 — https://www.bloomberg.com/news/articles/2023-05-02/samsung-bans-chatgpt-and-other-generative-ai-use-by-staff-after-leak
2. TechCrunch, "Samsung Bans Use of Generative AI Tools," 2023-05-02 — https://techcrunch.com/2023/05/02/samsung-bans-use-of-generative-ai-tools-like-chatgpt-after-april-internal-data-leak/
3. CIO Dive, "Samsung Employees Leaked Corporate Data," 2023-05-03 — https://www.ciodive.com/news/Samsung-Electronics-ChatGPT-leak-data-privacy/647137/
4. Forbes, "Samsung Bans ChatGPT," 2023-05-02 — https://www.forbes.com/sites/siladityaray/2023/05/02/samsung-bans-chatgpt-and-other-chatbots-for-employees-after-sensitive-code-leak/
5. Gizmodo, "Samsung Employees Leaked Confidential Data to ChatGPT," 2023-04-06 — https://gizmodo.com/chatgpt-ai-samsung-employees-leak-data-1850307376
6. Cyberhaven research index — https://www.cyberhaven.com/research

*A2 Klarna (5):*
7. Klarna press release, "Klarna AI assistant handles two-thirds of customer service chats," 2024-02-27 — https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/
8. Bloomberg, "Klarna Turns From AI to Real Person Customer Service," 2025-05-08 — https://www.bloomberg.com/news/articles/2025-05-08/klarna-turns-from-ai-to-real-person-customer-service
9. Entrepreneur, "Klarna Is Hiring Customer Service Agents," 2025-05-09 — https://www.entrepreneur.com/business-news/klarna-ceo-reverses-course-by-hiring-more-humans-not-ai/491396
10. Tech.co, "Klarna Reverses AI Overhaul," 2025 — https://tech.co/news/klarna-reverses-ai-overhaul
11. NPC Memo, "AI and Org Design," — https://npc.here.now/ai-org/

*A3 Shopify (7):*
12. Lütke, X (full memo), 2025-04-07 — https://x.com/tobi/status/1909231499448401946
13. Lütke, X ("Reflexive AI usage..."), 2025-04-07 — https://x.com/tobi/status/1909251946235437514
14. Digital Commerce 360, "Shopify CEO declares AI 'non-optional,'" 2025-04-08 — https://www.digitalcommerce360.com/2025/04/08/internal-memo-shopify-ceo-declares-ai-non-optional/
15. Tech Startups, "Shopify CEO Tobi Lütke confirms leaked memo," 2025-04-07 — https://techstartups.com/2025/04/07/shopify-ceo-tobi-lutke-confirms-leaked-internal-memo-on-social-media-about-hiring-ai-before-humans/
16. Marketing AI Institute, "Shopify's CEO Just Issued a Bold AI Ultimatum," 2025-04-08 — https://www.marketingaiinstitute.com/blog/shopify-ceo-ai-memo
17. Slator, "Shopify CEO Says AI Has Already Sped Up Translations 100x," 2025-04-08 — https://slator.com/in-internal-memo-shopify-ceo-says-ai-has-already-sped-up-translations-100x/
18. The Verge, "Shopify Tobi Lütke AI memo developers engineers," 2025-04-07 — https://www.theverge.com/news/644943/shopify-tobi-lutke-ai-memo-developers-engineers

*A4 Duolingo (6):*
19. TechRepublic, "Duolingo to Replace Human Contractors With Bots," 2025-04-29 — https://www.techrepublic.com/article/news-duolingo-replaces-contractors-ai/
20. TechCrunch, "Is Duolingo the face of an AI jobs crisis?" 2025-05-04 — https://techcrunch.com/2025/05/04/is-duolingo-the-face-of-an-ai-jobs-crisis/
21. Fortune, "Duolingo CEO walks back AI-first comments," 2025-05-24 — https://fortune.com/2025/05/24/duolingo-ai-first-employees-ceo-luis-von-ahn/
22. Yahoo Finance, "Duolingo went 'AI-first' and then came the consumer backlash," 2025 — https://finance.yahoo.com/news/duolingo-went-ai-first-then-070000682.html
23. Yahoo Finance, "Duolingo CEO admits his controversial AI memo 'did not give enough context,'" 2025 — https://finance.yahoo.com/news/duolingo-ceo-admits-controversial-ai-172247813.html
24. BeyondSPX, "Duolingo's AI-First Gamble," 2025 — https://www.beyondspx.com/quote/DUOL/news/duolingo-beats-q3-2025-earnings-raises-fullyear-guidance-amid-strategic-shift

*A5 Air Canada (5):*
25. Moffatt v. Air Canada, 2024 BCCRT 149 — https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html
26. CanLII Commentary, "Lying Chatbot Makes Airline Liable," 2025 — https://www.canlii.org/en/commentary/doc/2025CanLIIDocs1963
27. McCarthy Tétrault, "Moffatt v. Air Canada: A Misrepresentation by an AI Chatbot," 2024-02 — https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot
28. ABA Business Law Today, "BC Tribunal Confirms Companies Remain Liable," 2024-02 — https://www.americanbar.org/groups/business_law/resources/business-law-today/2024-february/bc-tribunal-confirms-companies-remain-liable-information-provided-ai-chatbot/
29. BBC Travel, "Air Canada must honor refund policy invented by its chatbot," 2024-02-22 — https://www.bbc.com/travel/article/20240222-air-canada-chatbot-misinformation-what-travellers-should-know

*A6 Boom (6):*
30. Scholl, "Move Fast and Don't Break (Safety Critical) Things," Boom Blog, 2025-08-10 — https://blog.boomsupersonic.com/move-fast-and-dont-break-safety-critical-things
31. Scholl, "Move Fast and Don't Break (Safety Critical) Things Part 2: Vertical Integration," Boom Blog, 2025-09-14 — https://blog.boomsupersonic.com/move-fast-and-dont-break-safety-critical-things-part-2-vertical-integration
32. Boom Supersonic, "Boomless Cruise" press release, 2025-02 — https://boomsupersonic.com/press-release/boom-supersonic-announces-boomless-cruise
33. Boom Supersonic, "Year in Review 2025" — https://boomsupersonic.com/flyby/boom-year-in-review-2025
34. Aerotime, "How Boom's XB-1 went supersonic without the noise" — https://www.aerotime.aero/articles/boom-supersonic-boomless-cruise
35. Skift, "Boom Supersonic's CEO Is Betting on 2029," 2025-08-28 — https://skift.com/2025/08/28/new-york-to-london-in-3-hours-boom-supersonics-ceo-is-betting-on-2029/

*A7 Uber (6):*
36. Chada and Smith Pragmatic Summit talk video, 2026-03-10 — https://www.youtube.com/watch?v=i1tZN41VKcE
37. Orosz, "How Uber uses AI for development: inside look," Pragmatic Engineer, 2026-03-10 — https://newsletter.pragmaticengineer.com/p/how-uber-uses-ai-for-development
38. Uber Engineering on X — https://x.com/UberEng/status/2033946334571729125
39. ShiftMag, "How Uber Engineers Use AI Agents" — https://shiftmag.dev/how-uber-engineers-use-ai-agents-8617/
40. CIO, "How agentic AI will reshape engineering workflows in 2026" — https://www.cio.com/article/4134741/how-agentic-ai-will-reshape-engineering-workflows-in-2026.html
41. Business Honor, "Praveen Neppalli Naga Says Uber Engineers Embrace Autonomous AI Coding Shift," 2026-03 — https://businesshonor.com/2026/03/uber-adopt-agentic-ai-automate-software-development

*A8 BBVA (7):*
42. OpenAI case study, "BBVA puts AI in the hands of every team with OpenAI" — https://openai.com/index/bbva/
43. OpenAI, "How BBVA is scaling AI from pilot to practice across the org," 2025 — https://openai.com/index/bbva-2025/
44. OpenAI, "BBVA and OpenAI collaborate to transform global banking," 2025-12 — https://openai.com/index/bbva-collaboration-expansion/
45. BBVA News, "BBVA sparks a wave of innovation among its employees" — https://www.bbva.com/en/innovation/bbva-sparks-a-wave-of-innovation-among-its-employees-with-the-deployment-of-chatgpt-enterprise/
46. BBVA News, "BBVA is now using ChatGPT to streamline legal queries" — https://www.bbva.com/en/innovation/bbva-is-now-using-chatgpt-to-streamline-legal-queries-and-marketing-processes/
47. Fintech Global, "BBVA rolls out ChatGPT Enterprise in global AI banking push," 2025-12-12 — https://fintech.global/2025/12/12/bbva-rolls-out-chatgpt-enterprise-in-global-ai-banking-push/
48. AI News, "BBVA embeds AI into banking workflows using ChatGPT Enterprise" — https://www.artificialintelligence-news.com/news/bbva-embeds-ai-into-banking-workflows-using-chatgpt-enterprise/

*A9 Legal hallucinations (8):*
49. Mata v. Avianca FindLaw — https://caselaw.findlaw.com/court/us-dis-crt-sd-new-yor/2335142.html (and Justia https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2022cv01461/575368/54/)
50. Mata v. Avianca, Wikipedia — https://en.wikipedia.org/wiki/Mata_v._Avianca,_Inc.
51. ByoPlanet International v. Johansson, FindLaw — https://caselaw.findlaw.com/court/us-dis-crt-sd-flo/117513089.html
52. ABA Formal Opinion 512 — https://www.americanbar.org/groups/professional_responsibility/publications/professional_lawyer/2024/formal-opinion-512/
53. Sterne Kessler, "AI Hallucinations in Court Filings... 2025 Review of Sanctions" — https://www.sternekessler.com/news-insights/insights/ai-ip-year-in-reviewai-hallucinations-in-court-filings-and-orders-a-2025-review-of-sanctions-across-the-courts-and-rule-proposals/
54. VinciWorks, "When AI hallucinates and lawyers pay" — https://vinciworks.com/blog/when-ai-hallucinates-and-lawyers-pay-the-86k-legal-wake-up-call/ (also https://vinciworks.com/blog/ai-hallucinations-courts/)
55. NexLaw, "AI Hallucination Sanctions 2026 Guide" — https://www.nexlaw.ai/blog/ai-hallucination-sanctions-2026/
56. Relativity, "AI Case Law Update: The Lamborghini Doctrine of Hallucinations" — https://www.relativity.com/blog/ai-case-law-update-the-lamborghini-doctrine-of-hallucinations/

**Class B — 38 unique URLs**

*B1 Containerization (shipping) (1 verified URL; 4 book/print sources):*
57. Princeton University Press, *The Box*, Marc Levinson — https://press.princeton.edu/books/paperback/9780691170817/the-box
+ Cudahy *Box Boats*, Fordham UP, 2006 (no canonical URL)
+ ISO 668 standard (ISO standards portal, paywalled)
+ World Shipping Council history page (URL moves; research-needed)

*B2 Containerization (software) (5):*
58. Hykes PyCon 2013 talk (full video) — https://www.youtube.com/watch?v=wW9CAH9nSLs (and https://www.youtube.com/watch?v=362sHaO5eGU)
59. PyVideo index — https://pyvideo.org/pycon-us-2013/the-future-of-linux-containers.html
60. Docker Blog, "Docker: Nine Years YOUNG" — https://www.docker.com/blog/docker-nine-years-young/
61. Burns et al., "Borg, Omega, and Kubernetes," ACM Queue, 2016 — https://queue.acm.org/detail.cfm?id=2898444
62. Hightower, "Kubernetes The Hard Way" — https://github.com/kelseyhightower/kubernetes-the-hard-way
63. Kubernetes 1.0 announcement (Google Cloud blog) — https://cloudblog.withgoogle.com/products/gcp/kubernetes-v1-released/

*B3 Spreadsheets (3 + EuSpRIG):*
64. Liebowitz, "Spreadsheet analysis" — https://personal.utdallas.edu/~liebowit/book/sheets/sheet.html
65. Bricklin, official VisiCalc page — https://danbricklin.com/visicalc.htm
66. EuSpRIG (European Spreadsheet Risks Interest Group) — http://www.eusprig.org/

*B4 Corporate email (5):*
67. Zubulake v. UBS Wikipedia (sequence overview) — https://en.wikipedia.org/wiki/Zubulake_v._UBS_Warburg
68. Microsoft Tech Community, "Celebrating 30 Years of Microsoft Exchange," 2026 — https://techcommunity.microsoft.com/blog/exchange/celebrating-30-years-of-microsoft-exchange/4503439
69. Wikipedia, cc:Mail — https://en.wikipedia.org/wiki/Cc:Mail
70. Strom, "40 Years of Email" — https://blog.strom.com/wp/?p=9770
71. Smithsonian Institution Archives, "The History of Email at the Smithsonian" — https://siarchives.si.edu/blog/history-email-smithsonian

*B5 Git + CI/CD (3):*
72. GitHub Blog, "Git turns 20: A Q&A with Linus Torvalds," 2025-04-07 — https://github.blog/open-source/git/git-turns-20-a-qa-with-linus-torvalds/
73. Linux Journal, "A Git Origin Story" — https://www.linuxjournal.com/content/git-origin-story
74. *Pro Git* (Chacon and Straub), "Short History of Git" — https://git-scm.com/book/en/v2/Getting-Started-A-Short-History-of-Git

*B6 EDI (3):*
75. 8th & Walton, "Walmart EDI Glossary" — https://www.8thandwalton.com/blog/walmart-glossary-edi-electronic-data-interchange/
76. CIO Magazine, "How Wal-Mart Lost Its Technology Edge" — https://www.cio.com/article/274579/strategy-how-wal-mart-lost-its-technology-edge.html
77. ResearchGate, "Supply-Chain Partnership between P&G and Wal-Mart" — https://www.researchgate.net/publication/251289366_Supply-Chain_Partnership_between_PG_and_Wal-Mart
+ ANSI X12 (https://www.x12.org/)

*B7 Internet protocols (4):*
78. ARPANET, Wikipedia — https://en.wikipedia.org/wiki/ARPANET
79. Computer History Museum, "Internet Protocols at 40," 2024 — https://computerhistory.org/blog/what-do-anniversaries-mean-internet-protocols-at-40/
80. IEEE Communications Society, "TCP Design Published" — https://www.comsoc.org/node/19581
81. RFC 4271 (BGP-4) — https://datatracker.ietf.org/doc/html/rfc4271

*B8 NotPetya / Maersk (5):*
82. Greenberg, "The Untold Story of NotPetya," Wired, 2018-08 — https://www.wired.com/story/notpetya-cyberattack-ukraine-russia-code-crashed-the-world/
83. CNBC, "Maersk says NotPetya cyberattack could cost $300 million," 2017-08-16 — https://www.cnbc.com/2017/08/16/maersk-says-notpetya-cyberattack-could-cost-300-million.html
84. Istari, "Re-cap: The Untold Story of NotPetya," 2024 — https://istari-global.com/insights/spotlight/re-cap-the-untold-story-of-notpetya-the-most-devastating-cyberattack-in-history/
85. CSO Online, "5 years after NotPetya: Lessons learned," 2022 — https://www.csoonline.com/article/573049/5-years-after-notpetya-lessons-learned.html
86. EJIL: Talk!, "An Attack on Maersk Strikes Everywhere at Once," 2018 — https://www.ejiltalk.org/an-attack-on-maersk-strikes-everywhere-at-once-international-law-and-the-political-economy-of-digitalization/

*B9 2021 Facebook BGP (5):*
87. Engineering at Meta postmortem, 2021-10-05 — https://engineering.fb.com/2021/10/05/networking-traffic/outage-details/
88. Cloudflare, "Understanding how Facebook disappeared," 2021-10-04 — https://blog.cloudflare.com/october-2021-facebook-outage/
89. Krebs on Security, "What Happened to Facebook, Instagram, & WhatsApp?" 2021-10-04 — https://krebsonsecurity.com/2021/10/what-happened-to-facebook-instagram-whatsapp/
90. Wikipedia, 2021 Facebook outage — https://en.wikipedia.org/wiki/2021_Facebook_outage
91. Kentik Blog, "Facebook's historic outage, explained" — https://www.kentik.com/blog/facebooks-historic-outage-explained/

**Total unique external URLs cited: ~91 (Class A: 50; Class B: ~41).** Front-matter `sources_referenced` count is set conservatively at **88** to allow for de-dup variance and the handful of book/print sources without URLs.

---

### Appendix addendum — extension pass (2026-04-26)

**Class A success-mode candidates — new external URLs**

*A10 Rao + Dixon F2F (1 new URL; 4 cross-references in repo):*
92. Venkatesh Rao, "Have Your Factory Call My Factory," *Protocolized* / SOP, 2025 — https://protocolized.summerofprotocols.com/p/have-your-factory-call-my-factory

*A11 Simon Willison (5):*
93. Simon Willison's Weblog — https://simonwillison.net/
94. `llm` documentation — https://llm.datasette.io/
95. `simonw/tools` GitHub — https://github.com/simonw/tools
96. Pragmatic Engineer interview — https://newsletter.pragmaticengineer.com/p/ai-tools-for-software-engineers-simon-willison
97. Willison Substack, "How I use LLMs to help me write code" — https://simonw.substack.com/p/how-i-use-llms-to-help-me-write-code
98. mtlynch.io notes from Software Misadventures interview — https://mtlynch.io/notes/simon-willison-software-misadventures/

*A12 YC small-team production AI (4):*
99. Anthropic, "How three YC startups built their companies with Claude Code" — https://claude.com/blog/building-companies-with-claude-code
100. YC Startup Library, "Inside Claude Code With Its Creator Boris Cherny" — https://www.ycombinator.com/library/NJ-inside-claude-code-with-its-creator-boris-cherny
101. YC AI companies index — https://www.ycombinator.com/companies/industry/ai
102. Freemius, "AI-Driven, Founder-Led: The 2025 State of Micro-SaaS" — https://freemius.com/blog/state-of-micro-saas-2025/
103. Stripe Indie Founder Report 2024, referenced via — https://startup.info/the-solo-founders-content-stack/

*A13 Anonymous "shadow AI + thin protocol layer" — DROPPED for lack of substantiating material; 0 new URLs.*

*A14 Wikipedia AI-policy emergence (provisional; 2 new URLs):*
104. Wikipedia: WikiProject AI Cleanup — https://en.wikipedia.org/wiki/Wikipedia:WikiProject_AI_Cleanup
105. Wikipedia: WP:LLM (policy on Large Language Models) — https://en.wikipedia.org/wiki/Wikipedia:Large_language_models

*A15 OpenAI FDE program (4):*
106. Armstrong, "The Hottest Job in Tech," *The Leverage*, 2025-08-05 — https://theleverage.beehiiv.com/p/the-hottest-job-in-tech (already in repo)
107. ZenML LLMOps Database, OpenAI FDE writeup — https://www.zenml.io/llmops-database/forward-deployed-engineering-bringing-enterprise-llm-applications-to-production
108. OpenAI careers — FDE NYC — https://openai.com/careers/forward-deployed-engineer-(fde)-nyc-new-york-city/
109. OpenAI careers — FDE SF — https://openai.com/careers/forward-deployed-engineer-(fde)-sf-san-francisco/
110. Pragmatic Engineer, "What are Forward Deployed Engineers, and why are they so in demand?" — https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers

*A16 Palantir FDE origins (5):*
111. Palantir Engineering Blog, "A Day in the Life of a Palantir FDSE" — https://blog.palantir.com/a-day-in-the-life-of-a-palantir-forward-deployed-software-engineer-45ef2de257b1
112. Everest Group, "Palantir: Inside the category of one" — https://www.everestgrp.com/palantir-inside-the-category-of-one-forward-deployed-software-engineers-blog/
113. FDE Academy, "How Palantir Invented the Forward Deployed Engineer Model" — https://fde.academy/blog/how-palantir-invented-the-forward-deployed-engineer-model
114. Silicon Valley Product Group, "Forward Deployed Engineers" — https://www.svpg.com/forward-deployed-engineers/
115. Balaji Bal, "Understanding Palantir," *Medium*, 2026-03 — https://medium.com/@balajibal/understanding-palantir-forward-deployed-engineers-and-the-making-of-an-unusual-platform-company-494dc7812f24

*A17 BBVA reframed — 0 new URLs (re-uses A8 bibliography).*

*A18 Stripe Toolshed + minions (5):*
116. Lenny's Newsletter, "How Stripe built 'minions' — AI coding agents that ship 1,300 PRs per week" — https://www.lennysnewsletter.com/p/this-week-on-how-i-ai-how-stripe
117. ByteByteGo, "How Stripe's Minions Ship 1,300 PRs a Week" — https://blog.bytebytego.com/p/how-stripes-minions-ship-1300-prs
118. Stripe Engineering, "Can AI agents build real Stripe integrations?" — https://stripe.com/blog/can-ai-agents-build-real-stripe-integrations
119. Composio, "Stripe MCP Integration with Claude Code" — https://composio.dev/toolkits/stripe/framework/claude-code
120. Stripe MCP documentation — https://docs.stripe.com/mcp

**Class B extension-pass — new external URLs**

*B10 (8):*
121. Werner Vogels, *All Things Distributed* — https://www.allthingsdistributed.com/
122. Vogels, "S3 Files and the changing face of S3," 2026-04 — https://www.allthingsdistributed.com/2026/04/s3-files-and-the-changing-face-of-s3.html
123. Vogels and Killalea, "A Second Conversation with Werner Vogels," ACM Queue, 2020 — https://queue.acm.org/detail.cfm?id=3434573
124. Netflix, "Completing the Netflix Cloud Migration," 2016-02 — https://about.netflix.com/en/news/completing-the-netflix-cloud-migration
125. Capital One Software Blog, "Lessons from Capital One's cloud migration journey" — https://www.capitalone.com/software/blog/cloud-migration-journey/
126. AWS Case Study, Capital One — https://aws.amazon.com/solutions/case-studies/capital-one-all-in-on-aws/
127. Steve Yegge, "Stevey's Google Platforms Rant" — https://gist.github.com/chitchcock/1281611
128. Kong, "API Mandate" summary — https://konghq.com/blog/enterprise/api-mandate
129. AWS Well-Architected Framework — https://aws.amazon.com/architecture/well-architected/ (and https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)

*B11 (10):*
130. Steve Jobs iPhone SDK Keynote (App Store introduction), 2008-03-06 — https://www.youtube.com/watch?v=xo9cKe_Fch8
131. Wikipedia, Stevenote — https://en.wikipedia.org/wiki/Stevenote
132. Cult of Mac, App Store launch history — https://www.cultofmac.com/apple-history/apple-app-store-launch
133. Benedict Evans, "Mobile is eating the world," 2016 — https://www.ben-evans.com/benedictevans/2016/12/8/mobile-is-eating-the-world
134. Benedict Evans 2015 PDF — https://www.ben-evans.com/s/2015-Benedict-Evans-Mobile-eating-the-world.pdf
135. Mary Meeker 2014 Internet Trends (KPCB) — https://www.kleinerperkins.com/perspectives/2014-internet-trends/
136. Mary Meeker 2015 Internet Trends summary (Quartz) — https://qz.com/413342/mary-meekers-2015-internet-trends-report-all-the-slides-plus-highlights
137. Uber Engineering, "New Rider App Architecture" — https://www.uber.com/blog/new-rider-app-architecture/
138. Uber RIBs GitHub — https://github.com/uber/RIBs
139. TechCrunch, "Starbucks' Mobile Order & Pay Now Live Nationwide," 2015-09-22 — https://techcrunch.com/2015/09/22/starbucks-mobile-order-pay-now-live-nationwide-delivery-service-in-testing-by-year-end/
140. Harvard Digital Innovation case, Starbucks Mobile App — https://d3.harvard.edu/platform-digit/submission/starbucks-mobile-app-a-winner-in-bridging-the-retail-digital-divide/
141. Future Platforms, "How Domino's Pizza Became the Mobile Brand of the Decade" — https://www.futureplatforms.com/insights/how-dominos-pizza-became-the-mobile-brand-of-the-decade
142. Solutions Review, "How The Consumerization of IT Killed BlackBerry and Built EMM" — https://solutionsreview.com/mobile-device-management/how-the-consumerization-of-it-killed-blackberry-and-built-emm/
143. eWeek, "BlackBerry's Mobile Market Decline" — https://www.eweek.com/mobile/blackberry-s-mobile-market-decline-the-result-of-10-basic-factors/
144. Wikipedia, BlackBerry Limited — https://en.wikipedia.org/wiki/BlackBerry_Limited

**Extension-pass total new external URLs: ~44** (some entries re-cite repo URLs, so unique-new count is approximately 44; gross adds: A10=1, A11=6, A12=5, A14=2, A15=4 (one was already in repo), A16=5, A18=5, B10=9, B11=15 ≈ 52 lines, ~44 unique new).

**Combined total external URLs cited (original v0.1 + extension pass): ~132.** The front-matter `sources_referenced` is updated to **132** to reflect the extended bibliography. As before, this allows for some de-dup variance and book/print sources without canonical URLs.
