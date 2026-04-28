# my-app

Next.js starter with TypeScript, Next-intl, Tailwind CSS, GSAP, and Lenis.

## Stack

- **Next.js** 16
- **React** 19
- **TypeScript**
- **Next-intl**
- **Tailwind CSS** 4
- **GSAP** + @gsap/react
- **Lenis** (smooth scroll)
- **Biome** (lint)

## Setup

```bash
bun install
```

## Scripts

| Command   | Description        |
| --------- | ------------------ |
| `bun run dev`   | Start dev server   |
| `bun run build` | Production build   |
| `bun run start` | Start production   |
| `bun run lint`  | Run Biome lint     |

## Project structure

- `src/app` — Next.js App Router (routes, layout, global styles)
- `src/providers` — React providers (e.g. Lenis)
- `src/utils` — Shared utilities
- `src/types` — TypeScript types
