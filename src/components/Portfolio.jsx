// // export default Portfolio;
// // --- imports ---
// import React, { useEffect, useState, useMemo } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import WebpImg from "./WebpImg";

// import mockData from "../data/mock";
// import { Check } from "lucide-react";
// import {
//   Award, Shield, Users, BarChart3, Target, Zap, Activity, Settings,
//   ArrowRight, Cpu, MicroscopeIcon, GraduationCapIcon
// } from "lucide-react";

// // --- helpers ---
// const MotionWebpImg = motion(WebpImg);
// const PUBLIC = process.env.PUBLIC_URL;
// const srcFor = (base) => ({ webp: `${PUBLIC}/${base}.webp`, png: `${PUBLIC}/${base}.png` });

// // --- slide lists (put files in /public with these names) ---
// const topSlides = [
//   { base: "image1topcarosel", title: "Hero 1", description: "" },
//   { base: "image2topcarosel", title: "Hero 2", description: "" },
//   { base: "image3topcarosel", title: "Hero 3", description: "" },
//   { base: "image4topcarosel", title: "Hero 4", description: "" },
//   { base: "image5topcarosel", title: "Hero 5", description: "" },
// ];

// const engProjectSlides = [
//   { base: "image1Engprojectcarosel", title: "Project Image 1", description: "" },
//   { base: "image2Engprojectcarosel", title: "Project Image 2", description: "" },
//   { base: "image3Engprojectcarosel", title: "Project Image 3", description: "" },
// ];

// export default function PortfolioWhite() {
//   const navigate = useNavigate();

//   // tabs + carousels
//   const [activeTab, setActiveTab] = useState("performance");
//   const [currentHeroImage, setCurrentHeroImage] = useState(0);
//   const [currentEquipmentImage, setCurrentEquipmentImage] = useState(0);
//   const [currentProjectImage, setCurrentProjectImage] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);

//   // logos bar (png/webp handled elsewhere)
//   const companiesBarPng  = `${PUBLIC}/CompaniesBar.png`;
//   const companiesBarWebp = `${PUBLIC}/CompaniesBar.webp`;

//   // use the placeholder slide arrays
//   const heroImages = useMemo(() => topSlides, []);
//   const projectCarouselImages = useMemo(() => engProjectSlides, []);

//   // equipment carousel (unchanged shape)
//   const shrekUrl = `${PUBLIC}/AxivionPrismBanner.png`;
//   const equipmentImages = useMemo(
//     () => [
//       { url: shrekUrl, title: "SEM Stage", category: "Optical Microscopes & Imaging" },
//       { url: shrekUrl, title: "SEM Stage", category: "Optical Microscopes & Imaging" },
//       { url: shrekUrl, title: "TGA",       category: "Laser Alignment & Fiber Coupling" },
//       { url: shrekUrl, title: "UTM",       category: "Manual & CNC Machining" },
//       { url: shrekUrl, title: "UTM",       category: "Manual & CNC Machining" },
//     ],
//     [shrekUrl]
//   );

//   const equipmentSkills = [
//     {
//       title: "Optical Microscopes & Imaging",
//       subtitle: "Brightfield • epi • relay imaging",
//       points: ["Objective changes & parfocal check", "Tube lens & relay alignment", "Camera calibration / FOV & pixel scale"],
//     },
//     {
//       title: "Laser Alignment & Fiber Coupling",
//       subtitle: "Coherent & Incoherent sources",
//       points: ["Free-space alignment on bench", "Beam splitters / mirrors / irises", "Active fiber coupling to sources"],
//     },
//     { title: "Oscilloscopes & Generators", subtitle: "signal bring-up & test", points: ["Signal chain sanity tests", "Triggering & timing checks"] },
//     {
//       title: "Manual & CNC Machining",
//       subtitle: "fixtures • adapters • jigs",
//       points: ["Simple turning/milling for jigs", "Tolerancing for alignment parts", "Vendor-ready drawings when needed"],
//     },
//   ];

//   // autoplay
//   useEffect(() => {
//     if (!isPlaying) return;
//     const id = setInterval(() => {
//       setCurrentHeroImage((p) => (p + 1) % heroImages.length);
//       setCurrentEquipmentImage((p) => (p + 1) % equipmentImages.length);
//       setCurrentProjectImage((p) => (p + 1) % projectCarouselImages.length);
//     }, 4500);

    
//     return () => clearInterval(id);
//   }, [isPlaying, heroImages.length, equipmentImages.length, projectCarouselImages.length]);

//   // …then your `return (` continues below

//     <div className="min-h-screen w-full bg-white text-black">
//       <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur border-b border-black/10">
//         <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="font-semibold tracking-widest">DEJAN</div>
//             <div className="text-black/50">LATKOVIC</div>
//           </div>
//           <nav
//   className="flex items-center gap-3 text-sm overflow-x-auto no-scrollbar"
//   aria-label="Primary"
  

// >
//   <a href="https://www.linkedin.com" className="whitespace-nowrap text-black/70 hover:text-black">
//     LinkedIn
//   </a>
//   <Link
//     to="/prism"
//     className="whitespace-nowrap rounded-full bg-black text-white px-4 py-2 font-medium hover:bg-black/90"
//   >
//     PRISM
//   </Link>
// </nav>

//         </div>
//       </header>
// {/* 🚧 In-progress announcement bar */}
// <div className="sticky top-16 z-40 bg-amber-50/95 backdrop-blur border-y border-amber-200">
//   <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between gap-3">
//     <div className="flex items-center gap-2 text-sm text-amber-900">
//       <span aria-hidden>🚧</span>
//       <span>
//         This site is a live work-in-progress.
//         <span className="ml-2 font-medium">
//           Last update: 9/16/2024
//         </span>
//       </span>
//     </div>
//   </div>
// </div>
// <section className="relative h-[88vh] overflow-hidden pt-14">
//   {/* background image with 0.7s cross-fade */}
// <div className="absolute inset-0 z-10">
//   <AnimatePresence mode="wait">
//     <motion.div
//       key={currentHeroImage}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 0.6 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.7 }}
//       className="h-full w-full"
//     >
//       <WebpImg
//         webp={toSources(heroImages[currentHeroImage].base).webp}
//         fallback={toSources(heroImages[currentHeroImage].base).png}
//         alt={heroImages[currentHeroImage].title}
//         className="h-full w-full object-cover"
//       />
//     </motion.div>
//   </AnimatePresence>

//   {/* white gradient overlay */}
//   <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/60 via-white/50 to-white" />
// </div>

//   {/* foreground content */}
//   <div className="relative z-10 h-full flex flex-col justify-between">
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="px-6 pt-20 pb-10"
//     >
//       <div className="mx-auto max-w-7xl">
//         <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1 text-xs uppercase tracking-widest text-black/70">
//           <MicroscopeIcon size={14} /> Nano Photonics • Nano-Fluidics Engineering
//         </div>
//         <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-balance">
//           Nanotechnology
//           <span className="block text-black/60">Engineer</span>
//         </h1>
//         <p className="mt-5 max-w-2xl text-black/70">
//           Nanotechnology engineer focused on high-accuracy motion and optical systems. Axivion Instruments is developing PRISM, our flagship research-grade microscope platform.
//         </p>
//         <div className="mt-8 flex items-center gap-3">
//   <Link to="/prism" className="rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-black/90 inline-flex items-center gap-2">
//     Axivion Instruments <ArrowRight size={18} />
//   </Link>
//   <Link to="/portfolio/contact" className="rounded-full border border-black/20 px-6 py-3 text-sm font-medium hover:border-black/40">
//     Contact
//   </Link>
// </div>

