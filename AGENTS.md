# AGENTS.md — Made in Haiphong

## Stack

- **Svelte 5 (Runes)** + **SvelteKit** — plain JS, no TypeScript (`checkJs: false` in `jsconfig.json`)
- **Tailwind CSS v4** via Vite plugin — no `tailwind.config.*` file; classes used inline, CSS in `src/routes/layout.css`
- **GSAP 3** (ScrollTrigger, ScrollToPlugin) + **Lenis** (smooth scroll) — wired in `src/routes/+layout.svelte`
- **Lucide Svelte** for icons

## Commands

```sh
npm install              # install dependencies
npm run prepare          # svelte-kit sync (generates .svelte-kit types, needed after clone)
npm run dev              # vite dev server
npm run build            # vite build (produces static output in build/)
npm run preview          # vite preview (serve production build locally)
```

No test, lint, or format scripts are configured.

## Key conventions

- **Static prerender** — `src/routes/+layout.js` exports `prerender = true`. The entire site is SSG. Prerender errors are non-blocking (`handleHttpError: 'warn'`).
- **Svelte 5 Runes syntax** — use `$state()`, `$props()`, `$derived()`, `$effect()` etc. Legacy `export let` or `$:` is not used.
- **`$lib`** alias maps to `src/lib/` (SvelteKit default).
- **`.npmrc`** sets `engine-strict=true` — if an `engines` field is added to `package.json`, Node version must match.
- **Adapter**: `@sveltejs/adapter-auto` — deploys to Vercel, Netlify, Cloudflare Pages, etc. (auto-detected). `adapter-static` is also installed but unused.

## Architecture

- Components live in `src/lib/components/` — 15 components including `Hero`, `Showcase`, `Brands`, `WorksList`, `Testimonials`, `Header`, `Footer`, `Cursor`, etc.
- Routes (all `.svelte` pages): home (`+page.svelte`) + info pages under `src/routes/{services,pricing,growth,influence,presence,authority,terms,privacy}/+page.svelte`.
- `Seo.svelte` component injects `<svelte:head>` metadata on each page.
- GSAP `ScrollTrigger` is registered and Lenis is wired to GSAP ticker in the root layout.

## Must Observe Rules
- Do not preserve backward compatibility.
- Choose the simplest implementation that fully meets the current requirements.
- Prefer established, well-maintained libraries over custom implementations.
- Avoid premature abstraction: prefer simple concrete solutions until real patterns emerge.
- Prefer composition over centralization: use small focused modules with explicit interfaces instead of centralized systems.
- Keep responsibilities clear: keep modules focused and avoid mixing transport, orchestration, domain/workflow state, persistence, infrastructure.
- Never skip verification: do not bypass required checks, tests, or quality gates.
