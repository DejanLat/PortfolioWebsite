import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStudioPointerGlow } from "../hooks/useStudioPointerGlow";
import { motion } from "framer-motion";
import {
  Calculator,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  Layers3,
  Menu,
  Quote,
  SendHorizonal,
  X,
} from "lucide-react";

const ACCENT = "#34d399";
const CONTACT_ACCENT = ACCENT;
const IQC_ACCENT = "#A40C34";
const PORTFOLIO_ACCENT = "#C97A3A";
const AAAS_ACCENT = "#273591";
const PUBLIC = process.env.PUBLIC_URL || "";

const renderImg = (file) => `${PUBLIC}/${file}`;

const WORK_EXAMPLES = [
  {
    key: "phoenix-inside",
    icon: ImageIcon,
    title: "Inside Phoenix Figure Visual",
    tag: "Science Advances Cover",
    image: renderImg("InsidePhoenix2k.jpg"),
    bullets: [
      "Scientific visualization by Dejan Latkovic / Axivion Studio. Cover art credit: Science Advances, Vol. 12, Issue 21, May 22, 2026.",
      "Depicts a photon extractor in bulk diamond, visualizing photonic nanojet behavior around NV centers.",
      "Cover render credited on the AAAS Science Advances issue page.",
    ],
    links: [
      { label: "Issue", href: "https://www.science.org/toc/sciadv/12/21" },
      { label: "Paper", href: "https://www.science.org/doi/10.1126/sciadv.aea5936" },
    ],
  },
  {
    key: "phoenix-outside",
    icon: ImageIcon,
    title: "Outside Phoenix Figure Visual",
    tag: "Science Advances Cover",
    image: renderImg("OutsidePhoenix2k.jpg"),
    bullets: [
      "Companion visual for the Science Advances cover submission.",
      "Visualizes the exterior optical structure of the inverse-designed diamond nanostructure.",
      "Part of the render set commissioned by Behrooz Semnani for the photonic nanojets paper.",
    ],
    links: [
      { label: "Issue", href: "https://www.science.org/toc/sciadv/12/21" },
      { label: "Paper", href: "https://www.science.org/doi/10.1126/sciadv.aea5936" },
      {
        label: "IQC Feature",
        href: "https://uwaterloo.ca/institute-for-quantum-computing/news/new-nanoscale-diamond-structure-better-collects-and-controls",
      },
    ],
  },
  {
    key: "metasurface",
    icon: Layers3,
    title: "Metasurface Visualization",
    tag: "Nanophotonics",
    image: renderImg("metasurface.png"),
    bullets: [
      "Blender render of a nanophotonic metasurface structure.",
      "Communicates nanoscale geometry, material contrast, and photonic structure layout for research use.",
      "Produced as scientific visualization support for ongoing photonics research.",
    ],
  },
];

const PACKAGES = [
  {
    label: "Entry point",
    name: "Technical Figure Render",
    price: "$650+ CAD",
    usd: "Approx. $475 USD",
    bestFor:
      "Posters, presentations, apparatus visuals, and clearly defined technical concepts",
    timeline: "1-2 weeks",
    description:
      "A focused visual for a project with a clear concept and established direction.",
    includes: [
      "One final visual",
      "Client-provided references and direction",
      "Basic modeling and scene preparation",
      "High-resolution PNG or JPEG",
      "Up to 2 revision rounds",
    ],
  },
  {
    label: "Most requested",
    name: "Publication & Hero Visual",
    price: "$1,350+ CAD",
    usd: "Approx. $990 USD",
    bestFor:
      "Research papers, journal cover candidates, proposals, grants, and major scientific announcements",
    timeline: "2-5 weeks",
    description:
      "A polished scientific visual developed collaboratively through technical discussion and concept development.",
    includes: [
      "Everything in Technical Figure Render",
      "Technical consultation",
      "Reference and source-material review",
      "Concept and visual-direction development",
      "Custom modeling and scene creation",
      "One publication-quality hero visual",
      "Alternate crops for common layouts",
      "Up to 3 revision rounds",
    ],
  },
  {
    label: "Complete package",
    name: "Scientific Visual Package",
    price: "$3,000+ CAD",
    usd: "Approx. $2,200 USD",
    bestFor:
      "Full papers, grant packages, websites, lab groups, and technical product launches",
    timeline: "4-8 weeks",
    description:
      "A coordinated set of related visuals with a consistent technical and visual direction.",
    includes: [
      "Everything in Publication & Hero Visual",
      "Three to five related final visuals",
      "Shared visual direction across the set",
      "Technical consistency between figures",
      "Reusable scene assets across the project",
      "Coordinated review milestones",
      "Alternate crops for selected visuals",
      "Up to 3 revision rounds per project stage",
    ],
  },
];

