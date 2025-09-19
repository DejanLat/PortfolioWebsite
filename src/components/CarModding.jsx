// // src/components/CarModding.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import WebpImg from "./WebpImg";                  // default export ✅
// import { Award, Zap, Shield, Wrench, Music2, Lightbulb } from "lucide-react";

// const PUBLIC = process.env.PUBLIC_URL;
// const srcFor = (base) => ({
//   webp: `${PUBLIC}/${base}.webp`,
//   png:  `${PUBLIC}/${base}.png`,
// });

// // one picture per subject (put matching .webp/.png in /public)
// const SECTIONS = [
//   {
//     key: "audio",
//     icon: Music2,
//     title: "MOST-Fiber Audio Retrofit (13 speakers / 480 W)",
//     hours: "4 days",
//     img: srcFor("carmod_audio"),
//     bullets: [
//       "Upgraded from base system to OEM-grade 13-speaker/480 W amp on MOST fiber.",
//       "3D-printed door brackets; trimmed panels; full wiring & power distribution.",
//       "Used official BMW schematics for correct pinouts, routing, and integration."
//     ],
//   },
//   {
//     key: "lighting",
//     icon: Lightbulb,
//     title: "Interior Lighting System",
//     hours: "4 hours",
//     img: srcFor("carmod_lighting"),
//     bullets: [
//       "Full disassembly of interior panels to add RGB lighting controllers.",
//       "Under-seat, door cards, and trim illumination with hidden wiring.",
//       "Clean cable management; fused and serviceable connections."
//     ],
//   },
//   {
//     key: "security",
//     icon: Shield,
//     title: "Anti-Theft Retrofit",
//     hours: "9 hours",
//     img: srcFor("carmod_security"),
//     bullets: [
//       "Integrated OEM anti-theft hardware with proper wiring harnesses.",
//       "Researched and followed professional BMW wiring documentation.",
//       "Verified signaling, power, and fault-free operation."
//     ],
//   },
//   {
//     key: "mechanical",
//     icon: Wrench,
//     title: "Maintenance & Mechanical Upgrades",
//     hours: "Varied",
//     img: srcFor("carmod_mechanical"),
//     bullets: [
//       "Replaced engine air filter, control arms, and rear shocks.",
//       "Retrofitted new headlight assemblies with correct alignment.",
//       "Documented torque specs; verified ride and NVH improvements."
//     ],
//   },
// ];

// export default function CarModding() {
//   // single faded background (no carousel)
//   const bg = srcFor("carmod_bg");

//   return (
//     <div className="min-h-screen w-full bg-white text-black">
//       {/* Hero with single faded background */}
//       <section className="relative h-[60vh] overflow-hidden pt-16">
//         <div className="absolute inset-0 -z-10">
//           <WebpImg
//             webp={bg.webp}
//             fallback={bg.png}
//             alt="Car Modding Background"
//             className="h-full w-full object-cover"
//             loading="lazy"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/60 to-white" />
//         </div>

//         <div className="h-full flex items-end">
//           <div className="mx-auto max-w-7xl w-full px-6 pb-10">
//             <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-1 text-xs uppercase tracking-widest text-black/70">
//               Automotive Engineering
//             </div>
//             <h1 className="mt-4 text-5xl sm:text-6xl font-semibold tracking-tight">
//               Car Modding
//               <span className="block text-black/60 text-3xl sm:text-4xl">
//                 OEM-grade retrofits & upgrades
//               </span>
//             </h1>
//             <p className="mt-3 max-w-2xl text-black/70">
//               Audio on fiber, hidden interior lighting, anti-theft integration, and key
//               mechanical upgrades;planned with BMW schematics and executed with clean
//               wiring and custom 3D-printed hardware.
//             </p>
//             <div className="mt-6">
//               <Link
//                 to="/"
//                 className="inline-flex items-center rounded-full border border-black/20 px-4 py-2 text-sm hover:border-black/40"
//               >
//                 ← Back to Portfolio
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Sections (styled like your Professional Performance cards) */}
//       <section className="relative bg-white">
//         <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {SECTIONS.map((s) => (
//               <div
//                 key={s.key}
//                 className="rounded-3xl border border-black/10 overflow-hidden bg-white hover:shadow-sm transition"
//               >
//                 <div className="flex flex-col md:flex-row h-full">
//                   {/* Image column */}
//                   <div className="w-full md:w-1/3 md:min-h-[220px] lg:min-h-[260px]">
//                     <WebpImg
//                       webp={s.img.webp}
//                       fallback={s.img.png}
//                       alt={s.title}
//                       className="h-full w-full object-cover"
//                       loading="lazy"
//                     />
//                   </div>

