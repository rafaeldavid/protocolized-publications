"""Score 100 simulated quiz responses against Quiz-v0.9 hierarchical placement.

Re-uses the v0.8 simulation data, remapped to v0.9 question structure (24 items).
The mapping: v0.8 Q1-Q25 → v0.9 Q1-Q24 with 3 trims (v0.8 Q3, Q21, Q22), 2 adds (v0.9 Q22, Q23 Broker), and 1 reframe (v0.8 Q16 → v0.9 Q15).
"""
import csv
from pathlib import Path

ARCHETYPES = ['Vanguard', 'Traveller', 'Architect', 'Integrator', 'Tinkerer',
              'Ratifier', 'Warden', 'Broker', 'Folkway', 'Guild']

# ============================================================================
# v0.8 simulation data (copied from score_simulations.py)
# ============================================================================
sim_data_v08 = {
    'Vanguard': [
        'A,A,A,A,A,B,B,A,A,A,A,A,A,A,A,A,B,B,A,A,B,A,A,A,A',
        'A,A,A,A,A,B,A,A,A,B,A,A,A,A,A,A,A,B,A,A,B,B,A,A,A',
        'B,A,A,A,A,B,B,B,A,A,A,A,A,A,A,A,B,B,A,A,B,A,A,A,A',
        'A,A,A,A,B,B,B,B,A,A,A,A,A,B,A,A,B,A,A,B,B,A,A,B,A',
        'A,A,A,A,B,B,B,B,A,A,A,A,A,B,A,A,B,B,A,B,A,A,A,B,A',
        'B,A,A,A,A,A,A,A,A,B,A,A,A,A,A,A,A,B,A,A,B,B,A,A,A',
        'A,A,A,A,A,B,B,B,A,A,A,A,A,A,A,A,B,B,A,A,B,A,A,A,A',
        'A,A,A,A,A,B,B,A,A,A,A,A,A,A,A,A,B,B,A,A,B,A,A,B,A',
        'A,A,A,A,B,B,B,B,A,A,A,A,A,B,A,A,B,B,A,B,A,A,A,B,A',
        'A,A,A,A,A,B,A,A,A,B,A,A,A,A,A,A,A,B,A,A,B,B,A,A,A',
    ],
    'Traveller': [
        'A,A,A,A,A,A,A,A,A,B,A,A,A,A,B,A,A,B,A,A,A,A,A,A,A',
        'A,A,A,A,A,A,A,A,A,A,A,A,A,A,B,A,B,B,A,A,A,A,A,A,A',
        'A,A,A,A,A,A,A,A,A,B,A,A,A,A,B,A,A,B,A,B,A,A,A,B,A',
        'A,A,A,A,A,A,A,A,A,B,A,A,A,A,B,A,A,B,A,A,A,A,A,A,A',
        'A,A,A,A,A,B,A,A,A,A,A,A,B,A,B,A,B,B,A,B,A,A,A,B,A',
        'A,A,A,A,A,A,A,A,A,B,A,A,A,A,B,A,A,B,A,A,A,B,A,A,A',
        'A,A,A,A,A,A,A,A,A,B,A,A,A,A,B,A,B,B,A,A,A,A,A,B,A',
        'A,A,A,B,A,A,A,A,A,B,A,A,A,A,B,A,A,B,A,A,A,A,A,A,A',
        'A,A,A,A,A,A,A,A,A,A,A,A,B,B,B,A,B,B,A,B,A,B,A,B,A',
        'A,A,A,A,A,A,A,A,A,B,A,A,A,A,B,A,A,B,A,A,A,A,A,A,A',
    ],
    'Architect': [
        'A,B,A,A,A,A,A,A,B,B,A,A,A,A,A,A,A,A,A,A,B,B,A,A,A',
        'A,A,A,A,A,A,A,A,B,B,A,A,A,A,A,A,A,A,A,A,B,B,A,A,A',
        'A,B,A,A,A,A,A,B,B,B,A,A,A,A,A,A,A,A,A,A,B,B,A,A,A',
        'A,A,A,A,A,A,A,A,B,A,A,A,A,A,A,A,A,A,A,A,B,B,A,A,A',
        'A,B,A,A,A,A,A,A,B,B,A,A,A,A,A,A,A,B,A,A,B,B,A,A,A',
        'A,A,A,A,A,A,A,A,B,B,A,A,A,A,A,A,A,A,A,A,A,B,A,A,A',
        'A,B,A,A,A,B,A,A,B,B,A,A,A,A,A,A,A,A,A,A,B,B,A,A,A',
        'A,A,A,B,A,A,A,A,B,B,A,A,A,A,A,A,A,A,A,A,B,B,A,A,A',
        'A,B,A,A,A,A,A,A,B,B,A,A,B,A,A,A,A,A,A,A,B,B,A,A,A',
        'A,A,A,A,A,A,A,A,B,B,A,A,A,A,A,A,A,A,A,B,B,B,A,A,A',
    ],
    'Integrator': [
        'B,B,A,A,A,A,A,B,B,B,A,A,A,A,A,B,A,A,A,B,B,B,A,A,A',
        'B,B,A,B,A,A,A,B,B,B,A,A,A,A,A,B,A,A,A,B,B,B,A,A,A',
        'B,B,A,A,A,A,A,B,B,B,A,A,A,A,A,B,A,B,A,B,B,B,A,A,A',
        'B,A,A,A,A,A,A,B,B,B,A,A,A,A,A,B,A,A,A,A,B,B,A,A,A',
        'B,B,A,A,B,A,A,B,B,B,A,A,A,A,A,B,A,A,A,B,B,B,A,A,A',
        'B,B,B,B,B,A,A,B,B,B,A,A,A,B,A,B,A,A,A,B,B,B,A,A,A',
        'B,B,A,A,A,B,A,B,B,B,A,A,A,A,A,B,A,A,A,B,A,B,A,A,A',
        'A,A,A,A,A,A,A,A,B,B,A,A,A,A,A,B,A,A,A,A,B,B,A,A,A',
        'B,B,A,A,A,A,A,B,B,B,A,A,B,A,A,B,A,B,A,B,B,B,A,A,A',
        'B,B,A,A,A,A,A,B,B,B,A,A,A,A,A,B,A,A,A,B,B,A,A,A,A',
    ],
    'Tinkerer': [
        'B,A,A,B,B,B,B,B,A,A,A,A,A,B,A,A,B,A,A,B,A,A,A,B,A',
        'B,B,A,B,B,B,B,B,A,A,A,A,A,B,A,A,B,B,A,B,B,A,A,B,A',
        'B,A,A,B,A,B,B,B,A,A,A,A,A,A,A,A,B,A,A,B,A,A,A,A,A',
        'B,A,A,B,B,B,B,B,A,A,A,A,A,B,A,A,B,A,A,A,A,A,A,B,A',
        'B,B,A,B,B,B,B,B,A,A,A,A,A,B,A,B,B,A,A,B,A,A,A,B,A',
        'B,A,A,A,A,B,A,B,A,A,A,A,A,B,A,A,B,B,A,B,B,B,A,A,A',
        'B,A,A,B,B,A,B,B,A,A,A,A,A,A,A,A,B,A,A,B,A,A,A,B,A',
        'B,B,A,B,B,B,B,B,A,B,A,A,A,B,A,A,B,B,A,B,A,A,A,B,A',
        'B,A,A,B,A,B,B,A,A,A,A,A,A,B,A,A,B,A,A,B,A,A,A,B,A',
        'B,A,A,B,B,B,B,B,A,A,A,A,A,A,A,A,B,A,A,B,B,A,A,A,A',
    ],
    'Ratifier': [
        'B,B,A,A,A,A,A,B,B,B,A,A,A,A,A,B,A,A,A,B,B,B,B,A,A',
        'B,B,A,A,A,A,A,B,B,B,A,A,A,A,A,B,A,A,A,B,B,B,B,A,A',
        'B,B,A,A,A,A,A,B,B,B,A,A,A,A,A,B,A,A,A,B,B,B,B,A,A',
        'B,B,A,A,A,A,A,B,B,B,A,A,A,A,A,B,A,B,A,B,B,B,B,A,A',
        'B,B,A,A,A,A,A,B,B,A,A,A,A,A,A,B,A,A,A,B,A,B,B,B,A',
        'B,B,A,A,A,A,A,B,B,B,A,A,A,B,A,B,A,A,A,B,B,B,B,A,A',
        'B,B,A,A,A,A,A,B,B,B,A,A,A,A,A,B,A,A,A,B,B,B,B,A,A',
        'B,B,A,A,A,A,A,A,B,B,A,A,A,A,A,B,A,A,B,B,B,B,B,A,A',
        'B,B,A,B,A,A,A,B,B,B,A,A,B,A,A,A,A,A,A,B,B,B,B,B,A',
        'B,B,A,A,A,A,A,B,B,B,A,A,A,A,A,B,A,A,A,B,B,A,A,A,A',
    ],
    'Warden': [
        'B,B,A,A,B,B,A,A,B,A,B,B,A,A,A,B,A,A,B,A,B,B,A,A,A',
        'B,B,B,B,B,B,A,A,B,B,B,B,A,A,A,B,A,A,B,B,B,B,A,A,A',
        'B,B,A,A,A,B,A,A,B,A,B,B,A,A,A,B,A,B,B,A,A,B,A,A,A',
        'B,B,B,B,A,B,A,A,B,A,B,B,A,A,A,B,A,A,B,B,B,B,A,A,A',
        'B,B,A,A,B,B,A,A,B,B,B,B,A,B,A,B,A,A,B,A,A,B,A,B,A',
        'B,B,A,A,A,B,A,A,B,A,B,B,A,A,A,B,A,A,B,A,B,B,A,A,A',
        'B,B,B,B,B,B,A,A,B,A,B,B,A,A,A,B,A,B,B,B,B,B,A,A,A',
        'B,B,A,B,B,A,A,A,B,A,B,B,A,A,A,B,A,A,B,A,A,B,A,A,A',
        'B,B,A,A,A,B,A,A,B,A,B,B,B,A,A,A,A,A,B,A,B,B,A,A,A',
        'B,B,B,B,B,B,A,A,B,A,B,B,A,B,A,B,A,A,B,B,B,B,B,A,A',
    ],
    'Broker': [
        'B,B,B,B,B,B,B,B,B,B,A,A,A,A,A,B,A,A,A,B,B,B,A,A,A',
        'B,B,B,B,B,A,B,B,B,B,A,A,A,A,A,B,A,A,A,B,B,B,A,A,A',
        'B,A,B,B,B,B,B,B,B,B,A,A,A,B,A,B,A,A,A,B,B,B,A,A,A',
        'B,B,B,B,A,B,A,B,B,B,A,A,A,A,A,B,A,B,A,B,B,B,A,A,A',
        'B,B,B,B,B,B,B,B,B,B,A,A,A,A,A,B,A,A,B,B,A,B,A,A,A',
        'B,B,B,B,B,B,B,A,B,B,A,B,A,A,A,B,A,A,B,B,B,B,A,A,A',
        'B,B,B,B,B,B,B,B,B,B,B,B,A,A,A,B,A,A,B,B,B,B,A,A,A',
        'B,B,B,A,B,B,B,B,B,B,A,A,A,A,A,B,A,A,A,A,B,B,A,A,A',
        'B,A,B,B,B,B,B,B,B,B,A,A,A,B,A,B,A,A,A,B,B,B,A,B,A',
        'B,B,B,B,B,B,A,B,B,B,A,A,B,A,A,B,A,A,A,B,B,B,A,A,A',
    ],
    'Folkway': [
        'B,B,A,A,B,B,B,B,B,A,A,A,B,B,A,B,B,A,A,B,B,B,A,B,A',
        'B,B,A,A,B,B,B,B,B,A,A,A,B,B,A,B,B,A,A,B,B,A,A,B,A',
        'B,B,A,A,B,B,B,B,B,B,A,A,B,B,A,B,A,A,A,B,B,B,A,B,A',
        'B,B,A,A,B,B,B,B,B,A,A,B,B,B,A,B,B,A,B,B,B,B,A,B,A',
        'B,B,B,B,B,B,B,B,B,A,A,A,B,B,A,B,A,A,A,B,B,B,A,B,A',
        'B,B,A,A,B,B,B,B,B,A,A,A,B,B,A,B,B,A,A,B,A,B,A,B,A',
        'B,B,A,A,B,B,B,B,B,A,A,A,B,B,A,B,B,A,A,B,B,B,B,B,A',
        'B,B,A,A,B,A,B,B,A,A,A,A,B,B,A,B,B,A,A,B,B,B,A,B,A',
        'B,B,A,A,B,B,B,B,B,A,A,A,B,B,A,B,B,A,A,B,B,A,A,B,A',
        'B,B,A,B,B,B,B,B,B,A,A,A,B,B,A,B,B,A,A,B,B,B,A,B,A',
    ],
    'Guild': [
        'B,B,A,A,A,B,A,B,B,A,A,A,B,B,B,B,A,B,A,B,A,B,A,B,A',
        'B,B,A,A,A,B,A,B,B,A,A,A,B,B,A,B,A,B,A,B,A,B,A,B,A',
        'B,B,A,A,B,B,A,B,B,A,A,A,B,B,B,B,B,B,A,B,A,B,A,B,A',
        'B,B,A,A,A,B,A,B,A,A,A,A,B,B,B,B,A,B,A,B,A,A,A,B,A',
        'B,B,A,A,A,A,A,B,B,A,A,A,B,B,B,B,A,B,A,B,A,B,A,A,A',
        'B,B,B,B,B,B,A,B,B,A,A,A,B,B,B,B,A,B,A,B,A,B,A,B,A',
        'B,B,A,A,A,B,A,B,B,B,A,A,B,B,B,B,A,B,A,B,A,B,A,B,A',
        'B,B,A,A,A,B,B,B,B,A,A,A,B,B,B,B,B,B,A,B,A,B,A,B,A',
        'B,B,A,A,A,B,A,B,B,A,A,A,A,B,B,B,A,B,A,B,A,B,A,B,A',
        'B,B,A,A,A,B,A,B,B,A,A,A,B,A,B,B,A,B,A,B,A,B,A,B,A',
    ],
}