//       </div>
//     </motion.div>
//   </div>
// </section>

// {/* HIGHLIGHTS (glass cards that don’t clip text) */}
// <section aria-labelledby="highlights" className="relative -mt-8 z-20">
//   <div className="mx-auto max-w-7xl px-6">
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//       {[
//         { icon: Users,   title: "Institute for Quantum Computing (UWaterloo)", label: "Research Experience" },
//         { icon: Target,  title: "PRISM (Axivion Instruments)",  label: "Core Project" },
//         { icon: Settings,title: "Optics • Mechanical • Bio • Software", label: "Technical Fields" },
//         { icon: Award,   title: "Photonics North Ottawa 2025",         label: "Presented Start-up" },
//       ].map((h) => (
//         <div
//           key={h.title}
//           title={h.title}
//           className="group flex items-center gap-3 rounded-xl border border-black/10
//                      bg-white/60 backdrop-blur-md px-5 py-3 shadow-sm hover:shadow-md transition"
//         >
//           <div className="h-9 w-9 rounded-full border border-black/10 grid place-items-center bg-white/80">
//             {React.createElement(h.icon, { size: 18 })}
//           </div>
//           <div className="min-w-0">
//             <div className="text-sm font-medium leading-tight break-words whitespace-normal">
//               {h.title}
//             </div>
//             <div className="text-[11px] text-black/60">{h.label}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//       <section id="specifications" className="relative bg-white">
//         <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
//           <div className="flex flex-wrap items-center justify-between gap-4">
//             <h2 className="text-4xl font-semibold tracking-tight">Engineering Specifications</h2>
//             <div className="mt-3 flex flex-wrap items-center gap-2">
//               {(["performance","equipment","software"]).map((t) => (
//                 <button key={t} onClick={() => setActiveTab(t)} className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${activeTab===t?"bg-black text-white":"border border-black/20 text-black/80 hover:text-black"}`}>
//                   {t==="performance"&&<BarChart3 size={16}/>} {t==="equipment"&&<Settings size={16}/>} {t==="software"&&<Cpu size={16}/>} {t==="systems"&&<Target size={16}/>} {t.charAt(0).toUpperCase()+t.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {activeTab === "equipment" && (
//             <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//               <div className="relative rounded-3xl overflow-hidden border border-black/10 bg-white">
//                 <div className="relative w-full h-[520px]">
//                   <AnimatePresence mode="wait">
//   {(() => {
//     const h = heroImages[currentHeroImage];
//     const s = srcFor(h.base);
//     return (
//       <MotionWebpImg
//         key={currentHeroImage}
//         webp={s.webp}
//         fallback={s.png}
//         alt={h.title}
//         className="h-full w-full object-cover"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.6 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.7 }}
//       />
//     );
//   })()}
// </AnimatePresence>

//                 </div>
//                 <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-white via-white/70 to-transparent">
//                   <div className="text-lg font-semibold">{equipmentImages[currentEquipmentImage].title}</div>
//                   <div className="text-sm text-black/60">{equipmentImages[currentEquipmentImage].category}</div>
//                 </div>
//               </div>
//               <div className="rounded-3xl border border-black/10 p-6">
//   <div className="flex items-center justify-between">
//     <h3 className="text-xl font-semibold">Analysis & Characterization</h3>
//     <span className="rounded-full border border-black/10 px-3 py-1 text-xs bg-white/80">
//       Field-tested
//     </span>
//   </div>

//   <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
//     {equipmentSkills.map((item, i) => (
//       <div key={i} className="rounded-2xl border border-black/10 p-4 bg-white">
//         <div className="flex items-start gap-3">
//           <div className="h-9 w-9 rounded-full border border-black/10 grid place-items-center">
//             <Settings size={18} />
//           </div>
//           <div className="min-w-0">
//             <div className="font-medium leading-tight">{item.title}</div>
//             <div className="text-xs text-black/60">{item.subtitle}</div>
//           </div>
//         </div>

//         <ul className="mt-3 space-y-1.5 text-sm">
//           {item.points.map((p, j) => (
//             <li key={j} className="flex items-start gap-2">
//               <span className="mt-1 inline-block size-1.5 rounded-full bg-black/70" />
//               <span className="text-black/80">{p}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     ))}
//   </div>
// </div>

//             </div>
//           )}

//           {activeTab === "performance" && (
//   <section className="mt-10">
//     <div className="rounded-3xl border border-black/10 p-6">
//       <div className="flex items-center justify-between flex-wrap gap-3">
//         <div>
//           <h3 className="text-xl font-semibold">Recent, Attributed Impact</h3>
//           <p className="text-sm text-black/60">
//             Highlights with context (project/site) so the numbers actually mean something.
//           </p>
//         </div>
//         {/* optional filter or export button could go here */}
//       </div>

//       {/* data source */}
//       {/*
//         Edit these objects anytime ; the UI renders them automatically.
//         'metric' is the bold number, 'label' is what it is, 'context' shows where it came from.
//       */}
//       <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {[
//           {
//             metric: "PRISM v5",
//             label: "Instrumentation Deployment",
//             context: "Institute for Quantum Computing (UWaterloo)",
//           },
//           {
//             metric: "3 Assisted Papers",
//             label: "Figure/Render support",
//             context: "Blender technical visuals for manuscripts (under review)",
//           },
//           {
//             metric: "5+ Fixtures",
//             label: "Custom tooling fabricated",
//             context: "Hand-machined/CNC-ready jigs & alignment tools",
//           },
//           {
//             metric: "20%",
//             label: "Capacity increase",
//             context: "Production routing & customer-intake redesign",
//           },
//           {
//             metric: "69s/unit",
//             label: "Cycle-time saved",
//             context: "Excel/VBA automation of shipping paperwork",
//           },
//           {
//             metric: "800+",
//             label: "Tasks automated",
//             context: "3-day surge window, shipping cards",
//           }
//         ].map((item, i) => (
//           <div
//             key={i}
//             className="rounded-2xl border border-black/10 p-5 bg-white hover:shadow-sm transition"
//           >
//             <div className="text-2xl font-semibold">{item.metric}</div>
//             <div className="mt-1 text-sm font-medium">{item.label}</div>
//             <div className="mt-1 text-xs text-black/60">{item.context}</div>
//           </div>
//         ))}
//       </div>

//       {/* small note for confidentiality */}
//       <div className="mt-4 text-[11px] text-black/50">
//         Some metrics are summarized to respect confidentiality agreements (NDA).
//       </div>
//     </div>
//   </section>
// )}


//           {activeTab === "Software" && (
//   <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
//     {/* Engineering Software */}
//     <div className="rounded-3xl border border-black/10 p-6 bg-white">
//       <div className="flex items-center gap-2">
//         <Cpu size={18} />
//         <h3 className="text-xl font-semibold">Engineering Software</h3>
//       </div>

//       <ul className="mt-5 space-y-2">
//         {mockData.skills.frameworks.map((name) => (
//           <li key={name} className="flex items-center gap-3">
//             <Check size={16} className="text-black/70" />
//             <span className="text-black/90">{name}</span>
//           </li>
//         ))}
//       </ul>
//     </div>

//     {/* Programming Languages */}
//     <div className="rounded-3xl border border-black/10 p-6 bg-white">
//       <div className="flex items-center gap-2">
//         <Activity size={18} />
//         <h3 className="text-xl font-semibold">Programming Languages</h3>
//       </div>

