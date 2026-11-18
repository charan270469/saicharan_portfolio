# Decision Log
Append-only. Newest entries at the top. Do not edit or delete past entries.
---

### [2026-11-18 11:56] Viewport-fit responsive hero
- Agent: Copilot
- What changed: Updated desktop hero scaling, frame placement, and glow radius in `src/VisualDesigner.tsx`.
- Why: The hero frame and glow were clipped or poorly sized across screen dimensions instead of matching the intended full-screen composition.
- Approach chosen: Scale against viewport dimensions and the actual frame footprint, then reduce the desktop outer glow so the frame and glow remain visible.
- Alternatives considered: Rebuilding the hero with responsive CSS units would require changing the established composition; the viewport-scaled canvas preserves it.
- Trade-offs / risks: Desktop glow is tighter; smaller screens scale the existing composition down proportionally, while mobile keeps its stacked layout.
