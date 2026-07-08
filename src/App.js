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

const META = {
  studio: {
    title: "Axivion Studio | Scientific Visualization",
    description:
      "Scientific and technical visualization for researchers, labs, papers, proposals, covers, and advanced hardware teams.",
    ogDescription:
      "Publication-ready scientific and technical visuals built through direct collaboration with researchers.",
    siteName: "Axivion Studio",
    canonical: "https://axivionstudio.com/",
    image: "https://axivionstudio.com/metasurface.png",
  },
  portfolio: {
    title: "Dejan Latkovic | Optomechanical Engineer",
    description:
      "Dejan Latkovic is a Nanotechnology Engineering student working in optomechanical design, quantum optics instrumentation, PRISM microscopy, Atomic Semi precision engineering, IQC research, and scientific visualization.",
    ogDescription:
      "Optomechanical engineering portfolio covering PRISM instrumentation, IQC research, Atomic Semi precision engineering, and scientific visualization.",
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
    image: "https://axivionstudio.com/metasurface.png",
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
    const type = pathname.startsWith("/portfolio")
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

function App() {
  return (
    <div className="App">
      <Router>
        <MetadataManager />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Renders />} />
          <Route path="/studio" element={<Renders />} />
          <Route path="/terms" element={<Renders />} />
          <Route path="/renders" element={<Renders />} />
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