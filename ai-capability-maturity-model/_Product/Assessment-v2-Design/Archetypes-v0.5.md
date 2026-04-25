---

## title: Assessment archetypes · v0.5 profiles

version: v0.5 (2026-04-25)
status: draft · for review
supersedes: Archetypes-v0.4.md (taxonomy unchanged; this adds profiles)
depends_on: Framework-v1.md (v1.3), Archetypes-v0.4.md
last_updated: 2026-04-25 — added Protocol orientation sections to each archetype

# Assessment archetypes — v0.5 profiles

Full reader-facing profiles for the 10 archetypes finalized in v0.4. Adapted from the profile components personality frameworks use professionally (Enneagram, MBTI expansions, Jungian brand archetypes): self-claim, core strategic bet, strengths, challenges, **protocol orientation** (added 2026-04-25), healthy vs. unhealthy expression, blind spots, stress/growth directions, evolutionary paths, canonical examples, AI-flavor emphasis, warning signs.

## Profile schema (what each entry contains)


| Component                            | Purpose                                                                                                                                                                                                                                                                                          |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Self-claim**                       | The one-line identity the archetype uses for itself. Self-attachment anchor.                                                                                                                                                                                                                     |
| **Axes**                             | Five-axis tag (Origin · Stake · Timing · Locus · Driver). Diagnostic position.                                                                                                                                                                                                                   |
| **Maturity placement**               | L1–L4 with reason drawn from the 7-dimension framework.                                                                                                                                                                                                                                          |
| **Core strategic bet**               | One line on what the archetype is betting the org's AI future on.                                                                                                                                                                                                                                |
| **Canonical examples**               | Real-world companies showing the pattern. Reader recognition anchor.                                                                                                                                                                                                                             |
| **Profile**                          | ~120-word descriptive paragraph.                                                                                                                                                                                                                                                                 |
| **Strengths**                        | 4 bullets on what this archetype does well.                                                                                                                                                                                                                                                      |
| **Common challenges**                | 4 bullets on what tends to go wrong.                                                                                                                                                                                                                                                             |
| **Protocol orientation**             | Their natural relationship to protocols + effective vs. ineffective protocol management + the protocol view that fits them. Pulls from protocol theory (MVPi, emergent vs. designed protocols, protocol calcification) to give each archetype a frame for valuing protocols from their own lens. |
| **Healthy vs. unhealthy expression** | The same bet, well-executed vs. badly-executed.                                                                                                                                                                                                                                                  |
| **Blind spot**                       | What the archetype structurally cannot see about itself.                                                                                                                                                                                                                                         |
| **Under stress**                     | Which archetype they compress toward under pressure (disintegration direction).                                                                                                                                                                                                                  |
| **Growth direction**                 | Which archetype they evolve toward when healthy (integration direction).                                                                                                                                                                                                                         |
| **Evolutionary path**                | Where this archetype comes from and what it becomes.                                                                                                                                                                                                                                             |
| **AI-flavor emphasis**               | Which of the five AI flavors (consumer / enterprise / product-integrated / infrastructure / custom) dominates their AI work.                                                                                                                                                                     |
| **Warning sign**                     | The single red flag that indicates this archetype is heading toward its unhealthy expression.                                                                                                                                                                                                    |


## Quick reference


| #   | Name       | Axes tag                                     | Maturity                 | One-line                                                          |
| --- | ---------- | -------------------------------------------- | ------------------------ | ----------------------------------------------------------------- |
| 1   | Vanguard   | S · Arch(retrofit) · Ahead · Int · Chosen    | L2 (reversal risk)       | Deploys aggressively in core work before governance is ready      |
| 2   | Traveller  | S · Arch(greenfield) · Ahead · Int · Chosen  | L3                       | Product architected around AI from inception                      |
| 3   | Architect  | S · Arch · Behind · Int · Chosen             | L3–4                     | Internal AI infrastructure others depend on                       |
| 4   | Integrator | S · Aug · Behind · Int · Chosen              | L2–3                     | Adopts selectively; redesigns workflow around proven use          |
| 5   | Tinkerer   | S · Aug · Ahead · Int · Chosen               | L1–2                     | Many experiments, few codified; transient state                   |
| 6   | Ratifier   | S · Arch · Behind(deliberate) · Int · Chosen | L1–2 (intent to L3)      | Waits for maturity, ships late with polish                        |
| 7   | Warden     | S · Aug · Behind · Var · Constrained         | L2                       | Compliance-gated deployment; regulator sets velocity              |
| 8   | Broker     | S · Aug · Behind · Ext · Chosen              | L2                       | Delegates capability externally; holds the problem, not the tools |
| 9   | Folkway    | E · Aug(shallow) · — · Ind · —               | L1                       | Broad informal adoption below leadership visibility               |
| 10  | Guild      | E · Aug(sophisticated) · — · Ind · —         | L2–3 org / L3 individual | Concentrated expert work with proprietary pattern recognition     |


S = Strategic · E = Emergent · Arch = Architecture · Aug = Augmentation · Int = Internal · Ext = External · Var = Variable · Ind = Individuals

---

## Strategic archetypes (1–8)

### 1. The Vanguard

> "Someone has to go first. We'd rather learn hard than wait safe."

**Axes.** Strategic · Architecture (retrofit) · Ahead of proof · Internal · Chosen
**Maturity placement.** L2 with reversal risk — D7 runs ahead of D1, D3, and D5; deployment velocity outpaces governance and review infrastructure.
**Core strategic bet.** First-mover advantage compounds faster than reversal risk compounds loss.
**Canonical examples.** Klarna (2024–25 AI-agent arc: mandated, reversed, rebuilt). Duolingo (AI-first content, user headwinds). Shopify (Lütke "AI is non-optional" memo).

