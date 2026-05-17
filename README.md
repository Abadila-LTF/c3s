# C3S Laboratory — Website

Modern bilingual (FR/EN) website for the **Computer Science and Smart Systems Laboratory** at École Supérieure de Technologie de Casablanca (ESTC), Université Hassan II de Casablanca.

Built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, **next-intl**, **Framer Motion** and **Lucide icons**.

## Features

- 11 pages × 2 languages = 22 statically generated routes
- Full bilingual content (French / English) extracted from C3S documents
- Light & dark theme with auto OS detection + manual toggle
- Animated hero, gradient accents, modern academic-tech style
- Search & multi-filter publications page (year / type / team)
- Responsive header with language switcher
- Contact form (front-end only, ready to connect to a backend)
- All 4 research teams (DSIS, BDIoS, GEDIS, D2SF) with full member lists
- 8 PhD topics with industrial / academic partner mapping
- Real lab photos & logo assets

## Pages

1. `/` — Hero, mission, key numbers, research areas, teams, events, partners, CTA
2. `/about` — Presentation, vision, strategy, direction, governance
3. `/teams` — DSIS, BDIoS, GEDIS, D2SF with members & topics
4. `/research` — 9 research domains
5. `/publications` — Searchable & filterable list
6. `/events` — WINCOM, Next-Gen Data Eng. Workshop, SysCoBIoTS, MIND, Journées Recherche, invited talks
7. `/phd` — Open & ongoing PhD topics + how to apply
8. `/partners` — Leyton, NRCI, Mobitic, Revatis, CHU Oujda, ESTC
9. `/news` — Latest lab updates
10. `/contact` — Address, email, embedded map, contact form

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000/fr (or /en)
```

## Production build

```bash
npm run build
npm start
```

## Project structure

```
src/
├── app/
│   ├── [locale]/         # Localized pages (fr | en)
│   │   ├── layout.tsx    # Root layout with header/footer/theme
│   │   ├── page.tsx      # Home
│   │   ├── about/
│   │   ├── teams/
│   │   ├── research/
│   │   ├── publications/
│   │   ├── events/
│   │   ├── phd/
│   │   ├── partners/
│   │   ├── news/
│   │   └── contact/
│   ├── globals.css       # Tailwind v4 + design tokens
│   └── favicon.ico
├── components/           # Header, Footer, ThemeToggle, LanguageSwitcher, ...
├── data/lab.ts           # Members, teams, publications, partners
├── i18n/                 # next-intl config & navigation
├── messages/             # fr.json, en.json
└── proxy.ts              # Next.js 16 locale routing middleware

public/
└── images/
    ├── logos/c3s-logo.png
    ├── partners/         # estc, chu-oujda, nrci
    ├── team/pr-ouzzif.png
    └── events/           # workshop, journées recherche, etc.
```

## Where to edit content

- Text content (FR/EN): `src/messages/fr.json` and `src/messages/en.json`
- Team members: `src/data/lab.ts` → `MEMBERS`
- Publications: `src/data/lab.ts` → `PUBLICATIONS`
- Direction info: `src/data/lab.ts` → `DIRECTION`
- Colors / typography: `src/app/globals.css`

## Deploy

The site is statically rendered (SSG) — deploy to **Vercel**, **Netlify**, **Cloudflare Pages**, or any static host. For Vercel: `vercel deploy` from the project root.
