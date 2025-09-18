// // src/components/PrismProject.jsx
// import React, { useEffect, useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import mockData from "../data/mock";
// import {
//   ArrowLeft,
//   Download,
//   Gauge,
//   Zap,
//   Target,
//   Microscope,
//   Ruler,
//   Move3DIcon,
//   Cpu,
//   Settings,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function PrismX() {
//   // --- Gallery images ---
//   const galleryImages = useMemo(
//     () => (mockData?.portfolioImages || []).map((p) => p.url).filter(Boolean),
//     []
//   );
//   const [imgIndex, setImgIndex] = useState(0);
//   const nextImg = () => galleryImages.length && setImgIndex((i) => (i + 1) % galleryImages.length);
//   const prevImg = () => galleryImages.length && setImgIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") nextImg();
//       if (e.key === "ArrowLeft") prevImg();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [galleryImages.length]);

//   const [solidNav, setSolidNav] = useState(false);
//   const [activeSpecTab, setActiveSpecTab] = useState("architecture");

//   const specTabs = useMemo(
//     () => [
//       { id: "architecture", label: "Architecture", icon: Cpu },
//       { id: "optical", label: "Optical", icon: Target },
//       { id: "mechanical", label: "Mechanical", icon: Settings },
//       { id: "control", label: "Control", icon: Zap },
//     ],
//     []
//   );

//   useEffect(() => {
//     const onScroll = () => setSolidNav(window.scrollY > 24);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Neutral KPI badges
//   const kpis = [
//     { value: "3-axis", label: "Coordinated Motion" },
//     { value: "≈13± mm", label: "Range per Axis" },
//     { value: "< 50 nm", label: "Step Size (typ.)" },
//     { value: "Piezo", label: "Actuation" },
//   ];

//   // Neutral spec data (no hidden detailed branch)
//   const specData = {
//     architecture: [
//       { label: "System Topology", value: "Confidential overview" },
//       { label: "Alignment Strategy", value: "Summary available on request" },
//       { label: "Form Factor", value: "Retrofittable (details withheld)" },
//     ],
//     optical: [
//       { label: "Optical Path", value: "Confidential" },
//       { label: "Stability", value: "Lab-validated summary" },
//       { label: "Interfaces", value: "Options available" },
//     ],
//     mechanical: [
//       { label: "Frame Strategy", value: "Optimized for stability" },
//       { label: "Precision Class", value: "Characterized (values withheld)" },
//       { label: "Materials", value: "Engineering alloys (summary)" },
//     ],
//     control: [
//       { label: "Actuation", value: "Precision motion (model withheld)" },
//       { label: "Electronics", value: "Modular controller / embedded hub" },
//       { label: "APIs", value: "Python / LabVIEW" },
//     ],
//   };

//   return (
//     <div className="min-h-screen w-full bg-black text-white">
//       <header
//         className={`fixed inset-x-0 top-0 z-50 transition-all ${
//           solidNav ? "backdrop-blur bg-black/70 border-b border-white/10" : "bg-transparent"
//         }`}
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
//               <ArrowLeft size={18} />
//               <span>Back</span>
//             </Link>
//             <div className="h-5 w-px bg-white/20" />
//             <div className="font-semibold tracking-widest text-white">FLAGSHIP</div>
//             <div className="text-white/40">INSTRUMENT</div>
//           </div>
//           <div className="flex items-center gap-2">
//             <Link
//               to="/contact"
//               className="rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 active:scale-[0.99]"
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* In-progress banner
//       <div className="sticky top-16 z-40 bg-amber-50/95 backdrop-blur border-y border-amber-200">
//         <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between gap-3">
//           <div className="flex items-center gap-2 text-sm text-amber-900">
//             <span aria-hidden>🚧</span>
//             <span>
//               This site is a live work-in-progress. Some sections are placeholders.
//               <span className="ml-2 font-medium">Last update: 9/16/2024</span>
//             </span>
//           </div>
//         </div>
//       </div> */}

// {/* NDA banner */}
// <div className="fixed bottom-0 inset-x-0 z-50 bg-amber-50/95 backdrop-blur border-t border-amber-200">
//   <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between gap-3">
//     <div className="flex items-center gap-2 text-sm text-amber-900">
//       <span aria-hidden>⚠️</span>
//       <span>
//         Certain technical details are withheld for confidentiality. Please contact for information under NDA.
//       </span>
//     </div>
//   </div>
// </div>


//       {/* Hero */}
//       <section className="relative h-[92vh] w-full overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black" />
//           <div className="absolute inset-0 [background-image:radial-gradient(60rem_30rem_at_50%_120%,rgba(255,255,255,0.15),transparent_60%),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.6))]" />
//         </div>
//         <div className="absolute inset-0 grid place-items-center">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center px-6">
//             <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-widest text-white/80">
//               <Microscope size={14} /> Instrumentation Preview
//             </div>
//             <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
//               Periscope Relay Imaging
//               <span className="block text-white/80">Scanning Microscope</span>
//             </h1>
//             <p className="mx-auto mt-5 max-w-2xl text-balance text-white/70">
//               High-level preview of an advanced optical instrument. Detailed specifications are shared directly upon request.
//             </p>
//             <div className="mt-8 flex items-center justify-center gap-3">
//               <Link to="/models" className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90">
//                 Explore
//               </Link>
//               <Link to="/contact" className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium hover:border-white/60">
//                 Technical Specs
//               </Link>
//             </div>
//           </motion.div>
//         </div>

//         <div className="absolute bottom-6 inset-x-0">
//           <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-2 px-6">
//             {kpis.map((k) => (
//               <div key={k.label} className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 px-4 py-3 text-center">
//                 <div className="text-xl font-semibold">{k.value}</div>
//                 <div className="text-xs text-white/60">{k.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Design */}
//       <section id="design" className="relative w-full bg-black">
//         <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
//               <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Designed for stable, precise motion</h2>
//               <p className="mt-5 text-white/70 max-w-xl">A configurable platform focused on repeatable positioning and clean integration with standard lab workflows.</p>

//               <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
//                 <div className="rounded-2xl border border-white/10 p-5">
//                   <div className="text-lg font-semibold">Modular</div>
//                   <div className="text-sm text-white/60">Components and interfaces adapt to varied environments.</div>
//                 </div>
//                 <div className="rounded-2xl border border-white/10 p-5">
//                   <div className="text-lg font-semibold">Retrofit-friendly</div>
//                   <div className="text-sm text-white/60">Drop-in mounting and common accessory support.</div>
//                 </div>
//                 <div className="rounded-2xl border border-white/10 p-5">
//                   <div className="text-lg font-semibold">Stable</div>
//                   <div className="text-sm text-white/60">Emphasis on predictable motion and consistent alignment.</div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-1 lg:order-2">
//               {/* Main image */}
//               <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-white/5">
//                 {galleryImages.length > 0 ? (
//                   <>
//                     <img
//                       src={galleryImages[imgIndex]}
//                       alt={`PRISM preview ${imgIndex + 1}`}
//                       className="absolute inset-0 h-full w-full object-cover"
//                       draggable={false}
//                     />
//                     <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/20 to-black/0" />
//                     <button
//                       onClick={prevImg}
//                       aria-label="Previous image"
//                       className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-sm backdrop-blur border border-white/10 hover:bg-black/70"
//                     >
//                       ‹
//                     </button>
//                     <button
//                       onClick={nextImg}
//                       aria-label="Next image"
//                       className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-sm backdrop-blur border border-white/10 hover:bg-black/70"
//                     >
//                       ›
//                     </button>
//                     <div className="absolute bottom-3 right-3 text-xs text-white/80 bg-black/40 rounded-full px-2 py-1 border border-white/10">
//                       {imgIndex + 1}/{galleryImages.length}
//                     </div>
//                   </>
//                 ) : (
//                   <div className="absolute inset-0 grid place-items-center text-white/50">
//                     <Microscope size={120} />
//                   </div>
//                 )}
//               </div>

//               {/* Thumbnails */}
//               <div className="mt-4 grid grid-cols-3 gap-3">
//                 {[0, 1, 2].map((slot) => {
//                   const thumbIdx = galleryImages.length ? (imgIndex + slot) % galleryImages.length : null;
//                   return (
//                     <button
//                       key={slot}
//                       onClick={() => thumbIdx !== null && setImgIndex(thumbIdx)}
//                       className={`h-24 rounded-2xl overflow-hidden border ${
//                         thumbIdx === imgIndex ? "border-white/60" : "border-white/10 hover:border-white/30"
//                       } bg-white/5`}
//                       aria-label={`Show image ${thumbIdx !== null ? thumbIdx + 1 : ""}`}
//                     >
//                       {thumbIdx !== null ? (
//                         <img src={galleryImages[thumbIdx]} alt={`Thumbnail ${thumbIdx + 1}`} className="h-full w-full object-cover" draggable={false} />
//                       ) : (
//                         <div className="h-full w-full" />
//                       )}
//                     </button>
//                   );
//                 })}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Sticky chips */}
//       <section className="sticky top-16 z-40 border-y border-white/10 bg-black/60 backdrop-blur">
//         <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
//           <div className="flex items-center gap-6 text-sm">
//             <div className="flex items-center gap-2 text-white/80">
//               <Move3DIcon size={16} /> Full 3-axis motion
//               <Ruler size={16} /> 13± mm Range
//               <Gauge size={16} /> ~50 nm Stepping
//               <Zap size={16} /> Piezo Actuation
//             </div>
//           </div>
//           <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90">
//             <Download size={16} /> Request Spec Overview
//           </Link>
//         </div>
//       </section>

//       {/* System Overview */}
//       <section className="relative w-full bg-black">
//         <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
//             <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
//               <div className="text-sm uppercase tracking-widest text-white/60">System Overview</div>
//               <h3 className="mt-2 text-4xl font-semibold tracking-tight">Coordinated motion with a stable optical path</h3>
//               <p className="mt-4 text-white/70 max-w-xl">High-level description of the system’s motion strategy and alignment goals. Specific mechanisms are intentionally omitted.</p>

//               <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
//                 <div className="rounded-2xl border border-white/10 p-5">
//                   <div className="text-sm text-white/60">Motion</div>
//                   <div className="text-lg font-semibold">Coordinated axes</div>
//                 </div>
//                 <div className="rounded-2xl border border-white/10 p-5">
//                   <div className="text-sm text-white/60">Alignment</div>
//                   <div className="text-lg font-semibold">Consistent reference</div>
//                 </div>
//                 <div className="rounded-2xl border border-white/10 p-5">
//                   <div className="text-sm text-white/60">Integration</div>
//                   <div className="text-lg font-semibold">Drop-in adapters</div>
//                 </div>
//                 <div className="rounded-2xl border border-white/10 p-5">
//                   <div className="text-sm text-white/60">Operation</div>
//                   <div className="text-lg font-semibold">Predictable behavior</div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
//               <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10">
//                 <div className="absolute inset-0 grid place-items-center">
//                   <div className="w-64 h-64 rounded-full border border-white/20 relative">
//                     <div className="absolute inset-6 rounded-full border border-white/30" />
//                     <div className="absolute left-1/2 top-0 -translate-x-1/2 h-1/2 w-px bg-white/30" />
//                     <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-px bg-white/30" />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Specs */}
//       <section id="specs" className="relative w-full bg-black">
//         <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
//           <div className="flex items-center justify-between">
//             <h3 className="text-4xl font-semibold tracking-tight">Technical Specifications</h3>
//             <div className="flex items-center gap-2">
//               {specTabs.map((t) => (
//                 <button
//                   key={t.id}
//                   onClick={() => setActiveSpecTab(t.id)}
//                   className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
//                     activeSpecTab === t.id ? "bg-white text-black" : "border border-white/20 text-white/80 hover:text-white"
//                   }`}
//                 >
//                   <t.icon size={16} /> {t.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {specData[activeSpecTab].map((s) => (
//               <div key={s.label} className="rounded-2xl border border-white/10 p-6">
//                 <div className="text-sm text-white/60">{s.label}</div>
//                 <div className="mt-1 text-lg font-semibold">{s.value}</div>
//               </div>
//             ))}
//           </div>

//           {/* Neutral tiles */}
//           <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
//             <div className="rounded-2xl border border-white/10 p-6 text-center">
//               <div className="text-2xl font-semibold">3-axis</div>
//               <div className="text-sm text-white/60">Coordinated motion</div>
//             </div>
//             <div className="rounded-2xl border border-white/10 p-6 text-center">
//               <div className="text-2xl font-semibold">≈13± mm</div>
//               <div className="text-sm text-white/60">Range per axis</div>
//             </div>
//             <div className="rounded-2xl border border-white/10 p-6 text-center">
//               <div className="text-2xl font-semibold">&lt; 50 nm</div>
//               <div className="text-sm text-white/60">Typical stepping</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="relative w-full bg-black">
//         <div className="mx-auto max-w-7xl px-6 pb-24 lg:pb-32">
//           <div className="rounded-3xl border border-white/10 p-8 flex flex-col md:flex-row items-center gap-8">
//             <div className="flex-1">
//               <div className="text-sm uppercase tracking-widest text-white/60">Status</div>
//               <div className="mt-2 text-3xl font-semibold">Active development • Details on request</div>
//               <p className="mt-3 text-white/70 max-w-xl">
//                 Request the latest spec overview or schedule a conversation. Configuration options available for varied environments.
//               </p>
//             </div>
//             <div className="flex items-center gap-3">
//               <Link to="/contact" className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90">
//                 Request Specs
//               </Link>
//               <Link to="/contact" className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium hover:border-white/60">
//                 Observe a Live Demo
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-white/10 bg-black">
//         <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
//           <div>PRISM</div>
//           <div className="flex items-center gap-3">
//             <span></span>
//             <span>Drafting Provisional Patent</span>
//           </div>
//           <div>© {new Date().getFullYear()} Axivion Instruments</div>
//         </div>
//       </footer>
//     </div>
//   );
// }


// // src/components/PrismProject.jsx
// import React, { useEffect, useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import mockData from "../data/mock";
// import {
//   ArrowLeft,
//   Download,
//   Gauge,
//   Zap,
//   Target,
//   Microscope,
//   Ruler,
//   Move3DIcon,
//   Cpu,
//   Settings,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function PrismX() {
//   // --- Gallery images ---
//   const galleryImages = useMemo(
//     () => (mockData?.portfolioImages || []).map((p) => p.url).filter(Boolean),
//     []
//   );
//   const [imgIndex, setImgIndex] = useState(0);
//   const nextImg = () => galleryImages.length && setImgIndex((i) => (i + 1) % galleryImages.length);
//   const prevImg = () => galleryImages.length && setImgIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") nextImg();
//       if (e.key === "ArrowLeft") prevImg();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [galleryImages.length]);

//   const [solidNav, setSolidNav] = useState(false);
//   const [activeSpecTab, setActiveSpecTab] = useState("architecture");

//   const specTabs = useMemo(
//     () => [
//       { id: "architecture", label: "Architecture", icon: Cpu },
//       { id: "optical", label: "Optical", icon: Target },
//       { id: "mechanical", label: "Mechanical", icon: Settings },
//       { id: "control", label: "Control", icon: Zap },
//     ],
//     []
//   );

//   useEffect(() => {
//     const onScroll = () => setSolidNav(window.scrollY > 24);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // KPI badges
//   const kpis = [
//     { value: "3-axis", label: "Coordinated Motion" },
//     { value: "≈13± mm", label: "Range per Axis" },
//     { value: "< 50 nm", label: "Step Size (typ.)" },
//     { value: "Piezo", label: "Actuation" },
//   ];

//   // Neutral, informative spec data (no “withheld/confidential” wording)
//   const specData = {
//     architecture: [
//       { label: "System Topology", value: "Objective-scanning periscope (overview)" },
//       { label: "Alignment Strategy", value: "Maintains beam orthogonality across travel" },
//       { label: "Form Factor", value: "Retrofit-friendly to standard lab setups" },
//     ],
//     optical: [
//       { label: "Optical Path", value: "Relay imaging with coaxial illumination" },
//       { label: "Stability", value: "Lab-validated drift performance (summary)" },
//       { label: "Interfaces", value: "Common lab optics interfaces" },
//     ],
//     mechanical: [
//       { label: "Frame Strategy", value: "High stiffness with low mass" },
//       { label: "Positioning Class", value: "Fine positioning for raster workflows" },
//       { label: "Materials", value: "Engineering alloys & steels" },
//     ],
//     control: [
//       { label: "Actuation", value: "Piezo-driven linear motion" },
//       { label: "Electronics", value: "Modular controller / embedded hub" },
//       { label: "APIs", value: "Python / LabVIEW" },
//     ],
//   };

//   // ---- Models section state (adapted from Models.jsx) ----
//   const controlTiers = [
//     { id: "cl-manual", label: "Closed-Loop Manual", short: "CL-Manual" },
//     { id: "ol-auto",   label: "Open-Loop Auto",     short: "OL-Auto"   },
//     { id: "cl-auto",   label: "Closed-Loop Auto",   short: "CL-Auto"   },
//   ];
//   const [tier, setTier] = useState(controlTiers[0].id);

//   const models = useMemo(
//     () => ({
//       horizontal: {
//         name: "PRISM — Horizontal Scanning",
//         blurb:
//           "Optimized for benches and cryostats with lateral travel demands. Emphasizes orthogonal beam geometry across scan range.",
//         features: [
//           "Low profile; retrofit-friendly to crowded benches",
//           "High stiffness for fast raster patterns",
//           "Modular interfaces for objectives & detectors",
//         ],
//       },
//       vertical: {
//         name: "PRISM — Vertical Scanning",
//         blurb:
//           "Designed for through-axis precision with gravity-friendly Z motion. Suited to tall setups and extended vertical reach.",
//         features: [
//           "Hanging Z architecture for stable vertical moves",
//           "Predictable alignment across long Z travel",
//           "Drop-in adapters for varied environments",
//         ],
//       },
//     }),
//     []
//   );

//   const tierNotes = {
//     "cl-manual": {
//       tagline: "Dial-in positioning with readback. Ideal for setup, tuning, and teaching labs.",
//       posClass: "Fine, loop-stabilized",
//       travel: "≈13± mm / axis",
//       operation: "Manual jog, loop hold",
//       integration: "Basic I/O, USB",
//     },
//     "ol-auto": {
//       tagline: "Programmatic motion without feedback. Best for scripted scans where repeatability is set by process.",
//       posClass: "Fine, open-loop",
//       travel: "≈13± mm / axis",
//       operation: "Scripted jog & raster",
//       integration: "Python/LabVIEW APIs",
//     },
//     "cl-auto": {
//       tagline: "Programmatic motion with feedback for accuracy. Best for repeatable automated experiments.",
//       posClass: "Precision, loop-stabilized",
//       travel: "≈13± mm / axis",
//       operation: "Scripted raster + closed-loop hold",
//       integration: "Advanced API + triggers",
//     },
//   };