const QUOTE_PACKAGES = [
  { key: "technical", label: "Technical Figure Render", base: 650 },
  { key: "hero", label: "Publication & Hero Visual", base: 1350 },
  { key: "package", label: "Scientific Visual Package", base: 3000 },
];

const QUOTE_COMPLEXITY = [
  { key: "simple", label: "Simple / well-defined", factor: 1 },
  { key: "technical", label: "Technical / moderate detail", factor: 1.35 },
  { key: "advanced", label: "Advanced / high concept", factor: 1.8 },
];

const QUOTE_USAGE = [
  { key: "academic", label: "Academic / lab / internal", add: 0 },
  { key: "commercial", label: "Commercial communication", add: 500 },
  { key: "extended", label: "Extended campaign / broad use", add: 1250 },
];

const CAD_TO_USD_ESTIMATE = 0.73;

const QUOTE_TIMELINE = [
  { key: "standard", label: "Standard timeline", factor: 1 },
  { key: "priority", label: "Priority review", factor: 1.2 },
  { key: "rush", label: "Rush timeline", factor: 1.45 },
];
export const TERMS_GROUPS = [
  {
    title: "Scope and payment",
    items: [
      "You receive a written quote before work begins.",
      "Most projects begin with a 50% deposit.",
      "Final unwatermarked high-resolution files are delivered after final payment clears.",
    ],
  },
  {
    title: "Deliverables and revisions",
    items: [
      "Your quote lists exactly what files, formats, and revision rounds are included.",
      "A revision round is one consolidated set of feedback for a draft or milestone.",
      "New concepts, additional visuals, or major direction changes may require a revised quote.",
    ],
  },
  {
    title: "Usage and ownership",
    items: [
      "Final usage rights are confirmed in the project quote and normally begin after required payment clears.",
      "Working files, source scenes, models, and editable assets are not included unless stated.",
      "Expanded use or additional formats can be quoted before work begins or approved later in writing. Source files require a separate agreement based on the project.",
    ],
  },
  {
    title: "Accuracy and confidentiality",
    items: [
      "Confidential and unpublished work can be handled privately.",
      "Portfolio and public-sharing permissions are agreed on in writing.",
      "The client confirms the final scientific or technical accuracy before publication.",
    ],
  },
];

