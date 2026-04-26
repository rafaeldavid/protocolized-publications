# Backlog

Parsed items from the `Feedback-Inbox/`. Grouped by theme. Status values: `intake | triaged | planned | shipping | shipped | wont-do`.

Initial batch sourced from [`Feedback-Inbox/2026-04-24-v1-review.md`](Feedback-Inbox/2026-04-24-v1-review.md). Subsequent additions noted inline with date and source.

**Items added 2026-04-25** (post-Quiz-v0.8 design session): NAV-002, CONTENT-003, ASSESS-006, ASSESS-007, FEATURE-003. All scheduled for *after* the current archetype-assessment design (Quiz-v0.8) ships.

**Items added 2026-04-26** (first copy-edit pass via the in-page editor mode): CONTENT-004, CONTENT-005, CONTENT-006, CONTENT-007, CONTENT-008, IA-007. Imported from the editor-mode KV store (8 substantive suggestions across `/levels/` and `/case-studies/`).

**IA-007 expanded later 2026-04-26** (follow-up conversation): from "two-class case studies" into a full **Case Studies Library** with a multi-week design brief — unified card template, 6 seed Class B tech-arc cases (containerization, Excel/spreadsheets, corporate email, Git/CI-CD, EDI, internet protocols), and tech-arc cards peppered throughout the site. CONTENT-008 absorbed.

**Items added 2026-04-26 (later)**: FEATURE-005 (Feed page — daily curated AI-adoption news/blogs/essays). Adjacent to OBS-002 (shared discovery layer; distinct outputs); design brief queued in `_Product/Feed-Design/`.

---

## Design / aesthetics

### DESIGN-001 — Aesthetic refresh (whole site)
- **Scope:** New palette + typography + visual system. Exit the "Notion notebook × Big Essay" aesthetic. Direction: move past AI-2026 / LinkedIn boilerplate / Gartner-report look. Add flair/sprezzatura. Less austerly platonic.
- **Rationale:** Current look reads as generic corporate-editorial; reviewer specifically flagged palette + fonts as "lacking in freshness/popping."
- **Open questions:** Reference sites Rafa likes? Willingness to commission a designer vs. iterate via Claude's frontend-design skill?
- **Status:** intake

### DESIGN-002 — Anchor graphics throughout
- **Scope:** Add visual anchors to break up long prose blocks across all four pages (homepage, artifact, litepaper, blog).
- **Rationale:** "Big wall of text energy" — readers need visual scaffolding, not just text hierarchy.
- **Dependencies:** Best tackled after DESIGN-001 so new graphics inherit the new visual system.
- **Status:** intake

### DESIGN-003 — Pyramid diagram, 5 level-highlighted variants
- **Scope:** Core 5-level pyramid with 5 rendered states, each highlighting one level. Used inline on individual level pages and as navigation affordance.
- **Rationale:** Anchor graphic for the model itself. Pairs with IA-001 (individual level pages).
- **Status:** intake

### DESIGN-004 — Master interactive diagram
- **Scope:** Single pyramid diagram with hover/tap text boxes explaining each level.
- **Rationale:** Canonical one-glance view of the model for homepage / about / litepaper hero.
- **Dependencies:** DESIGN-003 (same visual source).
- **Status:** intake

---

## Information architecture

### IA-001 — Split levels into individual pages
- **Scope:** Two phases. Phase A (**shipped 2026-04-24**): single `/levels/` page carved out of the artifact, hosting all five level cards with drilldowns. Phase B (queued): split the single page into five per-level URLs (`/levels/shadow`, `/levels/sanctioned`, etc.) for deeper linkability + SEO.
- **Rationale:** Phase A gives users a dedicated Levels destination without creating five new mounts. Phase B does the full split when we have per-level content worth expanding into its own page.
- **Status:** phase-A shipped · phase-B intake

### IA-002 — About page
- **Scope:** New top-nav page. Introduces the SIG, names members/contributors with photos, explains the relationship between Protocolized, Protocolized mag, and SOP / Protocol Institute.
- **Rationale:** Reviewer: "It's not obvious why the website is called protocolized.dev." The About page answers the "who are these people and why should I trust them" question.
- **Open questions:** Contributor list + photo permissions. Protocol Institute naming/launch timing — do we say "soon to be" or wait?
- **Status:** intake

### IA-003 — Case Studies page (top-level)
- **Scope:** New top-nav page. Reviewer said "3 paras is enough" — doesn't need depth, just existence and discoverability. Start with the five case studies already researched (GTFS, FHIR, UK Open Banking, Green Button, Australia BOM).
- **Rationale:** Case studies currently live inside the artifact's "cases" section; promoting them gives the neutral-commons brand (BRAND-001) something concrete to point to.
- **Status:** intake

### IA-004 — Lexicon page (stretch)
- **Scope:** Glossary of Protocolized-specific terminology: bespokification, kitification, orientation loss, execution paralysis, vibe coding, archival vs carnival, etc. Each term gets an anchor tag for deep-linking from other pages.
- **Rationale:** Reinforces BRAND-002 (distinctive terminology) and CONTENT-002 (literacy). Reviewer flagged this as "stretch" — lower priority, but high brand value. Note: definitions should be "slightly funny."
- **Status:** intake

### IA-005 — Individual pages pattern for level detail + concepts
- **Scope:** Establish a consistent "detail page" template (used by IA-001 level pages and potentially concept entries in IA-004 lexicon if any graduate to full pages).
- **Rationale:** Consistency across the growing page set. Identified as a template need while parsing.
- **Status:** intake

### NAV-001 — Top-nav expansion `(partially absorbed by IA-006)`
- Original scope: expand primary nav to include About, Case Studies, Lexicon. `IA-006` handles the immediate re-ordering + label update (Assessment · Case Studies · Levels · Blog · Litepaper). About stays queued until `IA-002` ships; Lexicon stays queued until `IA-004` ships.
- **Status:** partial-done via IA-006; remainder queued

