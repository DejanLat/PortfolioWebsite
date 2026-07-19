import React, { useEffect, useMemo, useRef, useState } from "react";
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
import { Link, useSearchParams } from "react-router-dom";
import { useStudioPointerGlow } from "../hooks/useStudioPointerGlow";
import { useScrolledHeader } from "../hooks/useScrolledHeader";
import studioPackages from "../data/studioPackages.json";
import { calculateStudioEstimate, STUDIO_COMPLEXITIES, STUDIO_TIMELINES, STUDIO_USAGE } from "../data/studioQuote";

const CONTACT_EMAIL = "contact@axivionstudio.com";
const STUDIO_ACCENT = "#34d399";
const PUBLIC = process.env.PUBLIC_URL || "";

const PACKAGE_ICONS = {
  refinement: PackageCheck,
  custom: ImageIcon,
  set: Layers3,
};

const studioTopics = [
  ...studioPackages.map((pkg) => pkg.name),
  "Animation / Custom Scope",
  "General Studio Inquiry",
];

const studioCards = [
  ...studioPackages.map((pkg) => ({
    title: pkg.name,
    label: pkg.contactSummary,
    icon: PACKAGE_ICONS[pkg.key],
    topic: pkg.name,
    packageKey: pkg.key,
  })),
  {
    title: "Animation / Custom Scope",
    label: "Motion, unusual scientific visualization needs, or custom scopes beyond the standard packages.",
    icon: Sparkles,
    topic: "Animation / Custom Scope",
    packageKey: "",
  },
];

