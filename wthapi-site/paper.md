# APIs: What They Are, What They Solve, What They Cost

---

## Orientation

The paper answers ten questions about APIs in the order a protocol-literate operator needs them answered. Each question defines any concepts it introduces; later questions build only on vocabulary already established. Analogies and worked examples are inline and used once. A closing note lists adjacent topics deliberately out of scope.

---

## § 1 · Foundations

### Q1 · What is an API, structurally — and how does it relate to the software product it exposes and to that product's other interfaces?

Start with the thing the API is an interface *to*. A **software product** is a system with internal logic and state that does something useful — process payments, schedule robots, summarise documents. The product itself is invisible to anyone outside it. An **interface** is any surface through which an outside actor can reach the product. Every non-trivial product has more than one interface, because different actors need different surfaces.

Two properties of interfaces matter throughout the paper. First, every interface is simultaneously a **door and a wall**: what it admits, it admits; what it refuses, it refuses. Offering an interface is not only an act of access — it is an act of scope. Second, the ontology is **recursive**: a subsystem inside a larger product is itself a product, with its own interfaces and its own consumer classes. Most arguments below apply equally to external APIs and internal service boundaries, with cost profiles that differ in magnitude, not in structure.

> **Analogy — a restaurant's kitchen and its doors.** The kitchen is the product: ingredients, recipes, capacity, liabilities. The dining room with waiters is one door (for walk-in diners). The phone line is another (for structured remote orders). The drive-through window is a third (for quick human orders). All are doors to the same kitchen. Which door you use depends on who you are. The kitchen does not change; the doors do.

A **consumer class** is a population of actors that uses the same kind of interface for the same kind of reason: humans-with-browsers, Python programs, iOS apps, SREs at a shell, LLM agents. Each class has different cognitive and operational needs, which is why a product ends up with more than one door.

An **API (Application Programming Interface)** is one specific species of interface: *a ***programmatic***, ***versioned***, ***governed contract*** through which software consumers reach the product, typically across a process or network boundary.* Four words are doing load-bearing work:

- ***Programmatic*** — called by code, not by a human clicking. Distinguishes the API from the UI.
- ***Contract*** — a *publisher-governed* commitment that a given request will produce a given response, within stated limits. This contract is **asymmetric**, not bilateral: the publisher sets terms; the consumer accepts them; remedy on breach is limited to what the publisher offers.
- ***Versioned*** — the commitment changes over time; the version names a point in that history.
- ***Governed*** — a **governor** (whoever maintains the product) is the only party who can change the contract. The API's **hardness** — the extent to which its terms can be relied on in the future — is borrowed from that governor. An API is as hard as the institution behind it.

