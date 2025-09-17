// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowLeft, ChevronDown, ChevronUp, ExternalLink, Download, Zap, Target, Settings, BarChart3, Microscope, Cpu, Activity, Layers } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import mockData from '../data/mock';

// const PrismProject = () => {
//   const [expandedSection, setExpandedSection] = useState('overview');
//   const [activeSpecTab, setActiveSpecTab] = useState('architecture');

//   const toggleSection = (section) => {
//     setExpandedSection(expandedSection === section ? '' : section);
//   };

//   return (
//     <div className="prism-tesla">
//       {/* Tesla Navigation */}
//       <nav className="tesla-nav">
//         <div className="tesla-nav-content">
//           <Link to="/" className="tesla-back">
//             <ArrowLeft size={20} />
//             <span>Back</span>
//           </Link>
//           <div className="tesla-logo">
//             <h3>PRISM</h3>
//             <span>SYSTEM</span>
//           </div>
//           <div className="tesla-nav-actions">
//             <button className="tesla-nav-btn">
//               <Download size={16} />
//               <span>Specs</span>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Tesla Model X Hero Style */}
//       <section className="prism-tesla-hero">
//         <div className="prism-hero-bg">
//           <div className="nanotech-visualization">
//             <div className="atom-grid">
//               <div className="atom-node"></div>
//               <div className="atom-node"></div>
//               <div className="atom-node"></div>
//               <div className="atom-node"></div>
//               <div className="atom-node"></div>
//             </div>
//             <div className="laser-beam"></div>
//             <div className="optical-lens"></div>
//           </div>
//         </div>
        
//         <motion.div 
//           className="prism-tesla-content"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="prism-tesla-header">
//             <div className="prism-badge">
//               <Microscope size={16} />
//               <span>BREAKTHROUGH INNOVATION</span>
//             </div>
            
//             <h1 className="prism-tesla-title">
//               <span className="prism-acronym">PRISM</span>
//               <span className="prism-subtitle">Periscopic Relay Imaging Scanning Microscope</span>
//             </h1>
            
//             <p className="prism-tesla-desc">
//               Revolutionary precision optical instrument. Cost-effective alternative to traditional 3-axis translation stages. 
//               Engineered for quantum sensing and cryogenic imaging applications.
//             </p>
//           </div>

//           {/* Tesla Performance Numbers */}
//           <div className="prism-performance-grid">
//             <div className="prism-perf-card primary">
//               <div className="perf-value">49x</div>
//               <div className="perf-label">Magnification</div>
//               <div className="perf-desc">Stable optical system</div>
//             </div>
//             <div className="prism-perf-card">
//               <div className="perf-value">10nm</div>
//               <div className="perf-label">Resolution</div>
//               <div className="perf-desc">Piezo precision</div>
//             </div>
//             <div className="prism-perf-card">
//               <div className="perf-value">±12.5mm</div>
//               <div className="perf-label">Travel Range</div>
//               <div className="perf-desc">3-axis capability</div>
//             </div>
//             <div className="prism-perf-card">
//               <div className="perf-value">&lt;0.003mm</div>
//               <div className="perf-label">Flatness</div>
//               <div className="perf-desc">Bearing precision</div>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* System Architecture - Tesla Clean */}
//       <section className="prism-architecture-tesla">
//         <div className="tesla-container">
//           <div className="arch-header">
//             <h2>System Architecture</h2>
//             <p>Three-axis nested framework with beam orthogonality preservation</p>
//           </div>
          
