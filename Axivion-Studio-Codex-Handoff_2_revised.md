# Axivion Studio Website Follow-Up Handoff for Codex

## Goal

Finalize the Axivion Studio website so `https://axivionstudio.com` feels like a dedicated scientific visualization business site, not a reused Dejan Latkovic portfolio page or Axivion Instruments page.

The current live site is working, but several pieces still need cleanup:

- `/contact` still looks like the old portfolio contact page.
- The scrollbar on `/contact` has a bright blue/purple strip and does not match the Studio theme.
- Dejan Latkovic should appear clearly enough for SEO/name search.
- The old GitHub Pages render route should point users to `axivionstudio.com`.
- Axivion Studio needs a visual logo direction that is related to Axivion Instruments but clearly Studio-specific.
- The `.ca` domain should redirect cleanly to `.com`.
- The Project Packages copy uses the word "still" too often and should be cleaned up.

---

## 0. Clean up Project Packages copy

The Services / Project Packages section is visually strong, but the copy overuses the word `still`.

Do not keep repeating `still render` or `still image` in every package. Clients already understand these packages are image/render deliverables unless animation is selected. Repeating `still` makes the page feel clunky and slightly defensive.

Use `visual`, `render`, `image`, or `deliverable` instead.

Keep one short clarification only if needed:

```text
Animation and source files are quoted separately unless included in the written scope.
```

### Section intro

Replace wording like:

```text
Straightforward starting budgets for still-image scientific visuals. Prices are listed in USD; Canadian-dollar invoices are available for Canadian clients.
```

with:

```text
Straightforward starting budgets for scientific visualization projects. Prices are listed in USD; Canadian-dollar invoices are available for Canadian clients.
```

Optional extra sentence:

```text
Final quotes depend on scientific complexity, reference quality, usage rights, and timeline.
```

### Technical Figure Render

Keep package name:

```text
Technical Figure Render
```

Replace description with:

```text
A focused render for a single concept, apparatus, structure, or presentation figure.
```

Replace included item:

```text
One final still image
```

with:

```text
One final image
```

Keep:

```text
PNG or JPEG delivery
```

### Publication / Research Visual

Keep package name:

```text
Publication / Research Visual
```

Replace description with:

```text
The core Studio package for visuals that need technical discussion and accurate scientific representation.
```

Keep included items, but replace:

```text
One high-resolution still
```

with:

```text
One high-resolution image
```

### Cover Candidate / Hero Render

Keep package name:

```text
Cover Candidate / Hero Render
```

Replace description with:

```text
A developed hero visual for public-facing research communication and cover candidate submissions.
```

Keep:

```text
One final hero render
```

Do not change that to `still`.

### Figure Set / Visual Package

Keep package name:

```text
Figure Set / Visual Package
```

Replace description with:

```text
A coherent set of related visuals with a shared visual language across the project.
```

Replace:

```text
Three to five related still visuals
```

with:

```text
Three to five related visuals
```

### Contact-page card wording

In the Studio contact page cards, replace:

```text
Focused visuals for posters, slides, apparatus, or single scientific concepts.
```

with:

```text
Focused visuals for posters, slides, apparatus, or single scientific concepts.
```

### General copy rule

Use `still` only when legally or practically necessary, such as:

```text
Static image packages do not include animation unless quoted separately.
```

Do not use it as the default adjective for every render package.

---

## 1. Fix the Axivion Studio contact page

The live `/contact` page on `axivionstudio.com/contact` currently still says things like:

- `CONTACT | DEJAN LATKOVIC`
- `Let’s Talk`
- `Axivion Instruments`
- `PRISM instrument inquiries`
- `Research Collaboration`
- `Co-op / Work`
- `Schedule a Meeting`

That is fine for the personal portfolio, but not for the Studio domain.

For `axivionstudio.com/contact`, make the page Studio-only.

### Header

Use:

```text
CONTACT | AXIVION STUDIO
```

Do not show:

```text
DEJAN LATKOVIC
```

in the top contact header.

### Hero title

Replace:

```text
Let’s Talk
```

with:

```text
Request a Scientific Visual
```

### Hero subtitle

Use:

```text
Send the project context, intended use case, timeline, reference material, and any publication or format requirements. I’ll review the scope and respond with next steps.
```

---

## 2. Replace old contact cards with Studio project cards

Remove or hide these on the Studio domain:

- Axivion Instruments
- PRISM instrument inquiries
- Research Collaboration
- Co-op / Work
- Schedule a Meeting

Replace them with Studio-specific cards:

### Card 1

