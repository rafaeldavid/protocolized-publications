---
title: Maturity model diagram · v0.1 visual analogies
version: v0.1 (2026-04-25)
status: draft · for discussion before committing to a primary diagram
seed_idea: pyramid feels off; iceberg was the trigger for exploring alternatives
depends_on: Framework-v1.md (5 levels: Shadow / Sanctioned / Designed / Infrastructural / Planetary)
goal: identify a visual that's reducible to mnemonic iconography (like the pyramid is) but tells a more accurate story about AI adoption progression
---

# Maturity model diagram — v0.1 visual analogies

The pyramid says **climb upward** — implies hierarchy, progress, prestige. That story is mostly wrong for AI adoption: L4 isn't "above" L3 (it's *sectoral*, not just "more"), L5 makes the system *less visible*, not more, and L1 isn't "below" anything — it's the default starting state most orgs fall into. We need a metaphor that handles non-monotonic visibility, regressions (L4 stalled, L5 illegible), and the protocol-theory framing of *smooth → striated*.

This doc surveys ten alternatives. Each is rated on:

- **Iconography reduction** — can it be drawn small as a single recognizable glyph?
- **Level distinction** — do the 5 levels naturally divide?
- **Story fit** — does it match what the model is *actually* claiming?
- **Protocol-theory link** — does it pull from Rao / SIG vocabulary?

## Quick comparison

| # | Analogy | Glyph | Iconography | Levels divide | Story fit | Protocol link |
|---|---|---|---|---|---|---|
| 1 | Iceberg | ▲ with waterline | ★★★★ | ★★★ | ★★★ visibility | ★★ |
| 2 | Desire path → highway | branching line | ★★★ | ★★★★ | ★★★★★ smooth-striated | ★★★★★ |
| 3 | Geological strata | horizontal bands | ★★★★ | ★★★★ | ★★★★ pressure / time | ★★★★ |
| 4 | Fault-line cross-section | jagged line | ★★★ | ★★★ | ★★★★ stress reveals | ★★★★★ |
| 5 | River / watershed | branching tree | ★★★★ | ★★★ | ★★★ convergence | ★★★ |
| 6 | Subway / transit network | nodes + edges | ★★★★ | ★★★★ | ★★★★ coordination | ★★★ |
| 7 | Coral reef | stacked organic | ★★ | ★★★ | ★★★ ecology | ★★ |
| 8 | Lighthouse → beacon network | tower + rays | ★★★ | ★★★★ | ★★★★ visibility | ★★★ |
| 9 | Protocol stack (OSI) | layered rectangles | ★★★★ | ★★★★★ | ★★★ techy | ★★★★ |
| 10 | Construction site → city | building blocks | ★★★ | ★★★★ | ★★★ tangible | ★★ |

The pyramid would score: glyph ★★★★★, levels ★★★★★, story fit ★★, protocol link ★. Strong on memorability, weak on accuracy.

---

## 1. Iceberg

The seed idea. A single iceberg with a waterline; visible mass above, hidden mass below.

```
                     ___
                    /   \
                   /  S  \    ← L5 Planetary  (visible tip — invisible to look at)
                  /-------\
                 /    A    \   ← L4 Infrastructural
                /-----------\
       ~~~~~~~~/      D      \~~~~~~~~  waterline (visibility threshold)
              /---------------\
             /        2        \   ← L2 Sanctioned (just-emerged, partial)
            /-------------------\
           /          1          \   ← L1 Shadow (the hidden majority)
          /_______________________\
```

Wait — that's flipped from intuition. L1 Shadow is *hidden* (below water), but also where everyone starts. L5 Planetary is *also* hidden in a different way (becomes background infrastructure). The iceberg can't show two-different-kinds-of-hidden well.

**Better mapping:** L1 fully submerged, L2–L4 progressively above water, L5 *the visible tip*. Then the metaphor is "what's below water is what nobody talks about, the tip is what everyone references."

| Level | Position | Story |
|---|---|---|
| L1 Shadow | Submerged base | Hidden mass; everyone's there but nobody admits it |
| L2 Sanctioned | Just at waterline | Just-emerged, partial visibility |
| L3 Designed | Just above water | Visible, defended, but minority |
| L4 Infrastructural | Tip just above | Few orgs reach here |
| L5 Planetary | Highest peak | Visible to all, but also a different kind of invisible — *infrastructure that recedes from notice* |