//           <div className="architecture-tesla-grid">
//             <div className="arch-visual">
//               <div className="system-diagram">
//                 <div className="axis-layer z-layer">
//                   <div className="axis-info">
//                     <span className="axis-name">Z-Axis</span>
//                     <span className="axis-desc">Vertical Focus</span>
//                   </div>
//                 </div>
//                 <div className="axis-layer y-layer">
//                   <div className="axis-info">
//                     <span className="axis-name">Y-Axis</span>
//                     <span className="axis-desc">Mirror Translation</span>
//                   </div>
//                 </div>
//                 <div className="axis-layer x-layer">
//                   <div className="axis-info">
//                     <span className="axis-name">X-Axis</span>
//                     <span className="axis-desc">Independent Control</span>
//                   </div>
//                 </div>
//                 <div className="optical-path-viz">
//                   <div className="beam-line incident"></div>
//                   <div className="mirror-point"></div>
//                   <div className="beam-line reflected"></div>
//                   <div className="objective-point"></div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="arch-specs">
//               <div className="arch-spec-group">
//                 <h3>Key Innovations</h3>
//                 <div className="arch-spec">
//                   <span className="spec-point">Hanging Z-axis configuration</span>
//                   <span className="spec-detail">Reduces moving mass</span>
//                 </div>
//                 <div className="arch-spec">
//                   <span className="spec-point">Beam orthogonality preservation</span>
//                   <span className="spec-detail">Fixed beam path</span>
//                 </div>
//                 <div className="arch-spec">
//                   <span className="spec-point">Modular retrofittable design</span>
//                   <span className="spec-detail">Universal compatibility</span>
//                 </div>
//               </div>
              
//               <div className="arch-spec-group">
//                 <h3>Performance Characteristics</h3>
//                 <div className="arch-spec">
//                   <span className="spec-point">Positioning accuracy</span>
//                   <span className="spec-detail">10-30nm resolution</span>
//                 </div>
//                 <div className="arch-spec">
//                   <span className="spec-point">Travel range</span>
//                   <span className="spec-detail">±12.5mm per axis</span>
//                 </div>
//                 <div className="arch-spec">
//                   <span className="spec-point">Temperature range</span>
//                   <span className="spec-detail">4K to 300K operation</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Technical Specifications - Tesla Style */}
//       <section className="prism-specs-tesla">
//         <div className="tesla-container">
//           <div className="specs-tesla-header">
//             <h2>Technical Specifications</h2>
//             <div className="tesla-spec-nav">
//               <button 
//                 className={`tesla-spec-tab ${activeSpecTab === 'architecture' ? 'active' : ''}`}
//                 onClick={() => setActiveSpecTab('architecture')}
//               >
//                 <Cpu size={16} />
//                 <span>Architecture</span>
//               </button>
//               <button 
//                 className={`tesla-spec-tab ${activeSpecTab === 'optical' ? 'active' : ''}`}
//                 onClick={() => setActiveSpecTab('optical')}
//               >
//                 <Target size={16} />
//                 <span>Optical</span>
//               </button>
//               <button 
//                 className={`tesla-spec-tab ${activeSpecTab === 'mechanical' ? 'active' : ''}`}
//                 onClick={() => setActiveSpecTab('mechanical')}
//               >
//                 <Settings size={16} />
//                 <span>Mechanical</span>
//               </button>
//               <button 
//                 className={`tesla-spec-tab ${activeSpecTab === 'control' ? 'active' : ''}`}
//                 onClick={() => setActiveSpecTab('control')}
//               >
//                 <Zap size={16} />
//                 <span>Control</span>
//               </button>
//             </div>
//           </div>

//           <div className="tesla-specs-content">
//             {mockData.prismSpecs.map((section, index) => (
//               activeSpecTab === section.id && (
//                 <motion.div 
//                   key={section.id}
//                   className="tesla-spec-section"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4 }}
//                 >
//                   <div className="tesla-spec-grid">
//                     {section.specs.map((spec, specIndex) => (
//                       <div key={specIndex} className="tesla-spec-card">
//                         <div className="spec-card-header">
//                           <div className="spec-label">{spec.label}</div>
//                           <div className="spec-status">Verified</div>
//                         </div>
//                         <div className="spec-value">{spec.value}</div>
//                         <div className="spec-description">{spec.description}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </motion.div>
//               )
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Applications - Tesla Grid */}
//       <section className="prism-applications-tesla">
//         <div className="tesla-container">
//           <div className="apps-header">
//             <h2>Applications</h2>
//             <p>Advanced capabilities for next-generation research</p>
//           </div>
          