//       <ul className="mt-5 space-y-2">
//         {mockData.skills.languages.map((name) => (
//           <li key={name} className="flex items-center gap-3">
//             <Check size={16} className="text-black/70" />
//             <span className="text-black/90">{name}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// )}


          
//         </div>
//       </section>

//   <section id="performance" className="relative bg-white">
//   <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
//     <h2 className="text-4xl font-semibold tracking-tight">Professional Performance</h2>
//     <p className="text-black/60 mt-2">Quantified impact and technical achievements across roles</p>

//     <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
//       {mockData.experience.map((exp, i) => (
//         <motion.div
//           key={i}
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: i * 0.06 }}
//           className="rounded-3xl border border-black/10 overflow-hidden"
//         >
//           <div className="flex flex-col md:flex-row h-full">
//             {/* Vertical image column */}
//             <div className="w-full md:w-1/3 md:min-h-[220px] lg:min-h-[260px]">
//               <img
//                 src={exp.image ?? (process.env.PUBLIC_URL + "/image.jpg")}
//                 alt={exp.company}
//                 className="h-full w-full object-cover"
//                 loading="lazy"
//               />
//             </div>

//             {/* Content column */}
//             <div className="flex-1 p-6">
//               {/* Top row: category + period badge */}
//               <div className="flex items-center justify-between">
//                 <div className="text-sm text-black/60">{exp.category}</div>
// <span
//   className="
//     inline-flex items-center justify-center
//     rounded-full border border-black/10 bg-white/95
//     text-[12px] font-medium tracking-wide
//     px-4 py-1.5
//     min-w-[11rem] whitespace-nowrap
//     shadow-sm
//   "
// >
//   {exp.period}
// </span>
//               </div>
// {/* Titles */}
// <div className="mt-1 text-xl font-semibold">{exp.role}</div>
// <div className="text-sm">{exp.company}</div>

// {exp.engagement && (
//   <span className="mt-1 inline-block text-[11px] px-2 py-1 rounded-full border border-black/10 bg-black/5">
//     {exp.engagement}
//   </span>
// )}

// {exp.affiliationNote && (
//   <div className="mt-1 text-xs text-black/60">
//     {exp.affiliationNote}
//   </div>
// )}

//               {/* Metrics ; show ALL */}
//               {Array.isArray(exp.keyMetrics) && exp.keyMetrics.length > 0 && (
//                 <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2">
//                   {exp.keyMetrics.map((m, j) => (
//                     <div key={j} className="rounded-xl border border-black/10 p-3">
//                       <div className="text-lg font-semibold leading-none">{m.value}</div>
//                       <div className="text-[11px] text-black/60 mt-1">{m.description}</div>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {/* Achievements ; show ALL */}
//               {Array.isArray(exp.achievements) && exp.achievements.length > 0 && (
//                 <div className="mt-4 space-y-2">
//                   {exp.achievements.map((a, k) => (
//                     <div key={k} className="flex items-start gap-2 text-sm">
//                       <span
//                         aria-hidden
//                         className="mt-1 inline-block h-2 w-2 rounded-full bg-black shrink-0"
//                       />
//                       <span>{a}</span>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   </div>
// </section>


//       <section id="projects" className="relative bg-gradient-to-b from-white to-black/[0.02]">
//         <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
//           <h2 className="text-4xl font-semibold tracking-tight">Engineering Projects</h2>
//           <p className="text-black/60 mt-2">Breakthroughs with visual documentation</p>

//           {/* FULL-WIDTH CAROUSEL */}
//           <div className="mt-10 relative rounded-3xl overflow-hidden border border-black/10 bg-white">
// <div className="relative w-full h-[560px] md:h-[640px]">
//   <AnimatePresence mode="wait">
//   {(() => {
//     const p = projectCarouselImages[currentProjectImage];
//     const s = srcFor(p.base);
//     return (
//       <MotionWebpImg
//         key={currentProjectImage}
//         webp={s.webp}
//         fallback={s.png}
//         alt={p.title}
//         className="absolute inset-0 w-full h-full object-cover object-center"
//         initial={{ opacity: 0.3 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.8 }}
//       />
//     );
//   })()}
// </AnimatePresence>

// </div>


//   {/* caption overlay */}
// <div className="text-white text-lg font-semibold">
//   {projectCarouselImages[currentProjectImage].title}
// </div>
// <div className="text-white/80 text-sm">
//   {projectCarouselImages[currentProjectImage].description}
// </div>


// {/* BARS / CARDS BELOW */}
// <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
//   {mockData.projects.map((project, index) => {
//     const isFeatured = !!project.featured;
//     const techs = Array.isArray(project.technologies) ? project.technologies : [];

//     return (
//       <motion.button
//         key={project.id ?? index}
//         type="button"
//         initial={{ opacity: 0, y: 12 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.45, delay: index * 0.06 }}
//         onClick={() => {
//           if (project.slug === "prism") {
//             navigate("/prism"); // route to PrismProject.jsx
//           } else if (project.demo) {
//             window.open(project.demo, "_blank", "noopener,noreferrer"); // open demo first
//           } else if (project.github) {
//             window.open(project.github, "_blank", "noopener,noreferrer"); // fallback to GitHub
//           }
//         }}
//         aria-label={`Open project: ${project.title}`}
//         className={`w-full text-left cursor-pointer rounded-3xl border border-black/10 p-6 transition
//                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50
//                     ${isFeatured ? "bg-black text-white hover:shadow-xl" : "bg-white hover:shadow-md"}`}
//       >
//         {isFeatured && (
//           <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-3">
//             <Award size={14} /> Breakthrough
//           </div>
//         )}

//         {/* Category header */}
//         <div className="flex items-center justify-between">
//           <div
//             className="text-sm text-black/60 data-[featured=true]:text-white/70"
//             data-featured={isFeatured}
//           >
//             Category
//           </div>
//           <div className="text-sm font-medium">{project.category}</div>
//         </div>

//         {/* Title + description */}
//         <div className="mt-2 text-xl font-semibold">{project.title}</div>
//         <p className={`mt-2 text-sm ${isFeatured ? "text-white/80" : "text-black/70"}`}>
//           {project.description}
//         </p>

//         {/* Patent status badge (PRISM etc.) */}
//         {project.patentStatus && (
//           <div
//             className={`mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs
//                         ${isFeatured ? "bg-white/10 border border-white/20 text-white" : "bg-black/5 border border-black/10 text-black/80"}`}
//             aria-label="Patent status"
//             title={project.patentStatus}
//           >
//             <Shield size={14} />
//             <span>{project.patentStatus}</span>
//           </div>
//         )}

//         {/* Technical specifications */}
//         <div className="mt-4">
//           <div className="text-sm font-medium text-white/80">Technical Specifications</div>
//           <div className="mt-2 space-y-2">
//             {(project.specifications ?? []).slice(0, 4).map((s, si) => (
//               <div key={si} className="flex items-center gap-2 text-sm">
//                 <div
//                   className={`size-4 rounded-full grid place-items-center
//                               ${isFeatured ? "bg-white text-black" : "bg-black text-white"}`}
//                 >
//                   ✓
//                 </div>
//                 <span>{s}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Technologies chips */}
//         {techs.length > 0 && (
//           <div className="mt-4">
//             <div className="text-sm font-medium text-white/80">Technologies</div>
//             <div className="mt-2 flex flex-wrap gap-2">
//               {techs.slice(0, 5).map((t, ti) => (
//                 <span
//                   key={ti}
//                   className={`rounded-full border px-3 py-1 text-xs
//                               border-white/20 text-white/75`}
//                 >
//                   {t}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}
//       </motion.button>
//     );
//   })}
// </div>