**Profile.** The Vanguard deploys AI aggressively in customer-facing and core operational work before governance is ready. They retrofit AI into an existing organization because they believe leadership conviction matters more than waiting for external validation. Public mandates; explicit policy shifts; visible executive commitment. The bet is asymmetric — some deployments will roll back publicly, but the ones that stick compound. They treat reputational exposure as the price of not being late, and they absorb the criticism of specialists whose judgment was bypassed in the pursuit of speed.

**Strengths.**

- Organizational alignment — leadership has taken a clear public position
- Forced learning under real conditions (no hiding in pilot-land)
- Captures compounding advantages unavailable to orgs waiting for proof
- Talent magnet for ambitious practitioners who want the leading edge

**Common challenges.**

- Governance lags deployment; fixes are reactive and publicly visible
- Customer-facing quality incidents (the Klarna reversal pattern)
- Internal backlash from domain specialists whose judgment was overridden
- "Evaluative anesthesia" — so much is produced so fast that quality signal degrades

**Protocol orientation.** Treats protocols as drag at first; tends to encounter them as the consequence of a reversal rather than as a precondition for speed.

**Effective protocol management.** Build protocols *during* deployment, not after. Choose lightweight protocol primitives — escalation triggers, rollback procedures, public-incident response — that don't slow deployment but absorb its volatility. The protocols you have when an incident hits decide whether you ship the fix in 48 hours or 4 weeks. Treat protocol design as a speed-multiplier, not a tax on it.

**Ineffective protocol management.** Defers all protocol work until incident forces it, then overcorrects with heavy governance that slows future deployments. Conflates "speed" with "no protocol," missing that protocols are what makes speed sustainable.

**The protocol view that fits them.** Protocols are reversal-prevention machinery. Without them, every aggressive deployment either succeeds by luck or burns trust. The Vanguard's strategic bet — moving first — depends on having the protocol layer that lets them move *back* gracefully when needed.

**Healthy vs. unhealthy expression.** Healthy: moves fast, learns fast, retrofits governance as issues surface. Unhealthy: moves fast, reverses publicly, replaces the CEO.

**Blind spot.** Underestimates how much of the early "success" was goodwill from stakeholders who expected eventual refinement, not production-grade polish.

**Under stress.** Compresses toward **The Ratifier** — a reversal crisis can trigger overcorrection into slowdown and heavy governance, sometimes overshooting into paralysis.

**Growth direction.** Evolves toward **The Integrator** — retrofits governance to match deployment footprint, codifies what worked, retires what didn't.

**Evolutionary path.** Vanguards emerge from confident, opinionated leadership with strong AI conviction. They become Integrators if the retrofit succeeds; they become Ratifiers if a crisis forces a defensive reset.

**AI-flavor emphasis.** Flavor 2 (enterprise) + Flavor 3 (product-integrated), deployed aggressively. Flavors 4 + 5 typically underdeveloped relative to 2 + 3.

**Warning sign.** "AI-first" becomes an internal mandate without an accompanying review infrastructure.

---

### 2. The Traveller

> "We didn't add AI to our business. AI is why the business exists."

**Axes.** Strategic · Architecture (greenfield) · Ahead of proof · Internal · Chosen
**Maturity placement.** L3 — high D7 (AI is load-bearing) paired with high D1 and D5 specifically in AI workflows, because the org was designed around them rather than retrofitting governance after.
**Core strategic bet.** A clean-sheet organization can outcompete incumbents retrofitting AI into legacy structures.
**Canonical examples.** Boom Supersonic (mkBoom engineering stack). Cursor. AI-native fintechs (Ramp, Brex adjacents). Logistics and customer-service operating-model rebuilders.

**Profile.** The Traveller built the organization around AI from inception. The business doesn't function without AI — the product either creates capability that wasn't reachable before (market-creating) or rebuilds an existing market with a 3–5× leaner operating model (service-rebuilding). Protocols for validation, ontological stability, and domain-expert review are engineered alongside capability, not after an incident forces them. Travellers typically run with smaller headcount than revenue-equivalent incumbents and attract practitioners who want to work where AI isn't a bolt-on.

**Strengths.**

- No legacy baggage — every workflow is clean-sheet
- Governance designed into product architecture, not layered on top
- Capital-efficient operating model (talent structure built for AI)
- Customers understand AI is the product, not a feature; expectations are calibrated

**Common challenges.**

- Fragility if underlying foundation models shift unexpectedly
- Talent concentration — founders often hold critical judgment that can't yet delegate
- Defensibility as incumbents close the gap with retrofit investment
- Scaling past early product-market fit into a durable institution

**Protocol orientation.** Protocols are part of product architecture by default. AI validation, ontological stability, and escalation paths are designed alongside features rather than added retroactively.

**Effective protocol management.** Treat the operating-model protocols (decision rights, incident response, scaling decisions) with the same rigor as product-level protocols. The Traveller's natural advantage is that they didn't have to retrofit; the strategic move is making the founder-team's tacit protocols explicit enough to scale beyond ten people. Watch for the gap between strong technical protocols and weak organizational ones as headcount doubles.

**Ineffective protocol management.** Protocols exist only at the technical or code layer; nothing organizational. The team scales 2× and discovers no shared protocol for handling internal disagreement, novel incident classes, or customer escalation.

**The protocol view that fits them.** Protocols are not bureaucracy — they're the operating system. You're already running on protocols you designed; the question is whether you're tracking which ones are tacit and which need formalization before the next 50 hires.

**Healthy vs. unhealthy expression.** Healthy: The team builds a real institution with distributed judgment. Unhealthy: AI-native team stays founder-dependent and never becomes a company.