//                   {/* Content column */}
//                   <div className="flex-1 p-6">
//                     <div className="flex items-center justify-between">
//                       <div className="text-sm text-black/60">Project Work</div>
//                       <span className="text-[11px] px-2 py-1 rounded-full border border-black/10 bg-white/90">
//                         {s.hours}
//                       </span>
//                     </div>

//                     <div className="mt-1 text-xl font-semibold flex items-center gap-2">
//                       {/* s.icon is a component type (Music2, Lightbulb, etc.) */}
//                       {s.icon && React.createElement(s.icon, { size: 18 })}
//                       <span>{s.title}</span>
//                     </div>

//                     <ul className="mt-3 space-y-2 text-sm">
//                       {s.bullets.map((b, j) => (
//                         <li key={j} className="flex items-start gap-2">
//                           <span
//                             aria-hidden
//                             className="mt-1 inline-block h-2 w-2 rounded-full bg-black shrink-0"
//                           />
//                           <span>{b}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* footnote */}
//           <div className="mt-5 text-[11px] text-black/50">
//             Safety first: all wiring fused appropriately, OEM documentation consulted,
//             and work verified post-install.
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// src/components/CarModding.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WebpImg from "./WebpImg";
import { Music2, Lightbulb, Shield, Wrench, Clock, ArrowLeft } from "lucide-react";

const PUBLIC = process.env.PUBLIC_URL;
const srcFor = (base) => ({ webp: `${PUBLIC}/${base}.webp`, png: `${PUBLIC}/${base}.png` });

// ---- sections (one picture per subject)
const SECTIONS = [
  {
    key: "audio",
    icon: Music2,
    title: "MOST-Fiber Audio Retrofit (13 speakers / 480 W)",
    hours: "4 days",
    img: srcFor("carmod_audio"),
    bullets: [
      "Upgraded from base system to OEM-grade 13-speaker / 480 W amp on MOST fiber.",
      "3D-printed door brackets; trimmed panels; full wiring and power distribution.",
      "Used official BMW schematics for correct pinouts, routing, and integration.",
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
      "Clean cable management; fused and serviceable connections.",
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
      "Verified signaling, power, and fault-free operation.",
    ],
  },
  {
    key: "mechanical",
    icon: Wrench,
    title: "Maintenance & Mechanical Upgrades",
    hours: "Varied",
    img: srcFor("carmod_mechanical"),
    bullets: [
      "Replaced engine brake calipers, rear shocks, engine components, filters.",
      "Retrofitted new headlight assemblies with correct alignment.",
      "Maintained detailed records of all work performed on the vehicle.",
    ],
  },
];

