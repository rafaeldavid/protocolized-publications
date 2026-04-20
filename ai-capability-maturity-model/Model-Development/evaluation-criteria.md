# Test and Evaluation Document — AI CMM YAML DSL

**Purpose:** Define what best-in-class output looks like before writing it.
A YAML DSL for the AI CMM passes evaluation if it satisfies all criteria in Section A (required) and most criteria in Section B (quality).

---

## Section A — Required (pass/fail)

### A1. Schema validity
The YAML must parse without errors and validate against its own declared schema. Every field present in one level definition must be present in all others. No field may contain `null` or empty string where the schema requires content.

### A2. Internal consistency
Claims made in one level must not contradict claims made in another. If Level 2 observable indicators include "AI tools are broadly licensed," Level 3 observable indicators must not include "AI tools are broadly licensed" unless qualified. Progression must be monotonic — each level is strictly more mature than the previous.

### A3. Level-complete definitions
Each of the five levels must define all required fields:
- `name` and `tagline`
- `unit_of_analysis` (what entity is the subject at this level)
- `description`
- `observable_indicators` (minimum 4; must be observable without inside access)
- `characteristic_tension` with named poles
- `failure_modes` (minimum 2; must be level-specific and consequential)
- `progression_requirements` (minimum 2; must be specific and actionable)
- `case_anchors` (minimum 1 per level; referencing source catalog entry)
- `protocol_dimensions` (all six dimensions rated using closed vocabulary)

### A4. Closed vocabulary for enumerated fields
Protocol dimension values must be drawn from defined enumerations only. Permitted values are specified in the schema block at the top of the YAML. No new values may be introduced in level definitions.

### A5. Case anchors cite the catalog
Every `case_anchor` entry must include a `catalog_entry` field referencing a numbered entry in `Research/source-catalog.md`. Claims in level definitions must not rely on unnamed or uncited cases.

### A6. Transition conditions are specified
Each transition block (Level N → Level N+1) must include: a description of what changes, at least two common catalysts, and at least two common blockers.

### A7. Unit-of-analysis progression is explicit
The `unit_of_analysis` field must shift across levels as follows:
- Levels 1–2: organizational (employee / organization)
- Level 3: business model / competitive position
- Level 4: industry / market
- Level 5: civilizational / planetary systems

Any deviation from this progression must be documented with a rationale.

---

## Section B — Quality criteria

### B1. Observable indicators are truly observable
Observable indicators describe what an outside observer would see, hear, or find in documents. They do not interpret or characterize — they observe.

**Pass:** "Employees use personal ChatGPT accounts for work tasks"
**Fail:** "The organization is unaware of the risks of AI adoption"

### B2. Failure modes are level-specific
A failure mode is level-specific if it: (a) occurs as a direct consequence of the organization's position at that level, and (b) is unlikely to be the dominant failure mode at other levels.

**Pass:** "Quality floor collapse when AI replaces a human review step without redesigning the review protocol" (Level 2 specific)
**Fail:** "Workforce anxiety about AI" (present at all levels)

### B3. Characteristic tensions are parallel in kind
Tensions at each level should be parallel in structure: each should be a genuine dilemma between two things the organization legitimately wants. Neither pole should be obviously correct.

**Pass:** "Productivity through frictionless AI use" vs. "Data security through access controls"
**Fail:** "Using AI" vs. "Not using AI" (no genuine dilemma)

### B4. Progression requirements are specific and actionable
A progression requirement should be specific enough that an organization could check whether they have done it. It should not be a general principle.

**Pass:** "Define a verification protocol for AI-generated outputs in at least one core workflow — specifying who reviews, what they check, and what constitutes an acceptable output"
**Fail:** "Build organizational capability and culture to support AI use"

### B5. Case anchors are correctly placed
Each case anchor must be placed at the level that best describes its documented state. Placement at an incorrect level (e.g., Boom Supersonic at Level 5 when it is Level 3) constitutes a quality failure.

Required placements:
- Samsung Electronics (pre-ban): Level 1
- Healthcare sector shadow AI: Level 1
- Legal profession hallucinations: Level 1
- Klarna (2023–2024): Level 2
- Shopify (April 2025 mandate): Level 2
- Duolingo (AI-first pivot): Level 2
- Boom Supersonic (mkBoom, late stage): Level 3
- Uber (March 2026): Level 3–4 boundary / early Level 4
- Venkatesh Rao / Jenna Dixon publishing pipeline: Level 3

### B6. Protocol dimension ratings are internally consistent
If Level 2 rates `governance: mandated`, then Level 3 must rate governance higher than `mandated` (e.g., `designed`). No dimension rating may equal or decrease between adjacent levels unless explicitly justified in a `notes` field.

### B7. The model handles departmental heterogeneity
The YAML must include a `heterogeneity_stance` field in the model header specifying how to handle organizations that are at different levels across departments. It must choose one of: `envelope`, `average`, `functional_profile`, or `bottleneck`, and define what that means.

### B8. Forward-looking claims are marked
Claims about Level 4 and Level 5 that are projections rather than documented states must be marked with `status: projected` in the case_anchors section. The model should be explicit about what is observed vs. what is theorized.

### B9. The YAML is readable without a schema decoder
A practitioner with no YAML background should be able to read the Level 2 definition and understand what it says about their organization. Field names should be plain English. Values should be self-explanatory or accompanied by inline comments.

### B10. Version and authorship are declared
The model header must include: version number, date, author/organization, central argument (one sentence), and a reference to this evaluation document.

---

## Section C — Fitness-for-purpose test

Beyond schema and quality, the YAML passes fitness-for-purpose if it enables the following use cases:

**C1. Diagnostic use**
A deployment manager reads Level 1 through Level 3 definitions and can identify which level describes their organization without any additional guidance. The observable indicators are specific enough to produce consistent placement across different readers.

Test: Give the Level 1–3 definitions to three practitioners with different organizations. Do they place themselves? Do they disagree about where they are, and can the disagreement be resolved by looking at specific indicators?

**C2. Litepaper generation**
The five level definitions, transitions, and case anchors in the YAML contain sufficient content to generate a complete first draft of the litepaper "Five Levels" section without adding new claims. The YAML is the source; the litepaper is a rendering.

**C3. Blog post hook generation**
The model's central argument, Level 1–2 definitions, and the Klarna/Samsung/legal profession case anchors contain sufficient material to write the blog post's opening three sections.

**C4. Version control**
The YAML can be committed to git. A v2 produced six months from now can be diffed against v1. The diff shows exactly which claims changed, which levels were revised, and which case anchors were added or removed.

**C5. Self-evaluation**
The YAML can be evaluated against this document. An evaluator reads this document and the YAML and can produce a pass/fail score for each Section A criterion and a judgment for each Section B criterion without needing to consult any other document.

---

## Scoring

A YAML DSL is best-in-class if it:
- Passes all 7 Section A criteria
- Passes 8 or more of 10 Section B criteria
- Passes all 5 Section C fitness-for-purpose tests

Minimum acceptable: all Section A, 6 of 10 Section B, 3 of 5 Section C.

---

*Last updated: 2026-03-15*
