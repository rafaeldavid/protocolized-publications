"""Score 100 simulated quiz responses against Quiz-v0.8 archetype + dimension scoring."""
import csv
import os
from pathlib import Path

ARCHETYPES = ['Vanguard', 'Traveller', 'Architect', 'Integrator', 'Tinkerer',
              'Ratifier', 'Warden', 'Broker', 'Folkway', 'Guild']
DIMENSIONS = ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7']

# scoring[q_num][pick] = (archetype_deltas_dict, dimension_deltas_dict)
scoring = {
    1: {'A': ({'Traveller': 2, 'Vanguard': 1}, {'D7': 2}),
        'B': ({'Integrator': 1, 'Tinkerer': 1, 'Warden': 1, 'Broker': 1}, {'D7': 1})},
    2: {'A': ({'Vanguard': 2, 'Traveller': 2}, {'D7': 1}),
        'B': ({'Integrator': 1, 'Tinkerer': 1, 'Warden': 1, 'Folkway': 1}, {})},
    3: {'A': ({'Architect': 1, 'Integrator': 1}, {'D5': 1}),
        'B': ({'Broker': 2}, {'D5': -1})},
    4: {'A': ({'Architect': 1}, {'D5': 2}),
        'B': ({'Broker': 2}, {'D5': -2})},
    5: {'A': ({'Architect': 1, 'Traveller': 1, 'Integrator': 1, 'Guild': 1}, {'D5': 1}),
        'B': ({'Folkway': 1, 'Tinkerer': 1, 'Broker': 1}, {'D5': -1})},
    6: {'A': ({'Architect': 2, 'Integrator': 1}, {'D2': 2}),
        'B': ({'Tinkerer': 1, 'Folkway': 1, 'Vanguard': 1}, {'D2': -2})},
    7: {'A': ({'Architect': 1, 'Integrator': 1, 'Traveller': 1, 'Guild': 1}, {'D5': 2}),
        'B': ({'Tinkerer': 1, 'Folkway': 1, 'Warden': 1, 'Broker': 1}, {'D5': -1})},
    8: {'A': ({'Architect': 2, 'Traveller': 1}, {'D6': 2}),
        'B': ({'Vanguard': 1, 'Integrator': 1, 'Tinkerer': 1, 'Ratifier': 1, 'Warden': 1, 'Broker': 1}, {'D6': -1})},
    9: {'A': ({'Vanguard': 1, 'Traveller': 1, 'Tinkerer': 1}, {'D1': -1}),
        'B': ({'Integrator': 1, 'Ratifier': 1, 'Warden': 1}, {'D1': 1, 'D3': 1})},
    10: {'A': ({'Vanguard': 3}, {'D3': -1}),
         'B': ({'Integrator': 2, 'Architect': 2, 'Traveller': 1, 'Vanguard': 1}, {})},
    11: {'A': ({'Integrator': 1, 'Architect': 1, 'Vanguard': 1}, {'D1': 1}),
         'B': ({'Warden': 2}, {'D1': 2})},
    12: {'A': ({'Ratifier': 2}, {}),
         'B': ({'Warden': 2}, {'D1': 1})},
    13: {'A': ({'Architect': 1, 'Integrator': 1, 'Warden': 1}, {'D1': 1}),
         'B': ({'Folkway': 1, 'Guild': 1}, {'D4': -1})},
    14: {'A': ({'Architect': 1, 'Integrator': 1}, {'D4': 2}),
         'B': ({'Folkway': 2}, {'D4': -2})},
    15: {'A': ({'Vanguard': 2, 'Integrator': 1}, {}),
         'B': ({'Traveller': 3}, {'D7': 2, 'D1': 1})},
    16: {'A': ({'Architect': 3}, {'D1': 1, 'D2': 2}),
         'B': ({'Ratifier': 3}, {'D7': -1})},
    17: {'A': ({'Integrator': 3}, {'D1': 1, 'D3': 1}),
         'B': ({'Tinkerer': 3}, {'D3': -1})},
    18: {'A': ({'Folkway': 3}, {'D4': -1, 'D5': -1}),
         'B': ({'Guild': 3}, {'D5': 2, 'D4': -1})},
    19: {'A': ({'Integrator': 2}, {}),
         'B': ({'Warden': 3}, {'D1': 2})},
    20: {'A': ({'Architect': 3}, {'D1': 1, 'D2': 2, 'D5': 1}),
         'B': ({'Integrator': 1, 'Tinkerer': 1, 'Folkway': 1}, {})},
    21: {'A': ({'Guild': 3}, {'D5': 2, 'D4': -1}),
         'B': ({'Integrator': 1, 'Architect': 1, 'Warden': 1}, {'D4': 1})},
    22: {'A': ({'Vanguard': 3}, {'D3': -1}),
         'B': ({'Ratifier': 1, 'Warden': 1, 'Integrator': 1, 'Folkway': 1}, {})},
    23: {'A': ({'Vanguard': 1, 'Integrator': 1, 'Architect': 1, 'Traveller': 1, 'Tinkerer': 1}, {'D7': 1}),
         'B': ({'Ratifier': 3}, {'D7': -1})},
    24: {'A': ({'Architect': 2, 'Integrator': 1}, {'D1': 1, 'D5': 1}),
         'B': ({'Guild': 3}, {'D4': -1, 'D1': -1})},
    25: {'A': ({}, {}),
         'B': ({}, {})}
}

