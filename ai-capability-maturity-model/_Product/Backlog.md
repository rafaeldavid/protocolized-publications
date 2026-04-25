# Backlog

Parsed items from the `Feedback-Inbox/`. Grouped by theme. Status values: `intake | triaged | planned | shipping | shipped | wont-do`.

Initial batch sourced from [`Feedback-Inbox/2026-04-24-v1-review.md`](Feedback-Inbox/2026-04-24-v1-review.md). Subsequent additions noted inline with date and source.

**Items added 2026-04-25** (post-Quiz-v0.8 design session): NAV-002, CONTENT-003, ASSESS-006, ASSESS-007, FEATURE-003. All scheduled for *after* the current archetype-assessment design (Quiz-v0.8) ships.

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

### FEATURE-003 — Multi-quiz assessment hub with inline-expand panels
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

### CONTENT-003 — Case studies page expansion (3 → 5) + landing-page alignment
- **Scope:** Two-part: (1) Add 2 more case studies to the case studies page (currently 3) to bring the page total to 5. (2) Ensure the 5 case studies displayed on the case studies page match exactly the 5 listed on the homepage landing page — same names, same order, same framing.
- **Rationale:** Source: 2026-04-25 conversation. Case studies page is currently shorter than the landing-page list and the two surfaces are inconsistent. Aligning to a single canonical set of 5 removes the discrepancy and gives readers consistent depth wherever they land.
- **Resolution:** Replaced Boom Supersonic with Shopify, added Duolingo and Air Canada. Final 5 cases on case-studies page now match homepage list: Samsung (Shadow Data Leak, L1) · Klarna (Mandate Reversal, L2) · Shopify (Non-Optional Mandate, L2) · Duolingo (Contractor Replacement, L2) · Air Canada (Chatbot Liability, L2). Section header updated from "Explore three case studies" → "Five case studies". Each card has an anchor ID matching its breadcrumb name.
- **Trade-off note:** Spread across levels narrowed (was L1/L2/L3 with Boom; now L1/L2 only). Level 3 / Designed example removed from this surface — discoverable via the artifact's drilldowns and the litepaper. Worth revisiting if a new L3 case becomes available.
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
- **Scope:** Ingest the remaining ~35 bibliography entries in `Litepaper/litepaper-bibliography.md` as research observations matching the `research/_TEMPLATE.md` shape. Three are already seeded (Samsung, Klarna, Menlo).
- **Rationale:** Establishes the primary-source corpus the weekly brief can cite into. Without it, each weekly scan starts from zero context.
- **Open questions:** Batch all at once, or ingest priority-first (canonical cases cited by the artifact + litepaper hero sections)? Recommend priority-first: ~10 more to hit the items referenced on the live pages.
- **Dependencies:** None — can proceed any time.
- **Status:** intake

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
- **Scope:** The homepage contact form currently POSTs directly from the browser to the Discord webhook URL. The URL is visible in page source; an abuser could spam the channel. Move the form submission through a Cloudflare Worker proxy (mirror the rafa-inbox pattern) that adds: (1) rate limit per IP, (2) honeypot check server-side, (3) minimal spam filter, (4) then forwards to Discord. Once in place, swap the form's POST target from the Discord URL to the worker URL and rotate the webhook.
- **Rationale:** Exposing a webhook client-side is a known tradeoff. Acceptable for MVP, worth hardening before we drive real traffic to the contact form.
- **Dependencies:** None, but best scheduled before any outbound promotion of the site.
- **Status:** intake

### OBS-003 — Lede accept-and-deploy runbook
- **Scope:** Small script (or documented steps) to take an accepted lede from a weekly brief → update the artifact `index.html` → republish `thorny-basin-5xkf` → append to `lede-history.md` in one command.
- **Rationale:** Keeps the deploy step explicit and auditable while removing the manual find-and-replace. Prevents the lede-history log from drifting out of sync with what's deployed.
- **Dependencies:** None strictly, but most useful once OBS-002 ships.
- **Status:** intake
