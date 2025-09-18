// src/components/CarModding.jsx
import React from "react";
import { Link } from "react-router-dom";
import WebpImg from "./WebpImg";                  // default export ✅
import { Award, Zap, Shield, Wrench, Music2, Lightbulb } from "lucide-react";

const PUBLIC = process.env.PUBLIC_URL;
const srcFor = (base) => ({
  webp: `${PUBLIC}/${base}.webp`,
  png:  `${PUBLIC}/${base}.png`,
});

// one picture per subject (put matching .webp/.png in /public)
const SECTIONS = [
  {
    key: "audio",
    icon: Music2,
    title: "MOST-Fiber Audio Retrofit (13 speakers / 480 W)",
    hours: "4 days",
    img: srcFor("carmod_audio"),
    bullets: [
      "Upgraded from base system to OEM-grade 13-speaker/480 W amp on MOST fiber.",
      "3D-printed door brackets; trimmed panels; full wiring & power distribution.",
      "Used official BMW schematics for correct pinouts, routing, and integration."
    ],
  },
  {
    key: "lighting",
    icon: Lightbulb,
    title: "Interior Lighting System",
    hours: "4 hours",
    img: srcFor("carmod_lighting"),
    bullets: [
      "Full disassembly of interior panels to add RGB lighting controllers.",
      "Under-seat, door cards, and trim illumination with hidden wiring.",
      "Clean cable management; fused and serviceable connections."
    ],
  },
  {
    key: "security",
    icon: Shield,
    title: "Anti-Theft Retrofit",
    hours: "9 hours",
    img: srcFor("carmod_security"),
    bullets: [
      "Integrated OEM anti-theft hardware with proper wiring harnesses.",
      "Researched and followed professional BMW wiring documentation.",
      "Verified signaling, power, and fault-free operation."
    ],
  },
  {
    key: "mechanical",
    icon: Wrench,
    title: "Maintenance & Mechanical Upgrades",
    hours: "Varied",
    img: srcFor("carmod_mechanical"),
    bullets: [
      "Replaced engine air filter, control arms, and rear shocks.",
      "Retrofitted new headlight assemblies with correct alignment.",
      "Documented torque specs; verified ride and NVH improvements."
    ],
  },
];

export default function CarModding() {
  // single faded background (no carousel)
  const bg = srcFor("carmod_bg");

  return (
    <div className="min-h-screen w-full bg-white text-black">
      {/* Hero with single faded background */}
      <section className="relative h-[60vh] overflow-hidden pt-16">
        <div className="absolute inset-0 -z-10">
          <WebpImg
            webp={bg.webp}
            fallback={bg.png}
            alt="Car Modding Background"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/60 to-white" />
        </div>

        <div className="h-full flex items-end">
          <div className="mx-auto max-w-7xl w-full px-6 pb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-1 text-xs uppercase tracking-widest text-black/70">
              Automotive Engineering
            </div>
            <h1 className="mt-4 text-5xl sm:text-6xl font-semibold tracking-tight">
              Car Modding
              <span className="block text-black/60 text-3xl sm:text-4xl">
                OEM-grade retrofits & upgrades
              </span>
            </h1>
            <p className="mt-3 max-w-2xl text-black/70">
              Audio on fiber, hidden interior lighting, anti-theft integration, and key
              mechanical upgrades—planned with BMW schematics and executed with clean
              wiring and custom 3D-printed hardware.
            </p>
            <div className="mt-6">
              <Link
                to="/"
                className="inline-flex items-center rounded-full border border-black/20 px-4 py-2 text-sm hover:border-black/40"
              >
                ← Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sections (styled like your Professional Performance cards) */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SECTIONS.map((s) => (
              <div
                key={s.key}
                className="rounded-3xl border border-black/10 overflow-hidden bg-white hover:shadow-sm transition"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image column */}
                  <div className="w-full md:w-1/3 md:min-h-[220px] lg:min-h-[260px]">
                    <WebpImg
                      webp={s.img.webp}
                      fallback={s.img.png}
                      alt={s.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Content column */}
                  <div className="flex-1 p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-black/60">Project Work</div>
                      <span className="text-[11px] px-2 py-1 rounded-full border border-black/10 bg-white/90">
                        {s.hours}
                      </span>
                    </div>

                    <div className="mt-1 text-xl font-semibold flex items-center gap-2">
                      {/* s.icon is a component type (Music2, Lightbulb, etc.) */}
                      {s.icon && React.createElement(s.icon, { size: 18 })}
                      <span>{s.title}</span>
                    </div>

                    <ul className="mt-3 space-y-2 text-sm">
                      {s.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span
                            aria-hidden
                            className="mt-1 inline-block h-2 w-2 rounded-full bg-black shrink-0"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* footnote */}
          <div className="mt-5 text-[11px] text-black/50">
            Safety first: all wiring fused appropriately, OEM documentation consulted,
            and work verified post-install.
          </div>
        </div>
      </section>
    </div>
  );
}