# ============================================================================
# Remap v0.8 picks to v0.9 picks
# ============================================================================
# v0.9 question → v0.8 source question
DIRECT_MAP = {
    1: 1, 2: 2,
    3: 4, 4: 5,
    5: 6, 6: 7, 7: 8,
    8: 9, 9: 10,
    10: 11, 11: 12,
    12: 13, 13: 14,
    14: 15,
    # 15 — semantic reframe of v0.8 Q16; recompute by archetype
    16: 17, 17: 18,
    18: 20, 19: 19,
    20: 23, 21: 24,
    # 22, 23 — NEW (Broker signatures); fill by archetype
    24: 25,  # attention
}

def remap(picks_v08, archetype):
    picks_v09 = [None] * 24
    for v09_q, v08_q in DIRECT_MAP.items():
        picks_v09[v09_q - 1] = picks_v08[v08_q - 1]
    # Q15: v0.8 Q16 reframed (Architect vs. Integrator). Recompute by archetype intent.
    if archetype == 'Integrator':
        picks_v09[14] = 'B'
    elif archetype in ('Ratifier', 'Warden', 'Broker', 'Folkway'):
        picks_v09[14] = 'B'
    else:
        picks_v09[14] = 'A'
    # Q22 (Broker capability locus)
    picks_v09[21] = 'B' if archetype == 'Broker' else 'A'
    # Q23 (Broker roadmap source)
    picks_v09[22] = 'B' if archetype == 'Broker' else 'A'
    return picks_v09

