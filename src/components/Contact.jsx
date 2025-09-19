// // Contact.jsx
// import React, { useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowLeft,
//   Mail,
//   Phone,
//   Calendar,
//   FileText,
//   Shield,
//   SendHorizonal,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const CONTACT_EMAIL = "axivioninstruments@gmail.com"; // Default contact email
// export default function Contact({ contactEmail = CONTACT_EMAIL }) {
//   const [topic, setTopic] = useState("General Inquiry");
//   const [name, setName] = useState("");
//   const [org, setOrg] = useState("");
//   const [message, setMessage] = useState("");

//   const subjectMap = useMemo(
//     () => ({
//       "General Inquiry": "General inquiry about PRISM",
//       "Request Specs": "Requesting PRISM spec overview",
//       "Schedule a Meeting": "Meeting request about PRISM",
//       "Partnerships / Pilot": "Partnership or pilot discussion",
//     }),
//     []
//   );

//   const encoded = (s) => encodeURIComponent(s || "");
//   const buildMailto = (s, b) =>
//     `mailto:${contactEmail}?subject=${encoded(s)}&body=${encoded(b)}`;

//   const quickLinks = [
//     {
//       title: "Request Specs",
//       label: "Overview PDF / capabilities",
//       icon: FileText,
//       href: buildMailto(
//         subjectMap["Request Specs"],
//         `Hi,\n\nI’d like the latest spec overview for PRISM.\n\nName: \nOrganization: \nUse case: \n\nThanks!`
//       ),
//       primary: true,
//     },
//     {
//       title: "Schedule a Meeting",
//       label: "30–45 min conversation",
//       icon: Calendar,
//       href: buildMailto(
//         subjectMap["Schedule a Meeting"],
//         `Hi,\n\nI’d like to schedule a meeting to discuss PRISM.\n\nMy availability: \nTopics of interest: \n\nThanks!`
//       ),
//     },
//     {
//       title: "Partnerships / Pilot",
//       label: "Evaluation & early access",
//       icon: Shield,
//       href: buildMailto(
//         subjectMap["Partnerships / Pilot"],
//         `Hi,\n\nWe’re interested in a partnership/pilot.\n\nOrganization: \nEnvironment (e.g., cryo/vacuum): \nTarget timeline: \n\nThanks!`
//       ),
//     },
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const s = subjectMap[topic] || "Inquiry";
//     const body = `Hi,\n\n${message || "(message)"}\n\n; ${name || "(name)"}${
//       org ? `, ${org}` : ""
//     }`;
//     window.location.href = buildMailto(s, body);
//   };

//   return (
//     <div className="min-h-screen w-full bg-black text-white">
//       {/* Top bar */}
//       <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-black/70 border-b border-white/10">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <Link
//               to="/prism"
//               className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
//             >
//               <ArrowLeft size={18} />
//               <span>Back</span>
//             </Link>
//             <div className="h-5 w-px bg-white/20" />
//             <div className="font-semibold tracking-widest text-white">AXIVION</div>
//             <div className="text-white/40">CONTACT</div>
//           </div>

//           <a
//             href={buildMailto("Direct email", "Hi,")}
//             className="rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90"
//           >
//             <Mail size={16} className="inline mr-1" />
//             Email
//           </a>
//         </div>
//       </header>

//       {/* Hero */}
//       <section className="relative pt-36 pb-16">
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute inset-0 [background-image:radial-gradient(60rem_30rem_at_50%_120%,rgba(255,255,255,0.12),transparent_60%)]" />
//         </div>
//         <div className="mx-auto max-w-7xl px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="max-w-3xl"
//           >
//             <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-widest text-white/80">
//               Contact
//             </div>
//             <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight">
//               Connect with the Team
//             </h1>
//             <p className="mt-4 text-white/70 max-w-2xl">
//               Active development • Patent pending. Request a spec overview, propose a collaboration, or
//               schedule a conversation. We’ll reply promptly.
//             </p>

