const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

function verifyPortfolioBuild(directory) {
  const base = "/PortfolioWebsite/";
  const origin = "https://dejanlat.github.io";
  const manifest = JSON.parse(fs.readFileSync(path.join(directory, "asset-manifest.json"), "utf8"));
  for (const asset of Object.values(manifest.files)) {
    assert(asset.startsWith(base), `Wrong GitHub Pages asset path: ${asset}`);
    assert(fs.existsSync(path.join(directory, asset.slice(base.length))), `Missing asset: ${asset}`);
  }
  const routes = [
    ["index.html", "Dejan Latkovic | Engineering Portfolio", ""],
    ["404.html", "Dejan Latkovic | Engineering Portfolio", ""],
    ["portfolio/index.html", "Dejan Latkovic | Engineering Portfolio", ""],
    ["portfolio/contact/index.html", "Contact Dejan Latkovic | Engineering Portfolio", "portfolio/contact"],
    ["prism/index.html", "Axivion Instruments | PRISM", "prism"],
  ];
  for (const [file, title, route] of routes) {
    const html = fs.readFileSync(path.join(directory, file), "utf8");
    assert(html.includes(`<title>${title}</title>`), `Wrong title in ${file}`);
    assert(html.includes(`rel="canonical" href="${origin}${base}${route}"`), `Wrong canonical in ${file}`);
    assert(html.includes(`src="${manifest.files["main.js"]}"`), `Wrong JavaScript bundle in ${file}`);
    assert(html.includes(`href="${manifest.files["main.css"]}"`), `Wrong stylesheet in ${file}`);
    assert(!html.includes('src="/static/') && !html.includes('href="/static/'), `Root asset path in ${file}`);
    assert(!html.includes("Axivion Studio | Scientific Visualization"), `Studio identity in ${file}`);
  }
  for (const file of ["robots.txt", "sitemap.xml"]) {
    const content = fs.readFileSync(path.join(directory, file), "utf8");
    assert(content.includes(`${origin}${base}`) && !content.includes("axivionstudio.com"), `Wrong domain in ${file}`);
  }
  function checkSourceMaps(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      assert(!entry.name.endsWith(".map"), `Public source map: ${entry.name}`);
      if (entry.isDirectory()) checkSourceMaps(path.join(directory, entry.name));
    }
  }
  checkSourceMaps(path.join(directory, "static"));
  console.log(`Verified portfolio routes and assets in ${directory}`);
}

if (require.main === module) verifyPortfolioBuild(path.resolve(process.argv[2] || "docs"));
module.exports = { verifyPortfolioBuild };