export default function StudioContact({ contactEmail = CONTACT_EMAIL }) {
  const { rootRef, rootStyle, updateRootPointer } = useStudioPointerGlow();
  const solidNav = useScrolledHeader();
  const [searchParams] = useSearchParams();
  const formRef = useRef(null);

  const requestedPackage = studioPackages.find((pkg) => pkg.key === searchParams.get("package"));
  const requestedComplexity = STUDIO_COMPLEXITIES.some((item) => item.key === searchParams.get("complexity"))
    ? searchParams.get("complexity")
    : requestedPackage?.key === "refinement" ? "simple" : "technical";
  const safeInitialPackage = requestedPackage?.key === "refinement" && requestedComplexity !== "simple"
    ? studioPackages.find((pkg) => pkg.key === "custom")
    : requestedPackage;

  const [packageKey, setPackageKey] = useState(safeInitialPackage?.key || "refinement");
  const [topic, setTopic] = useState(safeInitialPackage?.name || studioPackages[0].name);
  const [complexityKey, setComplexityKey] = useState(requestedComplexity);
  const [timelineKey, setTimelineKey] = useState(
    STUDIO_TIMELINES.some((item) => item.key === searchParams.get("timeline")) ? searchParams.get("timeline") : "standard"
  );
  const [usageKey, setUsageKey] = useState(
    STUDIO_USAGE.some((item) => item.key === searchParams.get("usage")) ? searchParams.get("usage") : "academic"
  );
  const [showEstimateSummary, setShowEstimateSummary] = useState(searchParams.has("package"));
  const [scopeRecommendation, setScopeRecommendation] = useState("");
  const [name, setName] = useState("");
  const [replyEmail, setReplyEmail] = useState("");
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
  const selectedPackage = useMemo(
    () => studioPackages.find((pkg) => pkg.key === packageKey) || studioPackages[0],
    [packageKey]
  );
  const estimate = useMemo(
    () => calculateStudioEstimate({ packageOption: selectedPackage, complexityKey, usageKey, timelineKey }),
    [selectedPackage, complexityKey, usageKey, timelineKey]
  );

  const encoded = (value) => encodeURIComponent(value || "");
  const buildMailto = (subject, body) =>
    "mailto:" + contactEmail + "?subject=" + encoded(subject) + "&body=" + encoded(body);

  const buildStudioBody = (selectedTopic = topic) => {
    const estimateDetails = showEstimateSummary
      ? "\nEstimator selections:\nPackage: " + selectedPackage.name +
        "\nComplexity: " + estimate.complexity.label +
        "\nTimeline: " + estimate.timeline.label +
        "\nLicence: " + estimate.usage.label +
        "\nEstimated starting range: " + estimate.range +
        "\nScope note: " + selectedPackage.scopeNote + "\n"
      : "";

    return "Name: " + name +
      "\nReply email: " + replyEmail +
      "\nOrganization: " + org +
      "\nTopic: " + selectedTopic + estimateDetails +
      "\nRequested deadline: " + timeline +
      "\nIntended use: " + intendedUse +
      "\nReference material: " + referenceLink +
      "\nProject context:\n" + message;
  };

  const buildStudioSubject = (selectedTopic = topic) =>
    "Axivion Studio Project Request - " + selectedTopic;

  const scrollToForm = () => {
    window.requestAnimationFrame(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  const selectPackage = (nextPackageKey) => {
    const nextPackage = studioPackages.find((pkg) => pkg.key === nextPackageKey);
    if (!nextPackage) return;
    setPackageKey(nextPackage.key);
    setTopic(nextPackage.name);
    setShowEstimateSummary(true);
    setScopeRecommendation("");
    if (nextPackage.key === "refinement") setComplexityKey("simple");
  };

  const handleCardClick = (card) => {
    if (card.packageKey) {
      selectPackage(card.packageKey);
    } else {
      setTopic(card.topic);
      setShowEstimateSummary(false);
    }
    scrollToForm();
  };

  const handleTopicChange = (nextTopic) => {
    setTopic(nextTopic);
    const packageMatch = studioPackages.find((pkg) => pkg.name === nextTopic);
    if (packageMatch) {
      selectPackage(packageMatch.key);
    } else {
      setShowEstimateSummary(false);
    }
  };

  const handleEstimatePackageChange = (nextPackageKey) => {
    if (nextPackageKey === "refinement" && complexityKey !== "simple") {
      selectPackage("custom");
      setScopeRecommendation(
        "This scope requires new concept or scene development and is better suited to the Custom Scientific Visual package."
      );
      return;
    }
    selectPackage(nextPackageKey);
  };

  const handleEstimateComplexityChange = (nextComplexity) => {
    setComplexityKey(nextComplexity);
    if (packageKey === "refinement" && nextComplexity !== "simple") {
      selectPackage("custom");
      setScopeRecommendation(
        "This scope requires new concept or scene development and is better suited to the Custom Scientific Visual package."
      );
      return;
    }
    setScopeRecommendation("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    window.location.href = buildMailto(buildStudioSubject(), buildStudioBody());
  };

  return (
    <div
      ref={rootRef}
      className="studio-page min-h-screen w-full overflow-x-hidden bg-black text-white"
      style={rootStyle}
      onPointerMove={updateRootPointer}
    >
      <div className="studio-ambient-layer pointer-events-none fixed inset-0 z-0" aria-hidden>
        <div className="studio-cursor-glow absolute inset-0" />
        <div className="studio-top-glow absolute inset-x-0 top-0 h-[82vh]" />
      </div>

      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solidNav ? "border-b border-white/10 bg-black/75 backdrop-blur" : "border-b border-transparent bg-transparent"}`}>
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
            src={`${PUBLIC}/Axivion Photos/AxivionStudioBanner.jpg`}
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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {studioCards.map((card) => (
              <button
                key={card.title}
                type="button"
                onClick={() => handleCardClick(card)}
                aria-label={"Select " + card.title + " and continue to the project form"}
                className="rounded-3xl border p-5 text-left transition hover:-translate-y-0.5 hover:bg-white/10"
                style={{ borderColor: "rgba(52,211,153,0.25)", background: "rgba(52,211,153,0.07)" }}
              >
                <card.icon size={22} style={{ color: STUDIO_ACCENT }} />
                <h2 className="mt-4 text-lg font-semibold leading-tight">{card.title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/72">{card.label}</p>
                <div className="mt-5 text-sm font-medium" style={{ color: STUDIO_ACCENT }}>
                  Select and continue
                </div>
              </button>
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
                  <a href={buildMailto("Axivion Studio Project Request", "Name:\nReply email:\nOrganization:\nTopic:\nTimeline:\nIntended use:\nReference material:\nProject context:\n")} className="underline hover:opacity-80">
                    {contactEmail}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} /> By appointment after scope review
              </div>
              <p className="text-sm leading-6 text-white/58">
                Required fields are name, reply email, selected service, and project context. This request opens your email application. The website does not collect payment information directly. Please avoid sending highly sensitive or confidential project files before confidentiality arrangements are confirmed.
              </p>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="scroll-mt-24 space-y-4">
            {showEstimateSummary && (
              <div className="studio-quote-summary rounded-3xl border p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Estimator summary</div>
                <div className="mt-3 text-2xl font-semibold tracking-tight text-white">{estimate.range}</div>
                <p className="mt-2 text-sm leading-6 text-white/72">{selectedPackage.scopeNote}</p>
                {scopeRecommendation && (
                  <p className="mt-3 rounded-2xl border border-emerald-300/22 bg-emerald-300/[0.08] px-3 py-2 text-sm leading-6 text-emerald-100">
                    {scopeRecommendation}
                  </p>
                )}
                {timelineKey === "rush" && (
                  <p className="mt-3 text-sm font-medium text-amber-100">Rush availability requires scope review.</p>
                )}
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div>
                    <label htmlFor="studio-estimate-package" className="mb-1 block text-sm text-white/72">Package</label>
                    <select id="studio-estimate-package" value={packageKey} onChange={(event) => handleEstimatePackageChange(event.target.value)} className="studio-quote-select w-full rounded-xl border px-3 py-2 pr-10 text-sm text-white outline-none focus:border-emerald-300/60">
                      {studioPackages.map((pkg) => <option key={pkg.key} value={pkg.key}>{pkg.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="studio-estimate-complexity" className="mb-1 block text-sm text-white/72">Complexity</label>
                    <select id="studio-estimate-complexity" value={complexityKey} onChange={(event) => handleEstimateComplexityChange(event.target.value)} className="studio-quote-select w-full rounded-xl border px-3 py-2 pr-10 text-sm text-white outline-none focus:border-emerald-300/60">
                      {STUDIO_COMPLEXITIES.map((item) => <option key={item.key} value={item.key}>{item.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="studio-estimate-timeline" className="mb-1 block text-sm text-white/72">Scheduling</label>
                    <select id="studio-estimate-timeline" value={timelineKey} onChange={(event) => setTimelineKey(event.target.value)} className="studio-quote-select w-full rounded-xl border px-3 py-2 pr-10 text-sm text-white outline-none focus:border-emerald-300/60">
                      {STUDIO_TIMELINES.map((item) => <option key={item.key} value={item.key}>{item.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="studio-estimate-usage" className="mb-1 block text-sm text-white/72">Licence</label>
                    <select id="studio-estimate-usage" value={usageKey} onChange={(event) => setUsageKey(event.target.value)} className="studio-quote-select w-full rounded-xl border px-3 py-2 pr-10 text-sm text-white outline-none focus:border-emerald-300/60">
                      {STUDIO_USAGE.map((item) => <option key={item.key} value={item.key}>{item.label}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="studio-name" className="mb-1 block text-sm text-white/72">Your Name</label>
                <input id="studio-name" value={name} onChange={(event) => setName(event.target.value)} className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 outline-none focus:border-emerald-300/60" placeholder="Your name" autoComplete="name" required />
              </div>
              <div>
                <label htmlFor="studio-reply-email" className="mb-1 block text-sm text-white/72">Reply Email</label>
                <input id="studio-reply-email" value={replyEmail} onChange={(event) => setReplyEmail(event.target.value)} className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 outline-none focus:border-emerald-300/60" placeholder="you@example.com" autoComplete="email" type="email" required />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="studio-topic" className="mb-1 block text-sm text-white/72">Selected Service</label>
                <select id="studio-topic" value={topic} onChange={(event) => handleTopicChange(event.target.value)} className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 outline-none focus:border-emerald-300/60" required>
                  {topics.map((item) => <option key={item}>{item}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="studio-organization" className="mb-1 block text-sm text-white/72">Organization <span className="text-white/55">(optional)</span></label>
                <input id="studio-organization" value={org} onChange={(event) => setOrg(event.target.value)} className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2 outline-none focus:border-emerald-300/60" placeholder="Lab / company / team" autoComplete="organization" />
              </div>
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
                required
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
                href={buildMailto("Axivion Studio Project Request", "Name:\nReply email:\nOrganization:\nTopic:\nTimeline:\nIntended use:\nReference material:\nProject context:\n")}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/82 hover:text-white"
              >
                Email directly
              </a>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-white/55 sm:flex-row">
          <div>&copy; {new Date().getFullYear()} Innovations Boutique Inc. / Axivion Studio</div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end"><Link to="/terms" className="underline decoration-white/30 underline-offset-4 hover:text-white">Terms of Service</Link><Link to="/terms#privacy-and-website-contact" className="underline decoration-white/30 underline-offset-4 hover:text-white">Privacy</Link><span>Scientific Visualization</span></div>
        </div>
      </footer>
    </div>
  );
}