**Blind spot.** Assumes the operating model is always faster — misses that some incumbent advantages (distribution, trust, data) aren't catchable by structural cleverness alone.

**Under stress.** Travellers don't disintegrate toward another archetype. They either iterate their way out or fail as companies; the form doesn't flex into Integrator or Architect because those require a different origin story.

**Growth direction.** Widens AI-specific governance into broader operating protocols as the org scales; deepens D6 (coordination scope) toward industry partnerships and standards.

**Evolutionary path.** Travellers don't transition — they scale within their form. An enterprise that retrofits successfully becomes an Integrator or Architect, not a Traveller. Travellers are topologically isolated on the archetype map.

**AI-flavor emphasis.** Flavor 3 (product-integrated) + Flavor 5 (custom/developed) central to the product. Flavor 2 supports internal work.

**Warning sign.** The founder-team's judgment can't be delegated because no one else understands the AI-specific trade-offs.

---

### 3. The Architect

> "We're not chasing the latest model. We're building the platform our teams will run on for years."

**Axes.** Strategic · Architecture · Behind proof · Internal · Chosen
**Maturity placement.** L3 moving toward L4 — the platform raises D1, D2, D3, and D5 across the organization by embedding governance into tooling rather than policy.
**Core strategic bet.** Internal AI infrastructure compounds as an economic moat — every rapid iterator's failed experiment feeds the platform's improvement.
**Canonical examples.** Uber (four-layer platform architecture, 84% developer agentic adoption). BBVA (4000+ custom GPTs). Frontier orgs from OpenAI's State of Enterprise AI report (6× internal AI messaging volume vs. median).

**Profile.** The Architect invests in internal AI infrastructure that multiple teams depend on. They treat validation, governance, and monitoring as engineered constraints built into the platform rather than policy layered on top. Capital-intensive and slow to market. The reward is institutional-scale evolution — platforms outlast leadership transitions, and upstream signal capture creates a moat that competitors without comparable investment can't replicate. Platform teams hold specialist AI expertise while product teams consume it through clean abstractions.

**Strengths.**

- Institutional-scale durability — the platform outlasts executive tenures
- Economies of scope across many internal use cases
- Governance is invisible to users (built into tooling, not policy)
- Signal-capture moat — upstream absorption of every team's iterative exhaust

**Common challenges.**

- Slower time-to-market than startups or Vanguards
- Capital-intensive; requires sustained executive sponsorship across budget cycles
- Internal coordination overhead (platform teams can become bottlenecks)
- Platform can lag the model frontier if not actively refreshed

**Protocol orientation.** Protocols are the platform's product. Architects are the canonical protocol practitioners — best positioned to see protocols as durable coordination infrastructure rather than as policy or compliance overhead.

**Effective protocol management.** Engineer governance into tooling so it's invisible to users; let specialist validation run automatically. Treat protocol design as a layered concern — separate the protocols teams interact with daily from the platform-level protocols that hold the whole structure together. Watch for protocol drift between platform versions and what teams actually use; enforce protocol updates as part of the platform's release cadence.

**Ineffective protocol management.** Protocols become heavy; the platform team becomes a gate that product teams route around rather than through. Protocol drift accumulates between platform versions and what teams use, eroding the moat.

**The protocol view that fits them.** Protocols ARE infrastructure. The Architect's competitive moat *is* the protocol layer — the upstream signal capture, the validation discipline, the institutional knowledge encoded in how teams interact with the platform. Erosion of the protocol layer is erosion of the moat.

**Healthy vs. unhealthy expression.** Healthy: platform accelerates product teams; governance is felt as leverage, not friction. Unhealthy: platform becomes a gate that slows the teams it was supposed to accelerate.

**Blind spot.** Undervalues speed. Assumes time is on their side because the platform compounds — misses moments when a competitor's non-platform speed captures a market before the platform's advantages matter.

**Under stress.** Compresses toward **The Broker** — under budget cuts, the platform gets outsourced to vendors and the institutional advantage dissolves.

**Growth direction.** Expands D6 (coordination scope) into inter-organizational standards; moves toward L4 Infrastructural where the platform becomes a sector-wide baseline.

**Evolutionary path.** Architects emerge from Integrators who realize multi-team coordination requires infrastructure, or from successful Travellers widening their scope. They tend to remain Architects once at scale; the transitions away are usually crises.

**AI-flavor emphasis.** Flavor 4 (infrastructure) + Flavor 5 (custom) central. The platform provides Flavors 2 + 3 to other teams as managed services.

**Warning sign.** Platform team becomes a gatekeeper that product teams route around rather than through.

---

### 4. The Integrator

> "We're not first. We're not lost. We adopt where it pays and redesign when it matters."

**Axes.** Strategic · Augmentation · Behind proof · Internal · Chosen
**Maturity placement.** L2–3 — measurable value per deployment, specific governance per use case, domain experts validating in critical workflows.
**Core strategic bet.** Evidence-driven selection yields higher ROI per deployment than speculative first-moves, and workflow redesign (not just tool-layering) is where the real leverage lives.
**Canonical examples.** Accenture "AI Achievers" (≈12% of enterprises). McKinsey "high performers" (3× more likely to fundamentally redesign workflows). Most mature enterprises with visible, disciplined AI programs.

**Profile.** The Integrator deploys AI selectively where value is demonstrable, then redesigns workflows around the proven use rather than layering AI on existing processes. They wait for external evidence — competitor deployments, regulator guidance, vendor case studies, published results — before committing. Measured, evidence-driven, not first but not lost. The central basin of the archetype map: most healthy evolutionary paths converge here before continuing toward Architect. When Integrators execute, they capture real value; when they drift, they accumulate "under evaluation" backlog without corresponding deployment.

**Strengths.**

