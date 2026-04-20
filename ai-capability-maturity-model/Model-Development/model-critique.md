# Model Critique — AI Capability Maturity Model v4

**Purpose:** Full critique of the existing model and working hypothesis for the new one. Identifies structural weaknesses, definitional problems, inconsistencies, and scope gaps.

---

## Critique of v4 (the docx)

### 1. Borrowed level names carry borrowed assumptions

The v4 level names — Initial, Repeatable, Defined, Capable, Efficient — are lifted directly from the original Software CMM (Humphrey, 1989) and its successor CMMI. This creates a structural problem: those names were designed for process compliance in software engineering shops with stable, deterministic processes. Importing them into an AI maturity model silently imports the assumption that AI adoption matures the same way software process matures — toward predictability and repeatability.

That assumption is exactly wrong for generative AI. A mature AI-adopting organization does not become more predictable — it becomes better at governing unpredictability. Using CMM's vocabulary predisposes the model toward process compliance as the unit of maturity, which is precisely what the new model argues against.

The working names (Shadow, Sanctioned, Governed, Integrated, Compounding) are better. They carry their own meaning and do not presuppose what maturity means.

### 2. The 12-dimension structure produces a spreadsheet, not a diagnosis

v4 evaluates organizations across 12 dimensions: Strategy, Processes, People, Infrastructure, Data, Governance, Politics, Tech Trade-offs, Disruption Events, Business Impact, Memory Model, Failure Modes. Each is rated 1–5 across each level.

This design has two problems:

**Problem A: Equal weighting is false.**
Not all 12 dimensions are equally diagnostic. "Governance" and "Processes" are load-bearing — they track the protocol maturity that is the model's central claim. "Politics" and "Tech Trade-offs" are contextual factors, not maturity indicators. Mixing them at equal weight obscures what the model is actually measuring.

**Problem B: The table format implies independence.**
Presenting 12 dimensions as a table implies an organization can be at Level 3 in Governance and Level 1 in People simultaneously. This is true but the table gives no guidance on what to do about it. Microsoft's RAI model explicitly warns against averaging dimension scores; v4's table format implicitly invites averaging.

A better structure: fewer, load-bearing dimensions with explicit dependency relationships. The Microsoft model's three-tier pyramid (Organizational Foundations → Team Approach → RAI Practice) handles this better than a flat table.

### 3. The Boom Supersonic placement is too high

v4 uses Boom Supersonic as a case study for what "mature AI deployment" looks like, implying Level 4 or 5. This is incorrect. Boom Supersonic is at late Level 3: their business model depends on AI (mkBoom is the design methodology, not a tool), but Boom is not an industry-level actor. The aerospace industry does not depend on Boom's approach. Boom is a small company building a product with AI deeply embedded in how they work — exactly Level 3 (business model reliance) in the new framing.

The error matters because it misleads about what Level 4 and 5 actually require. If Boom is Level 4, then Level 4 is achievable by a 50-person startup with good tooling. That undersells what industry-level protocol maturity actually requires.

### 4. Level 4 and 5 are underspecified and organizationally bounded

v4's Level 4 (Capable / Strategic Deployment) and Level 5 (Efficient / Generative Native) describe organizational states:
- Level 4: "AI tools become embedded in core infrastructure, indistinguishable from how work is done"
- Level 5: "Business models are built on always-on, low-latency, AI-enhanced processes"

Both are still describing single organizations. The model stops at the organizational boundary. This is a scope limitation: it cannot diagnose industries, markets, or systems. The new framing (Level 4 = industry reliance, Level 5 = planetary embedding) extends the model appropriately — but v4 gives no conceptual foundation for this extension.

More concretely: "very few companies are at Level 4 today" and "no companies have fully reached Level 5" are statements that v4 makes with no empirical basis. If Uber is at Level 4 (agentic AI embedded across 84% of developers, 6x cost growth in AI, custom internal tooling), then Level 4 is reachable for large tech organizations. v4's definitions are too vague to resolve this.

### 5. The characteristic tensions are inconsistently framed

v4 names tensions for each level:
- Level 1: "early experimental gains versus continuous security"
- Level 2: "task substitution versus workflow adaptation"
- Level 3: "accelerated expertise growth versus organizational memory"
- Level 4: "team depth versus breadth"
- Level 5: "market share versus business stability"

The problem: these are not parallel in kind. Levels 1–2 tension between organizational goals (gain vs. security, substitution vs. adaptation). Levels 3–4 tension within the organization (expertise vs. memory, depth vs. breadth). Level 5 tension is market-facing. They are different types of tension described in the same grammatical form, which obscures the structural shift happening across levels.

A well-formed maturity model should have parallel tension structures: if each tension is between two organizational goals, that should be consistent. If the tension type changes at Level 4 (from internal to market-facing), that should be explicit, not accidental.

### 6. The protocol framing is mentioned but not operationalized

The `_PROJECT.md` central argument — "AI adoption failure is a protocol failure" — does not appear in v4. The v4 model is framed as a security and governance document. It measures compliance controls, training programs, and infrastructure maturity. It does not measure protocol coherence between humans and AI systems.

This means v4 can produce a perfectly correct score (Level 3 governance, Level 3 processes, Level 3 security) for an organization that is actively experiencing the protocol failure the new model aims to diagnose. The Klarna case is the canonical example: by v4's dimensions, Klarna at 90% adoption with $40M in claimed savings would score Level 3 or 4. The model would not predict or diagnose the quality floor collapse that followed.

