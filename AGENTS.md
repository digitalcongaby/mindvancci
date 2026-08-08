# AGENTS.md

## Project Overview

MINDVANCCI is a premium marketing and product-experience site for a mental-wellness method targeting overwhelmed
women, entrepreneurs and mothers. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (custom theme in `src/styles.css`, class-based dark mode) |
| Animation | Framer Motion |
| State | Zustand (theme only) |
| AI | Anthropic via Netlify AI Gateway (zero-config, no API key needed) |
| Forms | Netlify Forms (newsletter) |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   └── __forms.html         # Static form skeleton so Netlify detects the newsletter form at build time
├── src
│   ├── components
│   │   ├── Nav.tsx, Footer.tsx, Reveal.tsx, ThemeToggle.tsx
│   │   ├── Hero.tsx, MethodTimeline.tsx, DashboardDemo.tsx, AICoach.tsx
│   │   ├── ToolsGrid.tsx, SuccessStories.tsx, CoursesPricing.tsx, Newsletter.tsx
│   ├── data/content.ts       # Method stages, testimonials, stats, pricing tiers, mock dashboard data
│   ├── lib
│   │   ├── assessment.ts     # 20 questions, scoring, 5 saturation profiles
│   │   ├── theme.ts          # Zustand dark/light mode store
│   │   └── utils.ts          # cn() classname helper
│   ├── routes
│   │   ├── __root.tsx        # Root layout, fonts, SEO meta, theme init
│   │   ├── index.tsx         # Home page — assembles all sections
│   │   ├── assessment.tsx    # Mental Saturation Assessment flow + results
│   │   └── api/ai-coach.ts   # Server route: AI Coach chat completion
│   └── styles.css            # Tailwind + design tokens (colors, fonts, animations)
```

## Key Concepts

### Routing

File-based via TanStack Router. `index.tsx` is a single long-form page with in-page anchor navigation
(`#method`, `#dashboard`, `#ai-coach`, `#tools`, `#stories`, `#courses`) rather than separate pages, matching the
"immersive experience" brief. The assessment is its own route because it is a linear, stateful flow.

### AI Coach

`src/routes/api/ai-coach.ts` is a TanStack Start server route that calls `@anthropic-ai/sdk` with zero-config
credentials injected by Netlify AI Gateway. Model: `claude-haiku-4-5`. Only models listed in the
`netlify-ai-gateway` skill are valid — check that skill before changing models.

### Newsletter / Netlify Forms

The React form in `Newsletter.tsx` posts to `/__forms.html` (not `/`) because TanStack Start's SSR function would
otherwise intercept a POST to `/`. `public/__forms.html` is a hidden static form that lets Netlify's build-time
scanner register the `newsletter` form.

### Theme

Dark/light mode uses a `.dark` class on `<html>` (Tailwind v4 `@custom-variant dark`), toggled via the Zustand store
in `src/lib/theme.ts` and persisted to `localStorage`.

## Conventions

- Components: PascalCase, one per file in `src/components/`
- Import alias `@/*` → `src/*`
- Tailwind utility classes only; shared design tokens (colors, fonts, glass effect) live in `src/styles.css`
- Strict TypeScript: no unused locals/parameters, explicit types on data models in `src/data/content.ts` and `src/lib/assessment.ts`

## Before Launch

- `src/components/CoursesPricing.tsx` has a placeholder `SYSTEME_IO_URL` — replace with the real Systeme.io funnel links.
- Footer social links and email are placeholders.
