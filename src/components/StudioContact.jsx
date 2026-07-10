import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Image as ImageIcon,
  Layers3,
  Mail,
  PackageCheck,
  Phone,
  SendHorizonal,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const CONTACT_EMAIL = "axivioninstruments@gmail.com";
const STUDIO_ACCENT = "#34d399";
const STUDIO_ACCENT_SOFT = "rgba(52, 211, 153, 0.16)";
const PUBLIC = process.env.PUBLIC_URL || "";

const studioTopics = [
  "Technical Figure Render",
  "Publication & Hero Visual",
  "Scientific Visual Package",
  "Animation / Custom Scope",
  "General Studio Inquiry",
];

const studioCards = [
  {
    title: "Technical Figure Render",
    label: "Focused visuals for posters, presentations, apparatus visuals, and clearly defined technical concepts.",
    icon: PackageCheck,
    topic: "Technical Figure Render",
  },
  {
    title: "Publication & Hero Visual",
    label: "Publication-quality visuals for papers, cover candidates, proposals, grants, and major announcements.",
    icon: ImageIcon,
    topic: "Publication & Hero Visual",
  },
  {
    title: "Scientific Visual Package",
    label: "Coordinated sets of related visuals for papers, grants, websites, lab groups, and launches.",
    icon: Layers3,
    topic: "Scientific Visual Package",
  },
  {
    title: "Animation / Custom Scope",
    label: "Motion, unusual scientific visualization needs, or custom scopes beyond the standard packages.",
    icon: Sparkles,
    topic: "Animation / Custom Scope",
  },
];

