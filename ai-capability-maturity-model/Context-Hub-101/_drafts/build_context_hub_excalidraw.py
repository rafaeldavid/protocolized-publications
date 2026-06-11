"""Generate the Context Hub 101 Section-01 diagram as an editable .excalidraw file.

Rebuilds the shipped "Version B" diagram (source systems -> hub -> AI tools, with
two-way retrieval, live read/write, per-agent local context, and a gated
feedback loop) using the excalidraw-author skill's primitives.

    python3 build_context_hub_excalidraw.py

Writes context-hub.excalidraw next to this script. Open it in excalidraw.com
via File -> Open (Cmd+O), then export to SVG/PNG to embed on the page.
Library: github.com/nintynick/excalidraw-skill (vendored as excalidraw.py).
"""

import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

from excalidraw import Scene  # noqa: E402

# Site palette
INK, MID, FAINT = "#1a1a2e", "#4f5060", "#9b9ba8"
ACC, ACC_DK, ACC_LT = "#a888bf", "#7d5a96", "#f3eef7"
GREY, SKY, POOL_INK = "#b6b6c2", "#7d9bb0", "#8a7a9b"
SRC_STROKE, SRC_BG = "#b6b6c2", "#ffffff"
TOOL_STROKE, TOOL_BG = "#7d9bb0", "#e9eef2"
POOL_STROKE, POOL_BG = "#cdbcdc", "#faf7fc"


