import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  SendHorizonal,
  X,
} from "lucide-react";

const ACCENT = "#34d399";
const ACCENT_SOFT = "rgba(52, 211, 153, 0.18)";
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
    price: "$750+ CAD",
    usd: "Approx. $550 USD",
    bestFor: "Posters, slides, simple apparatus visuals",
    timeline: "1-2 weeks",
    description: "A focused render for a single concept, apparatus, structure, or presentation figure.",
    includes: ["One final image", "One intake call or written project brief", "Up to two revision rounds", "PNG or JPEG delivery"],
  },
  {
    label: "Most requested",
    name: "Publication Visual",
    price: "$1,125+ CAD",
    usd: "Approx. $825 USD",
    bestFor: "Paper figures, proposals, lab docs",
    timeline: "2-4 weeks",
    description: "The core Studio package for visuals that need technical discussion and accurate scientific representation.",
    includes: ["Technical discussion", "Reference review", "Concept direction", "One high-resolution image", "Up to three revision rounds"],
  },
  {
    label: "Cover-ready",
    name: "Cover Candidate",
    price: "$1,500+ CAD",
    usd: "Approx. $1,100 USD",
    bestFor: "Journal covers, major events, grant hero visuals",
    timeline: "3-5 weeks",
    description: "A developed hero visual that accounts for modeling, concept direction, render setup, revisions, and cover candidate presentation.",
    includes: ["Deeper concept development", "Technical discussion", "Modeling and scene setup", "One final hero render", "Alternate crops", "Up to three revision rounds"],
  },
  {
    label: "Best value",
    name: "Master Figure Package",
    price: "$3,000+ CAD",
    usd: "Approx. $2,200 USD",
    bestFor: "Full paper, grant, website, or group visual package",
    timeline: "4-8 weeks",
    description: "A coherent set of related visuals with a shared visual language across the project.",
    includes: ["Three to five related visuals", "Consistent visual style", "Technical alignment across panels", "Up to three revision rounds across the package"],
  },
];