```text
Publication / Research Visual
Paper figures, proposals, lab communication, and technical explainers.
```

### Card 2

```text
Cover Candidate / Hero Render
Journal cover candidates, announcements, grant hero visuals, and website visuals.
```

### Card 3

```text
Figure Set / Visual Package
Three to five related visuals with a consistent style across a paper, grant, website, or project.
```

### Card 4

```text
Technical Figure Render
Focused visuals for posters, slides, apparatus, or single scientific concepts.
```

### Optional Card 5

```text
Animation / Custom Scope
Larger visual packages, motion, or unusual scientific visualization needs.
```

Keep the visual style dark, technical, and emerald/green-accented.

---

## 3. Update the contact form for Studio requests

Current form still defaults to Axivion Instruments. Change it.

### Section label

Replace:

```text
DIRECT
```

with:

```text
PROJECT REQUEST
```

### Form title

Replace:

```text
Write a note
```

with:

```text
Request a project
```

### Keep fields

Keep:

- Your Name
- Organization
- Topic
- Message

### Add fields if simple

If straightforward, add:

- Timeline / Deadline
- Intended Use
- Reference Link

### Topic dropdown

Replace current topics with:

```text
Publication / Research Visual
Cover Candidate / Hero Render
Figure Set / Visual Package
Technical Figure Render
Animation / Custom Scope
General Studio Inquiry
```

Default topic:

```text
Publication / Research Visual
```

### Message placeholder

Use:

```text
Briefly describe the scientific concept, intended use, deadline, reference material, and what the visual needs to communicate.
```

### Email subject

Prefilled subject should be:

```text
Axivion Studio Project Request - [Topic]
```

### Email body

Prefilled email body should include:

```text
Name:
Organization:
Topic:
Timeline:
Intended use:
Reference material:
Project context:
```

### Email address

If custom domain email is not ready, keep:

```text
axivioninstruments@gmail.com
```

But label it as temporary / current Studio inquiries, not as the final brand email.

Suggested wording:

```text
Studio inquiries
axivioninstruments@gmail.com
```

Future preferred email options:

```text
studio@axivionstudio.com
contact@axivionstudio.com
```

---

## 4. Fix contact page back/navigation behavior

On the Studio domain:

- Back button should go to `/`.
- Header should say `AXIVION STUDIO`.
- Do not route the user back into the personal portfolio.
- Do not show `DEJAN LATKOVIC` as the main page identity.

If the same Contact component is used for both the Studio site and the personal portfolio, add route-aware or domain-aware behavior.

Required behavior:

```text
axivionstudio.com/contact
= Studio-focused contact page

dejanlat.github.io/PortfolioWebsite/#/contact
= General Dejan / portfolio contact page, if still needed
```

Do not break the personal portfolio contact page.

---

## 5. Fix the scrollbar issue

On `/contact`, the right scrollbar appears as a bright blue/purple strip and does not match the Studio page.

Investigate global and page-level CSS for:

- `::-webkit-scrollbar`
- `::-webkit-scrollbar-thumb`
- `scrollbar-color`
- `overflow-x`
- `body`
- `html`
- `width: 100vw`
- fixed or absolute elements causing overflow
- nested scroll containers

### Requirements

- No horizontal overflow on desktop or mobile.
- No second/inner body scroll area unless intentionally used.
- Scrollbar should be subtle and match the dark/emerald Studio theme.
- Remove bright blue/purple scrollbar colors.
- Replace `width: 100vw` with `width: 100%` where it causes overflow.

### Suggested global CSS

Use or adapt this:

```css
html,
body {
  overflow-x: hidden;
}

body {
  scrollbar-color: rgba(52, 211, 153, 0.35) #050706;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #050706;
}

::-webkit-scrollbar-thumb {
  background: rgba(52, 211, 153, 0.35);
  border-radius: 999px;
  border: 2px solid #050706;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(52, 211, 153, 0.55);
}
```

Also inspect any sections using:

```css
width: 100vw;
```

Replace with:

```css
width: 100%;
```

where possible.

---

## 6. Add Dejan Latkovic name visibility for SEO

When someone searches:

```text
Dejan Latkovic
```

the site should help search engines understand that Dejan is connected to Axivion Studio.

Do not turn the whole Studio site into a personal portfolio, but add enough name/entity information for SEO.

### Add founder/credit line on the Studio homepage

Add a subtle line somewhere appropriate, such as near the footer, proof section, or about strip:

```text
Axivion Studio is the scientific visualization practice of Dejan Latkovic.
```

### Footer

Keep or add:

