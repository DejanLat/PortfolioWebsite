import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import PrismProject from "./components/PrismProject";
import Contact from "./components/Contact";
import StudioContact from "./components/StudioContact";
import DejanLatkovic from "./components/DejanLatkovic";
import CarModding from "./components/CarModding";
import Renders from "./components/Renders";
import StudioTerms from "./components/StudioTerms";
import StudioProjectGuide from "./components/StudioProjectGuide";

const PUBLIC_URL = process.env.PUBLIC_URL || "";
const IS_PORTFOLIO_BUILD = PUBLIC_URL === "/PortfolioWebsite";
const ROUTER_BASENAME = PUBLIC_URL.startsWith("/") ? PUBLIC_URL : undefined;

const META = {
  studio: {
    title: "Axivion Studio | Scientific Visualization",
    description:
      "Scientific and technical visualization for researchers, labs, papers, proposals, journal covers, and advanced hardware teams.",
    ogDescription:
      "Scientific and technical visualization for researchers, labs, papers, proposals, journal covers, and advanced hardware teams.",
    siteName: "Axivion Studio",
    canonical: "https://axivionstudio.com/",
    image: "https://axivionstudio.com/axivion-studio-social-preview-v2.jpg",
  },
  studioRoute: {
    title: "Axivion Studio | Scientific Visualization",
    description:
      "Scientific and technical visualization for researchers, labs, papers, proposals, journal covers, and advanced hardware teams.",
    ogDescription:
      "Scientific and technical visualization for researchers, labs, papers, proposals, journal covers, and advanced hardware teams.",
    siteName: "Axivion Studio",
    canonical: "https://axivionstudio.com/",
    image: "https://axivionstudio.com/axivion-studio-social-preview-v2.jpg",
  },
  contact: {
    title: "Contact Axivion Studio | Let's Talk Science",
    description:
      "Request a free introductory chat about your research, scientific visuals, publication figures, or technical communication project.",
    ogDescription:
      "Bring an idea, a paper, or a rough sketch. Talk through your science and the possibilities with Axivion Studio.",
    siteName: "Axivion Studio",
    canonical: "https://axivionstudio.com/contact",
    image: "https://axivionstudio.com/axivion-studio-social-preview-v2.jpg",
  },
  guide: {
    title: "Project Guide | Axivion Studio",
    description: "Axivion Studio project packages and indicative estimates for a project discussion.",
    ogDescription: "Project packages and indicative estimates for discussing a scientific visualization project.",
    siteName: "Axivion Studio",
    canonical: "https://axivionstudio.com/project-guide",
    image: "https://axivionstudio.com/axivion-studio-social-preview-v2.jpg",
  },
  terms: {
    title: "Axivion Studio Terms of Service",
    description:
      "Terms of Service for Axivion Studio projects covering scope, payment, revisions, deliverables, licensing, confidentiality, cancellation, and scientific accuracy.",
    ogDescription:
      "Project terms for Axivion Studio scientific visualization, technical rendering, figure packages, animations, consulting, usage rights, revisions, and delivery.",
    siteName: "Axivion Studio",
    canonical: "https://axivionstudio.com/terms",
    image: "https://axivionstudio.com/axivion-studio-social-preview-v2.jpg",
  },
  portfolio: {
    title: "Dejan Latkovic | Engineering Portfolio",
    description:
      "Nanotechnology Engineering student at the University of Waterloo focused on optomechanical design, quantum optics instrumentation, precision engineering, and PRISM.",
    ogDescription:
      "Nanotechnology Engineering student at the University of Waterloo focused on optomechanical design, quantum optics instrumentation, precision engineering, and PRISM.",
    siteName: "Dejan Latkovic Portfolio",
    canonical: "https://dejanlat.github.io/PortfolioWebsite/",
    image: "https://dejanlat.github.io/PortfolioWebsite/Axivion%20Photos/WebsiteLinkPhotoIntruments.jpg",
  },
  person: {
    title: "Dejan Latkovic | Axivion Studio",
    description:
      "Dejan Latkovic is the founder of Axivion Studio, creating scientific visualization for researchers, labs, papers, proposals, covers, and advanced hardware teams.",
    ogDescription:
      "Founder of Axivion Studio, creating scientific visualization for researchers, labs, papers, proposals, covers, and advanced hardware teams.",
    siteName: "Axivion Studio",
    canonical: "https://axivionstudio.com/dejan-latkovic",
    image: "https://axivionstudio.com/axivion-studio-social-preview-v2.jpg",
  },
  prism: {
    title: "PRISM V5 | Precision Research Instrumentation",
    description:
      "A vertical-scanning objective microscope used at IQC for diamond NV-center qubit measurements through a cryostat window.",
    ogDescription:
      "PRISM V5 research, precision tooling, and opportunities for instrumentation collaboration and project funding.",
    siteName: "Axivion Instruments",
    canonical: "https://axivionstudio.com/prism",
    image: "https://axivionstudio.com/Axivion%20Photos/WebsiteLinkPhotoIntruments.jpg",
  },
  car: {
    title: "Car Build Notes | Dejan Latkovic",
    description: "Hands-on repairs, retrofits, and build notes from work on my own car.",
    ogDescription: "A growing build log of mechanical work, wiring, audio, and car projects by Dejan Latkovic.",
    siteName: "Dejan Latkovic Portfolio",
    canonical: "https://dejanlat.github.io/PortfolioWebsite/car-modding",
    image: "https://dejanlat.github.io/PortfolioWebsite/carmod_bg.webp",
  },
};

