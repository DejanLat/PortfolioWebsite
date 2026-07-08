# Axivion Studio Deployment Handoff

## Current Goal

Prepare this React site for Cloudflare Workers Git deployment at:

```text
https://axivionstudio.com
```

The public root domain should load Axivion Studio directly, not the personal portfolio homepage.

## Build / Deploy Setup

This project is Create React App through CRACO, not Vite.

Cloudflare settings:

```text
Build command: npm run build
Deploy command: npx wrangler deploy
Output folder: build
```

`wrangler.jsonc` is configured for static assets from `./build` with SPA route fallback:

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "axivion-studio",
  "compatibility_date": "2026-07-08",
  "assets": {
    "directory": "./build",
    "not_found_handling": "single-page-application"
  }
}
```

## Verified

- `npm run build` succeeds.
- Build output folder is `build`.
- `npx wrangler deploy --dry-run` succeeds.
- Local dev server is running at `http://localhost:3000/`.
- Local route smoke tests pass for `/`, `/studio`, `/terms`, and `/contact` with browser HTML accept headers.
- `git diff --check` passes except normal Windows CRLF warnings.

## Routing

The app now uses `BrowserRouter`.

Primary routes:

```text
/          Axivion Studio
/studio    Axivion Studio
/terms     Axivion Studio scrolled to Terms
/renders   Axivion Studio legacy alias
/portfolio Dejan Latkovic portfolio
/prism     Axivion Instruments / PRISM
/contact   Contact page
```

For the Studio domain, `/` is the main Axivion Studio landing page.

## Metadata

Default public metadata is Studio branded:

```text
Title: Axivion Studio | Scientific Visualization
Description: Scientific and technical visualization for researchers, labs, papers, proposals, covers, and advanced hardware teams.
Canonical: https://axivionstudio.com/
Site name: Axivion Studio
```

Route-specific metadata is handled in `src/App.js`:

```text
/ or /studio: Axivion Studio | Scientific Visualization
/portfolio: Dejan Latkovic | Optomechanical Engineer
/prism: Axivion Instruments | Precision Scientific Instrumentation
```

The built `public/index.html` default metadata no longer uses personal portfolio branding.

## Branding Boundaries

- Axivion Studio is the scientific visualization service.
- Axivion Instruments is the hardware / instrumentation company.
- Dejan Latkovic portfolio remains separate at `/portfolio`.

Do not blur Studio and Instruments copy unless referring explicitly to separate entities.

## Studio Page Notes

`src/components/Renders.jsx` is the Axivion Studio page.

Current page direction:

- Emerald Studio accent, not teal.
- Dark technical page style.
- Hero styled closer to the car modding page than the old animated render page.
- No animation service emphasis.
- Pricing is framed with psychological starting prices.
- Terms section includes milestone/payment, rights levels, refund boundaries, DMCA/takedown, blacklist/protection, no AI/NFT/blockchain use, and client accountability.
- Header is mobile responsive with a dropdown.
- Desktop header keeps Work/Pricing/Process/Terms plain and uses hover color treatments for IQC/AAAS/Contact.

## Important Files

```text
src/App.js
src/components/Renders.jsx
src/components/Portfolio.jsx
src/data/mock.js
public/index.html
public/robots.txt
public/sitemap.xml
public/axivion-studio-favicon.svg
wrangler.jsonc
package.json
package-lock.json
yarn.lock
```

## Deployment Checklist

Before clicking Deploy in Cloudflare, confirm:

- Cloudflare build command is `npm run build`.
- Cloudflare deploy command is `npx wrangler deploy`.
- The Git branch is `main`.
- The domain root `https://axivionstudio.com/` points to this Worker deployment.
- SPA route refreshes are handled by Wrangler asset fallback.

## Known Warnings

`npm run build` reports stale Browserslist / baseline browser mapping warnings. These are not build failures.