- High ROI per deployment (selection is strict)
- Organizational trust — workflow changes are visible and explicable
- Knowledge transfer scales (codified workflow patterns propagate)
- Adaptable to model-frontier shifts without business disruption

**Common challenges.**

- Slower than first-movers; some compounding advantages went elsewhere
- "Evidence-waiting" can become a permanent excuse for inaction
- Workflow redesign requires sustained change management that often underdelivers
- Proliferation risk — many small wins without platform investment creates sprawl

**Protocol orientation.** Adopts proven protocols from elsewhere and tests them in their own context. Protocols are an adoption multiplier — the apparatus that turns external evidence into local operating practice.

**Effective protocol management.** Adopt industry-standard protocols where they exist; adapt to local context with documented deviations; codify the adapted version. Build protocol literacy across teams so the next adoption is faster than the last. The Integrator's strength is selection rigor — that same rigor applied to protocols turns one-off deployments into compounding capability.

**Ineffective protocol management.** Keeps adopting protocols without adapting them; treats protocols as compliance checkboxes; never codifies the adapted version, so the next deployment starts from scratch again. The result is many small wins that don't propagate.

**The protocol view that fits them.** Protocols are how disciplined adoption compounds. Each protocol an Integrator codifies makes the next AI deployment cheaper and more reliable. Without that codification, "selective adoption" stays selective and never accumulates into platform.

**Healthy vs. unhealthy expression.** Healthy: selective, rigorous, compounding through workflow redesign. Unhealthy: selective becomes paralytic; pilots never convert to standard practice.

**Blind spot.** Believes "waiting for evidence" is always the rational choice — misses that some evidence only emerges after your own deployment generates it.

**Under stress.** Compresses toward **The Warden** — external pressure (regulatory, reputational, market) freezes deployment as compliance reviews multiply.

**Growth direction.** Evolves toward **The Architect** — invests in platform to scale the workflows; the natural next move when deployment count crosses a coordination threshold.

**Evolutionary path.** Integrators come from Vanguards (post-retrofit), Tinkerers (post-codification), Wardens (post-regulatory-clarity), or Brokers (post-internalization). They become Architects when scale demands it.

**AI-flavor emphasis.** Flavor 2 (enterprise) + Flavor 3 (product-integrated), selectively and with domain-expert validation.

**Warning sign.** Growing backlog of "AI opportunities under evaluation" without corresponding deployment cadence.

---

### 5. The Tinkerer

> "We don't know what will work until we try it. So we try a lot of things."

**Axes.** Strategic · Augmentation · Ahead of proof · Internal · Chosen
**Maturity placement.** L1–2 — high experimentation velocity, low codification; D4 visibility may be strong for active experiments but weak for outcomes, D3 temporal alignment lags.
**Core strategic bet.** Generating own evidence via high experimentation volume beats waiting for external proof in markets that reward speed.
**Canonical examples.** Scaleups and fast-moving mid-size orgs. Small product pods inside larger enterprises given freedom to experiment. Early-stage AI-adjacent (not AI-native) product teams.

**Profile.** The Tinkerer generates its own evidence through volume. Many small experiments run in parallel; few are codified yet. They move ahead of proof because their markets reward experimentation, and waiting for external validation means losing ground. A transient state by design: with discipline, Tinkerers become Integrators; with scale, they become Vanguards; without either, they dissolve back into Folkways. The discipline that matters is not starting experiments but retiring them — the signature Tinkerer failure mode is accumulating pilots without a retirement cadence.

**Strengths.**

- Pattern recognition across many real attempts (not theoretical)
- Low cost per experiment — scale is small, reversibility is high
- Practitioner culture attracts hands-on talent
- Fast feedback loops; evidence comes from own work, not literature

**Common challenges.**

- Codification gap — what works doesn't become standard practice
- Coordination overhead as concurrent experiments multiply
- Hard to separate signal from noise across many small pilots
- "Innovation theater" risk — looks active but doesn't converge

**Protocol orientation.** Experiments include protocol experiments. Each pilot is also testing what protocols would govern its scaled version, even if the team doesn't think of it that way.

**Effective protocol management.** Codify emergent protocols from successful pilots before starting more pilots. Treat protocols as the codification of what worked. The discipline that matters is treating "we'll write the protocol later" as a debt that must be paid before the next experiment, not a TODO that drifts.

**Ineffective protocol management.** Starts new protocols faster than retiring old ones; no codification cadence; pilots end without protocol artifacts that can be reused. The result is protocol sprawl — many small ad hoc rules nobody can remember, let alone enforce.

**The protocol view that fits them.** Protocols are how a Tinkerer becomes an Integrator without losing speed. Every successful pilot is a protocol waiting to be written down; writing it is what converts experimentation into compounding capability. The Tinkerer who codifies protocols ages into Integrator; the one who doesn't decays into Folkway.

**Healthy vs. unhealthy expression.** Healthy: disciplined experimentation that converges on codification. Unhealthy: perpetual experimentation that never commits.

**Blind spot.** Treats starting new experiments as progress, underestimates that retiring experiments is the real sign of discipline.

**Under stress.** Compresses toward **The Folkway** — under resource pressure, experiments continue individually but stop being tracked or centrally evaluated.

**Growth direction.** Evolves toward **The Integrator** — codifies what works into standard practice. The single most important move is retiring experiments as deliberately as starting them.

