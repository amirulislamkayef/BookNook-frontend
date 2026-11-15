<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Stack (verified)

- Next.js 16.4.5 App Router (`src/app`), React 19.3, TypeScript strict, Tailwind CSS v4, Turbopack build.
- shadcn/ui style **base-nova**: primitives are Base UI (`@base-ui/react`), **not Radix** — don't import `@radix-ui/react-*`, and don't copy Radix-based shadcn examples from tutorials. A couple of components come from `@shadcn/react` instead.
- `cn` is the npm package `cn`: `import { cn } from "cn"`. `src/lib/utils.ts` only re-exports it.
- `next.config.ts` enables React Compiler, Cache Components, Partial Prefetching, and `experimental.agentFeedback`.
- No env vars are used yet; `.env*` is gitignored.

## Commands

- `npm run dev` — dev server; also (re)generates `AGENTS.md`'s block above, `next-env.d.ts`, and `.next/types`.
- `npm run build` — production build; includes a TypeScript pass. Green as of last check (~7s).
- `npm run lint` — `eslint` with no args (flat config, lints repo root).
- Typecheck: `npx tsc --noEmit` — there is no `typecheck` script. On a fresh clone this fails until `next dev` or `next build` runs once: `next-env.d.ts` and `.next/types` are gitignored, and `layout.tsx` uses the generated global `LayoutProps<"/">`.
- No tests, no formatter, no CI, no pre-commit hooks.

## Baseline: lint is NOT green

`npm run lint` fails with 2 pre-existing `react-hooks/set-state-in-effect` errors in `src/components/ui/carousel.tsx:98` and `src/hooks/use-mobile.ts:14`. Don't attribute them to your change; `npm run build` still passes.

## Layout & conventions

- `src/app` routes, `src/components/ui` shadcn components (~90 pre-generated — check here before writing a new primitive), `src/hooks`, `src/lib`.
- Path alias `@/*` → `./src/*` (tsconfig + `components.json`).
- shadcn CLI config: `components.json` (style `base-nova`, lucide icons, CSS at `src/app/globals.css`). Tailwind v4 has no `tailwind.config` — theme lives in `globals.css` `@theme`.
- `src/lib/highlighter.tsx` holds the shiki language registry; add new languages there, not in components.