//   const rows = useMemo(
//     () => [
//       { feature: "Orientation", H: "Horizontal scanning", V: "Vertical scanning" },
//       { feature: "Positioning class", H: tierNotes[tier].posClass, V: tierNotes[tier].posClass },
//       { feature: "Travel per axis", H: tierNotes[tier].travel, V: tierNotes[tier].travel },
//       { feature: "Operating mode", H: tierNotes[tier].operation, V: tierNotes[tier].operation },
//       { feature: "Integration", H: tierNotes[tier].integration, V: tierNotes[tier].integration },
//       { feature: "Interfaces", H: "Modular optics & detectors", V: "Modular optics & detectors" },
//       { feature: "Use cases", H: "Benches • Cryostats • Rasters", V: "Tall stacks • Long Z • Rasters" },
//     ],
//     [tier]
//   );

//   return (
//     <div className="min-h-screen w-full bg-black text-white scroll-smooth">
//       <header
//         className={`fixed inset-x-0 top-0 z-50 transition-all ${
//           solidNav ? "backdrop-blur bg-black/70 border-b border-white/10" : "bg-transparent"
//         }`}
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
//               <ArrowLeft size={18} />
//               <span>Back</span>
//             </Link>
//             <div className="h-5 w-px bg-white/20" />
//             <div className="font-semibold tracking-widest text-white">FLAGSHIP</div>
//             <div className="text-white/40">INSTRUMENT</div>
//           </div>
//           <div className="flex items-center gap-2">
//             <Link
//               to="/contact"
//               className="rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 active:scale-[0.99]"
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* Hero */}
//       <section className="relative h-[92vh] w-full overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black" />
//           <div className="absolute inset-0 [background-image:radial-gradient(60rem_30rem_at_50%_120%,rgba(255,255,255,0.15),transparent_60%),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.6))]" />
//         </div>
//         <div className="absolute inset-0 grid place-items-center">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center px-6">
//             <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-widest text-white/80">
//               <Microscope size={14} /> Instrumentation Preview
//             </div>
//             <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
//               Periscope Relay Imaging
//               <span className="block text-white/80">Scanning Microscope</span>
//             </h1>
//             <p className="mx-auto mt-5 max-w-2xl text-balance text-white/70">
//               High-level preview of an advanced optical instrument. Detailed specifications are shared directly upon request.
//             </p>
//             <div className="mt-8 flex items-center justify-center gap-3">
//               {/* Explore scrolls to models section */}
//               <a href="#models" className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90">
//                 Explore
//               </a>
//             </div>
//           </motion.div>
//         </div>

//         <div className="absolute bottom-6 inset-x-0">
//           <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-2 px-6">
//             {kpis.map((k) => (
//               <div key={k.label} className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 px-4 py-3 text-center">
//                 <div className="text-xl font-semibold">{k.value}</div>
//                 <div className="text-xs text-white/60">{k.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Design */}
//       <section id="design" className="relative w-full bg-black">
//         <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
//               <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Designed for stable, precise motion</h2>
//               <p className="mt-5 text-white/70 max-w-xl">A configurable platform focused on repeatable positioning and clean integration with standard lab workflows.</p>

//               <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
//                 <div className="rounded-2xl border border-white/10 p-5">
//                   <div className="text-lg font-semibold">Modular</div>
//                   <div className="text-sm text-white/60">Components and interfaces adapt to varied environments.</div>
//                 </div>
//                 <div className="rounded-2xl border border-white/10 p-5">
//                   <div className="text-lg font-semibold">Retrofit-friendly</div>
//                   <div className="text-sm text-white/60">Drop-in mounting and common accessory support.</div>
//                 </div>
//                 <div className="rounded-2xl border border-white/10 p-5">
//                   <div className="text-lg font-semibold">Stable</div>
//                   <div className="text-sm text-white/60">Emphasis on predictable motion and consistent alignment.</div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-1 lg:order-2">
//               {/* Main image */}
//               <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-white/5">
//                 {galleryImages.length > 0 ? (
//                   <>
//                     <img
//                       src={galleryImages[imgIndex]}
//                       alt={`PRISM preview ${imgIndex + 1}`}
//                       className="absolute inset-0 h-full w-full object-cover"
//                       draggable={false}
//                     />
//                     <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/20 to-black/0" />
//                     <button
//                       onClick={prevImg}
//                       aria-label="Previous image"
//                       className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-sm backdrop-blur border border-white/10 hover:bg-black/70"
//                     >
//                       ‹
//                     </button>
//                     <button
//                       onClick={nextImg}
//                       aria-label="Next image"
//                       className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-sm backdrop-blur border border-white/10 hover:bg-black/70"
//                     >
//                       ›
//                     </button>
//                     <div className="absolute bottom-3 right-3 text-xs text-white/80 bg-black/40 rounded-full px-2 py-1 border border-white/10">
//                       {imgIndex + 1}/{galleryImages.length}
//                     </div>
//                   </>
//                 ) : (
//                   <div className="absolute inset-0 grid place-items-center text-white/50">
//                     <Microscope size={120} />
//                   </div>
//                 )}
//               </div>

//               {/* Thumbnails */}
//               <div className="mt-4 grid grid-cols-3 gap-3">
//                 {[0, 1, 2].map((slot) => {
//                   const thumbIdx = galleryImages.length ? (imgIndex + slot) % galleryImages.length : null;
//                   return (
//                     <button
//                       key={slot}
//                       onClick={() => thumbIdx !== null && setImgIndex(thumbIdx)}
//                       className={`h-24 rounded-2xl overflow-hidden border ${
//                         thumbIdx === imgIndex ? "border-white/60" : "border-white/10 hover:border-white/30"
//                       } bg-white/5`}
//                       aria-label={`Show image ${thumbIdx !== null ? thumbIdx + 1 : ""}`}
//                     >
//                       {thumbIdx !== null ? (
//                         <img src={galleryImages[thumbIdx]} alt={`Thumbnail ${thumbIdx + 1}`} className="h-full w-full object-cover" draggable={false} />
//                       ) : (
//                         <div className="h-full w-full" />
//                       )}
//                     </button>
//                   );
//                 })}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Sticky chips */}
//       <section className="sticky top-16 z-40 border-y border-white/10 bg-black/60 backdrop-blur">
//         <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
//           <div className="flex items-center gap-6 text-sm">
//             <div className="flex items-center gap-2 text-white/80">
//               <Move3DIcon size={16} /> Full 3-axis motion
//               <Ruler size={16} /> 13± mm Range
//               <Gauge size={16} /> ~50 nm Stepping
//               <Zap size={16} /> Piezo Actuation
//             </div>
//           </div>
//           <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90">
//             <Download size={16} /> Request Spec Overview
//           </Link>
//         </div>
//       </section>

//       {/* System Overview */}
//       <section className="relative w-full bg-black">
//         <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
//             <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
//               <div className="text-sm uppercase tracking-widest text-white/60">System Overview</div>
//               <h3 className="mt-2 text-4xl font-semibold tracking-tight">Coordinated motion with a stable optical path</h3>
//               <p className="mt-4 text-white/70 max-w-xl">High-level description of the system’s motion strategy and alignment goals. Specific mechanisms are intentionally not detailed on this page.</p>

//               <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
//                 <div className="rounded-2xl border border-white/10 p-5">
//                   <div className="text-sm text-white/60">Motion</div>
//                   <div className="text-lg font-semibold">Coordinated axes</div>
//                 </div>
//                 <div className="rounded-2xl border border-white/10 p-5">
//                   <div className="text-sm text-white/60">Alignment</div>
//                   <div className="text-lg font-semibold">Consistent reference</div>
//                 </div>
//                 <div className="rounded-2xl border border-white/10 p-5">
//                   <div className="text-sm text-white/60">Integration</div>
//                   <div className="text-lg font-semibold">Drop-in adapters</div>
//                 </div>
//                 <div className="rounded-2xl border border-white/10 p-5">
//                   <div className="text-sm text-white/60">Operation</div>
//                   <div className="text-lg font-semibold">Predictable behavior</div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
//               <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10">
//                 <div className="absolute inset-0 grid place-items-center">
//                   <div className="w-64 h-64 rounded-full border border-white/20 relative">
//                     <div className="absolute inset-6 rounded-full border border-white/30" />
//                     <div className="absolute left-1/2 top-0 -translate-x-1/2 h-1/2 w-px bg-white/30" />
//                     <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-px bg-white/30" />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Specs */}
//       <section id="specs" className="relative w-full bg-black">
//         <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
//           <div className="flex items-center justify-between">
//             <h3 className="text-4xl font-semibold tracking-tight">Technical Specifications</h3>
//             <div className="flex items-center gap-2">
//               {specTabs.map((t) => (
//                 <button
//                   key={t.id}
//                   onClick={() => setActiveSpecTab(t.id)}
//                   className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
//                     activeSpecTab === t.id ? "bg-white text-black" : "border border-white/20 text-white/80 hover:text-white"
//                   }`}
//                 >
//                   <t.icon size={16} /> {t.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {specData[activeSpecTab].map((s) => (
//               <div key={s.label} className="rounded-2xl border border-white/10 p-6">
//                 <div className="text-sm text-white/60">{s.label}</div>
//                 <div className="mt-1 text-lg font-semibold">{s.value}</div>
//               </div>
//             ))}
//           </div>

//           {/* Neutral tiles */}
//           <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
//             <div className="rounded-2xl border border-white/10 p-6 text-center">
//               <div className="text-2xl font-semibold">3-axis</div>
//               <div className="text-sm text-white/60">Coordinated motion</div>
//             </div>
//             <div className="rounded-2xl border border-white/10 p-6 text-center">
//               <div className="text-2xl font-semibold">≈13± mm</div>
//               <div className="text-sm text-white/60">Range per axis</div>
//             </div>
//             <div className="rounded-2xl border border-white/10 p-6 text-center">
//               <div className="text-2xl font-semibold">&lt; 50 nm</div>
//               <div className="text-sm text-white/60">Typical stepping</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* MODELS (anchor target) */}
//       <section id="models" className="mx-auto max-w-7xl px-6 pb-24 lg:pb-28 scroll-mt-20">
//         <motion.h2
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl md:text-5xl font-semibold tracking-tight"
//         >
//           Choose your PRISM
//         </motion.h2>
//         <p className="mt-3 text-white/70 max-w-2xl">
//           Two scanning orientations with three control options. Get full specifications from engineering on request.
//         </p>

//         {/* Control tier picker */}
//         <div className="mt-4 flex flex-wrap items-center gap-2">
//           {controlTiers.map((t) => (
//             <button
//               key={t.id}
//               onClick={() => setTier(t.id)}
//               className={`rounded-full px-4 py-2 text-sm transition ${
//                 tier === t.id ? "bg-white text-black" : "border border-white/30 text-white/80 hover:text-white"
//               }`}
//             >
//               {t.label}
//             </button>
//           ))}
//         </div>
//         <div className="mt-2 text-sm text-white/60">{tierNotes[tier].tagline}</div>

//         {/* Two model cards */}
//         <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Horizontal */}
//           <div className="rounded-3xl border border-white/10 p-6">
//             <div className="text-sm uppercase tracking-widest text-white/60">Model</div>
//             <h3 className="mt-1 text-2xl font-semibold">{models.horizontal.name}</h3>
//             <div className="mt-3 h-44 rounded-2xl border border-white/10 bg-white/5 grid place-items-center text-white/40">
//               Image Placeholder
//             </div>
//             <p className="mt-3 text-white/70">{models.horizontal.blurb}</p>
//             <ul className="mt-4 space-y-2 text-sm text-white/80">
//               {models.horizontal.features.map((f) => (
//                 <li key={f} className="flex items-start gap-2">
//                   <span className="mt-1 size-1.5 rounded-full bg-white/60" />
//                   <span>{f}</span>
//                 </li>
//               ))}
//             </ul>
//             <div className="mt-6 flex items-center gap-3">
//               <Link to="/contact" className="rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90">
//                 Request Details
//               </Link>
//               <Link to="/contact" className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium hover:border-white/60">
//                 Talk to Engineering
//               </Link>
//             </div>
//           </div>

//           {/* Vertical */}
//           <div className="rounded-3xl border border-white/10 p-6">
//             <div className="text-sm uppercase tracking-widest text-white/60">Model</div>
//             <h3 className="mt-1 text-2xl font-semibold">{models.vertical.name}</h3>
//             <div className="mt-3 h-44 rounded-2xl border border-white/10 bg-white/5 grid place-items-center text-white/40">
//               Image Placeholder
//             </div>
//             <p className="mt-3 text-white/70">{models.vertical.blurb}</p>
//             <ul className="mt-4 space-y-2 text-sm text-white/80">
//               {models.vertical.features.map((f) => (
//                 <li key={f} className="flex items-start gap-2">
//                   <span className="mt-1 size-1.5 rounded-full bg-white/60" />
//                   <span>{f}</span>
//                 </li>
//               ))}
//             </ul>
//             <div className="mt-6 flex items-center gap-3">
//               <Link to="/contact" className="rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90">
//                 Request Details
//               </Link>
//               <Link to="/contact" className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium hover:border-white/60">
//                 Talk to Engineering
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Comparison table */}
//         <div className="mt-10 rounded-3xl border border-white/10 overflow-hidden">
//           <div className="grid grid-cols-3 text-sm">
//             <div className="bg-white/5 px-4 py-3">Key Feature</div>
//             <div className="bg-white/5 px-4 py-3">Horizontal PRISM</div>
//             <div className="bg-white/5 px-4 py-3">Vertical PRISM</div>

//             {rows.map((row) => (
//               <React.Fragment key={row.feature}>
//                 <div className="px-4 py-3 border-t border-white/10 text-white/70">{row.feature}</div>
//                 <div className="px-4 py-3 border-t border-white/10">{row.H}</div>
//                 <div className="px-4 py-3 border-t border-white/10">{row.V}</div>
//               </React.Fragment>
//             ))}
//           </div>
//         </div>

//         <div className="mt-8 flex items-center gap-3">
//           <Link to="/contact" className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90">
//             Get Full Specs
//           </Link>
//           <Link to="/contact" className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium hover:border-white/60">
//             Schedule a Call
//           </Link>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="relative w-full bg-black">
//         <div className="mx-auto max-w-7xl px-6 pb-24 lg:pb-32">
//           <div className="rounded-3xl border border-white/10 p-8 flex flex-col md:flex-row items-center gap-8">
//             <div className="flex-1">
//               <div className="text-sm uppercase tracking-widest text-white/60">Status</div>
//               <div className="mt-2 text-3xl font-semibold">Active development • Details on request</div>
//               <p className="mt-3 text-white/70 max-w-xl">
//                 Request the latest spec overview or schedule a conversation. Configuration options available for varied environments.
//               </p>
//             </div>
//             <div className="flex items-center gap-3">
//               <Link to="/contact" className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90">
//                 Request Specs
//               </Link>
//               <Link to="/contact" className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium hover:border-white/60">
//                 Observe a Live Demo
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-white/10 bg-black">
//         <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
//           <div>PRISM</div>
//           <div className="flex items-center gap-3">
//             <span></span>
//             <span>Drafting Provisional Patent</span>
//           </div>
//           <div>© {new Date().getFullYear()} Axivion Instruments</div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// // src/components/PrismProject.jsx
// import React, { useEffect, useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import mockData from "../data/mock";
// import {
//   ArrowLeft,
//   Download,
//   Gauge,
//   Zap,
//   Target,
//   Microscope,
//   Ruler,
//   Move3DIcon,
//   Cpu,
//   Settings,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function PrismX() {
//   // Axivion-inspired colors (deep teal bg + bright teal accent)
//   const ACCENT = "#13c2b3";
//   const ACCENT_HOVER = "#0fb3a5";

//   // --- Gallery images ---
//   const galleryImages = useMemo(
//     () => (mockData?.portfolioImages || []).map((p) => p.url).filter(Boolean),
//     []
//   );
//   const [imgIndex, setImgIndex] = useState(0);
//   const nextImg = () => galleryImages.length && setImgIndex((i) => (i + 1) % galleryImages.length);
//   const prevImg = () => galleryImages.length && setImgIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") nextImg();
//       if (e.key === "ArrowLeft") prevImg();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [galleryImages.length]);

//   const [solidNav, setSolidNav] = useState(false);
//   const [activeSpecTab, setActiveSpecTab] = useState("architecture");

//   const specTabs = useMemo(
//     () => [
//       { id: "architecture", label: "Architecture", icon: Cpu },
//       { id: "optical", label: "Optical", icon: Target },
//       { id: "mechanical", label: "Mechanical", icon: Settings },
//       { id: "control", label: "Control", icon: Zap },
//     ],
//     []
//   );

//   useEffect(() => {
//     const onScroll = () => setSolidNav(window.scrollY > 24);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // KPI badges
//   const kpis = [
//     { value: "3-axis", label: "Coordinated Motion" },
//     { value: "≈13± mm", label: "Range per Axis" },
//     { value: "< 50 nm", label: "Step Size (typ.)" },
//     { value: "Piezo", label: "Actuation" },
//   ];

//   // Neutral, informative spec data
//   const specData = {
//     architecture: [
//       { label: "System Topology", value: "Objective-scanning periscope (overview)" },
//       { label: "Alignment Strategy", value: "Maintains beam orthogonality across travel" },
//       { label: "Form Factor", value: "Retrofit-friendly to standard lab setups" },
//     ],
//     optical: [
//       { label: "Optical Path", value: "Relay imaging with coaxial illumination" },
//       { label: "Stability", value: "Lab-validated drift performance (summary)" },
//       { label: "Interfaces", value: "Common lab optics interfaces" },
//     ],
//     mechanical: [
//       { label: "Frame Strategy", value: "High stiffness with low mass" },
//       { label: "Positioning Class", value: "Fine positioning for raster workflows" },
//       { label: "Materials", value: "Engineering alloys & steels" },
//     ],
//     control: [
//       { label: "Actuation", value: "Piezo-driven linear motion" },
//       { label: "Electronics", value: "Modular controller / embedded hub" },
//       { label: "APIs", value: "Python / LabVIEW" },
//     ],
//   };

//   // ---- Models section state ----
//   const controlTiers = [
//     { id: "cl-manual", label: "Closed-Loop Manual", short: "CL-Manual" },
//     { id: "ol-auto",   label: "Open-Loop Auto",     short: "OL-Auto"   },
//     { id: "cl-auto",   label: "Closed-Loop Auto",   short: "CL-Auto"   },
//   ];
//   const [tier, setTier] = useState(controlTiers[0].id);

