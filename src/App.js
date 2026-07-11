import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import PrismProject from "./components/PrismProject";
import Contact from "./components/Contact";
import StudioContact from "./components/StudioContact";
import DejanLatkovic from "./components/DejanLatkovic";
import Models from "./components/Models";
import CarModding from "./components/CarModding";
import Renders from "./components/Renders";
import StudioTerms from "./components/StudioTerms";

const PUBLIC_URL = process.env.PUBLIC_URL || "";
const IS_PORTFOLIO_BUILD = PUBLIC_URL === "/PortfolioWebsite";
const ROUTER_BASENAME = PUBLIC_URL.startsWith("/") ? PUBLIC_URL : undefined;

const META = {
  studio: {
    title: "Axivion Studio | Scientific Visualization",
    description:
      "Axivion Studio creates scientific visualization, technical renders, journal cover artwork, proposal graphics, optics diagrams, engineering visuals, and publication-ready figures for researchers, labs, and hardware teams.",
    ogDescription:
      "Scientific and technical visualization for researchers, labs, papers, proposals, covers, and advanced hardware teams.",
    siteName: "Axivion Studio",
    canonical: "https://axivionstudio.com/",
    image: "https://axivionstudio.com/axivion-studio-weblink-photo.png",
  },
  studioRoute: {
    title: "Axivion Studio | Scientific Visualization",
    description:
      "Axivion Studio creates scientific visualization, technical renders, journal cover artwork, proposal graphics, optics diagrams, engineering visuals, and publication-ready figures for researchers, labs, and hardware teams.",
    ogDescription:
      "Scientific and technical visualization for researchers, labs, papers, proposals, covers, and advanced hardware teams.",
    siteName: "Axivion Studio",
    canonical: "https://axivionstudio.com/",
    image: "https://axivionstudio.com/axivion-studio-weblink-photo.png",
  },
  contact: {
    title: "Contact Axivion Studio | Project Quote",
    description:
      "Contact Axivion Studio to request a scientific visualization, technical render, publication figure, proposal graphic, or scientific visual package.",
    ogDescription:
      "Request a project quote for scientific visualization, technical renders, publication figures, proposal graphics, and scientific visual packages.",
    siteName: "Axivion Studio",
    canonical: "https://axivionstudio.com/contact",
    image: "https://axivionstudio.com/axivion-studio-weblink-photo.png",
  },
  terms: {
    title: "Axivion Studio Terms of Service",
    description:
      "Terms of Service for Axivion Studio projects covering scope, payment, revisions, deliverables, licensing, confidentiality, cancellation, and scientific accuracy.",
    ogDescription:
      "Project terms for Axivion Studio scientific visualization, technical rendering, figure packages, animations, consulting, usage rights, revisions, and delivery.",
    siteName: "Axivion Studio",
    canonical: "https://axivionstudio.com/terms",
    image: "https://axivionstudio.com/axivion-studio-weblink-photo.png",
  },
  portfolio: {
    title: "Dejan Latkovic | Engineering Portfolio",
    description:
      "Nanotechnology Engineering student at the University of Waterloo focused on optomechanical design, quantum optics instrumentation, precision engineering, and PRISM.",
    ogDescription:
      "Nanotechnology Engineering student at the University of Waterloo focused on optomechanical design, quantum optics instrumentation, precision engineering, and PRISM.",
    siteName: "Dejan Latkovic Portfolio",
    canonical: "https://dejanlat.github.io/PortfolioWebsite/",
    image: "https://dejanlat.github.io/PortfolioWebsite/AxivionPrismBanner.png",
  },
  person: {
    title: "Dejan Latkovic | Axivion Studio",
    description:
      "Dejan Latkovic is the founder of Axivion Studio, creating scientific visualization for researchers, labs, papers, proposals, covers, and advanced hardware teams.",
    ogDescription:
      "Founder of Axivion Studio, creating scientific visualization for researchers, labs, papers, proposals, covers, and advanced hardware teams.",
    siteName: "Axivion Studio",
    canonical: "https://axivionstudio.com/dejan-latkovic",
    image: "https://axivionstudio.com/axivion-studio-weblink-photo.png",
  },
  prism: {
    title: "Axivion Instruments | Precision Scientific Instrumentation",
    description:
      "Precision scientific instrumentation for advanced microscopy and optical research workflows.",
    ogDescription:
      "Axivion Instruments develops precision scientific instrumentation for advanced microscopy and optical research workflows.",
    siteName: "Axivion Instruments",
    canonical: "https://axivionstudio.com/prism",
    image: "https://axivionstudio.com/AxivionPrismBanner.png",
  },
};