//           <div className="apps-tesla-grid">
//             {mockData.prismApplications.map((app, index) => (
//               <motion.div 
//                 key={index}
//                 className="tesla-app-card"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="app-header">
//                   <div className="app-icon">
//                     {app.title.includes('Quantum') && <Target size={24} />}
//                     {app.title.includes('Cryogenic') && <Zap size={24} />}
//                     {app.title.includes('Rydberg') && <Cpu size={24} />}
//                     {app.title.includes('Cold') && <Settings size={24} />}
//                     {app.title.includes('Photonic') && <Activity size={24} />}
//                     {app.title.includes('Surface') && <Layers size={24} />}
//                   </div>
//                   <div className="app-category">{app.category}</div>
//                 </div>
                
//                 <div className="app-content">
//                   <h3>{app.title}</h3>
//                   <p>{app.description}</p>
                  
//                   <div className="app-capabilities">
//                     {app.benefits.slice(0, 3).map((benefit, bIndex) => (
//                       <div key={bIndex} className="capability-item">
//                         • {benefit}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Performance Benchmarks - Tesla Numbers */}
//       <section className="prism-benchmarks-tesla">
//         <div className="tesla-container">
//           <div className="benchmarks-header">
//             <h2>Performance Benchmarks</h2>
//             <p>Quantified superiority over traditional systems</p>
//           </div>
          
//           <div className="benchmarks-tesla-grid">
//             <div className="benchmark-tesla-card">
//               <div className="benchmark-header">
//                 <h3>Positioning Accuracy</h3>
//                 <div className="benchmark-improvement">3x Better</div>
//               </div>
//               <div className="benchmark-comparison">
//                 <div className="current-performance">
//                   <div className="performance-bar prism" style={{ width: '95%' }}>
//                     <span>10-30nm</span>
//                   </div>
//                   <div className="performance-label">PRISM System</div>
//                 </div>
//                 <div className="baseline-performance">
//                   <div className="performance-bar baseline" style={{ width: '30%' }}>
//                     <span>50-100nm</span>
//                   </div>
//                   <div className="performance-label">Traditional Stages</div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="benchmark-tesla-card">
//               <div className="benchmark-header">
//                 <h3>Travel Range</h3>
//                 <div className="benchmark-improvement">25% More</div>
//               </div>
//               <div className="benchmark-comparison">
//                 <div className="current-performance">
//                   <div className="performance-bar prism" style={{ width: '100%' }}>
//                     <span>±12.5mm</span>
//                   </div>
//                   <div className="performance-label">PRISM System</div>
//                 </div>
//                 <div className="baseline-performance">
//                   <div className="performance-bar baseline" style={{ width: '80%' }}>
//                     <span>±10mm</span>
//                   </div>
//                   <div className="performance-label">Standard Systems</div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="benchmark-tesla-card">
//               <div className="benchmark-header">
//                 <h3>Beam Stability</h3>
//                 <div className="benchmark-improvement">Perfect</div>
//               </div>
//               <div className="benchmark-comparison">
//                 <div className="current-performance">
//                   <div className="performance-bar prism" style={{ width: '100%' }}>
//                     <span>100%</span>
//                   </div>
//                   <div className="performance-label">PRISM Orthogonality</div>
//                 </div>
//                 <div className="baseline-performance">
//                   <div className="performance-bar baseline" style={{ width: '95%' }}>
//                     <span>95-98%</span>
//                   </div>
//                   <div className="performance-label">Conventional Systems</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Tesla Footer */}
//       <footer className="prism-tesla-footer">
//         <div className="tesla-container">
//           <div className="prism-footer-content">
//             <div className="footer-left">
//               <h3>PRISM System</h3>
//               <p>Periscopic Relay Imaging Scanning Microscope</p>
//               <div className="footer-status">
//                 <div className="status-dot active"></div>
//                 <span>Active Development • Patent Pending</span>
//               </div>
//             </div>
            