//   const models = useMemo(
//     () => ({
//       horizontal: {
//         name: "PRISM — Horizontal Scanning",
//         blurb:
//           "Optimized for benches and cryostats with lateral travel demands. Emphasizes orthogonal beam geometry across scan range.",
//         features: [
//           "Low profile; retrofit-friendly to crowded benches",
//           "High stiffness for fast raster patterns",
//           "Modular interfaces for objectives & detectors",
//         ],
//       },
//       vertical: {
//         name: "PRISM — Vertical Scanning",
//         blurb:
//           "Designed for through-axis precision with gravity-friendly Z motion. Suited to tall setups and extended vertical reach.",
//         features: [
//           "Hanging Z architecture for stable vertical moves",
//           "Predictable alignment across long Z travel",
//           "Drop-in adapters for varied environments",
//         ],
//       },
//     }),
//     []
//   );

//   const tierNotes = {
//     "cl-manual": {
//       tagline: "Dial-in positioning with readback. Ideal for setup, tuning, and teaching labs.",
//       posClass: "Fine, loop-stabilized",
//       travel: "≈13± mm / axis",
//       operation: "Manual jog, loop hold",
//       integration: "Basic I/O, USB",
//     },
//     "ol-auto": {
//       tagline: "Programmatic motion without feedback. Best for scripted scans where repeatability is set by process.",
//       posClass: "Fine, open-loop",
//       travel: "≈13± mm / axis",
//       operation: "Scripted jog & raster",
//       integration: "Python/LabVIEW APIs",
//     },
//     "cl-auto": {
//       tagline: "Programmatic motion with feedback for accuracy. Best for repeatable automated experiments.",
//       posClass: "Precision, loop-stabilized",
//       travel: "≈13± mm / axis",
//       operation: "Scripted raster + closed-loop hold",
//       integration: "Advanced API + triggers",
//     },
//   };

//   const rows = useMemo(
//     () => [
//       { feature: "Orientation", H: "Horizontal scanning", V: "Vertical scanning" },
//       { feature: "Positioning class", H: tierNotes[tier].posClass, V: tierNotes[tier].posClass },
//       { feature: "Travel per axis", H: tierNotes[tier].travel, V: tierNotes[tier].travel },
//       { feature: "Operating mode", H: tierNotes[tier].operation, V: tierNotes[tier].operation },
//       { feature: "Integration", H: tierNotes[tier].integration, V: tierNotes[tier].integration },
//       { feature: "Interfaces", H: "Modular optics & detectors", V: "Modular optics & detectors" },
//       { feature: "Use cases", H: "Benches • Cryostats • Rasters", V: "Tall stacks • Long Z • Rasters" },
//     ],
//     [tier]
//   );

//   return (
//     <div className="min-h-screen w-full bg-black text-white scroll-smooth">
//       <header
//         className={`fixed inset-x-0 top-0 z-50 transition-all ${
//           solidNav ? "backdrop-blur bg-black/70 border-b border-white/10" : "bg-transparent"
//         }`}
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
//               <ArrowLeft size={18} />
//               <span>Back</span>
//             </Link>
//             <div className="h-5 w-px bg-white/20" />
//             <div className="font-semibold tracking-widest text-white">FLAGSHIP</div>
//             <div className="text-white/40">INSTRUMENT</div>
//           </div>
//           <div className="flex items-center gap-2">
//             <Link
//               to="/contact"
//               className="rounded-full px-4 py-2 text-sm font-medium"
//               style={{ backgroundColor: ACCENT, color: "#000" }}
//               onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
//               onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* Hero with Axivion-teal glow */}
//       <section className="relative h-[92vh] w-full overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-b from-[#062a2e] via-[#052024] to-black" />
//           <div className="absolute inset-0 [background-image:radial-gradient(60rem_30rem_at_50%_120%,rgba(19,194,179,0.18),transparent_60%),linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.55))]" />
//         </div>
//         <div className="absolute inset-0 grid place-items-center">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center px-6">
//             <div className="mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs uppercase tracking-widest text-white/90 border"
//                  style={{ borderColor: "rgba(19,194,179,0.45)" }}>
//               <Microscope size={14} /> Instrumentation Preview
//             </div>
//             <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
//               <span className="text-white">Periscope Relay Imaging</span>
//               <span className="block" style={{ color: ACCENT }}>Scanning Microscope</span>
//             </h1>
//             <p className="mx-auto mt-5 max-w-2xl text-balance text-white/80">
//               High-level preview of an advanced optical instrument. Detailed specifications are shared directly upon request.
//             </p>
//             <div className="mt-8 flex items-center justify-center gap-3">
//               {/* Explore scrolls to models section */}
//               <a
//                 href="#models"
//                 className="rounded-full px-6 py-3 text-sm font-medium"
//                 style={{ backgroundColor: ACCENT, color: "#000" }}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
//               >
//                 Explore
//               </a>
//             </div>
//           </motion.div>
//         </div>

//         <div className="absolute bottom-6 inset-x-0">
//           <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-2 px-6">
//             {kpis.map((k) => (
//               <div
//                 key={k.label}
//                 className="rounded-2xl backdrop-blur px-4 py-3 text-center border"
//                 style={{ background: "rgba(19,194,179,0.06)", borderColor: "rgba(19,194,179,0.18)" }}
//               >
//                 <div className="text-xl font-semibold">{k.value}</div>
//                 <div className="text-xs text-white/70">{k.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Design */}
//       <section id="design" className="relative w-full bg-black">
//         <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
//               <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Designed for stable, precise motion</h2>
//               <p className="mt-5 text-white/80 max-w-xl">A configurable platform focused on repeatable positioning and clean integration with standard lab workflows.</p>

//               <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
//                 {[
//                   { h: "Modular", p: "Components and interfaces adapt to varied environments." },
//                   { h: "Retrofit-friendly", p: "Drop-in mounting and common accessory support." },
//                   { h: "Stable", p: "Predictable motion and consistent alignment." },
//                 ].map((c) => (
//                   <div key={c.h} className="rounded-2xl p-5 border" style={{ borderColor: "rgba(19,194,179,0.16)" }}>
//                     <div className="text-lg font-semibold" style={{ color: ACCENT }}>{c.h}</div>
//                     <div className="text-sm text-white/70">{c.p}</div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-1 lg:order-2">
//               {/* Main image */}
//               <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border"
//                    style={{ borderColor: "rgba(19,194,179,0.18)", background: "rgba(19,194,179,0.06)" }}>
//                 {galleryImages.length > 0 ? (
//                   <>
//                     <img
//                       src={galleryImages[imgIndex]}
//                       alt={`PRISM preview ${imgIndex + 1}`}
//                       className="absolute inset-0 h-full w-full object-cover"
//                       draggable={false}
//                     />
//                     <div className="absolute inset-0 pointer-events-none"
//                          style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.25), rgba(0,0,0,0.0))" }} />
//                     <button
//                       onClick={prevImg}
//                       aria-label="Previous image"
//                       className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full px-3 py-2 text-sm backdrop-blur border"
//                       style={{ background: "rgba(0,0,0,0.45)", borderColor: "rgba(255,255,255,0.12)" }}
//                     >
//                       ‹
//                     </button>
//                     <button
//                       onClick={nextImg}
//                       aria-label="Next image"
//                       className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full px-3 py-2 text-sm backdrop-blur border"
//                       style={{ background: "rgba(0,0,0,0.45)", borderColor: "rgba(255,255,255,0.12)" }}
//                     >
//                       ›
//                     </button>
//                     <div className="absolute bottom-3 right-3 text-xs text-white/80 rounded-full px-2 py-1 border"
//                          style={{ background: "rgba(0,0,0,0.35)", borderColor: "rgba(255,255,255,0.12)" }}>
//                       {imgIndex + 1}/{galleryImages.length}
//                     </div>
//                   </>
//                 ) : (
//                   <div className="absolute inset-0 grid place-items-center text-white/60">
//                     <Microscope size={120} />
//                   </div>
//                 )}
//               </div>

//               {/* Thumbnails */}
//               <div className="mt-4 grid grid-cols-3 gap-3">
//                 {[0, 1, 2].map((slot) => {
//                   const thumbIdx = galleryImages.length ? (imgIndex + slot) % galleryImages.length : null;
//                   return (
//                     <button
//                       key={slot}
//                       onClick={() => thumbIdx !== null && setImgIndex(thumbIdx)}
//                       className="h-24 rounded-2xl overflow-hidden border"
//                       style={{
//                         borderColor:
//                           thumbIdx === imgIndex ? "rgba(19,194,179,0.55)" : "rgba(19,194,179,0.18)",
//                         background: "rgba(19,194,179,0.06)",
//                       }}
//                       aria-label={`Show image ${thumbIdx !== null ? thumbIdx + 1 : ""}`}
//                     >
//                       {thumbIdx !== null ? (
//                         <img src={galleryImages[thumbIdx]} alt={`Thumbnail ${thumbIdx + 1}`} className="h-full w-full object-cover" draggable={false} />
//                       ) : (
//                         <div className="h-full w-full" />
//                       )}
//                     </button>
//                   );
//                 })}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Sticky chips */}
//       <section className="sticky top-16 z-40 border-y bg-black/60 backdrop-blur"
//                style={{ borderColor: "rgba(19,194,179,0.18)" }}>
//         <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
//           <div className="flex items-center gap-6 text-sm text-white/85">
//             <div className="flex items-center gap-2">
//               <Move3DIcon size={16} style={{ color: ACCENT }} /> Full 3-axis motion
//               <Ruler size={16} style={{ color: ACCENT }} /> 13± mm Range
//               <Gauge size={16} style={{ color: ACCENT }} /> ~50 nm Stepping
//               <Zap size={16} style={{ color: ACCENT }} /> Piezo Actuation
//             </div>
//           </div>
//           {/* Renamed button */}
//           <a
//             href="/contact"
//             className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
//             style={{ backgroundColor: ACCENT, color: "#000" }}
//             onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
//             onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
//           >
//             <Download size={16} /> Prototyping Station Lab Tour
//           </a>
//         </div>
//       </section>

//       {/* System Overview */}
//       <section className="relative w-full bg-black">
//         <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
//             <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
//               <div className="text-sm uppercase tracking-widest" style={{ color: "rgba(19,194,179,0.8)" }}>System Overview</div>
//               <h3 className="mt-2 text-4xl font-semibold tracking-tight">Coordinated motion with a stable optical path</h3>
//               <p className="mt-4 text-white/80 max-w-xl">High-level description of the system’s motion strategy and alignment goals. Specific mechanisms are intentionally not detailed on this page.</p>

//               <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
//                 {["Coordinated axes", "Consistent reference", "Drop-in adapters", "Predictable behavior"].map((t) => (
//                   <div key={t} className="rounded-2xl p-5 border" style={{ borderColor: "rgba(19,194,179,0.16)" }}>
//                     <div className="text-sm text-white/70">Feature</div>
//                     <div className="text-lg font-semibold" style={{ color: ACCENT }}>{t}</div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
//               <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border"
//                    style={{ borderColor: "rgba(19,194,179,0.18)" }}>
//                 <div className="absolute inset-0 grid place-items-center">
//                   <div className="w-64 h-64 rounded-full border relative"
//                        style={{ borderColor: "rgba(19,194,179,0.22)" }}>
//                     <div className="absolute inset-6 rounded-full border" style={{ borderColor: "rgba(19,194,179,0.32)" }} />
//                     <div className="absolute left-1/2 top-0 -translate-x-1/2 h-1/2 w-px" style={{ backgroundColor: "rgba(19,194,179,0.35)" }} />
//                     <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-px" style={{ backgroundColor: "rgba(19,194,179,0.35)" }} />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Specs */}
//       <section id="specs" className="relative w-full bg-black">
//         <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
//           <div className="flex items-center justify-between">
//             <h3 className="text-4xl font-semibold tracking-tight">Technical Specifications</h3>
//             <div className="flex items-center gap-2">
//               {specTabs.map((t) => (
//                 <button
//                   key={t.id}
//                   onClick={() => setActiveSpecTab(t.id)}
//                   className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition border"
//                   style={{
//                     backgroundColor: activeSpecTab === t.id ? ACCENT : "transparent",
//                     color: activeSpecTab === t.id ? "#000" : "rgba(255,255,255,0.85)",
//                     borderColor: "rgba(19,194,179,0.25)",
//                   }}
//                 >
//                   <t.icon size={16} /> {t.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {specData[activeSpecTab].map((s) => (
//               <div key={s.label} className="rounded-2xl p-6 border"
//                    style={{ borderColor: "rgba(19,194,179,0.18)" }}>
//                 <div className="text-sm text-white/80">{s.label}</div>
//                 <div className="mt-1 text-lg font-semibold text-white">{s.value}</div>
//               </div>
//             ))}
//           </div>

//           {/* Neutral tiles */}
//           <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
//             {[
//               { v: "3-axis", l: "Coordinated motion" },
//               { v: "≈13± mm", l: "Range per axis" },
//               { v: "< 50 nm", l: "Typical stepping" },
//             ].map((t) => (
//               <div key={t.v} className="rounded-2xl p-6 text-center border"
//                    style={{ borderColor: "rgba(19,194,179,0.18)" }}>
//                 <div className="text-2xl font-semibold text-white">{t.v}</div>
//                 <div className="text-sm text-white/70">{t.l}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* MODELS (anchor target) */}
//       <section id="models" className="mx-auto max-w-7xl px-6 pb-24 lg:pb-28 scroll-mt-20">
//         <motion.h2
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl md:text-5xl font-semibold tracking-tight"
//           style={{ color: ACCENT }}
//         >
//           Choose your PRISM
//         </motion.h2>
//         <p className="mt-3 text-white/80 max-w-2xl">
//           Two scanning orientations with three control options. Get full specifications from engineering on request.
//         </p>

//         {/* Control tier picker */}
//         <div className="mt-4 flex flex-wrap items-center gap-2">
//           {controlTiers.map((t) => (
//             <button
//               key={t.id}
//               onClick={() => setTier(t.id)}
//               className="rounded-full px-4 py-2 text-sm transition border"
//               style={{
//                 backgroundColor: tier === t.id ? ACCENT : "transparent",
//                 color: tier === t.id ? "#000" : "rgba(255,255,255,0.85)",
//                 borderColor: "rgba(19,194,179,0.25)",
//               }}
//             >
//               {t.label}
//             </button>
//           ))}
//         </div>
//         <div className="mt-2 text-sm text-white/70">{tierNotes[tier].tagline}</div>

//         {/* Two model cards */}
//         <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Horizontal */}
//           <div className="rounded-3xl p-6 border" style={{ borderColor: "rgba(19,194,179,0.18)" }}>
//             <div className="text-sm uppercase tracking-widest" style={{ color: "rgba(19,194,179,0.8)" }}>Model</div>
//             <h3 className="mt-1 text-2xl font-semibold">{models.horizontal.name}</h3>
//             <div className="mt-3 h-44 rounded-2xl border grid place-items-center text-white/60"
//                  style={{ borderColor: "rgba(19,194,179,0.18)", background: "rgba(19,194,179,0.06)" }}>
//               Image Placeholder
//             </div>
//             <p className="mt-3 text-white/80">{models.horizontal.blurb}</p>
//             <ul className="mt-4 space-y-2 text-sm text-white/85">
//               {models.horizontal.features.map((f) => (
//                 <li key={f} className="flex items-start gap-2">
//                   <span className="mt-1 size-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
//                   <span>{f}</span>
//                 </li>
//               ))}
//             </ul>
//             {/* Removed "Talk to Engineering" button (kept single CTA minimal) */}
//             <div className="mt-6">
//               <Link
//                 to="/contact"
//                 className="rounded-full px-5 py-2.5 text-sm font-medium"
//                 style={{ backgroundColor: ACCENT, color: "#000" }}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
//               >
//                 Request Details
//               </Link>
//             </div>
//           </div>

//           {/* Vertical */}
//           <div className="rounded-3xl p-6 border" style={{ borderColor: "rgba(19,194,179,0.18)" }}>
//             <div className="text-sm uppercase tracking-widest" style={{ color: "rgba(19,194,179,0.8)" }}>Model</div>
//             <h3 className="mt-1 text-2xl font-semibold">{models.vertical.name}</h3>
//             <div className="mt-3 h-44 rounded-2xl border grid place-items-center text-white/60"
//                  style={{ borderColor: "rgba(19,194,179,0.18)", background: "rgba(19,194,179,0.06)" }}>
//               Image Placeholder
//             </div>
//             <p className="mt-3 text-white/80">{models.vertical.blurb}</p>
//             <ul className="mt-4 space-y-2 text-sm text-white/85">
//               {models.vertical.features.map((f) => (
//                 <li key={f} className="flex items-start gap-2">
//                   <span className="mt-1 size-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
//                   <span>{f}</span>
//                 </li>
//               ))}
//             </ul>
//             {/* Removed "Talk to Engineering" */}
//             <div className="mt-6">
//               <Link
//                 to="/contact"
//                 className="rounded-full px-5 py-2.5 text-sm font-medium"
//                 style={{ backgroundColor: ACCENT, color: "#000" }}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
//               >
//                 Request Details
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Comparison table */}
//         <div className="mt-10 rounded-3xl overflow-hidden border" style={{ borderColor: "rgba(19,194,179,0.18)" }}>
//           <div className="grid grid-cols-3 text-sm">
//             <div className="px-4 py-3" style={{ background: "rgba(19,194,179,0.08)" }}>Key Feature</div>
//             <div className="px-4 py-3" style={{ background: "rgba(19,194,179,0.08)" }}>Horizontal PRISM</div>
//             <div className="px-4 py-3" style={{ background: "rgba(19,194,179,0.08)" }}>Vertical PRISM</div>

//             {rows.map((row) => (
//               <React.Fragment key={row.feature}>
//                 <div className="px-4 py-3 border-t text-white/75" style={{ borderColor: "rgba(19,194,179,0.18)" }}>{row.feature}</div>
//                 <div className="px-4 py-3 border-t" style={{ borderColor: "rgba(19,194,179,0.18)" }}>{row.H}</div>
//                 <div className="px-4 py-3 border-t" style={{ borderColor: "rgba(19,194,179,0.18)" }}>{row.V}</div>
//               </React.Fragment>
//             ))}
//           </div>
//         </div>

//         {/* Removed the "Get Full Specs" and "Schedule a Call" button row */}
//       </section>