**Strengths.** Memorable shape; "tip of the iceberg" is already a cultural mnemonic for the L1 Shadow problem. Communicates that the visible thing is a small fraction.

**Weaknesses.** Static (icebergs don't grow). Vertical-only progression hides L4's *lateral* nature (sectoral, not "higher"). L5's "infrastructure-becomes-invisible" inverts the iceberg's logic.

**Iconography reduction.** ▲ with horizontal line — instantly recognizable.

---

## 2. Desire path → highway

Trail formation, mapped to Rao's smooth-to-striated framing directly. Open terrain → desire path (worn by repeated use) → marked trail → paved road → highway network.

```
L1   . . . .   open terrain (no path)
       .  .

L2    /‾‾‾\    desire path (worn by use; not designed)
     /

L3   ─────     marked trail (signed, designed)

L4   ═════     paved road (engineered, named)

L5   ╬═════╬   highway network (multi-route, sectoral)
     ║       ║
     ╬═══════╬
```

Or as a single-axis evolution:

```
L1: . . . . .   (smooth — open terrain)
L2:  ⌒ ⌒ ⌒    (desire path — emergent track)
L3:  ─ ─ ─    (trail — marked, intentional)
L4:  ═══════  (road — engineered, paved)
L5:  ╬═══╬═══╬ (highway network — interconnected)
```

| Level | Trail state | Story |
|---|---|---|
| L1 Shadow | Open terrain | No path. Anyone goes anywhere. Pure smoothness. |
| L2 Sanctioned | Desire path | Worn into being by repeated use. Acknowledged, not designed. |
| L3 Designed | Marked trail | Someone signed it. Maintained. Still single-org. |
| L4 Infrastructural | Paved road | Engineered. Named. Cross-org coordination. |
| L5 Planetary | Highway network | Multi-route, sector-spanning, named. The terrain is now *defined by* the network, not the network by the terrain. |

**Strengths.** Direct quote from Rao's Evil Twin: "protocols turn smooth behavior spaces into striated behavior spaces." This *is* the literal visual of the protocol-theory thesis. The progression is non-monotonic on visibility (the highway is visible *because* it's been built, but the road that's been there 100 years recedes into infrastructure).

**Weaknesses.** Glyph isn't as iconic as a pyramid or iceberg — it's a process more than a shape. Five-level distinction is clean but each glyph is plain.

**Iconography reduction.** A path that bends at each transition: dotted → wavy → straight → thick → branched.

---

## 3. Geological strata (sediment layers)

Cross-section of accumulated layers. Each layer is a distinct rock type formed by different conditions.

```
═══════════════════════
░░░░░░░░░░░░░░░░░░░░░░░  ← L5  (atmosphere — invisible-but-present)
═══════════════════════
████████████████████████  ← L4  (bedrock — load-bearing infrastructure)
═══════════════════════
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ← L3  (sandstone — compacted, structured)
═══════════════════════
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  ← L2  (sediment — layered, partial compaction)
═══════════════════════
░░ ▒ ░ ▒ ░ ▒ ░ ▒ ░ ▒ ░  ← L1  (loose dust — unconsolidated)
═══════════════════════
```

| Level | Rock state | Story |
|---|---|---|
| L1 Shadow | Loose dust, gravel | Unconsolidated. Wind-blown. Each particle a separate AI use. |
| L2 Sanctioned | Sediment | Beginning to settle. Layers form, but pressure hasn't compacted them. |
| L3 Designed | Sandstone | Pressure + time compressed sediment into structure. Hard, navigable. |
| L4 Infrastructural | Bedrock | Foundation. Other things are built on it. Hard to remove. |
| L5 Planetary | Atmosphere / tectonics | Different kind of structure — pervasive, surrounding, not "above." |

**Strengths.** Pressure-and-time framing directly aligns with how the SIG paper (`finding-fault-lines`) treats organizational protocols — pressure forces underlying structure to express itself. Each level is *literally* a different category of material, not just "more of the same."

**Weaknesses.** Inverts traditional "high = good" reading (older/deeper layers are usually more foundational geologically). L5 doesn't fit cleanly — if L5 is atmosphere, it's not stratified.

**Iconography reduction.** ▤ (horizontal bands stacked).

---

## 4. Fault line cross-section

Earth's crust under stress, with fault lines emerging and being mapped over time. Direct alignment with the SIG paper "Finding Fault Lines within the Firm" (the source of the site's hero image and naming).

