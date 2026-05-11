# AI Capability Maturity Model — Milestone Log
Append-only record of completed work, key decisions, and current status. Newest entries at the top.

---

## Current Status (as of 2026-05-11)

**Active work:** Deployment Guide slide deck — *Durable AI Adoption*. Markdown v0.6 + HTML web rendition + printable letter-landscape slide deck all in `Deployment-Guide/`. Foreword and Ch1 prose polish in flight; not yet published to protocolized.dev.
**Blocking items:** None.
**Open backlog:** Irony/humor pass on litepaper per `_VOICE-FEEDBACK.md` (carried from 2026-03-24).
**Versioning:** v1.0 is the deployed baseline. Future artifact changes tracked as v1.1, v1.2, etc. (incremental) or v2.0 (major model update). New versions saved as separate files before promoting to deployment.

---

---

## Milestone Log

### 2026-05-11 | Deployment Guide slide deck — foreword/Ch1/Ch2 polish pass

- **Foreword reworked.** Opening paragraph split after the first sentence; second paragraph tightened with forced column break so it stays in col 1; callout dropped and paradigm paragraph inlined into the body flow; closing rewritten to "Let's dive in." Subtitle reworked twice ("crossed every boundary" → "trendy bundle of software products" → "latest bundle of software upgrades"). Tool/Paradigm × Local/Planetary 2x2 added in col 2.
- **Ch1 polish.** Closing tightened with forced column break so the "useful frame" paragraph stays in col 1. Dropped: the Karl Weick / dynamic non-events sentence and the "deterministic software has bugs..." sentences. Added a 3-step journey arc below the prose with "See / Adapt / Build New Protocols" pills on each step. First step relabeled "Getting started with your first pilot".
- **Ch2 split.** Levels overview split into two slides.
- **Slide 05 subtitle:** "The key to success in AI adoption is thinking in protocols."
- **Ch5 SIGBIZ case:** Dropped the "residue of that visibility" pull quote.
- **Slide 07:** Level badges vertically centered in the slide body.
- **Type scale:** Table cells bumped from body-sm (10pt) to body (11pt).
- **Social-share metadata:** Open Graph and Twitter Card metadata added to slides.
- **Status:** Local only — not yet pushed to a published slug.

### 2026-05-10 | Deployment Guide — *Durable AI Adoption* slide deck created