//       {/* CTA — single button, renamed */}
//       <section className="relative w-full bg-black">
//         <div className="mx-auto max-w-7xl px-6 pb-24 lg:pb-32">
//           <div className="rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 border"
//                style={{ borderColor: "rgba(19,194,179,0.18)" }}>
//             <div className="flex-1">
//               <div className="text-sm uppercase tracking-widest" style={{ color: "rgba(19,194,179,0.8)" }}>Status</div>
//               <div className="mt-2 text-3xl font-semibold">Active development • Details on request</div>
//               <p className="mt-3 text-white/80 max-w-xl">
//                 Request a tour of the prototyping station and see current setups. Configuration options available for varied environments.
//               </p>
//             </div>
//             <div className="flex items-center gap-3">
//               <Link
//                 to="/contact"
//                 className="rounded-full px-6 py-3 text-sm font-medium"
//                 style={{ backgroundColor: ACCENT, color: "#000" }}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
//               >
//                 Prototyping Station Lab Tour
//               </Link>
//               {/* Removed "Observe a Live Demo" */}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t bg-black" style={{ borderColor: "rgba(19,194,179,0.18)" }}>
//         <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
//           <div>PRISM</div>
//           <div className="flex items-center gap-3">
//             <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT }} />
//             <span>Drafting Provisional Patent</span>
//           </div>
//           <div>© {new Date().getFullYear()} Axivion Instruments</div>
//         </div>
//       </footer>
//     </div>
//   );
// }


// // src/components/PrismProject.jsx
// import React, { useEffect, useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import mockData from "../data/mock";
// import {
//   ArrowLeft,
//   Download,
//   Gauge,
//   Zap,
//   Target,
//   Microscope,
//   Ruler,
//   Move3DIcon,
//   Cpu,
//   Settings,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function PrismX() {
//   // Brand accent (Axivion teal)
//   const ACCENT = "#13c2b3";
//   const ACCENT_HOVER = "#0fb3a5";

//   // --- Cursor-follow glow (background only) ---
//   const [mx, setMx] = useState(-9999);
//   const [my, setMy] = useState(-9999);
//   const onMove = (e) => {
//     // Use client coords; could throttle with rAF if needed
//     setMx(e.clientX);
//     setMy(e.clientY);
//   };
//   // Custom props for CSS radial center
//   const rootStyle = { "--mx": `${mx}px`, "--my": `${my}px` };

//   // --- Gallery images ---
//   const galleryImages = useMemo(
//     () => (mockData?.portfolioImages || []).map((p) => p.url).filter(Boolean),
//     []
//   );
//   const [imgIndex, setImgIndex] = useState(0);
//   const nextImg = () => galleryImages.length && setImgIndex((i) => (i + 1) % galleryImages.length);
//   const prevImg = () => galleryImages.length && setImgIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") nextImg();
//       if (e.key === "ArrowLeft") prevImg();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [galleryImages.length]);

//   const [solidNav, setSolidNav] = useState(false);
//   useEffect(() => {
//     const onScroll = () => setSolidNav(window.scrollY > 24);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const [activeSpecTab, setActiveSpecTab] = useState("architecture");
//   const specTabs = useMemo(
//     () => [
//       { id: "architecture", label: "Architecture", icon: Cpu },
//       { id: "optical", label: "Optical", icon: Target },
//       { id: "mechanical", label: "Mechanical", icon: Settings },
//       { id: "control", label: "Control", icon: Zap },
//     ],
//     []
//   );

//   // KPI badges
//   const kpis = [
//     { value: "3-axis", label: "Coordinated Motion" },
//     { value: "≈13± mm", label: "Range per Axis" },
//     { value: "< 50 nm", label: "Step Size (typ.)" },
//     { value: "Piezo", label: "Actuation" },
//   ];

//   // Neutral, informative spec data
//   const specData = {
//     architecture: [
//       { label: "System Topology", value: "Objective-scanning periscope (overview)" },
//       { label: "Alignment Strategy", value: "Maintains beam orthogonality across travel" },
//       { label: "Form Factor", value: "Retrofit-friendly to standard lab setups" },
//     ],
//     optical: [
//       { label: "Optical Path", value: "Relay imaging with coaxial illumination" },
//       { label: "Stability", value: "Lab-validated drift performance (summary)" },
//       { label: "Interfaces", value: "Common lab optics interfaces" },
//     ],
//     mechanical: [
//       { label: "Frame Strategy", value: "High stiffness with low mass" },
//       { label: "Positioning Class", value: "Fine positioning for raster workflows" },
//       { label: "Materials", value: "Engineering alloys & steels" },
//     ],
//     control: [
//       { label: "Actuation", value: "Piezo-driven linear motion" },
//       { label: "Electronics", value: "Modular controller / embedded hub" },
//       { label: "APIs", value: "Python / LabVIEW" },
//     ],
//   };

//   // ---- Models section state ----
//   const controlTiers = [
//     { id: "cl-manual", label: "Closed-Loop Manual", short: "CL-Manual" },
//     { id: "ol-auto",   label: "Open-Loop Auto",     short: "OL-Auto"   },
//     { id: "cl-auto",   label: "Closed-Loop Auto",   short: "CL-Auto"   },
//   ];
//   const [tier, setTier] = useState(controlTiers[0].id);

//   const models = useMemo(
//     () => ({
//       horizontal: {
//         name: "PRISM — Horizontal Scanning",
//         blurb:
//           "Optimized for benches and cryostats with lateral travel demands. Emphasizes orthogonal beam geometry across scan range.",
//         features: [
//           "Low profile; retrofit-friendly to crowded benches",
//           "High stiffness for fast raster patterns",
//           "Modular interfaces for objectives & detectors",
//         ],
//       },
//       vertical: {
//         name: "PRISM — Vertical Scanning",
//         blurb:
//           "Designed for through-axis precision with gravity-friendly Z motion. Suited to tall setups and extended vertical reach.",
//         features: [
//           "Hanging Z architecture for stable vertical moves",
//           "Predictable alignment across long Z travel",
//           "Drop-in adapters for varied environments",
//         ],
//       },
//     }),
//     []
//   );

//   const tierNotes = {
//     "cl-manual": {
//       tagline: "Dial-in positioning with readback. Ideal for setup, tuning, and teaching labs.",
//       posClass: "Fine, loop-stabilized",
//       travel: "≈13± mm / axis",
//       operation: "Manual jog, loop hold",
//       integration: "Basic I/O, USB",
//     },
//     "ol-auto": {
//       tagline: "Programmatic motion without feedback. Best for scripted scans where repeatability is set by process.",
//       posClass: "Fine, open-loop",
//       travel: "≈13± mm / axis",
//       operation: "Scripted jog & raster",
//       integration: "Python/LabVIEW APIs",
//     },
//     "cl-auto": {
//       tagline: "Programmatic motion with feedback for accuracy. Best for repeatable automated experiments.",
//       posClass: "Precision, loop-stabilized",
//       travel: "≈13± mm / axis",
//       operation: "Scripted raster + closed-loop hold",
//       integration: "Advanced API + triggers",
//     },
//   };

//   const rows = useMemo(
//     () => [
//       { feature: "Orientation", H: "Horizontal scanning", V: "Vertical scanning" },
//       { feature: "Positioning class", H: tierNotes[tier].posClass, V: tierNotes[tier].posClass },
//       { feature: "Travel per axis", H: tierNotes[tier].travel, V: tierNotes[tier].travel },
//       { feature: "Operating mode", H: tierNotes[tier].operation, V: tierNotes[tier].operation },
//       { feature: "Integration", H: tierNotes[tier].integration, V: tierNotes[tier].integration },
//       { feature: "Interfaces", H: "Modular optics & detectors", V: "Modular optics & detectors" },
//       { feature: "Use cases", H: "Benches • Cryostats • Rasters", V: "Tall stacks • Long Z • Rasters" },
//     ],
//     [tier]
//   );

//   return (
//     <div
//       className="min-h-screen w-full bg-black text-white scroll-smooth"
//       onMouseMove={onMove}
//       style={rootStyle}
//     >
//       {/* BACKGROUND GLOW (behind everything) */}
//       <div
//         className="pointer-events-none fixed inset-0 z-0"
//         style={{
//           // Only background gets the glow; content is rendered above (z-10+)
//           background:
//             "radial-gradient(600px at var(--mx) var(--my), rgba(19, 194, 179, 0.18), transparent 60%)",
//         }}
//         aria-hidden
//       />

//       {/* CONTENT WRAPPER */}
//       <div className="relative z-10">
//         {/* Header */}
//         <header
//           className={`fixed inset-x-0 top-0 z-50 transition-all ${
//             solidNav ? "backdrop-blur bg-black/70 border-b border-white/10" : "bg-transparent"
//           }`}
//         >
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
//                 <ArrowLeft size={18} />
//                 <span>Back</span>
//               </Link>
//               <div className="h-5 w-px bg-white/20" />
//               <div className="font-semibold tracking-widest text-white">FLAGSHIP</div>
//               <div className="text-white/40">INSTRUMENT</div>
//             </div>
//             <div className="flex items-center gap-2">
//               <Link
//                 to="/contact"
//                 className="rounded-full px-4 py-2 text-sm font-medium"
//                 style={{ backgroundColor: ACCENT, color: "#000" }}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>
//         </header>

//         {/* Hero (pure black background; no overlays) */}
//         <section className="relative h-[92vh] w-full overflow-hidden">
//           <div className="absolute inset-0 bg-black" />
//           <div className="absolute inset-0 grid place-items-center">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center px-6"
//             >
//               <div
//                 className="mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs uppercase tracking-widest text-white/90 border border-white/20"
//               >
//                 <Microscope size={14} /> Instrumentation Preview
//               </div>
//               <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white">
//                 Periscope Relay Imaging
//                 <span className="block" style={{ color: ACCENT }}>Scanning Microscope</span>
//               </h1>
//               <p className="mx-auto mt-5 max-w-2xl text-balance text-white/80">
//                 High-level preview of an advanced optical instrument. Detailed specifications are shared directly upon request.
//               </p>
//               <div className="mt-8 flex items-center justify-center gap-3">
//                 <a
//                   href="#models"
//                   className="rounded-full px-6 py-3 text-sm font-medium"
//                   style={{ backgroundColor: ACCENT, color: "#000" }}
//                   onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
//                   onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
//                 >
//                   Explore
//                 </a>
//               </div>
//             </motion.div>
//           </div>

//           <div className="absolute bottom-6 inset-x-0">
//             <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-2 px-6">
//               {kpis.map((k) => (
//                 <div
//                   key={k.label}
//                   className="rounded-2xl px-4 py-3 text-center border border-white/15 bg-black/60 backdrop-blur"
//                 >
//                   <div className="text-xl font-semibold text-white">{k.value}</div>
//                   <div className="text-xs text-white/70">{k.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Design */}
//         <section id="design" className="relative w-full bg-black">
//           <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="order-2 lg:order-1"
//               >
//                 <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
//                   Designed for stable, precise motion
//                 </h2>
//                 <p className="mt-5 text-white/80 max-w-xl">
//                   A configurable platform focused on repeatable positioning and clean integration with standard lab workflows.
//                 </p>

//                 <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
//                   {[
//                     { h: "Modular", p: "Components and interfaces adapt to varied environments." },
//                     { h: "Retrofit-friendly", p: "Drop-in mounting and common accessory support." },
//                     { h: "Stable", p: "Predictable motion and consistent alignment." },
//                   ].map((c) => (
//                     <div key={c.h} className="rounded-2xl p-5 border border-white/15 bg-black">
//                       <div className="text-lg font-semibold text-white">{c.h}</div>
//                       <div className="text-sm text-white/70">{c.p}</div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="order-1 lg:order-2"
//               >
//                 {/* Main image */}
//                 <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 bg-black">
//                   {galleryImages.length > 0 ? (
//                     <>
//                       <img
//                         src={galleryImages[imgIndex]}
//                         alt={`PRISM preview ${imgIndex + 1}`}
//                         className="absolute inset-0 h-full w-full object-cover"
//                         draggable={false}
//                       />
//                       <button
//                         onClick={prevImg}
//                         aria-label="Previous image"
//                         className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full px-3 py-2 text-sm backdrop-blur border border-white/15 bg-black/60"
//                       >
//                         ‹
//                       </button>
//                       <button
//                         onClick={nextImg}
//                         aria-label="Next image"
//                         className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full px-3 py-2 text-sm backdrop-blur border border-white/15 bg-black/60"
//                       >
//                         ›
//                       </button>
//                       <div className="absolute bottom-3 right-3 text-xs text-white/80 rounded-full px-2 py-1 border border-white/15 bg-black/60">
//                         {imgIndex + 1}/{galleryImages.length}
//                       </div>
//                     </>
//                   ) : (
//                     <div className="absolute inset-0 grid place-items-center text-white/60">
//                       <Microscope size={120} />
//                     </div>
//                   )}
//                 </div>

//                 {/* Thumbnails */}
//                 <div className="mt-4 grid grid-cols-3 gap-3">
//                   {[0, 1, 2].map((slot) => {
//                     const thumbIdx = galleryImages.length ? (imgIndex + slot) % galleryImages.length : null;
//                     return (
//                       <button
//                         key={slot}
//                         onClick={() => thumbIdx !== null && setImgIndex(thumbIdx)}
//                         className={`h-24 rounded-2xl overflow-hidden border bg-black ${
//                           thumbIdx === imgIndex ? "border-white/60" : "border-white/15 hover:border-white/40"
//                         }`}
//                         aria-label={`Show image ${thumbIdx !== null ? thumbIdx + 1 : ""}`}
//                       >
//                         {thumbIdx !== null ? (
//                           <img
//                             src={galleryImages[thumbIdx]}
//                             alt={`Thumbnail ${thumbIdx + 1}`}
//                             className="h-full w-full object-cover"
//                             draggable={false}
//                           />
//                         ) : (
//                           <div className="h-full w-full" />
//                         )}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Sticky chips */}
//         <section className="sticky top-16 z-40 border-y border-white/10 bg-black">
//           <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
//             <div className="flex items-center gap-6 text-sm text-white">
//               <div className="flex items-center gap-2">
//                 <Move3DIcon size={16} style={{ color: ACCENT }} /> Full 3-axis motion
//                 <Ruler size={16} style={{ color: ACCENT }} /> 13± mm Range
//                 <Gauge size={16} style={{ color: ACCENT }} /> ~50 nm Stepping
//                 <Zap size={16} style={{ color: ACCENT }} /> Piezo Actuation
//               </div>
//             </div>
//             <a
//               href="/contact"
//               className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
//               style={{ backgroundColor: ACCENT, color: "#000" }}
//               onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
//               onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
//             >
//               <Download size={16} /> Prototyping Station Lab Tour
//             </a>
//           </div>
//         </section>

//         {/* System Overview */}
//         <section className="relative w-full bg-black">
//           <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
//               <motion.div
//                 initial={{ opacity: 0, y: 12 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <div className="text-sm uppercase tracking-widest text-white/80">System Overview</div>
//                 <h3 className="mt-2 text-4xl font-semibold tracking-tight text-white">
//                   Coordinated motion with a stable optical path
//                 </h3>
//                 <p className="mt-4 text-white/80 max-w-xl">
//                   High-level description of the system’s motion strategy and alignment goals. Specific mechanisms are intentionally not detailed on this page.
//                 </p>

//                 <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
//                   {["Coordinated axes", "Consistent reference", "Drop-in adapters", "Predictable behavior"].map((t) => (
//                     <div key={t} className="rounded-2xl p-5 border border-white/15 bg-black">
//                       <div className="text-sm text-white/70">Feature</div>
//                       <div className="text-lg font-semibold text-white">{t}</div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, scale: 0.98 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 bg-black">
//                   <div className="absolute inset-0 grid place-items-center">
//                     <div className="w-64 h-64 rounded-full border border-white/20 relative">
//                       <div className="absolute inset-6 rounded-full border border-white/30" />
//                       <div className="absolute left-1/2 top-0 -translate-x-1/2 h-1/2 w-px bg-white/30" />
//                       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-px bg-white/30" />
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Specs */}
//         <section id="specs" className="relative w-full bg-black">
//           <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
//             <div className="flex items-center justify-between">
//               <h3 className="text-4xl font-semibold tracking-tight text-white">Technical Specifications</h3>
//               <div className="flex items-center gap-2">
//                 {specTabs.map((t) => (
//                   <button
//                     key={t.id}
//                     onClick={() => setActiveSpecTab(t.id)}
//                     className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition border"
//                     style={{
//                       backgroundColor: activeSpecTab === t.id ? ACCENT : "transparent",
//                       color: activeSpecTab === t.id ? "#000" : "rgba(255,255,255,0.9)",
//                       borderColor: "rgba(255,255,255,0.2)",
//                     }}
//                   >
//                     <t.icon size={16} /> {t.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {specData[activeSpecTab].map((s) => (
//                 <div key={s.label} className="rounded-2xl border border-white/15 p-6 bg-black">
//                   <div className="text-sm text-white/80">{s.label}</div>
//                   <div className="mt-1 text-lg font-semibold text-white">{s.value}</div>
//                 </div>
//               ))}
//             </div>

//             {/* Neutral tiles */}
//             <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
//               {[
//                 { v: "3-axis", l: "Coordinated motion" },
//                 { v: "≈13± mm", l: "Range per axis" },
//                 { v: "< 50 nm", l: "Typical stepping" },
//               ].map((t) => (
//                 <div key={t.v} className="rounded-2xl border border-white/15 p-6 text-center bg-black">
//                   <div className="text-2xl font-semibold text-white">{t.v}</div>
//                   <div className="text-sm text-white/70">{t.l}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* MODELS (anchor target) */}
//         <section id="models" className="mx-auto max-w-7xl px-6 pb-24 lg:pb-28 scroll-mt-20">
//           <motion.h2
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-4xl md:text-5xl font-semibold tracking-tight text-white"
//           >
//             Choose your PRISM
//           </motion.h2>
//           <p className="mt-3 text-white/80 max-w-2xl">
//             Two scanning orientations with three control options. Get full specifications from engineering on request.
//           </p>

//           {/* Control tier picker */}
//           <div className="mt-4 flex flex-wrap items-center gap-2">
//             {["cl-manual", "ol-auto", "cl-auto"].map((id) => (
//               <button
//                 key={id}
//                 onClick={() => setTier(id)}
//                 className="rounded-full px-4 py-2 text-sm transition border"
//                 style={{
//                   backgroundColor: tier === id ? ACCENT : "transparent",
//                   color: tier === id ? "#000" : "rgba(255,255,255,0.9)",
//                   borderColor: "rgba(255,255,255,0.25)",
//                 }}
//               >
//                 {id === "cl-manual" ? "Closed-Loop Manual" : id === "ol-auto" ? "Open-Loop Auto" : "Closed-Loop Auto"}
//               </button>
//             ))}
//           </div>
//           <div className="mt-2 text-sm text-white/70">{tierNotes[tier].tagline}</div>