### 7. The diagnostic tool produces a number, not a diagnosis

The 15-question self-assessment maps scores to levels (15–45 → Level 1–5). This produces a number. A number is not a diagnosis.

A useful diagnostic does three things: places the organization, identifies the specific stuck point, and points to the intervention. The scoring rubric does the first; v4 does not do the second or third systematically. The "To break through Level N" sections are directional but not diagnostic — they list options rather than identifying which option applies to the specific organization taking the assessment.

---

## Critique of the working hypothesis for the new model

### 8. The unit-of-analysis shift needs a theory

The planned extension from organizational (Levels 1–3) to industry (Level 4) to planetary (Level 5) is the most structurally interesting feature of the new model. It also requires the most theoretical justification, which is currently absent.

The argument would need to establish: what makes an industry-level AI deployment categorically different from a very mature organizational deployment? The intuition is clear — when the whole financial services industry depends on AI clearing, no single organization's "maturity" captures the relevant fact. But the mechanism needs to be stated.

The Theorizing Protocolization I paper (New Nature) provides the conceptual vocabulary: protocolization progresses through invisibility until protocols become planetary infrastructure. The model should explicitly invoke this — Level 4 is when AI protocols become sector infrastructure; Level 5 is when they become planetary infrastructure (invisible, like the grid).

### 9. "Governance of uncertainty" risks becoming a catch-all

The central claim — that the unit of maturity is governance of uncertainty — is stronger and more distinctive than v4's process-compliance framing. But it risks becoming a catch-all that means everything and therefore diagnoses nothing.

What it needs: a precise account of what "governing uncertainty" means in an AI context. Proposed specification:
- Uncertainty is produced by AI systems at every output (probabilistic, non-deterministic)
- Governing it means: (a) knowing which outputs require human verification, (b) having a defined process for that verification, and (c) having a feedback mechanism when verification fails
- An organization that cannot describe its own verification process for any AI output is at Level 1 or 2

This is testable: ask an organization "what happens when your AI produces a wrong answer?" Level 1: "we don't know / it hasn't happened." Level 2: "someone notices and fixes it." Level 3: "we have a review process." Level 4: "we have metrics for error rate and defined escalation paths." Level 5: "the protocol redesigns itself based on error data."

### 10. The model needs to address departmental heterogeneity

A real organization is not at one level across all functions. Uber's engineering organization is at Level 4 (agentic, custom tooling, cost governance). Uber's legal department may be at Level 2. Uber's finance team may be at Level 1.

The model needs a stance on this. Options:
- **Envelope:** The organization's level is its lowest-maturity function that matters (conservative; ignores real capability)
- **Average:** Aggregate across functions (misleading; hides stuck points)
- **Functional:** Each function is assessed independently; the organization has a profile, not a score (most accurate; hardest to communicate)
- **Bottleneck:** The organization's effective level is its highest-value, highest-stakes function (most actionable; focuses attention on where it matters most)

The bottleneck framing aligns best with the protocol logic — the governance failure that matters is the one that exposes the organization to the most risk or prevents the most value creation.

### 11. The failure mode vocabulary needs to be sharper

v4 names failure modes but not with sufficient precision to distinguish them from normal adoption friction. For example, "workforce anxiety" is listed as a failure mode at Level 2 — but workforce anxiety is present at every level. It is not a Level 2–specific failure; it is a constant.

A well-specified failure mode should be: (a) observable, (b) level-specific (it occurs because of where the organization is, not as a general property of AI adoption), and (c) consequential (it has a measurable business impact if not addressed).

The failure modes that meet this standard from the case study research:
- Level 1: Data leakage to third-party AI services (Samsung, healthcare)
- Level 2: Quality floor collapse when AI replaces a human quality-assurance step (Klarna customer service, Duolingo linguistic nuance)
- Level 3: Temporal divergence — AI accelerates some workflows while external dependencies remain slow, creating coordination failure (Mechanical Currents)
- Level 4: Commoditization pressure — AI capability becomes table stakes, eliminating the competitive moat built by early adopters
- Level 5: Systemic fragility — invisible infrastructure protocols create dependencies whose failure produces cascading, hard-to-attribute system collapse

### 12. The model should be honest about what it cannot do

No maturity model can: predict the future of AI capabilities, prescribe specific tooling choices, or account for industry-specific regulatory constraints. v4 does not set these limitations clearly, which makes the model appear to promise more than it delivers.

The new model should include an explicit "what this model doesn't tell you" section. Honesty about scope is a credibility feature, not a weakness.

---

## Summary: what to preserve and what to discard from v4

**Preserve:**
- The five-level structure (it maps well to the empirical evidence)
- The characteristic tension concept (needs sharpening, not replacement)
- The case study grounding (v4's use of Boom Supersonic is wrong in placement but right in spirit)
- The practitioner orientation (deployment managers are the right audience)
- The "to break through" framing (actionable; just needs to be more specific)

**Discard:**
- The CMMI level names
- The 12-dimension table format
- The diagnostic scoring rubric (produces a number, not a diagnosis)
- The implied organizational ceiling (Levels 4–5 should exceed the organizational boundary)
- The treatment of Boom as Level 4–5

**Develop:**
- The protocol framing (central argument, not background assumption)
- The unit-of-analysis shift (needs explicit argument and vocabulary)
- The level-specific failure modes (need to meet the precision standard above)
- The transition mechanism (what specifically must change to move between levels)
- The departmental heterogeneity stance (the model needs a position)

---

*Last updated: 2026-03-15*
