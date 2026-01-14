# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start development server (http://localhost:3112)
pnpm build        # Production build
pnpm start        # Run production server
pnpm lint         # Run ESLint
```

## Tech Stack

- **Next.js 16** with App Router
- **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (using @tailwindcss/postcss)
- **pnpm** for package management

## Project Structure

- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Geist font configuration
  - `page.tsx` - Home page
  - `globals.css` - Global styles and Tailwind imports
- `public/` - Static assets
- `@/*` path alias maps to project root

## Version Control

- **jj (jujutsu)**: Use jj as the primary version control tool (colocated with git)
- **No Co-Authored-By**: Do not add "Co-Authored-By: Claude" to commit messages
- **Atomic commits**: Keep commits small and focused on a single change

## Changelog (append-only)

### 2026-01-13
- **Hero redesign**: Centered headlines with image carousel background, removed scroll indicator
- **Style guide implementation**: Created comprehensive design system at `docs/STYLE-GUIDE.md`
- **Monochromatic green palette**: Removed all blue/purple colors, using #00ff88 and #00cc6a only
- **Animated tech background**: Canvas-based particle network with mouse interaction (`app/components/tech-background.tsx`)
- **Apple-like typography system**: Added responsive type scale (text-hero, text-h1, text-h2, text-h3, section-label, stat-number)
- **Asymmetric collage layout**: Featured Work section with large left image + stacked right
- **Image optimization**: Updated script to handle subdirectories, processed 103 images (948MB → 20MB)
- **New project images**: Electric Animals, Blockchain Jungle, Magflow, Pura Tinta collections added