//           {/* Two model cards */}
//           <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Horizontal */}
//             <div className="rounded-3xl p-6 border border-white/15 bg-black">
//               <div className="text-sm uppercase tracking-widest text-white/80">Model</div>
//               <h3 className="mt-1 text-2xl font-semibold text-white">{models.horizontal.name}</h3>
//               <div className="mt-3 h-44 rounded-2xl border border-white/15 bg-black grid place-items-center text-white/60">
//                 Image Placeholder
//               </div>
//               <p className="mt-3 text-white/80">{models.horizontal.blurb}</p>
//               <ul className="mt-4 space-y-2 text-sm text-white/85">
//                 {models.horizontal.features.map((f) => (
//                   <li key={f} className="flex items-start gap-2">
//                     <span className="mt-1 size-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
//                     <span>{f}</span>
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-6">
//                 <Link
//                   to="/contact"
//                   className="rounded-full px-5 py-2.5 text-sm font-medium"
//                   style={{ backgroundColor: ACCENT, color: "#000" }}
//                   onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
//                   onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
//                 >
//                   Request Details
//                 </Link>
//               </div>
//             </div>

//             {/* Vertical */}
//             <div className="rounded-3xl p-6 border border-white/15 bg-black">
//               <div className="text-sm uppercase tracking-widest text-white/80">Model</div>
//               <h3 className="mt-1 text-2xl font-semibold text-white">{models.vertical.name}</h3>
//               <div className="mt-3 h-44 rounded-2xl border border-white/15 bg-black grid place-items-center text-white/60">
//                 Image Placeholder
//               </div>
//               <p className="mt-3 text-white/80">{models.vertical.blurb}</p>
//               <ul className="mt-4 space-y-2 text-sm text-white/85">
//                 {models.vertical.features.map((f) => (
//                   <li key={f} className="flex items-start gap-2">
//                     <span className="mt-1 size-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
//                     <span>{f}</span>
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-6">
//                 <Link
//                   to="/contact"
//                   className="rounded-full px-5 py-2.5 text-sm font-medium"
//                   style={{ backgroundColor: ACCENT, color: "#000" }}
//                   onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
//                   onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
//                 >
//                   Request Details
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Comparison table */}
//           <div className="mt-10 rounded-3xl overflow-hidden border border-white/15">
//             <div className="grid grid-cols-3 text-sm">
//               <div className="px-4 py-3 bg-black/70 text-white/80">Key Feature</div>
//               <div className="px-4 py-3 bg-black/70 text-white/80">Horizontal PRISM</div>
//               <div className="px-4 py-3 bg-black/70 text-white/80">Vertical PRISM</div>

//               {rows.map((row) => (
//                 <React.Fragment key={row.feature}>
//                   <div className="px-4 py-3 border-t border-white/15 text-white/75">{row.feature}</div>
//                   <div className="px-4 py-3 border-t border-white/15">{row.H}</div>
//                   <div className="px-4 py-3 border-t border-white/15">{row.V}</div>
//                 </React.Fragment>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA — single button, renamed */}
//         <section className="relative w-full bg-black">
//           <div className="mx-auto max-w-7xl px-6 pb-24 lg:pb-32">
//             <div className="rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 border border-white/15 bg-black">
//               <div className="flex-1">
//                 <div className="text-sm uppercase tracking-widest text-white/80">Status</div>
//                 <div className="mt-2 text-3xl font-semibold text-white">Active development • Details on request</div>
//                 <p className="mt-3 text-white/80 max-w-xl">
//                   Request a tour of the prototyping station and see current setups. Configuration options available for varied environments.
//                 </p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Link
//                   to="/contact"
//                   className="rounded-full px-6 py-3 text-sm font-medium"
//                   style={{ backgroundColor: ACCENT, color: "#000" }}
//                   onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
//                   onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
//                 >
//                   Prototyping Station Lab Tour
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="border-t border-white/15 bg-black">
//           <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
//             <div>PRISM</div>
//             <div className="flex items-center gap-3">
//               <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT }} />
//               <span>Drafting Provisional Patent</span>
//             </div>
//             <div>© {new Date().getFullYear()} Axivion Instruments</div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }

// // src/components/PrismProject.jsx
// import React, { useEffect, useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import mockData from "../data/mock";
// import {
//   ArrowLeft,
//   Download,
//   Gauge,
//   Zap,
//   Target,
//   Microscope,
//   Ruler,
//   Move3DIcon,
//   Cpu,
//   Settings,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function PrismX() {
//   const ACCENT = "#13c2b3";
//   const ACCENT_HOVER = "#0fb3a5";

//   // --- Cursor-follow glow (background only)
//   const [mx, setMx] = useState(-9999);
//   const [my, setMy] = useState(-9999);
//   const onMove = (e) => {
//     setMx(e.clientX);
//     setMy(e.clientY);
//   };
//   const rootStyle = { "--mx": `${mx}px`, "--my": `${my}px` };

//   // --- Gallery images ---
//   const galleryImages = useMemo(
//     () => (mockData?.portfolioImages || []).map((p) => p.url).filter(Boolean),
//     []
//   );
//   const [imgIndex, setImgIndex] = useState(0);
//   const nextImg = () => galleryImages.length && setImgIndex((i) => (i + 1) % galleryImages.length);
//   const prevImg = () => galleryImages.length && setImgIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") nextImg();
//       if (e.key === "ArrowLeft") prevImg();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [galleryImages.length]);

//   const [solidNav, setSolidNav] = useState(false);
//   useEffect(() => {
//     const onScroll = () => setSolidNav(window.scrollY > 24);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const [activeSpecTab, setActiveSpecTab] = useState("architecture");
//   const specTabs = useMemo(
//     () => [
//       { id: "architecture", label: "Architecture", icon: Cpu },
//       { id: "optical", label: "Optical", icon: Target },
//       { id: "mechanical", label: "Mechanical", icon: Settings },
//       { id: "control", label: "Control", icon: Zap },
//     ],
//     []
//   );

//   // KPI badges
//   const kpis = [
//     { value: "3-axis", label: "Coordinated Motion" },
//     { value: "≈13± mm", label: "Range per Axis" },
//     { value: "< 50 nm", label: "Step Size (typ.)" },
//     { value: "Piezo", label: "Actuation" },
//   ];

//   // Neutral, informative spec data (white text in cards)
//   const specData = {
//     architecture: [
//       { label: "System Topology", value: "Objective-scanning periscope (overview)" },
//       { label: "Alignment Strategy", value: "Maintains beam orthogonality across travel" },
//       { label: "Form Factor", value: "Retrofit-friendly to standard lab setups" },
//     ],
//     optical: [
//       { label: "Optical Path", value: "Relay imaging with coaxial illumination" },
//       { label: "Stability", value: "Lab-validated drift performance (summary)" },
//       { label: "Interfaces", value: "Common lab optics interfaces" },
//     ],
//     mechanical: [
//       { label: "Frame Strategy", value: "High stiffness with low mass" },
//       { label: "Positioning Class", value: "Fine positioning for raster workflows" },
//       { label: "Materials", value: "Engineering alloys & steels" },
//     ],
//     control: [
//       { label: "Actuation", value: "Piezo-driven linear motion" },
//       { label: "Electronics", value: "Modular controller / embedded hub" },
//       { label: "APIs", value: "Python / LabVIEW" },
//     ],
//   };

//   // Models section state
//   const controlTiers = [
//     { id: "cl-manual", label: "Closed-Loop Manual", short: "CL-Manual" },
//     { id: "ol-auto",   label: "Open-Loop Auto",     short: "OL-Auto"   },
//     { id: "cl-auto",   label: "Closed-Loop Auto",   short: "CL-Auto"   },
//   ];
//   const [tier, setTier] = useState(controlTiers[0].id);

//   const models = useMemo(
//     () => ({
//       horizontal: {
//         name: "PRISM — Horizontal Scanning",
//         blurb:
//           "Optimized for benches and cryostats with lateral travel demands. Emphasizes orthogonal beam geometry across scan range.",
//         features: [
//           "Low profile; retrofit-friendly to crowded benches",
//           "High stiffness for fast raster patterns",
//           "Modular interfaces for objectives & detectors",
//         ],
//       },
//       vertical: {
//         name: "PRISM — Vertical Scanning",
//         blurb:
//           "Designed for through-axis precision with gravity-friendly Z motion. Suited to tall setups and extended vertical reach.",
//         features: [
//           "Hanging Z architecture for stable vertical moves",
//           "Predictable alignment across long Z travel",
//           "Drop-in adapters for varied environments",
//         ],
//       },
//     }),
//     []
//   );

//   const tierNotes = {
//     "cl-manual": {
//       tagline: "Dial-in positioning with readback. Ideal for setup, tuning, and teaching labs.",
//       posClass: "Fine, loop-stabilized",
//       travel: "≈13± mm / axis",
//       operation: "Manual jog, loop hold",
//       integration: "Basic I/O, USB",
//     },
//     "ol-auto": {
//       tagline: "Programmatic motion without feedback. Best for scripted scans where repeatability is set by process.",
//       posClass: "Fine, open-loop",
//       travel: "≈13± mm / axis",
//       operation: "Scripted jog & raster",
//       integration: "Python/LabVIEW APIs",
//     },
//     "cl-auto": {
//       tagline: "Programmatic motion with feedback for accuracy. Best for repeatable automated experiments.",
//       posClass: "Precision, loop-stabilized",
//       travel: "≈13± mm / axis",
//       operation: "Scripted raster + closed-loop hold",
//       integration: "Advanced API + triggers",
//     },
//   };

//   const rows = useMemo(
//     () => [
//       { feature: "Orientation", H: "Horizontal scanning", V: "Vertical scanning" },
//       { feature: "Positioning class", H: tierNotes[tier].posClass, V: tierNotes[tier].posClass },
//       { feature: "Travel per axis", H: tierNotes[tier].travel, V: tierNotes[tier].travel },
//       { feature: "Operating mode", H: tierNotes[tier].operation, V: tierNotes[tier].operation },
//       { feature: "Integration", H: tierNotes[tier].integration, V: tierNotes[tier].integration },
//       { feature: "Interfaces", H: "Modular optics & detectors", V: "Modular optics & detectors" },
//       { feature: "Use cases", H: "Benches • Cryostats • Rasters", V: "Tall stacks • Long Z • Rasters" },
//     ],
//     [tier]
//   );

//   return (
//     <div
//       className="min-h-screen w-full bg-black text-white scroll-smooth"
//       onMouseMove={onMove}
//       style={rootStyle}
//     >
//       {/* BACKGROUND LAYER (fixed) — sits above black page bg, below all content */}
//       <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
//         {/* Cursor glow */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "radial-gradient(700px at var(--mx) var(--my), rgba(19, 194, 179, 0.14), transparent 60%)",
//           }}
//         />
//         {/* Static top glow (brought back) */}
//         <div
//           className="absolute inset-x-0 top-0 h-[70vh]"
//           style={{
//             background:
//               "radial-gradient(60rem 30rem at 50% -10%, rgba(19, 194, 179, 0.18), transparent 60%)",
//           }}
//         />
//       </div>

//       {/* CONTENT WRAPPER */}
//       <div className="relative z-10">
//         {/* Header */}
//         <header
//           className={`fixed inset-x-0 top-0 z-50 transition-all ${
//             solidNav ? "backdrop-blur bg-black/70 border-b border-white/10" : "bg-transparent"
//           }`}
//         >
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
//                 <ArrowLeft size={18} />
//                 <span>Back</span>
//               </Link>
//               <div className="h-5 w-px bg-white/20" />
//               <div className="font-semibold tracking-widest text-white">FLAGSHIP</div>
//               <div className="text-white/40">INSTRUMENT</div>
//             </div>
//             <div className="flex items-center gap-2">
//               <Link
//                 to="/contact"
//                 className="rounded-full px-4 py-2 text-sm font-medium"
//                 style={{ backgroundColor: ACCENT, color: "#000" }}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>
//         </header>

// {/* Hero with Axivion-teal glow + cursor glow above it */}
// <section className="relative h-[92vh] w-full overflow-hidden">
//   {/* Hero background teal gradient (at the very back of the hero) */}
//   <div className="absolute inset-0 z-0">
//     <div className="absolute inset-0 bg-gradient-to-b from-[#062a2e] via-[#052024] to-black" />
//     <div className="absolute inset-0 [background-image:radial-gradient(60rem_30rem_at_50%_120%,rgba(19,194,179,0.18),transparent_60%),linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.55))]" />
//   </div>

//   {/* ✨ Cursor halo ABOVE the hero bg, BELOW content */}
//   <div
//     className="pointer-events-none absolute inset-0 z-10"
//     style={{
//       background:
//         "radial-gradient(700px at var(--mx) var(--my), rgba(19, 194, 179, 0.18), transparent 60%)",
//     }}
//   />

//   {/* Content */}
//   <div className="absolute inset-0 grid place-items-center z-20">
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="text-center px-6"
//     >
//       <div
//         className="mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs uppercase tracking-widest text-white/90 border"
//         style={{ borderColor: "rgba(19,194,179,0.45)" }}
//       >
//         <Microscope size={14} /> Instrumentation Preview
//       </div>
//       <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
//         <span className="text-white">Periscope Relay Imaging</span>
//         <span className="block" style={{ color: ACCENT }}>Scanning Microscope</span>
//       </h1>
//       <p className="mx-auto mt-5 max-w-2xl text-balance text-white/80">
//         High-level preview of an advanced optical instrument. Detailed specifications are shared directly upon request.
//       </p>
//       <div className="mt-8 flex items-center justify-center gap-3">
//         <a
//           href="#models"
//           className="rounded-full px-6 py-3 text-sm font-medium"
//           style={{ backgroundColor: ACCENT, color: "#000" }}
//           onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
//           onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
//         >
//           Explore
//         </a>
//       </div>
//     </motion.div>
//   </div>

//   {/* KPI badges (sit above the cursor glow too) */}
//   <div className="absolute bottom-6 inset-x-0 z-20">
//     <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-2 px-6">
//       {kpis.map((k) => (
//         <div
//           key={k.label}
//           className="rounded-2xl backdrop-blur px-4 py-3 text-center border"
//           style={{ background: "rgba(19,194,179,0.06)", borderColor: "rgba(19,194,179,0.18)" }}
//         >
//           <div className="text-xl font-semibold">{k.value}</div>
//           <div className="text-xs text-white/70">{k.label}</div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//         {/* Design (bg transparent so glow is continuous) */}
//         <section id="design" className="relative w-full">
//           <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="order-2 lg:order-1"
//               >
//                 <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
//                   Designed for stable, precise motion
//                 </h2>
//                 <p className="mt-5 text-white/80 max-w-xl">
//                   A configurable platform focused on repeatable positioning and clean integration with standard lab workflows.
//                 </p>

//                 <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
//                   {[
//                     { h: "Modular", p: "Components and interfaces adapt to varied environments." },
//                     { h: "Retrofit-friendly", p: "Drop-in mounting and common accessory support." },
//                     { h: "Stable", p: "Predictable motion and consistent alignment." },
//                   ].map((c) => (
//                     <div key={c.h} className="rounded-2xl p-5 border border-white/15 bg-black/50">
//                       <div className="text-lg font-semibold text-white">{c.h}</div>
//                       <div className="text-sm text-white/70">{c.p}</div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="order-1 lg:order-2"
//               >
//                 {/* Main image */}
//                 <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 bg-black/50">
//                   {galleryImages.length > 0 ? (
//                     <>
//                       <img
//                         src={galleryImages[imgIndex]}
//                         alt={`PRISM preview ${imgIndex + 1}`}
//                         className="absolute inset-0 h-full w-full object-cover"
//                         draggable={false}
//                       />
//                       <button
//                         onClick={prevImg}
//                         aria-label="Previous image"
//                         className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full px-3 py-2 text-sm backdrop-blur border border-white/15 bg-black/60"
//                       >
//                         ‹
//                       </button>
//                       <button
//                         onClick={nextImg}
//                         aria-label="Next image"
//                         className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full px-3 py-2 text-sm backdrop-blur border border-white/15 bg-black/60"
//                       >
//                         ›
//                       </button>
//                       <div className="absolute bottom-3 right-3 text-xs text-white/80 rounded-full px-2 py-1 border border-white/15 bg-black/60">
//                         {imgIndex + 1}/{galleryImages.length}
//                       </div>
//                     </>
//                   ) : (
//                     <div className="absolute inset-0 grid place-items-center text-white/60">
//                       <Microscope size={120} />
//                     </div>
//                   )}
//                 </div>

//                 {/* Thumbnails */}
//                 <div className="mt-4 grid grid-cols-3 gap-3">
//                   {[0, 1, 2].map((slot) => {
//                     const thumbIdx = galleryImages.length ? (imgIndex + slot) % galleryImages.length : null;
//                     return (
//                       <button
//                         key={slot}
//                         onClick={() => thumbIdx !== null && setImgIndex(thumbIdx)}
//                         className={`h-24 rounded-2xl overflow-hidden border bg-black/50 ${
//                           thumbIdx === imgIndex ? "border-white/60" : "border-white/15 hover:border-white/40"
//                         }`}
//                         aria-label={`Show image ${thumbIdx !== null ? thumbIdx + 1 : ""}`}
//                       >
//                         {thumbIdx !== null ? (
//                           <img
//                             src={galleryImages[thumbIdx]}
//                             alt={`Thumbnail ${thumbIdx + 1}`}
//                             className="h-full w-full object-cover"
//                             draggable={false}
//                           />
//                         ) : (
//                           <div className="h-full w-full" />
//                         )}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Sticky chips (can stay opaque for readability) */}
//         <section className="sticky top-16 z-40 border-y border-white/10 bg-black">
//           <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
//             <div className="flex items-center gap-6 text-sm text-white">
//               <div className="flex items-center gap-2">
//                 <Move3DIcon size={16} style={{ color: ACCENT }} /> Full 3-axis motion
//                 <Ruler size={16} style={{ color: ACCENT }} /> 13± mm Range
//                 <Gauge size={16} style={{ color: ACCENT }} /> ~50 nm Stepping
//                 <Zap size={16} style={{ color: ACCENT }} /> Piezo Actuation
//               </div>
//             </div>
//             <a
//               href="/contact"
//               className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
//               style={{ backgroundColor: ACCENT, color: "#000" }}
//               onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
//               onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
//             >
//               <Download size={16} /> Prototyping Station Lab Tour
//             </a>
//           </div>
//         </section>

//         {/* System Overview */}
//         <section className="relative w-full">
//           <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
//               <motion.div
//                 initial={{ opacity: 0, y: 12 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <div className="text-sm uppercase tracking-widest text-white/80">System Overview</div>
//                 <h3 className="mt-2 text-4xl font-semibold tracking-tight text-white">
//                   Coordinated motion with a stable optical path
//                 </h3>
//                 <p className="mt-4 text-white/80 max-w-xl">
//                   High-level description of the system’s motion strategy and alignment goals. Specific mechanisms are intentionally not detailed on this page.
//                 </p>