//             <div className="mt-6 flex flex-wrap items-center gap-3">
//               <a
//                 href={buildMailto("General inquiry about PRISM", "Hi,")}
//                 className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90"
//               >
//                 <SendHorizonal size={16} className="inline mr-2" />
//                 Email Us
//               </a>
//               <a
//                 href={buildMailto(
//                   subjectMap["Schedule a Meeting"],
//                   "Hi,\n\nMy availability:\n- \n- \n\nThanks!"
//                 )}
//                 className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium hover:border-white/60"
//               >
//                 <Calendar size={16} className="inline mr-2" />
//                 Schedule a Meeting
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Quick cards */}
//       <section className="relative w-full">
//         <div className="mx-auto max-w-7xl px-6 pb-10">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {quickLinks.map((q) => (
//               <a
//                 key={q.title}
//                 href={q.href}
//                 className={`rounded-3xl border border-white/10 p-6 hover:border-white/30 transition group ${
//                   q.primary ? "bg-white/5" : ""
//                 }`}
//               >
//                 <q.icon size={20} className="text-white/80" />
//                 <div className="mt-3 text-xl font-semibold">{q.title}</div>
//                 <div className="text-sm text-white/60">{q.label}</div>
//                 <div className="mt-4 text-xs text-white/40 group-hover:text-white/60">
//                   Opens email composer →
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Email compose (mailto) */}
//       <section className="relative w-full">
//         <div className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
//           <div className="rounded-3xl border border-white/10 p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//             <div>
//               <div className="text-sm uppercase tracking-widest text-white/60">Direct</div>
//               <h2 className="mt-2 text-3xl font-semibold">Write to us</h2>
//               <p className="mt-3 text-white/70">
//                 Prefer a quick note? Use the form to pre-fill an email with your details, or write us
//                 directly at{" "}
//                 <a
//                   href={buildMailto("Direct email", "Hi,")}
//                   className="underline hover:opacity-80"
//                 >
//                   {contactEmail}
//                 </a>
//                 .
//               </p>

//               <div className="mt-6 space-y-3 text-sm text-white/60">
//                 <div className="flex items-center gap-2">
//                   <Mail size={16} /> {contactEmail}
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Phone size={16} /> By appointment
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Shield size={16} /> Technical details available on request
//                 </div>
//               </div>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm text-white/70 mb-1">Your Name</label>
//                   <input
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="w-full rounded-xl bg-black border border-white/15 px-3 py-2 outline-none focus:border-white/40"
//                     placeholder="Ada Lovelace"
//                     autoComplete="name"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm text-white/70 mb-1">Organization</label>
//                   <input
//                     value={org}
//                     onChange={(e) => setOrg(e.target.value)}
//                     className="w-full rounded-xl bg-black border border-white/15 px-3 py-2 outline-none focus:border-white/40"
//                     placeholder="Institute / Company"
//                     autoComplete="organization"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm text-white/70 mb-1">Topic</label>
//                 <select
//                   value={topic}
//                   onChange={(e) => setTopic(e.target.value)}
//                   className="w-full rounded-xl bg-black border border-white/15 px-3 py-2 outline-none focus:border-white/40"
//                 >
//                   {Object.keys(subjectMap).map((k) => (
//                     <option key={k}>{k}</option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm text-white/70 mb-1">Message</label>
//                 <textarea
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   rows={6}
//                   className="w-full rounded-xl bg-black border border-white/15 px-3 py-2 outline-none focus:border-white/40"
//                   placeholder="A brief description of your request, environment, and timeline…"
//                 />
//               </div>

//               <div className="flex items-center gap-3">
//                 <button
//                   type="submit"
//                   className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90"
//                 >
//                   <SendHorizonal size={16} className="inline mr-2" />
//                   Open Email
//                 </button>
//                 <a
//                   href={buildMailto("General inquiry about PRISM", "Hi,")}
//                   className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium hover:border-white/60"
//                 >
//                   Or email manually
//                 </a>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="prism-tesla-footer border-t border-white/10 bg-black">
//         <div className="tesla-container mx-auto max-w-7xl px-6">
//           <div className="prism-footer-content flex items-center justify-between py-8 gap-6 flex-col sm:flex-row">
//             <div className="footer-left">
//               <h3 className="text-xl font-semibold">PRISM System</h3>
//               <p className="text-white/70">Periscopic Relay Imaging Scanning Microscope</p>
//               <div className="footer-status mt-3 flex items-center gap-2 text-sm text-white/70">
//                 <span className="status-dot active inline-block h-2 w-2 rounded-full bg-emerald-400" />
//                 <span>Active Development • Patent Pending</span>
//               </div>
//             </div>