//         </div>
//       </section>


//       <footer className="border-t border-black/10 bg-white">
//   <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//     {/* LEFT: Engineering Portfolio area + logos image */}
//     <div className="space-y-6">
//       {/* Engineering Portfolio header */}
//       <div>
//         <div className="text-sm tracking-widest text-black/60">ENGINEERING PORTFOLIO</div>
//         <div className="mt-1 text-2xl font-semibold">Dejan Latkovic</div>

//         <div className="mt-2 flex flex-wrap gap-3 text-sm text-black/70">
//           <div className="inline-flex items-center gap-2">
//             <GraduationCapIcon size={14} /> University of Waterloo
//           </div>
//           <div className="inline-flex items-center gap-2">
//             <Users size={14} /> Co-operative Education
//           </div>
//           <div className="inline-flex items-center gap-2">
//             <Award size={14} /> Graduation 2027
//           </div>
//         </div>

//         <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-black/20 px-4 py-2 text-sm">
//           <div className="relative size-2 rounded-full bg-emerald-500">
//             <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
//           </div>
//           Available for final 8 month co-op • Seeking Optical & Biomed Engineering roles
//         </div>
//       </div>

//       {/* Logos image directly under the header */}
//       <WebpImg
//   webp={companiesBarWebp}
//   fallback={companiesBarPng}
//   alt="University of Waterloo • IQC • Axivion Instruments"
//   className="h-14 sm:h-16 lg:h-20 w-auto object-contain rounded-xl border border-black/10"
// />

//     </div>

//     {/* RIGHT: Core Competencies */}
//     <div>
//       <div className="text-sm font-medium">Core Competencies</div>
//       <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
//         {[
//           {
//             n: "Precision Engineering",
//             d: "High-accuracy mechanical & optical design",
//             i: Target,
//           },
//           {
//             n: "Process Optimization",
//             d: "Streamlined workflows & efficiency gains",
//             i: Zap,
//           },
//           {
//             n: "Advanced Instrumentation",
//             d: "Development of custom scientific tools",
//             i: Settings,
//           },
//           {
//             n: "Automation & Control",
//             d: "Python/LabVIEW integration for complex systems",
//             i: Activity,
//           },
//         ].map((c) => (
//           <div
//             key={c.n}
//             className="rounded-2xl border border-black/10 p-4 flex items-center gap-3 bg-white"
//           >
//             <div className="h-9 w-9 rounded-full border border-black/10 grid place-items-center">
//               {React.createElement(c.i, { size: 18 })}
//             </div>
//             <div>
//               <div className="font-medium">{c.n}</div>
//               <div className="text-sm text-black/60">{c.d}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>

//   {/* keep your existing bottom bar unchanged */}
//   <div className="border-t border-black/10">
//     <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-black/60 flex items-center justify-between">
//       <div>© {new Date().getFullYear()} Dejan Latkovic</div>
//       <div className="flex items-center gap-3" />
//     </div>
//   </div>
// </footer>