//                 <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
//                   {["Coordinated axes", "Consistent reference", "Drop-in adapters", "Predictable behavior"].map((t) => (
//                     <div key={t} className="rounded-2xl p-5 border border-white/15 bg-black/50">
//                       <div className="text-sm text-white/70">Feature</div>
//                       <div className="text-lg font-semibold text-white">{t}</div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, scale: 0.98 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 bg-black/50">
//                   <div className="absolute inset-0 grid place-items-center">
//                     <div className="w-64 h-64 rounded-full border border-white/20 relative">
//                       <div className="absolute inset-6 rounded-full border border-white/30" />
//                       <div className="absolute left-1/2 top-0 -translate-x-1/2 h-1/2 w-px bg-white/30" />
//                       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-px bg-white/30" />
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Specs */}
//         <section id="specs" className="relative w-full">
//           <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
//             <div className="flex items-center justify-between">
//               <h3 className="text-4xl font-semibold tracking-tight text-white">Technical Specifications</h3>
//               <div className="flex items-center gap-2">
//                 {specTabs.map((t) => (
//                   <button
//                     key={t.id}
//                     onClick={() => setActiveSpecTab(t.id)}
//                     className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition border"
//                     style={{
//                       backgroundColor: activeSpecTab === t.id ? ACCENT : "transparent",
//                       color: activeSpecTab === t.id ? "#000" : "rgba(255,255,255,0.9)",
//                       borderColor: "rgba(255,255,255,0.2)",
//                     }}
//                   >
//                     <t.icon size={16} /> {t.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {specData[activeSpecTab].map((s) => (
//                 <div key={s.label} className="rounded-2xl border border-white/15 p-6 bg-black/50">
//                   <div className="text-sm text-white/80">{s.label}</div>
//                   <div className="mt-1 text-lg font-semibold text-white">{s.value}</div>
//                 </div>
//               ))}
//             </div>

//             {/* Neutral tiles */}
//             <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
//               {[
//                 { v: "3-axis", l: "Coordinated motion" },
//                 { v: "≈13± mm", l: "Range per axis" },
//                 { v: "< 50 nm", l: "Typical stepping" },
//               ].map((t) => (
//                 <div key={t.v} className="rounded-2xl border border-white/15 p-6 text-center bg-black/50">
//                   <div className="text-2xl font-semibold text-white">{t.v}</div>
//                   <div className="text-sm text-white/70">{t.l}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* MODELS (anchor target) */}
//         <section id="models" className="mx-auto max-w-7xl px-6 pb-24 lg:pb-28 scroll-mt-20">
//           <motion.h2
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-4xl md:text-5xl font-semibold tracking-tight text-white"
//           >
//             Choose your PRISM
//           </motion.h2>
//           <p className="mt-3 text-white/80 max-w-2xl">
//             Two scanning orientations with three control options. Get full specifications from engineering on request.
//           </p>

//           {/* Control tier picker */}
//           <div className="mt-4 flex flex-wrap items-center gap-2">
//             {["cl-manual", "ol-auto", "cl-auto"].map((id) => (
//               <button
//                 key={id}
//                 onClick={() => setTier(id)}
//                 className="rounded-full px-4 py-2 text-sm transition border"
//                 style={{
//                   backgroundColor: tier === id ? ACCENT : "transparent",
//                   color: tier === id ? "#000" : "rgba(255,255,255,0.9)",
//                   borderColor: "rgba(255,255,255,0.25)",
//                 }}
//               >
//                 {id === "cl-manual" ? "Closed-Loop Manual" : id === "ol-auto" ? "Open-Loop Auto" : "Closed-Loop Auto"}
//               </button>
//             ))}
//           </div>
//           <div className="mt-2 text-sm text-white/70">{tierNotes[tier].tagline}</div>

//           {/* Two model cards */}
//           <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Horizontal */}
//             <div className="rounded-3xl p-6 border border-white/15 bg-black/50">
//               <div className="text-sm uppercase tracking-widest text-white/80">Model</div>
//               <h3 className="mt-1 text-2xl font-semibold text-white">{models.horizontal.name}</h3>
//               <div className="mt-3 h-44 rounded-2xl border border-white/15 bg-black/50 grid place-items-center text-white/60">
//                 Image Placeholder
//               </div>
//               <p className="mt-3 text-white/80">{models.horizontal.blurb}</p>
//               <ul className="mt-4 space-y-2 text-sm text-white/85">
//                 {models.horizontal.features.map((f) => (
//                   <li key={f} className="flex items-start gap-2">
//                     <span className="mt-1 size-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
//                     <span>{f}</span>
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-6">
//                 <Link
//                   to="/contact"
//                   className="rounded-full px-5 py-2.5 text-sm font-medium"
//                   style={{ backgroundColor: ACCENT, color: "#000" }}
//                   onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
//                   onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
//                 >
//                   Request Details
//                 </Link>
//               </div>
//             </div>

//             {/* Vertical */}
//             <div className="rounded-3xl p-6 border border-white/15 bg-black/50">
//               <div className="text-sm uppercase tracking-widest text-white/80">Model</div>
//               <h3 className="mt-1 text-2xl font-semibold text-white">{models.vertical.name}</h3>
//               <div className="mt-3 h-44 rounded-2xl border border-white/15 bg-black/50 grid place-items-center text-white/60">
//                 Image Placeholder
//               </div>
//               <p className="mt-3 text-white/80">{models.vertical.blurb}</p>
//               <ul className="mt-4 space-y-2 text-sm text-white/85">
//                 {models.vertical.features.map((f) => (
//                   <li key={f} className="flex items-start gap-2">
//                     <span className="mt-1 size-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
//                     <span>{f}</span>
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-6">
//                 <Link
//                   to="/contact"
//                   className="rounded-full px-5 py-2.5 text-sm font-medium"
//                   style={{ backgroundColor: ACCENT, color: "#000" }}
//                   onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
//                   onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
//                 >
//                   Request Details
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Comparison table */}
//           <div className="mt-10 rounded-3xl overflow-hidden border border-white/15">
//             <div className="grid grid-cols-3 text-sm">
//               <div className="px-4 py-3 bg-black/60 text-white/80">Key Feature</div>
//               <div className="px-4 py-3 bg-black/60 text-white/80">Horizontal PRISM</div>
//               <div className="px-4 py-3 bg-black/60 text-white/80">Vertical PRISM</div>

//               {rows.map((row) => (
//                 <React.Fragment key={row.feature}>
//                   <div className="px-4 py-3 border-t border-white/15 text-white/75">{row.feature}</div>
//                   <div className="px-4 py-3 border-t border-white/15">{row.H}</div>
//                   <div className="px-4 py-3 border-t border-white/15">{row.V}</div>
//                 </React.Fragment>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="relative w-full">
//           <div className="mx-auto max-w-7xl px-6 pb-24 lg:pb-32">
//             <div className="rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 border border-white/15 bg-black/50">
//               <div className="flex-1">
//                 <div className="text-sm uppercase tracking-widest text-white/80">Status</div>
//                 <div className="mt-2 text-3xl font-semibold text-white">Active development • Details on request</div>
//                 <p className="mt-3 text-white/80 max-w-xl">
//                   Request a tour of the prototyping station and see current setups. Configuration options available for varied environments.
//                 </p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Link
//                   to="/contact"
//                   className="rounded-full px-6 py-3 text-sm font-medium"
//                   style={{ backgroundColor: ACCENT, color: "#000" }}
//                   onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
//                   onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
//                 >
//                   Prototyping Station Lab Tour
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="border-t border-white/15 bg-black">
//           <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
//             <div>PRISM</div>
//             <div className="flex items-center gap-3">
//               <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT }} />
//               <span>Drafting Provisional Patent</span>
//             </div>
//             <div>© {new Date().getFullYear()} Axivion Instruments</div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }


// // src/components/PrismProject.jsx
// import React, { useEffect, useMemo, useState, useRef, useCallback } from "react";
// import { motion } from "framer-motion";
// import mockData from "../data/mock";
// import {
//   ArrowLeft,
//   Download,
//   Gauge,
//   Zap,
//   Target,
//   Microscope,
//   Ruler,
//   Move3DIcon,
//   Cpu,
//   Settings,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function PrismX() {
//   const ACCENT = "#13c2b3";
//   const ACCENT_HOVER = "#0fb3a5";

//   // --- Global cursor-follow glow (background only; viewport coords)
//   const [mx, setMx] = useState(-9999);
//   const [my, setMy] = useState(-9999);
//   const onMove = (e) => {
//     setMx(e.clientX);
//     setMy(e.clientY);
//   };
//   const rootStyle = { "--mx": `${mx}px`, "--my": `${my}px` };

//   // --- Hero-local cursor coords (keep hero halo glued to cursor while scrolling)
//   const heroRef = useRef(null);
//   const onHeroMove = (e) => {
//     const el = heroRef.current;
//     if (!el) return;
//     const r = el.getBoundingClientRect();
//     el.style.setProperty("--hx", `${e.clientX - r.left}px`);
//     el.style.setProperty("--hy", `${e.clientY - r.top}px`);
//   };

//   // From last known viewport mouse pos -> hero-local CSS vars
//   const updateHeroGlowFromViewport = useCallback(() => {
//     const el = heroRef.current;
//     if (!el) return;
//     const r = el.getBoundingClientRect();
//     el.style.setProperty("--hx", `${mx - r.left}px`);
//     el.style.setProperty("--hy", `${my - r.top}px`);
//   }, [mx, my]);

//   // Re-sync when mouse moves anywhere
//   useEffect(() => {
//     updateHeroGlowFromViewport();
//   }, [updateHeroGlowFromViewport]);

//   // Re-sync on scroll/resize (via rAF, jank-free)
//   useEffect(() => {
//     let raf = 0;
//     const schedule = () => {
//       cancelAnimationFrame(raf);
//       raf = requestAnimationFrame(updateHeroGlowFromViewport);
//     };
//     schedule(); // run once on mount
//     window.addEventListener("scroll", schedule, { passive: true });
//     window.addEventListener("resize", schedule, { passive: true });
//     return () => {
//       cancelAnimationFrame(raf);
//       window.removeEventListener("scroll", schedule);
//       window.removeEventListener("resize", schedule);
//     };
//   }, [updateHeroGlowFromViewport]);

//   // --- Gallery images ---
//   const galleryImages = useMemo(
//     () => (mockData?.portfolioImages || []).map((p) => p.url).filter(Boolean),
//     []
//   );
//   const [imgIndex, setImgIndex] = useState(0);
//   const nextImg = () =>
//     galleryImages.length && setImgIndex((i) => (i + 1) % galleryImages.length);
//   const prevImg = () =>
//     galleryImages.length &&
//     setImgIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") nextImg();
//       if (e.key === "ArrowLeft") prevImg();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [galleryImages.length]);

//   const [solidNav, setSolidNav] = useState(false);
//   useEffect(() => {
//     const onScroll = () => setSolidNav(window.scrollY > 24);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const [activeSpecTab, setActiveSpecTab] = useState("architecture");
//   const specTabs = useMemo(
//     () => [
//       { id: "architecture", label: "Architecture", icon: Cpu },
//       { id: "optical", label: "Optical", icon: Target },
//       { id: "mechanical", label: "Mechanical", icon: Settings },
//       { id: "control", label: "Control", icon: Zap },
//     ],
//     []
//   );

//   // KPI badges
//   const kpis = [
//     { value: "3-axis", label: "Coordinated Motion" },
//     { value: "≈13± mm", label: "Range per Axis" },
//     { value: "< 50 nm", label: "Step Size (typ.)" },
//     { value: "Piezo", label: "Actuation" },
//   ];

//   // Spec data
//   const specData = {
//     architecture: [
//       { label: "System Topology", value: "Objective-scanning periscope (overview)" },
//       { label: "Alignment Strategy", value: "Maintains beam orthogonality across travel" },
//       { label: "Form Factor", value: "Retrofit-friendly to standard lab setups" },
//     ],
//     optical: [
//       { label: "Optical Path", value: "Relay imaging with coaxial illumination" },
//       { label: "Stability", value: "Lab-validated drift performance (summary)" },
//       { label: "Interfaces", value: "Common lab optics interfaces" },
//     ],
//     mechanical: [
//       { label: "Frame Strategy", value: "High stiffness with low mass" },
//       { label: "Positioning Class", value: "Fine positioning for raster workflows" },
//       { label: "Materials", value: "Engineering alloys & steels" },
//     ],
//     control: [
//       { label: "Actuation", value: "Piezo-driven linear motion" },
//       { label: "Electronics", value: "Modular controller / embedded hub" },
//       { label: "APIs", value: "Python / LabVIEW" },
//     ],
//   };

//   // Models section state
//   const controlTiers = [
//     { id: "cl-manual", label: "Closed-Loop Manual", short: "CL-Manual" },
//     { id: "ol-auto", label: "Open-Loop Auto", short: "OL-Auto" },
//     { id: "cl-auto", label: "Closed-Loop Auto", short: "CL-Auto" },
//   ];
//   const [tier, setTier] = useState(controlTiers[0].id);

//   const models = useMemo(
//     () => ({
//       horizontal: {
//         name: "PRISM — Horizontal Scanning",
//         blurb:
//           "Optimized for benches and cryostats with lateral travel demands. Emphasizes orthogonal beam geometry across scan range.",
//         features: [
//           "Low profile; retrofit-friendly to crowded benches",
//           "High stiffness for fast raster patterns",
//           "Modular interfaces for objectives & detectors",
//         ],
//       },
//       vertical: {
//         name: "PRISM — Vertical Scanning",
//         blurb:
//           "Designed for through-axis precision with gravity-friendly Z motion. Suited to tall setups and extended vertical reach.",
//         features: [
//           "Hanging Z architecture for stable vertical moves",
//           "Predictable alignment across long Z travel",
//           "Drop-in adapters for varied environments",
//         ],
//       },
//     }),
//     []
//   );

//   const tierNotes = {
//     "cl-manual": {
//       tagline:
//         "Dial-in positioning with readback. Ideal for setup, tuning, and teaching labs.",
//       posClass: "Fine, loop-stabilized",
//       travel: "≈13± mm / axis",
//       operation: "Manual jog, loop hold",
//       integration: "Basic I/O, USB",
//     },
//     "ol-auto": {
//       tagline:
//         "Programmatic motion without feedback. Best for scripted scans where repeatability is set by process.",
//       posClass: "Fine, open-loop",
//       travel: "≈13± mm / axis",
//       operation: "Scripted jog & raster",
//       integration: "Python/LabVIEW APIs",
//     },
//     "cl-auto": {
//       tagline:
//         "Programmatic motion with feedback for accuracy. Best for repeatable automated experiments.",
//       posClass: "Precision, loop-stabilized",
//       travel: "≈13± mm / axis",
//       operation: "Scripted raster + closed-loop hold",
//       integration: "Advanced API + triggers",
//     },
//   };

//   const rows = useMemo(
//     () => [
//       { feature: "Orientation", H: "Horizontal scanning", V: "Vertical scanning" },
//       { feature: "Positioning class", H: tierNotes[tier].posClass, V: tierNotes[tier].posClass },
//       { feature: "Travel per axis", H: tierNotes[tier].travel, V: tierNotes[tier].travel },
//       { feature: "Operating mode", H: tierNotes[tier].operation, V: tierNotes[tier].operation },
//       { feature: "Integration", H: tierNotes[tier].integration, V: tierNotes[tier].integration },
//       { feature: "Interfaces", H: "Modular optics & detectors", V: "Modular optics & detectors" },
//       { feature: "Use cases", H: "Benches • Cryostats • Rasters", V: "Tall stacks • Long Z • Rasters" },
//     ],
//     [tier]
//   );

//   return (
//     <div
//       className="min-h-screen w-full bg-black text-white scroll-smooth"
//       onMouseMove={onMove}
//       style={rootStyle}
//     >
//       {/* BACKGROUND LAYER (fixed) — above black page bg, below all content */}
//       <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
//         {/* Global cursor glow */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "radial-gradient(700px at var(--mx) var(--my), rgba(19, 194, 179, 0.14), transparent 60%)",
//           }}
//         />
//         {/* Static top glow */}
//         <div
//           className="absolute inset-x-0 top-0 h-[70vh]"
//           style={{
//             background:
//               "radial-gradient(60rem 30rem at 50% -10%, rgba(19, 194, 179, 0.18), transparent 60%)",
//           }}
//         />
//       </div>

//       {/* CONTENT WRAPPER */}
//       <div className="relative z-10">
//         {/* Header */}
//         <header
//           className={`fixed inset-x-0 top-0 z-50 transition-all ${
//             solidNav
//               ? "backdrop-blur bg-black/70 border-b border-white/10"
//               : "bg-transparent"
//           }`}
//         >
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <Link
//                 to="/"
//                 className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
//               >
//                 <ArrowLeft size={18} />
//                 <span>Back</span>
//               </Link>
//               <div className="h-5 w-px bg-white/20" />
//               <div className="font-semibold tracking-widest text-white">FLAGSHIP</div>
//               <div className="text-white/40">INSTRUMENT</div>
//             </div>
//             <div className="flex items-center gap-2">
//               <Link
//                 to="/contact"
//                 className="rounded-full px-4 py-2 text-sm font-medium"
//                 style={{ backgroundColor: ACCENT, color: "#000" }}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>
//         </header>

//         {/* Hero with Axivion-teal glow + hero-local cursor glow */}
//         <section
//           ref={heroRef}
//           onMouseMove={onHeroMove}
//           className="relative h-[92vh] w-full overflow-hidden"
//         >
//           {/* Hero background teal gradient */}
//           <div className="absolute inset-0 z-0">
//             <div className="absolute inset-0 bg-gradient-to-b from-[#062a2e] via-[#052024] to-black" />
//             <div className="absolute inset-0 [background-image:radial-gradient(60rem_30rem_at_50%_120%,rgba(19,194,179,0.18),transparent_60%),linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.55))]" />
//           </div>

//           {/* Hero-local cursor halo (above hero bg, below content) */}
//           <div
//             className="pointer-events-none absolute inset-0 z-10"
//             style={{
//               background:
//                 "radial-gradient(700px at var(--hx) var(--hy), rgba(19, 194, 179, 0.18), transparent 60%)",
//             }}
//           />

//           {/* Content */}
//           <div className="absolute inset-0 grid place-items-center z-20">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center px-6"
//             >
//               <div
//                 className="mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs uppercase tracking-widest text-white/90 border"
//                 style={{ borderColor: "rgba(19,194,179,0.45)" }}
//               >
//                 <Microscope size={14} /> Instrumentation Preview
//               </div>
//               <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
//                 <span className="text-white">Periscope Relay Imaging</span>
//                 <span className="block" style={{ color: ACCENT }}>
//                   Scanning Microscope
//                 </span>
//               </h1>
//               <p className="mx-auto mt-5 max-w-2xl text-balance text-white/80">
//                 High-level preview of an advanced optical instrument. Detailed specifications are
//                 shared directly upon request.
//               </p>
//               <div className="mt-8 flex items-center justify-center gap-3">
//                 <a
//                   href="#models"
//                   className="rounded-full px-6 py-3 text-sm font-medium"
//                   style={{ backgroundColor: ACCENT, color: "#000" }}
//                   onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
//                   onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
//                 >
//                   Explore
//                 </a>
//               </div>
//             </motion.div>
//           </div>