```
L1:  ────────────────────   (smooth surface — pressure invisible)

L2:  ──────/──────\─────   (cracks emerge — stress finds weakness)

L3:  ─────/┃┃┃┃┃┃┃\─────   (fault mapped — governance acknowledges + works with structure)
              ↓ (named, monitored)

L4:  ═══╬═══╬═══╬═══╬═══   (sector-wide tectonic structure — multiple orgs share fault systems)

L5:  ⊕  ⊕  ⊕  ⊕  ⊕  ⊕    (planetary tectonics — civilization-scale)
       ╲ ╱  ╲ ╱  ╲ ╱
        ⊕    ⊕    ⊕
```

| Level | Fault state | Story |
|---|---|---|
| L1 Shadow | Smooth surface | Pressure is real but invisible; nothing has cracked yet. |
| L2 Sanctioned | First cracks | Stress finds the weak places. Cracks are visible but unmapped. |
| L3 Designed | Fault mapped + named | Org has acknowledged the fault and built protocols around it. |
| L4 Infrastructural | Tectonic structure | Sector-wide fault systems; multiple orgs share the same plates. |
| L5 Planetary | Civilization-scale plates | Continental tectonics. Movement is planetary. |

**Strengths.** Direct site-naming alignment. The "stress reveals structure" framing is the site's foundational thesis. Captures that protocols are *responses to pressure*, not arbitrary construction.

**Weaknesses.** Less universally recognized than pyramid/iceberg. Glyph is harder to reduce — fault lines are jagged and irregular.

**Iconography reduction.** ⚡ or ↯ (jagged line through a horizontal field).

---

## 5. River / watershed system

Water flow from individual springs to ocean. Each level a different stage of consolidation.

```
L1:  ╲    ╱    ╲    ╱     (springs — individual, scattered)
       ╲  ╱      ╲  ╱
L2:     ╲╱        ╲╱       (creeks — first convergence)
         │         │
L3:      ╲────────╱        (river — many streams join)
              │
L4:           ║            (river basin — sectoral)
            ╱ ║ ╲
L5:    ~~~~~~~~~~~~~~~~~   (ocean — planetary)
```

| Level | Water state | Story |
|---|---|---|
| L1 Shadow | Springs / drips | Individual sources. No coordination. |
| L2 Sanctioned | Creeks | First merging. Visible flow but unstable banks. |
| L3 Designed | River with channel | Banks defined. Flow predictable. |
| L4 Infrastructural | River basin | Multiple rivers, shared watershed. Sector. |
| L5 Planetary | Ocean | Convergence into one body. Planetary scale. |

**Strengths.** Directionality (downstream) implies adoption flow. Shows convergence — many sources merge. Universal cultural metaphor.

**Weaknesses.** Implies "flowing downhill" which can read as decline. L1 ≠ source-of-good-things in the model — it's the unmanaged starting point.

**Iconography reduction.** Branching tree shape — recognizable but not unique.

---

## 6. Subway / transit network

Transportation networks at different scales. Maps to coordination scope clearly.

```
L1:  •  •  •  •  •      (walking — individual paths)

L2:   ─•─•─•─           (bus route — single line, sanctioned)

L3:   ━┳━┳━┳━           (subway — designed network in one city)
       ┃ ┃
       •─•

L4:   ┏━╋━┓ ┏━╋━┓ ┏━╋━┓  (intercity rail — sectoral coordination)
      ┃ ╋ ┃ ┃ ╋ ┃ ┃ ╋ ┃

L5:   global aviation network — every node connects to every other through hubs
```