```text
© 2026 Dejan Latkovic / Axivion Studio
```

### AAAS / Science Advances proof card

Make sure this line remains somewhere on the work/proof section:

```text
Scientific visualization by Dejan Latkovic / Axivion Studio.
```

---

## 7. Add a Dejan Latkovic page for SEO

Create a simple page:

```text
/dejan-latkovic
```

### Page title

```text
Dejan Latkovic | Axivion Studio
```

### Meta description

```text
Dejan Latkovic is the founder of Axivion Studio, creating scientific visualization for researchers, labs, papers, proposals, covers, and advanced hardware teams.
```

### Page content

Keep this page clean and short. Include:

- Dejan Latkovic
- Founder of Axivion Studio
- Scientific visualization for researchers and labs
- Nanotechnology Engineering, University of Waterloo
- Optics, photonics, instrumentation, CAD, Blender, and technical visualization
- Science Advances cover art credit
- Link to Studio contact page
- Link to personal portfolio
- Link to AAAS / Science Advances issue if already used elsewhere

Do not overdo it. This is an SEO/entity page, not a huge biography.

---

## 8. Add structured data

Add JSON-LD structured data for both `Person` and `Organization`.

### Person schema

Use:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dejan Latkovic",
  "url": "https://axivionstudio.com/dejan-latkovic",
  "jobTitle": "Founder",
  "affiliation": {
    "@type": "Organization",
    "name": "Axivion Studio",
    "url": "https://axivionstudio.com"
  },
  "sameAs": [
    "PERSONAL_PORTFOLIO_URL",
    "LINKEDIN_URL",
    "GITHUB_URL"
  ]
}
```

Fill `sameAs` only with real existing public links already known in the repo or provided.

### Organization schema

Use:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Axivion Studio",
  "url": "https://axivionstudio.com",
  "founder": {
    "@type": "Person",
    "name": "Dejan Latkovic",
    "url": "https://axivionstudio.com/dejan-latkovic"
  },
  "description": "Scientific visualization for researchers, labs, papers, proposals, covers, and advanced hardware teams."
}
```

---

## 9. Add sitemap and robots.txt

Add:

```text
/public/sitemap.xml
/public/robots.txt
```

### sitemap.xml

Include at minimum:

```xml
https://axivionstudio.com/
https://axivionstudio.com/contact
https://axivionstudio.com/terms
https://axivionstudio.com/dejan-latkovic
```

Use valid XML sitemap format.

### robots.txt

Use:

```text
User-agent: *
Allow: /

Sitemap: https://axivionstudio.com/sitemap.xml
```

---

## 10. Fix old GitHub Pages render route

The old portfolio render route:

```text
https://dejanlat.github.io/PortfolioWebsite/#/renders
```

should no longer behave like the primary render services page.

It should point people to:

```text
https://axivionstudio.com
```

### Required behavior

When someone visits the old render route, make it clear that scientific visualization services now live at Axivion Studio.

Options:

### Preferred option

Add an automatic redirect from the old renders route to:

```text
https://axivionstudio.com
```

### Acceptable option

Keep a small handoff page at `#/renders` with:

```text
Scientific visualization services have moved to Axivion Studio.
Visit axivionstudio.com
```

and a clear button:

```text
Open Axivion Studio
```

### Important

Do not break the rest of the personal portfolio.

The personal portfolio can still exist at:

```text
https://dejanlat.github.io/PortfolioWebsite
```

But the old render service route should no longer look like the main public business page.

---

## 11. Studio logo direction - defer full logo creation for now

Do not create a final Studio logo in this pass unless explicitly asked later.

For now, prepare the codebase so a Studio logo can be added cleanly, and keep the existing text wordmark usable.

Current Axivion Instruments branding uses a teal prism/pyramid icon and wordmark. Axivion Studio should eventually feel related but not identical.

Goal:

```text
Same family as Axivion Instruments, but greener, lighter, and more visual/creative.
```

### Direction for a future Studio logo

Use the existing prism mark language as inspiration only.

Recommended style:

- Keep prism / triangular optical geometry.
- Use emerald / green Studio accent.
- Keep dark theme compatibility.
- Make it related to Axivion Instruments, but clearly not the same identity.
- The wordmark should say:

```text
AXIVION STUDIO
SCIENTIFIC VISUALIZATION
```

or simply:

```text
AXIVION STUDIO
```

### Color direction

Use emerald Studio color family:

```css
--studio-emerald: #34d399;
--studio-emerald-dark: #059669;
--studio-teal: #0f766e;
--studio-bg: #050706;
```

