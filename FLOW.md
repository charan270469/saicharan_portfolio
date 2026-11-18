# App Runtime Flow

1. The browser loads `index.html`; `src/main.tsx` mounts the React app and global styles, rendering `VisualDesigner`.
2. `VisualDesigner` shows the `LoadingScreen`; after its display completes, the portfolio content appears.
3. A resize handler selects the mobile layout below 1024px or scales the desktop composition to fit. The home hero and fixed navigation provide the portfolio intro and section links.
4. Visitors can open the About modal, scroll to Projects or Experience, open project case studies and architecture images, and use external social/project links.
5. The Contact section validates submitted fields and posts inquiries to Formspree, then displays success or error feedback.
6. Navigation and scroll update the active section and page metadata. Modal and enlarged-image states lock body scrolling; listeners are removed when `VisualDesigner` unmounts.