const QUOTE_PACKAGES = [
  { key: "technical", label: "Technical Figure Render", base: 750 },
  { key: "publication", label: "Publication Visual", base: 1125 },
  { key: "cover", label: "Cover Candidate", base: 1500 },
  { key: "package", label: "Master Figure Package", base: 3000 },
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
const TERMS_GROUPS = [
  {
    title: "Project scope and payment",
    items: [
      "Each project begins with a written quote before payment is collected.",
      "Most projects start with a 50% deposit, while larger projects may be split into milestones such as concept, draft, and final delivery.",
      "Final high-resolution files are delivered once the remaining balance is paid.",
    ],
  },
  {
    title: "Included use rights",
    items: [
      "Standard licenses include personal, academic, lab, and internal research communication use.",
      "Commercial licenses can include websites, pitch decks, grant material, product pages, press releases, and normal business communication.",
      "Broader use such as paid ads, merchandise, packaging, resale, or campaign usage can be added by written agreement.",
    ],
  },
  {
    title: "What is delivered",
    items: [
      "Final deliverables are provided as agreed in the project scope.",
      "Working files, source scenes, geometry, materials, and editable scene files are not included unless added to the quote.",
      "Additional formats, source files, or extended usage rights can be discussed before the project begins.",
    ],
  },
  {
    title: "Review process",
    items: [
      "Review rounds are included based on the selected package.",
      "Clients can request progress previews during active milestones, and extra revisions can be added if the project needs more development.",
      "For scientific or technical visuals, the client is responsible for confirming the final accuracy of the approved visual before public release.",
    ],
  },
  {
    title: "Confidential work",
    items: [
      "Confidential, embargoed, unpublished, or sensitive work can be handled privately.",
      "Portfolio use, public sharing, and file handling can be agreed in writing before the project starts.",
    ],
  },
  {
    title: "Fair use and protection",
    items: [
      "To protect both sides, the final license depends on completed payment and agreed use.",
      "Unauthorized resale, unpaid use, AI training, dataset creation, or use outside the approved license is not permitted without written approval.",
    ],
  },
];
const PROCESS = [
  ["Consult", "Discuss the scientific idea, target audience, use case, references, and technical constraints."],
  ["Concept", "Translate the core scientific message into a visual direction that is accurate and readable."],
  ["Render", "Build the scene, lighting, materials, camera framing, and visual hierarchy."],
  ["Revise", "Review feedback with the researcher or team and correct technical or visual details."],
  ["Deliver", "Provide final agreed export files for publication, presentation, web, or proposal use."],
];

export default function Renders() {
  const { pathname } = useLocation();
  const [mx, setMx] = useState(-9999);
  const [my, setMy] = useState(-9999);
  const [hx, setHx] = useState(-9999);
  const [hy, setHy] = useState(-9999);
  const [navOpen, setNavOpen] = useState(false);
  const heroRef = useRef(null);
  const rootStyle = { "--mx": `${mx}px`, "--my": `${my}px`, "--hx": `${hx}px`, "--hy": `${hy}px` };
  const [quotePackage, setQuotePackage] = useState("publication");
  const [quoteComplexity, setQuoteComplexity] = useState("technical");
  const [quoteUsage, setQuoteUsage] = useState("academic");
  const [quoteTimeline, setQuoteTimeline] = useState("standard");

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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const updateHeroMouse = (event) => {
    const bounds = heroRef.current?.getBoundingClientRect();
    if (!bounds) return;
    setHx(event.clientX - bounds.left);
    setHy(event.clientY - bounds.top);
  };
  const navItems = [
    { label: "Work", action: () => scrollToId("work") },
    { label: "Pricing", action: () => scrollToId("pricing") },
    { label: "Quote", action: () => scrollToId("quote") },
    { label: "Process", action: () => scrollToId("process") },
    { label: "Terms", action: () => scrollToId("terms") },
  ];

  const handleNavAction = (action) => {
    action();
    setNavOpen(false);
  };

  useEffect(() => {
    document.documentElement.classList.add("scrollbar-teal");
    return () => document.documentElement.classList.remove("scrollbar-teal");
  }, []);

  return (
    <div
      className="min-h-screen w-full bg-black text-white"
      onMouseMove={(event) => {
        setMx(event.clientX);
        setMy(event.clientY);
      }}
      style={rootStyle}
    >
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(700px at var(--mx) var(--my), ${ACCENT_SOFT}, transparent 60%)`,
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-[70vh]"
          style={{
            background:
              "radial-gradient(60rem 30rem at 50% -10%, rgba(52,211,153,0.18), transparent 60%)",
          }}
        />
      </div>

                              <header className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:h-16 lg:px-8 lg:py-0">
          <Link to="/studio" className="min-w-0 text-left" onClick={() => setNavOpen(false)}>
            <div className="truncate font-semibold tracking-widest leading-none">AXIVION STUDIO</div>
            <div className="mt-1 truncate text-[11px] uppercase tracking-widest text-white/45">
              Scientific Visualization
            </div>
          </Link>

          <nav className="hidden items-center gap-4 text-sm lg:flex" aria-label="Axivion Studio navigation">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavAction(item.action)}
                className="whitespace-nowrap text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </button>
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
            <Link
              to="/portfolio"
              className="whitespace-nowrap rounded-full px-4 py-2 font-medium text-white"
              style={{ border: "1.5px solid rgba(255,255,255,0.2)", transition: "border-color 0.25s ease, color 0.25s ease" }}
              onMouseEnter={(event) => { event.currentTarget.style.borderColor = PORTFOLIO_ACCENT; event.currentTarget.style.color = PORTFOLIO_ACCENT; }}
              onMouseLeave={(event) => { event.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; event.currentTarget.style.color = "white"; }}
            >
              Portfolio
            </Link>
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
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-white/85 transition hover:border-white/30 hover:text-white lg:hidden"
            onClick={() => setNavOpen((open) => !open)}
            aria-label={navOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={navOpen}
          >
            {navOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {navOpen && (
          <div className="border-t border-white/10 bg-black/95 px-4 py-3 shadow-2xl lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-1 text-sm">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavAction(item.action)}
                  className="rounded-xl px-3 py-3 text-left text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </button>
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
              <Link
                to="/portfolio"
                className="mt-1 rounded-xl border px-3 py-3 font-medium text-white transition hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.15)" }}
                onMouseEnter={(event) => { event.currentTarget.style.borderColor = PORTFOLIO_ACCENT; event.currentTarget.style.color = PORTFOLIO_ACCENT; }}
                onMouseLeave={(event) => { event.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; event.currentTarget.style.color = "white"; }}
                onClick={() => setNavOpen(false)}
              >
                Portfolio
              </Link>
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

                  <section ref={heroRef} onMouseMove={updateHeroMouse} className="relative pt-36 pb-16">
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

        <div
          className="pointer-events-none absolute inset-0 -z-[5]"
          style={{ background: "radial-gradient(700px at var(--hx) var(--hy), rgba(52, 211, 153, 0.18), transparent 60%)" }}
        />

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
              Scientific Visualization / Technical Renders / Publication Visuals
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

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {PACKAGES.map((pkg) => (
              <motion.article
                key={pkg.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold leading-tight">{pkg.name}</h3>
                  <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100 whitespace-nowrap">
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
                <ul className="mt-5 space-y-2 text-sm text-white/75">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: ACCENT }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="quote" className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <div className="text-sm uppercase tracking-widest" style={{ color: ACCENT }}>
                  Quote Calculator
                </div>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">Estimate a starting range.</h2>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  Use this as a planning tool before reaching out. Final quotes depend on reference quality, scientific complexity, usage rights, and timeline.
                </p>
                <div className="mt-6 rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-5">
                  <div className="flex items-center gap-2 text-sm uppercase tracking-widest text-emerald-100">
                    <Calculator size={16} /> Estimated range
                  </div>
                  <div className="mt-3 text-4xl font-semibold tracking-tight">
                    ${quoteEstimate.low.toLocaleString()}-${quoteEstimate.high.toLocaleString()} CAD
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/68">
                    Approx. ${quoteEstimate.usdLow.toLocaleString()}-${quoteEstimate.usdHigh.toLocaleString()} USD. Based on {quoteEstimate.label} with {quoteEstimate.timeline.toLowerCase()}.
                  </p>
                  <p className="mt-2 text-xs leading-5 text-white/52">
                    This is a planning estimate. Final pricing depends on source material, scientific complexity, usage rights, and revision scope.
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
                  <label key={label} className="block rounded-2xl border border-white/10 bg-black/25 p-4">
                    <span className="block text-sm text-white/58">{label}</span>
                    <select
                      value={value}
                      onChange={(event) => setter(event.target.value)}
                      className="mt-3 w-full rounded-xl border border-white/15 bg-black/70 px-3 py-3 text-sm text-white outline-none focus:border-emerald-300/60"
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
        <section id="process" className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="text-sm uppercase tracking-widest" style={{ color: ACCENT }}>
              Process
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4">
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
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6">
            <div>
              <div className="text-sm uppercase tracking-widest" style={{ color: ACCENT }}>
                Project Terms
              </div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">Clear terms before we begin.</h2>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Every project starts with a written scope, timeline, license, and payment structure so both sides know exactly what is included before work begins.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TERMS_GROUPS.map((group) => (
                <div key={group.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-white/70">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="mt-1 shrink-0" style={{ color: ACCENT }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
          <div>Axivion Studio is the scientific visualization practice of Dejan Latkovic.</div>
          <div>&copy; {new Date().getFullYear()} Dejan Latkovic / Axivion Studio</div>
        </div>
      </footer>
    </div>
  );
}
