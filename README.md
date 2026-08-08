# MINDVANCCI

MINDVANCCI is a premium, interactive marketing site for a transformational mental-wellness method aimed at
overwhelmed women, founders, professionals and mothers. It combines an immersive marketing experience, an interactive
20-question Mental Saturation Assessment, an interactive Method timeline, a mock member dashboard, an AI coach, and a
suite of self-help tools.

## Tech stack

- **TanStack Start** (React 19) with file-based routing
- **Tailwind CSS 4** for styling, with a custom design system (colors, fonts, animations) in `src/styles.css`
- **Framer Motion** for scroll reveals, micro-interactions and animated data visualizations
- **Zustand** for lightweight dark/light theme state
- **Anthropic (via Netlify AI Gateway)** for the MINDVANCCI AI coach
- **Netlify Forms** for the newsletter signup
- Deployed on **Netlify**

## Structure

- `src/routes/index.tsx` — the full home page experience (hero, method, dashboard demo, AI coach, tools, stories, pricing, newsletter)
- `src/routes/assessment.tsx` — the 20-question Mental Saturation Assessment with scored results and profiles
- `src/routes/api/ai-coach.ts` — server route calling the Anthropic model through Netlify AI Gateway
- `src/components/` — all reusable section and UI components
- `src/data/content.ts` — method stages, testimonials, stats, pricing tiers, mock dashboard data
- `src/lib/assessment.ts` — assessment questions, scoring logic and the five saturation profiles
- `src/lib/theme.ts` — dark/light mode store

## Running locally

```bash
npm install
npm run dev
```

The dev server runs on port 3000. When testing with the Netlify CLI (`netlify dev`), forms and the AI Gateway
credentials are best verified on a deployed preview, since Netlify Forms does not process submissions locally.

## Configuration before launch

- Replace `SYSTEME_IO_URL` in `src/components/CoursesPricing.tsx` with your real Systeme.io checkout links.
- Update social links and contact email in `src/components/Footer.tsx`.