export default function CarModding() {
  // === PINK accents
  const ACCENT = "#ff2aa0";
  const ACCENT_SOFT = "rgba(255, 42, 160, 0.18)";

  // === Cursor-follow glow (global)
  const [mx, setMx] = useState(-9999);
  const [my, setMy] = useState(-9999);
  const onMove = (e) => { setMx(e.clientX); setMy(e.clientY); };
  const rootStyle = { "--mx": `${mx}px`, "--my": `${my}px` };

  // === Hero-local halo
  const heroRef = useRef(null);
  const onHeroMove = (e) => {
    const el = heroRef.current; if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--hx", `${e.clientX - r.left}px`);
    el.style.setProperty("--hy", `${e.clientY - r.top}px`);
  };
  const updateHeroGlowFromViewport = useCallback(() => {
    const el = heroRef.current; if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--hx", `${mx - r.left}px`);
    el.style.setProperty("--hy", `${my - r.top}px`);
  }, [mx, my]);
  useEffect(() => { updateHeroGlowFromViewport(); }, [updateHeroGlowFromViewport]);
  useEffect(() => {
    let raf = 0;
    const schedule = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(updateHeroGlowFromViewport); };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); };
  }, [updateHeroGlowFromViewport]);

  // === Background image for hero (place carmod_bg.webp/png in /public)
  const bg = srcFor("carmod_bg");

  return (
    <div className="min-h-screen w-full bg-black text-white" onMouseMove={onMove} style={rootStyle}>
      {/* BACKGROUND LAYER (fixed) */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        {/* Global cursor halo */}
        <div className="absolute inset-0"
             style={{ background: `radial-gradient(700px at var(--mx) var(--my), ${ACCENT_SOFT}, transparent 60%)` }} />
        {/* Static top glow */}
        <div className="absolute inset-x-0 top-0 h-[70vh]"
             style={{ background: "radial-gradient(60rem 30rem at 50% -10%, rgba(255,42,160,0.18), transparent 60%)" }} />
      </div>

      {/* Top bar */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-black/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-3">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <ArrowLeft size={18} />
            <span>Back</span>
          </Link>
          <div className="h-5 w-px bg-white/20" />
          <div className="font-semibold tracking-widest">CAR MODDING</div>
          <div className="text-white/40">BUILD NOTES</div>
        </div>
      </header>

      {/* HERO */}
      <section ref={heroRef} onMouseMove={onHeroMove} className="relative pt-36 pb-16">
        {/* Pink gradient base + your photo blended on top */}
        <div className="absolute inset-0 -z-10">
          {/* Deep pink/indigo base */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2a001f] via-[#160012] to-black" />
          <div className="absolute inset-0 [background-image:radial-gradient(60rem_30rem_at_50%_120%,rgba(255,42,160,0.18),transparent_60%),linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.6))]" />
          {/* Background image ; faint & blended */}
          <WebpImg
            webp={bg.webp}
            fallback={bg.png}
            alt="Car Modding Background"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ opacity: 0.28, mixBlendMode: "screen" }}
          />
        </div>

        {/* Hero-local cursor halo */}
        <div className="pointer-events-none absolute inset-0 -z-[5]"
             style={{ background: `radial-gradient(700px at var(--hx) var(--hy), ${ACCENT_SOFT}, transparent 60%)` }} />

        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs uppercase tracking-widest text-white/90 border"
                 style={{ borderColor: "rgba(255,42,160,0.35)" }}>
              Automotive Engineering
            </div>
            <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight">Car Modding</h1>
            <p className="mt-4 text-white/80 max-w-2xl">
              Audio on fiber, hidden interior lighting, anti-theft integration, and key mechanical upgrades. Referenced
              with BMW schematics and executed with clean wiring and custom 3D-printed hardware.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="relative w-full">
        <div className="mx-auto max-w-7xl px-6 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SECTIONS.map((s) => (
              <div key={s.key} className="rounded-3xl p-0 overflow-hidden"
                   style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(0,0,0,0.55)" }}>
                <div className="flex flex-col md:flex-row h-full">
                  <div className="w-full md:w-1/3 md:min-h-[220px] lg:min-h-[260px]">
                    <WebpImg webp={s.img.webp} fallback={s.img.png} alt={s.title} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 text-xs rounded-full border px-2.5 py-1 text-white/80"
                           style={{ borderColor: "rgba(255,255,255,0.18)" }}>
                        <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                        Project Work
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[11px] px-2 py-1 rounded-full border bg-white/5 text-white/85"
                            style={{ borderColor: "rgba(255,255,255,0.14)" }}>
                        <Clock size={12} /> {s.hours}
                      </span>
                    </div>

                    <div className="mt-2 text-xl font-semibold flex items-center gap-2">
                      {s.icon && <s.icon size={18} />}
                      <span>{s.title}</span>
                    </div>

                    <ul className="mt-3 space-y-2 text-sm">
                      {s.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span aria-hidden className="mt-1 inline-block h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT }} />
                          <span className="text-white/90">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 text-[11px] text-white/60">
            Safety first: all wiring fused appropriately, OEM documentation consulted, and professionally verified post-install.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-top border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-white/60 flex items-center justify-between">
          <div>Car Modding</div>
          <div>© {new Date().getFullYear()} Dejan Latkovic</div>
        </div>
      </footer>
    </div>
  );
}
