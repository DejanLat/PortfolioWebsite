const fs = require("fs");
const path = require("path");

const buildDir = path.resolve(__dirname, "..", "build");
const indexPath = path.join(buildDir, "index.html");

const routes = [
  {
    path: "studio",
    title: "Axivion Studio | Scientific Visualization",
    description:
      "Axivion Studio creates scientific visualization, technical renders, journal cover artwork, proposal graphics, optics diagrams, engineering visuals, and publication-ready figures for researchers, labs, and hardware teams.",
    ogDescription:
      "Scientific and technical visualization for researchers, labs, papers, proposals, covers, and advanced hardware teams.",
    canonical: "https://axivionstudio.com/studio",
    siteName: "Axivion Studio",
    image: "https://axivionstudio.com/axivion-studio-weblink-photo.png",
  },
  {
    path: "contact",
    title: "Contact Axivion Studio | Project Quote",
    description:
      "Contact Axivion Studio to request a scientific visualization, technical render, publication figure, proposal graphic, or scientific visual package.",
    ogDescription:
      "Request a project quote for scientific visualization, technical renders, publication figures, proposal graphics, and scientific visual packages.",
    canonical: "https://axivionstudio.com/contact",
    siteName: "Axivion Studio",
    image: "https://axivionstudio.com/axivion-studio-weblink-photo.png",
  },
  {
    path: "terms",
    title: "Axivion Studio Terms of Service",
    description:
      "Terms of Service for Axivion Studio scientific visualization, technical rendering, modeling, figure packages, animations, consulting, and related creative services.",
    ogDescription:
      "Project terms for Axivion Studio scientific visualization, technical rendering, figure packages, animations, consulting, usage rights, revisions, and delivery.",
    canonical: "https://axivionstudio.com/terms",
    siteName: "Axivion Studio",
    image: "https://axivionstudio.com/axivion-studio-weblink-photo.png",
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

function applyMeta(html, meta) {
  let output = html;
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
  return output;
}

if (!fs.existsSync(indexPath)) {
  throw new Error(`Missing build index: ${indexPath}`);
}

const baseHtml = fs.readFileSync(indexPath, "utf8");
fs.copyFileSync(indexPath, path.join(buildDir, "404.html"));

for (const route of routes) {
  const routeDir = path.join(buildDir, route.path);
  fs.mkdirSync(routeDir, { recursive: true });
  const routeHtml = applyMeta(baseHtml, route);
  fs.writeFileSync(path.join(routeDir, "index.html"), routeHtml);
  fs.writeFileSync(path.join(buildDir, `${route.path}.html`), routeHtml);
}

console.log(`Generated route HTML for ${routes.map((route) => `/${route.path}`).join(", ")}`);