function setFavicons(type) {
  const icons = type === "studio"
    ? [
        { rel: "icon", href: `${PUBLIC_URL}/axivion-studio-favicon.ico?v=studio-3`, sizes: "any" },
        { rel: "icon", type: "image/svg+xml", href: `${PUBLIC_URL}/axivion-studio-favicon.svg?v=studio-3` },
        { rel: "shortcut icon", href: `${PUBLIC_URL}/axivion-studio-favicon.ico?v=studio-3` },
        { rel: "apple-touch-icon", href: `${PUBLIC_URL}/axivion-studio-weblink-photo.png?v=studio-3` },
      ]
    : [
        { rel: "icon", type: "image/x-icon", href: `${PUBLIC_URL}/axivion-favicon.ico` },
        { rel: "icon", type: "image/webp", href: `${PUBLIC_URL}/axivion-favicon-32.webp`, sizes: "32x32" },
        { rel: "icon", type: "image/png", href: `${PUBLIC_URL}/axivion-favicon-32.png`, sizes: "32x32" },
      ];

  document.head.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]').forEach((element) => element.remove());
  icons.forEach((icon) => {
    const link = document.createElement("link");
    link.setAttribute("rel", icon.rel);
    if (icon.type) link.setAttribute("type", icon.type);
    link.setAttribute("href", icon.href);
    if (icon.sizes) link.setAttribute("sizes", icon.sizes);
    document.head.appendChild(link);
  });
}
function upsertMeta(selector, attrs) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
}

function setCanonical(href) {
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", href);
}

function MetadataManager() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    const type = IS_PORTFOLIO_BUILD && pathname === "/"
      ? "portfolio"
      : pathname.startsWith("/terms")
        ? "terms"
        : pathname.startsWith("/contact")
        ? "contact"
        : pathname.startsWith("/studio")
        ? "studioRoute"
        : pathname.startsWith("/portfolio")
        ? "portfolio"
        : pathname.startsWith("/dejan-latkovic")
          ? "person"
          : pathname.startsWith("/prism")
            ? "prism"
            : "studio";
    const meta = META[type];

    document.title = meta.title;
    upsertMeta('meta[name="description"]', { name: "description", content: meta.description });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: meta.title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: meta.ogDescription });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: meta.canonical });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: meta.image });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: meta.siteName });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: meta.title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: meta.ogDescription });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: meta.image });
    setCanonical(meta.canonical);
    setFavicons(type === "studio" || type === "studioRoute" || type === "contact" || type === "terms" || type === "person" ? "studio" : "portfolio");
  }, [pathname]);

  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ExternalRedirect({ to }) {
  React.useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return null;
}

function App() {
  return (
    <div className="App">
      <Router basename={ROUTER_BASENAME}>
        <MetadataManager />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={IS_PORTFOLIO_BUILD ? <Portfolio /> : <Renders />} />
          <Route path="/studio" element={IS_PORTFOLIO_BUILD ? <ExternalRedirect to="https://axivionstudio.com/" /> : <Renders />} />
          <Route path="/terms" element={IS_PORTFOLIO_BUILD ? <ExternalRedirect to="https://axivionstudio.com/terms" /> : <StudioTerms />} />
          <Route path="/renders" element={IS_PORTFOLIO_BUILD ? <ExternalRedirect to="https://axivionstudio.com/" /> : <Renders />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/prism" element={<PrismProject />} />
          <Route path="/contact" element={<StudioContact contactEmail="axivioninstruments@gmail.com" />} />
          <Route path="/dejan-latkovic" element={<DejanLatkovic />} />
          <Route path="/portfolio/contact" element={<Contact contactEmail="axivioninstruments@gmail.com" />} />
          <Route path="/models" element={<Models />} />
          <Route path="/car-modding" element={<CarModding />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


