const fs = require("node:fs");
const path = require("node:path");
const publicIndexPath = path.resolve(__dirname, "..", "public", "index.html");
const html = fs.readFileSync(publicIndexPath, "utf8");
const jsonLdPattern = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/i;
const match = html.match(jsonLdPattern);
if (!match) throw new Error("Studio JSON-LD block not found in public/index.html");
const jsonLd = JSON.parse(match[1]);
const professionalService = jsonLd["@graph"].find(entry => entry["@type"] === "ProfessionalService");
if (!professionalService) throw new Error("Studio service not found in public/index.html");
const services = [
  { name: "Publication & proposal visuals", description: "Scientific figures, journal cover artwork, and grant visuals for research communication." },
  { name: "Research & instrument visuals", description: "Scientific and technical visuals explaining structures, optical systems, and experimental hardware." },
  { name: "Animation & custom work", description: "Scientific animation, technical explainers, and custom visualization projects." },
];
professionalService.hasOfferCatalog = {
  "@type": "OfferCatalog",
  name: "Axivion Studio Services",
  itemListElement: services.map(service => ({ "@type": "Offer", url: "https://axivionstudio.com/#services", itemOffered: { "@type": "Service", ...service } })),
};
const escapeHtml = value => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const staticServices = '<section aria-labelledby="static-services-heading">\n          <h2 id="static-services-heading">Scientific visualization services</h2>\n          <p>Bring an idea, a paper, or a rough sketch. Request a free first conversation about your science and visual possibilities.</p>\n          <ul>\n' + services.map(service => '            <li><strong>' + escapeHtml(service.name) + ':</strong> ' + escapeHtml(service.description) + '</li>').join('\n') + '\n          </ul>\n          <p><a href="mailto:contact@axivionstudio.com">Request a free chat</a></p>\n        </section>';
const staticSectionPattern = /<section aria-labelledby="static-(?:pricing|services)-heading">[\s\S]*?<\/section>/i;
if (!staticSectionPattern.test(html)) throw new Error("Studio noscript services block not found in public/index.html");
const synchronized = html.replace(jsonLdPattern, '<script type="application/ld+json">\n' + JSON.stringify(jsonLd, null, 2) + '\n    </script>').replace(staticSectionPattern, staticServices);
fs.writeFileSync(publicIndexPath, synchronized);
console.log("Synchronized descriptive Studio services and noscript content without public pricing.");
