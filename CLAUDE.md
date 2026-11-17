# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is pnpm (`pnpm-lock.yaml`).

- `pnpm dev` — dev server
- `pnpm build` / `pnpm start` — production build / serve
- `pnpm typecheck` — `tsc --noEmit`

There is no linter and no test suite configured.

## Architecture

Multi-page Portuguese-language (pt-BR) freelance portfolio built with Next.js 16 App Router, React 19, Tailwind CSS v4 (CSS-first config in `app/globals.css`, no tailwind config file), framer-motion, and shadcn (style `base-nova`, built on `@base-ui/react`; add UI primitives into `components/ui`). Path alias `@/*` maps to the repo root. Layout follows the "Personal Portfolio" Figma community template (Poppins, centered section headings with outlined `.watermark` words, row-style project cards).

- **Palette (60-30-10):** tokens in `app/globals.css`: `--background #0f172a`, `--surface`, `--surface-hover`, `--border`, `--text-primary #f8fafc`, `--text-secondary`, `--accent #38bdf8`, `--accent-foreground`. Tailwind classes: `bg-background`, `bg-surface`, `bg-surface-hover`, `border-subtle`, `text-foreground` (headings), `text-muted-foreground` (body default), `bg-accent`/`text-accent`. shadcn aliases (`primary`, `card`, `muted`…) point at these tokens. Use the accent ONLY for primary CTAs, hover/focus-visible states and stack badges (`TechBadge`: `bg-accent/10 text-accent`). Hex values also appear in `app/icon.tsx`, `app/opengraph-image.tsx`, `public/icon.svg` and `viewport.themeColor`.
- Routes: `app/page.tsx` (hero, services, stats, featured projects, differentiators, process, stack), `app/projetos` (all case studies + live GitHub repos), `app/projetos/[slug]` (static case study pages from `projetos`), `app/tecnologias` (stack with "usado em" links to projects), `app/sobre` (bio, process, contact). `app/layout.tsx`: fonts (Poppins body, JetBrains Mono as `font-mono`), global metadata with a `%s | José Nogueira` title template (`NEXT_PUBLIC_SITE_URL`, default `https://josenogueira.dev`), sticky `SiteHeader`, `SiteFooter` (contact) and `MobileTabBar`.
- Shared components: `container`, `section-heading`, `cta-link` (cva variants), `tech-badge`, `tech-icon`, `project-card`, `cta-band`, `process-steps`, `social-links`; home sections live in `components/home/`.
- `lib/data.ts` is the single source of truth for static content (profile, navigation, about, services, differentiators, process, `projetos` case studies, technologies). Project `stack` names must match `tecnologias` names so `/tecnologias` links to projects. Only describe what the GitHub repos actually contain. Only contact info is public: no employers, location details or résumé.
- `lib/github.ts` holds `GITHUB_USERNAME` (also used by `data.ts`), `fetchRepos` (6 most recently pushed, filters forks/archived/ignored) and `fetchTotalRepos` (public repo count for the stats band), both cached with `revalidate: 3600` and failing soft (empty list / `null`). Optional `GITHUB_TOKEN` env var raises the rate limit.
- Pages are server components; only `site-header`, `mobile-tab-bar` (bottom nav on mobile) and `reveal` (framer-motion in-view entrance, respects reduced motion) use `"use client"`.
- `public/foto-hero.jpg` (hero, in color) and `public/foto-perfil.jpg` (square crop used on `/sobre`) are the profile photos.
- `next.config.mjs` sets security headers (nosniff, referrer policy, HSTS, permissions policy) for all routes. The résumé PDF was removed on purpose; do not re-add it.

## Conventions & Strict Rules

- **Package Manager:** Always use `pnpm` (e.g., `pnpm dlx shadcn@latest add ...`). Never use `npm` or `yarn`, and never generate `package-lock.json` or `yarn.lock`.
- **Tailwind CSS v4:** Keep all theme tokens, custom utilities, and animations inside `app/globals.css` using `@theme` / CSS variables. Do NOT create `tailwind.config.js` or `tailwind.config.ts`.
- **Content Updates:** All personal info, bio, experience, and copy changes must be made strictly in `lib/data.ts` (in natural pt-BR), never hardcoded inside section components.
- **UI Components:** When adding shadcn primitives, preserve the `base-nova` (`@base-ui/react`) style pattern already present in `components/ui/`.
- **Verification:** Since there is no linter or test suite configured, always run `pnpm typecheck` after modifying TypeScript files to ensure zero type errors before finishing a task.
