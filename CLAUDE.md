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
- `log/` - Changelog and activity logs
  - `CHANGELOG.md` - Version changelog grouped by date
  - `activity/` - Daily activity logs (one file per day)
- `@/*` path alias maps to project root

## Version Control

- **jj (jujutsu)**: Use jj as the primary version control tool (colocated with git)
- **No Co-Authored-By**: Do not add "Co-Authored-By: Claude" to commit messages
- **Atomic commits**: Keep commits small and focused on a single change
- **Always push**: After committing, always push changes to remote

## Workflow Rules

- **Update activity log**: After EVERY task/change, append an entry to `log/activity/YYYY-MM-DD.md` (create new file for each day)
- **Update changelog**: Group related changes by date in `log/CHANGELOG.md`
- **Always update docs**: Keep documentation in sync with code changes
- **Commit frequently**: Make atomic commits after each logical change
- **Push immediately**: Push after every commit

## Log Files

- **Changelog**: `log/CHANGELOG.md` - High-level changes grouped by date/version
- **Activity Log**: `log/activity/YYYY-MM-DD.md` - Detailed append-only log of every task, one file per day