# ============================================================================
# Hierarchical scoring
# ============================================================================
def signed(pick):
    return 1 if pick == 'A' else -1

def axis_scores(p):
    """p is dict {q_num: 'A'|'B'} for v0.9 questions 1-24."""
    return {
        'origin': 2 * signed(p[12]) + 1 * signed(p[13]),
        'stake': 2 * signed(p[1]) + 1 * signed(p[2]),
        'timing': 2 * signed(p[8]) + 1 * signed(p[9]),
        'locus': 2 * signed(p[3]) + 1 * signed(p[4]) + 2 * signed(p[22]) + 1 * signed(p[23]),
        'driver': 2 * signed(p[10]) + 1 * signed(p[11]) + 2 * signed(p[19]),
    }

def classify(picks_v09):
    p = {i+1: picks_v09[i] for i in range(24)}
    axes = axis_scores(p)

    # Branch 1: Origin
    if axes['origin'] < 0:
        # Emergent → Folkway or Guild (Q17)
        return 'Guild' if p[17] == 'B' else 'Folkway'

    # Strategic

    # Special pre-quadrant check: Ratifier signature
    # Ratifiers signal "waiting for next generation" (Q20B), strongly Behind timing,
    # and Chosen driver (waiting by choice not by constraint).
    # This catches Ratifiers whose Stake reads as Augmentation during their waiting
    # period (because they haven't deployed Architecture-level AI yet, by definition).
    if p[20] == 'B' and axes['timing'] < 0 and axes['driver'] >= 0:
        return 'Ratifier'

    # Branch 2: Stake × Timing
    arch = axes['stake'] > 0
    ahead = axes['timing'] > 0

    if arch and ahead:
        # Architecture × Ahead → Vanguard or Traveller (Q14)
        return 'Vanguard' if p[14] == 'A' else 'Traveller'
    if arch and not ahead:
        # Architecture × Behind → Architect or Ratifier (Q20)
        return 'Architect' if p[20] == 'A' else 'Ratifier'
    if not arch and ahead:
        # Augmentation × Ahead → Tinkerer
        return 'Tinkerer'
    # Augmentation × Behind → Integrator, Warden, or Broker
    # Resolver hierarchy:
    # 1) If strongly external (Q22B + Q23B), Broker
    # 2) If strongly constrained (Driver < -1), Warden
    # 3) Else, Integrator
    if p[22] == 'B' and p[23] == 'B':
        return 'Broker'
    if axes['locus'] < -2:
        return 'Broker'
    if axes['driver'] < -1:
        return 'Warden'
    if p[19] == 'B' and axes['driver'] < 0:
        return 'Warden'
    return 'Integrator'

