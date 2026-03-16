# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**jumpzip (점집)** — A Korean pixel art market/exhibition event landing page for "점집: Live Pixel Market" (2026.04.25–26 at 1289BUNKER, Seoul). Static single-page site deployed on Vercel.

## Commands

- `npm run dev` — Start dev server (http://localhost:3000)
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

No test framework is configured.

## Architecture

- **Next.js 16 App Router** with React 19, TypeScript, Tailwind CSS v4
- **Single-page static site** — all content lives in `src/app/page.tsx` as sections (Hero, CTA Bar, About, Hall Map, Funding, Exhibitors, Updates, Footer)
- **Path alias**: `@/*` maps to `./src/*`

### Key Files

- `src/app/layout.tsx` — Root layout with metadata (OG tags, Twitter cards), Vercel Analytics, `lang="ko"`
- `src/app/page.tsx` — Entire landing page content (server component)
- `src/app/KakaoMap.tsx` — Client component (`"use client"`) that dynamically loads Kakao Maps SDK via script injection
- `src/app/globals.css` — Theme variables (`--bg-cream`, `--blue`, `--red`), custom pixel font (Suhgung12.otf), reusable classes (`.content-box`, `.section-title`, `.btn-primary`, `.btn-accent`)
- `src/app/robots.ts` / `src/app/sitemap.ts` — SEO configuration

### Styling Conventions

- Tailwind utility classes for layout and responsive design; custom CSS classes in `globals.css` for repeated patterns
- Mobile-first responsive design (sm/md/lg breakpoints)
- Pixel art aesthetic: images use `style={{ imageRendering: 'pixelated' }}`
- Fixed left stripe bars (red/green/blue) with `z-50`

### External Integrations

- **Kakao Maps API** — venue map display (API key in KakaoMap.tsx)
- **Vercel Analytics** — usage tracking
- External links to Google Forms, Tumblbug, Discord, Twitter/X
