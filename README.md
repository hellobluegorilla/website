# Blue Gorilla — Website

Production port of the Blue Gorilla marketing site. Built with Vite + React + TypeScript and react-router-dom.

## Stack

- **Vite 5** — dev server and build
- **React 18** — UI
- **TypeScript** — type safety
- **react-router-dom v6** — real URLs per page (`/`, `/services`, `/sectors`, `/markets`, `/about`, `/contact`)

## Local development

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:5000 by default (configured in `vite.config.ts`).

## Production build

```bash
npm run build
npm run preview
```

`npm run build` type-checks with `tsc -b` and then bundles with Vite. The output lands in `dist/`.

## Deployment notes

This is a standard SPA. Any static host works (Netlify, Vercel, Cloudflare Pages, S3+CloudFront, etc.). Because routes are client-side, the host must rewrite unknown paths to `/index.html` (Netlify and Vercel do this automatically for SPAs; for S3/CloudFront, configure a custom error document or rewrite rule).

## Project layout

```
src/
├── main.tsx              // Entry + router provider
├── App.tsx               // Routes + scroll-to-top
├── index.css             // Global resets, fonts, animations
├── theme.ts              // Color palette + font stacks
├── hooks.ts              // useWW (viewport width) + useFade (reveal on scroll)
├── paths.ts              // Page key → route path mapping
├── components/
│   ├── Nav.tsx           // Fixed top navigation
│   ├── Footer.tsx        // Site footer
│   └── primitives.tsx    // Overline, BtnPrimary/Secondary, Wrap, Sect, CTABlock, PageHero, CrossNav
└── pages/
    ├── Home.tsx
    ├── Services.tsx
    ├── Sectors.tsx
    ├── Markets.tsx
    ├── About.tsx
    └── Contact.tsx
```

## Design tokens

Colors and fonts live in `src/theme.ts`:

- `C.blue` — `#072F92` (primary accent)
- `C.navy` — `#0B1B4A` (dark sections)
- `C.paper` — `#F6F4EF` (warm off-white backgrounds)
- `C.mist` — `#DDE6F7` (pale blue section)
- `C.charcoal` — `#1F2430` (body text)
- `C.border` — `rgba(7,47,146,0.11)`

Fonts are loaded from Google Fonts in `index.html`: Cormorant Garamond (display) and DM Sans (body).

## Static assets

SVG logos live in `public/` and are referenced at absolute paths (`/gorilla-icon.svg`, `/wordmark.svg`, plus the white variants).

Photography is pulled from Unsplash via direct URLs. If you later host these images yourself, search for the photo IDs in the source and replace.

## Contact form

The form in `/contact` opens the visitor's email client via `mailto:` with pre-filled subject and body. To wire a real form backend (e.g. Formspree, Resend, SendGrid), replace the `handleSubmit` in `src/pages/Contact.tsx`.
