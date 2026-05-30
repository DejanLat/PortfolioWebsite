import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  ExternalLink,
  Image as ImageIcon,
  Layers3,
  SendHorizonal,
} from "lucide-react";

const ACCENT = "#34d399";
const ACCENT_SOFT = "rgba(52, 211, 153, 0.18)";
const PUBLIC = process.env.PUBLIC_URL || "";

const renderImg = (file) => `${PUBLIC}/${file}`;

const SECTIONS = [
  
  {
    key: "phoenix-inside",
    icon: ImageIcon,
    title: "Inside Phoenix Figure Visual",
    tag: "Science Advances Cover",
    image: renderImg("InsidePhoenix.jpg"),
    bullets: [
      "Cover render for Science Advances Vol. 12 Issue 21, May 22 2026.",
      "Depicts a photon extractor in bulk diamond, visualizing photonic nanojet behavior around NV centers.",
      "Credit listed on the AAAS Science Advances cover: Dejan Latkovic.",
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
    image: renderImg("OutsidePhoenix.jpg"),
    bullets: [
      "Companion render to the Science Advances cover submission.",
      "Visualizes the exterior optical structure of the inverse-designed diamond nanostructure.",
      "Part of the render set commissioned by Behrooz Semnani for the photonic nanojets paper.",
    ],
    links: [
      { label: "Issue", href: "https://www.science.org/toc/sciadv/12/21" },
      { label: "Paper", href: "https://www.science.org/doi/10.1126/sciadv.aea5936" },
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

export default function Renders() {
  const [mx, setMx] = useState(-9999);
  const [my, setMy] = useState(-9999);
  const rootStyle = { "--mx": `${mx}px`, "--my": `${my}px` };

  const heroImage = useMemo(() => renderImg("metasurface.png"), []);

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

      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-black/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-3">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <ArrowLeft size={18} />
            <span>Back</span>
          </Link>
          <div className="h-5 w-px bg-white/20" />
          <div className="font-semibold tracking-widest">SCIENTIFIC VISUALIZATION</div>
          <div className="hidden sm:block text-white/40">RENDERS</div>
        </div>
      </header>

      <section className="relative pt-36 pb-16">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt="Metasurface render"
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              opacity: 0.28,
              filter: "brightness(0.82) contrast(1.05)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/78 to-black" />
          <div className="absolute inset-0 [background-image:radial-gradient(60rem_30rem_at_50%_20%,rgba(52,211,153,0.10),transparent_60%)]" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs uppercase tracking-widest text-white/90 border backdrop-blur-sm"
              style={{
                borderColor: "rgba(52,211,153,0.35)",
                background: "rgba(255,255,255,0.07)",
              }}
            >
              Blender / Python Geometry / Scientific Render Service
            </div>
            <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight">
              Scientific Visualization
              <span className="block text-white/50">& Renders</span>
            </h1>
            <p className="mt-4 text-white/80 max-w-2xl">
              I create polished scientific renders for researchers and technical teams who need complex
              nanoscale, photonics, or instrumentation concepts to feel clear, credible, and publication-ready.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium text-white"
                style={{ borderColor: "rgba(52,211,153,0.45)", background: "rgba(52,211,153,0.16)" }}
              >
                Request Render Service <SendHorizonal size={16} />
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

      <section className="relative w-full">
        <div className="mx-auto max-w-7xl px-6 pb-12">
          <div className="space-y-8">
            {SECTIONS.map((section) => (
              <div
                key={section.key}
                className="rounded-3xl p-0 overflow-hidden"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(0,0,0,0.55)",
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(340px,0.65fr)] h-full">
                  <div className="min-h-[420px] lg:min-h-[560px]">
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
                        <Clock size={12} /> {section.tag}
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
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col md:flex-row md:items-center gap-5">
            <div className="flex-1">
              <div className="text-sm uppercase tracking-widest" style={{ color: ACCENT }}>
                Render Service
              </div>
              <div className="mt-2 text-2xl font-semibold">Need a scientific render?</div>
              <p className="mt-2 text-sm leading-6 text-white/65 max-w-2xl">
                I can help turn a device, structure, mechanism, or experimental concept into a clean
                visual for papers, posters, grants, websites, or presentations.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium text-white"
              style={{ borderColor: "rgba(52,211,153,0.45)", background: "rgba(52,211,153,0.16)" }}
            >
              Contact for Renders <SendHorizonal size={16} />
            </Link>
          </div>

          <div className="mt-5 text-[11px] text-white/60">
            Credit note: Science Advances visuals are presented as scientific visualization credit/context only.
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-white/60 flex items-center justify-between">
          <div>Scientific Visualization & Renders</div>
          <div>© {new Date().getFullYear()} Dejan Latkovic</div>
        </div>
      </footer>
    </div>
  );
}
