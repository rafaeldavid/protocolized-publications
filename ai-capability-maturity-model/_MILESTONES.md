# AI Capability Maturity Model — Milestone Log
Append-only record of completed work, key decisions, and current status. Newest entries at the top.

---

## Current Status (as of 2026-03-24)

**Active work:** Homepage (`homepage/index.html`) built and style-reviewed. Next action: irony/humor pass on litepaper per `_VOICE-FEEDBACK.md`.
**Blocking items:** None.
**Versioning:** v1.0 is the deployed baseline. Future artifact changes tracked as v1.1, v1.2, etc. (incremental) or v2.0 (major model update). New versions saved as separate files before promoting to deployment.

---

---

## Milestone Log

### 2026-03-24 | Homepage — built, style-reviewed, and published

- **What:** `homepage/index.html` created as a standalone project landing page aggregating all three published deliverables (assessment, litepaper, blog post).
- **Structure:** Two-row sticky nav (cross-site primary + in-page secondary) · hero with blurred background image · intro block · deliverables grid (3 cards) · five-level model overview with CTA block · about strip · footer. Matches existing site aesthetic (fonts, colours, hero treatment).
- **Style guide pass:** Six violations corrected against `_REPORT-STYLE.md`:
  - Intro ¶1: hedged "rarely" → confident "not"
  - Intro ¶2: em-dash pair restructured to subject-first sentence
  - Diagnostic card: em-dash → colon; "concrete" removed; "blindspots" → "blind spots"
  - Blog card: em-dash → comma
  - L2 desc: "become external-facing" → "reach customers or regulators"
  - CTA: "concrete next action" → "next action"
- **Em-dash count after edits:** 1 (hero subtitle only; ceiling is 2–3).
- **Published:** `https://protocolized.dev/` (here.now slug: `gleaming-sketch-5q8b`, authenticated, permanent). Root domain mount updated — previous redirect replaced with homepage.
- **File:** `homepage/index.html`.

### 2026-03-20 | YAML v3 + Artifact HTML — blog alignment pass

- **What:** Updated YAML model definition to v3.0 and synced insights into the artifact assessment HTML.
- **YAML v3 changes (ai-cmm-v3.yaml):** 12 additions across model header and all levels — control-problem reframe, timing mismatch field, artifact boundary dissolution (L2 blind_spot), bilateral pipeline invisibility (L2 failure mode FM2-5), bricoleur/FDE transition framing (L2 progression), orientation debt (L3 blind_spot + FM3-5), domain expertise as higher-level perception (FM3-5), execution/domain scarcity inversion (FM3-6), F2F governance requirement (L3 progression), intelligence media shift (L4 blind_spot), organic discovery catalyst and mechanism (L2→3 transition).
- **Artifact HTML changes (7 edits):** Entry intro (wrong-question reframe); rationale section updated (control problem → protocol design + timing mismatch); L2 card (artifact boundary dissolution); L3 card (higher-level perception + commodity execution); L4 card (intelligence media / F2F); L1 dim (bilateral pipeline invisibility); L3 dim (orientation debt).
- **Published:** artifact `thorny-basin-5xkf` (authenticated, permanent).

### 2026-03-20 | Litepaper v7 — second alignment pass (tightening)

- **What:** Eight targeted edits to `litepaper-draft-v7.md` tightening the v6 additions.
- **Changes:**
  - §1: HBR intensification hook added as observable symptom of missing protocol layer
  - §1: Control-problem reframe strengthened — "necessary but insufficient" → "wrong question entirely"
  - Level 2: Artifact boundary dissolution reframed as transition pressure forcing L2→L3
  - Level 2: Connective sentence added before Mann Gulch: "you cannot design an escape fire from headquarters"
  - Level 3: Waterfall inversion reinforced as correct response at striated-zone boundary
  - Level 3: F2F coordination connected explicitly to domain expertise paragraph
  - Level 3: Orientation debt connected to F2F pipeline evaluation
  - Level 3: "Neither writes code" paragraph framed as inversion of public AI narrative
