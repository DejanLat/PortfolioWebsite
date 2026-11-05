const fs = require("fs");
const path = require("path");

const buildDir = path.resolve(__dirname, "..", "build");
const indexPath = path.join(buildDir, "index.html");

const studioRoutes = [
  {
    path: "studio",
    title: "Axivion Studio | Scientific Visualization",
    description:
      "Scientific and technical visualization for researchers, labs, papers, proposals, journal covers, and advanced hardware teams.",
    ogDescription:
      "Scientific and technical visualization for researchers, labs, papers, proposals, journal covers, and advanced hardware teams.",
    canonical: "https://axivionstudio.com/",
    siteName: "Axivion Studio",
    image: "https://axivionstudio.com/axivion-studio-social-preview-v2.jpg",
  },
  {
    path: "contact",
    title: "Contact Axivion Studio | Let's Talk Science",
    description:
      "Request a free introductory chat about your research, scientific visuals, publication figures, or technical communication project.",
    ogDescription:
      "Bring an idea, a paper, or a rough sketch. Talk through your science and the possibilities with Axivion Studio.",
    canonical: "https://axivionstudio.com/contact",
    siteName: "Axivion Studio",
    image: "https://axivionstudio.com/axivion-studio-social-preview-v2.jpg",
  },
  {
    path: "project-guide",
    title: "Project Guide | Axivion Studio",
    description: "Axivion Studio project packages and indicative estimates for a project discussion.",
    ogDescription: "Project packages and indicative estimates for discussing a scientific visualization project.",
    canonical: "https://axivionstudio.com/project-guide",
    siteName: "Axivion Studio",
    image: "https://axivionstudio.com/axivion-studio-social-preview-v2.jpg",
    noindex: true,
  },
  {
    path: "terms",
    title: "Axivion Studio Terms of Service",
    description:
      "Terms of Service for Axivion Studio projects covering scope, payment, revisions, deliverables, licensing, confidentiality, cancellation, and scientific accuracy.",
    ogDescription:
      "Project terms for Axivion Studio scientific visualization, technical rendering, figure packages, animations, consulting, usage rights, revisions, and delivery.",
    canonical: "https://axivionstudio.com/terms",
    siteName: "Axivion Studio",
    image: "https://axivionstudio.com/axivion-studio-social-preview-v2.jpg",
  },
];

const portfolioRoot = {
  title: "Dejan Latkovic | Engineering Portfolio",
  description: "Nanotechnology Engineering student at the University of Waterloo focused on optomechanical design, quantum optics instrumentation, precision engineering, and PRISM.",
  ogDescription: "Nanotechnology Engineering student at the University of Waterloo focused on optomechanical design, quantum optics instrumentation, precision engineering, and PRISM.",
  canonical: "https://dejanlat.github.io/PortfolioWebsite/",
  siteName: "Dejan Latkovic Portfolio",
  image: "https://dejanlat.github.io/PortfolioWebsite/Axivion%20Photos/WebsiteLinkPhotoIntruments.jpg",
};

const portfolioRoutes = [
  { ...portfolioRoot, path: "portfolio" },
  {
    path: "portfolio/contact",
    title: "Contact Dejan Latkovic | Engineering Portfolio",
    description: "Contact Dejan Latkovic about engineering, research, instrumentation, and collaboration opportunities.",
    ogDescription: "Contact Dejan Latkovic about engineering, research, instrumentation, and collaboration opportunities.",
    canonical: "https://dejanlat.github.io/PortfolioWebsite/portfolio/contact",
    siteName: "Dejan Latkovic Portfolio",
    image: "https://dejanlat.github.io/PortfolioWebsite/Axivion%20Photos/WebsiteLinkPhotoIntruments.jpg",
  },
  {
    path: "prism",
    title: "PRISM V5 | Precision Research Instrumentation",
    description: "A vertical-scanning objective microscope used at IQC for diamond NV-center qubit measurements through a cryostat window.",
    ogDescription: "PRISM V5 research, precision tooling, and opportunities for instrumentation collaboration and project funding.",
    canonical: "https://dejanlat.github.io/PortfolioWebsite/prism",
    siteName: "Axivion Instruments",
    image: "https://dejanlat.github.io/PortfolioWebsite/Axivion%20Photos/WebsiteLinkPhotoIntruments.jpg",
  },
  {
    path: "car-modding",
    title: "Car Build Notes | Dejan Latkovic",
    description: "Hands-on repairs, retrofits, and build notes from work on my own car.",
    ogDescription: "A growing build log of mechanical work, wiring, audio, and car projects by Dejan Latkovic.",
    canonical: "https://dejanlat.github.io/PortfolioWebsite/car-modding",
    siteName: "Dejan Latkovic Portfolio",
    image: "https://dejanlat.github.io/PortfolioWebsite/carmod_bg.webp",
  },
];
const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

