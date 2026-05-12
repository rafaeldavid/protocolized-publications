/* ─────────────────────────────────────────────────────────────
   assessment.js — ported from /assessment/index.html
   IIFE-wrapped; expose handlers on window.Assessment.
   Level names aligned to current slide deck: Engine (was Designed),
   Infrastructure (was Infrastructural).
   ───────────────────────────────────────────────────────────── */
(function () {
  const CALC_DELAY_MS = 900;

  /* ─── Question bank (24 binary statements) ──────────────── */
  const QUESTIONS = [
    { a: "If AI technology stopped working tomorrow, our product would stop working too.",
      b: "If AI technology stopped working tomorrow, our work would slow but continue." },
    { a: "People outside our team interact with the AI capabilities we deploy.",
      b: "The AI capabilities we deploy are invisible to anyone outside our team." },
    { a: "If our main AI capability vendor changed pricing, it would have no impact on our offering.",
      b: "If our main AI capability vendor changed pricing, we would change our offering." },
    { a: "We've invested in dedicated AI talent (hired or developed) for our function.",
      b: "We expect existing staff to learn AI skills as part of their regular work." },
    { a: "Our AI tools keep producing useful outputs as our data and work evolve.",
      b: "We regularly update our AI tools to stay aligned with our business." },
    { a: "A senior specialist with domain knowledge reviews critical AI outputs.",
      b: "AI outputs are reviewed by generalists or pass through automated checks." },
    { a: "Our AI handoffs follow industry standards.",
      b: "Our AI rules apply only inside our company." },
    { a: "We deploy new AI use cases before most peers in our industry.",
      b: "We deploy new AI use cases after peers have proven them." },
    { a: "When AI changes require it, we adapt — including reversing AI deployments.",
      b: "When we deploy AI visibly, we don't usually need to walk it back." },
    { a: "Our own investment priorities set the pace of AI adoption.",
      b: "Regulation or compliance review sets the pace of AI adoption." },
    { a: "When we delay AI deployment, it's because we're choosing to wait for proven maturity.",
      b: "When we delay AI deployment, it's because external rules require it." },
    { a: "Our AI approach came from leadership first.",
      b: "Our AI approach came from teams first." },
    { a: "We have a current inventory of the AI tools each team uses.",
      b: "We periodically learn about new AI tools other colleagues have adopted." },
    { a: "Our business existed before AI; we added AI to it.",
      b: "AI is why our business exists; there's no non-AI version of it." },
    { a: "Our dominant AI posture is building internal infrastructure multiple teams depend on.",
      b: "Our dominant AI posture is selectively deploying AI use cases that are already proven." },
    { a: "Our AI experimentation runs many concurrent pilots to figure out what works.",
      b: "Our AI experimentation picks specific use cases proven by peers before deploying." },
    { a: "Most of our informal AI use is many people doing everyday tasks.",
      b: "Most of our informal AI use is a few people doing sophisticated work." },
    { a: "Multiple teams across our org run on the same internal AI platform.",
      b: "Each team picks its own AI tools; there's no shared platform." },
    { a: "Our main AI deployment criterion is whether the value case is proven.",
      b: "Our main AI deployment criterion is whether compliance review clears the use." },
    { a: "We're deploying AI with the tools that exist today.",
      b: "We're waiting for the next generation of AI tools before we deploy." },
    { a: "Our AI documentation is current enough to hand off to a new team member.",
      b: "Our AI work is carried by a few people's practical knowledge." },
    { a: "Our AI capability is held mostly by our internal team.",
      b: "Our AI capability is held mostly by external partners we contract with." },
    { a: "Our AI roadmap follows our own internal priorities and timeline.",
      b: "Our AI roadmap follows what our vendor or partner ships." },
    { a: "Our team uses AI tools as part of how we do our work.",
      b: "Our team has never used or heard of AI tools." }
  ];

  /* ─── Archetype tarot icons (inline SVG) ────────────────── */
  const ICONS = {
    Vanguard: '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="28" y1="14" x2="28" y2="66"/><path d="M28 18 L58 23 L52 30 L58 37 L28 32 Z" fill="currentColor" stroke="none"/><line x1="16" y1="66" x2="56" y2="66"/><circle cx="28" cy="14" r="2.2" fill="currentColor" stroke="none"/></svg>',
    Traveller: '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="40" cy="40" r="22"/><path d="M40 18 L44 38 L40 40 L36 38 Z" fill="currentColor" stroke="none"/><path d="M40 62 L36 42 L40 40 L44 42 Z" fill="currentColor" stroke="none"/><path d="M18 40 L38 36 L40 40 L38 44 Z" fill="currentColor" stroke="none"/><path d="M62 40 L42 44 L40 40 L42 36 Z" fill="currentColor" stroke="none"/><circle cx="40" cy="40" r="2" fill="currentColor" stroke="none"/></svg>',
    Architect: '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="14" width="48" height="6"/><rect x="22" y="20" width="36" height="40"/><line x1="32" y1="20" x2="32" y2="60"/><line x1="40" y1="20" x2="40" y2="60"/><line x1="48" y1="20" x2="48" y2="60"/><rect x="14" y="60" width="52" height="6"/></svg>',
    Integrator: '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="32" cy="32" r="14"/><circle cx="48" cy="32" r="14"/><circle cx="40" cy="48" r="14"/></svg>',
    Tinkerer: '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="30" cy="36" r="11"/><circle cx="30" cy="36" r="3" fill="currentColor"/><path d="M30 22 L30 26 M30 46 L30 50 M16 36 L20 36 M40 36 L44 36 M20 26 L23 29 M37 29 L40 26 M20 46 L23 43 M37 43 L40 46"/><circle cx="55" cy="52" r="8"/><circle cx="55" cy="52" r="2" fill="currentColor"/><path d="M55 42 L55 45 M55 59 L55 62 M45 52 L48 52 M62 52 L65 52"/></svg>',
    Ratifier: '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="40" cy="33" r="17"/><path d="M40 22 L43 30 L51 30 L45 35 L47 43 L40 38 L33 43 L35 35 L29 30 L37 30 Z" fill="currentColor" stroke="none"/><path d="M28 50 L24 66 L40 60 L56 66 L52 50"/></svg>',
    Warden: '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M40 12 L62 20 L62 40 C62 55 52 65 40 70 C28 65 18 55 18 40 L18 20 Z"/><circle cx="40" cy="33" r="6"/><line x1="40" y1="39" x2="40" y2="56"/><line x1="40" y1="49" x2="46" y2="49"/></svg>',
    Broker: '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="40" y1="18" x2="40" y2="62"/><line x1="20" y1="26" x2="60" y2="26"/><path d="M20 26 L13 42 L27 42 Z"/><path d="M60 26 L53 42 L67 42 Z"/><line x1="32" y1="62" x2="48" y2="62"/><circle cx="40" cy="18" r="2" fill="currentColor"/></svg>',
    Folkway: '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 65 Q35 55 30 42 Q25 28 40 25 Q55 22 50 36 Q45 50 60 55"/><circle cx="20" cy="65" r="2.5" fill="currentColor"/><circle cx="60" cy="55" r="2.5" fill="currentColor"/><circle cx="40" cy="25" r="2.5" fill="currentColor"/></svg>',
    Guild: '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="40" cy="22" r="8"/><circle cx="37.5" cy="21" r="1.4" fill="currentColor"/><circle cx="42.5" cy="21" r="1.4" fill="currentColor"/><circle cx="26" cy="50" r="8"/><circle cx="23.5" cy="49" r="1.4" fill="currentColor"/><circle cx="28.5" cy="49" r="1.4" fill="currentColor"/><circle cx="54" cy="50" r="8"/><circle cx="51.5" cy="49" r="1.4" fill="currentColor"/><circle cx="56.5" cy="49" r="1.4" fill="currentColor"/><line x1="40" y1="30" x2="40" y2="38"/><line x1="40" y1="40" x2="28" y2="46"/><line x1="40" y1="40" x2="52" y2="46"/></svg>'
  };

  const ROMAN = { Vanguard: 'I', Traveller: 'II', Architect: 'III', Integrator: 'IV', Tinkerer: 'V', Ratifier: 'VI', Warden: 'VII', Broker: 'VIII', Folkway: 'IX', Guild: 'X' };

  /* ─── Maturity level icon badges (inline SVG) ───────────── */
  const LEVEL_ICONS = {
    '1': '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="40" cy="40" r="22" stroke-dasharray="3,5"/><circle cx="40" cy="32" r="5" stroke-dasharray="2,3"/><path d="M28 50 Q28 40 40 40 Q52 40 52 50" stroke-dasharray="3,3"/></svg>',
    '2': '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="40" cy="40" r="22"/><path d="M27 40 L36 49 L53 32" stroke-width="2.5"/></svg>',
    '2-3': '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="40" cy="40" r="20"/><path d="M30 40 L37 47 L50 32" stroke-width="2"/><path d="M40 18 L40 22 M40 58 L40 62 M18 40 L22 40 M58 40 L62 40"/></svg>',
    '3': '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="40" cy="40" r="14"/><circle cx="40" cy="40" r="4" fill="currentColor"/><path d="M40 22 L40 26 M40 54 L40 58 M22 40 L26 40 M54 40 L58 40 M27 27 L30 30 M50 50 L53 53 M27 53 L30 50 M50 30 L53 27"/></svg>',
    '3-4': '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="40" cy="40" r="11"/><circle cx="40" cy="40" r="3" fill="currentColor"/><path d="M40 25 L40 29 M40 51 L40 55 M25 40 L29 40 M51 40 L55 40"/><circle cx="62" cy="22" r="4" fill="currentColor"/><circle cx="22" cy="62" r="4" fill="currentColor"/><circle cx="62" cy="62" r="4" fill="currentColor"/><line x1="48" y1="33" x2="58" y2="25"/><line x1="32" y1="48" x2="25" y2="58"/><line x1="48" y1="48" x2="58" y2="58"/></svg>'
  };
  const LEVEL_PROGRESS = { '1': 1, '2': 2, '2-3': 2.5, '3': 3, '3-4': 3.5 };
  const LEVEL_DISPLAY = { '1': 'L1', '2': 'L2', '2-3': 'L2→3', '3': 'L3', '3-4': 'L3→4' };
  const MATURITY_TO_RESULTS = { 'L1': '1', 'L1-L2': '1', 'L2': '2', 'L2-3': '2-3', 'L3': '3', 'L3-4': '3-4' };

  /* ─── Archetype profiles ─────────────────────────────────── */
  const ARCHETYPES = {
    Vanguard: {
      title: "The Vanguard",
      quote: "Someone has to go first. We'd rather learn hard than wait safe.",
      axes: ["Strategic", "Architecture (retrofit)", "Ahead of proof", "Internal", "Chosen"],
      coreStrategicBet: "First-mover advantage compounds faster than reversal risk compounds loss.",
      examples: "Klarna (2024–25 AI-agent arc: mandated, reversed, rebuilt). Duolingo (AI-first content, user headwinds). Shopify (Lütke 'AI is non-optional' memo).",
      profile: "The Vanguard deploys AI aggressively in customer-facing and core operational work before governance is ready. They retrofit AI into an existing organization because they believe leadership conviction matters more than waiting for external validation. Public mandates; explicit policy shifts; visible executive commitment. The bet is asymmetric — some deployments will roll back publicly, but the ones that stick compound. They treat reputational exposure as the price of not being late, and they absorb the criticism of specialists whose judgment was bypassed in the pursuit of speed.",
      strengths: ["Organizational alignment — leadership has taken a clear public position","Forced learning under real conditions (no hiding in pilot-land)","Captures compounding advantages unavailable to orgs waiting for proof","Talent magnet for ambitious practitioners who want the leading edge"],
      challenges: ["Governance lags deployment; fixes are reactive and publicly visible","Customer-facing quality incidents (the Klarna reversal pattern)","Internal backlash from domain specialists whose judgment was overridden","'Evaluative anesthesia' — so much is produced so fast that quality signal degrades"],
      healthy: "Moves fast, learns fast, retrofits governance as issues surface.",
      unhealthy: "Moves fast, reverses publicly, replaces the CEO.",
      blindSpot: "Underestimates how much of the early 'success' was goodwill from stakeholders who expected eventual refinement, not production-grade polish.",
      protocolNatural: "Treats protocols as drag at first; tends to encounter them as the consequence of a reversal rather than as a precondition for speed.",
      protocolEffective: "Build protocols <em>during</em> deployment, not after. Choose lightweight protocol primitives — escalation triggers, rollback procedures, public-incident response — that don't slow deployment but absorb its volatility. The protocols you have when an incident hits decide whether you ship the fix in 48 hours or 4 weeks. Treat protocol design as a speed-multiplier, not a tax on it.",
      protocolIneffective: "Defers all protocol work until incident forces it, then overcorrects with heavy governance that slows future deployments. Conflates 'speed' with 'no protocol,' missing that protocols are what makes speed sustainable.",
      protocolView: "Protocols are reversal-prevention machinery. Without them, every aggressive deployment either succeeds by luck or burns trust. The Vanguard's strategic bet — moving first — depends on having the protocol layer that lets them move <em>back</em> gracefully when needed.",
      underStress: "Compresses toward <strong>The Ratifier</strong> — a reversal crisis can trigger overcorrection into slowdown and heavy governance, sometimes overshooting into paralysis.",
      growthDirection: "Evolves toward <strong>The Integrator</strong> — retrofits governance to match deployment footprint, codifies what worked, retires what didn't.",
      evolutionaryPath: "Vanguards emerge from confident, opinionated leadership with strong AI conviction. They become Integrators if the retrofit succeeds; they become Ratifiers if a crisis forces a defensive reset.",
      aiFlavor: "Flavor 2 (enterprise) + Flavor 3 (product-integrated), deployed aggressively. Flavors 4 + 5 typically underdeveloped relative to 2 + 3.",
      warning: "'AI-first' becomes an internal mandate without an accompanying review infrastructure."
    },
    Traveller: {
      title: "The Traveller",
      quote: "We didn't add AI to our business. AI is why the business exists.",
      axes: ["Strategic", "Architecture (greenfield)", "Ahead of proof", "Internal", "Chosen"],
      coreStrategicBet: "A clean-sheet organization can outcompete incumbents retrofitting AI into legacy structures.",
      examples: "Boom Supersonic (mkBoom engineering stack). Cursor. AI-native fintechs (Ramp, Brex adjacents). Logistics and customer-service operating-model rebuilders.",
      profile: "The Traveller built the organization around AI from inception. The business doesn't function without AI — the product either creates capability that wasn't reachable before (market-creating) or rebuilds an existing market with a 3–5× leaner operating model (service-rebuilding). Protocols for validation, ontological stability, and domain-expert review are engineered alongside capability, not after an incident forces them. Travellers typically run with smaller headcount than revenue-equivalent incumbents and attract practitioners who want to work where AI isn't a bolt-on.",
      strengths: ["No legacy baggage — every workflow is clean-sheet","Governance designed into product architecture, not layered on top","Capital-efficient operating model (talent structure built for AI)","Customers understand AI is the product, not a feature; expectations are calibrated"],
      challenges: ["Fragility if underlying foundation models shift unexpectedly","Talent concentration — founders often hold critical judgment that can't yet delegate","Defensibility as incumbents close the gap with retrofit investment","Scaling past early product-market fit into a durable institution"],
      healthy: "The team builds a real institution with distributed judgment.",
      unhealthy: "AI-native team stays founder-dependent and never becomes a company.",
      blindSpot: "Assumes the AI-native operating model is always faster — misses that some incumbent advantages (distribution, trust, data) aren't catchable by structural cleverness alone.",
      protocolNatural: "Protocols are part of product architecture by default. AI validation, ontological stability, and escalation paths are designed alongside features rather than added retroactively.",
      protocolEffective: "Treat the operating-model protocols (decision rights, incident response, scaling decisions) with the same rigor as product-level protocols. The Traveller's natural advantage is that they didn't have to retrofit; the strategic move is making the founder-team's tacit protocols explicit enough to scale beyond ten people. Watch for the gap between strong technical protocols and weak organizational ones as headcount doubles.",
      protocolIneffective: "Protocols exist only at the technical or code layer; nothing organizational. The team scales 2× and discovers no shared protocol for handling internal disagreement, novel incident classes, or customer escalation.",
      protocolView: "Protocols are not bureaucracy — they're the operating system. You're already running on protocols you designed; the question is whether you're tracking which ones are tacit and which need formalization before the next 50 hires.",
      underStress: "Travellers don't disintegrate toward another archetype. They either iterate their way out or fail as companies; the form doesn't flex into Integrator or Architect because those require a different origin story.",
      growthDirection: "Widens AI-specific governance into broader operating protocols as the org scales; deepens coordination scope toward industry partnerships and standards.",
      evolutionaryPath: "Travellers don't transition — they scale within their form. An enterprise that retrofits successfully becomes an Integrator or Architect, not a Traveller. Travellers are topologically isolated on the archetype map.",
      aiFlavor: "Flavor 3 (product-integrated) + Flavor 5 (custom/developed) central to the product. Flavor 2 supports internal work.",
      warning: "The founder-team's judgment can't be delegated because no one else understands the AI-specific trade-offs."
    },
    Architect: {
      title: "The Architect",
      quote: "We're not chasing the latest model. We're building the platform our teams will run on for years.",
      axes: ["Strategic", "Architecture", "Behind proof", "Internal", "Chosen"],
      coreStrategicBet: "Internal AI infrastructure compounds as an economic moat — every rapid iterator's failed experiment feeds the platform's improvement.",
      examples: "Uber (four-layer platform architecture, 84% developer agentic adoption). BBVA (4000+ custom GPTs). Frontier orgs from OpenAI's State of Enterprise AI report (6× internal AI messaging volume vs. median).",
      profile: "The Architect invests in internal AI infrastructure that multiple teams depend on. They treat validation, governance, and monitoring as engineered constraints built into the platform rather than policy layered on top. Capital-intensive and slow to market. The reward is institutional-scale evolution — platforms outlast leadership transitions, and upstream signal capture creates a moat that competitors without comparable investment can't replicate. Platform teams hold specialist AI expertise while product teams consume it through clean abstractions.",
      strengths: ["Institutional-scale durability — the platform outlasts executive tenures","Economies of scope across many internal use cases","Governance is invisible to users (built into tooling, not policy)","Signal-capture moat — upstream absorption of every team's iterative exhaust"],
      challenges: ["Slower time-to-market than startups or Vanguards","Capital-intensive; requires sustained executive sponsorship across budget cycles","Internal coordination overhead (platform teams can become bottlenecks)","Platform can lag the model frontier if not actively refreshed"],
      healthy: "Platform accelerates product teams; governance is felt as leverage, not friction.",
      unhealthy: "Platform becomes a gate that slows the teams it was supposed to accelerate.",
      blindSpot: "Undervalues speed. Assumes time is on their side because the platform compounds — misses moments when a competitor's non-platform speed captures a market before the platform's advantages matter.",
      protocolNatural: "Protocols are the platform's product. Architects are the canonical protocol practitioners — best positioned to see protocols as durable coordination infrastructure rather than as policy or compliance overhead.",
      protocolEffective: "Engineer governance into tooling so it's invisible to users; let specialist validation run automatically. Treat protocol design as a layered concern — separate the protocols teams interact with daily from the platform-level protocols that hold the whole structure together. Watch for protocol drift between platform versions and what teams actually use; enforce protocol updates as part of the platform's release cadence.",
      protocolIneffective: "Protocols become heavy; the platform team becomes a gate that product teams route around rather than through. Protocol drift accumulates between platform versions and what teams use, eroding the moat.",
      protocolView: "Protocols ARE infrastructure. The Architect's competitive moat <em>is</em> the protocol layer — the upstream signal capture, the validation discipline, the institutional knowledge encoded in how teams interact with the platform. Erosion of the protocol layer is erosion of the moat.",
      underStress: "Compresses toward <strong>The Broker</strong> — under budget cuts, the platform gets outsourced to vendors and the institutional advantage dissolves.",
      growthDirection: "Expands coordination scope into inter-organizational standards; moves toward L4 Infrastructure where the platform becomes a sector-wide baseline.",
      evolutionaryPath: "Architects emerge from Integrators who realize multi-team coordination requires infrastructure, or from successful Travellers widening their scope. They tend to remain Architects once at scale; the transitions away are usually crises.",
      aiFlavor: "Flavor 4 (infrastructure) + Flavor 5 (custom) central. The platform provides Flavors 2 + 3 to other teams as managed services.",
      warning: "Platform team becomes a gatekeeper that product teams route around rather than through."
    },
    Integrator: {
      title: "The Integrator",
      quote: "We're not first. We're not lost. We adopt where it pays and redesign when it matters.",
      axes: ["Strategic", "Augmentation", "Behind proof", "Internal", "Chosen"],
      coreStrategicBet: "Evidence-driven selection yields higher ROI per deployment than speculative first-moves, and workflow redesign (not just tool-layering) is where the real leverage lives.",
      examples: "Accenture 'AI Achievers' (≈12% of enterprises). McKinsey 'high performers' (3× more likely to fundamentally redesign workflows). Most mature enterprises with visible, disciplined AI programs.",
      profile: "The Integrator deploys AI selectively where value is demonstrable, then redesigns workflows around the proven use rather than layering AI on existing processes. They wait for external evidence — competitor deployments, regulator guidance, vendor case studies, published results — before committing. Measured, evidence-driven, not first but not lost. The central basin of the archetype map: most healthy evolutionary paths converge here before continuing toward Architect. When Integrators execute, they capture real value; when they drift, they accumulate 'under evaluation' backlog without corresponding deployment.",
      strengths: ["High ROI per deployment (selection is strict)","Organizational trust — workflow changes are visible and explicable","Knowledge transfer scales (codified workflow patterns propagate)","Adaptable to model-frontier shifts without business disruption"],
      challenges: ["Slower than first-movers; some compounding advantages went elsewhere","'Evidence-waiting' can become a permanent excuse for inaction","Workflow redesign requires sustained change management that often underdelivers","Proliferation risk — many small wins without platform investment creates sprawl"],
      healthy: "Selective, rigorous, compounding through workflow redesign.",
      unhealthy: "Selective becomes paralytic; pilots never convert to standard practice.",
      blindSpot: "Believes 'waiting for evidence' is always the rational choice — misses that some evidence only emerges after your own deployment generates it.",
      protocolNatural: "Adopts proven protocols from elsewhere and tests them in their own context. Protocols are an adoption multiplier — the apparatus that turns external evidence into local operating practice.",
      protocolEffective: "Adopt industry-standard protocols where they exist; adapt to local context with documented deviations; codify the adapted version. Build protocol literacy across teams so the next adoption is faster than the last. The Integrator's strength is selection rigor — that same rigor applied to protocols turns one-off deployments into compounding capability.",
      protocolIneffective: "Keeps adopting protocols without adapting them; treats protocols as compliance checkboxes; never codifies the adapted version, so the next deployment starts from scratch again. The result is many small wins that don't propagate.",
      protocolView: "Protocols are how disciplined adoption compounds. Each protocol an Integrator codifies makes the next AI deployment cheaper and more reliable. Without that codification, 'selective adoption' stays selective and never accumulates into platform.",
      underStress: "Compresses toward <strong>The Warden</strong> — external pressure (regulatory, reputational, market) freezes deployment as compliance reviews multiply.",
      growthDirection: "Evolves toward <strong>The Architect</strong> — invests in platform to scale the workflows; the natural next move when deployment count crosses a coordination threshold.",
      evolutionaryPath: "Integrators come from Vanguards (post-retrofit), Tinkerers (post-codification), Wardens (post-regulatory-clarity), or Brokers (post-internalization). They become Architects when scale demands it.",
      aiFlavor: "Flavor 2 (enterprise) + Flavor 3 (product-integrated), selectively and with domain-expert validation.",
      warning: "Growing backlog of 'AI opportunities under evaluation' without corresponding deployment cadence."
    },
    Tinkerer: {
      title: "The Tinkerer",
      quote: "We don't know what will work until we try it. So we try a lot of things.",
      axes: ["Strategic", "Augmentation", "Ahead of proof", "Internal", "Chosen"],
      coreStrategicBet: "Generating own evidence via high experimentation volume beats waiting for external proof in markets that reward speed.",
      examples: "Scaleups and fast-moving mid-size orgs. Small product pods inside larger enterprises given freedom to experiment. Early-stage AI-adjacent (not AI-native) product teams.",
      profile: "The Tinkerer generates its own evidence through volume. Many small experiments run in parallel; few are codified yet. They move ahead of proof because their markets reward experimentation, and waiting for external validation means losing ground. A transient state by design: with discipline, Tinkerers become Integrators; with scale, they become Vanguards; without either, they dissolve back into Folkways. The discipline that matters is not starting experiments but retiring them — the signature Tinkerer failure mode is accumulating pilots without a retirement cadence.",
      strengths: ["Pattern recognition across many real attempts (not theoretical)","Low cost per experiment — scale is small, reversibility is high","Practitioner culture attracts hands-on talent","Fast feedback loops; evidence comes from own work, not literature"],
      challenges: ["Codification gap — what works doesn't become standard practice","Coordination overhead as concurrent experiments multiply","Hard to separate signal from noise across many small pilots","'Innovation theater' risk — looks active but doesn't converge"],
      healthy: "Disciplined experimentation that converges on codification.",
      unhealthy: "Perpetual experimentation that never commits.",
      blindSpot: "Treats starting new experiments as progress, underestimates that retiring experiments is the real sign of discipline.",
      protocolNatural: "Experiments include protocol experiments. Each pilot is also testing what protocols would govern its scaled version, even if the team doesn't think of it that way.",
      protocolEffective: "Codify emergent protocols from successful pilots before starting more pilots. Treat protocols as the codification of what worked. The discipline that matters is treating 'we'll write the protocol later' as a debt that must be paid before the next experiment, not a TODO that drifts.",
      protocolIneffective: "Starts new protocols faster than retiring old ones; no codification cadence; pilots end without protocol artifacts that can be reused. The result is protocol sprawl — many small ad hoc rules nobody can remember, let alone enforce.",
      protocolView: "Protocols are how a Tinkerer becomes an Integrator without losing speed. Every successful pilot is a protocol waiting to be written down; writing it is what converts experimentation into compounding capability. The Tinkerer who codifies protocols ages into Integrator; the one who doesn't decays into Folkway.",
      underStress: "Compresses toward <strong>The Folkway</strong> — under resource pressure, experiments continue individually but stop being tracked or centrally evaluated.",
      growthDirection: "Evolves toward <strong>The Integrator</strong> — codifies what works into standard practice. The single most important move is retiring experiments as deliberately as starting them.",
      evolutionaryPath: "Tinkerers come from Folkways (when leadership starts tracking what's emerging) or from scaleup-stage adoption. They become Integrators via codification or Vanguards via scale. Without either, they dissolve back into Folkway.",
      aiFlavor: "Flavor 1 (consumer) + Flavor 2 (enterprise) + Flavor 3 (product-integrated), variably and concurrently.",
      warning: "More than 3–4 concurrent pilots without clear retirement criteria."
    },
    Ratifier: {
      title: "The Ratifier",
      quote: "We don't surf the first wave. We ship the one that lasts.",
      axes: ["Strategic", "Architecture", "Behind proof (deliberate)", "Internal", "Chosen"],
      coreStrategicBet: "The second wave, well-executed, outlasts the first.",
      examples: "Apple (historical posture across emerging technology categories; current AI stance). Risk-averse incumbents in consumer categories where brand trust is foundational. Institutional cultures that privilege polish over priority.",
      profile: "The Ratifier defers deployment by strategic choice, not constraint. They wait for vendor consolidation, regulatory clarity, and use cases proven at scale by others. When they move, they deploy at higher polish than the early-movers who preceded them — trading early-market compounding for late-market quality. The bet is that the second wave, executed well, outlasts the first. Easy to confuse with paralysis from the outside; the distinguishing feature is a clear (if private) entry criterion. Apple's historical pattern is the canonical shape — and also the canonical reminder that Ratifiers can overstay their waiting posture.",
      strengths: ["Deployment polish — their AI feels finished where others feel rough","Avoids public learning costs others absorbed","High trust with existing customers (no brand dilution from crapjects)","Capital discipline — no wasted spend on tools that didn't survive"],
      challenges: ["Missed differentiation windows that went to earlier movers","Talent risk — practitioners want to work where the frontier is","Late-arrival inertia — hard to recalibrate when the moment arrives","Indistinguishable from paralysis without a clear entry criterion"],
      healthy: "Deliberate timing with a clear trigger; ships polished second-wave product.",
      unhealthy: "The trigger keeps moving; late becomes never.",
      blindSpot: "Assumes polish compounds faster than time-in-market experience does — misses that second-movers rarely out-execute first-movers once those first-movers have iterated under real conditions.",
      protocolNatural: "Waits for industry-standard protocols to emerge before committing. The Ratifier's deferral is partly a protocol-maturity bet — the second-wave protocol set will be cleaner than the first.",
      protocolEffective: "Pre-commit to specific protocol-maturity triggers. Have an internal protocol that says 'we ratify when X protocol reaches Y maturity.' This converts vague waiting into a structured stance. Track which industry protocols are emerging and hold a thesis on which will dominate, so the entry decision is one already-rehearsed step rather than a fresh executive debate.",
      protocolIneffective: "Waiting becomes endless because the trigger criterion keeps moving. Without a pre-committed trigger, 'wait for maturity' decays into 'wait for a permission no one will issue.' The outside view: paralysis dressed as patience.",
      protocolView: "Protocols are what you're waiting for. The strategic risk is that waiting for the perfect protocol means missing the second-wave deployment window when the imperfect-but-mature protocol arrives. Pre-committing to the trigger is the move that distinguishes the Ratifier from the Ratifier-stalled-permanently.",
      underStress: "Compresses toward <strong>The Broker</strong> — under competitive pressure, outsources the capability entirely to avoid committing too late.",
      growthDirection: "Evolves toward <strong>The Integrator</strong> or <strong>The Architect</strong> when they finally move with a clear trigger.",
      evolutionaryPath: "Ratifiers emerge from institutional cultures that privilege polish and brand (Apple-shape). They become Integrators or Architects when they move; rare to transition back. The dangerous path is stalled Ratifier → Broker permanently.",
      aiFlavor: "Flavors 2 + 3 mostly, timed for later deployment. Minimal Flavor 1 exposure during the waiting period.",
      warning: "Multiple planning cycles pass without a clear deployment date or trigger criterion."
    },
    Warden: {
      title: "The Warden",
      quote: "Our industry doesn't move until the regulator does. That's the job.",
      axes: ["Strategic", "Augmentation", "Behind proof", "Variable locus", "Constrained"],
      coreStrategicBet: "Compliance-ready infrastructure creates a competitive moat in regulated verticals (1.5–2× valuation premium for compliance-mature assets).",
      examples: "EU banks, insurers, and financial-services firms under the AI Act. Healthcare organizations under HIPAA-adjacent frameworks. Public-sector agencies with mandated deployment reviews. Vertical-specific regulated industries (pharma, defense, utilities).",
      profile: "The Warden gates deployment on regulatory approval. Compliance isn't a byproduct of their AI strategy; it's the operating posture. EU AI Act, HIPAA-adjacent frameworks, financial-services model governance, sector-specific audit regimes — the regulator sets deployment velocity. This can be a real strategic advantage in regulated verticals where compliance-mature infrastructure is hard to replicate. The underlying risk is that the regulatory clarity they're waiting for may arrive too late or too ambiguously, and meanwhile internal frustration produces shadow adoption — a Folkway forming quietly underneath the Warden posture.",
      strengths: ["Compliance as moat — raises the barrier to entry for less-regulated competitors","High protocol specificity creates durable institutional knowledge","Trust premium with regulated customers and auditors","Risk-adjusted deployment — customer-facing AI incidents are rare"],
      challenges: ["Regulatory uncertainty means deployment planning is always contingent","Talent flight to less-regulated competitors","Internal frustration drives shadow adoption (Folkway forming beneath)","Compliance infrastructure becomes a permanent brake even after regulation clarifies"],
      healthy: "Compliance posture as active strategic advantage, with deployment ready to move when regulation clarifies.",
      unhealthy: "Compliance as reason not to decide anything.",
      blindSpot: "Assumes the regulator is the binding constraint, misses that internal compliance culture often continues to gate deployment long after regulatory clarity arrives.",
      protocolNatural: "Protocols come from regulators; deployment is gated on compliance. The Warden is highly protocol-literate but only inbound (regulation → adoption); often weak on internal protocols beyond compliance.",
      protocolEffective: "Turn compliance protocols into competitive moat — high protocol specificity that's hard for less-regulated competitors to replicate. Build internal protocols <em>beyond</em> compliance, especially the protocols for moving once regulation clarifies. Keep the protocol layer tight enough that Folkway pressure underneath doesn't have room to grow.",
      protocolIneffective: "Compliance protocols ossify; shadow Folkway forms underneath because internal frustration finds informal channels; org can't move when regulation clarifies because internal compliance culture has become its own brake. The protocols originally meant as shield become a self-imposed cage.",
      protocolView: "Protocols are both shield and cage. The shield is real value (compliance moat). The cage is the internal compliance culture continuing to gate deployment after the regulator stops gating. Watch for protocol-as-permission becoming protocol-as-prohibition.",
      underStress: "Often develops a shadow <strong>Folkway</strong> underneath — individual practitioners use AI informally, bypassing compliance gates. The Samsung pattern.",
      growthDirection: "Evolves toward <strong>The Integrator</strong> as regulation clarifies and compliance infrastructure becomes a deployment enabler rather than a gate.",
      evolutionaryPath: "Wardens come from regulated verticals or from Integrators that hit a compliance wall. They become Integrators when regulation clarifies; they rarely become Architects (compliance overhead discourages platform-scale bets).",
      aiFlavor: "Flavor 2 (enterprise) restricted to approved tools. Flavors 3 + 5 blocked pending regulatory approval. Flavor 1 officially prohibited, often happening unofficially.",
      warning: "Growing internal workarounds that bypass official AI policy."
    },
    Broker: {
      title: "The Broker",
      quote: "We know what we need. Someone else is better at holding the tools.",
      axes: ["Strategic", "Augmentation", "Behind proof", "External", "Chosen"],
      coreStrategicBet: "AI moves too fast for non-specialist orgs to build competitively; renting capability is more rational than buying.",
      examples: "Mid-market ops orgs on Palantir / Accenture / BCG X AI-as-a-service. Non-tech-native enterprises delegating AI capability to specialist consultancies. Smaller orgs that chose not to build AI talent internally.",
      profile: "The Broker delegates AI capability externally. They hold the problem but not the tools; the vendor or consultancy holds the capability. The rational premise is that AI moves too fast for non-specialist orgs to build competitively — better to rent than buy. When it works, it's fast and cheap and lets internal teams focus on the business. When it doesn't, vendor lock-in becomes the dominant story and the org discovers it can't even evaluate the vendor's work critically. The growth pattern is usually 'build-buy-build' — start by buying, internalize the strategic pieces later.",
      strengths: ["Speed to deployment with no internal build time","Access to specialist capability without salary commitments","Lower capital exposure during a period of technology uncertainty","Focus — internal teams work on the business, not the AI"],
      challenges: ["Vendor lock-in becomes the dominant risk","Internal knowledge erosion — can't evaluate vendor claims critically","Data governance complexity (what does the vendor see, store, train on)","Strategic dependency — if the vendor pivots, the org is exposed"],
      healthy: "Selective delegation with internal staff who can evaluate vendor output and internalize strategic pieces over time.",
      unhealthy: "Total dependence without the internal capacity to critique the work.",
      blindSpot: "Assumes the vendor relationship is a commercial question when it's actually a capability question — underestimates what happens when internal knowledge atrophies.",
      protocolNatural: "Relies on vendor protocols; doesn't hold protocol design authority. The structural risk is that protocol authority follows capability — when the vendor sets the protocols, the Broker's internal autonomy shrinks invisibly.",
      protocolEffective: "Layer internal protocols on top of vendor protocols. Maintain evaluative capacity through the protocols you control — specifically, the protocols for vetting vendor outputs and maintaining audit trails the vendor can't unilaterally rewrite. The protocols you keep are what protects against vendor lock-in becoming vendor capture.",
      protocolIneffective: "Full delegation including protocol authority. Internal team can't critique vendor's protocols because they don't hold a parallel version themselves. When the vendor changes pricing or pivots, the Broker has no protocol foundation to fall back on.",
      protocolView: "Protocols are what you keep when the vendor leaves. The Broker who holds a protocol layer (evaluation, governance, audit) at the boundary of the vendor relationship can change vendors; the Broker who doesn't, can't.",
      underStress: "Compresses toward <strong>The Warden</strong> — under vendor disruption (pricing shock, acquisition, pivot), brings governance in-house as a defensive response without yet having the capability to match.",
      growthDirection: "Evolves toward <strong>The Integrator</strong> or <strong>The Architect</strong> — selectively internalizes strategic capabilities as the build-vs-buy calculus shifts.",
      evolutionaryPath: "Brokers come from non-tech-native orgs that need AI capability but rationally chose not to build. They become Integrators or Architects as the cost-benefit of delegation changes.",
      aiFlavor: "Flavors 2 + 3 via vendor delivery. Flavors 4 + 5 not held internally at all.",
      warning: "No internal staff who can sanity-check the vendor's claims."
    },
    Folkway: {
      title: "The Folkway",
      quote: "AI showed up through our teams before leadership noticed. We're still figuring out what that means.",
      axes: ["Emergent", "Augmentation (shallow)", "—", "Individuals", "—"],
      coreStrategicBet: "Not a bet — a state. The open question is whether the organization catches up to its own practitioners.",
      examples: "Small orgs where everyone uses ChatGPT on the side. Non-tech teams at large enterprises informally adopting. Early-stage bottom-up adoption preceding any strategy formation.",
      profile: "The Folkway is broad, shallow individual adoption happening below organizational visibility. Teams discovered AI on their own; the organization hasn't decided what to do about it yet. The strength is bottom-up sensing — practitioners are finding valuable use cases before leadership commissions a strategy. The risk is the Samsung scenario: valuable data walks out through unauthorized tool interfaces while leadership discusses policy. Most organizations pass through the Folkway briefly on their way to a chosen posture; a minority linger here for years, accumulating exposure without corresponding learning.",
      strengths: ["Bottom-up discovery of valuable use cases","Low cost of experimentation (users often paying for tools personally)","High individual adoption velocity","Early signal about what matters to frontline work"],
      challenges: ["Data exfiltration risk through personal tool accounts","No organizational learning — what works for one team doesn't propagate","Quality variance — some uses excellent, others produce 'crapjects'","Governance vacuum creates exposure without corresponding upside"],
      healthy: "Brief passage state on the way to Tinkerer or Integrator, with leadership catching up and formalizing what's emerging.",
      unhealthy: "Lingering Folkway that never gets inventoried; eventual incident forces heavy-handed reaction.",
      blindSpot: "Underestimates the data-governance exposure because the individual users don't see what they, collectively, are sending out.",
      protocolNatural: "The Folkway IS a protocol — just an undocumented, emergent one. The org's de facto AI use is governed by informal conventions nobody wrote down but everybody enforces through habit.",
      protocolEffective: "Inventory before formalizing. Catch the emergent practices that are already working and lightly codify them — turning 'what we do' into 'what we do because we decided to.' Resist the urge to overwrite emergent protocols with imposed ones; the imposed version usually drives the practice underground rather than capturing it. The MVPi (minimum viable protocol intervention) framing fits: pick the one bottleneck where formalization unlocks the most, leave the rest to keep working.",
      protocolIneffective: "Leadership clamps down with heavy formal protocols, driving practice further underground. Or, conversely, leaves emergence completely unmanaged until an incident forces a defensive overcorrection.",
      protocolView: "Protocols are what emergence becomes when you write it down. The Folkway's informal conventions ARE proto-protocols; the question is whether the org will recognize and refine them, or wait for a regulator or incident to write them.",
      underStress: "Under top-down pressure after a visible incident, often compresses toward <strong>The Warden</strong> — leadership responds with heavy-handed policy that lacks specificity, driving the Folkway further underground rather than resolving it.",
      growthDirection: "Evolves toward <strong>The Tinkerer</strong> (formalizing what's already emerging) or <strong>The Guild</strong> (if sophistication is already concentrating in specific experts).",
      evolutionaryPath: "Folkways are an entry state — most orgs pass through briefly. They become Tinkerers with formalization, Guilds with concentration + expertise, or Wardens if leadership responds by clamping down.",
      aiFlavor: "Flavor 1 (consumer) dominant. Occasional Flavor 3 via personal account access wiring into products without oversight.",
      warning: "Leadership cannot produce a current list of the AI tools in use across the organization."
    },
    Guild: {
      title: "The Guild",
      quote: "Our best people figured it out themselves. The rest of the org doesn't know yet.",
      axes: ["Emergent", "Augmentation (sophisticated)", "—", "Individuals", "—"],
      coreStrategicBet: "Not an organizational bet — an emergent capability. The strategic question is whether leadership recognizes and preserves what its experts have built before the experts leave.",
      examples: "Enterprises where a few engineers or analysts have built sophisticated custom pipelines unknown to leadership. Domain experts using AI to take on work that was previously out of reach. Informal expert networks accumulating proprietary pattern recognition.",
      profile: "The Guild is concentrated, sophisticated AI work living below organizational visibility. Individual experts — often with deep domain knowledge — have built proprietary pipelines and pattern recognition the organization may not realize it has. This is 'tasteful discrimination' accumulating at the practitioner layer, the kind of judgment base models don't possess and vendors can't replicate. Strength: the org holds a capability moat it doesn't know is a moat. Risk: the expertise leaves when the expert does. The Guild is usually detected, not self-reported — the archetype's defining feature is that the organization doesn't fully see itself.",
      strengths: ["Proprietary pattern recognition — signal value base models don't have","High-sophistication work on real problems, not demos","Resilient to model frontier shifts (experts adapt faster than systems)","Low governance overhead at the practitioner level"],
      challenges: ["Bus factor — if the expert leaves, the capability leaves","Opacity — organization can't evaluate or scale what it can't see","Reproducibility gap — the Guild member's work isn't codified","Bridge problem — Guild work doesn't integrate with official workflows"],
      healthy: "Leadership recognizes the Guild, invests in codification, and the expertise becomes an Architect-level platform in that domain.",
      unhealthy: "The org never sees the Guild; the expert leaves; the capability evaporates without trace.",
      blindSpot: "The Guild member often underestimates how much of their work is tacit and non-transferable — 'anyone could do this' is almost always wrong.",
      protocolNatural: "Each Guild member's pipeline is a personal protocol — tacit, expert, often undocumented. Protocols at the personal level may be highly sophisticated; at the org level they may not exist.",
      protocolEffective: "Codify personal protocols into shared documentation before the expert leaves. Treat the Guild member's tacit pipeline as a draft protocol that needs translation, not as a finished product. The bridge from individual to platform runs through making the personal protocol transferable — that's also the bridge from L3-individual to L3-organizational maturity.",
      protocolIneffective: "Protocols stay tacit; 'anyone could do this' is assumed but never tested; expertise leaves with the person and the protocol leaves with the expertise. The capability goes from invisible to absent without an intermediate visible state.",
      protocolView: "Protocols are how tacit expertise survives departure. The Guild member's own pipelines are protocols — just personal ones. Making them transferable converts individual capability into organizational capital. The conversion rarely happens by default; it happens because someone in leadership recognizes the Guild and invests in the bridge.",
      underStress: "Under organizational pressure (layoffs, mandated standardization, forced tool consolidation), Guilds often dissolve rather than transition — the experts leave and take the capability with them.",
      growthDirection: "Evolves toward <strong>The Architect</strong> in their specific domain — the Guild's work gets codified into platform primitives. This requires leadership recognition and investment; it doesn't happen by default.",
      evolutionaryPath: "Guilds come from Folkways (as sophistication concentrates) or from Integrators (where a particular expert goes deeper than the org expects). They become Architects in their domain if codified, or they disappear if not.",
      aiFlavor: "Flavor 1 (consumer) + Flavor 5 (custom/developed) driven by individual experts, often stitched together with informal tooling.",
      warning: "The expert can't explain their work to colleagues in under an hour — or more dangerous, leadership has never asked."
    }
  };

  /* ─── Maturity result data ───────────────────────────────── */
  const ARC = ['1 — Shadow', '2 — Sanctioned', '3 — Engine', '4 — Infrastructure', '5 — Planetary'];

  const RESULTS = {
    '1': {
      levelNum: 1,
      levelName: 'Shadow',
      tagline: "AI is in use. The organization doesn't know how, by whom, or with what data.",
      description: `Your organization is at the default starting position — not a failure, but a baseline every organization passes through. AI tools are in active use through employee initiative. No organizational decision has authorized them. Individual workers use personal accounts for work tasks. No policy governs this, no tooling controls it, and no one has a complete picture of what organizational data is being submitted to which systems.\n\nThe absence of a governance protocol is itself invisible: organizations don't feel like they're at Level 1 because nothing has gone wrong yet. The typical organization is at Level 1 for 400+ days before a shadow AI incident surfaces. Shadow adoption is the observable signal that existing work protocols have been pushed beyond their design range. The protocol response (sanctioned access, data boundaries, reviewed terms) has not yet been adopted.`,
      failureModes: [
        { name: 'Data leakage to third-party AI services', description: 'Employees submit proprietary source code, meeting transcripts, patient data, client information, or trade secrets to consumer AI services via personal accounts. The data cannot be recalled. IP exposure is permanent. Samsung, April 2023: three engineers, three incidents, one month.' },
        { name: 'Regulatory exposure without awareness', description: 'Data submitted to external AI services creates HIPAA, GDPR, attorney-client privilege, or trade secret exposure that the organization cannot detect or quantify. Discovery typically occurs 400+ days after initial exposure — long after the data has been processed. Healthcare sector: 86% of organizations have reported shadow AI incidents; only 35% can track their own AI usage. (symplr, 2025)' }
      ],
      actions: [
        { name: 'Conduct an AI tool inventory', description: 'Identify which AI tools are in use, by which teams, on which account types (personal vs. enterprise). Visibility is the goal: which tools, which teams, which account types.', doneWhen: 'IT can name all AI tools in active use and the account type for each.' },
        { name: 'Sanction at least one AI tool with reviewed terms of service', description: 'Designate one enterprise AI tool with legal review of data handling terms completed. Communicate it as the governed alternative to personal accounts.', doneWhen: 'At least one AI tool has reviewed terms of service and has been communicated as the sanctioned option.' },
        { name: 'Issue a minimum data boundary policy', description: 'State what categories of data may not be submitted to external AI services. One page is sufficient. This is a data boundary statement — scope it narrowly and communicate it clearly.', doneWhen: 'Policy exists, has been communicated, and names specific data categories.' }
      ],
      tension: { a: 'Individual productivity gain through unsanctioned AI use', b: 'Organizational exposure from ungoverned data submission and unreviewed outputs' },
      periodTech: { label: 'Historical parallel: Spreadsheets in accounting (mid-1980s)', text: 'Individual accountants used Lotus 1-2-3 on personal computers for work that was officially done on mainframes. IT didn\'t know. Management didn\'t know. No policy existed. The individual gain was real; the organizational risk was invisible. Shadow adoption producing individual gains and organizational risk before any governance response — the Level 1 pattern.' },
      containerization: { label: 'Containerization throughline: Pre-standard experimentation (1950s–60s)', text: 'Malcom McLean shipped the first containers in 1956, but each company used proprietary box sizes. Ports experimented independently. A longshoreman at a given port didn\'t know whether arriving vessels\' boxes would fit available cranes. Individual companies saw efficiency gains; the system as a whole was ungoverned. The disruption event had arrived; the protocol response had not been adopted.' },
      arcSteps: ARC, current: 0
    },
    '2': {
      levelNum: 2,
      levelName: 'Sanctioned',
      tagline: "The organization has granted AI access. It hasn't designed what to do with it.",
      description: `Your organization has done the right thing: granted broad AI access and signaled strategic commitment. The failure mode at this level is executing the mandate without designing the governing protocol — which tasks, with what review process, what quality standard, what escalation path when AI fails.\n\nTwo dynamics characterize Level 2. First, the Time to Mediocrity effect: AI produces functional output quickly in most domains, creating genuine early productivity gains while concealing the absence of expertise. Second, the financial indicator lag: strong financial metrics accumulate at the same time as governance failures, making the governance gap invisible until failures become external-facing. Level 2 organizations typically achieve high adoption rates and real early gains — then encounter a quality floor that the absent governance layer cannot address.`,
      failureModes: [
        { name: 'Quality floor collapse', description: 'AI replaces a human step that was simultaneously a production step and a quality-check step. Production volume increases; the quality check disappears. The gap is invisible in output volume metrics and visible in product quality or customer satisfaction. Failures surface when external parties (customers, courts, regulators) raise them — internal monitoring does not catch them first. Klarna reversed course after financial results were already strong.' },
        { name: 'Mandate without criteria', description: 'Leadership issues an AI competency requirement with no defined standard for compliance. Employees perform AI use to satisfy the mandate rather than integrating it meaningfully. The reported adoption rate is high; the governance maturity is unchanged. Shopify, April 2025: AI non-optional, no competency definition published for non-technical roles.' },
        { name: 'Chatbot liability gap', description: 'An AI system deployed in external-facing or legally consequential functions provides information that contradicts the organization\'s formal policy. External parties hold the organization responsible regardless of internal disclaimers. Air Canada: chatbot stated bereavement fares could be claimed retroactively; actual policy did not permit this; court ruled Air Canada liable.' },
        { name: 'Policy/practice gap', description: 'Practiced management allows contextual exceptions that written policy does not. When AI systems enforce written policy uniformly, the exceptions disappear. The organization discovers its formal policy was not its actual policy — and that employees, customers, and partners had been operating on the practiced version. AI removes the judgment layer that bridged the two.' }
      ],
      actions: [
        { name: 'Design one AI-native workflow end-to-end', description: 'Select a function where AI is already in use. Document the full workflow: what AI does, what the human reviews, what constitutes acceptable output, and what the escalation path is for failures. Build a working implementation with live data.', doneWhen: 'One workflow is documented, repeatable, and has a named owner.' },
        { name: 'Instrument quality for that workflow', description: 'Define a metric that captures output quality, not just output volume. Track it. Assign ownership. The metric must be specific enough that a failure in the workflow produces a change in the number.', doneWhen: 'A quality metric exists, is tracked on a defined cadence, and triggers a defined response when it falls below threshold.' },
        { name: 'Build a minimum output review protocol', description: 'For AI-generated outputs that go to external parties or govern consequential decisions: specify who reviews, what they check, and what constitutes an acceptable output. This is workflow-specific guidance — what to check and who is responsible.', doneWhen: 'Reviewers in at least one workflow can state what they\'re checking and why.' }
      ],
      tension: { a: 'Maximizing AI adoption rate and reported productivity gains', b: 'Building the review protocols that make those gains durable' },
      periodTech: { label: 'Historical parallel: Corporate email (early 1990s)', text: 'IT departments mandated Microsoft Exchange and Lotus Notes. Access was granted broadly. But no one designed a response protocol: how quickly should people respond? What goes in email versus voicemail? The mandate produced adoption; the absence of workflow design produced attention overload and communication chaos. The new persistent problem — inbox volume unmanageable — is the direct consequence of solving the old one.' },
      containerization: { label: 'Containerization throughline: ISO standardization mandated, infrastructure not yet built (1965–75)', text: 'ISO adopted 20ft and 40ft container standards in 1965–1968. Governments and major shipping companies mandated container adoption on key routes. But ports were not redesigned fast enough; rail and trucking infrastructure lagged. Containers arrived at ports that couldn\'t efficiently process them. The financial case was strong; the coordination failures were accumulating. The mandate had been issued; the intermodal coordination protocol had not yet been built.' },
      arcSteps: ARC, current: 1
    },
    '2-3': {
      levelNum: '2–3',
      levelName: 'Sanctioned → Engine',
      tagline: 'You have the foundations of Level 3. Consistency and measurement are missing.',
      description: `Your organization is at the transition between Level 2 and Level 3. At least one workflow is designed — you have demonstrated that AI-native workflow design is possible in your context. What's missing is consistency across workflows and a quality measurement system that makes the governance protocol durable and repeatable across the organization.\n\nThis is a common and productive stuck point. The risk is that the designed workflows become isolated examples while the rest of the organization continues operating at Level 2. The Level 2 failure modes — quality floor collapse, mandate without criteria — remain live risks in the undesigned workflows.`,
      failureModes: [
        { name: 'Quality floor collapse (in undesigned workflows)', description: 'The designed workflows are protected; the undesigned ones are not. Quality floor collapse is most likely to surface in the workflows that haven\'t received the same design attention — which are often the ones that handle higher volume or lower-visibility tasks.' },
        { name: 'Mandate without criteria', description: 'Leadership issues an AI competency requirement with no defined standard for compliance. Employees perform AI use to satisfy the mandate rather than integrating it meaningfully. The designed workflows exist as exceptions; the rest of the organization is still operating on compliance theater.' },
        { name: 'Custom implementation accumulation', description: 'Early designed workflows become custom solutions that never abstract into reusable patterns. The organization carries Level 3 complexity without Level 3 scope: each new workflow requires a new custom build, and standardization becomes politically difficult because every team owns its own implementation.' }
      ],
      actions: [
        { name: 'Extend the designed workflow to one more function', description: 'Take the workflow design approach that worked in the first function and apply it to the next highest-stakes AI workflow. Document the pattern, not just the implementation — so it can be replicated without requiring the same level of effort each time.', doneWhen: 'Two workflows are documented, owned, and tracked with quality metrics.' },
        { name: 'Instrument quality for the designed workflows', description: 'Define a metric that captures output quality, not just output volume. Track it. The metric must be specific enough that a failure in the workflow produces a change in the number.', doneWhen: 'Quality metrics exist for at least two workflows, tracked on a defined cadence, with a defined response when they fall below threshold.' }
      ],
      tension: { a: 'Maximizing AI adoption rate and reported productivity gains', b: 'Building the review protocols that make those gains durable' },
      periodTech: { label: 'Historical parallel: Corporate email → early Git adoption (transition period)', text: 'Organizations that had mastered email workflows were beginning to design version control practices around their software — some teams had rigorous branching strategies while others were still using email attachments to share code. The designed practices existed but hadn\'t spread consistently across the organization.' },
      containerization: { label: 'Containerization throughline: Early intermodal design, uneven adoption (late 1970s)', text: 'Leading shipping firms like Maersk were designing end-to-end intermodal protocols — ship to rail to truck — while many others were still running containers on routes without the full intermodal infrastructure. The competitive advantage of the designed approach was visible; the sector hadn\'t standardized yet.' },
      arcSteps: ARC, current: 2
    },
    '3': {
      levelNum: 3,
      levelName: 'Engine',
      tagline: 'AI workflows are designed, not improvised. The business model depends on them.',
      description: `Your organization has crossed from AI adoption into AI dependency: your competitive position relies on designed AI workflows. AI governs core operations. Workflows are built around AI rather than retrofitted to include it.\n\nThe governance question has shifted: you are designing protocols that handle failure, versioning, and external dependencies without losing the speed advantage AI provides. Domain expertise is the limiting constraint — the knowledge required to specify what good output looks like in your specific context. Two operators with domain knowledge can run sophisticated AI production pipelines if they can articulate the coordination protocol clearly.`,
      failureModes: [
        { name: 'Temporal divergence breakdown', description: 'AI accelerates internal production faster than external dependencies can absorb. Review queues fill faster than reviewers can process them. The bottleneck has moved from production to coordination. Slacker Index: measure total lead time divided by actual AI working time. A ratio above 5:1 identifies downstream coordination as the bottleneck. Uber: 11% of pull requests opened by agents; code review became the primary bottleneck, requiring purpose-built tooling. (Venkatesh Rao / Protocolized, 2026)' },
        { name: 'Ontological drift', description: 'Mid-project redefinition of the concepts, categories, or ontologies that AI systems depend on becomes extremely expensive. AI systems encode prior definitions into outputs, training data, and prompt structures. Changing a definition requires auditing and revising everything downstream. Organizations attempt agile-style iteration on definitions that should have been frozen.' },
        { name: 'Governance brittleness under versioning', description: 'AI model updates or tool switches silently alter output characteristics that the governance protocol was calibrated for. A review process designed for one model\'s failure modes may not catch the same failures in the next model\'s outputs. The governance protocol is not versioned along with the tools it governs.' },
        { name: 'Custom implementation accumulation', description: 'Internal AI capability builds custom solutions that solve specific problems but never abstract into reusable platform features. The organization carries Level 3 complexity without the organizational platform to support it: each new use case requires a new custom build, and standardization becomes politically impossible because every team owns its own implementation.' }
      ],
      actions: [
        { name: 'Measure and address temporal divergence', description: 'Calculate the Slacker Index for your primary AI workflow: total lead time ÷ AI working time. Where the ratio exceeds 5:1, identify the downstream coordination bottleneck (review queue, approval chain, handoff delay) and redesign the coordination protocol.', doneWhen: 'Slacker Index below 5:1 for primary workflow; bottleneck owner named.' },
        { name: 'Define and freeze the domain ontology before deployment', description: 'Name the concepts, categories, and definitions that AI systems will depend on. Establish a change process — not preventing change, but making changes deliberate and triggering downstream audits when they occur.', doneWhen: 'Core domain concepts used by AI systems are documented and have a defined change process.' },
        { name: 'Build a platform feedback loop', description: 'When custom AI work is built for a specific use case, evaluate whether it can be abstracted into a reusable platform feature. If not, document why not. This prevents custom implementation accumulation.', doneWhen: 'A review process exists for new AI implementations that includes a platform abstraction evaluation.' }
      ],
      tension: { a: 'AI-native internal velocity: iteration speed, design exploration, competitive differentiation', b: 'External coordination dependencies — regulatory timelines, supplier lead times, partner cycles — that move at human pace' },
      periodTech: { label: 'Historical parallel: Git and CI/CD in software development (2008–2015)', text: 'Software teams deliberately redesigned their workflows around distributed version control. CI/CD pipelines formalized code review, automated testing, and deployment. A company\'s competitive output depended on how well its git workflow was designed — removing git from a software team\'s core workflow would require rebuilding it, not substituting a human. Domain expertise became the limiting constraint, not the tool\'s capabilities. The Uber case is the AI-era instance of exactly this pattern.' },
      containerization: { label: 'Containerization throughline: Intermodal system designed end-to-end (1975–1990)', text: 'The full intermodal protocol — ship to port to rail to truck — was deliberately designed as an integrated system. Maersk and Sea-Land built competitive moats around containerized logistics; their business models depended on the system working end-to-end. Vertical integration collapsed the Slacker Index. The competitive position depended on the precision logistics protocol, not the container as a standalone tool.' },
      arcSteps: ARC, current: 2
    },
    '3-4': {
      levelNum: '3–4',
      levelName: 'Engine → Infrastructure',
      tagline: 'Your organization is at the leading edge. The next challenge is sector-level, not organizational.',
      description: `Your organization is at the boundary between Level 3 and Level 4. Multiple core AI workflows are designed, governed, and versioned. Your practices are mature enough that industry peers reference them as a benchmark. The organizational-level governance challenges are substantially addressed.\n\nLevel 4 emerges when the aggregate of Level 3 organizations reaches density sufficient to recalibrate the sector's productivity baseline. No single organization drives this transition. The governance questions at Level 4 are market-structural: how does the industry coordinate AI use, handle shared risks, establish standards, and prevent concentration of AI capability in ways that produce anti-competitive outcomes. Individual organizational maturity is necessary but not sufficient at Level 4.`,
      failureModes: [
        { name: 'AI capability concentration', description: 'Early AI leaders accumulate proprietary data, model advantage, and talent that create structural moats. Late-adopting organizations cannot compete at AI-standard productivity. The industry stratifies into a small tier of AI-native leaders and a permanently disadvantaged tier — unless sector-wide governance prevents moat-building.' },
        { name: 'Commoditization pressure', description: 'AI capability becomes table stakes, eliminating the competitive moat built by early adopters. The organization has invested significantly in building Level 3 practices; the return on that investment compresses as Level 3 becomes the baseline expectation. Competitive advantage shifts to the next abstraction: model training quality, proprietary datasets, agentic workflow design.' },
        { name: 'Custom implementation accumulation', description: 'Internal AI has built custom solutions that solve specific problems but have not abstracted into reusable platform features. At the boundary of Level 4, this becomes a liability: the organization cannot contribute to or benefit from sector-wide standards because its implementations are too proprietary.' }
      ],
      actions: [
        { name: 'Crystallize domain knowledge into explicit specifications', description: 'Document what good output looks like, what constitutes an acceptable AI error in your domain, and who has the domain expertise to judge. Domain knowledge is the limiting constraint at Level 3 — not AI capability. These specifications become the input to sector-level governance standards.', doneWhen: 'Quality criteria for primary AI workflows are documented and attributable to named domain experts.' },
        { name: 'Build a platform abstraction layer', description: 'Evaluate which custom AI implementations can be abstracted into reusable organizational platform features. This positions the organization to contribute to or comply with sector standards without requiring a full rebuild.', doneWhen: 'An internal AI platform exists that new implementations can draw on rather than building from scratch.' }
      ],
      tension: { a: 'Industry standardization of AI protocols — enabling coordination, interoperability, and regulatory clarity', b: 'Organizational differentiation through proprietary AI capability — resisting standardization to preserve competitive moats' },
      periodTech: { label: 'Historical parallel: Early EDI adoption / Git at scale (late Level 3)', text: 'Organizations at the leading edge of distributed version control or EDI adoption were technically mature but operating ahead of sector standards. Their practices were referenced by peers but not yet codified. The transition to Level 4 required waiting for the sector to catch up — or actively working to set the standard.' },
      containerization: { label: 'Containerization throughline: Leading firms, pre-universal adoption (late 1980s)', text: 'Maersk and Sea-Land had mature intermodal operations; the full global shipping sector had not yet standardized. The competitive moat was real but visible to the sector, and sector-wide standardization — driven by port authority requirements and trade volume — was already underway. Being at the leading edge meant preparing for the moment when the advantage would be competed away.' },
      arcSteps: ARC, current: 3
    }
  };

  /* ─── State ─────────────────────────────────────────────── */
  let scopeChoice = null;
  let currentQuestion = 0;
  let picks = new Array(24).fill(null);

  /* ─── Scope step ────────────────────────────────────────── */
  function selectScope(el, value) {
    document.querySelectorAll('#scope-step .radio-option').forEach(r => r.classList.remove('selected'));
    el.classList.add('selected');
    scopeChoice = value;
    document.getElementById('scope-next').style.display = 'inline-block';
  }

  function startQuiz() {
    document.getElementById('scope-step').classList.remove('active');
    document.getElementById('quiz-step').classList.add('active');
    currentQuestion = 0;
    picks = new Array(24).fill(null);
    renderQuestion();
  }

  function renderQuestion() {
    const q = QUESTIONS[currentQuestion];
    document.getElementById('quiz-text-a').textContent = q.a;
    document.getElementById('quiz-text-b').textContent = q.b;
    const total = QUESTIONS.length + 1;
    const num = currentQuestion + 2;
    document.getElementById('quiz-counter').textContent = `Question ${num} of ${total}`;
    document.getElementById('quiz-progress-fill').style.width = ((num - 1) / total * 100) + '%';
    document.getElementById('quiz-back').style.visibility = currentQuestion > 0 ? 'visible' : 'hidden';
    document.querySelectorAll('.assessment-slide .quiz-option').forEach(c => c.classList.remove('selected'));
    if (picks[currentQuestion]) {
      const sel = picks[currentQuestion] === 'A' ? 'quiz-option-a' : 'quiz-option-b';
      document.getElementById(sel).classList.add('selected');
    }
  }

  function pickOption(choice) {
    picks[currentQuestion] = choice;
    document.querySelectorAll('.assessment-slide .quiz-option').forEach(c => c.classList.remove('selected'));
    document.getElementById(choice === 'A' ? 'quiz-option-a' : 'quiz-option-b').classList.add('selected');
    setTimeout(() => {
      if (currentQuestion < QUESTIONS.length - 1) {
        currentQuestion++;
        renderQuestion();
      } else {
        document.getElementById('calc-final').classList.add('visible');
        document.getElementById('quiz-progress-fill').style.width = '100%';
        setTimeout(submitQuiz, CALC_DELAY_MS);
      }
    }, 220);
  }

  function goBack() {
    if (currentQuestion > 0) { currentQuestion--; renderQuestion(); }
  }

  /* ─── Scoring ───────────────────────────────────────────── */
  function signed(pick) { return pick === 'A' ? 1 : -1; }

  function axisScores(p) {
    return {
      origin: 2 * signed(p[12]) + 1 * signed(p[13]),
      stake:  2 * signed(p[1])  + 1 * signed(p[2]),
      timing: 2 * signed(p[8])  + 1 * signed(p[9]),
      locus:  2 * signed(p[3])  + 1 * signed(p[4]) + 2 * signed(p[22]) + 1 * signed(p[23]),
      driver: 2 * signed(p[10]) + 1 * signed(p[11]) + 2 * signed(p[19])
    };
  }

  function classifyArchetype(p) {
    const a = axisScores(p);
    if (a.origin < 0) return p[17] === 'B' ? 'Guild' : 'Folkway';
    if (p[20] === 'B' && a.timing < 0 && a.driver >= 0) return 'Ratifier';
    const arch = a.stake > 0;
    const ahead = a.timing > 0;
    if (arch && ahead) return p[14] === 'A' ? 'Vanguard' : 'Traveller';
    if (arch && !ahead) return p[20] === 'A' ? 'Architect' : 'Ratifier';
    if (!arch && ahead) return 'Tinkerer';
    if (p[22] === 'B' && p[23] === 'B') return 'Broker';
    if (a.locus < -2) return 'Broker';
    if (a.driver < -1) return 'Warden';
    if (p[19] === 'B' && a.driver < 0) return 'Warden';
    return 'Integrator';
  }

  function deploymentDensity(p) {
    let d = (p[1] === 'A' ? 2 : 1);
    if (p[2] === 'A') d += 1;
    if (p[14] === 'B') d += 2;
    if (p[20] === 'A') d += 1; else d -= 2;
    d += (p[13] === 'A' ? 2 : -2);
    d += (p[21] === 'A' ? 1 : -1);
    return d;
  }

  function governanceDensity(p) {
    let g = 0;
    g += (p[8] === 'A' ? -1 : 1);
    if (p[10] === 'B') g += 2;
    if (p[11] === 'B') g += 1;
    if (p[19] === 'B') g += 2;
    if (p[18] === 'A') g += 1;
    if (p[15] === 'A' || p[15] === 'B') g += 1;
    g += (p[21] === 'A' ? 1 : -1);
    g += (p[5] === 'A' ? 2 : -1);
    if (p[18] === 'A') g += 2;
    if (p[15] === 'A') g += 2;
    g += (p[8] === 'A' ? -1 : 1);
    g += (p[9] === 'A' ? -1 : 1);
    g += (p[16] === 'A' ? -1 : 1);
    g += (p[3] === 'A' ? 2 : -2);
    g += (p[4] === 'A' ? 1 : -1);
    g += (p[6] === 'A' ? 2 : -1);
    if (p[18] === 'A') g += 1;
    g += (p[7] === 'A' ? 2 : -1);
    return g;
  }

  function classifyMaturity(p) {
    const d = deploymentDensity(p);
    const g = governanceDensity(p);
    if (d <= 0) return 'L1';
    if (d <= 2) return g >= 8 ? 'L2' : 'L1-L2';
    if (d <= 5) { if (g >= 10) return 'L2-3'; if (g >= 5) return 'L2'; return 'L2'; }
    if (d <= 8) { if (g >= 12) return 'L3'; if (g >= 6) return 'L2-3'; return 'L2'; }
    if (g >= 14) return 'L3-4';
    if (g >= 8) return 'L3';
    return 'L3';
  }

  function submitQuiz() {
    const p = {};
    for (let i = 0; i < picks.length; i++) p[i + 1] = picks[i] || 'A';
    const archetype = classifyArchetype(p);
    const maturity = classifyMaturity(p);
    document.getElementById('calc-final').classList.remove('visible');
    renderResult(archetype, maturity);
  }

  /* ─── Result rendering ──────────────────────────────────── */
  function renderResult(archetypeKey, maturityKey) {
    const a = ARCHETYPES[archetypeKey];
    const cards = document.getElementById('result-cards');
    const strengthsHtml = a.strengths.map(s => `<div class="strength-item">${s}</div>`).join('');
    const challengesHtml = a.challenges.map(c => `<div class="challenge-item">${c}</div>`).join('');

    const archetypeCard = `
      <div class="result-card archetype-card">
        <div class="result-card-label">Your archetype</div>
        <div class="archetype-card-body">
          <div class="archetype-tarot">
            <div class="tarot-numeral">${ROMAN[archetypeKey]}</div>
            <div class="tarot-icon">${ICONS[archetypeKey]}</div>
            <div class="tarot-name">${a.title}</div>
          </div>
          <div class="archetype-info">
            <div class="result-card-title">${a.title}</div>
            <div class="result-card-tagline">"${a.quote}"</div>
            <div class="result-card-meta">
              ${a.axes.map(ax => `<span class="result-meta-tag">${ax}</span>`).join('')}
            </div>
            <div class="result-card-summary"><p>${a.profile}</p></div>
            <button class="result-expand-toggle" onclick="Assessment.toggleExpand(this)">Explore in depth ↓</button>
            <div class="result-expand">
              <h4>Core strategic bet</h4>
              <p>${a.coreStrategicBet}</p>
              <h4>Canonical examples</h4>
              <p>${a.examples}</p>
              <h4>Strengths</h4>
              <div class="trait-list">${strengthsHtml}</div>
              <h4>Common challenges</h4>
              <div class="trait-list challenge-list">${challengesHtml}</div>
              <h4>Healthy vs. unhealthy expression</h4>
              <div class="tension-poles">
                <div class="tension-pole"><div class="pole-label">Healthy</div>${a.healthy}</div>
                <div class="tension-pole"><div class="pole-label">Unhealthy</div>${a.unhealthy}</div>
              </div>
              <h4>Blind spot</h4>
              <p class="quote">${a.blindSpot}</p>
              <h4>Protocol orientation</h4>
              <div class="historical-item"><div class="historical-label">Natural posture toward protocols</div><div class="historical-text">${a.protocolNatural}</div></div>
              <div class="historical-item"><div class="historical-label">Effective protocol management</div><div class="historical-text">${a.protocolEffective}</div></div>
              <div class="historical-item"><div class="historical-label">Ineffective protocol management</div><div class="historical-text">${a.protocolIneffective}</div></div>
              <div class="historical-item"><div class="historical-label">The protocol view that fits this archetype</div><div class="historical-text">${a.protocolView}</div></div>
              <h4>Stress and growth directions</h4>
              <div class="tension-poles">
                <div class="tension-pole"><div class="pole-label">Under stress</div>${a.underStress}</div>
                <div class="tension-pole"><div class="pole-label">Growth direction</div>${a.growthDirection}</div>
              </div>
              <h4>Evolutionary path</h4>
              <p>${a.evolutionaryPath}</p>
              <h4>Warning sign</h4>
              <p class="quote">${a.warning}</p>
            </div>
          </div>
        </div>
      </div>`;

    const resultsKey = MATURITY_TO_RESULTS[maturityKey] || '1';
    const r = RESULTS[resultsKey];
    const fmHtml = r.failureModes.map(fm => `<div class="failure-mode-item"><div class="failure-mode-name">${fm.name}</div><div class="failure-mode-desc">${fm.description}</div></div>`).join('');
    const actHtml = r.actions.map(act => `<div class="action-item"><div class="action-name">${act.name}</div><div class="action-desc">${act.description}</div><div class="action-done"><strong>Done when:</strong> ${act.doneWhen}</div></div>`).join('');
    const arcHtml = r.arcSteps.map((step, i) =>
      `<span class="arc-step ${i === r.current ? 'current' : ''}">${step}</span>${i < r.arcSteps.length - 1 ? '<span class="arc-arrow">→</span>' : ''}`
    ).join('');
    const summaryHtml = '<p>' + r.description.split('\n\n')[0] + '</p>';

    const progress = LEVEL_PROGRESS[resultsKey];
    let progressBars = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(progress)) progressBars += '<span class="full"></span>';
      else if (i - 0.5 === progress) progressBars += '<span class="half"></span>';
      else progressBars += '<span></span>';
    }

    const maturityCard = `
      <div class="result-card maturity-card">
        <div class="result-card-label">Your maturity level</div>
        <div class="archetype-card-body">
          <div class="maturity-badge">
            <div class="badge-level-num">${LEVEL_DISPLAY[resultsKey]}</div>
            <div class="badge-progress">${progressBars}</div>
            <div class="badge-icon">${LEVEL_ICONS[resultsKey]}</div>
            <div class="badge-name">${r.levelName}</div>
          </div>
          <div class="archetype-info">
            <div class="result-card-title">Level ${r.levelNum} — ${r.levelName}</div>
            <div class="result-card-tagline">${r.tagline}</div>
            <div class="result-card-summary">${summaryHtml}</div>
            <button class="result-expand-toggle" onclick="Assessment.toggleExpand(this)">Explore in depth ↓</button>
            <div class="result-expand">
              <h4>Where you are</h4>
              ${r.description.split('\n\n').slice(1).map(p => '<p>' + p + '</p>').join('')}
              <h4>Failure modes at this level</h4>
              <div class="failure-modes">${fmHtml}</div>
              <h4>Actions to take</h4>
              <div class="action-items">${actHtml}</div>
              <h4>Your position in the model</h4>
              <div class="output-arc">${arcHtml}</div>
              <h4>Characteristic tension</h4>
              <div class="tension-poles">
                <div class="tension-pole"><div class="pole-label">Pull A</div>${r.tension.a}</div>
                <div class="tension-pole"><div class="pole-label">Pull B</div>${r.tension.b}</div>
              </div>
              <h4>Historical parallels</h4>
              <div class="historical-item"><div class="historical-label">${r.periodTech.label}</div><div class="historical-text">${r.periodTech.text}</div></div>
              <div class="historical-item"><div class="historical-label">${r.containerization.label}</div><div class="historical-text">${r.containerization.text}</div></div>
            </div>
          </div>
        </div>
      </div>`;

    document.getElementById('scope-step').classList.remove('active');
    document.getElementById('quiz-step').classList.remove('active');
    cards.innerHTML = archetypeCard + maturityCard;
    document.getElementById('result-step').classList.add('active');
    document.getElementById('result-actions').style.display = 'flex';
  }

  function toggleExpand(btn) {
    const expand = btn.nextElementSibling;
    const isOpen = expand.classList.toggle('open');
    btn.textContent = isOpen ? 'Hide details ↑' : 'Explore in depth ↓';
  }

  function retake() {
    scopeChoice = null;
    currentQuestion = 0;
    picks = new Array(24).fill(null);
    document.querySelectorAll('.assessment-slide .step').forEach(s => s.classList.remove('active'));
    document.getElementById('scope-step').classList.add('active');
    document.querySelectorAll('.assessment-slide .option-card').forEach(c => c.classList.remove('selected'));
    document.querySelectorAll('.assessment-slide .radio-option').forEach(r => r.classList.remove('selected'));
    document.getElementById('scope-next').style.display = 'none';
    document.getElementById('calc-final').classList.remove('visible');
    document.getElementById('result-actions').style.display = 'none';
    document.getElementById('result-cards').innerHTML = '';
  }

  /* ─── Admin shortcut: ?archetype=Vanguard&level=L2 ─────── */
  function checkAdminShortcut() {
    const params = new URLSearchParams(window.location.search);
    const archetype = params.get('archetype') || params.get('a');
    const level = params.get('level') || params.get('l');
    if (archetype && level && ARCHETYPES[archetype] && MATURITY_TO_RESULTS[level]) {
      document.getElementById('scope-step').classList.remove('active');
      renderResult(archetype, level);
    }
  }

  window.Assessment = {
    selectScope, startQuiz, pickOption, goBack, toggleExpand, retake, checkAdminShortcut
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkAdminShortcut);
  } else {
    checkAdminShortcut();
  }
})();