export default function StudioContact({ contactEmail = CONTACT_EMAIL }) {
  const [mx, setMx] = useState(-9999);
  const [my, setMy] = useState(-9999);
  const [topic, setTopic] = useState(studioTopics[0]);
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [timeline, setTimeline] = useState("");
  const [intendedUse, setIntendedUse] = useState("");
  const [referenceLink, setReferenceLink] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.documentElement.classList.add("scrollbar-studio");
    return () => document.documentElement.classList.remove("scrollbar-studio");
  }, []);

  const topics = useMemo(() => studioTopics, []);

  const encoded = (value) => encodeURIComponent(value || "");
  const buildMailto = (subject, body) =>
    `mailto:${contactEmail}?subject=${encoded(subject)}&body=${encoded(body)}`;

  const buildStudioBody = (selectedTopic = topic) =>
    `Name: ${name}\nOrganization: ${org}\nTopic: ${selectedTopic}\nTimeline: ${timeline}\nIntended use: ${intendedUse}\nReference material: ${referenceLink}\nProject context:\n${message}`;

  const buildStudioSubject = (selectedTopic = topic) =>
    `Axivion Studio Project Request - ${selectedTopic}`;

  const handleCardClick = (selectedTopic) => {
    const body = `Name: \nOrganization: \nTopic: ${selectedTopic}\nTimeline: \nIntended use: \nReference material: \nProject context:\n`;
    return buildMailto(buildStudioSubject(selectedTopic), body);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = buildMailto(buildStudioSubject(), buildStudioBody());
  };

  return (
    <div
      className="studio-page min-h-screen w-full overflow-x-hidden bg-black text-white"
      style={{ "--mx": `${mx}px`, "--my": `${my}px` }}
      onMouseMove={(event) => {
        setMx(event.clientX);
        setMy(event.clientY);
      }}
    >
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(700px at var(--mx) var(--my), ${STUDIO_ACCENT_SOFT}, transparent 60%)` }}
        />
        <div
          className="absolute inset-x-0 top-0 h-[82vh]"
          style={{ background: `radial-gradient(58rem 28rem at 50% -10%, ${STUDIO_ACCENT_SOFT}, transparent 62%)` }}
        />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/75 transition hover:text-white">
            <ArrowLeft size={18} />
            Back
          </Link>
          <div className="h-5 w-px bg-white/18" />
          <div className="font-semibold tracking-widest">CONTACT</div>
          <div className="hidden text-white/45 sm:block">AXIVION STUDIO</div>
        </div>
      </header>

      <section className="relative pt-36 pb-16">
        <div className="absolute inset-0 -z-10">
          <img
            src={`${PUBLIC}/office.webp`}
            alt="Studio workspace background"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ opacity: 0.18, filter: "brightness(0.72) contrast(1.04)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/92 via-black/80 to-black" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs uppercase tracking-widest text-white/88 backdrop-blur-sm"
              style={{ borderColor: "rgba(52,211,153,0.42)", background: "rgba(255,255,255,0.06)" }}
            >
              Contact | Axivion Studio
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Request a Scientific Visual
            </h1>
            <p className="mt-4 max-w-2xl text-white/76">
              Send the project context, intended use case, timeline, reference material, and any publication or format requirements. I'll review the scope and respond with next steps.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative w-full">
        <div className="mx-auto max-w-7xl px-6 pb-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
            {studioCards.map((card) => (
              <a
                key={card.title}
                href={handleCardClick(card.topic)}
                className="rounded-3xl border p-5 transition hover:-translate-y-0.5 hover:bg-white/10"
                style={{ borderColor: "rgba(52,211,153,0.25)", background: "rgba(52,211,153,0.07)" }}
              >
                <card.icon size={22} style={{ color: STUDIO_ACCENT }} />
                <h2 className="mt-4 text-lg font-semibold leading-tight">{card.title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/66">{card.label}</p>
                <div className="mt-5 text-sm font-medium" style={{ color: STUDIO_ACCENT }}>
                  Start request
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 items-start gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 lg:grid-cols-2 lg:p-8">
          <div>
            <div className="text-sm uppercase tracking-widest" style={{ color: STUDIO_ACCENT }}>
              Project Request
            </div>
            <h2 className="mt-2 text-3xl font-semibold">Request a project</h2>
            <p className="mt-3 text-white/74">
              Use this form to pre-fill an email for a Studio project request. Please include the project context, intended use, timeline, and reference material.
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/68">
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <div>
                  <div className="text-white/82">Studio inquiries</div>
                  <a href={buildMailto("Axivion Studio Project Request", "Name:\nOrganization:\nTopic:\nTimeline:\nIntended use:\nReference material:\nProject context:\n")} className="underline hover:opacity-80">
                    {contactEmail}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} /> By appointment after scope review
              </div>
              <p className="text-sm leading-6 text-white/58">
                Privacy note: this request opens your email application. The website does not collect payment information directly. Please avoid sending highly sensitive or confidential project files before confidentiality arrangements are confirmed.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="studio-name" className="mb-1 block text-sm text-white/72">Your Name</label>
                <input
                  id="studio-name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 outline-none focus:border-emerald-300/60"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="studio-organization" className="mb-1 block text-sm text-white/72">Organization</label>
                <input
                  id="studio-organization"
                  value={org}
                  onChange={(event) => setOrg(event.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 outline-none focus:border-emerald-300/60"
                  placeholder="Lab / company / team"
                  autoComplete="organization"
                />
              </div>
            </div>

            <div>
              <label htmlFor="studio-topic" className="mb-1 block text-sm text-white/72">Topic</label>
              <select
                id="studio-topic"
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
                className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 outline-none focus:border-emerald-300/60"
              >
                {topics.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <label htmlFor="studio-timeline" className="mb-1 block text-sm text-white/72">Timeline / Deadline</label>
                <input
                  id="studio-timeline"
                  value={timeline}
                  onChange={(event) => setTimeline(event.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 outline-none focus:border-emerald-300/60"
                  placeholder="Target date"
                />
              </div>
              <div>
                <label htmlFor="studio-intended-use" className="mb-1 block text-sm text-white/72">Intended Use</label>
                <input
                  id="studio-intended-use"
                  value={intendedUse}
                  onChange={(event) => setIntendedUse(event.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 outline-none focus:border-emerald-300/60"
                  placeholder="Paper / cover / web"
                />
              </div>
              <div>
                <label htmlFor="studio-reference-link" className="mb-1 block text-sm text-white/72">Reference Link</label>
                <input
                  id="studio-reference-link"
                  value={referenceLink}
                  onChange={(event) => setReferenceLink(event.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 outline-none focus:border-emerald-300/60"
                  placeholder="Drive / paper / folder"
                  type="url"
                />
              </div>
            </div>

            <div>
              <label htmlFor="studio-message" className="mb-1 block text-sm text-white/72">Message</label>
              <textarea
                id="studio-message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={6}
                className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 outline-none focus:border-emerald-300/60"
                placeholder="Briefly describe the scientific concept, intended use, deadline, reference material, and what the visual needs to communicate."
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-medium text-white"
                style={{ borderColor: "rgba(52,211,153,0.48)", background: "rgba(52,211,153,0.15)" }}
              >
                Open Email <SendHorizonal size={16} />
              </button>
              <a
                href={buildMailto("Axivion Studio Project Request", "Name:\nOrganization:\nTopic:\nTimeline:\nIntended use:\nReference material:\nProject context:\n")}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/82 hover:text-white"
              >
                Email manually
              </a>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-white/55 sm:flex-row">
          <div>&copy; {new Date().getFullYear()} Dejan Latkovic / Axivion Studio</div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end"><Link to="/terms" className="underline decoration-white/30 underline-offset-4 hover:text-white">Terms of Service</Link><Link to="/terms#privacy-and-website-contact" className="underline decoration-white/30 underline-offset-4 hover:text-white">Privacy</Link><span>Scientific Visualization</span></div>
        </div>
      </footer>
    </div>
  );
}