//             <div className="footer-right">
//               <div className="footer-tesla-specs grid grid-cols-3 gap-4 text-center">
//                 <div className="footer-tesla-spec rounded-2xl border border-white/10 px-4 py-3">
//                   <span className="spec-value block text-lg font-semibold">V5.0</span>
//                   <span className="spec-label block text-xs text-white/60">Current Release</span>
//                 </div>
//                 <div className="footer-tesla-spec rounded-2xl border border-white/10 px-4 py-3">
//                   <span className="spec-value block text-lg font-semibold">50×</span>
//                   <span className="spec-label block text-xs text-white/60">Tested Stable Total Magnification</span>
//                 </div>
//                 <div className="footer-tesla-spec rounded-2xl border border-white/10 px-4 py-3">
//                   <span className="spec-value block text-lg font-semibold">50 nm</span>
//                   <span className="spec-label block text-xs text-white/60">Smooth Stepping Resolution</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="py-6 text-sm text-white/60 flex items-center justify-between border-t border-white/10">
//             <div>PRISM</div>
//             <div>© {new Date().getFullYear()} Axivion Instruments</div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


// src/components/Contact.jsx
import React, {
  useMemo,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Mail,
  Phone,
  Calendar,
  FileText,
  Shield,
  SendHorizonal,
} from "lucide-react";
import { Link } from "react-router-dom";

const CONTACT_EMAIL = "axivioninstruments@gmail.com"; // Default contact email