- **New deliverable scaffolded.** `Deployment-Guide/` folder: `_DEPLOYMENT-GUIDE-BRIEF.md` (single-landing-page handbook for deployment managers, modeled on Anthropic's *Claude Cowork Deployment Handbook* eight-section structure, lifted out of vendor specifics and grounded in the CMM); `deployment-guide-v0.1-outline.md`; `framework-success-and-failure.md` (framework synthesis); `level-2-kit-respec.md` (Level 2 reframed as *Kit* for this guide only — productivity artifact vs. policy artifact); `workpackets-analysis.md`; `drafts/deployment-guide-v0.1.md` through `v0.6.md`; `drafts/chapter-8-rewrite.md`.
- **HTML rendition built.** `Deployment-Guide/html/index.html` (single-landing-page web view) + `slides.html` (printable letter-landscape slide deck). Favicon, apple-touch-icon, OG image assets added.
- **14 images bundled locally** in `html/images/` — remote-image dependencies dropped from both the web rendition and the slide deck so the deck renders offline and survives source rot.
- **Mobile rendering:** viewport-meta swap so the slide deck fits to width on mobile.
- **Cover retitled** to *Durable AI Adoption*; subtitle updated. Chapter 4 renamed to "The path to durable AI adoption". Contents list "Adoption Maturity Level" → "Levels" (plural). Ch2 intro rewritten as a path metaphor with historical analogues. Chapter 2 pluralized to "Adoption Maturity Levels" everywhere.
- **Slide 19 pivot.** Replaced role-based content with six categories of new work; each category definition tightened to ≤50 words.
- **Level slides 08–12 redesigned** with image-as-band header treatment.
- **Ch4 structural change:** Phase detail merged into the framework cards; standalone phase slide dropped.
- **Resources:** Rao, Sachin, and Timber source articles saved to `Resources/` for citation/grounding.
- **Status:** Local only — `Deployment-Guide/html/` is the canonical source. Not yet copied to a here.now slug.

### 2026-04-26 (latest) | Homepage redesign — explore section rebuilt around 3 preview cards

- **Explore section restructured.** Single block replaced with a 3-card layout: Levels · Archetypes · Case Studies, each as a preview card linking into its dedicated page. Two scannability passes applied after the first build.
- **Levels card iterated through three forms:** (1) 5-column horizontal layout; (2) hover-reactive 5-column with metaphor icons; (3) final form — tabs row + full-width content panel, so the visitor lands on one level's content and can tab through L1–L5 in place without leaving the homepage.
- **Archetypes + Case Studies cards rebuilt as previews** of the linked pages. Case Studies card framed as two distinct sets (Today's Stories / Lessons from the Past), not pairs.
- **Mobile pass:** Levels-card mobile layout tightened.
- **Published:** Updated `homepage/index.html`, redeployed to `https://protocolized.dev/` (slug `gleaming-sketch-5q8b`).

### 2026-04-26 (evening) | IA-007 Phase D shipped — `/case-studies/` Library live

- **`/case-studies/` redesigned and republished** to slug `plush-nutmeg-h2rj`. Live at https://protocolized.dev/case-studies/.
- **Two named sections, 10 cards total:**
  - *Today's AI Adoption Stories* (Class A, L1–L3): Samsung · Klarna · Shopify · Air Canada · Boom. The existing 5 cards retrofitted to the new collapsed-by-default disclosure pattern.
  - *Lessons from the Past* (Class B, L1–L5): Visicalc/Excel · Internet Tidal Wave (Gates 1995) · Git/CI-CD · Walmart EDI 1988 · Containerization (McLean 1956). 5 new cards from the locked Class B-5 selection.
- **Card pattern: collapsed-by-default, 2-level disclosure.** Visible when collapsed: level-pill + sector chip + title + 1-line mechanism + chevron toggle at top-right. Clicking the chevron reveals body + diagnostic question + deep-dive paragraph in one move (folded the previous separate "What happened next" drilldown into the same expand). Editorial principle: card body uses plain language; maturity-model jargon (L1–L5, archetype names) lives only in frontmatter, level pill, and drilldown CTA labels.
- **Card template redesigned for information density** per front-end best practice (Stripe Press / Linear / Pew Research patterns): padding 32px → 22px×24px; flex header with metadata-row (pill + sector inline) + chevron; mechanism without italic + lighter left border; hover and expanded visual states; mobile padding 18px×20px. Same accent palette / typography / border-radius preserved.
- **Breadcrumb compressed** to two section links only (*Today's AI Adoption Stories* / *Lessons from the Past*); per-case anchor IDs retained for deep-linking. New JS hash-on-load handler auto-expands the matching card for `/case-studies/#<slug>` URLs.
- **CONTENT-007 (Folkway/Guild L1 counterexample for Samsung) and CONTENT-008 (intro rewrite)** absorbed and resolved through this shipping pass.
- Design folder under `_Product/Case-Studies-Library-Design/` carries the full lineage: `README.md` · `Inventory-v0.1.md` (968 lines / 132 external sources, audited Phase A) · `Card-Template-v0.1.md` (Phase C template spec with voice principles) · `prototypes/B1-B5*.md` (5 long-form prototype docs, each with HTML card block) · `Page-Layout-v0.1.md` (Phase D layout spec with all design decisions logged).

### 2026-04-26 (also) | Bill Gates *Internet Tidal Wave* memo — primary-source artifact archived

- New research entry `_Observations/research/gates-internet-tidal-wave-1995.md` — companion case-study citation entry with summary, citable claims, and CMM-relevance commentary.
- Full ~5,600-word memo text transcribed to `gates-internet-tidal-wave-1995-full-text.md` (cross-checked between the DOJ scan and Letters of Note transcription). All four sections (*The Internet Tidal Wave* / *The Internet Today* / *Competition* / *Next Steps* / *The Future*) plus HyperLink Appendix.
- DOJ-published scan archived locally at `_Observations/research/sources/Gates-Internet-Tidal-Wave-1995-DOJ-GX20.pdf` — Government Exhibit 20 from *United States v. Microsoft Corporation*. Anchors the L2 case-study card on `/case-studies/`.

### 2026-04-26 (also) | FEATURE-005 added — `/feed/` daily AI-adoption feed page

- New backlog item: a daily-refreshing public-facing feed of AI-adoption news/blogs/essays, oriented around organizational changes and announcements. Adjacent to OBS-002 (shared discovery layer; distinct outputs).
- Design folder scaffolded at `_Product/Feed-Design/README.md` with 4-phase process (Sources → Spec → Pipeline → Implementation) and 10 open architectural questions surfaced.
- Status: intake · needs design brief.

### 2026-04-26 (later) | IA-007 Phase B locked — Class B-5 selection

- **Class B-5 locked, one per maturity level, value-emergence framing:**
  1. L1 · Excel / Visicalc — Folkway/Guild shadow → infrastructure (Packy McCormick anchor)
  2. L2 · Email mandate — Bill Gates *Internet Tidal Wave* memo (May 1995)
  3. L3 · Git + CI/CD — designed coordination protocol
  4. L4 · EDI / Walmart 1988 — sector-wide protocol forcing function (industry-elevating)
  5. L5 · Containerization (shipping) — planetary infra + JIT + geography-as-chokepoints
- Cloud (B10) and Mobile (B11) deferred to library v2; B2 (software containerization), B7 (TCP/IP), B8 (NotPetya), B9 (FB BGP) not selected for v1.
- **Phase B narrowed:** page layout / chips / search descoped per user direction (leave live page as-is for now). Phase B = selection lock only.
- **Phase C started:** card template (single template across all 5) + 5 prototype cards + 1 new research entry to commission (`gates-internet-tidal-wave-1995.md` — the only locked pick without existing repo grounding).
- See `_Product/Case-Studies-Library-Design/Inventory-v0.1.md` for the locked selection's rationale + full not-selected reasoning.

### 2026-04-26 | CONTENT-003 historical-record correction + IA-007 inventory landed (Phase A complete)

- **CONTENT-003 correction.** The 2026-04-25 resolution note for CONTENT-003 said the case-studies page swap had landed as Samsung · Klarna · Shopify · Duolingo · Air Canada (Boom replaced). Inventory audit (Phase A of IA-007) confirmed the live state is actually Samsung · Klarna · Shopify · Air Canada · **Boom** — Duolingo did not land. User decision 2026-04-26: leave the live page as-is (Boom is canonical for the L3 slot until IA-007 ships). `Backlog.md` CONTENT-003 entry updated with both intended and actual states.
- **IA-007 Phase A complete.** `_Product/Case-Studies-Library-Design/Inventory-v0.1.md` landed (968 lines, 132 external sources). 9 Class A originals + 8 Class A success-mode candidates (A10–A18 minus A13 dropped) + 11 Class B candidates (B1–B11 including B10 Cloud era and B11 Mobile era added in extension pass). Coverage matrix shows L4/L5 Class A is empty on `/case-studies/`; L1/L2 success/failure balance significantly improved by extension pass.
- **Class B-5 selection in progress.** User decision: lock 5 of the 11 Class B candidates as the inaugural library cards. Decision pending in next session.
- **Other actionable findings from inventory:**
  - Litepaper §3 L3 attribution typo: "CTO Dario Khosrowshahi" → should be "CEO Dara Khosrowshahi"; the actual presenters were Anshu Chada and Ty Smith. Flag for litepaper v8.
  - `_Observations/research/` entries to commission before Phase C card-writing: bbva-* (A8/A17), docker-kubernetes-containerization (B2), willison-personal-ai-tooling (A11), yc-small-team-ai-production (A12), wikipedia-ai-content-policy (A14), openai-fde-program (A15), palantir-fde-origins (A16), stripe-toolshed-minions (A18), cloud-era (B10), mobile-era (B11).

### 2026-04-25 (afternoon) | OBS-004 contact form worker proxy + bibliography progress + FEATURE-004 added

- **OBS-004 shipped.** Built `_Infrastructure/protocolized-inbox/` Cloudflare Worker. `POST /contact` endpoint (live) + `POST /comment` stub (for FEATURE-004). Rate limit 5/hr/IP via KV namespace `RATE_LIMIT` (id `61f1fde1f27e4367ba85ff6c50047cd3`). Discord webhook URL stored as worker secret `DISCORD_WEBHOOK`. CORS allowlist for protocolized.dev + here.now staging mounts. All 6 site pages (homepage, assessment, case-studies, levels, litepaper, blog) updated to POST to `https://protocolized-inbox.rafaeldf2.workers.dev/contact` instead of the Discord URL directly. **Outstanding for Rafa:** rotate the original Discord webhook URL in Discord channel settings.
- **Bibliography progress (OBS-001 partial).** Seeded 5 new `_Observations/research/` entries: rao-evil-twin (Entry 24), rao-factory-to-factory (Entry 27), finding-fault-lines (Entry 26), and the two non-bibliography sources used during archetype dev (`vibe-coding-and-maker-movement`, `four-paradigms-of-crft`). 18 of ~32 entries now seeded; 14 remaining.
- **FEATURE-004 added to backlog.** Copy-editor comment mode — passcode-protected highlight-to-comment UI with gutter-anchored cards (npc.here.now/template/ pattern). Worker stub `POST /comment` endpoint already in place; needs frontend implementation. Two secrets to set when shipping: `DISCORD_COMMENT_WEBHOOK`, `COMMENT_PASSCODE`.
- **Cert/DNS investigation.** Enterprise user reported "bad or invalid certificates" warning. Verified `protocolized.dev` cert is valid (Google Trust Services WE1, expires 2026-06-15) and DNS routes via Cloudflare to here.now origin. The warning is on the user's side — corporate SSL inspection appliance not trusting the WE1 intermediate. Not fixable from us.

### 2026-04-25 (later that day) | Assessment v0.9 result page — rich profile rendering + admin shortcut

- **Archetype card depth.** Rebuilt the archetype output to mirror the maturity card structure. Default visible: archetype title + self-claim quote + axis tags + full Profile paragraph (~120 words from `Archetypes-v0.5.md`). The "Explore in depth" expand reveals 10 sections: core strategic bet · canonical examples · strengths · common challenges · healthy vs. unhealthy expression (two-pole grid) · blind spot · protocol orientation (4 sub-sections — natural posture · effective management · ineffective management · protocol view that fits) · stress and growth directions (two-pole grid) · evolutionary path · warning sign. AI-flavor emphasis section retained in data, hidden from render (re-addable via one-line edit).
- **Tarot mascot per archetype.** 10 inline-SVG icons in tarot-card framing on the left of the archetype card. Each card has decorative L-bracket corners, Roman numeral I–X, accent-colored symbolic icon, and archetype name plate. Symbols: flag (Vanguard), compass rose (Traveller), classical column (Architect), interlocking circles (Integrator), gears (Tinkerer), wax seal (Ratifier), shield with key (Warden), scales (Broker), winding path (Folkway), three masks (Guild).
- **Maturity card restructure.** Same "Explore in depth" expand pattern as the archetype card. Default visible: level label · tagline · first paragraph of summary. Expand reveals: full description · failure modes · actions to take (with "Done when" criteria) · position arc · characteristic tension (Pull A vs Pull B) · historical parallels (period tech + containerization throughline). Restored the rich legacy report content keyed by RESULTS object.
- **Maturity badge per level.** System-aesthetic badge (parallel structure to tarot card but distinct visual language): accent-colored top stripe, level identifier (L1 / L2→3 / etc.), 5-bar progress meter (full bars + half-bar for transitions), level icon (dashed silhouette · checkmark · gear · gear-with-network · etc.), level name in mono caps.
- **CTA polish.** Result page CTAs centered, buttons identical size (min-width 220px, btn-hero styling). Standard CTA above footer (Schedule a Call + Share) also centered (min-width 200px). Print button removed.
- **Admin shortcut.** URL pattern `?archetype={Name}&level={Lkey}` (or short forms `?a=...&l=...`) skips the quiz and renders the result directly. Useful for review and screenshots. Documented inline in JS source with examples. Valid archetypes: Vanguard / Traveller / Architect / Integrator / Tinkerer / Ratifier / Warden / Broker / Folkway / Guild. Valid levels: L1 / L1-L2 / L2 / L2-3 / L3 / L3-4.
- **Published:** `https://protocolized.dev/assessment/` (slug `humble-gorge-n5j4`).

### 2026-04-25 | Assessment v0.9 — quiz redesigned and shipped to live site

- **What:** Replaced the existing 2-step Option A/B/C quiz at `/assessment/` with the v0.9 24-question forced-choice paired-statement flow that classifies respondents into one of 10 archetypes (Vanguard / Traveller / Architect / Integrator / Tinkerer / Ratifier / Warden / Broker / Folkway / Guild) plus a maturity level (L1–L3-4).
- **Scoring:** Hierarchical placement (the model used by professional typological surveys — MBTI, Keirsey, Holland Codes). Each pick contributes to one of 7 axes (Origin, Stake, Timing, Locus, Driver, Reach, Depth); archetype is derived through tree branching: Origin → Stake×Timing quadrant → leaf resolver. Maturity decoupled and anchored to deployment density with governance as multiplier.
- **Validation:** 100-simulation harness (10 archetype agents × 10 respondents). Match rate 21% (v0.8 additive) → **88% (v0.9 hierarchical)**. All archetypes ≥ 8/10. Tinkerer and Folkway 10/10. See `_Product/Assessment-v2-Design/test-results/Quiz-v0.9-test-results.md`.
- **Result UI:** Two cards (archetype + maturity), each with a one-line label, archetype self-claim quote, axis tags, summary paragraph, and "Explore in depth" expand button revealing strengths, challenges, growth direction, stress response, protocol orientation, and warning sign.
- **Wording fixes shipped:** All four critical grammar bugs flagged in v0.8 testing (Q2B subject-verb, Q6B stray apostrophe + "align to", Q9A "adopt" → "adapt", Q15B subject-verb).
- **Published:** `https://protocolized.dev/assessment/` (here.now slug: `humble-gorge-n5j4`, authenticated, permanent). Footer string updated to "AI Capability Maturity Model v2.3".
- **Source files:**
  - `assessment/index.html` — live quiz markup, hierarchical scoring JS, archetype + maturity data, two-card result rendering
  - `_Product/Assessment-v2-Design/Quiz-v0.9.md` — canonical question text + scoring spec
  - `_Product/Assessment-v2-Design/Archetypes-v0.5.md` — archetype profiles (with protocol orientation sections)
  - `_Product/Assessment-v2-Design/test-results/` — simulation harness, scoring scripts, and validation reports
- **Status:** Live for review. User to send to peers for testing.

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