| Level | Transit state | Story |
|---|---|---|
| L1 Shadow | Walking | Each person makes their own path. |
| L2 Sanctioned | Bus route | Single line, sanctioned, but rough. |
| L3 Designed | Subway | Engineered, multiple stops, one city. |
| L4 Infrastructural | Intercity rail | Multiple cities, shared standards. |
| L5 Planetary | Aviation network | Every node reachable through hubs. |

**Strengths.** Coordination scope is immediately legible. Each scale (individual / city / metro / region / planet) is distinct.

**Weaknesses.** Glyph is busy. The scale jumps are large — small-org users may not relate to "intercity rail."

**Iconography reduction.** Subway-map style: nodes connected by lines.

---

## 7. Coral reef succession

Ecological succession — bare seafloor → pioneer corals → established reef → barrier reef → ocean ecology.

```
L1:    .  .  .  .  .      (bare seafloor — bare substrate)

L2:    ⚯⚯⚯⚯⚯              (pioneer corals — early settlement)

L3:    🪸🪸🪸               (established reef — biodiverse, structured)
       ●●●●

L4:    🪸🪸🪸🪸🪸🪸🪸          (barrier reef — sectoral, multi-species)
       ▒▒▒▒▒▒▒▒▒

L5:    ocean ecology       (planetary — currents, migration, climate)
```

**Strengths.** Captures *emergent* organization and inter-organism cooperation. Beautiful, distinctive.

**Weaknesses.** Niche metaphor. Hard to draw at small scale and still be legible.

**Iconography reduction.** Stylized reef silhouette — distinctive but not strong as a glyph.

---

## 8. Lighthouse → beacon network

Signaling infrastructure at different scales.

```
L1:   ⊙          (single signal fire — ad hoc)

L2:   🕯          (oil lamp — sanctioned, local)

L3:   ▲          (lighthouse — engineered, named)
      |

L4:   ▲   ▲   ▲   (lighthouse network — coordinated coastline)
      |   |   |

L5:   🛰️ 🛰️ 🛰️    (GPS / satellite — planetary navigation infrastructure)
```

| Level | Signal state | Story |
|---|---|---|
| L1 Shadow | Signal fire | Ad hoc; whoever has wood, lights one |
| L2 Sanctioned | Oil lamp | Standardized fuel, fixed location, local responsibility |
| L3 Designed | Lighthouse | Engineered, characteristic light pattern, named |
| L4 Infrastructural | Lighthouse network | Coordinated along coastlines; ships expect it |
| L5 Planetary | GPS / satellite | Invisible to most; civilization depends on it |

**Strengths.** Maps L5's "invisible-but-pervasive infrastructure" perfectly — GPS recedes from notice exactly because it's everywhere. Visibility is non-monotonic (lighthouse very visible; GPS very not).

**Weaknesses.** L1's "signal fire" reads as primitive when AI L1 is actually *modern* shadow tools, not pre-modern.

**Iconography reduction.** ▲ with rays. Familiar.

---

## 9. Protocol stack (OSI-style layered model)

Networking's classic 7-layer (or 5-layer) model adapted for AI. Each level is a layer that depends on the one below.

```
┌─────────────────────────────┐
│  L5 — Planetary             │  application coordination across civilization
├─────────────────────────────┤
│  L4 — Infrastructural       │  sector-wide AI standards and exchange
├─────────────────────────────┤
│  L3 — Designed              │  org-specific designed AI workflows
├─────────────────────────────┤
│  L2 — Sanctioned            │  organizational permission + access
├─────────────────────────────┤
│  L1 — Shadow                │  individual AI tool use, unsanctioned
└─────────────────────────────┘
```

| Level | OSI parallel | Story |
|---|---|---|
| L1 Shadow | Physical layer | Raw use of tools by individuals; no abstraction |
| L2 Sanctioned | Link / data-link | Connection sanctioned; flow controlled |
| L3 Designed | Network / transport | Routing, addressing, reliable delivery |
| L4 Infrastructural | Application protocols | HTTP / DNS / SSL — sector-wide |
| L5 Planetary | The Web | Civilization-scale layer everyone depends on |

**Strengths.** Most directly protocol-theory native. The model literally *is* a protocol stack. Each layer depends on the one below — captures the cumulative nature.