def main():
    s = Scene()

    # (Title/subtitle intentionally omitted — the page section heading and the
    #  figure caption already carry them; the diagram stays label-only.)

    # ---- Live read/write channel (two-way, across the top) -------------
    s.arrow_path([(245, 168), (560, 138), (905, 168)], stroke_color=SKY, stroke_width=1.6,
                 start_arrowhead="arrow", end_arrowhead="arrow")
    s.text(380, 112, "live read & write  ·  access-controlled", font_size=12, color=SKY,
           font="helvetica", align="center", width=360)

    # ---- Source systems (left column) ----------------------------------
    srcs = ["CRM & pipeline", "Messaging (Slack/Teams)", "Client meetings",
            "Email archive", "Shared drives", "Plans & procedures"]
    SX, SW, SH, sy0, sgap = 0, 235, 54, 210, 80
    src_nodes = []
    for i, lbl in enumerate(srcs):
        n, _ = s.node(SX, sy0 + i * sgap, SW, SH, lbl, shape="rectangle",
                      stroke_color=SRC_STROKE, background_color=SRC_BG,
                      text_color=INK, font_size=15)
        src_nodes.append(n)

    # ---- Hub (center) --------------------------------------------------
    HX, HY, HW, HH = 390, 250, 300, 392
    hub = s.rect(HX, HY, HW, HH, stroke_color=ACC, background_color=ACC_LT,
                 stroke_width=2, rounded=True)

    def hub_line(dy, text, size, color):
        s.text(HX, HY + dy, text, font_size=size, color=color, font="helvetica",
               align="center", width=HW)

    hub_line(24, "CONTEXT HUB", 20, ACC_DK)
    hub_line(62, "curated & deduplicated", 13, MID)
    hub_line(86, "tiered by trust", 13, MID)
    hub_line(110, "optimized for machine retrieval", 13, MID)
    hub_line(152, "holds durable context, e.g.", 12, FAINT)
    hub_line(180, "brand voice · design tokens", 12, MID)
    hub_line(202, "model portfolios · disclosure rules", 12, MID)
    hub_line(224, "meeting history · runbooks", 12, MID)
    hub_line(246, "approval rules", 12, MID)
    hub_line(290, "live state stays in the source —", 11, FAINT)
    hub_line(308, "queried, not stored", 11, FAINT)

    # ---- AI tools (right column) + per-agent local context -------------
    tools = ["Drafting assistant", "Exception-queue agent", "Research assistant"]
    TX, TW, TH, ty0, tgap = 820, 250, 54, 210, 132
    tool_nodes = []
    for i, lbl in enumerate(tools):
        ty = ty0 + i * tgap
        n, _ = s.node(TX, ty, TW, TH, lbl, shape="rectangle",
                      stroke_color=TOOL_STROKE, background_color=TOOL_BG,
                      text_color=INK, font_size=15)
        tool_nodes.append(n)
        pw, ph = 190, 30
        px, py = TX + (TW - pw) / 2, ty + TH + 16
        pool = s.rect(px, py, pw, ph, stroke_color=POOL_STROKE,
                      background_color=POOL_BG, rounded=True)
        s.text(px, py + 7, "local context", font_size=11, color=POOL_INK,
               font="helvetica", align="center", width=pw)
        s.connect(n, pool, start_arrowhead="arrow", end_arrowhead="arrow",
                  stroke_color=POOL_STROKE, stroke_width=1.4, gap=2)

    # ---- Ingest: sources -> hub ----------------------------------------
    for n in src_nodes:
        s.connect(n, hub, stroke_color=GREY, stroke_width=1.5, end_arrowhead="arrow")
    s.text(250, 188, "ingest · slow-moving", font_size=12, color=FAINT, font="helvetica")

    # ---- Retrieval: tools <-> hub (two-way) ----------------------------
    for n in tool_nodes:
        s.connect(n, hub, start_arrowhead="arrow", end_arrowhead="arrow",
                  stroke_color=ACC, stroke_width=1.8)
    s.text(700, 188, "retrieval (two-way)", font_size=12, color=FAINT, font="helvetica")

    # ---- Feedback through an owner-review gate (routed BELOW the hub) ---
    GX, GY, GW, GH = 430, 724, 170, 44
    gate = s.rect(GX, GY, GW, GH, stroke_color=POOL_STROKE, background_color="#ffffff",
                  rounded=True)
    s.text(GX, GY + 13, "owner review (gated)", font_size=12, color=ACC_DK,
           font="helvetica", align="center", width=GW)
    # tools -> gate: down the right side, then left along the bottom (clears the hub)
    s.arrow_path([(1055, 528), (1055, 746), (GX + GW, GY + GH / 2)],
                 stroke_color=ACC, stroke_width=1.6, end_arrowhead="arrow")
    s.text(820, 732, "verified lessons", font_size=12, color=ACC_DK, font="helvetica")
    # gate -> hub: straight up into the hub's bottom edge
    s.arrow_path([(GX + GW / 2, GY), (GX + GW / 2, HY + HH)],
                 stroke_color=ACC, stroke_width=1.6, end_arrowhead="arrow")

    # ---- Legend --------------------------------------------------------
    LX, LY = 0, 690
    s.text(LX, LY, "Legend", font_size=16, color=INK, font="helvetica")
    legend = [
        ("ingest (slow-moving)", GREY),
        ("retrieval (two-way)", ACC),
        ("live read / write", SKY),
        ("promote (gated)", ACC_DK),
        ("local context (per agent)", POOL_INK),
    ]
    for i, (label, color) in enumerate(legend):
        y = LY + 30 + i * 24
        s.line(LX, y + 8, LX + 26, y + 8, stroke_color=color, stroke_width=2)
        s.text(LX + 36, y, label, font_size=12, color=MID, font="helvetica")

    # ---- Sloppiness: hand-drawn wobble on shapes/arrows (text stays clean)
    ROUGHNESS = 1  # 0 = architect (smooth), 1 = artist, 2 = cartoonist
    for el in s.elements:
        if el.get("type") in ("rectangle", "ellipse", "diamond", "line", "arrow"):
            el["roughness"] = ROUGHNESS

    for w in s.check_overlaps():
        print("LAYOUT WARNING:", w, file=sys.stderr)

    out = os.path.join(HERE, "context-hub.excalidraw")
    s.save(out)
    print("Wrote", out)


if __name__ == "__main__":
    main()