The other interfaces most mature products expose — **UI** (for humans), **SDK** (an ergonomic wrapper over the API for a specific consumer class's native idiom), **CLI** (an ergonomic wrapper for humans at a shell), and **MCP server** (an ergonomic wrapper for LLM agents) — are not competitors to the API. They are derivative interfaces: each one re-expresses the API's capabilities in a form suited to a different consumer class. The API is the root contract; SDK, CLI, and MCP server are translations of it.

This ontology — product, interface, consumer class, contract, governor, hardness, door-and-wall, recursive — is the backbone for everything that follows.

---

## § 2 · What APIs Solve, What They Tension

### Q2 · What problem does an API solve that direct integration, shared memory, or human coordination don't — and what persistent tension does the solution introduce?

The alternatives to an API are: let the consumer share the product's database, link the product's code as a library, or coordinate between humans on both sides. Each works narrowly and fails at scale.

- Shared database = every schema change is a cross-team migration.
- Shared library = every consumer is pinned to the product's internal language and release cycle.
- Human coordination = the speed of a phone call is the speed of the integration.

**The problem an API solves** is coordination between a product and consumers who do not share its code, its ownership, or its release schedule. The API draws a line: on your side, the product can evolve; on the consumer's side, their application can evolve; across the line, a versioned contract stabilises the interaction.

**The persistent tension** follows directly from Q1's asymmetry. The line has an owner. Whoever owns the contract can change it, price it, deprecate it, rate-limit it, or withdraw it. Every API dependency is therefore an exposure to that governance. The 2023 retrenchments — Twitter pricing its API tier at $42,000/month, Reddit making Apollo's projected cost $20M/year — are the canonical illustrations. Consumers who thought they had stable infrastructure discovered they had a counterparty.

Two patterns exist because they protect the consumer from this tension:

> **Anti-corruption layer.** When you integrate with an external API whose model is incompatible with your domain, wrap it. The wrapper translates the publisher's vocabulary into yours. When the publisher renames a field, you change one file, not thirty.

> **Strangler fig.** When migrating off an API you no longer want, put a facade in front that routes some calls to the old contract and some to the new, and retire endpoints path-by-path. The alternative — a big-bang cutover — is the most common cause of migration failure.

The same tension appears inside your own product (Q1's recursive ontology): how your services talk to each other. The choice between *synchronous* (HTTP, gRPC) and *asynchronous* (MQTT, Kafka, events) calls is not a style preference but a placement of this tension. Synchronous chains couple timing and availability across service boundaries; asynchronous calls make the coupling visible as queue depth and lag.

Consider a Black Friday checkout built as a five-hop synchronous chain: *Cart → Tax → Inventory → Payment → Fulfilment*. At normal load each hop takes 250 ms and the chain finishes inside the 3-second client timeout. Under peak load each hop stretches to 900 ms, and the chain runs past 4.5 seconds — every customer sees failure. The fix is not longer timeouts; longer timeouts hide the coupling. The fix is to break the chain: keep Cart, Tax, Inventory synchronous (the user genuinely needs the total), but make Fulfilment an event that downstream consumes at its own pace. This is a tension-placement decision, not a performance tuning.

---

### Q3 · Why do mature products end up with more than one interface — and what problem is each additional surface solving for a different consumer class?

If Q2 was about the line between a product and its consumers, Q3 is about why that line has to be drawn several times — once per consumer class.

From Q1: each interface exists for a consumer class with distinct needs. The reason a product ends up with several interfaces is that the same underlying capabilities have to be *re-expressed* for consumers that read the world differently.

| Consumer class | Interface | Problem that surface solves |
|---|---|---|
| Humans clicking through a page | **UI** | Affordance, perception, forgiveness of imprecise input |
| Programs talking over the network | **API** | A neutral, long-lived contract across processes |
| Developers writing in language X | **SDK** | The **native idiom of the consumer class** — typically a programming language, sometimes something else (see Q8). Ergonomic: auth helpers, pagination, retries. |
| Humans at a shell at 2 a.m. | **CLI** | Stable commands, readable errors, shell-friendly output, scriptability |
| LLM agents | **MCP server** | A manifest the agent reads *semantically* to choose which action to take (Q8) |

Widening the SDK definition beyond "programming language" is the small but load-bearing move the paper's MCP argument rests on later: an SDK is any ergonomic wrapper in a consumer class's native idiom.

Three rules follow:

1. **Don't publish a surface for a consumer class that doesn't exist.** If your API is consumed only by browsers you own, you need a typed fetch wrapper, not an SDK.
2. **Parity across capabilities.** If the API exposes an endpoint, every SDK you publish should expose it.
3. **Independent versioning of release cadence.** SDK 4.3 in Go and SDK 5.1 in Python can coexist — parity is about capability coverage, independent cadence is about release tempo. What you can't do is ship a feature in one SDK's next release and not the others.

The underlying principle: each interface encodes the publisher's opinion about what a specific consumer class needs. That opinion is load-bearing. A half-hearted SDK damages the API more than no SDK at all.

---

## § 3 · The Problem of Change Over Time

### Q4 · What problem does versioning solve, what does every versioning strategy trade off, and what is deprecation discipline actually buying you?

A contract (Q1) is useful only if it holds still. It is evolvable only if it is allowed to change on a schedule everyone can see. **Versioning** makes both true at once: at any point, one specific version is the contract; between one version and the next, the contract is allowed to differ.

Four strategies, ordered roughly by operational cost.

| Strategy | Best fit |
|---|---|
| **Dated rolling** (`2024-09-01`, Stripe's pattern — account pinned on first call) | Large public APIs with many third-party consumers |
| **URL-path** (`/v1/`, `/v2/`) | Mobile/desktop clients in the wild with long support windows |
| **Header-based** (`Accept: …v2+json`) | Small APIs, fast iteration |
| **SDK-semver, API undated** | First-party integrations only |

Stripe has "maintained compatibility with every version of our API since the company's inception in 2011," through "almost a hundred backwards-incompatible upgrades" (Leach, Stripe 2017). That consumer experience is exceptional and expensive. Pick the strategy your team can honour for three years.

**What counts as a breaking change** is wider than most teams realise. Schema-level breaks are the obvious cases:

| Schema change | Breaking? | Why it hurts |
|---|---|---|
| Add optional field | No | — |
| Add new endpoint | No | — |
| Add new enum value | **Yes** for strict consumers | A 2019 switch on `SETTLED`/`FAILED` silently mis-routes `PARTIALLY_SETTLED` |
| Rename field | Yes | Every exact-match deserializer fails |
| Change field type | Yes | Arithmetic on `"100" * 0.08` produces tax garbage |
| Tighten validation | Yes | Legacy test data with `foo@localhost` now 400s |
| Remove field | Yes | Downstream `null` checks were never added |

But most production incidents come from **silent behavioural breaks** that don't show up in a schema diff:

- **Default-value changes.** A field that defaulted to `false` now defaults to `true`. Every consumer that omitted the field behaves differently overnight.
- **Error-response changes.** Changing a `404` to a `410`, or altering the shape of the error body, breaks every handler that switched on the old codes.
- **Behavioural contract drift.** Pagination ordering shifts, rate-limit envelopes tighten, timeout behaviours change, previously-lax nullability becomes strict. No schema diff catches any of these; they surface only in production.

Enforce the schema cases with `oasdiff` or `buf breaking` in CI. The behavioural cases require contract tests, paired environments, and consumer-run canaries — no amount of schema tooling catches them.

**Deprecation discipline** converts a breaking change from an incident into a project. Minimum practice: announce via your normal release channel, emit the `Sunset` HTTP header (RFC 8594) along with a `Deprecation: true` header, track consumption by consumer identity, provide migration tooling, and keep a rollback plan. **If you cannot name the three largest consumers of an endpoint you intend to deprecate, you are not ready to deprecate it.**

---

## § 4 · The Trust and Blast-Radius Problems

### Q5 · What problem does authentication solve that authorization doesn't — and what tension does credential scope and lifetime create with operational convenience?

Two distinct problems hide under the word "auth":

- **Authentication** establishes *who* a request is from. The consumer proves identity.
- **Authorization** establishes *what* the identified consumer is allowed to do. The product consults a policy.

Conflating them — "they have the key, so let them do anything" — is the origin of most auth incidents. A single production API key used everywhere is an authentication credential doing an authorization job it cannot do safely.

> **Analogy — hotel keycards, not house keys.** A long-lived production key is a house key: lose it and you change every lock. A short-lived scoped token is a hotel keycard: it expires at checkout, only opens your room, and the front desk can revoke it instantly without rekeying the building.

The tension is between credential *scope and lifetime* and *operational convenience*. Short, narrowly-scoped credentials are safer but require rotation, refresh, and secret management. Long, broadly-scoped credentials are convenient but catastrophic when leaked. Defensible defaults for 2026:

- **Workload identity as the substrate** — SPIFFE/SPIRE, AWS IRSA, GCP workload identity federation, Kubernetes service-account tokens. Credentials are bound to a workload, not stored as files.
- **mTLS** for in-cluster machine-to-machine.
- **OAuth 2.1** — authorization-code + PKCE for user-delegated, client-credentials for service-to-service.
- **Short-lived access tokens** (~15 min) with rotated refresh.
- **Per-tenant, per-environment, per-purpose** API keys where workload identity isn't available.
- **Secrets in a manager** (Vault, AWS Secrets Manager), never in code, never on disk.

Most firms are mid-transition: long-lived keys in a secret manager, migrating to workload identity as mesh and platform maturity allow. The bridge pattern is short-lived credentials fetched at runtime; the destination is identity bound to the workload itself.

The principle scales down to one rule: *a credential should name exactly what it is allowed to do, for exactly as long as it is needed, and no more.* When a shared `.env` leaks onto GitHub — and it will — the blast radius is set by what that credential was allowed to do for how long.

---

### Q6 · What problem do rate limits, idempotency keys, and circuit breakers solve jointly — and why must they come as a set?

Each protects against a different failure mode; each alone leaves a gap the others close.

**Rate limits** protect the product from consumer volume. Without them, one misbehaving client drowns the service — including for consumers doing nothing wrong.

> **Analogy — the onramp metering light.** LA freeways meter onramps so a sudden surface-street surge doesn't collapse the highway. Rate limiters meter consumers so a sudden client-side surge doesn't collapse the API.

Enforce in multiple dimensions (per-key AND per-tenant AND per-endpoint AND a global concurrency ceiling); return `429` with `Retry-After`, `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`; use a token bucket for bursty-but-capped traffic, a sliding window for stricter regulatory contexts. A single global RPS ceiling lets one misbehaving consumer starve every other customer.

**Idempotency keys** protect the consumer from retry-induced duplication. The gas-pump pattern (swipe, glitch, swipe again, charged once) is the payment network's use of idempotency keys. Every write endpoint accepts `Idempotency-Key: <uuid>`; on retry, the server returns the stored response verbatim. This single design decision eliminates an entire category of duplicate-charge, duplicate-shipment, duplicate-ticket incidents.

**Circuit breakers** protect the consumer from a degraded downstream. A breaker trips before the wiring melts; an open circuit breaker trips before a degraded dependency takes your service down with it. A companion pattern — **bulkheading** — allocates separate thread or connection pools per downstream so one slow dependency cannot starve the others.

Retries, whenever they happen, must use **exponential backoff with full jitter**. Without jitter, retries synchronise and produce a thundering herd when the downstream recovers. `Retry-After` is advisory, not normative; clients must cap their own retries (a reasonable default: three attempts, exponential delay from 100 ms with full jitter, then fail fast).

They come as a set because each one's gap is another's solution. A rate limit without idempotency punishes the honest retry of a legitimately-lost response. Idempotency without rate limits lets an infinite-loop client hammer the endpoint at machine speed. Circuit breakers without jittered retry cause thundering herds when a service recovers. The set, operated together, bounds both how much damage one consumer can do and how much damage one degraded dependency can cause you. No single credential, endpoint, region, or consumer should be able to take down the whole API.

---

## § 5 · The Agent Problem

### Q7 · What makes an LLM agent a distinct consumer class — and what new problems does it introduce for API design?

Blast-radius reasoning in Q6 assumes you know who your consumers are. A new consumer class with different properties breaks that assumption. LLM agents are that class — distinct from human developers and headless services on four axes:

1. **They read natural language, not types.** A human developer parses a function signature; an agent parses the description. Tool names and docstrings shift from documentation (read once, at write-time) to *routing signal* (read on every invocation).
2. **They re-decide which call to make on every invocation.** A developer writes code once and runs it a thousand times. An agent reconsiders. Tool interfaces must be safe under "forgotten context between calls" — stateless, idempotent, tightly-typed.
3. **They can be authored by someone you don't control.** Your consumer might be Claude Desktop, Cursor, or an end-user's custom harness — hosts you have no contract with.
4. **They scale beyond any prior consumer class's patience.** Postman's 2025 report records agent API traffic growing 40% year-over-year, and "51% of developers worry about unauthorized or excessive API calls from AI agents — their number one security concern" (Postman 2025). Agents burst at machine speed for *semantic* reasons ("try a different phrasing") that existing retry detectors don't recognise.

These properties don't break Q1's ontology — an API is still a contract between a product and a consumer class — but they change the contract's shape. The next two questions are about that change.

---

### Q8 · Is MCP a new architectural thing — or is it the SDK pattern specialised for the agent consumer class? What problem does the semantic SDK actually solve?

From Q3's widened definition: an SDK is an ergonomic wrapper over the API in the consumer class's native idiom. **MCP is that, for agents.** It is not a new architectural category; it is the SDK pattern specialised for a consumer class whose native idiom is natural language. The mapping is nearly exact:

| Traditional SDK | MCP server |
|---|---|
| Method signatures | Tool names + JSON schemas |
| Docstrings | Tool descriptions |
| Auth helpers, retries, pagination | Auth headers, lifecycle handshake, notifications |
| Imported at build time | Discovered at runtime via `tools/list` |
| Consumer: human developer, write-time | Consumer: LLM agent, run-time |

The word *semantic* is doing the real work. A traditional SDK binds names lexically, for a consumer that compiles them. A **semantic SDK** binds names *and prose* for a consumer that evaluates them by meaning. That is why a badly-described MCP tool is broken in a way a badly-named Python method isn't: the Python method still works; the MCP tool gets skipped because the agent can't tell what it's for. The tool description is the **menu** the agent reads before choosing.

**What MCP solves that a well-documented raw API plus OpenAPI doesn't** is the same problem every SDK solves — host compatibility and authoring ergonomics for a specific consumer class. Because MCP is a standard, any host (Claude Desktop, Cursor, VS Code, Claude Code) can consume any MCP server without custom integration. Publishing MCP is how you reach the agent consumer class, the same way publishing a Python SDK is how you reach Python developers.

**One property has no traditional-SDK analogue, and it matters.** A Python SDK runs inside the consumer's process under their own auth; a malicious SDK is a supply-chain attack on the consumer. An MCP server is a separate process mediated by the agent host, often running under the end-user's credentials and exposing tools discovered dynamically. A malicious MCP server can inject instructions into the agent's context, shadow another server's tool names, or exfiltrate data across servers. Tool namespacing, publisher allowlists, and **indirect prompt injection** (hostile text in retrieved content attempting to redirect the agent) are new failure modes an MCP publisher and consumer both have to reason about. Treat MCP ergonomically like an SDK; treat it operationally more like a browser extension.

Which consumer populations warrant the MCP surface:

| Who's calling | Publish |
|---|---|
| Third-party agent hosts you don't control | **MCP** — host compatibility is the whole point |
| Your own in-house agent calling your own backend | **Purpose-built API** (typed RPC). MCP adds overhead when you control both ends. |
| Both | **Both** — the REST/gRPC API is the durable contract; the MCP server is a thin facade over it, re-expressed for the agent class. |

The "thin facade" is compatible with "scoped authorization" in Q9 because the facade chooses which tools to expose; the scoping is inherent in which facade you publish, not added on top.

---

### Q9 · When the agent is capable enough to call the raw API directly, what problem does the permission surface still solve — and why does that problem grow with model capability?

A natural objection: a frontier model reads OpenAPI and writes correct HTTP. It does not *need* the menu. Why publish it?

Because the menu isn't there for the LLM's benefit. Every interface is a door-and-wall (Q1), and a published tool surface is a *scoped grant of authorisation expressed as an interface*. When you expose twelve tools, you are telling the model: these twelve things are in scope for this session; everything else isn't. Not because the model can't find the other actions — because you don't want it to.

This yields a counter-intuition worth carrying:

> **The smarter the model, the more you want the menu.** A weak model is rate-limited by its incompetence. A capable model is rate-limited only by what it has been authorised to do. A model that can flawlessly execute `DROP TABLE users` is exactly the one you don't want handed a raw database connection. Governance, not cognition, is the reason.

Four properties survive any increase in capability:

- **Auditability.** `tools/call` produces a clean event stream compliance can read. Raw HTTP driven by a model produces packet captures you reconstruct intent from.
- **Liability surface.** The tools you publish are the actions you warrant. Anything else, you disclaim.
- **Per-session scope.** A support agent and an admin get different tool lists from the same MCP server, dynamically. Raw API access is static.
- **Cross-model stability.** Swap Haiku for Opus for cost. Same tool surface, same behaviour. Raw API access gives you a different agent with every model change.

**An unresolved design problem worth naming.** The menu limits the *primitive* actions in scope; it cannot enforce that the *compositions* are in scope. A capable agent given `list_files`, `read_file`, and `write_file` can approximate `move_file` even if `move_file` isn't published. Coarse menus are therefore over-permissive under composition; fine-grained menus force thinking about which composed sequences the scope actually authorises. This is an active design problem, not a settled practice — and it is one place where threat modelling, not API design alone, has to catch up.

The agent-access maturity ladder operationalises all of this:

| Level | Concrete posture |
|---|---|
| **0** | Developer pastes a personal API key into an agent host; no one knows |
| **1** | Per-agent credentials; calls appear in logs; no agent-specific alerting |
| **2** | MCP server published; scopes per tool; compliance can enumerate allowed actions |
| **3** | Credentials ≤15 min TTL; agent-separate rate limits; destructive actions (irreversible or >$X impact) require a human confirmation via `elicitation/request` or equivalent; threat model names indirect prompt injection and cross-server tool shadowing |
| **4** | Replay harness; semantic-retry anomaly detection; agent-specific SLIs (tool-selection accuracy against a held-out eval set, median tokens per tool-call) |
| **5** | Federated identity — agent acts on behalf of a user with their traceable identity through the call chain |

Most firms sit at 0–1. Level 3 is achievable in a quarter and is the level where an agentic incident stops being an existential risk.

---

## § 6 · The Physical-Layer Problem

### Q10 · When the API governs physical motion rather than bits, what new problems emerge — and why does safety need its own architectural plane?

Everything in §5 assumes the API governs bits. When the API governs atoms — a robot's motion, a drone's altitude, a conveyor's speed — the stakes change shape. The ontology from Q1 holds: the robot is a product, its API is a contract, its consumers are a fleet manager, an application, maybe an agent. The tensions from Q2 still apply: the contract is governed, and whoever governs it can change it. The January and November 2025 DJI geofencing reversals (DroneDJ 2025) are the case study for that tension in a safety-adjacent context.

What changes is the consequence of governance turning: stopped production, stranded capital, or human injury.

**Three new problems** emerge.

**First — vendor lock at the control plane.** A vendor fleet SDK (DJI, Boston Dynamics, AMR vendors) is an external API of the kind Q2 described. The defensive pattern is the anti-corruption layer, applied to physical control:

```
Application logic (speaks your domain)
       │
   Facade (drone.fly_to, agv.pick_at)
       │
   ├─► DJI adapter  ─► DJI SDK
   ├─► Spot adapter ─► Spot SDK
   └─► V adapter    ─► Vendor V SDK
```

Firms with this facade absorbed the 2025 DJI geofencing changes by updating one file. Firms without scattered the logic across services and spent a quarter untangling it.

**Second — intermittent connectivity.** Industrial fleets operate in warehouses with patchy Wi-Fi and outdoor sites with cellular loss. Three non-negotiables: edge autonomy (robots continue current tasks when the fleet manager is unreachable); store-and-forward telemetry (MQTT with local persistence, drained on reconnect); idempotent command design (the same Q6 pattern, now for moving machines). The autonomy window is bounded; the operator must also specify degrade-to-safe behaviour for outages *longer* than the window — what the robot does in hour two.

**Third — safety cannot ride the control plane.** An e-stop signal whose delivery depends on the MQTT broker being up has coupled human safety to an unrelated software layer's availability. The convention is three planes, operated independently:

> **Analogy — the taxi company.** The radio dispatch is the **control plane**: who takes which fare. The cars actually moving are the **data plane**. The emergency brake inside each car is the **safety plane** — it works whether dispatch is on lunch, whether the meter is broken, whether the GPS is wrong. The three systems must fail independently.

| Plane | Protocol examples | What it does |
|---|---|---|
| **Control** | VDA 5050 over MQTT; vendor fleet APIs | Task dispatch, fleet coordination, scheduling |
| **Data** | ROS 2 over DDS on-robot; MAVLink for drones; OPC UA for OT | Sensor streams, actuator commands, real-time perception |
| **Safety** | Hardware interlocks; certified protocols (PROFIsafe, openSAFETY) | E-stop, light-curtain, watchdog — fails independently |

Open-RMF handles multi-vendor coordination where more than one fleet operates in the same space. If the question *"can my robots still stop when the MQTT broker is down?"* is not trivially yes, the safety plane has leaked into the control plane and the architecture needs rework before an auditor — or a person — gets hurt.

---

## § 7 · Consequences

Q1–Q10 generate a compact set of decisions a protocol-literate operator can make consistently.

**Which surfaces to publish for which consumer classes** (from Q3, Q7, Q8):

| Consumer | Publish |
|---|---|
| Own web frontend only | Typed fetch wrapper |
| First-party mobile + web | API + BFF + mobile SDKs |
| Partners | API + SDKs (top 2 languages) + CLI |
| Third-party LLM agents | API + **MCP server** + SDK |
| In-house agents | Purpose-built API; skip MCP |
| Internal microservices | API + generated SDK from schema |

**Ship-readiness for any external API** (from Q4, Q5, Q6):

- [ ] Versioning strategy chosen and documented; breaking-change definition includes silent behavioural breaks
- [ ] Sunset/deprecation process defined; consumer-identity tracking in place; top-3 consumers named before any deprecation
- [ ] Idempotency key on every write endpoint
- [ ] Rate limits per-key AND per-tenant AND per-endpoint, plus a global concurrency ceiling; `429` returns `Retry-After` + `X-RateLimit-*` headers
- [ ] Clients use exponential backoff with full jitter and cap retries (typical default: 3 attempts from 100 ms); `Retry-After` is advisory
- [ ] Workload identity where feasible; OAuth 2.1 / mTLS; short-lived scoped credentials; secrets in a manager, never on disk
- [ ] W3C `traceparent` propagated end-to-end; RED metrics (Rate, Errors, Duration) per endpoint and per tenant
- [ ] Canary rollout for schema changes; auto-rollback on SLO breach within 5 minutes

**Agent-readiness** (from Q7, Q8, Q9):

- [ ] MCP server (or equivalent tool manifest) if exposed to third-party agents
- [ ] Tool descriptions evaluated against a held-out prompt set; target ≥95% tool-selection accuracy
- [ ] Agent-specific credentials, ≤15 min TTL, tight scopes per tool
- [ ] Destructive-action human gate (irreversible or >$X financial impact) via `elicitation/request` or equivalent
- [ ] Replay log retained ≥90 days, tenant-scoped, PII-handled per policy
- [ ] Agent-aware rate limits; semantic-retry anomaly detection
- [ ] Documented threat model covering indirect prompt injection, cross-server tool shadowing, confused-deputy scenarios

**Fleet-readiness** (from Q10):

- [ ] Control / data / safety planes separated; safety on hardware or certified protocol
- [ ] Vendor SDKs behind an application-owned facade
- [ ] Store-and-forward telemetry; edge autonomy during a 1-hour outage; degrade-to-safe behaviour specified beyond the autonomy window
- [ ] VDA 5050 or equivalent; Open-RMF if more than one vendor
- [ ] Firmware and SDK deprecation process documented with each vendor

---

### Out of scope for this paper

The decisions above apply to each of the following, but the specifics require their own treatment: event/async schema evolution (Kafka, MQTT); the choice between REST, GraphQL, gRPC, and RPC-over-Connect; webhook and publisher-initiated traffic (signing, replay, backoff on the publisher's side); multi-region and data-residency patterns; agent-traffic cost metering and pass-through. Each is an adjacent concern with its own literature.

---

## References

- Anthropic. *Model Context Protocol — Architecture Overview*. Retrieved April 2026. https://modelcontextprotocol.io/docs/concepts/architecture
- *DroneDJ.* "DJI drops old drone geofencing rules." 17 November 2025. https://dronedj.com/2025/11/17/dji-drone-geo-geofencing-unlock/
- IETF RFC 8594. "The Sunset HTTP Header Field." May 2019. https://datatracker.ietf.org/doc/html/rfc8594
- Leach, Brandur. "APIs as infrastructure: future-proofing Stripe with versioning." Stripe Blog, 28 August 2017. https://stripe.com/blog/api-versioning
- MAVLink project. *MAVLink Developer Guide*. https://mavlink.io/en/
- MQTT.org / OASIS. *MQTT Standard*. https://mqtt.org/
- OpenAPI Initiative. *OpenAPI Specification v3.2.0*, 19 September 2025. https://spec.openapis.org/oas/latest.html
- Open Robotics. *ROS 2 Documentation*. https://docs.ros.org/en/rolling/index.html
- Open-RMF. *Open Robotics Middleware Framework*. https://www.open-rmf.org/
- OPC Foundation. *OPC UA*. https://opcfoundation.org/about/opc-technologies/opc-ua/
- Postman. *2025 State of the API Report*, 7th edition. https://www.postman.com/state-of-api/
- VDA. *VDA 5050: Interface for the communication between AGVs and a master control.*