The existing Scientific Visualization card uses:

```css
rgba(52, 211, 153, ...)
```

Keep that emerald direction.

### Current implementation requirement

For this pass:

- Keep the text wordmark in the header.
- Keep or improve the simple Studio favicon if already added.
- Do not overwrite the Axivion Instruments logo.
- Do not block the site cleanup on logo creation.
- Make sure future logo files could be added later without restructuring the header.

Future logo files may eventually be:

```text
public/axivion-studio-logo.svg
public/axivion-studio-mark.svg
public/axivion-studio-og.png
public/axivion-studio-favicon.ico
```

### Use uploaded references later

Use the current Axivion Instruments logo and prism visual as design references only:

- Axivion Instruments Logo Design 2D.png
- axivion-favicon.ico
- Refracted Light through Prism.webp

Do not directly overwrite the Instruments logo unless intentionally creating a separate Studio variant.

---

## 12. Verify `.ca` redirect

The intended final domain behavior is:

```text
https://axivionstudio.com
= main Studio website

https://www.axivionstudio.com
= main Studio website or redirects to root .com

https://axivionstudio.ca
= redirects to https://axivionstudio.com

https://www.axivionstudio.ca
= redirects to https://axivionstudio.com
```

If `.ca` redirect is being configured in Cloudflare, use one redirect rule inside the `axivionstudio.ca` zone:

### Match

```text
All incoming requests
```

### Type

```text
Dynamic redirect
```

### Target URL expression

```text
concat("https://axivionstudio.com", http.request.uri.path)
```

### Status code

```text
301 Permanent Redirect
```

### Preserve query string

```text
Enabled
```

Also ensure `.ca` DNS has proxied placeholder records:

```text
A    @      192.0.2.1    Proxied
A    www    192.0.2.1    Proxied
```

And make sure `.ca` is not also attached as a Worker custom domain if the goal is redirect-only.

---

## 13. Deployment behavior

The repo is connected to Cloudflare Workers Git deployment.

Expected Cloudflare fields:

```text
Build command:
npm run build

Deploy command:
npx wrangler deploy
```

After changes:

```bash
npm run build
npx wrangler deploy --dry-run
```

Then commit and push:

```bash
git add .
git commit -m "Finalize Axivion Studio contact and SEO updates"
git push origin main
```

Cloudflare should automatically deploy after the push.

---

## 14. Final QA checklist

After deployment, test in incognito:

### Main site

```text
https://axivionstudio.com
```

Check:

- Studio homepage loads.
- Browser tab says `Axivion Studio | Scientific Visualization`.
- Favicon is Studio-specific.
- Footer includes Dejan Latkovic / Axivion Studio.
- Dejan founder/credit line appears somewhere subtle.
- AAAS proof wording remains precise.
- Project Packages no longer overuse the word `still`.
- Package descriptions read cleanly as scientific visualization service offerings.

### Contact

```text
https://axivionstudio.com/contact
```

Check:

- Page says Axivion Studio, not Dejan portfolio.
- It does not foreground Axivion Instruments or PRISM.
- It does not show co-op/work as a main contact path.
- Form defaults to a Studio topic.
- Email subject/body are Studio-specific.
- Scrollbar is not bright blue/purple.
- No horizontal overflow.

### SEO page

```text
https://axivionstudio.com/dejan-latkovic
```

Check:

- Page loads.
- Metadata is Dejan-specific.
- It links back to Studio/contact/portfolio.
- It is not overly long or awkward.

### Old renders route

```text
https://dejanlat.github.io/PortfolioWebsite/#/renders
```

Check:

- Redirects or clearly points to `https://axivionstudio.com`.
- Does not present itself as the current main render business page.

### Terms

```text
https://axivionstudio.com/terms
```

Check:

- Terms page still loads.
- Refresh does not 404.

### Redirects

```text
https://axivionstudio.ca
https://www.axivionstudio.ca
https://axivionstudio.ca/contact
```

Expected:

```text
https://axivionstudio.com
https://axivionstudio.com
https://axivionstudio.com/contact
```

Use incognito because Chrome may cache previous bad 301 redirects.

---

## 15. Do not add unnecessary bloat

Avoid adding:

- Long founder story on the homepage
- Generic agency language
- “World-class”
- “Industry-leading”
- PRISM V6 CAD or private IP
- Too many animations
- Too many logos
- Legal-heavy text on the contact page
- Personal portfolio/career content on the Studio domain

Keep Axivion Studio focused on:

```text
Scientific visualization for researchers, labs, papers, proposals, covers, and advanced hardware teams.
```
