# AI CMM Artifact — Quality Control Framework

**Applies to:** `Artifact/drafts/v1.html` and subsequent versions
**Purpose:** Evaluate the artifact against four quality dimensions before release. Each criterion is pass/fail with a specific test condition.

---

## Evaluation Categories

### A. Audience Fit
| ID | Criterion | Test condition |
|----|-----------|----------------|
| A1 | First screen earns VP attention without preamble | h1 names the problem. No introductory framing about AI, the model, or the publication. |
| A2 | Tone is diagnostic, not promotional | No phrases implying an established product ("used by," "trusted by," "designed to help you"). |
| A3 | No AI-landscape throat-clearing | No "in today's rapidly evolving AI landscape" or equivalent. |
| A4 | Time-to-placement ≤ 10 minutes | Two-step assessment: selection + one scenario. No branching beyond Step 2. |

### B. Content Accuracy
| ID | Criterion | Test condition |
|----|-----------|----------------|
| B1 | All quantitative claims sourced inline | Every % or count has a source label or link adjacent to it. |
| B2 | Case study facts match source catalog | Cross-reference with `Research/source-catalog.md` entries 28–34. |
| B3 | Levels 4–5 flagged as projected | "Projected" badge visible on arc items 4 and 5 in the Context section. |
| B4 | No unverified statistics | No statistics appear that are not in the source catalog. |

### C. Style Guide Compliance (_REPORT-STYLE.md)
| ID | Criterion | Test condition |
|----|-----------|----------------|
| C1 | Active voice throughout | Scan for passive constructions. Fix where found. |
| C2 | Negative parallelism ≤ 1 per document | Count "not X — Y" and "not because X, but Y" constructions. Maximum 1 total. |
| C3 | Em-dash pairs eliminated | No — clause — pairs inside sentences. Replace with parentheses or period. |
| C4 | No assertion adverbs | No "precisely," "fundamentally," "notably," "importantly," "exactly" anywhere in user-facing text. |
| C5 | No managerial filler | No "leverage" (as verb/noun for capability), "stakeholders," "ensure," "alignment," "streamline," "robust," "holistic." |
| C6 | No throat-clearing phrases | No "It is important to note that," "As previously mentioned," "In order to fully understand." |
| C7 | Section labels describe content | Output card section labels tell the reader what they're about to read, not just categorize it. |

### D. Assessment UX (per _ARTIFACT-BRIEF.md)
| ID | Criterion | Test condition |
|----|-----------|----------------|
| D1 | Recognition model | Options are observable descriptions, not abstract definitions or level names. |
| D2 | Funnel enforces earned progression | Option A feeds Step 2A, not 2B or 2C. Selecting Option C can reach 2-3, 3, or 3-4 — not Level 1. |
| D3 | Failure mode is primary output hook | Failure modes appear in the output card before actions. |
| D4 | No gamification | No score, no progress percentage. Output = placement name + failure mode + action. |
| D5 | Output card is forwardable | A reader who receives the output card by email can interpret it without having taken the assessment. |

### E. Technical
| ID | Criterion | Test condition |
|----|-----------|----------------|
| E1 | Single HTML file | No external CDN except Google Fonts. No external JS. All logic inline. |
| E2 | Print stylesheet correct | @media print: only #output is visible; nav, entry, context, cases, assessment, exit, footer all hidden. |
| E3 | All 9 paths produce valid outputs | 3 Step 1 options × 3 Step 2 options = 9 paths. Each must route to a valid RESULTS key. |
| E4 | mailto body complete | buildEmailBody() generates a self-contained summary that a CTO could act on without visiting the site. |

---

## v1.html Assessment (pre-fix)

| ID | Score | Findings |
|----|-------|----------|
| A1 | PASS | h1 opens cold, no preamble |
| A2 | FAIL | "Used by deployment managers and operations executives" implies established user base |
| A3 | PASS | No landscape language |
| A4 | PASS | Two-step assessment, ≈8–10 min |
| B1 | FAIL | 71%, 400+ days, 39% in entry stats have no source. 86%/35% in L1 failure mode unsourced. |
| B2 | PASS | Samsung, Klarna, Boom facts match catalog entries 28, 31, and Boom case |
| B3 | PASS | "Projected" badge on arc items 4–5 |
| B4 | FAIL | Same as B1 |
| C1 | PASS | Mostly active voice |
| C2 | FAIL | 8+ negative parallelism constructions across output text (see list below) |
| C3 | FAIL | 4 em-dash pairs found in output text |
| C4 | FAIL | "precisely the condition" in Klarna drill-down |
| C5 | FAIL | "Level 2 leverage" in L2-3 and L3-4 custom implementation descriptions |
| C6 | PASS | No throat-clearing openers |
| C7 | PASS | Output section labels are descriptive |
| D1 | PASS | Observable indicators, not level definitions |
| D2 | PASS | Routing logic correct: A→2A, B→2B, C→2C |
| D3 | PASS | Failure modes first in output card |
| D4 | PASS | No score output |
| D5 | PASS | Output card is self-contained |
| E1 | PASS | Single file, Google Fonts only external dependency |
| E2 | PASS | Print stylesheet correct |
| E3 | PASS | All 9 paths route to valid RESULTS keys |
| E4 | PASS | mailto generates full placement summary |

**Pre-fix score:** 14/22 passing

### C2 violations (negative parallelism — all occurrences in v1)

Allowed 1, found 8+:

1. **Context h2 (KEEP — best instance):** "AI adoption fails as a protocol problem, not a tool problem."
2. **L1 description:** "through employee initiative, not organizational decision"
3. **L1 action:** "This does not require banning anything — it requires visibility."
4. **L2 description:** "The failure mode at this level is not the mandate — it is executing a mandate without designing the governing protocol."
5. **L2-3 description:** "durable, not just present in one team"
6. **L3 description:** "your competitive position relies on designed workflows, not ad hoc use"
7. **L3 description:** "AI is embedded in the core competitive position, not just support functions"
8. **L3 description:** "The limiting constraint is no longer AI capability — it is domain expertise"
9. **L3 failure mode:** "A ratio above 5:1 means the bottleneck is downstream coordination, not the AI workflow."
10. **L3-4 description:** "The transition to Level 4 is not driven by any single organization's maturity decision — it is driven by..."

### C3 violations (em-dash pairs)

1. **L1 description:** "The protocol response — sanctioned access, data boundaries, reviewed terms — has not yet been adopted."
2. **L2 failure mode:** "Failures surface when external parties — customers, courts, regulators — raise them, not internal monitoring."
3. **L2 action:** "This is not an AI literacy course — it is workflow-specific guidance."
4. **L3 action:** "identify the downstream coordination bottleneck — review queue, approval chain, handoff delay — and redesign"

---

## v1.html Assessment (post-fix)

All criteria resolved after applying changes documented in the commit. See git diff for specific text changes.

| ID | Score | Resolution |
|----|-------|------------|
| A2 | PASS | "Used by" → "Built for" |
| B1 | PASS | Source labels added to 71%, 400+, 39% stats; 86%/35% labeled in L1 failure mode |
| B4 | PASS | Same as B1 |
| C2 | PASS | 9 of 10 instances rewritten; 1 kept (context h2) |
| C3 | PASS | All 4 em-dash pairs replaced with parentheses |
| C4 | PASS | "precisely" removed from Klarna drill-down |
| C5 | PASS | "leverage" replaced in L2-3 and L3-4 descriptions |

**Post-fix score:** 22/22 passing

---

*Last updated: 2026-03-16*