- **Files:** `litepaper-draft-v7.md` (new working draft), `litepaper-draft-v6.md` (preserved).

### 2026-03-20 | Litepaper v6 — blog alignment pass

- **What:** Nine targeted additions to `Litepaper/litepaper-draft-v6.md` to align the litepaper's theory and framing with the blog post (v1.2 anchor).
- **Changes:**
  - §1: Added control-problem vs. protocol-design reframe (the blog's core argument, now explicit in litepaper intro)
  - §1: Added "individuals discover, organizations lag" timing-mismatch framing
  - Level 2: Added artifact boundary dissolution paragraph (cognitive burden of receiving AI-generated context)
  - Level 2: Added Mann Gulch / Wag Dodge / Karl Weick bricoleur narrative before FDE section
  - Level 3: Added orientation debt as individual-level correlate of temporal divergence (Level 3 failure mode)
  - Level 3: Added domain expertise as higher-level perception (mechanism, not just constraint label)
  - Level 3: Added "neither writes code" / AI as commodity execution inversion
  - Level 4: Added F2F pattern (factory-to-factory) and destination-intelligence-to-intelligence-media shift
  - §5: Softened regulatory emphasis — organic discovery named as primary driver; regulation as accelerant
- **Source:** Blog post v1.2 used as content anchor; comparison produced by structured agent analysis.
- **Files:** `litepaper-draft-v6.md` (new working draft), `litepaper-draft-v5.md` (preserved).
- **Next:** Sync v6 prose to `html/index.html`; irony/humor pass per `_VOICE-FEEDBACK.md`.

### 2026-03-20 | Blog post v1.2 — new content revision published

- **What:** Major content revision to `Blog-Post/SIG-update/publish/index.html`. Source: new PDF draft ("The Missing Protocol Layer: Why AI Intensifies Work").
- **Title/subtitle updated:** Page title and hero subtitle updated to reflect new framing — "Why AI Intensifies Work".
- **Five levels simplified:** Samsung (L1), Klarna (L2), Uber (L3) case study text removed from level descriptions. Levels now show concise description + historical parallel only.
- **Section 2 replaced:** "Mismatched Adoption Speeds" → "Who Can Best Orient To New Protocols?" New opening framing (CMM as map for domain experts, not newcomers). Soccer player / orientation debt analogy added at end.
- **Section 3 replaced:** "The Missing Layer" (ISO container callout + governance conclusion) → "Bricoleurs as Protocol Entrepreneurs" — Mann Gulch / Wag Dodge story, Karl Weick bricoleur concept, enterprise AI governance reframe. Governance conclusion retained in condensed form.
- **Bug fix:** `scroll-padding-top: 58px → 88px` (was too short for two-row sticky nav).
- **Published:** blog `witty-garnet-6k4f` (authenticated, permanent).

### 2026-03-19 | Hero cleanup + litepaper CTA — all three pages

- **What:** Four targeted fixes across all three pages.
- **Hero byline removed:** `.hero-byline` block ("Protocolized · March 2026") removed from HTML and CSS on all three pages — redundant with label date.
- **Substack footer link removed:** "Protocolized on Substack" icon link removed from blog and maturity model footers.
- **Litepaper CTA block added:** New section between `#how-to-use` and `#notes` with styled CTA block — "Take the assessment" heading, description, primary button → `/ai-maturity-model/`, secondary button → subscribe. Added `.cta-block`, `.btn`, `.btn-primary`, `.btn-secondary` CSS to litepaper.
- **Mobile button spacing fixed:** Hero pill-links gap increased `10px → 16px` on mobile; `.btn-secondary` gets `margin-left: 0; margin-top: 12px` when stacked on mobile (blog and litepaper).
- **Tests:** All 119 passing. Published: blog `witty-garnet-6k4f`, litepaper `arctic-ribbon-7nvb`, maturity model `thorny-basin-5xkf`.

### 2026-03-19 | Cross-site nav + hero harmonization — all three pages

- **What:** Unified two-row navigation and harmonized hero banners across all three published pages (blog, litepaper, maturity model).
- **Nav:** Primary row: Protocolized wordmark + Maturity Model | Litepaper | Blog | Subscribe (current page in accent). Secondary row: page-specific in-page section anchors (lighter, smaller). Hidden on mobile. Blog had IDs added to its h2 section headings.
- **Hero CSS (all three):** Padding → `100px 0 80px`; blur → `10px`; overlay → `rgba(10,8,28,0.60)`; H1 → `2.4rem`; H1 text-shadow → `0 1px 8px rgba(0,0,0,0.5)`; subtitle → mono `0.95rem` white `72%` max-width `600px`; label → mono `400w` white `55%`.
- **Hero content:** Labels standardized to content-type + date: "Blog Post · March 2026" / "Litepaper · March 2026" / "Interactive Diagnostic · March 2026". All three use `finding-fault-lines.jpg`. Maturity model H1 → "AI Capability Maturity Assessment"; blog H1 → added `<span>Protocol Layer</span>` accent. Blog got hero CTA pill-links (→ Interactive diagnostic, → Litepaper). Maturity model consolidated from two subtitles to one ("A Practical Guide for Deployment Managers"). Hero byline (Protocolized · March 2026) added to litepaper and maturity model.
- **Class rename:** `hero-meta` → `hero-byline` across all three (resolved conflict with pre-existing regression test I-1/I-2 in design-tests-v3.py).
- **Tests:** All 119 tests passing (58P/1W/0F, all, 11/11).
- **Published:** blog `witty-garnet-6k4f`, litepaper `arctic-ribbon-7nvb`, maturity model `thorny-basin-5xkf` — all authenticated/permanent.

### 2026-03-19 | Litepaper v5 — doomer tone pass complete; HTML published

- **What:** Third full revision pass applied to `litepaper-draft-v5.md`. 20 prose edits across three sequential passes, each approved or modified by author. v4 → v5 change set: §2 subheader, governance intro, failure modes paragraph, risk management sentence, smooth space sentence, shipping container close, ontological drift close (cut third restatement), §1 "empirical picture establishes" (deleted), L1 historical parallel close, L4 failure mode, §5 Air Canada (removed unquantified reputational damage), L5 (deleted "no confirmed case anchors," "trajectory and a warning," "not a transition target"), L5 subheader tagline, L5 failure mode doom list (collapsed to one sentence), §6 opening, §6 closing, §2 theory sentence.
- **Voice memo:** `Litepaper/_VOICE-FEEDBACK.md` — editorial notes on voice, tightening, Ribbonfarm-style irony, doomer tone reduction. 8 priority items for next pass (irony/humor).
- **HTML:** All 20 v5 prose changes synced to `html/index.html`. Version string updated to "Version 5 (doomer tone pass)". All three test suites (design-tests.py, design-tests-v2.py, design-tests-v3.py) passing.
- **Published:** `https://protocolized.dev/litepaper-ai-protocols/` (here.now slug: `arctic-ribbon-7nvb`, authenticated, permanent).
- **Files:** `litepaper-draft-v5.md` (current working draft), `litepaper-draft-v4.md` (style-reviewed draft, preserved), `html/index.html` (live source).
- **Next:** Irony/humor pass per `_VOICE-FEEDBACK.md` priority list. Start with Samsung "independently" aside, Air Canada "separate legal entity" moment, Klarna gap, Waterfall sentence elevation.

### 2026-03-18 | Litepaper pre-draft complete — outline, bibliography, gap-filling

- **Litepaper outline v0.1** (`Litepaper/litepaper-outline-v0.1.yaml`): YAML DSL with full argument structure. Thesis → 10 critique rounds → 5 ontological definitions → 6 sections → 5 levels (each with governing protocol, blind spot, failure mode, case anchors, emerging protocol, historical parallel, transition requirement) → emerging protocols map → open questions (all resolved).
- **Bibliography v0.2** (`Litepaper/litepaper-bibliography.md`): 40 sources mapped to sections, citable claims, Chicago 17th ed. citations. All critical gaps filled.
- **Gap-filling**: Source catalog expanded from 36 to 40 entries. New entries: Air Canada chatbot liability (entry 37), SEI CMM/Humphrey (entry 38), NIST AI RMF 1.0 (entry 39), EU AI Act 2024/1689 (entry 40).
- **McKinsey PDF verified**: `the-state-of-ai-in-2025-vf.pdf` added to Resources. Prior annotation error corrected: "33%→65%" was a misattribution. Correct figures: 88% adoption, 39% EBIT impact, ~6% high performers, 65% vs. 23% gap on human-in-the-loop validation.
- **Artifact updated**: Boom Supersonic case study link updated to Blake Scholl's Substack (primary source). Deployed to protocolized.dev/ai-maturity-model/.
- **Remaining before first draft**: verbatim quote extraction from 12 local PDFs (listed in bibliography Part 5).

### 2026-03-18 | Blog post v1.1 — published to protocolized.dev/blog-the-missing-layer

- **What:** Blog post "The Missing Protocol Layer" (v1.1) published as standalone HTML page at https://protocolized.dev/blog-the-missing-layer/.
- **Changes from v1.0:** Samsung (L1), Klarna (L2), Uber (L3) case study references added; ISO containerization parallel added to The Missing Layer section; eight voice/style changes reverted per author review.
- **Design:** Matches CMM artifact aesthetic — same fonts, colours, nav, hero with blurred background, footer. Level descriptions rendered as cards. Containerization paragraph as callout block. CTA links to maturity model and subscribe.
- **protocolized.dev/blog/** redirects to protocolized.summerofprotocols.com (same as root).
- **CMM artifact updated:** "Read more ↗" button (btn-secondary, centered) added to "Why this model exists" section, linking to blog post.
- **here.now slugs:** blog post = `witty-garnet-6k4f`; blog redirect = `whimsy-turret-j9jc`.

### 2026-03-17 | Artifact v1.12 — published to protocolized.dev

- **What:** Artifact published as permanent static site at https://protocolized.dev/ai-maturity-model/ via here.now hosting.
- **Domain setup:** protocolized.dev registered with here.now; ALIAS + TXT records added in Porkbun; SSL active. Root domain redirects to protocolized.summerofprotocols.com.
- **Subscribe link fix:** Top nav Subscribe updated from summerofprotocols.com homepage to /subscribe.
- **Deploy workflow:** `Artifact/publish/index.html` is the canonical deploy source (copy of current draft). Update draft → copy to publish/ → republish with `--slug thorny-basin-5xkf`.
- **here.now slug:** `thorny-basin-5xkf` (authenticated, permanent).

### 2026-03-17 | Artifact v1.0 — deployed as public Claude artifact

- **What:** v1.0 promoted from draft to public deployment. Phase 5 complete.
- **Final polish applied before deployment:** mono font consistency across `.context-intro` elements; exit card buttons equalized and centered; hero title block centered; competing column widths resolved (single 920px column); mobile hamburger nav; case study source links; footer icons (Substack + GitHub) and disclaimer; historical parallel callouts on all five level cards; expandable dimension panels; layout test suite (21/21 passing).
- **Versioning established:** v1.0 is the deployed baseline. Incremental changes → v1.1, v1.2. Major model updates → v2.0.
- **Remaining:** Add public artifact URL to README and planning docs once confirmed.

### 2026-03-16 | HTML Artifact v1 — built, polished, pushed to GitHub

- **What:** Interactive diagnostic artifact built from scratch and iteratively polished in one session. Pushed to GitHub (commit 4824dcb).
- **File:** `Artifact/drafts/v1.html` (~1,900 lines, single-file, no external CDN)
- **Structure:** Five sections — Entry, Context (five level cards), Case Studies (Samsung/Klarna/Boom), Self-Assessment (two-step funnel), Output card (level-specific diagnosis)
- **Assessment logic:** Step 1 recognition (options A/B/C → provisional level) → Step 2 scenario (3 options each → 9 paths) → 5 possible placements (L1, L2, L2-3, L3, L3-4)
- **Level cards:** Each has number + name, 1-sentence tagline, description paragraph, historical parallel callout, expandable dimension panel (6 dimensions with value badges and descriptions)
- **Output cards:** Level placement, tagline, 2-sentence description (second person), failure mode (3 sentences), single next action (done-when condition), five-level arc visual with current level highlighted
- **Style guide compliance:** Style review pass complete — negative parallelism reduced, em-dash pairs eliminated, assertion adverbs removed, managerial filler replaced. Source citations added to all statistics.
- **QC:** `_ARTIFACT-QC.md` created — 22 criteria across 5 categories (Audience Fit, Content Accuracy, Style Guide, Assessment UX, Technical); 22/22 passing
- **Key design decisions:** Document-title hero (not fear-based); context section leads with five level cards (not intro text); historical parallels as accent callouts; no score — diagnosis only; print stylesheet for output card
- **Historical parallels per level:** L1: Lotus 1-2-3 spreadsheets (mid-1980s) · L2: Corporate email/Exchange (early 1990s) · L3: Git + CI/CD (2008–2015) · L4: EDI in retail (late 1980s–90s) · L5: Internet protocols/BGP (2000s–present)

### 2026-03-16 | YAML DSL v2.2 — historical analogues per level; containerization throughline

- **What:** Added `historical_parallels` block to all five level definitions. Each level now has a `period_technology` (a historical technology that was at that maturity stage during its own adoption arc) and a `containerization_throughline` (what ISO containerization looked like at that stage, as a single coherent throughline across the model).
- **Period technologies:**
  - L1: Spreadsheets in accounting (Lotus 1-2-3, mid-1980s) — shadow use, individual gains, organizational risk invisible
  - L2: Corporate email (Microsoft Exchange / Lotus Notes, early 1990s) — mandate without workflow design, attention overload as new persistent problem
  - L3: Git + CI/CD in software (2008–2015) — designed workflow, competitive position depends on it, domain expertise is the constraint
  - L4: EDI in retail/manufacturing (late 1980s–90s) — license-to-operate requirement, individual advantage commoditized, sector floor raised
  - L5: Internet protocols (TCP/IP, BGP) — invisible global infrastructure, failure propagates before any actor can respond
- **Containerization throughline:**
  - L1: Pre-standard experimentation (1950s–60s) — McLean's first containers, proprietary box sizes, no inter-operability
  - L2: ISO standardization mandated, infrastructure not yet built (1965–75) — 20ft/40ft standards adopted, ports being rebuilt but rail/trucking lagging
  - L3: Intermodal system designed end-to-end (1975–90) — Maersk builds competitive moat on logistics precision, vertical integration collapses Slacker Index
  - L4: Universal adoption as license-to-operate (1990s–2000s) — supply chain becomes mainstream discipline, governance shifts to managing interdependencies
  - L5: Invisible planetary infrastructure (2000s–present) — Maersk ransomware, Ever Given, COVID port congestion as cross-sector cascading failures

### 2026-03-16 | YAML DSL v2.1 — table analysis pass; project docs updated; HTML artifact added

- **What:** Final model refinement pass based on "Table Learning to See Business Protocols" (catalog entry 35). Project docs updated to reflect Phase 1–2 completion and add Phase 5 (HTML artifact).
- **Changes to ai-cmm-v2.yaml:**
  - Version bumped to 2.1
  - Model header: added `# Protocol trade pattern` note — protocols trade problems, not eliminate them; today's AI friction signals existing protocols pushed beyond design range
  - Level 1 description: added "pushed beyond design range" framing — shadow adoption is the signal, not the moral failure
  - L2→3 transition: added slop management / discovery protocol note — the unsolved protocol problem Level 3 organizations are building toward
  - Level 5 description: added containerization and printing press as historical precedents for planetary protocol embedding
  - Level 5 case_anchors: added ISO Containerization (1960s–present) as `historical_analogy` — physical interface protocol → planetary infrastructure → systemic fragility. Maersk attack as canonical early-L5 failure mode example
- **Source catalog:** Added entry 35 (Table: Learning to See Business Protocols) with full annotation
- **Project docs updated:**
  - _PROJECT.md: added HTML artifact as third deliverable; updated last updated date
  - README.md: updated status; added Model Development section with file map; added HTML artifact to outputs table
  - _WORKPLAN.md: Phase 1–2 marked complete; Phase 5 (HTML artifact) added; completion tracker updated
  - _MILESTONES.md: current status updated

### 2026-03-16 | Model Development Phase Complete — YAML DSL v2, GitHub push

- **What:** Full Model Development phase completed in one session. All deliverables committed to GitHub.
- **Deliverables created:**
  - `Research/source-catalog.md` — 34 annotated entries across 7 categories (case studies, governance theory, adoption data, org design, iteration methodology, protocol theory foundational + applied)
  - `Research/case-studies-overview.md` — confirmed-facts-only overview of 9 case studies (Samsung, legal profession, healthcare, Klarna, Shopify, Duolingo, Uber, Boom Supersonic, Air Canada, Rao/Dixon)
  - `Model-Development/recomposition-plan.md` — task plan and resource map for YAML recomposition
  - `Model-Development/thesis-extraction.md` — 5 load-bearing claims, structural assumptions, weaknesses
  - `Model-Development/model-critique.md` — 12-point critique of v4; preserve/discard/develop table
  - `Model-Development/evaluation-criteria.md` — Section A (7 required), Section B (10 quality), Section C (5 fitness) criteria
  - `Model-Development/ai-cmm-v1.yaml` — first YAML DSL version (baseline)
  - `Model-Development/resource-critique-v2.md` — 10-category critique of v1 against all 34 resources; consolidated change list
  - `Model-Development/ai-cmm-v2.yaml` — revised YAML DSL with all critique changes applied
- **Key design decisions:**
  - Level names: Shadow / Sanctioned / Designed / Infrastructural / Planetary
  - Heterogeneity stance: `bottleneck` (effective level = highest-value/highest-stakes function where governance is weakest)
  - Unit-of-analysis: individual → org → business model → industry/market → civilization
  - Boom Supersonic: late Level 3 (not L4–5 as in v4)
  - Level 4/5 case anchors marked `status: projected`; no confirmed fully realized examples
  - 6 protocol dimensions replacing v4's 12-dimension table
  - `ai_exposure` and `stuck_pattern_guidance` fields added
  - Style: _REPORT-STYLE.md rules applied (vocabulary constraints excluded)
- **GitHub:** Initial commit pushed to https://github.com/rafathebuilder-ZK/protocols-AI-capability-maturity-model (30 files, 6,716 lines)

### 2026-03-15 | Project Initialized

- **What:** Project skeleton created — README, _PROJECT.md, _WORKPLAN.md, _MILESTONES.md, folder structure, output briefs, research templates
- **Prior work inventoried:** `AI_Capability_Maturity_Model_v4.docx` (January 2026) — 5-level model, deployment manager audience, shadow AI + code quality focus. This project is net new, not a v5.
- **Key framing decisions:**
  - Central argument: AI adoption failure is a protocol failure — organizations applying enterprise-software governance logic to a probabilistic stack
  - Unit of maturity: organization's ability to govern uncertainty productively (not process compliance)
  - Two outputs: blog post (~1,500 words) + litepaper (8–12 pages)
  - Both grounded in desk research only; no fieldwork
