# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev          # Start development server
bun build        # Production build
bun start        # Start production server
bun lint         # Run Biome linter/formatter checks
```

No test runner is configured.

## Stack

- **Next.js 15** (App Router) with **React 19**
- **TypeScript** (strict mode) — path alias `@/*` maps to project root
- **Tailwind CSS 4** via `@tailwindcss/postcss`
- **GSAP 3** with ScrollTrigger and SplitText plugins — import from `@/src/libs/gsap`
- **Lenis** for smooth scrolling — provided globally via root layout
- **next-intl v4** for i18n — Czech (`cs`) default, English (`en`) at `/en/`
- **Biome** for linting and formatting (tabs, double quotes, auto-organize imports)
- **Bun** as package manager and runtime

## Architecture

### i18n

All routes live under `src/app/[locale]/`. The default locale (`cs`) has no URL prefix; English uses `/en/`.

- `src/i18n/routing.ts` — single source of truth for locales and defaultLocale
- `src/i18n/request.ts` — `getRequestConfig`, loads `messages/<locale>.json` per request
- `src/i18n/navigation.ts` — use these typed exports (`Link`, `redirect`, `useRouter`, `usePathname`) instead of `next/link` or `next/navigation` — they inject the locale automatically
- `messages/cs.json` / `messages/en.json` — translation strings
- `middleware.ts` (project root) — locale detection and redirect

**Every new page must:**
1. Export `async function generateStaticParams()` returning `routing.locales.map(locale => ({ locale }))` (for SSG)
2. Call `setRequestLocale(locale)` before any other next-intl calls (preserves static rendering)

Server components use `getTranslations("namespace")`, client components use `useTranslations("namespace")`.

### Smooth scrolling & animation

The root layout (`src/app/[locale]/layout.tsx`) wraps everything in `NextIntlClientProvider` then `Lenis`. Lenis applies different settings for mobile vs desktop, configured in `src/providers/Lenis/LenisSettings.ts`.

GSAP plugins (ScrollTrigger, SplitText) are registered once in `src/libs/gsap.ts` — always import GSAP from there, not directly from the `gsap` package.

### Utilities

Shared TypeScript prop types (`ChildrenProps`, `ClassNameProps`, `HrefProps`, `SlugProps`) live in `src/types/Props.ts`.

Class name merging uses `cn()` from `src/utils/cn.ts` (clsx + tailwind-merge).