# Simulation data: archetype -> 10 strings of 25 comma-separated picks
sim_data = {
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

def score_picks(picks):
    arch = {a: 0 for a in ARCHETYPES}
    dim = {d: 0 for d in DIMENSIONS}
    flag = False
    for i, pick in enumerate(picks, 1):
        if pick not in ('A', 'B'):
            continue
        rule = scoring[i][pick]
        for a, delta in rule[0].items():
            arch[a] += delta
        for d, delta in rule[1].items():
            dim[d] += delta
        if i == 25 and pick == 'B':
            flag = True
    return arch, dim, flag

def maturity_level(total):
    if total <= 0:
        return 'L1 Shadow'
    if total <= 5:
        return 'L2 Sanctioned'
    if total <= 9:
        return 'L2-3 Transitional'
    if total <= 14:
        return 'L3 Designed'
    return 'L3-4 Approaching Infrastructural'

# Run scoring
results = []
for archetype, iters in sim_data.items():
    for i, picks_str in enumerate(iters, 1):
        picks = picks_str.split(',')
        arch, dim, flag = score_picks(picks)
        sorted_arch = sorted(arch.items(), key=lambda x: -x[1])
        predicted = sorted_arch[0][0]
        total_dim = sum(dim.values())
        level = maturity_level(total_dim)
        match = (predicted == archetype)
        # tied check (top 1 vs top 2 within 20%)
        if sorted_arch[0][1] > 0:
            margin = (sorted_arch[0][1] - sorted_arch[1][1]) / sorted_arch[0][1]
        else:
            margin = 0
        results.append({
            'agent_archetype': archetype,
            'iteration': i,
            'picks': picks_str,
            **{f'Q{j}': picks[j-1] for j in range(1, 26)},
            'predicted_archetype': predicted,
            'match': 'Y' if match else 'N',
            'assigned_score': arch[archetype],
            'predicted_score': sorted_arch[0][1],
            'top1': sorted_arch[0][0], 'top1_score': sorted_arch[0][1],
            'top2': sorted_arch[1][0], 'top2_score': sorted_arch[1][1],
            'top3': sorted_arch[2][0], 'top3_score': sorted_arch[2][1],
            'margin_pct': round(margin * 100, 1),
            'D1': dim['D1'], 'D2': dim['D2'], 'D3': dim['D3'],
            'D4': dim['D4'], 'D5': dim['D5'], 'D6': dim['D6'], 'D7': dim['D7'],
            'maturity_total': total_dim,
            'maturity_level': level,
            'attention_flag': 'Y' if flag else 'N',
        })

# Write CSV
out_dir = Path('/Users/rafa/Documents/protocols/protocolized-publications/ai-capability-maturity-model/_Product/Assessment-v2-Design/test-results')
csv_path = out_dir / 'Quiz-v0.8-simulation-data.csv'

cols = ['agent_archetype', 'iteration'] + [f'Q{j}' for j in range(1, 26)] + [
    'predicted_archetype', 'match', 'assigned_score', 'predicted_score',
    'top1', 'top1_score', 'top2', 'top2_score', 'top3', 'top3_score', 'margin_pct',
    'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'maturity_total', 'maturity_level',
    'attention_flag', 'picks']

with open(csv_path, 'w', newline='') as f:
    w = csv.DictWriter(f, fieldnames=cols)
    w.writeheader()
    for r in results:
        w.writerow(r)

# Also print summary
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
        print(f"  {r['agent_archetype']} iter {r['iteration']}: predicted {r['predicted_archetype']} ({r['predicted_score']}) vs assigned {r['assigned_score']} (top3: {r['top1']}={r['top1_score']}, {r['top2']}={r['top2_score']}, {r['top3']}={r['top3_score']})")
print()
print("Maturity level by archetype:")
for archetype in ARCHETYPES:
    arch_results = [r for r in results if r['agent_archetype'] == archetype]
    levels = [r['maturity_level'] for r in arch_results]
    avg_total = sum(r['maturity_total'] for r in arch_results) / len(arch_results)
    print(f"  {archetype}: avg total {avg_total:.1f}, levels: {sorted(set(levels))}")
print()
print("Mean margin (top1 vs top2) by archetype:")
for archetype in ARCHETYPES:
    arch_results = [r for r in results if r['agent_archetype'] == archetype]
    avg_margin = sum(r['margin_pct'] for r in arch_results) / len(arch_results)
    print(f"  {archetype}: {avg_margin:.1f}%")