export default function Contact({ contactEmail = CONTACT_EMAIL }) {
  const ACCENT = "#13c2b3";
  const ACCENT_HOVER = "#0fb3a5";

  // ---- Cursor-follow glow (global; background only)
  const [mx, setMx] = useState(-9999);
  const [my, setMy] = useState(-9999);
  const onMove = (e) => {
    setMx(e.clientX);
    setMy(e.clientY);
  };
  const rootStyle = { "--mx": `${mx}px`, "--my": `${my}px` };

  // ---- Hero-local halo so it stays glued while scrolling
  const heroRef = useRef(null);
  const onHeroMove = (e) => {
    const el = heroRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--hx", `${e.clientX - r.left}px`);
    el.style.setProperty("--hy", `${e.clientY - r.top}px`);
  };

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

  // ---- Mail helpers (unchanged)
  const [topic, setTopic] = useState("General Inquiry");
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [message, setMessage] = useState("");

  const subjectMap = useMemo(
    () => ({
      "General Inquiry": "General inquiry about PRISM",
      "Request Detailed Specs": "Requesting PRISM spec overview",
      "Schedule a Meeting": "Meeting request about PRISM",
      "Partnerships": "Partnership or pilot discussion",
    }),
    []
  );

  const encoded = (s) => encodeURIComponent(s || "");
  const buildMailto = (s, b) =>
    `mailto:${contactEmail}?subject=${encoded(s)}&body=${encoded(b)}`;

  const quickLinks = [
    {
      title: "Request Detailed Specs",
      label: "Overview PDF / capabilities",
      icon: FileText,
      href: buildMailto(
        subjectMap["Request Detailed Specs"],
        `Hi,\n\nI’d like the latest spec overview for PRISM.\n\nName: \nOrganization: \nUse case: \n\nThanks!`
      ),
      primary: true,
    },
    {
      title: "Schedule a Meeting",
      label: "30–45 min conversation",
      icon: Calendar,
      href: buildMailto(
        subjectMap["Schedule a Meeting"],
        `Hi,\n\nI’d like to schedule a meeting to discuss PRISM.\n\nMy availability: \nTopics of interest: \n\nThanks!`
      ),
    },
    {
      title: "Partnerships",
      label: "Evaluation & early access",
      icon: Shield,
      href: buildMailto(
        subjectMap["Partnerships"],
        `Hi,\n\nWe’re interested in a partnership.\n\nOrganization: \nEnvironment (e.g., cryo/vacuum): \nTarget timeline: \n\nThanks!`
      ),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const s = subjectMap[topic] || "Inquiry";
    const body = `Hi,\n\n${message || "(message)"}\n\n ${name || "(name)"}${
      org ? `, ${org}` : ""
    }`;
    window.location.href = buildMailto(s, body);
  };

  return (
    <div
      className="min-h-screen w-full bg-black text-white"
      onMouseMove={onMove}
      style={rootStyle}
    >
      {/* BACKGROUND LAYER (fixed) ; above pure black, below content */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        {/* Global cursor halo */}
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

      {/* Top bar */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-black/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              to="/prism"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
            >
              <ArrowLeft size={18} />
              <span>Back</span>
            </Link>
            <div className="h-5 w-px bg-white/20" />
            <div className="font-semibold tracking-widest text-white">AXIVION</div>
            <div className="text-white/40">CONTACT</div>
          </div>

          <a
            href={buildMailto("Direct email", "Hi,")}
            className="rounded-full px-4 py-2 text-sm font-medium"
            style={{ backgroundColor: ACCENT, color: "#000" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = ACCENT_HOVER)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = ACCENT)
            }
          >
            <Mail size={16} className="inline mr-1" />
            Email
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        ref={heroRef}
        onMouseMove={onHeroMove}
        className="relative pt-36 pb-16"
      >
        {/* Teal hero background + overlays */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#062a2e] via-[#052024] to-black" />
          <div className="absolute inset-0 [background-image:radial-gradient(60rem_30rem_at_50%_120%,rgba(19,194,179,0.18),transparent_60%),linear-gradient(to_bottom,rgba(0,0,0,0.20),rgba(0,0,0,0.55))]" />
        </div>

        {/* Hero-local cursor halo (doesn't obstruct content) */}
        <div
          className="pointer-events-none absolute inset-0 -z-[5]"
          style={{
            background:
              "radial-gradient(700px at var(--hx) var(--hy), rgba(19, 194, 179, 0.18), transparent 60%)",
          }}
        />
        {/* Bottom bleed to prevent visible seam to next section */}
        <div
          className="pointer-events-none absolute -bottom-10 left-0 right-0 h-10 -z-[4]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
          }}
          aria-hidden
        />

        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs uppercase tracking-widest text-white/90 border"
              style={{ borderColor: "rgba(19,194,179,0.35)" }}
            >
              Contact
            </div>
            <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight">
              Connect with the Team
            </h1>
            <p className="mt-4 text-white/80 max-w-2xl">
              Active development • Patent pending. Request a spec overview,
              propose a collaboration, or schedule a conversation. We’ll reply
              promptly.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={buildMailto("General inquiry about PRISM", "Hi,")}
                className="rounded-full px-6 py-3 text-sm font-medium"
                style={{ backgroundColor: ACCENT, color: "#000" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = ACCENT_HOVER)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = ACCENT)
                }
              >
                <SendHorizonal size={16} className="inline mr-2" />
                Email Us
              </a>
              <a
                href={buildMailto(
                  subjectMap["Schedule a Meeting"],
                  "Hi,\n\nMy availability:\n- \n- \n\nThanks!"
                )}
                className="rounded-full border px-6 py-3 text-sm font-medium hover:border-white/60"
                style={{ borderColor: "rgba(255,255,255,0.35)" }}
              >
                <Calendar size={16} className="inline mr-2" />
                Schedule a Meeting
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick cards */}
      <section className="relative w-full">
        <div className="mx-auto max-w-7xl px-6 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((q) => (
              <a
                key={q.title}
                href={q.href}
                className="rounded-3xl p-6 transition group"
                style={{
                  border: q.primary
                    ? "1px solid rgba(19,194,179,0.25)"
                    : "1px solid rgba(255,255,255,0.15)",
                  background: q.primary
                    ? "rgba(19,194,179,0.06)"
                    : "rgba(0,0,0,0.5)",
                }}
              >
                <q.icon size={20} className="text-white/85" />
                <div className="mt-3 text-xl font-semibold">{q.title}</div>
                <div className="text-sm text-white/70">{q.label}</div>
                <div className="mt-4 text-xs text-white/50 group-hover:text-white/70">
                  Opens email composer →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Email compose (mailto) */}
      <section className="relative w-full">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
          <div
            className="rounded-3xl p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
            style={{ border: "1px solid rgba(255,255,255,0.15)", background: "rgba(0,0,0,0.5)" }}
          >
            <div>
              <div className="text-sm uppercase tracking-widest text-white/70">
                Direct
              </div>
              <h2 className="mt-2 text-3xl font-semibold">Write to us</h2>
              <p className="mt-3 text-white/80">
                Prefer a quick note? Use the form to pre-fill an email with your
                details, or write us directly at{" "}
                <a
                  href={buildMailto("Direct email", "Hi,")}
                  className="underline hover:opacity-80"
                >
                  {contactEmail}
                </a>
                .
              </p>

              <div className="mt-6 space-y-3 text-sm text-white/75">
                <div className="flex items-center gap-2">
                  <Mail size={16} /> {contactEmail}
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} /> By appointment
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={16} /> Technical details available on request
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/75 mb-1">
                    Your Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl bg-black border px-3 py-2 outline-none focus:border-white/40"
                    style={{ borderColor: "rgba(255,255,255,0.15)" }}
                    placeholder="Ada Lovelace"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/75 mb-1">
                    Organization
                  </label>
                  <input
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    className="w-full rounded-xl bg-black border px-3 py-2 outline-none focus:border-white/40"
                    style={{ borderColor: "rgba(255,255,255,0.15)" }}
                    placeholder="Institute / Company"
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-white/75 mb-1">Topic</label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full rounded-xl bg-black border px-3 py-2 outline-none focus:border-white/40"
                  style={{ borderColor: "rgba(255,255,255,0.15)" }}
                >
                  {Object.keys(subjectMap).map((k) => (
                    <option key={k}>{k}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-white/75 mb-1">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  className="w-full rounded-xl bg-black border px-3 py-2 outline-none focus:border-white/40"
                  style={{ borderColor: "rgba(255,255,255,0.15)" }}
                  placeholder="A brief description of your request, environment, and timeline…"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="rounded-full px-6 py-3 text-sm font-medium"
                  style={{ backgroundColor: ACCENT, color: "#000" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = ACCENT_HOVER)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = ACCENT)
                  }
                >
                  <SendHorizonal size={16} className="inline mr-2" />
                  Open Email
                </button>
                <a
                  href={buildMailto("General inquiry about PRISM", "Hi,")}
                  className="rounded-full border px-6 py-3 text-sm font-medium hover:border-white/60"
                  style={{ borderColor: "rgba(255,255,255,0.35)" }}
                >
                  Or email manually
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-8 gap-6 flex-col sm:flex-row">
            <div>
              <h3 className="text-xl font-semibold">PRISM System</h3>
              <p className="text-white/70">
                Periscopic Relay Imaging Scanning Microscope
              </p>
              <div className="mt-3 flex items-center gap-2 text-sm text-white/70">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: ACCENT }}
                />
                <span>Active Development • Patent Pending</span>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="rounded-2xl border border-white/10 px-4 py-3">
                  <span className="block text-lg font-semibold">V5.0</span>
                  <span className="block text-xs text-white/60">
                    Current Release
                  </span>
                </div>
                <div className="rounded-2xl border border-white/10 px-4 py-3">
                  <span className="block text-lg font-semibold">50×</span>
                  <span className="block text-xs text-white/60">
                    Tested Stable Total Magnification
                  </span>
                </div>
                <div className="rounded-2xl border border-white/10 px-4 py-3">
                  <span className="block text-lg font-semibold">50 nm</span>
                  <span className="block text-xs text-white/60">
                    Smooth Stepping Resolution
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="py-6 text-sm text-white/60 flex items-center justify-between border-t border-white/10">
            <div>PRISM</div>
            <div>© {new Date().getFullYear()} Axivion Instruments</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