**Weaknesses.** Reads as technical. Non-engineer audience may bounce. Pyramid-shaped on its side.

**Iconography reduction.** Stacked rectangles. Strong glyph for technical audience; weak for general.

---

## 10. Construction site → city

Tangible scalar progression: one tarp → tent → house → block → city.

```
L1:  ⛺               (tent — improvised shelter)

L2:  🏠               (house — built, but informal)

L3:  🏛               (designed building — architect-led)

L4:  🏙               (city block — coordinated multiple structures)

L5:  🌐               (smart-city / global infrastructure)
```

| Level | Built state | Story |
|---|---|---|
| L1 Shadow | Tent | Improvised, individual |
| L2 Sanctioned | House | Built but informal; no shared code |
| L3 Designed | Architected building | Plans, codes, engineer-stamped |
| L4 Infrastructural | City block | Zoning, utilities, shared streets |
| L5 Planetary | Smart-city / metropolis | Embedded sensors, coordination at scale |

**Strengths.** Tangible. Physically scalable.

**Weaknesses.** Implies "bigger = better" which the model contests for L4/L5. Generic — many maturity models use this.

**Iconography reduction.** Cluster of building shapes.

---

## Recommendation framing

Three serious contenders if we want to leave the pyramid behind:

### Strongest protocol-theory alignment: **#2 Desire path → highway**
This *is* the smooth-to-striated thesis. Direct quote anchor in Rao's Evil Twin paper. Tells the model's story most accurately. Glyph is harder but interesting.

### Strongest mnemonic / cultural carry: **#1 Iceberg**
"Tip of the iceberg" is already in cultural vocabulary for the L1 Shadow problem. Most memorable shape after the pyramid. But it inverts somewhere around L5.

### Strongest site-naming alignment: **#4 Fault line cross-section**
Direct site-name reference (`finding-fault-lines.jpg`). Pressure-reveals-structure framing matches the model's foundational thesis. But less iconic.

### Hybrid possibility
Use the **iceberg** as the primary mnemonic shape (cultural recognition) but tell the **desire-path** story in the level-by-level breakdown text. Iceberg as glyph; smooth-to-striated as story.

### Or: a fresh combination
**Geological cross-section with a developing road on top.** Strata below (showing the model's progression of compression) plus a road that emerges from desire path → highway across the surface. Combines #2 + #3.

```
   highway: ╬════════════════╬     ← L5 (network infrastructure)
   road:    ═════════════           ← L4
   trail:   ─────────────            ← L3
   desire:    ⌒ ⌒ ⌒                 ← L2
   smooth:    . . . .                ← L1
   ─────────────────────────────
   sediment / accumulated context (the why)
   ─────────────────────────────
   bedrock (protocol substrate)
```

The two-axis version: vertical = adoption depth; horizontal = the surface story (desire path → highway). This is more complex but tells two stories at once.

## Open questions

1. **Pyramid keep or drop?** The pyramid is already deployed in the litepaper / artifact. Replacing it is non-trivial — every diagram, OG card, and existing reader-mental-model would need updating. Alternative: keep pyramid as the canonical glyph and use one of these as a **secondary diagram** that appears alongside the level descriptions.
2. **Single image or per-level glyph?** Each analogy could supply a single overall image (e.g., one iceberg) or a series of glyphs (one per level). Per-level glyphs work better as small-format mnemonics on cards / result pages; single image works better as hero / poster.
3. **Static or animated?** Trail formation, river formation, geological stratification all imply *time*. An animated version (or a multi-stage diagram) could show the progression. More work.
4. **Audience constraint.** Deployment managers vs. SIG members vs. external press read these differently. The pyramid is least controversial (everyone knows it). Iceberg is second-safest. Trail / fault lines start to require explanation.

## What's next

1. Rafa picks 1–3 to develop further (or asks for more options).
2. For the chosen analogy: design the actual SVG glyph + per-level breakdown + how it integrates with the assessment result page (the level badge there could mirror the chosen visual language).
3. Keep pyramid in retired-but-cited state if we move away (footnote: "earlier framings used a pyramid; this is more accurate to how organizations actually move through the levels").