# ============================================================================
# Maturity scoring (decoupled, deployment-anchored)
# ============================================================================
def deployment_density(p):
    """D7 + D4 signals"""
    d7 = 0
    # Q1A: D7+2
    d7 += 2 if p[1] == 'A' else 1  # B still gives some D7 since Augmentation is deployment too
    # Actually B should give D7 +1 not +2, A gives +2
    d7 = 2 if p[1] == 'A' else 1
    # Q2A: D7+1
    d7 += 1 if p[2] == 'A' else 0
    # Q14B (Traveller greenfield): D7+2
    if p[14] == 'B':
        d7 += 2
    # Q20A (deploying today): D7+1
    if p[20] == 'A':
        d7 += 1
    elif p[20] == 'B':
        d7 -= 2  # Ratifier: not deploying

    # D4 signals
    d4 = 0
    if p[13] == 'A':
        d4 += 2
    else:
        d4 -= 2
    if p[21] == 'A':
        d4 += 1
    else:
        d4 -= 1

    return d7 + d4

def governance_density(p):
    """D1 + D2 + D3 + D5 + D6 signals"""
    g = 0
    # D1
    if p[8] == 'A':
        g -= 1
    else:
        g += 1
    if p[10] == 'B':
        g += 2
    if p[11] == 'B':
        g += 1
    if p[19] == 'B':
        g += 2
    if p[18] == 'A':
        g += 1
    if p[15] == 'A':
        g += 1
    if p[15] == 'B':
        g += 1
    if p[21] == 'A':
        g += 1
    elif p[21] == 'B':
        g -= 1

    # D2
    if p[5] == 'A':
        g += 2
    else:
        g -= 1
    if p[18] == 'A':
        g += 2
    if p[15] == 'A':
        g += 2

    # D3
    if p[8] == 'A':
        g -= 1
    else:
        g += 1
    if p[9] == 'A':
        g -= 1
    else:
        g += 1
    if p[16] == 'A':
        g -= 1
    else:
        g += 1

    # D5
    if p[3] == 'A':
        g += 2
    else:
        g -= 2
    if p[4] == 'A':
        g += 1
    else:
        g -= 1
    if p[6] == 'A':
        g += 2
    else:
        g -= 1
    if p[18] == 'A':
        g += 1

    # D6
    if p[7] == 'A':
        g += 2
    else:
        g -= 1

    return g

