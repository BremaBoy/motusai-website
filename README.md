# Motus standalone frontend

This is a standalone extraction of the Motus AI single-page frontend from the supplied Replit development preview.

## Run locally

```bash
npm install
npm run dev
```

Create a production bundle with:

```bash
npm run build
```

The generated site is written to `dist/` and can be hosted by any static file server.

## What was discovered

- React 19 + TypeScript
- Vite 7
- Lucide React icons
- Original project wrappers: Wouter, TanStack React Query, Radix Tooltip/Toast, a custom error boundary, Tailwind/Vite tooling
- Main authored UI: `src/App.tsx`
- Main styling: `src/index.css`
- Brand asset: `src/assets/motus-logo.jpeg`

## What changed for standalone use

- Removed Replit development scripts, visual-editor metadata, dev banner, runtime-error overlay, and Replit Vite plugins.
- Removed unused scaffold wrappers for Wouter, TanStack React Query, Radix Tooltip/Toast, and the custom route error boundary.
- Kept the full single-page Motus UI and its interactions.
- Kept the compiled stylesheet so Tailwind is not required at runtime or build time.
- Replaced Replit's `@assets` alias with a normal relative asset import.
- Replaced the Replit-oriented page description with a product description.

The Google Fonts import remains remote. If fully offline operation is required, download and self-host DM Sans, DM Mono, and Instrument Serif, then update the first line of `src/index.css`.

