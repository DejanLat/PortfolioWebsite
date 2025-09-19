// src/components/Models.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function Models() {
  // Control tiers
  const controlTiers = [
    { id: "cl-manual",  label: "Closed-Loop Manual",  short: "CL-Manual" },
    { id: "ol-auto",    label: "Open-Loop Auto",      short: "OL-Auto"   },
    { id: "cl-auto",    label: "Closed-Loop Auto",    short: "CL-Auto"   },
  ];
  const [tier, setTier] = useState(controlTiers[0].id);

  // Two orientations
  const models = useMemo(
    () => ({
      horizontal: {
        name: "PRISM ; Horizontal Scanning",
        blurb:
          "Optimized for benches and cryostats with lateral travel demands. Emphasizes orthogonal beam geometry across scan range.",
        features: [
          "Low profile; retrofit-friendly to crowded benches",
          "High stiffness for fast raster patterns",
          "Modular interfaces for objectives & detectors",
        ],
      },
      vertical: {
        name: "PRISM ; Vertical Scanning",
        blurb:
          "Designed for through-axis precision with gravity-friendly Z motion. Suited to tall setups and extended vertical reach.",
        features: [
          "Predictable alignment across long Z travel",
          "Drop-in adapters for varied environments",
        ],
      },
    }),
    []
  );

  // What changes per control tier (wording + indicative capabilities)
  const tierNotes = {
    "cl-manual": {
      tagline: "Dial-in positioning with readback. Ideal for setup, tuning, and teaching labs.",
      posClass: "Fine, loop-stabilized",
      travel: "13.5 mm / axis",
      operation: "Manual jog, loop hold",
      integration: "Basic I/O, USB",
    },
    "ol-auto": {
      tagline: "Programmatic motion without feedback. Best for scripted scans where repeatability is set by process.",
      posClass: "Fine, open-loop",
      travel: "13.5 mm / axis",
      operation: "Scripted jog & raster",
      integration: "Python/LabVIEW APIs",
    },
    "cl-auto": {
      tagline: "Programmatic motion with feedback for accuracy. Best for repeatable automated experiments.",
      posClass: "Precision, loop-stabilized",
      travel: "13.5 mm / axis",
      operation: "Scripted raster + closed-loop hold",
      integration: "Advanced API + triggers",
    },
  };

  const rows = useMemo(
    () => [
      { feature: "Orientation", H: "Horizontal scanning", V: "Vertical scanning" },
      { feature: "Control Tier", H: tierNotes[tier].short ?? "", V: tierNotes[tier].short ?? "" },
      { feature: "Positioning class", H: tierNotes[tier].posClass, V: tierNotes[tier].posClass },
      { feature: "Travel per axis", H: tierNotes[tier].travel, V: tierNotes[tier].travel },
      { feature: "Operating mode", H: tierNotes[tier].operation, V: tierNotes[tier].operation },
      { feature: "Integration", H: tierNotes[tier].integration, V: tierNotes[tier].integration },
      { feature: "Interfaces", H: "Modular optics & detectors", V: "Modular optics & detectors" },
      { feature: "Use cases", H: "Benches • Cryostats • Rasters", V: "Tall stacks • Long Z • Rasters" },
    ],
    [tier]
  );

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-black/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link to="/prism" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <ArrowLeft size={18} />
            <span>Back</span>
          </Link>
          <div className="font-semibold tracking-widest">PRISM MODELS</div>
          <Link to="/contact" className="rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90">
            Contact
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-6">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight"
        >
          Choose your PRISM
        </motion.h1>
        <p className="mt-3 text-white/70 max-w-2xl">
          Two scanning orientations with three control options. Full specifications are available under NDA.
        </p>

        {/* Control tier picker */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {controlTiers.map((t) => (
            <button
              key={t.id}
              onClick={() => setTier(t.id)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                tier === t.id ? "bg-white text-black" : "border border-white/30 text-white/80 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="mt-2 text-sm text-white/60">{tierNotes[tier].tagline}</div>
      </section>

      {/* Two model cards */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Horizontal */}
          <div className="rounded-3xl border border-white/10 p-6">
            <div className="text-sm uppercase tracking-widest text-white/60">Model</div>
            <h2 className="mt-1 text-2xl font-semibold">{models.horizontal.name}</h2>
            <div className="mt-3 h-44 rounded-2xl border border-white/10 bg-white/5 grid place-items-center text-white/40">
              Image Placeholder
            </div>
            <p className="mt-3 text-white/70">{models.horizontal.blurb}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {models.horizontal.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1 size-1.5 rounded-full bg-white/60" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <Link to="/contact" className="rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90">
                Request Details
              </Link>
              <Link to="/contact" className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium hover:border-white/60">
                Talk to Engineering
              </Link>
            </div>
          </div>

          {/* Vertical */}
          <div className="rounded-3xl border border-white/10 p-6">
            <div className="text-sm uppercase tracking-widest text-white/60">Model</div>
            <h2 className="mt-1 text-2xl font-semibold">{models.vertical.name}</h2>
            <div className="mt-3 h-44 rounded-2xl border border-white/10 bg-white/5 grid place-items-center text-white/40">
              Image Placeholder
            </div>
            <p className="mt-3 text-white/70">{models.vertical.blurb}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {models.vertical.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1 size-1.5 rounded-full bg-white/60" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <Link to="/contact" className="rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90">
                Request Details
              </Link>
              <Link to="/contact" className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium hover:border-white/60">
                Talk to Engineering
              </Link>
            </div>
          </div>
        </div>

        {/* Comparison table (H vs V; reacts to control tier) */}
        <div className="mt-10 rounded-3xl border border-white/10 overflow-hidden">
          <div className="grid grid-cols-3 text-sm">
            <div className="bg-white/5 px-4 py-3">Key Feature</div>
            <div className="bg-white/5 px-4 py-3">Horizontal PRISM</div>
            <div className="bg-white/5 px-4 py-3">Vertical PRISM</div>

            {rows.map((row) => (
              <React.Fragment key={row.feature}>
                <div className="px-4 py-3 border-t border-white/10 text-white/70">{row.feature}</div>
                <div className="px-4 py-3 border-t border-white/10">{row.H}</div>
                <div className="px-4 py-3 border-t border-white/10">{row.V}</div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <Link to="/contact" className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90">
            Get Full Specs
          </Link>
          <Link to="/contact" className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium hover:border-white/60">
            Schedule a Call
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-12">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-white/60 flex items-center justify-between">
          <div>PRISM</div>
          <div>© {new Date().getFullYear()} Axivion Instruments</div>
        </div>
      </footer>
    </div>
  );
}