function replaceOrInsert(html, regex, replacement, before = "</head>") {
  if (regex.test(html)) return html.replace(regex, replacement);
  return html.replace(before, `${replacement}${before}`);
}

function applyPortfolioFavicons(html, type = "portfolio", base = "/PortfolioWebsite") {
  const iconHref = type === "instruments"
    ? `${base}/Axivion%20Photos/axivion-Intrumentsfavicon-13C2B3.svg?v=instruments-1`
    : `${base}/Axivion%20Photos/axivion-studio-favicon-13C2B3.ico?v=portfolio-1`;
  const iconType = type === "instruments" ? "image/svg+xml" : "image/x-icon";
  const withoutIcons = html.replace(/<link\s+rel="(?:icon|shortcut icon|apple-touch-icon)"[^>]*\/?\s*>/gi, "");
  const links = `<link rel="icon" type="${iconType}" href="${iconHref}"/><link rel="shortcut icon" href="${iconHref}"/>`;
  return withoutIcons.replace(/<title>/i, `${links}<title>`);
}
function applyPortfolioContent(html, meta) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: meta.title,
    description: meta.description,
    url: meta.canonical,
  };
  return html
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, `<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
    .replace(/<noscript>[\s\S]*?<\/noscript>/i, `<noscript><main><h1>${escapeAttr(meta.title)}</h1><p>${escapeAttr(meta.description)}</p><p>Enable JavaScript to explore the portfolio.</p></main></noscript>`)
    .replace(/<meta name="author" content="[^"]*"\s*\/?>(?![^<]*<\/meta>)/i, '<meta name="author" content="Dejan Latkovic"/>')
    .replace(/<meta name="keywords"[^>]*>/i, "")
    .replace(/<meta property="og:image:secure_url" content="[^"]*"\s*\/?>/i, `<meta property="og:image:secure_url" content="${escapeAttr(meta.image)}"/>`)
    .replace(/<meta property="og:image:width" content="[^"]*"\s*\/?>/i, '<meta property="og:image:width" content="1600"/>')
    .replace(/<meta property="og:image:height" content="[^"]*"\s*\/?>/i, '<meta property="og:image:height" content="900"/>')
    .replace(/<meta property="og:image:alt" content="[^"]*"\s*\/?>/i, `<meta property="og:image:alt" content="${escapeAttr(meta.siteName)} website preview"/>`);
}
function applyMeta(html, meta) {
  let output = html;
  output = replaceOrInsert(output, /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="robots" content="${meta.noindex ? "noindex, follow" : "index, follow"}"/>`);
  output = replaceOrInsert(output, /<title>.*?<\/title>/i, `<title>${escapeAttr(meta.title)}</title>`);
  output = replaceOrInsert(
    output,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>(?![^<]*<\/meta>)/i,
    `<meta name="description" content="${escapeAttr(meta.description)}"/>`
  );
  output = replaceOrInsert(
    output,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>(?![^<]*<\/link>)/i,
    `<link rel="canonical" href="${escapeAttr(meta.canonical)}"/>`
  );
  output = replaceOrInsert(
    output,
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>(?![^<]*<\/meta>)/i,
    `<meta property="og:title" content="${escapeAttr(meta.title)}"/>`
  );
  output = replaceOrInsert(
    output,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>(?![^<]*<\/meta>)/i,
    `<meta property="og:description" content="${escapeAttr(meta.ogDescription)}"/>`
  );
  output = replaceOrInsert(
    output,
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>(?![^<]*<\/meta>)/i,
    `<meta property="og:url" content="${escapeAttr(meta.canonical)}"/>`
  );
  output = replaceOrInsert(
    output,
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>(?![^<]*<\/meta>)/i,
    `<meta property="og:image" content="${escapeAttr(meta.image)}"/>`
  );
  output = replaceOrInsert(
    output,
    /<meta\s+property="og:site_name"\s+content="[^"]*"\s*\/?>(?![^<]*<\/meta>)/i,
    `<meta property="og:site_name" content="${escapeAttr(meta.siteName)}"/>`
  );
  output = replaceOrInsert(
    output,
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>(?![^<]*<\/meta>)/i,
    `<meta name="twitter:title" content="${escapeAttr(meta.title)}"/>`
  );
  output = replaceOrInsert(
    output,
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>(?![^<]*<\/meta>)/i,
    `<meta name="twitter:description" content="${escapeAttr(meta.ogDescription)}"/>`
  );
  output = replaceOrInsert(
    output,
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>(?![^<]*<\/meta>)/i,
    `<meta name="twitter:image" content="${escapeAttr(meta.image)}"/>`
  );
  if (meta.noindex) {
    const schema = { "@context": "https://schema.org", "@type": "WebPage", name: meta.title, description: meta.description, url: meta.canonical };
    output = output
      .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, `<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
      .replace(/<noscript>[\s\S]*?<\/noscript>/i, `<noscript><main><h1>${escapeAttr(meta.title)}</h1><p>Enable JavaScript to view the project guide.</p></main></noscript>`);
  }
  return output;
}

if (!fs.existsSync(indexPath)) {
  throw new Error(`Missing build index: ${indexPath}`);
}

const sourceHtml = fs.readFileSync(indexPath, "utf8");
const isPortfolioBuild = process.env.PUBLIC_URL === "/PortfolioWebsite";
const baseHtml = isPortfolioBuild ? applyPortfolioFavicons(applyPortfolioContent(applyMeta(sourceHtml, portfolioRoot), portfolioRoot)) : sourceHtml;
const routes = isPortfolioBuild ? portfolioRoutes : [...studioRoutes, ...portfolioRoutes.map((route) =>
  route.path === "prism" ? { ...route, canonical: "https://axivionstudio.com/prism", image: "https://axivionstudio.com/Axivion%20Photos/WebsiteLinkPhotoIntruments.jpg" } : route
)];

fs.writeFileSync(indexPath, baseHtml);
fs.writeFileSync(path.join(buildDir, "404.html"), baseHtml);

for (const route of routes) {
  const routeDir = path.join(buildDir, route.path);
  fs.mkdirSync(routeDir, { recursive: true });
  const isEngineeringRoute = portfolioRoutes.some((entry) => entry.path === route.path);
  const routeHtml = isPortfolioBuild || isEngineeringRoute
    ? applyPortfolioFavicons(applyPortfolioContent(applyMeta(baseHtml, route), route), route.path === "prism" ? "instruments" : "portfolio", isPortfolioBuild ? "/PortfolioWebsite" : "")
    : applyMeta(baseHtml, route);
  fs.writeFileSync(path.join(routeDir, "index.html"), routeHtml);
  fs.writeFileSync(path.join(buildDir, `${route.path.replace(/\//g, "-")}.html`), routeHtml);
}

if (isPortfolioBuild) {
  const sitemapUrls = [portfolioRoot, ...portfolioRoutes.filter((route) => route.path !== "portfolio")];
  fs.writeFileSync(path.join(buildDir, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${portfolioRoot.canonical}sitemap.xml\n`);
  fs.writeFileSync(path.join(buildDir, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.map((route) => `  <url><loc>${route.canonical}</loc></url>`).join("\n")}\n</urlset>\n`);
  fs.writeFileSync(path.join(buildDir, ".nojekyll"), "");
}

console.log(`Generated route HTML for ${routes.map((route) => `/${route.path}`).join(", ")}`);
