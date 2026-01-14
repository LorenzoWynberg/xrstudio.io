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
- **Always push**: After committing, always push changes to remote

## Workflow Rules

- **Update activity log**: After EVERY task/change, append an entry to the Activity Log below (newest at bottom)
- **Update changelog**: Group related changes by date in the Changelog section
- **Always update docs**: Keep documentation in sync with code changes
- **Commit frequently**: Make atomic commits after each logical change
- **Push immediately**: Push after every commit

## Activity Log (append-only, newest at bottom)

```
2026-01-14 00:15 - Redesigned process section with card layout and hover effects
2026-01-14 00:18 - Made process grid 2x2 on md screens, 4-col on lg
2026-01-14 00:20 - Reduced process grid container size on md screens
2026-01-14 00:25 - Increased tech background line thickness (0.5 → 1.5)
2026-01-14 00:30 - Fixed broken link /work/pura-tinta → /work/pura-tinta-fest
2026-01-14 00:30 - Fixed broken link /work/oneiro → /work/electric-animals
2026-01-14 00:35 - Diversified hero slider images, added Sweetspot
2026-01-14 00:40 - Added background image to Ecosystem section
2026-01-14 00:45 - Added workflow rules to CLAUDE.md
2026-01-14 00:50 - Added Activity Log section to CLAUDE.md
2026-01-14 00:55 - Changed Ecosystem section bg image and reduced overlay opacity (80% → 60%)
2026-01-14 00:58 - Updated Ecosystem text colors: XR Studio white, Broccoli light gray
2026-01-14 01:00 - Added green highlight effect to Ecosystem headline with white text for brand names
```

## Changelog (by version/date)

### 2026-01-14
- **Workflow rules update**: Clarified append-only changelog requirement in CLAUDE.md
- **Ecosystem section**: Added subtle background image to differentiate from CTA section
- **Hero slider**: Diversified images, replaced similar shots with Sweetspot
- **Fixed broken links**: `/work/pura-tinta` → `/work/pura-tinta-fest`, `/work/oneiro` → `/work/electric-animals`
- **Tech background lines**: Increased particle network line thickness (0.5 → 1.5)
- **Process section redesign**: Card-based layout with hover effects, 2x2 grid on md, 4-col on lg

### 2026-01-13
- **Hero redesign**: Centered headlines with image carousel background, removed scroll indicator
- **Style guide implementation**: Created comprehensive design system at `docs/STYLE-GUIDE.md`
- **Monochromatic green palette**: Removed all blue/purple colors, using #00ff88 and #00cc6a only
- **Animated tech background**: Canvas-based particle network with mouse interaction (`app/components/tech-background.tsx`)
- **Apple-like typography system**: Added responsive type scale (text-hero, text-h1, text-h2, text-h3, section-label, stat-number)
- **Asymmetric collage layout**: Featured Work section with large left image + stacked right
- **Image optimization**: Updated script to handle subdirectories, processed 103 images (948MB → 20MB)
- **New project images**: Electric Animals, Blockchain Jungle, Magflow, Pura Tinta collections added
