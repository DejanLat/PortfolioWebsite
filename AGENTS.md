# Repository Guidelines

## Project Structure & Module Organization
This is a React single-page app built with Create React App through CRACO. Source code lives in `src/`, with route-level pages in `src/components/` such as `Renders.jsx`, `StudioContact.jsx`, `StudioTerms.jsx`, `Portfolio.jsx`, and `PrismProject.jsx`. Shared UI primitives are under `src/components/ui/`, and small hooks live in `src/hooks/`. Static images, favicons, PDFs, `robots.txt`, and `sitemap.xml` are in `public/`. Production output is written to `build/`. Cloudflare Workers asset deployment is configured in `wrangler.jsonc`.

## Build, Test, and Development Commands
- `npm start`: run the local CRACO dev server, normally at `http://localhost:3000/`.
- `npm run build`: create the optimized production build in `build/` and copy `index.html` to `404.html` for SPA fallback.
- `npm test`: run the CRA/Jest test runner if tests are added.
- `npm run deploy`: deploy the built site with Wrangler; requires Cloudflare credentials.

## Coding Style & Naming Conventions
Use React functional components and hooks. Component files use PascalCase, for example `StudioTerms.jsx`; constants use uppercase names such as `TERMS_GROUPS`. Keep JSX readable with two-space indentation and prefer Tailwind utility classes for layout and styling. Use `lucide-react` icons where possible. Keep brand-specific behavior separated: Studio routes should stay Axivion Studio focused, while portfolio routes should retain Dejan portfolio branding.

## Testing Guidelines
There is currently no substantive automated test suite; `tests/` only contains a placeholder. For UI changes, run `npm run build` before committing and manually check desktop and mobile layouts. When adding tests, prefer colocated `*.test.jsx` files or a clear `src/__tests__/` structure, and cover routing, metadata, and interactive controls.

## Commit & Pull Request Guidelines
Recent commits use short imperative summaries, for example `Clarify Studio check-ins and revisions`. Keep commits focused and mention the affected area. Pull requests should include a short description, screenshots for visual changes, build/test results, and any deployment notes. For Studio changes, verify `/`, `/contact`, and `/terms`; for portfolio changes, verify `/portfolio` and `/portfolio/contact`.

## Security & Configuration Tips
Do not commit Cloudflare API tokens or private client materials. Keep final client testimonials, names, photos, and quotes unpublished until permission is explicit. Use `wrangler.jsonc` for deployment configuration and keep public metadata consistent with the intended domain.
## Axivion Studio Frontend Rules
This repo contains three related but separate identities: Dejan Latkovic's personal portfolio, Axivion Instruments/PRISM content, and Axivion Studio scientific visualization content. Axivion Studio should feel like a separate premium rendering/design studio brand. Do not merge the teal portfolio identity into Studio pages, and do not reuse portfolio favicon/style fallbacks for Studio unless explicitly requested. While editing Studio pages, do not break portfolio routes, portfolio contact pages, or Axivion Instruments pages.

Prefer simple React and Tailwind/CSS edits over new frameworks, new UI libraries, or broad rewrites. Keep code maintainable so the site owner can continue editing it directly. After meaningful frontend changes, always run `npm run build`. For visual changes, perform screenshot or browser-based QA when tooling is available; be explicit when visual QA could not be performed.