//     </div>
//   );
// }
// export default Portfolio;
// --- imports ---
import React, { useEffect, useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import WebpImg from "./WebpImg";


import mockData from "../data/mock";
import { Check } from "lucide-react";
import {
  Award, Shield, Users, BarChart3, Target, Zap, Activity, Settings,
  ArrowRight, Cpu, MicroscopeIcon, GraduationCapIcon, Microscope,
  Crosshair, ScanLine, Hammer, Menu, X,
} from "lucide-react";

// --- helpers ---
const MotionWebpImg = motion(WebpImg);
const PUBLIC = process.env.PUBLIC_URL || "";

// Build /public paths for a base filename (without extension)
const srcFor = (base) => ({
  webp: `${PUBLIC}/${base}.webp`,
  png:  `${PUBLIC}/${base}.png`,
});

// --- slide lists (put files in /public with these names) ---
const topSlides = [
  { base: "presenting", title: "", description: "" },
  // { base: "carmod_bg", title: "", description: "" },
  { base: "image2Engproject", title: "", description: "" },
  // { base: "carhorizon", title: "", description: "" },
    { base: "Prism", title: "", description: "" },
  
];
// --- equipment slides (put both .webp and .png in /public) ---
const equipmentSlides = [
  { base: "image1equipment", title: "Imaging 50x Objective (0.01mm Calibration slide)",       category: "Microscopes Imaging" },
  { base: "image2equipment", title: "Imaging 100x Objective (0.01mm Calibration slide)",       category: "Microscope Imaging" },
  { base: "image3equipment", title: "Fiber Coupling",             category: "Laser Alignment | Fiber Coupling" },
  { base: "image4equipment", title: "Manual Mill",       category: "Manufacturing | CNC Prep" },
  { base: "rasterscan", title: "Photon Detector Scanning",       category: "Raster Scanning" },

   { base: "setup2", title: "Optical Station Setup",             category: "Laser Alignment | Fiber Coupling" },
  // { base: "image5equipment", title: "Diamond Mount",       category: "Manual & CNC Machining" },
];
// --- engineering project slides (put both .webp and .png in /public) ---
const engProjectSlides = [  
  { base: "image1Engproject", title: "PRISM", description: "Test bench" },
  { base: "image4Engprojectcarosel", title: "Car Modding", description: "Rear shocks replacement" },
  { base: "metasurface", title: "Scientific Visualization", description: "Metasurface render" },
  { image: "InsidePhoenix2k.jpg", title: "Scientific Visualization", description: "Inside Phoenix render" },
  { image: "OutsidePhoenix2k.jpg", title: "Scientific Visualization", description: "Outside Phoenix render" },
  { base: "image5Engprojectcarosel", title: "Spectrometer", description: "Reviving old spectrometer" },
  { base: "image3Engprojectcarosel", title: "Pygame", description: "Screenshot" },

  

];

export default function PortfolioWhite() {
  const navigate = useNavigate();

  // tabs + carousels
  const [activeTab, setActiveTab] = useState("Applied Skills");
  const ACCENT       = "#C97A3A";
  const ACCENT_SOFT  = "rgba(201, 122, 58, 0.13)";
  const PAGE_BG      = "#080e14";

  const [mx, setMx] = useState(-9999);
  const [my, setMy] = useState(-9999);
  const [solidNav, setSolidNav] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [currentEquipmentImage, setCurrentEquipmentImage] = useState(0);
  const [currentProjectImage, setCurrentProjectImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const onScroll = () => setSolidNav(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("scrollbar-orange");
    return () => document.documentElement.classList.remove("scrollbar-orange");
  }, []);

  // logos bar (png/webp handled via WebpImg)
  const companiesBarPng  = `${PUBLIC}/CompaniesBar.png`;
  const companiesBarWebp = `${PUBLIC}/CompaniesBar.webp`;

  // use the placeholder slide arrays
  const heroImages = useMemo(() => topSlides, []);
  const projectCarouselImages = useMemo(() => engProjectSlides, []);

  const equipmentImages = useMemo(() => equipmentSlides, []);

  const scrollToSection = (id) => {
    setNavOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const pageLinks = [
    { label: "Experience", action: () => scrollToSection("experience") },
    { label: "Credits", action: () => scrollToSection("publications") },
    { label: "Projects", action: () => scrollToSection("projects") },
    { label: "PRISM", to: "/prism" },
    { label: "Axivion Studio - Scientific Visualization", href: "https://axivionstudio.com/" },
    { label: "Contact", to: "/portfolio/contact" },
  ];

  const showPreviousProjectImage = () => {
    setCurrentProjectImage((current) =>
      (current - 1 + projectCarouselImages.length) % projectCarouselImages.length
    );
  };

  const showNextProjectImage = () => {
    setCurrentProjectImage((current) => (current + 1) % projectCarouselImages.length);
  };


 const equipmentSkills = [
  {
    title: "Microscope Imaging",
    subtitle: "Beam and Camera calibration",
    points: [
      "Tube-lens alignment for stable imaging paths",
      "Camera calibration (FOV & pixel size) for true magnification",
      "Objective interchange without re-alignment (by design in PRISM)",
    ],
  },
  {
    title: "Laser Alignment | Fiber Coupling",
    subtitle: "Bench setup • Optical path",
    points: [
      "Free-space alignment with mirrors/irises",
      "Active fiber coupling into photon detector",
      "Built PRISM bench/test station with clean routing and quick-swap modules",
    ],
  },
  {
    title: "Instrument Control",
    subtitle: "LabVIEW • Python • Automated scanning",
    points: [
      "Built LabVIEW raster-scan control with piezo stage and photon detector readout",
      "Python APIs for instrument control, data acquisition, and post-processing",
      "Oscilloscope for signal chain checks, triggering, and timing verification",
    ],
  },
  {
    title: "Manufacturing | CNC Prep",
    subtitle: "Manual mill • Engineering drawings",
    points: [
      "Machined copper diamond cryostat mount (±0.1 mm) and optics-table parts",
      "Design for manufacturability: what can / can’t be CNC’d",
      "Produce proper engineering drawings to CNC-shop standards",
    ],
  },
{
  title: "Cleanroom & Microfabrication",
  subtitle: "Thin films • Photolithography • Device characterization",
  points: [
    "PECVD/PVD deposition, photolithography, dry & wet etching",
    "Film thickness and sheet resistance measurements (profilometer, ellipsometer, 4-point probe)",
    "C–V and I–V analysis of MIS devices",
    "Trained in cleanroom safety and contamination control",
  ],
},
{
  title: "Precision Mechanical Design",
  subtitle: "Fusion 360 • FEA • Tolerance engineering",
  points: [
    "Full system design in Fusion 360 from concept through CNC-ready drawings",
    "FEA for stiffness and modal validation of mechanical assemblies",
    "Tolerance stack-up and design for manufacturability for machined and 3D-printed parts",
    "End-to-end hardware ownership: spec, design, fabrication, integration, and deployment",
  ],
},

];

  // autoplay
  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setCurrentHeroImage((p) => (p + 1) % heroImages.length);
      setCurrentEquipmentImage((p) => (p + 1) % equipmentImages.length);
      setCurrentProjectImage((p) => (p + 1) % projectCarouselImages.length);
    }, 4500);
    return () => clearInterval(id);
  }, [isPlaying, heroImages.length, equipmentImages.length, projectCarouselImages.length]);

  return (
    
    <div
      className="g21 min-h-screen w-full text-white"
      style={{ backgroundColor: PAGE_BG, "--mx": `${mx}px`, "--my": `${my}px` }}
      onMouseMove={(e) => { setMx(e.clientX); setMy(e.clientY); }}
    >
      {/* Global cursor glow */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <div className="absolute inset-0" style={{
          background: `radial-gradient(700px at var(--mx) var(--my), ${ACCENT_SOFT}, transparent 60%)`,
        }} />
      </div>

      {/* All page content sits above the glow layer */}
      <div className="relative z-10">

      {/* Header */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solidNav || navOpen ? "bg-[#080e14]/90 backdrop-blur border-b border-white/10" : "bg-transparent"}`}>
        <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="min-w-0 flex items-center gap-2 sm:gap-3">
            <div className="font-semibold tracking-widest text-white text-sm sm:text-base">DEJAN</div>
            <div className="text-white/50 text-sm sm:text-base">LATKOVIC</div>
          </div>
          <nav className="hidden md:flex items-center gap-3 text-sm overflow-x-auto no-scrollbar" aria-label="Primary">
            <button onClick={() => scrollToSection("experience")} className="whitespace-nowrap text-white/70 hover:text-white transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection("publications")} className="whitespace-nowrap text-white/70 hover:text-white transition-colors">
              Credits
            </button>
            <button onClick={() => scrollToSection("projects")} className="whitespace-nowrap text-white/70 hover:text-white transition-colors">
              Projects
            </button>
            <a href="https://www.linkedin.com/in/dejanlatkovic/" className="whitespace-nowrap text-white/70 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a
              href="https://uwaterloo.ca/institute-for-quantum-computing/contacts/dejan-latkovic-0"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-full px-4 py-2 font-medium text-white"
              style={{ border: "1.5px solid rgba(255,255,255,0.2)", transition: "border-color 0.25s ease, color 0.25s ease" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#A40C34"; e.currentTarget.style.color = "#A40C34"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "white"; }}
            >
              IQC
            </a>
            <Link
              to="/prism"
              className="whitespace-nowrap rounded-full px-4 py-2 font-medium text-white"
              style={{ border: "1.5px solid rgba(255,255,255,0.2)", transition: "border-color 0.25s ease, color 0.25s ease" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#13c2b3"; e.currentTarget.style.color = "#13c2b3"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "white"; }}
            >
              PRISM
            </Link>
            <a
              href="https://axivionstudio.com/"
              className="whitespace-nowrap rounded-full px-4 py-2 font-medium text-white"
              style={{ border: "1.5px solid rgba(255,255,255,0.2)", transition: "border-color 0.25s ease, color 0.25s ease" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#34d399"; e.currentTarget.style.color = "#34d399"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "white"; }}
            >
              Axivion Studio - Scientific Visualization
            </a>
            <Link
              to="/portfolio/contact"
              className="whitespace-nowrap rounded-full px-4 py-2 font-medium text-white"
              style={{
                border: "1.5px solid rgba(255,255,255,0.2)",
                transition: "border-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = ACCENT;
                e.currentTarget.style.color = ACCENT;
                e.currentTarget.style.boxShadow = "inset 0 0 12px rgba(201,122,58,0.35)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Contact
            </Link>
          </nav>
          <button
            type="button"
            onClick={() => setNavOpen((open) => !open)}
            className="md:hidden inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-white"
            aria-expanded={navOpen}
            aria-controls="mobile-page-menu"
          >
            {navOpen ? <X size={18} /> : <Menu size={18} />}
            Pages
          </button>
        </div>
        {navOpen && (
          <div id="mobile-page-menu" className="md:hidden border-t border-white/10 bg-[#080e14]/95 backdrop-blur">
            <div className="mx-auto max-w-7xl px-4 py-3 grid gap-2">
              {pageLinks.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setNavOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85"
                  >
                    {item.label}
                  </a>
                ) : item.to ? (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setNavOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    type="button"
                    onClick={item.action}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-white/85"
                  >
                    {item.label}
                  </button>
                )
              )}
              <a
                href="https://www.linkedin.com/in/dejanlatkovic/"
                onClick={() => setNavOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85"
              >
                LinkedIn
              </a>
              <a
                href="https://uwaterloo.ca/institute-for-quantum-computing/contacts/dejan-latkovic-0"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setNavOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85"
              >
                IQC
              </a>
            </div>
          </div>
        )}
      </header>

      
     {/* TOP HERO */}
<section className="relative h-[88vh] overflow-clip md:overflow-hidden" style={{ backgroundColor: PAGE_BG }}>
  {/* background image with cross-fade */}
  <div className="absolute inset-0 z-0">
    <AnimatePresence mode="wait">
      {(() => {
        const h = heroImages[currentHeroImage];
        const s = srcFor(h.base);
        return (
          <MotionWebpImg
            key={currentHeroImage}
            webp={s.webp}
            fallback={s.png}
            alt={h.title}
            className="h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          />
        );
      })()}
    </AnimatePresence>

    <div className="absolute inset-0 pointer-events-none" style={{
      background: `linear-gradient(to bottom, rgba(8,14,20,0.65) 0%, rgba(8,14,20,0.25) 60%, rgba(8,14,20,0.85) 100%)`
    }} />

    {/* cursor glow */}
    <div className="absolute inset-0 pointer-events-none" style={{
      background: `radial-gradient(700px at 50% 40%, ${ACCENT_SOFT}, transparent 60%)`
    }} />
  </div>

  {/* foreground content */}
  <div className="relative z-10 h-full flex flex-col justify-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="px-4 sm:px-6 pt-16"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-[10px] sm:text-xs uppercase tracking-widest border"
          style={{ borderColor: `rgba(201,122,58,0.4)`, color: ACCENT }}
        >
          <MicroscopeIcon size={14} /> Instruments • Photonics • Precision Engineering
        </div>

        <h1
          className="
            mt-4 font-semibold tracking-tight text-balance leading-[0.95]
            break-words hyphens-auto text-white
            text-[clamp(2.25rem,8vw,4.5rem)] md:text-[clamp(3rem,7vw,5.5rem)]
          "
        >
          Dejan Latkovic
          <span className="block" style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.04em" }}>Engineering Portfolio</span>
        </h1>

        <p className="mt-5 max-w-2xl text-white/70">
          Nanotechnology Engineering student at Waterloo. Founder of Axivion Instruments. Most recently on the Precision Engineering team at Atomic Semi in San Francisco. My main project is PRISM - a precision objective-scanning microscope now in active use at IQC’s NPQO Lab for Diamond NV center research.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
          <Link
            to="/prism"
            className="rounded-full px-6 py-3 text-sm font-medium text-white inline-flex items-center gap-2"
            style={{ border: "1.5px solid rgba(255,255,255,0.2)", transition: "border-color 0.25s ease, color 0.25s ease" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#13c2b3"; e.currentTarget.style.color = "#13c2b3"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "white"; }}
          >
            Axivion Instruments <ArrowRight size={18} />
          </Link>
          <Link
            to="/portfolio/contact"
            className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white hover:border-white/50 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.div>
  </div>
</section>


      {/* Highlights */}
      <section aria-labelledby="highlights" className="relative -mt-8 z-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Users, title: "Institute for Quantum Computing (UWaterloo)", label: "Research Experience" },
              { icon: Target, title: "PRISM (Axivion Instruments)", label: "Deployed at IQC - NPQO Lab" },
              { icon: Cpu, title: "Atomic Semi, San Francisco", label: "Precision Engineering Internship" },
              { icon: Award, title: "Photonics North 2025", label: "Startup Pitch Competition" },
            ].map((h) => (
              <div
                key={h.title}
                title={h.title}
                className="group flex items-center gap-3 rounded-xl border border-white/10
                           bg-white/5 backdrop-blur-md px-5 py-3 hover:bg-white/10 transition"
              >
                <div className="h-9 w-9 rounded-full border border-white/15 grid place-items-center bg-white/5 shrink-0">
                  {React.createElement(h.icon, { size: 18 })}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium leading-tight break-words whitespace-normal text-white">{h.title}</div>
                  <div className="text-[11px] text-white/50">{h.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications (tabs) */}
      <section id="specifications" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-4xl font-semibold tracking-tight text-white">Skills & Impact</h2>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {["Applied Skills", "Performance", "Software"].map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                    activeTab === t
                      ? "text-black"
                      : "border border-white/20 text-white/70 hover:text-white"
                  }`}
                  style={activeTab === t ? { backgroundColor: ACCENT } : {}}
                >
                  {t === "Applied Skills" && <Settings size={16} />}
                  {t === "Performance" && <BarChart3 size={16} />}
                  {t === "Software" && <Cpu size={16} />}
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
          </div>

{/* Equipment tab */}
{activeTab === "Applied Skills" && (
  <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
    {/* LEFT: image card (stretches to row height) */}
    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 h-full">
      <div className="relative w-full min-h-[420px] lg:h-full">
        <AnimatePresence mode="wait">
          {(() => {
            const e = equipmentImages[currentEquipmentImage];
            const s = srcFor(e.base);
            return (
              <MotionWebpImg
                key={currentEquipmentImage}
                webp={s.webp}
                fallback={s.png}
                alt={e.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            );
          })()}
        </AnimatePresence>
      </div>

      {/* single caption overlay */}
      <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <div className="text-lg font-semibold text-white">
          {equipmentImages[currentEquipmentImage].title}
        </div>
        <div className="text-sm text-white/60">
          {equipmentImages[currentEquipmentImage].category}
        </div>
      </div>
    </div>

{/* RIGHT: skills panel */}
<div className="flex flex-col">
  <div className="mt-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
    {equipmentSkills.map((item, i) => {
      // choose icon by title
      let Icon = Settings;
      if (item.title.includes("Microscope")) Icon = Microscope;
      else if (item.title.includes("Laser")) Icon = Crosshair;
      else if (item.title.includes("Instrument")) Icon = ScanLine;
      else if (item.title.includes("Manufacturing")) Icon = Hammer;
      else if (item.title.includes("Precision")) Icon = Target;
      else if (item.title.includes("Cleanroom") || item.title.includes("Microfabrication")) Icon = Cpu;

      return (
        <div
          key={i}
          className="rounded-2xl border border-white/10 p-4 bg-white/5 overflow-visible"
        >
          <div className="flex items-start gap-3">
            <div className="h-9 w-9 rounded-full border border-white/15 grid place-items-center shrink-0">
              <Icon size={18} />
            </div>
            <div className="min-w-0">
              <div className="font-medium leading-tight text-white">{item.title}</div>
              <div className="text-xs text-white/50">{item.subtitle}</div>
            </div>
          </div>
          <ul className="mt-3 space-y-1.5 text-sm">
            {item.points.map((p, j) => (
              <li key={j} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: ACCENT }} />
                <span className="text-white/75">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    })}
  </div>
</div>
  </div>
)}


          {/* Performance tab (small KPI tiles) */}
          {activeTab === "Performance" && (
            <section className="mt-10">
              <div className="rounded-3xl border border-white/10 p-6">
                <h3 className="text-xl font-semibold text-white">Selected Impact</h3>

                <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {[
                    {
                      group: "Research Outputs",
                      items: [
                        { metric: "AAAS Cover", label: "Scientific visualization credit", context: "Science Advances cover art credit - Vol. 12, Issue 21" },
                        { metric: "PN 2026", label: "Co-authored accepted poster", context: "Inverse-designed nanostructures in diamond - Photonics North" },
                      ],
                    },
                    {
                      group: "Instrument Engineering",
                      items: [
                        { metric: "PRISM v5", label: "Deployed instrument", context: "In active use at IQC's NPQO Lab for Diamond NV center research" },
                        { metric: "5+ Fixtures", label: "Custom tooling fabricated", context: "Hand-machined/CNC-ready jigs and alignment tools" },
                      ],
                    },
                    {
                      group: "Industry Impact",
                      items: [
                        { metric: "4 systems", label: "End-to-end owner", context: "Laser optics, XY stage, microscope camera, substrate loader - Atomic Semi" },
                        { metric: "20%", label: "Capacity increase", context: "Production routing and customer-intake redesign - Pirlitor" },
                        { metric: "800+", label: "Tasks automated", context: "Excel/VBA shipping cards - 3-day surge window" },
                      ],
                    },
                  ].map((group) => (
                    <div key={group.group} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <div className="text-sm font-medium text-white/60">{group.group}</div>
                      <div className="mt-4 space-y-3">
                        {group.items.map((item) => (
                          <div key={item.metric} className="rounded-2xl border border-white/10 bg-black/20 p-4 hover:bg-white/5 transition">
                            <div className="text-2xl font-semibold text-white">{item.metric}</div>
                            <div className="mt-1 text-sm font-medium text-white/90">{item.label}</div>
                            <div className="mt-1 text-xs leading-5 text-white/50">{item.context}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-[11px] text-white/35">
                  Some metrics are summarized to respect confidentiality agreements (NDA).
                </div>
              </div>
            </section>
          )}

          {/* Software tab */}
          {activeTab === "Software" && (
            <div className="mt-10">
              <div className="mb-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-6 text-white/65">
                Practical working exposure across these tools; not all are expert-level specializations.
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="rounded-3xl border border-white/10 p-6 bg-white/5">
                <div className="flex items-center gap-2 text-white">
                  <Cpu size={18} />
                  <h3 className="text-xl font-semibold">Engineering Software</h3>
                </div>
                <ul className="mt-5 space-y-2">
                  {mockData.skills.frameworks.map((name) => (
                    <li key={name} className="flex items-center gap-3">
                      <Check size={16} style={{ color: ACCENT }} />
                      <span className="text-white/80">{name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 p-6 bg-white/5">
                <div className="flex items-center gap-2 text-white">
                  <Activity size={18} />
                  <h3 className="text-xl font-semibold">Programming Languages</h3>
                </div>
                <ul className="mt-5 space-y-2">
                  {mockData.skills.languages.map((name) => (
                    <li key={name} className="flex items-center gap-3">
                      <Check size={16} style={{ color: ACCENT }} />
                      <span className="text-white/80">{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Professional Performance (experience cards) */}
      <section id="experience" className="relative scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <h2 className="text-4xl font-semibold tracking-tight text-white">Professional Experience</h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockData.experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-3xl border border-white/10 overflow-hidden bg-white/5"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* image */}
                  <div className="w-full md:w-1/3 md:min-h-[220px] lg:min-h-[260px]">
  {exp.imageBase ? (
    <WebpImg
      webp={`${process.env.PUBLIC_URL}/${exp.imageBase}.webp`}
      fallback={`${process.env.PUBLIC_URL}/${exp.imageBase}.png`}
      alt={exp.company}
      className="h-full w-full object-cover"
      loading="lazy"
    />
  ) : (
    <img
      src={exp.image
        ? (exp.image.startsWith("http") ? exp.image : `${process.env.PUBLIC_URL}/${exp.image}`)
        : `${process.env.PUBLIC_URL}/image.jpg`}
      alt={exp.company}
      className={`h-full w-full object-cover ${exp.imagePosition === "left" ? "object-left" : ""}`}
      loading="lazy"
    />
  )}
</div>


                  {/* content */}
                  <div className="flex-1 p-6">
                    {/* top row */}
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-white/50">{exp.category}</div>
                      <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 text-[12px] font-medium tracking-wide px-4 py-1.5 min-w-[11rem] whitespace-nowrap text-white/80">
                        {exp.period}
                      </span>
                    </div>

                    <div className="mt-1 text-xl font-semibold text-white">{exp.role}</div>
                    <div className="text-sm text-white/70">{exp.company}</div>

                    {exp.engagement && (
                      <span className="mt-1 inline-block text-[11px] px-2 py-1 rounded-full border border-white/10 bg-white/5 text-white/60">
                        {exp.engagement}
                      </span>
                    )}

                    {exp.affiliationNote && (
                      <div className="mt-1 text-xs text-white/50">{exp.affiliationNote}</div>
                    )}

                    {/* metrics */}
                    {Array.isArray(exp.keyMetrics) && exp.keyMetrics.length > 0 && (
                      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2">
                        {exp.keyMetrics.map((m, j) => (
                          <div key={j} className="rounded-xl border border-white/10 p-2 overflow-hidden min-w-0 bg-white/5">
                            <div className="text-sm font-semibold leading-tight text-white">{m.value}</div>
                            <div className="text-[10px] text-white/50 mt-0.5 leading-snug">{m.description}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* achievements */}
                    {Array.isArray(exp.achievements) && exp.achievements.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {exp.achievements.map((a, k) => (
                          <div key={k} className="flex items-start gap-2 text-sm text-white/75">
                            <span className="mt-1 inline-block h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: ACCENT }} />
                            <span>{a}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<section id="publications" className="relative scroll-mt-20">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-4xl font-semibold tracking-tight text-white">Credits</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/55">
          Research, presentation, and scientific visualization credits with clear attribution context.
        </p>
      </div>
    </div>

    <div className="mt-10 space-y-10">
      {["Credits"].map((category) => {
        const items = (mockData.publications ?? []).filter((item) => item.category === category);
        if (items.length === 0) return null;

        return (
          <div key={category}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {items.map((item, i) => {
                const hasMultipleLinks = Array.isArray(item.links) && item.links.length > 0;
                const CardTag = item.link && !hasMultipleLinks ? "a" : "div";
                const cardProps = item.link && !hasMultipleLinks
                  ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
                  : {};

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <CardTag
                      {...cardProps}
                      className={`block h-full rounded-3xl border border-white/10 overflow-hidden bg-white/5 transition ${
                        item.link && !hasMultipleLinks ? "hover:bg-white/10 hover:border-white/20" : ""
                      }`}
                    >
                      {item.image && (
                        <div className="h-64 sm:h-80 overflow-hidden bg-black/30">
                          <img
                            src={`${process.env.PUBLIC_URL}/${item.image}`}
                            alt={item.title}
                            className="h-full w-full object-cover object-top"
                            loading="lazy"
                          />
                        </div>
                      )}

                      <div className="p-6">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                            {item.type}
                          </span>
                          <span className="text-sm text-white/45">{item.date}</span>
                        </div>

                        <h4 className="mt-4 text-xl font-semibold leading-tight text-white">{item.title}</h4>
                        <div className="mt-2 text-sm text-white/60">{item.venue}</div>
                        {item.authors && (
                          <div className="mt-3 text-sm leading-6 text-white/75">
                            <span className="text-white/45">Authors: </span>
                            {item.authors}
                          </div>
                        )}
                        {item.affiliations && (
                          <div className="mt-2 text-sm leading-6 text-white/70">
                            <span className="text-white/45">Affiliations: </span>
                            {item.affiliations}
                          </div>
                        )}
                        <p className="mt-4 text-sm leading-6 text-white/70">{item.credit}</p>

                        {hasMultipleLinks ? (
                          <div className="mt-5 flex flex-wrap gap-3">
                            {item.links.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(event) => event.stopPropagation()}
                                className="text-sm font-medium"
                                style={{ color: ACCENT }}
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        ) : (
                          <div className="mt-5 text-sm font-medium" style={{ color: ACCENT }}>
                            {item.link ? "Open link" : "Link pending"}
                          </div>
                        )}
                      </div>
                    </CardTag>
                  </motion.div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>
{/* Projects + full-width carousel */}
<section id="projects" className="relative scroll-mt-20">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
    <h2 className="text-4xl font-semibold tracking-tight text-white">Engineering Projects</h2>

    {/* FULL-WIDTH CAROUSEL */}
    <div className="mt-10 relative rounded-3xl overflow-hidden border border-white/10 bg-white/5">
      <div className="relative w-full h-[560px] md:h-[640px]">
        <AnimatePresence mode="wait">
          {(() => {
            const p = projectCarouselImages[currentProjectImage];
            if (p.image) {
              return (
                <motion.img
                  key={currentProjectImage}
                  src={`${process.env.PUBLIC_URL}/${p.image}`}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  loading="lazy"
                />
              );
            }
            const s = srcFor(p.base);
            return (
              <MotionWebpImg
                key={currentProjectImage}
                webp={s.webp}
                fallback={s.png}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            );
          })()}
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={showPreviousProjectImage}
        aria-label="Previous project image"
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/55 text-2xl leading-none text-white/90 backdrop-blur transition hover:bg-black/75 hover:text-white"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={showNextProjectImage}
        aria-label="Next project image"
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/55 text-2xl leading-none text-white/90 backdrop-blur transition hover:bg-black/75 hover:text-white"
      >
        ›
      </button>

      {/* caption overlay */}
      <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
        <div className="text-white text-lg font-semibold">
          {projectCarouselImages[currentProjectImage].title}
        </div>
        <div className="text-white/80 text-sm">
          {projectCarouselImages[currentProjectImage].description}
        </div>
      </div>
    </div>

{/* BARS / CARDS BELOW */}
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
  {mockData.projects.map((project, index) => {
    const isFeatured = !!project.featured;
    const techs = Array.isArray(project.technologies) ? project.technologies : [];

    return (
      <motion.button
        key={project.id ?? index}
        type="button"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: index * 0.06 }}
        whileHover={{ scale: 1.03 }}
        onClick={() => {
          if (project.slug === "prism") {
            navigate("/prism");
          } else if (project.slug === "car-modding") {
            navigate("/car-modding");
          } else if (project.slug === "renders") {
            window.open("https://axivionstudio.com/", "_blank", "noopener,noreferrer");
          } else if (project.demo) {
            window.open(project.demo, "_blank", "noopener,noreferrer");
          } else if (project.github) {
            window.open(project.github, "_blank", "noopener,noreferrer");
          }
        }}
        aria-label={`Open project: ${project.title}`}
        className={`w-full text-left cursor-pointer rounded-3xl border p-6 transition-all duration-200 ease-out
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20
                    ${isFeatured ? "bg-white/10 border-white/20 hover:bg-white/15" : "bg-white/5 border-white/10 hover:bg-white/10"}
                    ${project.slug === "prism" ? "prism-card" : ""}
                    ${project.slug === "car-modding" ? "car-card" : ""}
                    ${project.slug === "renders" ? "renders-card" : ""}`}
      >
        {/* Breakthrough pill (accent color on hover via CSS) */}
        {isFeatured && (
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-3 breakthrough-pill accent">
            <Award size={14} /> Breakthrough
          </div>
        )}

        {/* Category header */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-white/50">Category</div>
          <div className="text-sm font-medium text-white/80">{project.category}</div>
        </div>

        {/* Title + description */}
        <div className="mt-2 text-xl font-semibold text-white">{project.title}</div>
        <p className="mt-2 text-sm text-white/65">
          {project.description}
        </p>

        {/* Patent status — outlined pill (color comes from CSS .patent-pill for PRISM) */}
        {project.patentStatus && (
          <div
            className="mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs patent-pill"
            aria-label="Patent status"
            title={project.patentStatus}
          >
            <Shield size={14} />
            <span>{project.patentStatus}</span>
          </div>
        )}

        {/* Technical specifications */}
        <div className="mt-4">
          <div className="text-sm font-medium text-white/80">Technical Specifications</div>
          <div className="mt-2 space-y-2">
            {(project.specifications ?? []).slice(0, 4).map((s, si) => (
              <div key={si} className="flex items-center gap-2 text-sm">
                <div className="size-4 rounded-full grid place-items-center checkmark accent">✓</div>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies chips — only BORDER changes color on hover */}
        {techs.length > 0 && (
          <div className="mt-4">
            <div className="text-sm font-medium text-white/80">Technologies</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {techs.slice(0, 5).map((t, ti) => (
                <span
                  key={ti}
                  className={`rounded-full border px-3 py-1 text-xs tech-pill accent
                              border-white/20 text-white/75`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.button>
    );
  })}
</div>

  </div>
</section>


      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <div>
              <div className="text-sm tracking-widest text-white/40">ENGINEERING PORTFOLIO</div>
              <div className="mt-1 text-2xl font-semibold text-white">Dejan Latkovic</div>

              <div className="mt-2 flex flex-wrap gap-3 text-sm text-white/60">
                <div className="inline-flex items-center gap-2">
                  <GraduationCapIcon size={14} /> University of Waterloo
                </div>
                <div className="inline-flex items-center gap-2">
                  <Users size={14} /> Co-operative Education
                </div>
                <div className="inline-flex items-center gap-2">
                  <Award size={14} /> Graduation 2027
                </div>
              </div>

              <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-white/15 px-4 py-2 text-sm text-white/75">
                <div className="relative size-2 rounded-full" style={{ backgroundColor: ACCENT }}>
                  <span className="absolute inset-0 animate-ping rounded-full" style={{ backgroundColor: ACCENT, opacity: 0.6 }} />
                </div>
                Open to co-op and research opportunities • Precision instruments, photonics, deep-tech
              </div>
            </div>

            {/* Logos bar with webp/png */}
            <WebpImg
              webp={companiesBarWebp}
              fallback={companiesBarPng}
              alt="University of Waterloo • IQC • Axivion Instruments"
              className="h-14 sm:h-16 lg:h-20 w-auto object-contain rounded-xl border border-white/10 opacity-70"
            />
          </div>

          {/* RIGHT: Core Competencies */}
          <div>
            <div className="text-sm font-medium text-white/60">Core Competencies</div>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { n: "Precision Engineering", d: "High-accuracy mechanical & optical design", i: Target },
                { n: "Process Optimization", d: "Streamlined workflows & efficiency gains", i: Zap },
                { n: "Advanced Instrumentation", d: "Development of custom scientific tools", i: Settings },
                { n: "Automation & Control", d: "Python/LabVIEW integration for complex systems", i: Activity },
              ].map((c) => (
                <div key={c.n} className="rounded-2xl border border-white/10 p-4 flex items-center gap-3 bg-white/5">
                  <div className="h-9 w-9 rounded-full border border-white/15 grid place-items-center shrink-0">
                    {React.createElement(c.i, { size: 18 })}
                  </div>
                  <div>
                    <div className="font-medium text-white">{c.n}</div>
                    <div className="text-sm text-white/50">{c.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-white/40 flex items-center justify-between">
            <div>© {new Date().getFullYear()} Dejan Latkovic</div>
            <div className="flex items-center gap-3" />
          </div>
        </div>
      </footer>
      </div>{/* end relative z-10 */}
    </div>
  );
}