def maturity_level(p):
    """Deployment-anchored maturity. Governance multiplies maturity ONLY when deployment exists.

    No deployment = L1 regardless of governance density (fixes Warden/Ratifier inflation).
    """
    deployment = deployment_density(p)
    governance = governance_density(p)

    # Floor: no deployment → L1
    if deployment <= 0:
        return 'L1 Shadow', deployment, governance

    if deployment <= 2:
        if governance >= 8:
            return 'L2 Sanctioned (governance-led, deployment thin)', deployment, governance
        return 'L1-L2 (early deployment)', deployment, governance

    if deployment <= 5:
        if governance >= 10:
            return 'L2-3 Transitional', deployment, governance
        if governance >= 5:
            return 'L2 Sanctioned', deployment, governance
        return 'L2 (deployment-led, low governance — reversal risk)', deployment, governance

    if deployment <= 8:
        if governance >= 12:
            return 'L3 Designed', deployment, governance
        if governance >= 6:
            return 'L2-3 Transitional', deployment, governance
        return 'L2 (high deployment, weak governance — reversal risk)', deployment, governance

    # very high deployment (> 8)
    if governance >= 14:
        return 'L3-4 Approaching Infrastructural', deployment, governance
    if governance >= 8:
        return 'L3 Designed', deployment, governance
    return 'L3 (deployment-heavy, governance-thin)', deployment, governance