function setFavicons(type) {
  const icons = type === "studio"
    ? [
        { rel: "icon", href: `${PUBLIC_URL}/Axivion%20Photos/axivion-studio-favicon.ico?v=studio-4`, sizes: "any" },
        { rel: "icon", type: "image/svg+xml", href: `${PUBLIC_URL}/Axivion%20Photos/axivion-studio-favicon.svg?v=studio-4` },
        { rel: "shortcut icon", href: `${PUBLIC_URL}/Axivion%20Photos/axivion-studio-favicon.ico?v=studio-4` },
        { rel: "apple-touch-icon", href: `${PUBLIC_URL}/Axivion%20Photos/WebsiteLinkPhotoStudio.jpg?v=studio-4` },
      ]
    : type === "instruments"
      ? [
          { rel: "icon", type: "image/svg+xml", href: `${PUBLIC_URL}/Axivion%20Photos/axivion-Intrumentsfavicon-13C2B3.svg?v=instruments-1` },
          { rel: "shortcut icon", href: `${PUBLIC_URL}/Axivion%20Photos/axivion-Intrumentsfavicon-13C2B3.svg?v=instruments-1` },
        ]
      : [
          { rel: "icon", type: "image/x-icon", href: `${PUBLIC_URL}/Axivion%20Photos/axivion-studio-favicon-13C2B3.ico?v=portfolio-1` },
          { rel: "shortcut icon", href: `${PUBLIC_URL}/Axivion%20Photos/axivion-studio-favicon-13C2B3.ico?v=portfolio-1` },
        ];

  document.head.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]').forEach((element) => element.remove());
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
      : pathname.startsWith("/project-guide")
        ? "guide"
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
            : pathname.startsWith("/car-modding")
              ? "car"
              : "studio";
    let meta = META[type];
    if (pathname.startsWith("/portfolio/contact")) {
      meta = {
        ...META.portfolio,
        title: "Contact Dejan Latkovic | Engineering Portfolio",
        description: "Contact Dejan Latkovic about engineering, research, instrumentation, and collaboration opportunities.",
        ogDescription: "Contact Dejan Latkovic about engineering, research, instrumentation, and collaboration opportunities.",
        canonical: "https://dejanlat.github.io/PortfolioWebsite/portfolio/contact",
      };
    } else if (IS_PORTFOLIO_BUILD && type === "prism") {
      meta = {
        ...META.prism,
        title: "PRISM V5 | Precision Research Instrumentation",
        canonical: "https://dejanlat.github.io/PortfolioWebsite/prism",
        image: META.portfolio.image,
      };
    }

    document.title = meta.title;
    upsertMeta('meta[name="robots"]', { name: "robots", content: type === "guide" ? "noindex, follow" : "index, follow" });
    upsertMeta('meta[name="description"]', { name: "description", content: meta.description });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: meta.title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: meta.ogDescription });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: meta.canonical });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: meta.image });
    upsertMeta('meta[property="og:image:secure_url"]', { property: "og:image:secure_url", content: meta.image });
    upsertMeta('meta[property="og:image:type"]', { property: "og:image:type", content: "image/jpeg" });
    upsertMeta('meta[property="og:image:width"]', { property: "og:image:width", content: meta.image.includes("axivion-studio-social-preview-v2.jpg") ? "1200" : "1600" });
    upsertMeta('meta[property="og:image:height"]', { property: "og:image:height", content: meta.image.includes("axivion-studio-social-preview-v2.jpg") ? "630" : "900" });
    upsertMeta('meta[property="og:image:alt"]', { property: "og:image:alt", content: `${meta.siteName} website preview` });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: meta.siteName });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: meta.title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: meta.ogDescription });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: meta.image });
    setCanonical(meta.canonical);
    setFavicons(
      type === "studio" || type === "studioRoute" || type === "contact" || type === "terms" || type === "person" || type === "guide"
        ? "studio"
        : type === "prism"
          ? "instruments"
          : "portfolio"
    );
  }, [pathname]);

  return null;
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : null;
      if (target) target.scrollIntoView();
      else window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

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
          <Route path="/project-guide" element={IS_PORTFOLIO_BUILD ? <ExternalRedirect to="https://axivionstudio.com/project-guide" /> : <StudioProjectGuide />} />
          <Route path="/renders" element={IS_PORTFOLIO_BUILD ? <ExternalRedirect to="https://axivionstudio.com/" /> : <Renders />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/prism" element={<PrismProject />} />
          <Route path="/contact" element={<StudioContact contactEmail="contact@axivionstudio.com" />} />
          <Route path="/dejan-latkovic" element={<DejanLatkovic />} />
          <Route path="/portfolio/contact" element={<Contact contactEmail="contact@axivionstudio.com" />} />
          <Route path="/models" element={<Navigate to="/prism" replace />} />
          <Route path="/car-modding" element={<CarModding />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


