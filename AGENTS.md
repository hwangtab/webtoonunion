# Repository Guidelines

This guide keeps contributions to the Webtoon Union landing page consistent, accessible, and production-ready.

## Project Structure & Module Organization
- `src/app`: Next.js App Router layouts, metadata, and route-level assets.
- `src/components/common | layout | sections`: Atomic design stack—build primitives in `common`, assemble scaffolding in `layout`, and ship hero-to-footer experiences from `sections`.
- `public`: Static assets (logos, open-graph images, sitemap output) served as-is by Next.js.
- `docs`: Copy decks and planning references; update when marketing messaging shifts.
- Root configs (`tailwind.config.js`, `postcss.config.js`, `next-sitemap.config.js`) must change alongside any design system or deployment tweak.

## Build, Test, and Development Commands
- `npm run dev`: Launch local development server with hot reload.
- `npm run build`: Create the production bundle; catches TypeScript and route issues.
- `npm run start`: Serve the last build for acceptance testing.
- `npm run lint`: Run Next.js linting (ESLint + Tailwind) to guard style and accessibility rules.
- `npm run format`: Apply the shared Prettier profile before large refactors.
- `npm run postbuild`: Regenerate `sitemap.xml` via `next-sitemap`; Vercel runs this automatically after successful builds.

## Coding Style & Naming Conventions
- Format with Prettier (2-space indent, 80-char width, single quotes, semicolons on); never hand-tune compiled output.
- Components stay in TypeScript with explicit prop shaping. Name section exports `*Section` (e.g., `HeroSection`) and keep filenames PascalCase.
- Tailwind is mobile-first: start layouts without breakpoints, then opt into `sm:` and up only as needed. Add custom styles only in `src/app/globals.css`.
- Use the Pretendard font import already defined in `globals.css`. Keep primary navy `#1E3A8A` and CTA yellow `#FBBF24` as the palette baseline.

## Testing Guidelines
- No automated tests yet; add Vitest-based suites in `src/__tests__` when behaviour warrants. Name files `ComponentName.test.tsx`.
- Prefer Testing Library patterns for user flows. When Vitest is added, run it alongside `npm run lint` before pushing.
- Mirror real content in fixtures—CMS integration is deferred, so copy stays hardcoded.

## Commit & Pull Request Guidelines
- Follow the repository’s sentence-case, imperative summaries (e.g., `Update FAQSection ...`). Keep messages focused on user-visible outcomes.
- Work on `feature/<slug>` branches off `develop`, then raise PRs into `develop`; `main` mirrors production.
- Each PR: include a concise summary, linked issue or task, before/after screenshots for visual shifts, and confirm all CTA buttons target the Google Form in a new tab.
- Approve Vercel preview builds and check in-page navigation (react-scroll anchors) before merging.
