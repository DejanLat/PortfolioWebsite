const fs = require("node:fs");
const path = require("node:path");
const studioPackages = require("../src/data/studioPackages.json");

const publicIndexPath = path.resolve(__dirname, "..", "public", "index.html");
const html = fs.readFileSync(publicIndexPath, "utf8");
const jsonLdPattern = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/i;
const match = html.match(jsonLdPattern);

if (!match) throw new Error("Studio JSON-LD block not found in public/index.html");

const jsonLd = JSON.parse(match[1]);
const professionalService = jsonLd["@graph"].find((entry) => entry["@type"] === "ProfessionalService");

if (!professionalService?.hasOfferCatalog) {
  throw new Error("Studio offer catalog not found in public/index.html");
}

professionalService.hasOfferCatalog.itemListElement = studioPackages.map((pkg) => ({
  "@type": "Offer",
  name: pkg.name,
  price: String(pkg.price),
  priceCurrency: "CAD",
  url: "https://axivionstudio.com/#pricing",
  description: "Starting budget for " + pkg.name + "; the final quote depends on scope, complexity, assets, usage, deliverables, and timeline.",
  itemOffered: {
    "@type": "Service",
    name: pkg.name,
    description: pkg.distinction + " " + pkg.description,
  },
}));

const jsonLdBlock = "<script type=\"application/ld+json\">\n" + JSON.stringify(jsonLd, null, 2) + "\n    </script>";
const staticPricing = "<section aria-labelledby=\"static-pricing-heading\">\n" +
  "          <h2 id=\"static-pricing-heading\">Project Packages</h2>\n" +
  "          <p>Prices are starting budgets in CAD. Final quotes depend on scope, complexity, assets, usage, deliverables, and timeline.</p>\n" +
  "          <ul>\n" +
  studioPackages.map((pkg) => "            <li><strong>" + pkg.name + ":</strong> Starting at " + pkg.priceLabel + ". " + pkg.distinction + "</li>").join("\n") +
  "\n          </ul>\n" +
  "        </section>";
const staticPricingPattern = /<section aria-labelledby="static-pricing-heading">[\s\S]*?<\/section>/i;

if (!staticPricingPattern.test(html)) {
  throw new Error("Studio noscript pricing block not found in public/index.html");
}

const synchronized = html
  .replace(jsonLdPattern, jsonLdBlock)
  .replace(staticPricingPattern, staticPricing);

fs.writeFileSync(publicIndexPath, synchronized);

console.log("Synchronized Studio package JSON-LD and noscript pricing from src/data/studioPackages.json");