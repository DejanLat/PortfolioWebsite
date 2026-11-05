# PortfolioWebsite

React websites for Dejan Latkovic's engineering portfolio, Axivion Instruments / PRISM, and Axivion Studio. Studio is a separate scientific visualization website and brand; the sites share source code and selected UI components.

Built with React, CRACO, Tailwind CSS, Framer Motion, and Lucide icons.

## Development

Install dependencies with `npm install`, then run `npm start`. The local preview is normally available at http://localhost:3000.

| Command | Purpose |
| --- | --- |
| `npm start` | Start the local development server |
| `npm run build` | Build Axivion Studio into `build/` and generate route HTML |
| `npm run build:portfolio` | Build the GitHub Pages portfolio into `docs/` with the `/PortfolioWebsite` base path |
| `npm run verify:portfolio` | Validate the generated portfolio asset paths and metadata |
| `npm test` | Run the CRA/Jest test runner |

## Source layout

- `src/components/`: route pages and shared UI.
- `src/hooks/`: navigation and pointer-effect hooks.
- `src/content/`: page text and media configuration.
- `src/data/`: supporting project and pricing data.
- `public/`: images, videos, icons, and other static assets.
- `scripts/`: build and route-generation utilities.

## Deployment targets

Axivion Studio uses the regular build and Cloudflare Workers configuration in `wrangler.jsonc`. `npm run deploy` builds and deploys that site.

The portfolio uses the `/PortfolioWebsite` base path and the `gh-pages` branch. `npm run deploy:portfolio` rebuilds `docs/` and publishes it. Pushing source to `main` alone does not update GitHub Pages.

The two builds use different base paths and metadata. Use the build for the intended deployment target.