const FAQ_ITEMS = [
  {
    question: "What files will I receive?",
    answer:
      "Your quote lists the final export files included. Typical deliverables are high-resolution PNG or JPEG files, with TIFF, MP4, transparent-background versions, alternate crops, or other formats added when agreed in the quote.",
  },
  {
    question: "Are Blender, CAD, or source files included?",
    answer:
      "Not by default. Working files, source scenes, models, textures, project folders, and editable assets are only included when specifically listed in the written quote. If requested later, source files require a separate agreement based on the project.",
  },
  {
    question: "What information do you need to begin?",
    answer:
      "Please share the project context, intended use, timeline, reference material, technical constraints, and any journal, proposal, website, presentation, or publication requirements.",
  },
  {
    question: "How do revision rounds work?",
    answer:
      "Each revision round consists of one consolidated set of feedback. Your quote states how many revision rounds are included for the project.",
  },
  {
    question: "Can confidential or embargoed projects be handled?",
    answer:
      "Yes. Confidential or unpublished projects can be handled privately when confidentiality, embargo, and portfolio-sharing expectations are agreed in writing before sensitive material is shared.",
  },
  {
    question: "How are usage rights selected?",
    answer:
      "Your quote confirms the approved uses for the final visual, such as academic publication, internal communication, websites, promotional material, or broader commercial use.",
  },
  {
    question: "Can usage rights be expanded later?",
    answer:
      "Usually, yes. Expanded use may require written approval, an updated licence, and the current applicable usage rate plus an additional $250 CAD update fee.",
  },
  {
    question: "Do you guarantee journal or cover acceptance?",
    answer:
      "No. Axivion Studio can design around journal specifications and cover requirements, but editorial selection, publication acceptance, funding, and other external outcomes are not guaranteed.",
  },
  {
    question: "What currencies and payment schedules are available?",
    answer:
      "Prices are quoted in CAD, with approximate USD guidance when useful. Most projects begin with a 50% deposit and the remaining balance is due before final delivery. Larger projects may use milestone payments.",
  },
  {
    question: "What happens if the project scope changes?",
    answer:
      "New concepts, additional visuals, new formats, major direction changes, or expanded usage may require an updated quote, fee, and timeline.",
  },
  {
    question: "Can journal-specific dimensions or submission requirements be accommodated?",
    answer:
      "Yes. Include the target dimensions, format, resolution, colour requirements, and submission specifications during scoping so they can be included in the quote.",
  },
  {
    question: "Is rush work available?",
    answer:
      "Rush work may be available depending on project scope and current schedule. Priority or accelerated timelines may carry an additional fee.",
  },
  {
    question: "What happens after I request a quote?",
    answer:
      "You will receive a reply requesting any missing project details. Once the scope is clear, Axivion Studio will provide a written quote outlining deliverables, pricing, revision rounds, timeline, payment schedule, and usage rights.",
  },
];
const PROCESS = [
  ["Scope", "Define the scientific concept, audience, references, deliverables, use rights, timeline, and payment structure."],
  ["Direction", "Translate the core technical message into a visual approach that is accurate, readable, and polished."],
  ["Build", "Model, compose, light, render, and refine the scene around the agreed scientific or technical focus."],
  ["Check-ins", "Share progress during active work so the visual stays aligned before major time is spent in the wrong direction."],
  ["Revisions", "Use included revision rounds for consolidated feedback on a draft or milestone."],
  ["Delivery", "Provide final agreed export files for publication, presentation, web, or proposal use."],
];

const TESTIMONIAL = {
  label: "Client perspective",
  name: "Behrooz Semnani, PhD",
  role: "Scientific visualization client",
  organization: "Photonics research project",
  initials: "BS",
  image: `${renderImg("behrooz-semnani.avif")}?v=2`,
  linkedin: "https://www.linkedin.com/in/behrooz-semnani-phd-9a84b931/",
  quote: "",
  isReady: false,
};

const ARTIST_QUOTE = {
  label: "Artist perspective",
  name: "Dejan Latkovic",
  role: "Scientific Visual Artist",
  image: renderImg("Dejan_Lat_Quotepicture.jpg"),
  quote:
    "Scientific visualization sits between technical accuracy and visual clarity. My background in optics, instrumentation, and nanotechnology helps me understand complex systems quickly, communicate with researchers directly, and turn technical ideas into visuals that are accurate, polished, and publication-ready.",
};