### NAV-002 — Breadcrumb navigation on child pages (case studies, levels, assessment)
- **Scope:** Add litepaper-style breadcrumb navigation to the case studies page, the levels page, and the assessment page. On the case studies page, breadcrumbs display *case study names* (e.g., "Shadow Data Leak," "Mandate Reversal"), not company/organization names. Pattern matches the existing litepaper breadcrumbs.
- **Rationale:** Source: 2026-04-25 conversation. Improves wayfinding on multi-section pages and aligns navigation pattern across the site. Case-study-name (vs. company-name) labeling preserves Protocolized's framing of cases as protocol patterns rather than vendor stories.
- **Dependencies:** IA-001 phase A (levels page exists), IA-003 (case studies page promoted), FEATURE-003 (multi-quiz assessment hub).
- **Status:** **shipped 2026-04-25** — `.nav-secondary` blocks added to all three pages. Case-studies anchors: `#shadow-data-leak`, `#mandate-reversal`, `#non-optional-mandate`, `#contractor-replacement`, `#chatbot-liability`. Levels anchors: `#shadow`, `#sanctioned`, `#designed`, `#infrastructural`, `#planetary`. Assessment: `#assessment` (Begin), `#output` (Result).

### IA-007 — `/case-studies/` → Case Studies Library (design brief + design phase)
- **Scope:** Convert `/case-studies/` from a 5-card AI-adoption page into a structured **Case Studies Library** with a unified card template and two distinct case classes that scale to ~15+ entries. Treat as a multi-week design effort modelled on Quiz-v0.8 (i.e. lock a design brief first, iterate on the structure, *then* implement) — not an incremental edit.
  - **Class A — AI adoption stories** (current 5 + ongoing additions): Samsung, Klarna, Shopify, Duolingo, Air Canada. Working tagline: "Today's adoption stories."
  - **Class B — Technology-arc cases** (new — historical and adjacent technology shifts that surface protocol patterns relevant to reasoning about AI). Seed inventory:
    1. **Containerization** (Docker / Kubernetes) — packaging-as-protocol, runtime portability
    2. **Excel spreadsheets and org design** — end-user computing, shadow IT precedent, calc-as-coordination
    3. **Corporate email adoption** — protocol-becoming-infrastructure; an L4 → L5 historical analog
    4. **Git + CI/CD** — version control as coordination protocol; review-as-gate
    5. **EDI in retail and manufacturing** — inter-firm protocol adoption; mandates as forcing functions
    6. **Internet protocols** (TCP/IP, HTTP, SMTP) — sample L5 case: planetary-scale invisible coordination
    7. **Cloud era** (~2006 AWS S3/EC2 → present) — IaaS/PaaS/SaaS adoption arcs. Strong L1 → L5 hindsight: shadow cloud (devs spinning up unauthorised AWS accounts) → sanctioned (CIO-approved vendor list) → designed (cloud-architect role, well-architected reviews) → infrastructural (cloud-native by default) → planetary (the cloud as ambient compute substrate). Rich success/failure split: Netflix migration vs. retail laggards. Added 2026-04-26 — reviewer flagged that Class B was thin on the obvious 20-year tech arc.
    8. **Mobile era** (~2008 App Store → present) — smartphone adoption changing org workflows. Same L1 → L5 hindsight: shadow BYOD → sanctioned MDM → designed mobile-first product strategy → infrastructural API-first/mobile-as-default → planetary ambient computing. Rich success/failure split: Uber/Airbnb/Starbucks (mobile-native) vs. retailers who bolted on apps. Added 2026-04-26 alongside Cloud.

  Plus, on the **Class A success-story** side: the current Class A roster is failure-heavy (Samsung, Klarna, Air Canada, Duolingo all cautionary). CONTENT-007 already requests a Folkway/Guild L1 success counterpart (F2F pattern). 2026-04-26 reviewer broadens this: actively hunt for L1 and L2 *success* candidates — orgs that handled early adoption well, not just badly. Candidates to research: F2F-pattern individuals; companies that sanctioned AI with deliberate review protocols early (Anthropic ops? Vercel? Linear?); BBVA's 4000-GPTs reframed as a L2 → L3 transition success rather than a pure L4 case.
  - Plus the org-design transitions outlined at [npc.here.now/ai-org/](https://npc.here.now/ai-org/) — could be additional Class B cases or a sidebar linking out.
  - **Pepper Class B cases throughout the site**, not just on `/case-studies/` — surface the most relevant tech-arc case inline on the homepage, the litepaper, and individual level pages where it grounds a claim.
- **Rationale:** Source: 2026-04-26 conversation. AI-adoption cases alone show point-in-time symptoms; the protocol-emergence pattern across technology shifts is what makes the model legible. Adding tech-arc cases turns `/case-studies/` from a sympathy gallery into a reference library and gives the SIG's "neutral commons" voice (BRAND-001) historical depth. Volume (~10–15+ cards) breaks the existing single-row breadcrumb pattern (NAV-002) and the current ad-hoc card markup — both need rethinking together.
- **Design brief — open questions to lock before implementation:**
  - **Naming:** Class A working title is "Today's adoption stories"; Class B name is open (candidates: "Technology arcs," "Protocol precedents," "Historical analogs," "How protocols emerge"). The names anchor the brand narrative and need to land before card copy is written.
  - **Card template:** A single template both classes use, with class-tagged metadata. Fields likely include: title, class (A/B), level mapped (L1–L5), one-line frame, decade, what-changed, what-the-protocol-looked-like, what-AI-can-learn-from-it, source links. Specifically, what does the card look like at thumbnail vs. expanded vs. full-page?
  - **Layout for ~15+ cards:** options:
    - Two-column scrolling list (Class A left, Class B right)
    - Tabbed switcher (Class A / Class B / All) over a single grid
    - Section nav at top → carousel-of-big-cards per section (reviewer's sketch from 2026-04-26)
    - Filtered library — class chips + level chips + free-text search
  - **Per-card depth:** does each card stay short (3-para summary) or do select cards get full sub-pages (matching IA-001 phase B for level pages)?
  - **Inline-elsewhere placement:** which Class B cases pepper which other pages, and what's the rule for picking? (e.g., the Internet Protocols case naturally pairs with any L5 mention in the litepaper.)
  - **Research depth per Class B card:** how much grounding before publishing? Each Class B case deserves a `_Observations/research/` entry in the same format as the AI cases (see `samsung-chatgpt-leak.md` etc.), so the case page cites primary sources.
  - **Card-template aesthetic:** picks up DESIGN-001 (whole-site refresh) work — coordinate with that effort to avoid a card-template that gets thrown out a quarter later.
- **Process:** Mirrors ASSESS-005 / Quiz-v0.8 — author a design brief in `_Product/Case-Studies-Library-Design/` (folder TBD) before implementation; iterate on card-template and layout; *then* ship.
- **Supersedes / absorbs:**
  - `IA-003` (case studies page promotion — Class A side already shipped via CONTENT-003)
  - `NAV-002` case-studies breadcrumb pattern (needs reinventing for ~15+ cards)
  - `CONTENT-007` (Folkway/Guild L1 counterexample for Samsung) — folds in as one of the Class A additions
  - `CONTENT-008` (intro rewrite) — folds in as the library page intro design
- **Dependencies:** Research first (lock Class B inventory + write `_Observations/research/` entries for each new tech-arc case). Then the design brief. Then implementation. DESIGN-001 should ideally land near the same time so the card-template inherits the new visual system.
- **Phase A complete (2026-04-26):** `_Product/Case-Studies-Library-Design/Inventory-v0.1.md` (968 lines, 132 external sources). Audited 9 Class A originals + 8 Class A success-mode candidates (extension pass) + 11 Class B candidates. Coverage matrix shows L4/L5 Class A is empty on `/case-studies/`; L1/L2 success/failure balance significantly improved by extension pass.
- **Phase B (2026-04-26 — narrowed scope per user):** page layout / chips / search descoped — leave the live page as-is for now. Phase B focused on **Class B-5 selection** instead. **Locked picks (one per maturity level), value-emergence framing:**
  1. **L1 · Excel / Visicalc** (B3) — Folkway/Guild shadow → infrastructure (Packy McCormick "Excel Never Dies" anchor)
  2. **L2 · Email mandate** (B4 reframed) — Bill Gates *Internet Tidal Wave* memo, May 1995 — top-down sanctioning catches institution up to existing personal practice. Not the Zubulake-litigation framing.
  3. **L3 · Git + CI/CD** (B5) — designed coordination protocol; review-as-gate
  4. **L4 · EDI / Walmart 1988** (B6) — sector-wide protocol forcing function; one actor's mandate elevates an entire industry to interoperable infrastructure (B2B + JIT enablement). Picked over Cloud-Netflix-snapshot to break readers out of the silicon-valley-only frame.
  5. **L5 · Containerization (shipping)** (B1) — McLean → ISO 668 → Maersk/Sea-Land → ambient global trade; planetary infra + JIT + geography-as-protocol-substrate (chokepoints)
  Cloud (B10) and Mobile (B11) deferred to v2; B2 (software containerization), B7 (TCP/IP), B8 (NotPetya), B9 (FB BGP) not selected. See `_Product/Case-Studies-Library-Design/Inventory-v0.1.md` for full rationale.
- **Phase C complete (2026-04-26):** Card template v0.1 (`Card-Template-v0.1.md`) + 5 prototype cards in `prototypes/` (B1 Excel, B2 Email/Gates, B3 Git, B4 EDI, B5 Containerization) + commissioned `_Observations/research/gates-internet-tidal-wave-1995.md` plus full memo transcription at `gates-internet-tidal-wave-1995-full-text.md` and DOJ scan at `sources/Gates-Internet-Tidal-Wave-1995-DOJ-GX20.pdf`. Editorial principle locked: cards self-contained, body language is plain (no L1–L5 jargon in body); maturity-model framing lives in metadata, level pill, and drilldown CTA labels only.
- **Phase D shipped (2026-04-26):** Live page redesigned. `/case-studies/` now hosts **10 cards across two named sections** — *Today's AI Adoption Stories* (5 Class A: Samsung · Klarna · Shopify · Air Canada · Boom) and *Lessons from the Past* (5 Class B: Visicalc-Excel · Internet Tidal Wave · Git · Walmart EDI · Containerization). Cards are **collapsed-by-default** with a 2-level disclosure (chevron toggle reveals full body + diagnostic question + deep-dive in one click). Breadcrumb compressed to two section links (was 5 per-case). Hero descriptor updated. Card template redesigned for tighter information density per front-end best practice (24px padding, flex header with metadata-row + chevron, mechanism without italic / lighter left-border, hover and expanded states). Hash-on-load auto-expands matching card. See `Page-Layout-v0.1.md` for full design rationale.
- **Status:** **shipped 2026-04-26.** Live at https://protocolized.dev/case-studies/ (slug `plush-nutmeg-h2rj`).

### IA-006 — Homepage restructure (quadrantology-shape landing)
- **Scope:** Replace the current multi-section homepage with a quadrantology-shaped single-funnel landing:
  - Hero with H1 "Five levels of AI adoption. Find yours.", concise subtitle, and ONE primary CTA ("Take the Assessment") directing to `/ai-maturity-model/#assessment`
  - Single summary paragraph below hero
  - Two "explore" cards: The Five Levels (L1–L5 list → `#context`), Case Studies (5 names → `#cases`)
  - About strip (1 para, unchanged in essence)
  - Primary nav relabeled across all 4 pages: `Assessment · Case Studies · Levels · Blog · Litepaper` (clicking wordmark = home)
  - Nav targets deep-link into existing `/ai-maturity-model/` anchors for now; when `IA-001` (level pages) and `IA-003` (case studies page) ship, targets update but labels don't change
- **Rationale:** Reference: [quadrantology.com](https://quadrantology.com/) — single prominent primary CTA, minimal landing, brand-identity H1. Addresses feedback by promoting the assessment as the top-line exit point rather than one of three equal deliverables.
- **Dependencies:** None for the restructure itself. `IA-001` / `IA-003` later repoint the nav targets without changing labels.
- **Supersedes / absorbs:** `NAV-001` (partially)
- **Status:** shipping (current slice)

---

## Assessment

### ASSESS-005 — Comprehensive diagnostic redesign (quiz v2)
- **Scope:** Replace the current 2-step quiz with a 10–15 question multi-part diagnostic. Six parts to design:
  1. **Behavioral questions (10–15)** — observable behaviors and symptoms, not self-categorization. Questions like: "Is there a named owner for AI failures in [function]?", "In the last 30 days, how many AI-generated outputs went to a customer without human review?", "Does your org version-control protocols when a model updates?". Replaces current Option A/B/C recognition + scenario flow.
  2. **Tooling inventory** — which AI tools the org actually uses, with automatic level mapping (Claude Code → Designed; Cursor/Copilot → Sanctioned; retail ChatGPT → Shadow). Absorbs the previous `FEATURE-001` tooling evaluator.
  3. **Protocol inventory** — which specific protocols are in place (data-boundary policy, AI-output review process, workflow design with named owner, versioning on model updates, incident response path, etc.). Respondents check what exists.
  4. **Respondent context** — industry, role, org size, region, optional email + explicit consent for follow-up.
  5. **Results output** — richer per-dimension diagnosis (behavioral maturity + tooling maturity + protocol coverage), not just a single 1–5 level. Probably a score across 3 axes resolving to a level + bottleneck identification.
  6. **Data capture + storage** — where submissions land (new Cloudflare Worker + D1? Supabase? other?). Privacy/consent copy. GDPR considerations (Rafa is Berlin-based).
- **Rationale:** Three feedback items point at this and one new Rafa directive:
  - "Really shorten the response options to short phrases" (was `ASSESS-001` — moot in redesign)
  - "Needs at least 10 questions that drill into finer-grained behaviors and symptoms" (was `ASSESS-002`)
  - "Repeat questions in the context of major functions OR note suggesting functional leads take it" (was `ASSESS-003`)
  - New (2026-04-24 session): gather visitor data to support the advisory practice
- **Supersedes:** `ASSESS-001`, `ASSESS-002`, `ASSESS-003`. Absorbs `FEATURE-001` (tooling evaluator likely folds in as Part 2; might stay separate as a short-form on-ramp — decide during design brief).
- **Dependencies:** Requires a dedicated design brief before implementation. Larger than a single weekly slice; likely multi-week work in the redesign arc.
- **Open questions (for design brief):**
  - 5-level single score, or multi-axis scoring that resolves to a level?
  - Branching or linear question flow?
  - Where does submission data land, and what's the consent/privacy model?
  - Does `ASSESS-004` (results-page CTAs) get absorbed into the new results output, or ship separately on the current quiz in the meantime?
  - Does `FEATURE-001` survive as a lightweight standalone tool evaluator, or fold in?
- **Status:** intake · needs design brief

### ASSESS-001 — Shorten response option text `(superseded by ASSESS-005)`
- Original scope: rewrite option cards as short phrases with secondary detail. Moot once quiz is redesigned.
- **Status:** wont-do (superseded)

### ASSESS-002 — Expand to 10+ behavior-focused questions `(superseded by ASSESS-005)`
- Absorbed as Part 1 of `ASSESS-005`.
- **Status:** wont-do (superseded)

### ASSESS-003 — Per-function assessment (or share-with-leads note) `(superseded by ASSESS-005)`
- Absorbed into behavioral question design in `ASSESS-005` Part 1.
- **Status:** wont-do (superseded)

### ASSESS-006 — Tooling assessment (separate quiz)
- **Scope:** Standalone tooling-focused assessment that complements the archetype assessment (Quiz-v0.8). Probes which AI tools the org uses across the five flavors (consumer, enterprise, product-integrated, infrastructure, custom), tool-stack maturity, and tooling-specific risks. Likely 8–12 items, shorter than the archetype quiz.
- **Rationale:** Source: 2026-04-25 conversation. The archetype assessment classifies organizational posture; the tooling assessment classifies the tool stack. Distinct diagnostic value. Originally `FEATURE-001` was absorbed into `ASSESS-005`; this revives it as a *parallel* quiz now that v0.8 is the archetype-canonical.
- **Dependencies:** Quiz-v0.8 ships first (archetype assessment is the anchor).
- **Status:** intake

### ASSESS-007 — Protocol understanding assessment (separate quiz)
- **Scope:** Standalone protocol-literacy assessment. Probes the reader's understanding of protocols as coordination mechanisms, their distinctness from rules / policies / processes, and their relevance to AI adoption. Likely 8–12 items. Designed both as diagnostic (where is your team's protocol literacy?) and as educational (the act of taking it teaches concepts).
- **Rationale:** Source: 2026-04-25 conversation. Many readers will arrive at the archetype assessment without sufficient protocol literacy to absorb the result. A protocol-understanding quiz both diagnoses the gap and partially closes it.
- **Dependencies:** Aligns with `CONTENT-002` (CMM literacy). Quiz-v0.8 ships first.
- **Status:** intake

### ASSESS-004 — Results-page CTAs
- **Scope:** After submitting, add CTAs: (1) share results with an org peer (email/link), (2) schedule a call to discuss (Calendly or email).
- **Rationale:** Converts the completed assessment into a relationship, supports the consulting practice. "See all levels" button is already shipped; these go alongside it.
- **Open questions:** Calendly vs. email-based scheduling? Whose calendar?
- **Status:** intake

---

## New features

### FEATURE-001 — Tooling evaluator `(absorbed by ASSESS-005)`
- **Scope:** A tool-→-level mapping evaluator. Now part of `ASSESS-005` Part 2 (tooling inventory), unless the design brief decides it should survive as a separate short-form on-ramp.
- **Status:** absorbed — revisit during `ASSESS-005` design brief

### FEATURE-002 — Embedded visual slide deck
- **Scope:** HTML-based slide deck embedded in the site. Primarily visual. "No text longer than a fortune cookie."
- **Rationale:** Different reader mode — skimmable, presentation-ready, shareable as a single artifact. Complements the long-form litepaper.
- **Open questions:** Where does it live — own page, or section on homepage? Reveal.js / swipe-nav / scroll-driven?
- **Status:** intake

### FEATURE-005 — `/feed/` (daily AI-adoption feed page) — design brief
- **Scope:** A new top-level page on protocolized.dev that surfaces a daily-refreshing curated feed of AI-adoption-relevant news, blogs, and essays. Orientation is **organizational changes and announcements** — workforce moves, deployment incidents, vendor releases, regulatory developments, case-study-shaped reports. Not a generic AI news firehose; not opinion pieces; not benchmark releases unless they have org-adoption implications.
- **Rationale:** Source: 2026-04-26 conversation. The artifact today is a static document; nothing on the site changes between visits. A daily feed gives readers a reason to return, gives the site a pulse, and feeds source candidates into the existing observation pipelines (cases land in `_Observations/research/`; lede-relevant signals land in OBS-002 weekly briefs). Editorial framing: aggregator with neutral-commons voice (BRAND-001) — not Techmeme, not Hacker News, not LinkedIn. Closer to a Pew topic page or a curated newsletter archive in tone.
- **Relationship to `OBS-002`:** Adjacent and likely shared infrastructure, but distinct outputs.
  - `OBS-002` = internal weekly scan that proposes lede updates to `_Observations/lede-history.md`; output is editorial.
  - `FEATURE-005` = public-facing daily feed page; output is reader-facing.
  - The discovery layer (sources, ranking) can be shared. The synthesis layer differs: OBS-002 produces one paragraph for the hero; FEATURE-005 produces ~5–10 link cards per day.
  - Recommend: scope and ship FEATURE-005 first as the simpler public surface; OBS-002 inherits the discovery infrastructure and adds the synthesis layer for lede updates.
- **Architecture candidates** (the design brief picks one or hybridises):
  1. **Manual curation** via the existing comment-mode-style worker. Editor hand-picks links daily, posts to a `/feed-item` endpoint, page renders from KV. Editorial quality high; daily editor time required; ships fastest.
  2. **Scheduled remote agent** (CCR via the schedule skill — same pattern as the copy-edit triage agent). Agent runs daily, queries source allowlist, LLM-ranks for relevance to org-adoption, writes structured items into the repo (or KV), page reads. Automated; relevance quality varies; needs source maintenance.
  3. **Hybrid (recommended)**: scheduled agent fetches candidates into a draft area; editor (via the in-page editor mode) reviews + promotes daily; promoted items render on the public feed. Best of both; more pieces.
  4. **Pure RSS aggregation** of a curated source list (no LLM, no agent) — simplest, lowest editorial control, lowest relevance.
- **Source candidates** (initial allowlist — refine in design brief):
  - Substacks: protocolized.summerofprotocols, npc.here.now, technically.dev, leverage.media (Armstrong), perasapera.dev (Scianna), latent.space, pragmatic engineer, stratechery
  - Mainstream tech: HBR, MIT Sloan, The Information, Bloomberg, TechCrunch, Fortune, Verge
  - Lab + vendor blogs: Anthropic, OpenAI, Google DeepMind, Microsoft AI, Klarna engineering, Shopify engineering, Uber engineering
  - Regulatory: NIST AI office, EU AI Office, FTC, OCC
- **Page architecture (sketch — refine in design brief):**
  - Reverse-chronological feed (newest day at top)
  - Each item: source favicon · title · 1-line take · level/archetype tag(s) · publish date · external link
  - Day-grouping headers (today, yesterday, last week archived)
  - Optional filtering: by source type (substack, mainstream, vendor, regulatory), by level mapped (L1–L5)
  - Light archive (probably 30–60 days visible; older items roll off into a static archive page)
  - RSS export of the feed (so other publications can subscribe)
- **Editorial voice:** "Curated · neutral · one-line take per item." Each item gets a brief framing of *why this matters for AI adoption* (1 sentence, max). No commentary, no opinion, no tldr — link to the source for the substance.
- **Open questions (for the design brief):**
  - Build vs. buy on discovery: Google Alerts RSS (free, brittle), Brave Search API, SerpAPI, RSS-only, or LLM-driven crawl?
  - Cadence: truly daily, or weekday-only, or twice-weekly? "Daily" is the user's framing but consider editorial cost.
  - Volume per day: target 5–10 items? Less is more for editorial trust.
  - Storage: KV (like comment mode) or git-committed JSON/MD (like the triage queue) or D1?
  - Dedup: how to avoid same story surfacing multiple times across sources?
  - Naming: "Feed" is the working name; could be "Today" / "Pulse" / "Signal" / "The Stack" — locks in BRAND-002 territory.
  - Inline placement: do feed items also pepper other pages (e.g., a "today's relevant signals" widget on the homepage), or is the page the only surface?
- **Process:** Mirrors `IA-007` and `ASSESS-005` — a design brief in `_Product/Feed-Design/` first, layout + source-allowlist + cadence locked, then implementation. Multi-week effort.
- **Dependencies:** None blocking. Implementation can reuse `protocolized-inbox` worker patterns (KV storage, scheduled remote agent, in-page editor mode for promotion).
- **Status:** intake · needs design brief
- **Scope:** Restructure the assessment page to host three quizzes side by side: archetype assessment (Quiz-v0.8), tooling assessment (`ASSESS-006`), protocol-understanding assessment (`ASSESS-007`). Each quiz card expands inline when clicked — same UI pattern as the contact-team modal on the homepage (no new modal type needed). Tooling and protocol-understanding cards show "Coming soon" placeholders until `ASSESS-006` / `ASSESS-007` ship.
- **Rationale:** Source: 2026-04-25 conversation. Promotes the assessment page from a single-quiz launcher to a destination with multiple complementary diagnostics. Inline-expand pattern reuses an existing primitive.
- **Dependencies:** Quiz-v0.8 ships first (archetype). Then placeholder cards. Then `ASSESS-006` and `ASSESS-007` fill in.
- **Related:** `NAV-002` (breadcrumbs on the assessment page).
- **Status:** intake

---

## Content

### CONTENT-001 — Kitification as a named concept
- **Scope:** New conceptual addition: kits as the intermediate state between off-the-shelf AI tooling and bespoke internal software. "Earlier you build sophisticated internal software, now you develop software kits (combination of design choices, harnesses) that can be used to build bespoke tools."
- **Rationale:** Reviewer flagged as "a good one." Fills a conceptual gap in the maturity model and gives a handle for the 2026 reality of Claude Code / Cursor / MCP-driven workflows.
- **Open questions:** Does kitification map to a specific maturity level (probably Designed → Infrastructural transition)? Or is it a cross-cutting concept? Needs thinking before insertion.
- **Dependencies:** May affect ASSESS-002 (new behaviors to probe) and IA-001 (level definitions may shift).
- **Status:** intake

### CONTENT-002 — Teach the language / CMM literacy
- **Scope:** Explicit onboarding content that teaches the reader how to read the model — vocabulary, mental models, how levels differ. Could be a dedicated page, a sidebar, or baked into the homepage.
- **Rationale:** Reviewer: "Teach the language and CMM literacy." Current site assumes readers can ingest the whole frame from the litepaper; most won't.
- **Dependencies:** IA-004 (lexicon) covers terminology; this is broader — about the model itself.
- **Status:** intake

### CONTENT-004 — `/levels/` hero copy: rewrite as invitation, drop the trailing definitional clause
- **Scope:** Two related rewrites on the `/levels/` page hero copy.
  - **(a)** Replace the current sentence "Every level below maps the organizational shift required to move from one governing protocol to the next as AI is embedded into business flows." with a verb-first invitation along the lines of "Explore the organizational shifts happening as AI is embedded into business flows." — shorter, makes the page sound like a destination rather than an explainer.
  - **(b)** In the same hero, **delete** the trailing phrase "— from the first unsanctioned use to the point where AI is invisible civilizational coordination infrastructure." It loads the hero with a definitional payoff before the page has earned it; the levels themselves should reveal the arc.
- **Rationale:** Source: 2026-04-26 in-page copy-edit pass (reviewer: Rafa). Two suggestions submitted from the same hero, both pulling toward fewer words and more invitation. The deleted phrase also pre-spoils the L1→L5 narrative.
- **Status:** intake

### CONTENT-005 — Klarna case study: rewrite as narrative, refocus toward last-mile / protocols-have-reasons
- **Scope:** The Klarna case-study card on `/case-studies/` needs two changes — currently they collide:
  - **(a) Narrative form, not statements-of-truth.** The current opening — "90% daily AI adoption in the first month. Two-thirds of customer service handled by AI. $40M in claimed profit improvement. Twelve months later, the CEO reversed course and began rehiring human agents, citing quality failures the absent governance layer could not address." — reads as four detached facts. Rewrite as a paragraph with cause and consequence, and **specify which function was replaced** (customer service) and **whether the layoff was total or partial** at the start.
  - **(b) Reframe the takeaway.** The closing chain ("The mandate produced adoption. Adoption revealed quality failures. Quality failures required protocol. Designing protocol required slowing adoption. Leadership didn't want to slow adoption.") elegant but not the actual lesson. Reviewer's read: the takeaway is about **last-mile work that AI capabilities can't actually solve** and **protocols that exist for a reason** — i.e., the residual work pattern, not a governance-paralysis loop. Reference to incorporate: [npc.here.now/ai-org/](https://npc.here.now/ai-org/).
- **Rationale:** Source: 2026-04-26 in-page copy-edit pass (reviewer: Rafa). Two suggestions on the same Klarna card.
- **Dependencies:** Reference reading at [npc.here.now/ai-org/](https://npc.here.now/ai-org/) before rewriting.
- **Status:** intake

### CONTENT-006 — `/case-studies/` outcome questions: rewrite for subtler diagnostic framing
- **Scope:** The outcome question on `/case-studies/` ("When your AI produces a wrong answer in a customer-facing workflow, does a defined process exist for catching it — or does someone fix it when they notice?") is too pointed for the case-study takeaway. Rewrite to surface the more subtle questions reviewers actually ask after reading these cases:
  - How do you manage edge cases — and do you know which work persists / remains?
  - How do you reason about the long-term risk of integrating AI into existing operations (e.g. automating customer success activities), where edge cases compound over time?
- **Rationale:** Source: 2026-04-26 in-page copy-edit pass (reviewer: Rafa). The current single binary question reads as a checklist item; the case studies actually point to compounding risk, not point-in-time review.
- **Dependencies:** Touches the same `/case-studies/` page as CONTENT-005; consider sequencing them together.
- **Status:** intake

### CONTENT-007 — Samsung case study: pair with a Folkway/Guild "protocol-emergence" L1 counterexample
- **Scope:** Keep the Samsung case study (it works as a fear/oversight cautionary tale), but pair it with a contrasting L1 case from the Folkway / Guild end of the archetype set — an organic "protocol emergence and reconstruction" story. Reviewer's reference: the F2F pattern in [Have Your Factory Call My Factory](https://protocolized.summerofprotocols.com/p/have-your-factory-call-my-factory). Open-ended research task: identify another L1 story about groundbreaking expertise emergence (not failure mode) that we can write up as a sibling to Samsung.
- **Rationale:** Source: 2026-04-26 in-page copy-edit pass (reviewer: Rafa). The current L1 surface is monotonal — all failure stories. Folkway / Guild archetypes need a positive-frame L1 example showing what organic protocol emergence looks like before sanctioning catches up.
- **Dependencies:** Research first (find the case), then content. The F2F essay is already in `_Observations/research/rao-factory-to-factory.md` (Entry 27/41) — start there for grounding.
- **Status:** intake

### CONTENT-008 — `/case-studies/` page intro: reposition as "real-time arc + curated reference" `(absorbed by IA-007)`
- Original scope: rewrite the page intro from a flat label ("Concrete cases at each level of the model.") into two beats — *real-time changes happening everywhere* → *curated ongoing reference* of cases by level/stage. Folded into the IA-007 library design brief, since the library page will need its own framing intro anyway. Keep this note as the seed copy direction for the IA-007 intro work.
- **Status:** wont-do (absorbed by IA-007)

### CONTENT-003 — Case studies page expansion (3 → 5) + landing-page alignment
- **Scope:** Two-part: (1) Add 2 more case studies to the case studies page (currently 3) to bring the page total to 5. (2) Ensure the 5 case studies displayed on the case studies page match exactly the 5 listed on the homepage landing page — same names, same order, same framing.
- **Rationale:** Source: 2026-04-25 conversation. Case studies page is currently shorter than the landing-page list and the two surfaces are inconsistent. Aligning to a single canonical set of 5 removes the discrepancy and gives readers consistent depth wherever they land.
- **Resolution (intended):** Replace Boom Supersonic with Shopify, add Duolingo and Air Canada. Final 5 intended: Samsung · Klarna · Shopify · Duolingo · Air Canada. Section header from "Explore three case studies" → "Five case studies"; each card with an anchor ID matching its breadcrumb name.
- **Actual live state (audited 2026-04-26):** The live `/case-studies/` page hosts **Samsung · Klarna · Shopify · Air Canada · Boom** — Boom remained, Duolingo did not land. The homepage explore card matches the live state.
- **Resolution (actual, per 2026-04-26 user decision in IA-007 prep):** Boom stays as the canonical L3 case; Duolingo does not get added in this pass; the level spread on the page is L1/L2/L3.
- **Trade-off note:** Spread is L1/L2/L3. L4 and L5 still uncovered on this surface — folded into IA-007 (Case Studies Library) for the relaunch, which will promote Uber/BBVA/NotPetya/FB BGP candidates from the Inventory-v0.1 audit.
- **Related:** `NAV-002` shipped breadcrumbs that target these new anchors.
- **Status:** **shipped 2026-04-25**

---

## Brand / messaging

### COPY-001 — Tagline: "Protocols for AI adoption"
- **Scope:** Add tagline on homepage hero (and possibly across site chrome). Makes the `protocolized.dev` name self-explanatory.
- **Rationale:** Reviewer quoted exact copy. Low-effort, high-clarity.
- **Status:** intake

### BRAND-001 — Lean into neutral-commons positioning
- **Scope:** Across voice, About page (IA-002), and visual design (DESIGN-001), position the SIG as a W3C-style working group / open knowledge commons — explicitly not vendors, not Big 3 consulting, not Gartner. Cross-cuts multiple surfaces.
- **Rationale:** Reviewer: "The SIG brand is high-value neutrality... Avoid looking like Gartner."
- **Dependencies:** Informs DESIGN-001, IA-002, copy across all pages.
- **Status:** intake

### BRAND-002 — Amplify distinctive terminology
- **Scope:** Use Protocolized's original mental models and terms more visibly in headlines, pull quotes, and section labels (archival vs. carnival; bespokification; kitification; orientation loss; etc.). Tied to IA-004 (lexicon) and CONTENT-001 (kitification).
- **Rationale:** Reviewer flagged this as a core brand strength currently underused: "A big strength in how you guys are thinking about this is creative and original mental models and terminology. Use it."
- **Status:** intake

---

## Observations / monitoring infrastructure

### OBS-001 — Seed `_Observations/research/` from litepaper bibliography
- **Scope:** Ingest the bibliography entries in `Litepaper/litepaper-bibliography.md` as research observations matching the `research/_TEMPLATE.md` shape. Plus the two articles used during archetype development that aren't in the litepaper bibliography.
- **Resolution (2026-04-25):** **All 32 entries seeded.** First 13 + 5 added during archetype work shipped 2026-04-24/25; remaining 14 (Entries 3, 4, 7, 8, 13, 14, 23, 29, 30, 34, 35, 36, 38, 39) seeded 2026-04-25 evening as a single batch via subagent. Two entries carry `[PARAPHRASE]` markers per source-bibliography directives (Entry 35 protocol-trade examples; Entry 36 HBR intensification + intrinsic-motivation findings) — flagged in those files for verbatim quote extraction before customer-facing citation. Cross-references in 9 sibling entries had `(pending)` markers that were resolved as the new entries came online.
- **Rationale:** Establishes the primary-source corpus the weekly brief can cite into. Without it, each weekly scan starts from zero context.
- **Status:** **shipped 2026-04-25** (32/32 entries; 2 entries still need verbatim quote extraction before citation)

### OBS-002 — Weekly scan automation (mechanism decision + wire-up)
- **Scope:** Build the recurring agent that scans the past week's AI workforce/adoption news, writes a brief to `_Observations/weekly-briefs/YYYY-WW-scan.md`, proposes a lede update, and commits to the repo. Also manually triggerable by Rafa.
- **Rationale:** Core MVP described in the 2026-04-24 planning session. Template (`_TEMPLATE.md`) and lede history are in place; agent itself still needs a runtime.
- **Open questions (blockers):**
  - Which repo? (`protocolized-publications` vs existing `protocols-AI-capability-maturity-model`)
  - Which runtime? Options: (a) Claude Code scheduled routine via `schedule` skill, (b) GitHub Actions cron calling Anthropic API, (c) local launchd + script. Recommend (a) for speed to MVP; migrate to (b) when stable.
  - Credentials: scheduled agent needs write access to the repo. SSH key, fine-grained GitHub PAT, or GitHub App?
- **Dependencies:** Repo migration decision.
- **Status:** intake

### OBS-004 — Contact form worker proxy (harden the Discord webhook)
- **Scope:** Move the contact form / schedule-a-call submissions off the client-exposed Discord webhook URL onto a server-side Cloudflare Worker proxy with rate limit + honeypot + length caps + CORS allowlist.
- **Resolution:** Built `_Infrastructure/protocolized-inbox/` (Cloudflare Worker) with `POST /contact` (live) and `POST /comment` (stub for FEATURE-004). KV namespace `RATE_LIMIT` provisioned (5/hr/IP). Discord webhook URL stored as worker secret `DISCORD_WEBHOOK`. All 6 site pages updated to POST to `https://protocolized-inbox.rafaeldf2.workers.dev/contact` instead of the Discord URL directly.
- **Outstanding (for Rafa):** Rotate the original Discord webhook URL in Discord channel settings now that the live pages no longer use it. Anything still hitting the old URL after rotation will fail (the point — neutralises any cached client copies that still have the old URL).
- **Status:** **shipped 2026-04-25**

### FEATURE-004 — Copy-editor comment mode
- **Scope:** A passcode-protected comment mode for editing review across the entire site. UX: editor activates comment mode (URL `?edit=<passcode>`, ⌘⇧E shortcut, or pencil icon in the nav), highlights any text on a page, a modal opens with Before (pre-filled from selection), After (textarea), and Note. Submissions land in storage; admin pulls down later as CSV.
- **Resolution (2026-04-25):** Shipped end-to-end.
  - **Backend:** `_Infrastructure/protocolized-inbox/` worker now serves `POST /comment` (passcode-gated), `GET /comment/export.csv` (admin-secret-gated CSV export), and `GET /comment-mode.js` (the client bundle, served as text-import via wrangler `[[rules]] type = "Text"`). Storage swapped from Discord webhook to dedicated KV namespace `EDITS` — one entry per submission keyed `edit:<ISO-timestamp>:<random-id>`, value is JSON `{ts, page, before, suggestion, note, reviewer, ip}`. Rate limit raised from 5/hr to 100/hr for `/comment` (kept at 5/hr for `/contact`); rate-limit keys split by scope (`rl:contact:<ip>`, `rl:comment:<ip>`).
  - **Frontend:** `src/comment-mode.bundle.js` — self-contained CSS+JS IIFE. EDIT MODE banner with reviewer-name input + page pill + Leave button. `▾ Browse` dropdown reveals an editor catalog (10 archetypes, 9 levels, archetype×level builder, link to live quiz) — opens result pages in new tabs. Selection popup → modal (Before/After/Note) → submit. Session-edits gutter (collapsible, top-right). Toast confirmations. Passcode entry via URL `?edit=`, ⌘⇧E shortcut, or always-on pencil icon at the right end of `.nav-links`.
  - **Pages:** All 6 site pages (homepage, assessment, case-studies, levels, litepaper, blog) carry `<script src="https://protocolized-inbox.rafaeldf2.workers.dev/comment-mode.js" defer>` before `</head>`. Bundle is dormant for normal readers.
  - **Secrets set:** `COMMENT_PASSCODE` (editor side), `EXPORT_SECRET` (admin export). The earlier `DISCORD_COMMENT_WEBHOOK` is now unused.
- **Synthesis path:** Pull CSV via `curl -fSL "https://protocolized-inbox.rafaeldf2.workers.dev/comment/export.csv?secret=YOUR_EXPORT_SECRET"`, then synthesize patterns into CONTENT-### items in this backlog. First batch synthesized 2026-04-26 → CONTENT-004, CONTENT-005, CONTENT-006.
- **UI inspiration credit:** The right gutter from [`npc.here.now/template`](https://npc.here.now/template/) — selection popup + modal pattern.
- **Status:** **shipped 2026-04-25**

### OBS-003 — Lede accept-and-deploy runbook
- **Scope:** Small script (or documented steps) to take an accepted lede from a weekly brief → update the artifact `index.html` → republish `thorny-basin-5xkf` → append to `lede-history.md` in one command.
- **Rationale:** Keeps the deploy step explicit and auditable while removing the manual find-and-replace. Prevents the lede-history log from drifting out of sync with what's deployed.
- **Dependencies:** None strictly, but most useful once OBS-002 ships.
- **Status:** intake