**Evolutionary path.** Tinkerers come from Folkways (when leadership starts tracking what's emerging) or from scaleup-stage adoption. They become Integrators via codification or Vanguards via scale. Without either, they dissolve back into Folkway.

**AI-flavor emphasis.** Flavor 1 (consumer) + Flavor 2 (enterprise) + Flavor 3 (product-integrated), variably and concurrently.

**Warning sign.** More than 3–4 concurrent pilots without clear retirement criteria.

---

### 6. The Ratifier

> "We don't surf the first wave. We ship the one that lasts."

**Axes.** Strategic · Architecture · Behind proof (deliberate) · Internal · Chosen
**Maturity placement.** L1–2 now, with the intent to step into L3 when they do move — policy infrastructure may be high but deployment is deliberately low.
**Core strategic bet.** The second wave, well-executed, outlasts the first.
**Canonical examples.** Apple (historical posture across emerging technology categories; current AI stance). Risk-averse incumbents in consumer categories where brand trust is foundational. Institutional cultures that privilege polish over priority.

**Profile.** The Ratifier defers deployment by strategic choice, not constraint. They wait for vendor consolidation, regulatory clarity, and use cases proven at scale by others. When they move, they deploy at higher polish than the early-movers who preceded them — trading early-market compounding for late-market quality. The bet is that the second wave, executed well, outlasts the first. Easy to confuse with paralysis from the outside; the distinguishing feature is a clear (if private) entry criterion. Apple's historical pattern is the canonical shape — and also the canonical reminder that Ratifiers can overstay their waiting posture.

**Strengths.**

- Deployment polish — their AI feels finished where others feel rough
- Avoids public learning costs others absorbed
- High trust with existing customers (no brand dilution from crapjects)
- Capital discipline — no wasted spend on tools that didn't survive

**Common challenges.**

- Missed differentiation windows that went to earlier movers
- Talent risk — practitioners want to work where the frontier is
- Late-arrival inertia — hard to recalibrate when the moment arrives
- Indistinguishable from paralysis without a clear entry criterion

**Protocol orientation.** Waits for industry-standard protocols to emerge before committing. The Ratifier's deferral is partly a protocol-maturity bet — the second-wave protocol set will be cleaner than the first.

**Effective protocol management.** Pre-commit to specific protocol-maturity triggers. Have an internal protocol that says "we ratify when X protocol reaches Y maturity." This converts vague waiting into a structured stance. Track which industry protocols are emerging and hold a thesis on which will dominate, so the entry decision is one already-rehearsed step rather than a fresh executive debate.

**Ineffective protocol management.** Waiting becomes endless because the trigger criterion keeps moving. Without a pre-committed trigger, "wait for maturity" decays into "wait for a permission no one will issue." The outside view: paralysis dressed as patience.

**The protocol view that fits them.** Protocols are what you're waiting for. The strategic risk is that waiting for the perfect protocol means missing the second-wave deployment window when the imperfect-but-mature protocol arrives. Pre-committing to the trigger is the move that distinguishes the Ratifier from the Ratifier-stalled-permanently.

**Healthy vs. unhealthy expression.** Healthy: deliberate timing with a clear trigger; ships polished second-wave product. Unhealthy: the trigger keeps moving; late becomes never.

**Blind spot.** Assumes polish compounds faster than time-in-market experience does — misses that second-movers rarely out-execute first-movers once those first-movers have iterated under real conditions.

**Under stress.** Compresses toward **The Broker** — under competitive pressure, outsources the capability entirely to avoid committing too late.

**Growth direction.** Evolves toward **The Integrator** or **The Architect** when they finally move with a clear trigger.

**Evolutionary path.** Ratifiers emerge from institutional cultures that privilege polish and brand (Apple-shape). They become Integrators or Architects when they move; rare to transition back. The dangerous path is stalled Ratifier → Broker permanently.

**AI-flavor emphasis.** Flavors 2 + 3 mostly, timed for later deployment. Minimal Flavor 1 exposure during the waiting period.

**Warning sign.** Multiple planning cycles pass without a clear deployment date or trigger criterion.

---

### 7. The Warden

> "Our industry doesn't move until the regulator does. That's the job."

**Axes.** Strategic · Augmentation · Behind proof · Variable · Constrained
**Maturity placement.** L2 — high D1 (protocol specificity around compliance), low D7 (deployment gated). High policy density paired with low deployment density.
**Core strategic bet.** Compliance-ready infrastructure creates a competitive moat in regulated verticals (1.5–2× valuation premium for compliance-mature assets).
**Canonical examples.** EU banks, insurers, and financial-services firms under the AI Act. Healthcare organizations under HIPAA-adjacent frameworks. Public-sector agencies with mandated deployment reviews. Vertical-specific regulated industries (pharma, defense, utilities).

**Profile.** The Warden gates deployment on regulatory approval. Compliance isn't a byproduct of their AI strategy; it's the operating posture. EU AI Act, HIPAA-adjacent frameworks, financial-services model governance, sector-specific audit regimes — the regulator sets deployment velocity. This can be a real strategic advantage in regulated verticals where compliance-mature infrastructure is hard to replicate. The underlying risk is that the regulatory clarity they're waiting for may arrive too late or too ambiguously, and meanwhile internal frustration produces shadow adoption — a Folkway forming quietly underneath the Warden posture.

**Strengths.**

- Compliance as moat — raises the barrier to entry for less-regulated competitors
- High D1 creates durable institutional knowledge
- Trust premium with regulated customers and auditors
- Risk-adjusted deployment — customer-facing AI incidents are rare

**Common challenges.**

- Regulatory uncertainty means deployment planning is always contingent
- Talent flight to less-regulated competitors
- Internal frustration drives shadow adoption (Folkway forming beneath)
- Compliance infrastructure becomes a permanent brake even after regulation clarifies

**Protocol orientation.** Protocols come from regulators; deployment is gated on compliance. The Warden is highly protocol-literate but only inbound (regulation → adoption); often weak on internal protocols beyond compliance.

**Effective protocol management.** Turn compliance protocols into competitive moat — high D1 specificity that's hard for less-regulated competitors to replicate. Build internal protocols *beyond* compliance, especially the protocols for moving once regulation clarifies. Keep the protocol layer tight enough that Folkway pressure underneath doesn't have room to grow.

**Ineffective protocol management.** Compliance protocols ossify; shadow Folkway forms underneath because internal frustration finds informal channels; org can't move when regulation clarifies because internal compliance culture has become its own brake. The protocols originally meant as shield become a self-imposed cage.

**The protocol view that fits them.** Protocols are both shield and cage. The shield is real value (compliance moat). The cage is the internal compliance culture continuing to gate deployment after the regulator stops gating. Watch for protocol-as-permission becoming protocol-as-prohibition — that drift is the Warden's signature failure mode.

**Healthy vs. unhealthy expression.** Healthy: compliance posture as active strategic advantage, with deployment ready to move when regulation clarifies. Unhealthy: compliance as reason not to decide anything.

**Blind spot.** Assumes the regulator is the binding constraint, misses that internal compliance culture often continues to gate deployment long after regulatory clarity arrives.

**Under stress.** Often develops a shadow **Folkway** underneath — individual practitioners use AI informally, bypassing compliance gates. The Samsung pattern.

**Growth direction.** Evolves toward **The Integrator** as regulation clarifies and compliance infrastructure becomes a deployment enabler rather than a gate.

**Evolutionary path.** Wardens come from regulated verticals or from Integrators that hit a compliance wall. They become Integrators when regulation clarifies; they rarely become Architects (compliance overhead discourages platform-scale bets).

**AI-flavor emphasis.** Flavor 2 (enterprise) restricted to approved tools. Flavors 3 + 5 blocked pending regulatory approval. Flavor 1 officially prohibited, often happening unofficially.

**Warning sign.** Growing internal workarounds that bypass official AI policy.

---

### 8. The Broker

> "We know what we need. Someone else is better at holding the tools."

**Axes.** Strategic · Augmentation · Behind proof · External · Chosen
**Maturity placement.** L2 — value integration via vendor, low internal D5 (domain expertise around AI itself; domain expertise about the business remains high).
**Core strategic bet.** AI moves too fast for non-specialist orgs to build competitively; renting capability is more rational than buying.
**Canonical examples.** Mid-market ops orgs on Palantir / Accenture / BCG X AI-as-a-service. Non-tech-native enterprises delegating AI capability to specialist consultancies. Smaller orgs that chose not to build AI talent internally.

**Profile.** The Broker delegates AI capability externally. They hold the problem but not the tools; the vendor or consultancy holds the capability. The rational premise is that AI moves too fast for non-specialist orgs to build competitively — better to rent than buy. When it works, it's fast and cheap and lets internal teams focus on the business. When it doesn't, vendor lock-in becomes the dominant story and the org discovers it can't even evaluate the vendor's work critically. The growth pattern is usually "build-buy-build" — start by buying, internalize the strategic pieces later.

**Strengths.**

- Speed to deployment with no internal build time
- Access to specialist capability without salary commitments
- Lower capital exposure during a period of technology uncertainty
- Focus — internal teams work on the business, not the AI

**Common challenges.**

- Vendor lock-in becomes the dominant risk
- Internal knowledge erosion — can't evaluate vendor claims critically
- Data governance complexity (what does the vendor see, store, train on)
- Strategic dependency — if the vendor pivots, the org is exposed

**Protocol orientation.** Relies on vendor protocols; doesn't hold protocol design authority. The structural risk is that protocol authority follows capability — when the vendor sets the protocols, the Broker's internal autonomy shrinks invisibly.

**Effective protocol management.** Layer internal protocols on top of vendor protocols. Maintain evaluative capacity through the protocols you control — specifically, the protocols for vetting vendor outputs and maintaining audit trails the vendor can't unilaterally rewrite. The protocols you keep are what protects against vendor lock-in becoming vendor capture.

**Ineffective protocol management.** Full delegation including protocol authority. Internal team can't critique vendor's protocols because they don't hold a parallel version themselves. When the vendor changes pricing or pivots, the Broker has no protocol foundation to fall back on.

**The protocol view that fits them.** Protocols are what you keep when the vendor leaves. The Broker who holds a protocol layer (evaluation, governance, audit) at the boundary of the vendor relationship can change vendors; the Broker who doesn't, can't.

**Healthy vs. unhealthy expression.** Healthy: selective delegation with internal staff who can evaluate vendor output and internalize strategic pieces over time. Unhealthy: total dependence without the internal capacity to critique the work.

**Blind spot.** Assumes the vendor relationship is a commercial question when it's actually a capability question — underestimates what happens when internal knowledge atrophies.

**Under stress.** Compresses toward **The Warden** — under vendor disruption (pricing shock, acquisition, pivot), brings governance in-house as a defensive response without yet having the capability to match.

**Growth direction.** Evolves toward **The Integrator** or **The Architect** — selectively internalizes strategic capabilities as the build-vs-buy calculus shifts.

**Evolutionary path.** Brokers come from non-tech-native orgs that need AI capability but rationally chose not to build. They become Integrators or Architects as the cost-benefit of delegation changes.

**AI-flavor emphasis.** Flavors 2 + 3 via vendor delivery. Flavors 4 + 5 not held internally at all.

**Warning sign.** No internal staff who can sanity-check the vendor's claims.

---

## Emergent archetypes (9–10)

### 9. The Folkway

> "AI showed up through our teams before leadership noticed. We're still figuring out what that means."

**Axes.** Emergent · Augmentation (shallow) · — · Individuals · —
**Maturity placement.** L1 — low D4 (leadership visibility), ad hoc D1 (no systematic protocol), no systematic D5 (no validation layer). The shadow-adoption level.
**Core strategic bet.** Not a bet — a state. The open question is whether the organization catches up to its own practitioners.
**Canonical examples.** Small orgs where everyone uses ChatGPT on the side. Non-tech teams at large enterprises informally adopting. Early-stage bottom-up adoption preceding any strategy formation.

**Profile.** The Folkway is broad, shallow individual adoption happening below organizational visibility. Teams discovered AI on their own; the organization hasn't decided what to do about it yet. The strength is bottom-up sensing — practitioners are finding valuable use cases before leadership commissions a strategy. The risk is the Samsung scenario: valuable data walks out through unauthorized tool interfaces while leadership discusses policy. Most organizations pass through the Folkway briefly on their way to a chosen posture; a minority linger here for years, accumulating exposure without corresponding learning.

**Strengths.**

- Bottom-up discovery of valuable use cases
- Low cost of experimentation (users often paying for tools personally)
- High individual adoption velocity
- Early signal about what matters to frontline work

**Common challenges.**

- Data exfiltration risk through personal tool accounts
- No organizational learning — what works for one team doesn't propagate
- Quality variance — some uses excellent, others produce crapjects
- Governance vacuum creates exposure without corresponding upside

**Protocol orientation.** The Folkway IS a protocol — just an undocumented, emergent one. The org's de facto AI use is governed by informal conventions nobody wrote down but everybody enforces through habit.

**Effective protocol management.** Inventory before formalizing. Catch the emergent practices that are already working and lightly codify them — turning "what we do" into "what we do because we decided to." Resist the urge to overwrite emergent protocols with imposed ones; the imposed version usually drives the practice underground rather than capturing it. The MVPi (minimum viable protocol intervention) framing fits: pick the one bottleneck where formalization unlocks the most, leave the rest to keep working.

**Ineffective protocol management.** Leadership clamps down with heavy formal protocols, driving practice further underground. Or, conversely, leaves emergence completely unmanaged until an incident forces a defensive overcorrection.

**The protocol view that fits them.** Protocols are what emergence becomes when you write it down. The Folkway's informal conventions ARE proto-protocols; the question is whether the org will recognize and refine them, or wait for a regulator or incident to write them for them.

**Healthy vs. unhealthy expression.** Healthy: brief passage state on the way to Tinkerer or Integrator, with leadership catching up and formalizing what's emerging. Unhealthy: lingering Folkway that never gets inventoried, eventual incident forces heavy-handed reaction.

**Blind spot.** Underestimates the data-governance exposure because the individual users don't see what they, collectively, are sending out.

**Under stress.** Under top-down pressure after a visible incident, often compresses toward **The Warden** — leadership responds with heavy-handed policy that lacks specificity, driving the Folkway further underground rather than resolving it.

**Growth direction.** Evolves toward **The Tinkerer** (formalizing what's already emerging) or **The Guild** (if sophistication is already concentrating in specific experts).

**Evolutionary path.** Folkways are an entry state — most orgs pass through briefly. They become Tinkerers with formalization, Guilds with concentration + expertise, or Wardens if leadership responds by clamping down.

**AI-flavor emphasis.** Flavor 1 (consumer) dominant. Occasional Flavor 3 via personal account access wiring into products without oversight.

**Warning sign.** Leadership cannot produce a current list of the AI tools in use across the organization.

---

### 10. The Guild

> "Our best people figured it out themselves. The rest of the org doesn't know yet."

**Axes.** Emergent · Augmentation (sophisticated) · — · Individuals · —
**Maturity placement.** L2–3 at the organization level; L3 at the individual/expert level. The F2F ("factory to factory") pattern where sophistication lives at the practitioner layer rather than the institutional layer.
**Core strategic bet.** Not an organizational bet — an emergent capability. The strategic question is whether leadership recognizes and preserves what its experts have built before the experts leave.
**Canonical examples.** Enterprises where a few engineers or analysts have built sophisticated custom pipelines unknown to leadership. Domain experts using AI to take on work that was previously out of reach. Informal expert networks accumulating proprietary pattern recognition.

**Profile.** The Guild is concentrated, sophisticated AI work living below organizational visibility. Individual experts — often with deep domain knowledge — have built proprietary pipelines and pattern recognition the organization may not realize it has. This is "tasteful discrimination" accumulating at the practitioner layer, the kind of judgment base models don't possess and vendors can't replicate. Strength: the org holds a capability moat it doesn't know is a moat. Risk: the expertise leaves when the expert does. The Guild is usually detected, not self-reported — the archetype's defining feature is that the organization doesn't fully see itself.

**Strengths.**

- Proprietary pattern recognition — signal value base models don't have
- High-sophistication work on real problems, not demos
- Resilient to model frontier shifts (experts adapt faster than systems)
- Low governance overhead at the practitioner level

**Common challenges.**

- Bus factor — if the expert leaves, the capability leaves
- Opacity — organization can't evaluate or scale what it can't see
- Reproducibility gap — the Guild member's work isn't codified
- Bridge problem — Guild work doesn't integrate with official workflows

**Protocol orientation.** Each Guild member's pipeline is a personal protocol — tacit, expert, often undocumented. Protocols at the personal level may be highly sophisticated; at the org level they may not exist.

**Effective protocol management.** Codify personal protocols into shared documentation before the expert leaves. Treat the Guild member's tacit pipeline as a draft protocol that needs translation, not as a finished product. The bridge from individual to platform runs through making the personal protocol transferable — that's also the bridge from L3-individual to L3-organizational maturity.

**Ineffective protocol management.** Protocols stay tacit; "anyone could do this" is assumed but never tested; expertise leaves with the person and the protocol leaves with the expertise. The capability goes from invisible to absent without an intermediate visible state.

**The protocol view that fits them.** Protocols are how tacit expertise survives departure. The Guild member's own pipelines are protocols — just personal ones. Making them transferable converts individual capability into organizational capital. The conversion rarely happens by default; it happens because someone in leadership recognizes the Guild and invests in the bridge.

**Healthy vs. unhealthy expression.** Healthy: leadership recognizes the Guild, invests in codification, and the expertise becomes an Architect-level platform in that domain. Unhealthy: the org never sees the Guild, the expert leaves, the capability evaporates without trace.

**Blind spot.** The Guild member often underestimates how much of their work is tacit and non-transferable — "anyone could do this" is almost always wrong.

**Under stress.** Under organizational pressure (layoffs, mandated standardization, forced tool consolidation), Guilds often dissolve rather than transition — the experts leave and take the capability with them.

**Growth direction.** Evolves toward **The Architect** in their specific domain — the Guild's work gets codified into platform primitives. This requires leadership recognition and investment; it doesn't happen by default.

**Evolutionary path.** Guilds come from Folkways (as sophistication concentrates) or from Integrators (where a particular expert goes deeper than the org expects). They become Architects in their domain if codified, or they disappear if not.

**AI-flavor emphasis.** Flavor 1 (consumer) + Flavor 5 (custom/developed) driven by individual experts, often stitched together with informal tooling.

**Warning sign.** The expert can't explain their work to colleagues in under an hour — or more dangerous, leadership has never asked.

---

## Evolutionary map

How archetypes relate as an organization evolves. Most paths converge on Integrator, which then flows toward Architect at scale.

```
  Folkway ──(formalization)──> Tinkerer ──(codification)──> Integrator ──(platform investment)──> Architect
     │                                                          ▲
     │                                                          │
     └──(concentration + expertise)──> Guild ──(codification)───┘
                                                                │
  Vanguard ──(retrofit succeeds)────────────────────────────────┤
           ──(retrofit fails, crisis)──> Ratifier               │
                                                                │
  Ratifier ──(market matures, they move)──────────────────────> │
                                                                │
  Warden ──(regulation clarifies)──> Integrator ──────────────────>│
                                                                │
  Broker ──(strategic choice to internalize)──> Integrator ───────>│
                                                                │
  Traveller — stable; scales within its form                    │
                                                                ▼
                                                           (L3/L4)
```

**Three structural observations.**

1. **Integrator is the central basin.** Most healthy transitions route through it. That's because the Integrator posture (selective evidence-driven deployment) is the rational posture once speculative uncertainty has resolved into known ROI patterns — nearly every archetype passes through this rationality at some point.
2. **Architect is the late-stage scaling form,** not a hierarchical apex. It emerges when multi-team coordination makes platform investment more economic than continued workflow-by-workflow deployment.
3. **Traveller is topologically isolated.** Organizations don't *become* Travellers — they were architected that way from inception. An enterprise running a successful retrofit becomes an Integrator or Architect, not a Traveller.

## Stress compression and growth integration (summary table)


| Archetype  | Under stress (compresses toward)                        | Growth direction (evolves toward)                   |
| ---------- | ------------------------------------------------------- | --------------------------------------------------- |
| Vanguard   | Ratifier (defensive overcorrection)                     | Integrator (retrofit governance)                    |
| Traveller  | (stays Traveller; iterates or fails)                    | Widens scope, sets industry standards               |
| Architect  | Broker (platform gets outsourced under budget pressure) | L4 Infrastructural (sector-wide platform)           |
| Integrator | Warden (freezes under external pressure)                | Architect (platform investment)                     |
| Tinkerer   | Folkway (experiments stop being tracked)                | Integrator (codification)                           |
| Ratifier   | Broker (outsources rather than commit too late)         | Integrator or Architect (on clear trigger)          |
| Warden     | Folkway (shadow adoption beneath compliance gate)       | Integrator (when regulation clarifies)              |
| Broker     | Warden (in-house governance without capability)         | Integrator or Architect (selective internalization) |
| Folkway    | Warden (heavy-handed reaction after incident)           | Tinkerer or Guild (formalize emerging pattern)      |
| Guild      | Dissolution (experts leave, capability evaporates)      | Architect (in their domain, if codified)            |


## Common blind spots by family

Grouping the 10 archetypes into three families surfaces shared blind spots worth calling out:


| Family                                        | Members                         | Shared blind spot                                                                                                                                         |
| --------------------------------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ahead-of-proof**                            | Vanguard, Traveller, Tinkerer   | Treats speed as always compounding; underestimates how much iteration cost is absorbed by stakeholders (customers, specialists) who may not stay patient. |
| **Behind-of-proof / internal**                | Integrator, Architect, Ratifier | Treats rigor as risk-free; underestimates opportunity cost of waiting and how fast incumbents can compound from earlier positions.                        |
| **Behind-of-proof / external-or-constrained** | Warden, Broker                  | Treats capability as a commercial question; underestimates what happens when internal evaluative capacity atrophies.                                      |
| **Emergent**                                  | Folkway, Guild                  | Assumes leadership sees what practitioners see; underestimates how quickly the invisible becomes load-bearing.                                            |


## What's next

1. **Rafa reviews the profiles** and flags anything that misses the archetype or needs sharpening.
2. **v0.6 drafts the Screen 2 behavioral-validator questions** — 3–5 concrete behavior items calibrated to the discriminability cuts identified in v0.4's MECE table and the warning signs identified here.
3. **Short-form descriptor copy** for the assessment UI (≈40–80 words per archetype, extracted from the Profile section of each entry).
4. **Implementation** — replace the current 2-step quiz with Driver 1 → Driver 2/3 → archetype resolution, returning the full profile as the result view.