//           {/* KPI badges */}
//           <div className="absolute bottom-6 inset-x-0 z-20">
//             <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-2 px-6">
//               {kpis.map((k) => (
//                 <div
//                   key={k.label}
//                   className="rounded-2xl backdrop-blur px-4 py-3 text-center border"
//                   style={{
//                     background: "rgba(19,194,179,0.06)",
//                     borderColor: "rgba(19,194,179,0.18)",
//                   }}
//                 >
//                   <div className="text-xl font-semibold">{k.value}</div>
//                   <div className="text-xs text-white/70">{k.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Design */}
//         <section id="design" className="relative w-full">
//           <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="order-2 lg:order-1"
//               >
//                 <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
//                   Designed for stable, precise motion
//                 </h2>
//                 <p className="mt-5 text-white/80 max-w-xl">
//                   A configurable platform focused on repeatable positioning and clean integration
//                   with standard lab workflows.
//                 </p>

//                 <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
//                   {[
//                     { h: "Modular", p: "Components and interfaces adapt to varied environments." },
//                     { h: "Retrofit-friendly", p: "Drop-in mounting and common accessory support." },
//                     { h: "Stable", p: "Predictable motion and consistent alignment." },
//                   ].map((c) => (
//                     <div key={c.h} className="rounded-2xl p-5 border border-white/15 bg-black/50">
//                       <div className="text-lg font-semibold text-white">{c.h}</div>
//                       <div className="text-sm text-white/70">{c.p}</div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="order-1 lg:order-2"
//               >
//                 {/* Main image */}
//                 <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 bg-black/50">
//                   {galleryImages.length > 0 ? (
//                     <>
//                       <img
//                         src={galleryImages[imgIndex]}
//                         alt={`PRISM preview ${imgIndex + 1}`}
//                         className="absolute inset-0 h-full w-full object-cover"
//                         draggable={false}
//                       />
//                       <button
//                         onClick={prevImg}
//                         aria-label="Previous image"
//                         className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full px-3 py-2 text-sm backdrop-blur border border-white/15 bg-black/60"
//                       >
//                         ‹
//                       </button>
//                       <button
//                         onClick={nextImg}
//                         aria-label="Next image"
//                         className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full px-3 py-2 text-sm backdrop-blur border border-white/15 bg-black/60"
//                       >
//                         ›
//                       </button>
//                       <div className="absolute bottom-3 right-3 text-xs text-white/80 rounded-full px-2 py-1 border border-white/15 bg-black/60">
//                         {imgIndex + 1}/{galleryImages.length}
//                       </div>
//                     </>
//                   ) : (
//                     <div className="absolute inset-0 grid place-items-center text-white/60">
//                       <Microscope size={120} />
//                     </div>
//                   )}
//                 </div>

//                 {/* Thumbnails */}
//                 <div className="mt-4 grid grid-cols-3 gap-3">
//                   {[0, 1, 2].map((slot) => {
//                     const thumbIdx = galleryImages.length
//                       ? (imgIndex + slot) % galleryImages.length
//                       : null;
//                     return (
//                       <button
//                         key={slot}
//                         onClick={() => thumbIdx !== null && setImgIndex(thumbIdx)}
//                         className={`h-24 rounded-2xl overflow-hidden border bg-black/50 ${
//                           thumbIdx === imgIndex
//                             ? "border-white/60"
//                             : "border-white/15 hover:border-white/40"
//                         }`}
//                         aria-label={`Show image ${thumbIdx !== null ? thumbIdx + 1 : ""}`}
//                       >
//                         {thumbIdx !== null ? (
//                           <img
//                             src={galleryImages[thumbIdx]}
//                             alt={`Thumbnail ${thumbIdx + 1}`}
//                             className="h-full w-full object-cover"
//                             draggable={false}
//                           />
//                         ) : (
//                           <div className="h-full w-full" />
//                         )}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Sticky chips */}
//         <section className="sticky top-16 z-40 border-y border-white/10 bg-black">
//           <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
//             <div className="flex items-center gap-6 text-sm text-white">
//               <div className="flex items-center gap-2">
//                 <Move3DIcon size={16} style={{ color: ACCENT }} /> Full 3-axis motion
//                 <Ruler size={16} style={{ color: ACCENT }} /> 13± mm Range
//                 <Gauge size={16} style={{ color: ACCENT }} /> ~50 nm Stepping
//                 <Zap size={16} style={{ color: ACCENT }} /> Piezo Actuation
//               </div>
//             </div>
//             <a
//               href="/contact"
//               className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
//               style={{ backgroundColor: ACCENT, color: "#000" }}
//               onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
//               onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
//             >
//               <Download size={16} /> Prototyping Station Lab Tour
//             </a>
//           </div>
//         </section>

//         {/* System Overview */}
//         <section className="relative w-full">
//           <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
//               <motion.div
//                 initial={{ opacity: 0, y: 12 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <div className="text-sm uppercase tracking-widest text-white/80">
//                   System Overview
//                 </div>
//                 <h3 className="mt-2 text-4xl font-semibold tracking-tight text-white">
//                   Coordinated motion with a stable optical path
//                 </h3>
//                 <p className="mt-4 text-white/80 max-w-xl">
//                   High-level description of the system’s motion strategy and alignment goals.
//                   Specific mechanisms are intentionally not detailed on this page.
//                 </p>

//                 <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
//                   {["Coordinated axes", "Consistent reference", "Drop-in adapters", "Predictable behavior"].map(
//                     (t) => (
//                       <div
//                         key={t}
//                         className="rounded-2xl p-5 border border-white/15 bg-black/50"
//                       >
//                         <div className="text-sm text-white/70">Feature</div>
//                         <div className="text-lg font-semibold text-white">{t}</div>
//                       </div>
//                     )
//                   )}
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, scale: 0.98 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 bg-black/50">
//                   <div className="absolute inset-0 grid place-items-center">
//                     <div className="w-64 h-64 rounded-full border border-white/20 relative">
//                       <div className="absolute inset-6 rounded-full border border-white/30" />
//                       <div className="absolute left-1/2 top-0 -translate-x-1/2 h-1/2 w-px bg-white/30" />
//                       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-px bg-white/30" />
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Specs */}
//         <section id="specs" className="relative w-full">
//           <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
//             <div className="flex items-center justify-between">
//               <h3 className="text-4xl font-semibold tracking-tight text-white">
//                 Technical Specifications
//               </h3>
//               <div className="flex items-center gap-2">
//                 {specTabs.map((t) => (
//                   <button
//                     key={t.id}
//                     onClick={() => setActiveSpecTab(t.id)}
//                     className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition border"
//                     style={{
//                       backgroundColor: activeSpecTab === t.id ? ACCENT : "transparent",
//                       color: activeSpecTab === t.id ? "#000" : "rgba(255,255,255,0.9)",
//                       borderColor: "rgba(255,255,255,0.2)",
//                     }}
//                   >
//                     <t.icon size={16} /> {t.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {specData[activeSpecTab].map((s) => (
//                 <div key={s.label} className="rounded-2xl border border-white/15 p-6 bg-black/50">
//                   <div className="text-sm text-white/80">{s.label}</div>
//                   <div className="mt-1 text-lg font-semibold text-white">{s.value}</div>
//                 </div>
//               ))}
//             </div>

//             {/* Neutral tiles */}
//             <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
//               {[
//                 { v: "3-axis", l: "Coordinated motion" },
//                 { v: "≈13± mm", l: "Range per axis" },
//                 { v: "< 50 nm", l: "Typical stepping" },
//               ].map((t) => (
//                 <div
//                   key={t.v}
//                   className="rounded-2xl border border-white/15 p-6 text-center bg-black/50"
//                 >
//                   <div className="text-2xl font-semibold text-white">{t.v}</div>
//                   <div className="text-sm text-white/70">{t.l}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* MODELS (anchor target) */}
//         <section id="models" className="mx-auto max-w-7xl px-6 pb-24 lg:pb-28 scroll-mt-20">
//           <motion.h2
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-4xl md:text-5xl font-semibold tracking-tight text-white"
//           >
//             Choose your PRISM
//           </motion.h2>
//           <p className="mt-3 text-white/80 max-w-2xl">
//             Two scanning orientations with three control options. Get full specifications from
//             engineering on request.
//           </p>

//           {/* Control tier picker */}
//           <div className="mt-4 flex flex-wrap items-center gap-2">
//             {["cl-manual", "ol-auto", "cl-auto"].map((id) => (
//               <button
//                 key={id}
//                 onClick={() => setTier(id)}
//                 className="rounded-full px-4 py-2 text-sm transition border"
//                 style={{
//                   backgroundColor: tier === id ? ACCENT : "transparent",
//                   color: tier === id ? "#000" : "rgba(255,255,255,0.9)",
//                   borderColor: "rgba(255,255,255,0.25)",
//                 }}
//               >
//                 {id === "cl-manual"
//                   ? "Closed-Loop Manual"
//                   : id === "ol-auto"
//                   ? "Open-Loop Auto"
//                   : "Closed-Loop Auto"}
//               </button>
//             ))}
//           </div>
//           <div className="mt-2 text-sm text-white/70">{tierNotes[tier].tagline}</div>

//           {/* Two model cards */}
//           <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Horizontal */}
//             <div className="rounded-3xl p-6 border border-white/15 bg-black/50">
//               <div className="text-sm uppercase tracking-widest text-white/80">Model</div>
//               <h3 className="mt-1 text-2xl font-semibold text-white">{models.horizontal.name}</h3>
//               <div className="mt-3 h-44 rounded-2xl border border-white/15 bg-black/50 grid place-items-center text-white/60">
//                 Image Placeholder
//               </div>
//               <p className="mt-3 text-white/80">{models.horizontal.blurb}</p>
//               <ul className="mt-4 space-y-2 text-sm text-white/85">
//                 {models.horizontal.features.map((f) => (
//                   <li key={f} className="flex items-start gap-2">
//                     <span
//                       className="mt-1 size-1.5 rounded-full"
//                       style={{ backgroundColor: ACCENT }}
//                     />
//                     <span>{f}</span>
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-6">
//                 <Link
//                   to="/contact"
//                   className="rounded-full px-5 py-2.5 text-sm font-medium"
//                   style={{ backgroundColor: ACCENT, color: "#000" }}
//                   onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
//                   onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
//                 >
//                   Request Details
//                 </Link>
//               </div>
//             </div>

//             {/* Vertical */}
//             <div className="rounded-3xl p-6 border border-white/15 bg-black/50">
//               <div className="text-sm uppercase tracking-widest text-white/80">Model</div>
//               <h3 className="mt-1 text-2xl font-semibold text-white">{models.vertical.name}</h3>
//               <div className="mt-3 h-44 rounded-2xl border border-white/15 bg-black/50 grid place-items-center text-white/60">
//                 Image Placeholder
//               </div>
//               <p className="mt-3 text-white/80">{models.vertical.blurb}</p>
//               <ul className="mt-4 space-y-2 text-sm text-white/85">
//                 {models.vertical.features.map((f) => (
//                   <li key={f} className="flex items-start gap-2">
//                     <span
//                       className="mt-1 size-1.5 rounded-full"
//                       style={{ backgroundColor: ACCENT }}
//                     />
//                     <span>{f}</span>
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-6">
//                 <Link
//                   to="/contact"
//                   className="rounded-full px-5 py-2.5 text-sm font-medium"
//                   style={{ backgroundColor: ACCENT, color: "#000" }}
//                   onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
//                   onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
//                 >
//                   Request Details
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Comparison table */}
//           <div className="mt-10 rounded-3xl overflow-hidden border border-white/15">
//             <div className="grid grid-cols-3 text-sm">
//               <div className="px-4 py-3 bg-black/60 text-white/80">Key Feature</div>
//               <div className="px-4 py-3 bg-black/60 text-white/80">Horizontal PRISM</div>
//               <div className="px-4 py-3 bg-black/60 text-white/80">Vertical PRISM</div>

//               {rows.map((row) => (
//                 <React.Fragment key={row.feature}>
//                   <div className="px-4 py-3 border-t border-white/15 text-white/75">
//                     {row.feature}
//                   </div>
//                   <div className="px-4 py-3 border-t border-white/15">{row.H}</div>
//                   <div className="px-4 py-3 border-t border-white/15">{row.V}</div>
//                 </React.Fragment>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="relative w-full">
//           <div className="mx-auto max-w-7xl px-6 pb-24 lg:pb-32">
//             <div className="rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 border border-white/15 bg-black/50">
//               <div className="flex-1">
//                 <div className="text-sm uppercase tracking-widest text-white/80">Status</div>
//                 <div className="mt-2 text-3xl font-semibold text-white">
//                   Active development • Details on request
//                 </div>
//                 <p className="mt-3 text-white/80 max-w-xl">
//                   Request a tour of the prototyping station and see current setups. Configuration
//                   options available for varied environments.
//                 </p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Link
//                   to="/contact"
//                   className="rounded-full px-6 py-3 text-sm font-medium"
//                   style={{ backgroundColor: ACCENT, color: "#000" }}
//                   onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
//                   onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
//                 >
//                   Prototyping Station Lab Tour
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="border-t border-white/15 bg-black">
//           <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
//             <div>PRISM</div>
//             <div className="flex items-center gap-3">
//               <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT }} />
//               <span>Drafting Provisional Patent</span>
//             </div>
//             <div>© {new Date().getFullYear()} Axivion Instruments</div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }


