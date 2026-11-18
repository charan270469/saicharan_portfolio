# Decision Log

## Append-only. Newest entries at the top. Do not edit or delete past entries.

### [2026-11-18 11:08] Viewport-fit responsive hero
- Agent: Copilot
- What changed: Updated desktop hero scaling, frame placement, and glow radius in `src/VisualDesigner.tsx`.
- Why: The hero frame and glow were clipped or poorly sized across screen dimensions instead of matching the intended full-screen composition.
- Approach chosen: Scale against viewport dimensions and the actual frame footprint, then reduce the desktop outer glow so the frame and glow remain visible.
- Alternatives considered: Rebuilding the hero with responsive CSS units would require changing the established composition; the viewport-scaled canvas preserves it.
- Trade-offs / risks: Desktop glow is tighter; smaller screens scale the existing composition down proportionally, while mobile keeps its stacked layout.

### [2026-11-17 22:06] Compact mobile hero section

- Agent: Copilot
- What changed: Reduced mobile hero top/inner padding, portrait stage height, and vertical gaps in `src/VisualDesigner.tsx`.
- Why: The evaluator found the bottom of the glowing frame below the initial viewport at narrow screen sizes.
- Approach chosen: Shortened the stacked mobile composition and moved it upward while keeping content and desktop sizing unchanged.
- Alternatives considered: Leaving the longer hero scrollable would not satisfy the initial-viewport requirement; reducing text sizes would harm legibility.
- Trade-offs / risks: The mobile portrait area is shorter, while the full image and text remain visible within the frame.

### [2026-11-17 21:53] Responsive hero framing

- Agent: Copilot
- What changed: Updated desktop hero scaling and mobile portrait/glow sizing in `src/VisualDesigner.tsx` and `src/BorderGlow.css`; added `FLOW.md` and this log.
- Why: The oversized frame and portrait were clipped at viewport edges, and mobile glow overflow widened the scroll area.
- Approach chosen: Scale the desktop canvas to include the frame and glow extents; constrain the mobile portrait and reduce only its outer glow; document the current app flow.
- Alternatives considered: Moving or shrinking the frame itself would alter the composition; changing global overflow behavior could affect other sections.
- Trade-offs / risks: Mobile outer glow is intentionally subtler; the stacked mobile hero remains vertically scrollable.