//             <div className="footer-right">
//               <div className="footer-tesla-specs">
//                 <div className="footer-tesla-spec">
//                   <span className="spec-value">Version 5.0</span>
//                   <span className="spec-label">Current Release</span>
//                 </div>
//                 <div className="footer-tesla-spec">
//                   <span className="spec-value">49x</span>
//                   <span className="spec-label">Magnification</span>
//                 </div>
//                 <div className="footer-tesla-spec">
//                   <span className="spec-value">10nm</span>
//                   <span className="spec-label">Resolution</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PrismProject;
// export default PrismProject;

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Download,
  Gauge,
  Zap,
  Move3D,
  Target,
  Ruler,
  Microscope,
  Cpu,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function PrismX() {
  // --- simple privacy switch (set to false if you ever want to show details) ---
  const PRIVACY_MODE = true;
  const safe = (text, placeholder = "Available on request") =>
    PRIVACY_MODE ? placeholder : text;

  const [solidNav, setSolidNav] = useState(false);
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

  useEffect(() => {
    const onScroll = () => setSolidNav(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // KPIs (hero badges) — fully neutral
  const kpis = PRIVACY_MODE
    ? [
        { value: "TBD", label: "Performance Class" },
        { value: "TBD", label: "Motion Range" },
        { value: "TBD", label: "Operating Mode" },
        { value: "TBD", label: "Validation Status" },
      ]
    : [
        { value: "10–30 nm", label: "Positioning Resolution" },
        { value: "±12.5 mm", label: "Travel Per Axis" },
        { value: "4 K – 300 K", label: "Operating Range" },
        { value: "49×", label: "Demonstrated Magnification" },
      ];

  // Spec tabs — neutral placeholders (no mirror/Z-axis/geometry details)
  const specData = {
    architecture: PRIVACY_MODE
      ? [
          { label: "System Topology", value: "Confidential overview" },
          { label: "Alignment Strategy", value: "Summary available on request" },
          { label: "Form Factor", value: "Retrofittable (details withheld)" },
        ]
      : [
          { label: "3-Axis Periscopic Relay", value: "Independent X/Y with hanging Z" },
          { label: "Beam Orthogonality", value: "Maintained across full travel" },
          { label: "Retrofit Form Factor", value: "Mounts to existing benches & cryostats" },
        ],
    optical: PRIVACY_MODE
      ? [
          { label: "Optical Path", value: "Confidential" },
          { label: "Stability", value: "Lab-validated summary" },
          { label: "Interfaces", value: "Options available" },
        ]
      : [
          { label: "Objective Interface", value: "DIN/RMS & M25 modular nosepiece" },
          { label: "Path Stability", value: "Fixed beam path with relay mirrors" },
          { label: "Back-reflection Control", value: "Aperture & baffling geometry" },
        ],
    mechanical: PRIVACY_MODE
      ? [
          { label: "Frame Strategy", value: "Optimized for stability" },
          { label: "Precision Class", value: "Characterized (values withheld)" },
          { label: "Materials", value: "Engineering alloys (summary)" },
        ]
      : [
          { label: "Mass-Optimized Frames", value: "Tri-cut ribs, high stiffness/weight" },
          { label: "Bearing Precision", value: "< 3 µm flatness components" },
          { label: "Materials", value: "Aluminum alloy + steel thread inserts where needed" },
        ],
    control: PRIVACY_MODE
      ? [
          { label: "Actuation", value: "Precision motion (model withheld)" },
          { label: "Electronics", value: "Modular controller / embedded hub" },
          { label: "APIs", value: "Python / LabVIEW (overview)" },
        ]
      : [
          { label: "Actuation", value: "Piezo linear stacks with closed-loop ready" },
          { label: "Electronics", value: "Modular KIM-class controllers or CORE module" },
          { label: "APIs", value: "Python/LabVIEW bindings; jog, raster, recipes" },
        ],
  };

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all ${
          solidNav ? "backdrop-blur bg-black/70 border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
            >
              <ArrowLeft size={18} />
              <span>Back</span>
            </Link>
            <div className="h-5 w-px bg-white/20" />
            <div className="font-semibold tracking-widest text-white">FLAGSHIP</div>
            <div className="text-white/40">INSTRUMENT</div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#specs"
              className="rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 active:scale-[0.99]"
            >
              Specs
            </a>
          </div>
        </div>
      </header>

      {/* In-progress banner */}
      <div className="sticky top-16 z-40 bg-amber-50/95 backdrop-blur border-y border-amber-200">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-amber-900">
            <span aria-hidden>🚧</span>
            <span>
              This site is a live work-in-progress. Some sections are placeholders.
              <span className="ml-2 font-medium">Last update: 9/16/2024</span>
            </span>
          </div>
        </div>
      </div>

      {/* NDA banner */}
      <div className="sticky top-32 z-40 bg-amber-50/95 backdrop-blur border-y border-amber-200">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-amber-900">
            <span aria-hidden>⚠️</span>
            <span>
              Certain technical details are withheld for confidentiality. Please contact for
              information under NDA.
            </span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[92vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black" />
          <div className="absolute inset-0 [background-image:radial-gradient(60rem_30rem_at_50%_120%,rgba(255,255,255,0.15),transparent_60%),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.6))]" />
        </div>
        <div className="absolute inset-0 grid place-items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-6"
          >
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-widest text-white/80">
              <Microscope size={14} /> Instrumentation Preview
            </div>
            <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
              Flagship Optical
              <span className="block text-white/80">Precision System</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-white/70">
              {safe(
                "High-level preview of an advanced optical instrument. Detailed specifications are shared directly upon request.",
                "High-level preview • details under NDA."
              )}
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href="#design"
                className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90"
              >
                Explore
              </a>
              <a
                href="#specs"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium hover:border-white/60"
              >
                Technical Specs
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-6 inset-x-0">
          <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-2 px-6">
            {kpis.map((k) => (
              <div
                key={k.label}
                className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 px-4 py-3 text-center"
              >
                <div className="text-xl font-semibold">{k.value}</div>
                <div className="text-xs text-white/60">{k.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design section (generic copy; no mirrors/Z-axis/etc.) */}
      <section id="design" className="relative w-full bg-black">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Designed for stable, precise motion
              </h2>
              <p className="mt-5 text-white/70 max-w-xl">
                {safe(
                  "A configurable platform focused on repeatable positioning and clean integration with standard lab workflows.",
                  "Configurable platform • integration-friendly."
                )}
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
                <div className="rounded-2xl border border-white/10 p-5">
                  <div className="text-lg font-semibold">Modular</div>
                  <div className="text-sm text-white/60">
                    Components and interfaces adapt to varied environments.
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 p-5">
                  <div className="text-lg font-semibold">Retrofit-friendly</div>
                  <div className="text-sm text-white/60">
                    Drop-in mounting and common accessory support.
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 p-5">
                  <div className="text-lg font-semibold">Stable</div>
                  <div className="text-sm text-white/60">
                    Emphasis on predictable motion and consistent alignment.
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/0" />
                <div className="absolute inset-0 grid place-items-center text-white/50">
                  <Microscope size={120} />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="h-24 rounded-2xl border border-white/10" />
                <div className="h-24 rounded-2xl border border-white/10" />
                <div className="h-24 rounded-2xl border border-white/10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky chips — neutralized */}
      <section className="sticky top-16 z-40 border-y border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-white/80">
              <Gauge size={16} /> Specs available on request
            </div>
          </div>
          <a
            href="#specs"
            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90"
          >
            <Download size={16} /> Request Spec Overview
          </a>
        </div>
      </section>

      {/* “System Architecture” — generic, no mirror/Z-axis terms */}
      <section className="relative w-full bg-black">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm uppercase tracking-widest text-white/60">
                System Overview
              </div>
              <h3 className="mt-2 text-4xl font-semibold tracking-tight">
                Coordinated motion with a stable optical path
              </h3>
              <p className="mt-4 text-white/70 max-w-xl">
                {safe(
                  "High-level description of the system’s motion strategy and alignment goals. Specific mechanisms are intentionally omitted.",
                  "High-level description • mechanisms omitted."
                )}
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                <div className="rounded-2xl border border-white/10 p-5">
                  <div className="text-sm text-white/60">Motion</div>
                  <div className="text-lg font-semibold">Coordinated axes</div>
                </div>
                <div className="rounded-2xl border border-white/10 p-5">
                  <div className="text-sm text-white/60">Alignment</div>
                  <div className="text-lg font-semibold">Consistent reference</div>
                </div>
                <div className="rounded-2xl border border-white/10 p-5">
                  <div className="text-sm text-white/60">Integration</div>
                  <div className="text-lg font-semibold">Drop-in adapters</div>
                </div>
                <div className="rounded-2xl border border-white/10 p-5">
                  <div className="text-sm text-white/60">Operation</div>
                  <div className="text-lg font-semibold">Predictable behavior</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10">
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

      {/* Applications (kept generic) */}
      <section className="relative w-full bg-gradient-to-b from-black to-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              "Advanced Research",
              "Specialized Environments",
              "Device Characterization",
              "Precision Mapping",
              "Surface Analysis",
              "Automation Workflows",
            ].map((t) => (
              <div key={t} className="rounded-3xl border border-white/10 p-6">
                <div className="text-sm uppercase tracking-widest text-white/60">
                  Application
                </div>
                <div className="mt-2 text-2xl font-semibold">{t}</div>
                <p className="mt-3 text-white/70">
                  {safe(
                    "General application description with specifics available on request.",
                    "General application • details on request."
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section id="specs" className="relative w-full bg-black">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
          <div className="flex items-center justify-between">
            <h3 className="text-4xl font-semibold tracking-tight">Technical Specifications</h3>
            <div className="flex items-center gap-2">
              {specTabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveSpecTab(t.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                    activeSpecTab === t.id
                      ? "bg-white text-black"
                      : "border border-white/20 text-white/80 hover:text-white"
                  }`}
                >
                  <t.icon size={16} /> {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specData[activeSpecTab].map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 p-6">
                <div className="text-sm text-white/60">{s.label}</div>
                <div className="mt-1 text-lg font-semibold">{s.value}</div>
              </div>
            ))}
          </div>

          {/* Big tiles — neutral when privacy is on */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PRIVACY_MODE ? (
              <>
                <div className="rounded-2xl border border-white/10 p-6 text-center">
                  <div className="text-2xl font-semibold">TBD</div>
                  <div className="text-sm text-white/60">Performance Class</div>
                </div>
                <div className="rounded-2xl border border-white/10 p-6 text-center">
                  <div className="text-2xl font-semibold">TBD</div>
                  <div className="text-sm text-white/60">Resolution</div>
                </div>
                <div className="rounded-2xl border border-white/10 p-6 text-center">
                  <div className="text-2xl font-semibold">TBD</div>
                  <div className="text-sm text-white/60">Motion Range</div>
                </div>
              </>
            ) : (
              <>
                <div className="rounded-2xl border border-white/10 p-6 text-center">
                  <div className="text-2xl font-semibold">49×</div>
                  <div className="text-sm text-white/60">Demonstrated magnification</div>
                </div>
                <div className="rounded-2xl border border-white/10 p-6 text-center">
                  <div className="text-2xl font-semibold">10–30 nm</div>
                  <div className="text-sm text-white/60">Resolution</div>
                </div>
                <div className="rounded-2xl border border-white/10 p-6 text-center">
                  <div className="text-2xl font-semibold">±12.5 mm</div>
                  <div className="text-sm text-white/60">Travel per axis</div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full bg-black">
        <div className="mx-auto max-w-7xl px-6 pb-24 lg:pb-32">
          <div className="rounded-3xl border border-white/10 p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="text-sm uppercase tracking-widest text-white/60">Status</div>
              <div className="mt-2 text-3xl font-semibold">
                {safe("Active development • Patent pending", "Active development • Details on request")}
              </div>
              <p className="mt-3 text-white/70 max-w-xl">
                {safe(
                  "Request the latest spec overview or schedule a conversation. Configuration options available for varied environments.",
                  "Request a spec overview • schedule a conversation."
                )}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90"
              >
                Request Specs
              </a>
              <a
                href="#"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium hover:border-white/60"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer badges — neutral */}
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div>Flagship Instrument</div>
          <div className="flex items-center gap-3">
            <span>Preview</span>
            <span>Specs on request</span>
          </div>
          <div>© {new Date().getFullYear()} Axivion Instruments</div>
        </div>
      </footer>
    </div>
  );
}