// src/components/PrismProject.jsx
import React, { useEffect, useMemo, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import mockData from "../data/mock";
import {
  ArrowLeft,
  Download,
  Gauge,
  Zap,
  Target,
  Microscope,
  Ruler,
  Move3DIcon,
  Cpu,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function PrismX() {
  const ACCENT = "#13c2b3";
  const ACCENT_HOVER = "#0fb3a5";

  // --- Global cursor-follow glow (background only; viewport coords)
  const [mx, setMx] = useState(-9999);
  const [my, setMy] = useState(-9999);
  const onMove = (e) => {
    setMx(e.clientX);
    setMy(e.clientY);
  };
  const rootStyle = { "--mx": `${mx}px`, "--my": `${my}px` };
const SPEC_PDF = encodeURI(`${process.env.PUBLIC_URL}/PRISM Infodoc.pdf`);

  // --- Hero-local cursor coords (keep hero halo glued during scroll)
  const heroRef = useRef(null);
  const onHeroMove = (e) => {
    const el = heroRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--hx", `${e.clientX - r.left}px`);
    el.style.setProperty("--hy", `${e.clientY - r.top}px`);
  };

  // From last viewport mouse pos -> hero-local CSS vars
  const updateHeroGlowFromViewport = useCallback(() => {
    const el = heroRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--hx", `${mx - r.left}px`);
    el.style.setProperty("--hy", `${my - r.top}px`);
  }, [mx, my]);

  useEffect(() => {
    updateHeroGlowFromViewport();
  }, [updateHeroGlowFromViewport]);

  // Re-sync on scroll/resize (rAF to keep it smooth)
  useEffect(() => {
    let raf = 0;
    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateHeroGlowFromViewport);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [updateHeroGlowFromViewport]);

  // --- Gallery images ---
  const galleryImages = useMemo(
    () => (mockData?.portfolioImages || []).map((p) => p.url).filter(Boolean),
    []
  );
  const [imgIndex, setImgIndex] = useState(0);
  const nextImg = () =>
    galleryImages.length && setImgIndex((i) => (i + 1) % galleryImages.length);
  const prevImg = () =>
    galleryImages.length &&
    setImgIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") nextImg();
      if (e.key === "ArrowLeft") prevImg();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [galleryImages.length]);

  const [solidNav, setSolidNav] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolidNav(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [activeSpecTab, setActiveSpecTab] = useState("architecture");
  const specTabs = useMemo(
    () => [
      { id: "architecture", label: "Architecture", icon: Cpu },
      { id: "optical", label: "Optical", icon: Target },
      { id: "mechanical", label: "Mechanical", icon: Settings },
      { id: "control", label: "Control", icon: Zap },
    ],
    []
  );
// put this inside PrismX()
const scrollToIdWithOffset = useCallback((id) => {
  const el = document.getElementById(id);
  if (!el) return;

  // Measure fixed header + sticky chips (if present)
  const header = document.querySelector("header.fixed, header[style*='position: fixed']") || document.querySelector("header");
  const chips  = document.querySelector("section.sticky");

  let offset = 0;
  if (header) offset += header.getBoundingClientRect().height;
  if (chips)  offset += chips.getBoundingClientRect().height;

  // small breathing room
  offset += 8;

  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}, []);


  // KPI badges
  const kpis = [
    { value: "3-axis", label: "Coordinated Motion" },
    { value: "≈13± mm", label: "Range per Axis" },
    { value: "< 50 nm", label: "Step Size (typ.)" },
    { value: "Piezo", label: "Actuation" },
  ];

  // Spec data
  const specData = {
    architecture: [
      { label: "System Topology", value: "Objective-scanning periscope (overview)" },
      { label: "Alignment Strategy", value: "Maintains beam orthogonality across travel" },
      { label: "Form Factor", value: "Retrofit-friendly to standard lab setups" },
    ],
    optical: [
      { label: "Optical Path", value: "Relay imaging with coaxial illumination" },
      { label: "Stability", value: "Lab-validated drift performance (summary)" },
      { label: "Interfaces", value: "Common lab optics interfaces" },
    ],
    mechanical: [
      { label: "Frame Strategy", value: "High stiffness with low mass" },
      { label: "Positioning Class", value: "Fine positioning for raster workflows" },
      { label: "Materials", value: "Engineering alloys & steels" },
    ],
    control: [
      { label: "Actuation", value: "Piezo-driven linear motion" },
      { label: "Electronics", value: "Modular controller / embedded hub" },
      { label: "APIs", value: "Python / LabVIEW" },
    ],
  };

  // Models section state
  const controlTiers = [
    { id: "cl-manual", label: "Closed-Loop Manual", short: "CL-Manual" },
    { id: "ol-auto", label: "Open-Loop Auto", short: "OL-Auto" },
    { id: "cl-auto", label: "Closed-Loop Auto", short: "CL-Auto" },
  ];
  const [tier, setTier] = useState(controlTiers[0].id);

  const models = useMemo(
    () => ({
      horizontal: {
        name: "PRISM — Horizontal Scanning",
        blurb:
          "Optimized for benches and cryostats with lateral travel demands. Emphasizes orthogonal beam geometry across scan range.",
        features: [
          "Low profile; retrofit-friendly to crowded benches",
          "High stiffness for fast raster patterns",
          "Modular interfaces for objectives & detectors",
        ],
      },
      vertical: {
        name: "PRISM — Vertical Scanning",
        blurb:
          "Designed for through-axis precision with gravity-friendly Z motion. Suited to tall setups and extended vertical reach.",
        features: [
          "Hanging Z architecture for stable vertical moves",
          "Predictable alignment across long Z travel",
          "Drop-in adapters for varied environments",
        ],
      },
    }),
    []
  );

  const tierNotes = {
    "cl-manual": {
      tagline:
        "Dial-in positioning with readback. Ideal for setup, tuning, and teaching labs.",
      posClass: "Fine, loop-stabilized",
      travel: "≈13± mm / axis",
      operation: "Manual jog, loop hold",
      integration: "Basic I/O, USB",
    },
    "ol-auto": {
      tagline:
        "Programmatic motion without feedback. Best for scripted scans where repeatability is set by process.",
      posClass: "Fine, open-loop",
      travel: "≈13± mm / axis",
      operation: "Scripted jog & raster",
      integration: "Python/LabVIEW APIs",
    },
    "cl-auto": {
      tagline:
        "Programmatic motion with feedback for accuracy. Best for repeatable automated experiments.",
      posClass: "Precision, loop-stabilized",
      travel: "≈13± mm / axis",
      operation: "Scripted raster + closed-loop hold",
      integration: "Advanced API + triggers",
    },
  };

  const rows = useMemo(
    () => [
      { feature: "Orientation", H: "Horizontal scanning", V: "Vertical scanning" },
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
    <div
      className="min-h-screen w-full bg-black text-white scroll-smooth"
      onMouseMove={onMove}
      style={rootStyle}
    >
      {/* BACKGROUND LAYER (fixed) — above black page bg, below all content */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        {/* Global cursor glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(700px at var(--mx) var(--my), rgba(19, 194, 179, 0.14), transparent 60%)",
          }}
        />
        {/* Static top glow */}
        <div
          className="absolute inset-x-0 top-0 h-[70vh]"
          style={{
            background:
              "radial-gradient(60rem 30rem at 50% -10%, rgba(19, 194, 179, 0.18), transparent 60%)",
          }}
        />
      </div>

      {/* CONTENT WRAPPER */}
<div className="relative z-10 pt-16 pb-14 md:pb-0">
        <header
  className={`fixed inset-x-0 top-0 z-50 transition-all ${
    solidNav ? "backdrop-blur bg-black/70 border-b border-white/10" : "bg-transparent"
  }`}
>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center">
    {/* LEFT: title cluster can shrink */}
    <div className="flex-1 min-w-0 flex items-center gap-2 sm:gap-3">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/80 hover:text-white shrink-0"
      >
        <ArrowLeft size={16} className="sm:hidden" />
        <ArrowLeft size={18} className="hidden sm:block" />
        <span>Back</span>
      </Link>
      <div className="h-4 sm:h-5 w-px bg-white/20 shrink-0" />
      <div className="font-semibold tracking-widest text-white text-xs sm:text-sm truncate">
        FLAGSHIP
      </div>
      <div className="text-white/40 text-xs sm:text-sm hidden xs:block">
        {/* hide this word on the very smallest screens */}
        INSTRUMENT
      </div>
    </div>

    {/* RIGHT: CTA never grows beyond content */}
    <div className="shrink-0">
      <Link
        to="/contact"
        className="rounded-full text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 font-medium"
        style={{ backgroundColor: ACCENT, color: "#000" }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
      >
        Contact
      </Link>
    </div>
  </div>
</header>



{/* In-progress bar */}
<div className="fixed left-0 right-0 bottom-0 z-40 bg-amber-50/95 backdrop-blur border-t border-amber-200">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2 flex items-center justify-between gap-3">
    <div className="flex items-center gap-2 text-xs sm:text-sm text-amber-900">
      <span aria-hidden>🚧</span>
      <span className="leading-tight">
        This site is a live work-in-progress.
        <span className="ml-2 font-medium">Last update: 9/18/2024</span>
      </span>
    </div>
  </div>
  {/* iOS safe-area pad */}
  <div style={{ paddingBottom: "env(safe-area-inset-bottom)" }} />
</div>
        {/* Hero with Axivion-teal glow + hero-local cursor glow */}
        <section
          ref={heroRef}
          onMouseMove={onHeroMove}
          className="relative h-[92vh] w-full"  // <-- no overflow-hidden (lets bg bleed)
        >
          {/* Hero background teal gradient */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#062a2e] via-[#052024] to-black" />
            <div className="absolute inset-0 [background-image:radial-gradient(60rem_30rem_at_50%_120%,rgba(19,194,179,0.18),transparent_60%),linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.55))]" />
          </div>

          {/* Hero-local cursor halo (above hero bg, below content) */}
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "radial-gradient(700px at var(--hx) var(--hy), rgba(19, 194, 179, 0.18), transparent 60%)",
            }}
          />

          Bottom bleed to avoid any seam between sections
          <div
            className="pointer-events-none absolute -bottom-10 left-0 right-0 h-10 z-[11]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
            }}
            aria-hidden
          />

          {/* Content */}
          <div className="absolute inset-0 grid place-items-center z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center px-6"
            >
              <div
                className="mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs uppercase tracking-widest text-white/90 border"
                style={{ borderColor: "rgba(19,194,179,0.45)" }}
              >
                <Microscope size={14} /> Instrumentation Preview
              </div>
              <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
                <span className="text-white">Periscope Relay Imaging</span>
                <span className="block" style={{ color: ACCENT }}>
                  Scanning Microscope
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-balance text-white/80">
                High-level preview of an advanced optical instrument. Detailed specifications are
                shared directly upon request.
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
<div className="mt-8 flex items-center justify-center gap-3">
  <button
    onClick={() => scrollToIdWithOffset("models")}
    className="rounded-full px-6 py-3 text-sm font-medium"
    style={{ backgroundColor: ACCENT, color: "#000" }}
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
  >
    Explore
  </button>
</div>


              </div>
            </motion.div>
          </div>

          {/* KPI badges */}
          <div className="absolute bottom-6 inset-x-0 z-20">
            <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-2 px-6">
              {kpis.map((k) => (
                <div
                  key={k.label}
                  className="rounded-2xl backdrop-blur px-4 py-3 text-center border"
                  style={{
                    background: "rgba(19,194,179,0.06)",
                    borderColor: "rgba(19,194,179,0.18)",
                  }}
                >
                  <div className="text-xl font-semibold">{k.value}</div>
                  <div className="text-xs text-white/70">{k.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
{/* Sticky chips */}
<section className="sticky top-16 z-40 border-y border-white/10 bg-black/80 backdrop-blur">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2">
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white w-full">
      <span className="inline-flex items-center gap-1.5">
        <Move3DIcon size={16} style={{ color: ACCENT }} />
        <span>Full 3-axis motion</span>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Ruler size={16} style={{ color: ACCENT }} />
        <span>13± mm Range</span>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Gauge size={16} style={{ color: ACCENT }} />
        <span>~50 nm Stepping</span>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Zap size={16} style={{ color: ACCENT }} />
        <span>Piezo Actuation</span>
      </span>

      {/* RIGHT CTA(s) */}
      <span className="ml-auto flex items-center gap-2">
        {/* Mobile: icon-only */}
        <a
          href={SPEC_PDF}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="sm:hidden inline-flex items-center justify-center rounded-full px-2.5 py-1.5"
          style={{ backgroundColor: ACCENT, color: "#000" }}
          aria-label="Download spec sheet"
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
        >
          <Download size={16} />
        </a>

        {/* ≥sm: full pill */}
        <a
          href={SPEC_PDF}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
          style={{ backgroundColor: ACCENT, color: "#000" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
        >
          <Download size={16} /> Download Spec Sheet
        </a>
      </span>
    </div>
  </div>
</section>
{/* Bottom bleed ... */}
<div
  className="pointer-events-none absolute -bottom-10 left-0 right-0 h-10 z-[11]"
  style={{ background: "linear-gradient(...)" }}
  aria-hidden
/>


        {/* Design */}
        <section id="design" className="relative w-full">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
                  Designed for stable, precise motion
                </h2>
                <p className="mt-5 text-white/80 max-w-xl">
                  A configurable platform focused on repeatable positioning and clean integration
                  with standard lab workflows.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
                  {[
                    { h: "Modular", p: "Components and interfaces adapt to varied environments." },
                    { h: "Retrofit-friendly", p: "Drop-in mounting and common accessory support." },
                    { h: "Stable", p: "Predictable motion and consistent alignment." },
                  ].map((c) => (
                    <div key={c.h} className="rounded-2xl p-5 border border-white/15 bg-black/50">
                      <div className="text-lg font-semibold text-white">{c.h}</div>
                      <div className="text-sm text-white/70">{c.p}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                {/* Main image */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 bg-black/50">
                  {galleryImages.length > 0 ? (
                    <>
                      <img
                        src={galleryImages[imgIndex]}
                        alt={`PRISM preview ${imgIndex + 1}`}
                        className="absolute inset-0 h-full w-full object-cover"
                        draggable={false}
                      />
                      <button
                        onClick={prevImg}
                        aria-label="Previous image"
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full px-3 py-2 text-sm backdrop-blur border border-white/15 bg-black/60"
                      >
                        ‹
                      </button>
                      <button
                        onClick={nextImg}
                        aria-label="Next image"
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full px-3 py-2 text-sm backdrop-blur border border-white/15 bg-black/60"
                      >
                        ›
                      </button>
                      <div className="absolute bottom-3 right-3 text-xs text-white/80 rounded-full px-2 py-1 border border-white/15 bg-black/60">
                        {imgIndex + 1}/{galleryImages.length}
                      </div>
                    </>
                  ) : (
                    <div className="absolute inset-0 grid place-items-center text-white/60">
                      <Microscope size={120} />
                    </div>
                  )}
                </div>

                {/* Thumbnails */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[0, 1, 2].map((slot) => {
                    const thumbIdx = galleryImages.length
                      ? (imgIndex + slot) % galleryImages.length
                      : null;
                    return (
                      <button
                        key={slot}
                        onClick={() => thumbIdx !== null && setImgIndex(thumbIdx)}
                        className={`h-24 rounded-2xl overflow-hidden border bg-black/50 ${
                          thumbIdx === imgIndex
                            ? "border-white/60"
                            : "border-white/15 hover:border-white/40"
                        }`}
                        aria-label={`Show image ${thumbIdx !== null ? thumbIdx + 1 : ""}`}
                      >
                        {thumbIdx !== null ? (
                          <img
                            src={galleryImages[thumbIdx]}
                            alt={`Thumbnail ${thumbIdx + 1}`}
                            className="h-full w-full object-cover"
                            draggable={false}
                          />
                        ) : (
                          <div className="h-full w-full" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sticky chips
        <section className="sticky top-16 z-40 border-y border-white/10 bg-black">
          <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-6 text-sm text-white">
              <div className="flex items-center gap-2">
                <Move3DIcon size={16} style={{ color: ACCENT }} /> Full 3-axis motion
                <Ruler size={16} style={{ color: ACCENT }} /> 13± mm Range
                <Gauge size={16} style={{ color: ACCENT }} /> ~50 nm Stepping
                <Zap size={16} style={{ color: ACCENT }} /> Piezo Actuation
              </div>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
              style={{ backgroundColor: ACCENT, color: "#000" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
            >
              <Download size={16} /> Prototyping Station Lab Tour
            </a>
          </div>
        </section> */}

        {/* System Overview */}
        <section className="relative w-full">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-sm uppercase tracking-widest text-white/80">
                  System Overview
                </div>
                <h3 className="mt-2 text-4xl font-semibold tracking-tight text-white">
                  Coordinated motion with a stable optical path
                </h3>
                <p className="mt-4 text-white/80 max-w-xl">
                  High-level description of the system’s motion strategy and alignment goals.
                  Specific mechanisms are intentionally not detailed on this page.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                  {["Coordinated axes", "Consistent reference", "Drop-in adapters", "Predictable behavior"].map(
                    (t) => (
                      <div
                        key={t}
                        className="rounded-2xl p-5 border border-white/15 bg-black/50"
                      >
                        <div className="text-sm text-white/70">Feature</div>
                        <div className="text-lg font-semibold text-white">{t}</div>
                      </div>
                    )
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 bg-black/50">
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="w-64 h-64 rounded-full border border-white/20 relative">
                      <div className="absolute inset-6 rounded-full border border-white/30" />
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-1/2 w-px bg-white/30" />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-px bg-white/30" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

       {/* Specs */}
<section id="specs" className="relative w-full">
  <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
        Technical Specifications
      </h3>
      <div className="flex flex-wrap items-center gap-2">
        {specTabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveSpecTab(t.id)}
            className="inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm transition border"
            style={{
              backgroundColor: activeSpecTab === t.id ? ACCENT : "transparent",
              color: activeSpecTab === t.id ? "#000" : "rgba(255,255,255,0.9)",
              borderColor: "rgba(255,255,255,0.2)",
            }}
          >
            <t.icon size={16} /> {t.label}
          </button>
        ))}
      </div>
    </div>

    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {specData[activeSpecTab].map((s) => (
        <div
          key={s.label}
          className="rounded-2xl border border-white/15 p-6 bg-black/50"
        >
          <div className="text-sm text-white/80">{s.label}</div>
          <div className="mt-1 text-lg font-semibold text-white">{s.value}</div>
        </div>
      ))}
    </div>




            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {specData[activeSpecTab].map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/15 p-6 bg-black/50">
                  <div className="text-sm text-white/80">{s.label}</div>
                  <div className="mt-1 text-lg font-semibold text-white">{s.value}</div>
                </div>
              ))}
            </div>

            {/* Neutral tiles */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { v: "3-axis", l: "Coordinated motion" },
                { v: "≈13± mm", l: "Range per axis" },
                { v: "< 50 nm", l: "Typical stepping" },
              ].map((t) => (
                <div
                  key={t.v}
                  className="rounded-2xl border border-white/15 p-6 text-center bg-black/50"
                >
                  <div className="text-2xl font-semibold text-white">{t.v}</div>
                  <div className="text-sm text-white/70">{t.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MODELS (anchor target) */}
        <section id="models" className="mx-auto max-w-7xl px-6 pb-24 lg:pb-28 scroll-mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-white"
          >
            Choose your PRISM
          </motion.h2>
          <p className="mt-3 text-white/80 max-w-2xl">
            Two scanning orientations with three control options. Get full specifications from
            engineering on request.
          </p>

          {/* Control tier picker */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {["cl-manual", "ol-auto", "cl-auto"].map((id) => (
              <button
                key={id}
                onClick={() => setTier(id)}
                className="rounded-full px-4 py-2 text-sm transition border"
                style={{
                  backgroundColor: tier === id ? ACCENT : "transparent",
                  color: tier === id ? "#000" : "rgba(255,255,255,0.9)",
                  borderColor: "rgba(255,255,255,0.25)",
                }}
              >
                {id === "cl-manual"
                  ? "Closed-Loop Manual"
                  : id === "ol-auto"
                  ? "Open-Loop Auto"
                  : "Closed-Loop Auto"}
              </button>
            ))}
          </div>
          <div className="mt-2 text-sm text-white/70">{tierNotes[tier].tagline}</div>

          {/* Two model cards */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Horizontal */}
            <div className="rounded-3xl p-6 border border-white/15 bg-black/50">
              <div className="text-sm uppercase tracking-widest text-white/80">Model</div>
              <h3 className="mt-1 text-2xl font-semibold text-white">{models.horizontal.name}</h3>
              <div className="mt-3 h-44 rounded-2xl border border-white/15 bg-black/50 grid place-items-center text-white/60">
                Image Placeholder
              </div>
              <p className="mt-3 text-white/80">{models.horizontal.blurb}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/85">
                {models.horizontal.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span
                      className="mt-1 size-1.5 rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="rounded-full px-5 py-2.5 text-sm font-medium"
                  style={{ backgroundColor: ACCENT, color: "#000" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
                >
                  Request Details
                </Link>
              </div>
            </div>

            {/* Vertical */}
            <div className="rounded-3xl p-6 border border-white/15 bg-black/50">
              <div className="text-sm uppercase tracking-widest text-white/80">Model</div>
              <h3 className="mt-1 text-2xl font-semibold text-white">{models.vertical.name}</h3>
              <div className="mt-3 h-44 rounded-2xl border border-white/15 bg-black/50 grid place-items-center text-white/60">
                Image Placeholder
              </div>
              <p className="mt-3 text-white/80">{models.vertical.blurb}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/85">
                {models.vertical.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span
                      className="mt-1 size-1.5 rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="rounded-full px-5 py-2.5 text-sm font-medium"
                  style={{ backgroundColor: ACCENT, color: "#000" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
                >
                  Request Details
                </Link>
              </div>
            </div>
          </div>

          {/* Comparison table */}
          <div className="mt-10 rounded-3xl overflow-hidden border border-white/15">
            <div className="grid grid-cols-3 text-sm">
              <div className="px-4 py-3 bg-black/60 text-white/80">Key Feature</div>
              <div className="px-4 py-3 bg-black/60 text-white/80">Horizontal PRISM</div>
              <div className="px-4 py-3 bg-black/60 text-white/80">Vertical PRISM</div>

              {rows.map((row) => (
                <React.Fragment key={row.feature}>
                  <div className="px-4 py-3 border-t border-white/15 text-white/75">
                    {row.feature}
                  </div>
                  <div className="px-4 py-3 border-t border-white/15">{row.H}</div>
                  <div className="px-4 py-3 border-t border-white/15">{row.V}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative w-full">
          <div className="mx-auto max-w-7xl px-6 pb-24 lg:pb-32">
            <div className="rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 border border-white/15 bg-black/50">
              <div className="flex-1">
                <div className="text-sm uppercase tracking-widest text-white/80">Status</div>
                <div className="mt-2 text-3xl font-semibold text-white">
                  Active development • Details on request
                </div>
                <p className="mt-3 text-white/80 max-w-xl">
                  Request a tour of the prototyping station and see current setups. Configuration
                  options available for varied environments.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  to="/contact"
                  className="rounded-full px-6 py-3 text-sm font-medium"
                  style={{ backgroundColor: ACCENT, color: "#000" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
                >
                  Prototyping Station Lab Tour
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/15 bg-black">
          <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
            <div>PRISM</div>
            <div className="flex items-center gap-3">
              <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT }} />
              <span>Drafting Provisional Patent</span>
            </div>
            <div>© {new Date().getFullYear()} Axivion Instruments</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