# ============================================================================
# Run scoring
# ============================================================================
results = []
for archetype, iters in sim_data_v08.items():
    for i, picks_str in enumerate(iters, 1):
        picks_v08 = picks_str.split(',')
        picks_v09 = remap(picks_v08, archetype)
        p = {idx + 1: picks_v09[idx] for idx in range(24)}
        axes = axis_scores(p)
        predicted = classify(picks_v09)
        level, deployment, governance = maturity_level(p)
        match = predicted == archetype
        # borderline detection
        borderline = abs(axes['origin']) <= 1 or abs(axes['stake']) <= 1 or abs(axes['timing']) <= 1
        results.append({
            'agent_archetype': archetype,
            'iteration': i,
            **{f'Q{j}': picks_v09[j-1] for j in range(1, 25)},
            'predicted_archetype': predicted,
            'match': 'Y' if match else 'N',
            'origin': axes['origin'],
            'stake': axes['stake'],
            'timing': axes['timing'],
            'locus': axes['locus'],
            'driver': axes['driver'],
            'deployment': deployment,
            'governance': governance,
            'maturity_level': level,
            'borderline': 'Y' if borderline else 'N',
            'attention_flag': 'Y' if picks_v09[23] == 'B' else 'N',
            'picks_v09': ','.join(picks_v09),
        })

# Write CSV
out_dir = Path('/Users/rafa/Documents/protocols/protocolized-publications/ai-capability-maturity-model/_Product/Assessment-v2-Design/test-results')
csv_path = out_dir / 'Quiz-v0.9-simulation-data.csv'

cols = ['agent_archetype', 'iteration'] + [f'Q{j}' for j in range(1, 25)] + [
    'predicted_archetype', 'match', 'origin', 'stake', 'timing', 'locus', 'driver',
    'deployment', 'governance', 'maturity_level', 'borderline', 'attention_flag', 'picks_v09']

with open(csv_path, 'w', newline='') as f:
    w = csv.DictWriter(f, fieldnames=cols)
    w.writeheader()
    for r in results:
        w.writerow(r)

# Summary
print(f"Wrote {csv_path}")
print(f"Total simulations: {len(results)}")
matches = sum(1 for r in results if r['match'] == 'Y')
print(f"Match rate: {matches}/{len(results)} = {matches}%")
print()
print("Per-archetype match rate:")
for archetype in ARCHETYPES:
    arch_results = [r for r in results if r['agent_archetype'] == archetype]
    arch_matches = sum(1 for r in arch_results if r['match'] == 'Y')
    print(f"  {archetype}: {arch_matches}/10")
print()
print("Mismatches detail:")
for r in results:
    if r['match'] == 'N':
        print(f"  {r['agent_archetype']} iter {r['iteration']}: predicted {r['predicted_archetype']} (origin={r['origin']}, stake={r['stake']}, timing={r['timing']}, locus={r['locus']}, driver={r['driver']})")
print()
print("Maturity level by archetype:")
for archetype in ARCHETYPES:
    arch_results = [r for r in results if r['agent_archetype'] == archetype]
    levels = sorted(set(r['maturity_level'] for r in arch_results))
    avg_dep = sum(r['deployment'] for r in arch_results) / len(arch_results)
    avg_gov = sum(r['governance'] for r in arch_results) / len(arch_results)
    print(f"  {archetype}: avg deployment {avg_dep:.1f}, governance {avg_gov:.1f}")
    for lvl in levels:
        count = sum(1 for r in arch_results if r['maturity_level'] == lvl)
        print(f"    {count}× {lvl}")
print()
print(f"Borderline rate: {sum(1 for r in results if r['borderline']=='Y')}/100")