export default function Renders() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  const heroRef = useRef(null);
  const { rootRef, rootStyle, updateRootPointer, updateLocalPointer } = useStudioPointerGlow();
  const [quotePackage, setQuotePackage] = useState("hero");
  const [quoteComplexity, setQuoteComplexity] = useState("technical");
  const [quoteUsage, setQuoteUsage] = useState("academic");
  const [quoteTimeline, setQuoteTimeline] = useState("standard");
  const [openFaqItems, setOpenFaqItems] = useState({});

  const heroImage = useMemo(() => renderImg("metasurface.png"), []);
  const quoteEstimate = useMemo(() => {
    const selectedPackage = QUOTE_PACKAGES.find((item) => item.key === quotePackage) || QUOTE_PACKAGES[1];
    const complexity = QUOTE_COMPLEXITY.find((item) => item.key === quoteComplexity) || QUOTE_COMPLEXITY[1];
    const usage = QUOTE_USAGE.find((item) => item.key === quoteUsage) || QUOTE_USAGE[0];
    const timeline = QUOTE_TIMELINE.find((item) => item.key === quoteTimeline) || QUOTE_TIMELINE[0];
    const low = Math.round(((selectedPackage.base * complexity.factor + usage.add) * timeline.factor) / 50) * 50;
    const high = Math.round((low * 1.35) / 50) * 50;
    const usdLow = Math.round((low * CAD_TO_USD_ESTIMATE) / 25) * 25;
    const usdHigh = Math.round((high * CAD_TO_USD_ESTIMATE) / 25) * 25;

    return {
      low,
      high,
      usdLow,
      usdHigh,
      label: selectedPackage.label,
      timeline: timeline.label,
    };
  }, [quotePackage, quoteComplexity, quoteUsage, quoteTimeline]);

  const scrollToId = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    const top = section.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

    window.scrollTo({ top, behavior: "smooth" });
  };
  const updateHeroMouse = (event) => updateLocalPointer(heroRef, event);
  const navItems = [
    { label: "Work", href: "#work", sectionId: "work" },
    { label: "Pricing", href: "#pricing", sectionId: "pricing" },
    { label: "Quote", href: "#quote", sectionId: "quote" },
    { label: "Process", href: "#process", sectionId: "process" },
    { label: "Terms", to: "/terms" },
  ];

  const handleSectionNav = (event, id) => {
    event.preventDefault();
    scrollToId(id);
    window.history.replaceState(null, "", `#${id}`);
    setNavOpen(false);
  };

  useEffect(() => {
    document.documentElement.classList.add("scrollbar-studio");
    return () => document.documentElement.classList.remove("scrollbar-studio");
  }, []);

  return (
    <div
      ref={rootRef}
      className="studio-page min-h-screen w-full bg-black text-white"
      onPointerMove={updateRootPointer}
      style={rootStyle}
    >
      <div className="studio-ambient-layer pointer-events-none fixed inset-0 z-0" aria-hidden>
        <div className="studio-cursor-glow absolute inset-0" />
        <div className="studio-top-glow absolute inset-x-0 top-0 h-[70vh]" />
      </div>

                              <header className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:h-16 lg:px-8 lg:py-0">
          <Link to="/" className="min-w-0 text-left" onClick={() => setNavOpen(false)}>
            <div className="truncate font-semibold tracking-widest leading-none">AXIVION STUDIO</div>
            <div className="mt-1 truncate text-[11px] uppercase tracking-widest text-white/45">
              Scientific Visualization
            </div>
          </Link>

          <nav className="hidden items-center gap-4 text-sm min-[1100px]:flex" aria-label="Axivion Studio navigation">
            {navItems.map((item) => item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className="whitespace-nowrap text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => handleSectionNav(event, item.sectionId)}
                className="whitespace-nowrap text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://uwaterloo.ca/institute-for-quantum-computing/contacts/dejan-latkovic-0"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-full px-4 py-2 font-medium text-white"
              style={{ border: "1.5px solid rgba(255,255,255,0.2)", transition: "border-color 0.25s ease, color 0.25s ease" }}
              onMouseEnter={(event) => { event.currentTarget.style.borderColor = IQC_ACCENT; event.currentTarget.style.color = IQC_ACCENT; }}
              onMouseLeave={(event) => { event.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; event.currentTarget.style.color = "white"; }}
            >
              IQC
            </a>
            <a
              href="https://www.science.org/toc/sciadv/12/21"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-full px-4 py-2 font-medium text-white"
              style={{ border: "1.5px solid rgba(255,255,255,0.2)", transition: "border-color 0.25s ease, color 0.25s ease" }}
              onMouseEnter={(event) => { event.currentTarget.style.borderColor = AAAS_ACCENT; event.currentTarget.style.color = AAAS_ACCENT; }}
              onMouseLeave={(event) => { event.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; event.currentTarget.style.color = "white"; }}
            >
              AAAS
            </a>

            <a
              href="https://dejanlat.github.io/PortfolioWebsite/"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-full px-4 py-2 font-medium text-white"
              style={{ border: "1.5px solid rgba(255,255,255,0.2)", transition: "border-color 0.25s ease, color 0.25s ease" }}
              onMouseEnter={(event) => { event.currentTarget.style.borderColor = PORTFOLIO_ACCENT; event.currentTarget.style.color = PORTFOLIO_ACCENT; }}
              onMouseLeave={(event) => { event.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; event.currentTarget.style.color = "white"; }}
            >
              Founder Portfolio
            </a>
            <Link
              to="/contact"
              className="whitespace-nowrap rounded-full px-4 py-2 font-medium text-white"
              style={{ border: "1.5px solid rgba(255,255,255,0.2)", transition: "border-color 0.25s ease, color 0.25s ease" }}
              onMouseEnter={(event) => { event.currentTarget.style.borderColor = CONTACT_ACCENT; event.currentTarget.style.color = CONTACT_ACCENT; }}
              onMouseLeave={(event) => { event.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; event.currentTarget.style.color = "white"; }}
            >
              Contact
            </Link>
          </nav>

          <button
            type="button"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-white/85 transition hover:border-white/30 hover:text-white min-[1100px]:hidden"
            onClick={() => setNavOpen((open) => !open)}
            aria-label={navOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={navOpen}
          >
            {navOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {navOpen && (
          <div className="border-t border-white/10 bg-black/95 px-4 py-3 shadow-2xl min-[1100px]:hidden">
            <div className="mx-auto grid max-w-7xl gap-1 text-sm">
              {navItems.map((item) => item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className="rounded-xl px-3 py-3 text-left text-white/80 transition hover:bg-white/10 hover:text-white"
                  onClick={() => setNavOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) => handleSectionNav(event, item.sectionId)}
                  className="rounded-xl px-3 py-3 text-left text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://uwaterloo.ca/institute-for-quantum-computing/contacts/dejan-latkovic-0"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl px-3 py-3 text-white/80 transition hover:bg-white/10 hover:text-white"
                onClick={() => setNavOpen(false)}
              >
                IQC
              </a>
              <a
                href="https://www.science.org/toc/sciadv/12/21"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl px-3 py-3 text-white/80 transition hover:bg-white/10 hover:text-white"
                onClick={() => setNavOpen(false)}
              >
                AAAS
              </a>
              <a
                href="https://dejanlat.github.io/PortfolioWebsite/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 rounded-xl border px-3 py-3 font-medium text-white transition hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.15)" }}
                onMouseEnter={(event) => { event.currentTarget.style.borderColor = PORTFOLIO_ACCENT; event.currentTarget.style.color = PORTFOLIO_ACCENT; }}
                onMouseLeave={(event) => { event.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; event.currentTarget.style.color = "white"; }}
                onClick={() => setNavOpen(false)}
              >
                Founder Portfolio
              </a>

              <Link
                to="/contact"
                className="mt-1 rounded-xl border border-white/15 px-3 py-3 font-medium text-white transition hover:border-white/30"
                onClick={() => setNavOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>

                  <section ref={heroRef} onPointerMove={updateHeroMouse} className="relative pt-36 pb-16">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt="Metasurface scientific visualization"
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              opacity: 0.24,
              mixBlendMode: "normal",
              filter: "grayscale(8%) brightness(0.78) contrast(0.98)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black" />
          <div className="absolute inset-0 [background-image:radial-gradient(60rem_30rem_at_50%_20%,rgba(52,211,153,0.12),transparent_60%)]" />
        </div>

        <div className="studio-local-cursor-glow pointer-events-none absolute inset-0 -z-[5]" />

        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs uppercase tracking-widest text-white/90 border backdrop-blur-sm"
              style={{ borderColor: "rgba(52,211,153,0.35)", background: "rgba(255,255,255,0.07)" }}
            >
              Scientific Visualization / Technical Renders / Hero Visuals
            </div>
            <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight">Axivion <span style={{ color: ACCENT }}>Studio</span></h1>
            <p className="mt-4 text-white/80 max-w-2xl">
              Scientific visualization for researchers, labs, and advanced hardware teams.
            </p>
            <p className="mt-4 text-white/65 max-w-2xl leading-7">
              Publication-ready scientific and technical visuals built through direct collaboration with
              researchers, with a focus on accuracy, clarity, and polished visual communication.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium text-white"
                style={{ borderColor: "rgba(52,211,153,0.45)", background: "rgba(52,211,153,0.16)" }}
              >
                Request a Project <SendHorizonal size={16} />
              </Link>
              <a
                href="https://www.science.org/toc/sciadv/12/21"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white/85 hover:text-white"
              >
                View AAAS Issue <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="relative w-full">
        <section id="work" className="mx-auto max-w-7xl px-6 pb-12">
          <div className="space-y-8">
            {WORK_EXAMPLES.map((section) => (
              <motion.div
                key={section.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl p-0 overflow-hidden"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(0,0,0,0.55)",
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(340px,0.65fr)] h-full">
                  <div className="min-h-[360px] lg:min-h-[560px]">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center justify-between gap-3">
                      <div
                        className="inline-flex items-center gap-2 text-xs rounded-full border px-2.5 py-1 text-white/80"
                        style={{ borderColor: "rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)" }}
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                        Visual Work
                      </div>
                      <span
                        className="inline-flex items-center gap-1.5 text-[11px] px-2 py-1 rounded-full border bg-white/5 text-white/85"
                        style={{ borderColor: "rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.06)" }}
                      >
                        <FileText size={12} /> {section.tag}
                      </span>
                    </div>

                    <div className="mt-2 text-xl font-semibold flex items-center gap-2">
                      {section.icon && <section.icon size={18} />}
                      <span>{section.title}</span>
                    </div>

                    <ul className="mt-3 space-y-2 text-sm">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span
                            aria-hidden
                            className="mt-1 inline-block h-2 w-2 rounded-full shrink-0"
                            style={{ backgroundColor: ACCENT }}
                          />
                          <span className="text-white/90">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {Array.isArray(section.links) && (
                      <div className="mt-5 flex flex-wrap gap-3">
                        {section.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-medium"
                            style={{ color: ACCENT }}
                          >
                            {link.label} <ExternalLink size={14} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <div className="text-sm uppercase tracking-widest" style={{ color: ACCENT }}>
                Services
              </div>
              <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Project Packages</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/60">
              Straightforward starting budgets for scientific visualization projects. Prices are listed in CAD, with approximate USD guidance for international clients. Final quotes depend on scientific complexity, reference quality, usage rights, and timeline.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {PACKAGES.map((pkg) => (
              <motion.article
                key={pkg.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45 }}
                className={`studio-package-card flex h-full flex-col rounded-3xl border p-6 transition hover:-translate-y-0.5 ${pkg.label === "Most requested" ? "studio-package-card-featured shadow-2xl shadow-emerald-950/20" : "studio-package-card-neutral"}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold leading-tight">{pkg.name}</h3>
                  <span className="studio-soft-pill whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium">
                    {pkg.label}
                  </span>
                </div>
                <div className="mt-4 text-3xl font-semibold tracking-tight">{pkg.price}</div>
                <div className="mt-1 text-sm text-white/50">{pkg.usd}</div>
                <p className="mt-3 text-sm leading-6 text-white/70">{pkg.description}</p>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl border border-white/10 bg-black/25 p-3">
                    <div className="text-white/45">Best for</div>
                    <div className="mt-1 text-white/85">{pkg.bestFor}</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/25 p-3">
                    <div className="text-white/45 flex items-center gap-1.5">
                      <Clock size={14} /> Timeline
                    </div>
                    <div className="mt-1 text-white/85">{pkg.timeline}</div>
                  </div>
                </div>
                <ul className="mt-5 flex-1 space-y-2.5 text-sm text-white/75">
                  {pkg.includes.map((item) => {
                    const inherited = item.startsWith("Everything in ");
                    const finalVisual = /final visual|hero visual|related final visuals/i.test(item);
                    return (
                      <li
                        key={item}
                        className={`flex items-start gap-2 rounded-xl ${inherited ? "border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-emerald-50" : ""}`}
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0"
                          style={{ color: inherited ? "#a7f3d0" : ACCENT }}
                        />
                        <span className={inherited ? "font-medium" : finalVisual ? "font-medium text-white" : ""}>
                          {item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="quote" className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.22)] md:p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="studio-section-pill inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]">Quote Calculator</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">Estimate a starting range.</h2>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  Calculator results are planning estimates. Final pricing is confirmed in the written project quote.
                </p>
                <div className="studio-quote-summary mt-6 rounded-3xl border p-5">
                  <div className="flex items-center gap-2 text-sm uppercase tracking-widest text-white/58">
                    <Calculator size={16} /> Estimated range
                  </div>
                  <div className="mt-3 text-4xl font-semibold tracking-tight">
                    ${quoteEstimate.low.toLocaleString()}-${quoteEstimate.high.toLocaleString()} CAD
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/68">
                    Approx. ${quoteEstimate.usdLow.toLocaleString()}-${quoteEstimate.usdHigh.toLocaleString()} USD. Based on {quoteEstimate.label} with {quoteEstimate.timeline.toLowerCase()}.
                  </p>
                  <p className="mt-2 text-xs leading-5 text-white/52">
                    Estimates include the usage selected when the project is quoted. Expanding usage after approval may require the current applicable usage rate plus an additional $250 CAD update fee under the Terms of Service.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium text-white"
                    style={{ borderColor: "rgba(52,211,153,0.55)", background: "rgba(52,211,153,0.16)" }}
                  >
                    Request a Project <SendHorizonal size={16} />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  ["Project type", quotePackage, setQuotePackage, QUOTE_PACKAGES],
                  ["Scientific complexity", quoteComplexity, setQuoteComplexity, QUOTE_COMPLEXITY],
                  ["Use rights", quoteUsage, setQuoteUsage, QUOTE_USAGE],
                  ["Timeline", quoteTimeline, setQuoteTimeline, QUOTE_TIMELINE],
                ].map(([label, value, setter, options]) => (
                  <label key={label} className="studio-select-card block rounded-2xl border p-4">
                    <span className="block text-sm text-white/58">{label}</span>
                    <select
                      value={value}
                      onChange={(event) => setter(event.target.value)}
                      className="studio-quote-select mt-3 w-full rounded-xl border px-3 py-3 pr-10 text-sm text-white outline-none focus:border-emerald-300/60"
                    >
                      {options.map((option) => (
                        <option key={option.key} value={option.key}>{option.label}</option>
                      ))}
                    </select>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="trust" className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div className="text-sm uppercase tracking-widest" style={{ color: ACCENT }}>
              Trust and Perspective
            </div>
            <div className="max-w-xl text-sm leading-6 text-white/50">
              Client and artist perspectives on translating technical work into clear scientific visuals.
            </div>
          </div>

          <div className="space-y-6">

            <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 md:p-8 lg:p-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(240px,320px)_minmax(0,1fr)] lg:items-center">
                <aside className="order-2 border-t border-white/10 pt-6 lg:order-1 lg:border-r lg:border-t-0 lg:pr-8 lg:pt-0">
                  <div
                    className="aspect-square w-[min(100%,360px)] overflow-hidden rounded-[2rem] border shadow-2xl shadow-black/25 lg:w-[min(100%,300px)]"
                    style={{ borderColor: "rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.06)" }}
                  >
                    <img
                      src={ARTIST_QUOTE.image}
                      alt={`${ARTIST_QUOTE.name} portrait`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-5">
                    <div className="text-lg font-semibold text-white">{ARTIST_QUOTE.name}</div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-white/38">{ARTIST_QUOTE.role}</div>
                  </div>
                </aside>

                <div className="order-1 min-w-0 lg:order-2">
                  <div className="text-xs uppercase tracking-[0.22em]" style={{ color: ACCENT }}>
                    {ARTIST_QUOTE.label}
                  </div>
                  <Quote size={42} className="mt-6 text-emerald-300/45" />
                  <p className="mt-5 max-w-4xl text-lg leading-8 text-white/76 md:text-xl md:leading-9">
                    {ARTIST_QUOTE.quote}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section id="process" className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.22)] md:p-8">
            <div className="text-sm uppercase tracking-widest" style={{ color: ACCENT }}>
              Process
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {PROCESS.map(([title, body], index) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <div className="text-sm text-white/45">{String(index + 1).padStart(2, "0")}</div>
                  <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="terms" className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.22)] md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <div className="text-sm uppercase tracking-widest" style={{ color: ACCENT }}>
                  Project Terms
                </div>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">Clear terms before we begin.</h2>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  A short summary of how Axivion Studio projects are scoped, reviewed, licensed, and delivered.
                </p>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
              {TERMS_GROUPS.map((group) => (
                <motion.article
                  key={group.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4 }}
                  className="flex h-full flex-col rounded-3xl border border-emerald-300/18 bg-white/[0.055] p-5 transition hover:border-emerald-300/28 hover:bg-white/[0.075] md:p-6"
                >
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-white/70">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="mt-1 shrink-0" style={{ color: ACCENT }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>

            <p className="mt-7 max-w-3xl text-sm leading-7 text-white/68">
              Every project is governed by a written quote, project scope, and the full Axivion Studio Terms of Service.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/terms"
                className="inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium text-white"
                style={{ borderColor: "rgba(52,211,153,0.48)", background: "rgba(52,211,153,0.14)" }}
              >
                Read full terms <FileText size={15} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition hover:border-emerald-300/45 hover:bg-emerald-300/10"
              >
                Request a project quote <SendHorizonal size={15} />
              </Link>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.22)] md:p-8">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-widest" style={{ color: ACCENT }}>
                FAQ
              </div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">Common project questions.</h2>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Short answers for scoping, deliverables, revisions, confidentiality, and usage rights.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 lg:grid-cols-2">
              {FAQ_ITEMS.map((item, index) => {
                const answerId = `studio-faq-answer-${index}`;
                const questionId = `studio-faq-question-${index}`;
                const isOpen = Boolean(openFaqItems[index]);

                return (
                  <article
                    key={item.question}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-black/25 transition hover:border-emerald-300/25 hover:bg-white/[0.06]"
                  >
                    <button
                      id={questionId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenFaqItems((current) => ({ ...current, [index]: !current[index] }))}
                      className="flex w-full cursor-pointer items-start justify-between gap-4 p-4 text-left text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-emerald-300"
                    >
                      <span>{item.question}</span>
                      <span className="mt-0.5 shrink-0 text-lg leading-none text-emerald-300" aria-hidden="true">
                        {isOpen ? "-" : "+"}
                      </span>
                    </button>
                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      className={`studio-faq-answer ${isOpen ? "is-open" : ""}`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-4 pb-4 text-sm leading-7 text-white/68">{item.answer}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 pt-8 pb-14">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5">
            <div className="flex-1">
              <div className="text-sm uppercase tracking-widest" style={{ color: ACCENT }}>
                Axivion Studio
              </div>
              <div className="mt-2 text-2xl md:text-3xl font-semibold">
                Need a scientific visual for a paper, proposal, or cover submission?
              </div>
              <p className="mt-3 text-sm leading-6 text-white/65 max-w-3xl">
                Send the project context, intended use case, timeline, and any reference material. I can help
                turn a device, structure, mechanism, or experimental concept into a clean visual for research
                communication.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium text-white"
              style={{ borderColor: "rgba(52,211,153,0.55)", background: "rgba(52,211,153,0.18)" }}
            >
              Request a Project <SendHorizonal size={16} />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-white/60 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <div>Axivion Studio is the scientific visualization practice of Dejan Latkovic. <a href="https://dejanlat.github.io/PortfolioWebsite/" className="font-medium text-white/80 underline decoration-white/30 underline-offset-4 hover:text-white">Dejan Latkovic Engineering Portfolio</a> <span className="text-white/25">/</span> <Link to="/terms" className="font-medium text-white/80 underline decoration-white/30 underline-offset-4 hover:text-white">Terms of Service</Link> <span className="text-white/25">/</span> <Link to="/terms#privacy-and-website-contact" className="font-medium text-white/80 underline decoration-white/30 underline-offset-4 hover:text-white">Privacy</Link></div>
          <div>&copy; {new Date().getFullYear()} Dejan Latkovic / Axivion Studio</div>
        </div>
      </footer>
    </div>
  );
}






