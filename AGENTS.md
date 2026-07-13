Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

## Project: [locson.me](https://locson-me.vercel.app)

Personal website of Loc Son — portfolio + blog.

### Tech Stack
- Next.js 15 (App Router), React 19, TypeScript (strict)
- Tailwind CSS 4 + `@tailwindcss/typography`
- MDX content via `@mdx-js/mdx` (build-time compilation)
- PIXI.js 8 (WebGL art backgrounds)
- `motion` (Framer Motion v12) for animations
- `cmdk` + Radix UI primitives for command palette
- `next-themes` for dark/light mode

### Commands
- `npm run dev` — dev server (port 3000)
- `npm run build` — production build
- `npm run lint` — ESLint (flat config)
- No tests or typecheck script exists

### Key Conventions
- Path alias: `@/*` → `./src/*`
- Styling: Tailwind CSS utility classes + `cn()` helper
- Content: MDX files in `src/content/`, MDX components in `src/mdx-components.tsx`
- Imports: sorted (Prettier plugin), semicolons required, double quotes
- ESLint: unused vars = warning (ignore with `_` prefix)
- Animations: sliding enter via CSS custom properties (`--enter-stage`, `--enter-step`)
- Image resources: `public/images/`

### Structure
```
src/
├── app/           # Next.js App Router pages + API routes
├── components/    # React components (Header, Navbar, ArtBackground, etc.)
├── content/       # MDX files (pages + blog posts)
├── data/          # Static JSON data
├── lib/           # Utilities (MDX compile, file service, format-date, etc.)
├── scripts/       # Build-time scripts (posts index)
└── types/         # TypeScript type definitions
```