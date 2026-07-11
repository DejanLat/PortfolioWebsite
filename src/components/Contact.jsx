import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Briefcase,
  Calendar,
  FileText,
  Image as ImageIcon,
  Mail,
  Microscope,
  Phone,
  SendHorizonal,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useScrolledHeader } from "../hooks/useScrolledHeader";

const CONTACT_EMAIL = "axivioninstruments@gmail.com";
const ACCENT = "#f59e0b";
const ACCENT_SOFT = "rgba(245, 158, 11, 0.15)";
const PUBLIC = process.env.PUBLIC_URL || "";

export default function Contact({ contactEmail = CONTACT_EMAIL }) {
  const [mx, setMx] = useState(-9999);
  const [my, setMy] = useState(-9999);
  const [topic, setTopic] = useState("Axivion Instruments");
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [message, setMessage] = useState("");

  const solidNav = useScrolledHeader();
  const rootStyle = { "--mx": `${mx}px`, "--my": `${my}px` };

  const subjectMap = useMemo(
    () => ({
      "Axivion Studio": "Axivion Studio visualization request",
      "Axivion Instruments": "Axivion Instruments / PRISM inquiry",
      "Research Collaboration": "Research collaboration inquiry",
      "Co-op / Work": "Co-op or work opportunity",
      "Schedule a Meeting": "Meeting request",
      "General Inquiry": "General inquiry - Dejan Latkovic portfolio",
    }),
    []
  );

  const encoded = (value) => encodeURIComponent(value || "");
  const buildMailto = (subject, body) =>
    `mailto:${contactEmail}?subject=${encoded(subject)}&body=${encoded(body)}`;

  const primaryPaths = [
    {
      title: "Axivion Instruments",
      label: "PRISM instrument inquiries, specs, partnerships",
      icon: Microscope,
      topic: "Axivion Instruments",
      body:
        "Hi,\n\nI'd like to discuss Axivion Instruments / PRISM.\n\nOrganization:\nUse case:\nTimeline:\n\nThanks!",
    },
    {
      title: "Axivion Studio",
      label: "Scientific visualization and technical rendering for papers, proposals, covers, and hardware teams",
      icon: ImageIcon,
      topic: "Axivion Studio",
      href: "https://axivionstudio.com/",
      cta: "Visit studio",
    },
  ];

  const secondaryPaths = [
    {
      title: "Research Collaboration",
      label: "Photonics, instrumentation, visualization",
      icon: FileText,
      topic: "Research Collaboration",
      body:
        "Hi,\n\nI'd like to discuss a research collaboration.\n\nTopic:\nOrganization:\nTimeline:\n\nThanks!",
    },
    {
      title: "Co-op / Work",
      label: "Precision engineering, optics, hardware",
      icon: Briefcase,
      topic: "Co-op / Work",
      body:
        "Hi,\n\nI'm reaching out about a co-op / work opportunity.\n\nRole or team:\nLocation:\nTimeline:\n\nThanks!",
    },
    {
      title: "Schedule a Meeting",
      label: "Short technical conversation",
      icon: Calendar,
      topic: "Schedule a Meeting",
      body:
        "Hi,\n\nI'd like to schedule a meeting.\n\nMy availability:\nTopics of interest:\n\nThanks!",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = subjectMap[topic] || subjectMap["General Inquiry"];
    const body = `Hi,\n\n${message || "(message)"}\n\nName: ${name || ""}${
      org ? `\nOrganization: ${org}` : ""
    }`;
    window.location.href = buildMailto(subject, body);
  };

  return (
    <div
      className="min-h-screen w-full bg-black text-white"
      style={rootStyle}
      onMouseMove={(event) => {
        setMx(event.clientX);
        setMy(event.clientY);
      }}
    >
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
{/* Global cursor halo */}
        <div className="absolute inset-0"
             style={{ background: `radial-gradient(700px at var(--mx) var(--my), ${ACCENT_SOFT}, transparent 60%)` }} />
        {/* Static top glow */}
        <div className="absolute inset-x-0 top-0 h-[90vh]"
             style={{ background: "radial-gradient(600rem 26rem at 50% -10%,rgba(245,158,11,0.42), transparent 60%)" }} />
      </div>


        <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solidNav ? "border-b border-white/10 bg-black/70 backdrop-blur" : "border-b border-transparent bg-transparent"}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-3">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
              <ArrowLeft size={18} />
              Back
            </Link>
            <div className="h-5 w-px bg-white/20" />
            <div className="font-semibold tracking-widest">CONTACT</div>
            <div className="hidden sm:block text-white/40">DEJAN LATKOVIC</div>
          </div>
        </header>

        <section className="relative pt-36 pb-16">
          <div className="absolute inset-0 -z-10">
            <img
              src={`${PUBLIC}/office.webp`}
              alt="Workspace background"
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                opacity: 0.22,
                filter: "brightness(0.78) contrast(1.02)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/78 to-black" />
          </div>

          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs uppercase tracking-widest text-white/90 backdrop-blur-sm"
                style={{ borderColor: "rgba(245,158,11,0.42)", background: "rgba(255,255,255,0.07)" }}
              >
                Contact
              </div>
              <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight">
                Let's Talk
              </h1>
              <p className="mt-4 max-w-2xl text-white/78">
                Send a note about Axivion Instruments, the PRISM instrument, Axivion Studio visualization work,
                research collaboration, or engineering opportunities.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative w-full">
          <div className="mx-auto max-w-7xl px-6 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {primaryPaths.map((path) => (
              <a
                key={path.title}
                href={path.href || buildMailto(subjectMap[path.topic], path.body)}
                className="rounded-3xl border p-7 transition hover:bg-white/10"
                style={{ borderColor: "rgba(245,158,11,0.26)", background: "rgba(245,158,11,0.07)" }}
              >
                <path.icon size={24} style={{ color: ACCENT }} />
                <h2 className="mt-4 text-2xl font-semibold">{path.title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/68">{path.label}</p>
                <div className="mt-5 text-sm font-medium" style={{ color: ACCENT }}>
                  {path.cta || "Start email"}
                </div>
              </a>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            {secondaryPaths.map((path) => (
              <a
                key={path.title}
                href={path.href || buildMailto(subjectMap[path.topic], path.body)}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <path.icon size={20} className="text-white/80" />
                <h3 className="mt-3 text-lg font-semibold">{path.title}</h3>
                <p className="mt-1 text-sm leading-6 text-white/62">{path.label}</p>
              </a>
            ))}
          </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="text-sm uppercase tracking-widest" style={{ color: ACCENT }}>
                Direct
              </div>
              <h2 className="mt-2 text-3xl font-semibold">Write a note</h2>
              <p className="mt-3 text-white/75">
                Use this form to pre-fill an email, or write directly to me at {" "}
                <a href={buildMailto("Direct email", "Hi,")} className="underline hover:opacity-80">
                  {contactEmail}
                </a>
                .
              </p>

              <div className="mt-6 space-y-3 text-sm text-white/68">
                <div className="flex items-center gap-2">
                  <Mail size={16} /> {contactEmail}
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} /> By appointment
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/72 mb-1">Your Name</label>
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full rounded-xl bg-black/60 border border-white/15 px-3 py-2 outline-none focus:border-white/40"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/72 mb-1">Organization</label>
                  <input
                    value={org}
                    onChange={(event) => setOrg(event.target.value)}
                    className="w-full rounded-xl bg-black/60 border border-white/15 px-3 py-2 outline-none focus:border-white/40"
                    placeholder="Lab / company / team"
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-white/72 mb-1">Topic</label>
                <select
                  value={topic}
                  onChange={(event) => setTopic(event.target.value)}
                  className="w-full rounded-xl bg-black/60 border border-white/15 px-3 py-2 outline-none focus:border-white/40"
                >
                  {Object.keys(subjectMap).map((key) => (
                    <option key={key}>{key}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-white/72 mb-1">Message</label>
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  rows={6}
                  className="w-full rounded-xl bg-black/60 border border-white/15 px-3 py-2 outline-none focus:border-white/40"
                  placeholder="A brief description of your request, timeline, and relevant context..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-medium text-white"
                  style={{ borderColor: "rgba(245,158,11,0.48)", background: "rgba(245,158,11,0.16)" }}
                >
                  Open Email <SendHorizonal size={16} />
                </button>
                <a
                  href={buildMailto(subjectMap["General Inquiry"], "Hi,")}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/82 hover:text-white"
                >
                  Email manually
                </a>
              </div>
            </form>
          </div>
        </section>

        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/55">
            <div>Dejan Latkovic</div>
            <div>Axivion Instruments / Instrumentation / Scientific Visualization / Engineering</div>
          </div>
        </footer>
    </div>
  );
}
