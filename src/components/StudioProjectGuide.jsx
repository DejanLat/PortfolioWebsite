import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calculator, CheckCircle2, Clock, FileText, Info, Layers3, SendHorizonal, X } from "lucide-react";
import StudioFrame from "./StudioFrame";
import studioPackages from "../data/studioPackages.json";
import { calculateStudioEstimate, STUDIO_COMPLEXITIES, STUDIO_TIMELINES, STUDIO_USAGE } from "../data/studioQuote";
const ACCENT = "#34d399";
const getPackageBadgeClassName = (badge) => {
  const finish =
    badge === "Multi-visual package"
      ? "gold"
      : badge === "Most requested"
        ? "silver"
        : "basic";

  return "studio-soft-pill studio-work-pill studio-work-pill-" + finish;
};
const PACKAGES = studioPackages;

const QUOTE_PACKAGES = studioPackages.map((pkg) => ({
  key: pkg.key,
  label: pkg.name,
  base: pkg.price,
  scopeNote: pkg.scopeNote,
}));

const QUOTE_COMPLEXITY = STUDIO_COMPLEXITIES;

const COMPLEXITY_GUIDE = [
  {
    key: "simple",
    title: "Simple / well-defined",
    summary:
      "Best for projects where the visual direction is already clear and the main job is to produce a polished final render.",
    items: [
      "Clear concept, sketch, CAD, or approved composition is already available",
      "References closely match the intended final visual",
      "Limited new modeling, composition, or material exploration",
      "Few interacting parts, mechanisms, or visual layers",
    ],
  },
  {
    key: "technical",
    title: "Technical / moderate detail",
    summary:
      "Best for projects where the science is clear, but the final visual direction still needs technical interpretation and development.",
    items: [
      "Several components, scales, layers, or relationships need to be organized",
      "Technical material needs to be translated into a clear visual scene",
      "Custom modeling, materials, lighting, or diagram-like structure is expected",
      "Some visual decisions will be resolved through discussion and review",
    ],
  },
  {
    key: "advanced",
    title: "Advanced / high concept",
    summary:
      "Best for projects where the core visual approach is not yet obvious and significant concept development is needed.",
    items: [
      "Complex optics, nanotechnology, engineering, or hardware systems must be simplified visually",
      "Multiple visual directions are possible and need to be explored",
      "Significant custom modeling, technical abstraction, or scene construction is likely",
      "More review is needed to balance accuracy, clarity, and visual impact",
    ],
  },
];

const QUOTE_USAGE = STUDIO_USAGE;

const LICENSE_GUIDE = [
  {
    key: "academic",
    title: "Academic & Institutional",
    summary:
      "For journal publications, conference materials, teaching, university or laboratory websites, research news releases, and unpaid institutional communications directly relating to the research.",
    includes: [
      "Journal publications and research articles",
      "Journal cover submissions and selected covers",
      "Theses, dissertations, and teaching materials",
      "Academic grants, conference posters, and presentations",
      "University, laboratory, and research-group websites",
      "Institutional research news articles and press releases",
      "Unpaid communications that directly promote or explain the research",
    ],
    note:
      "A university posting the completed image on its research news page to explain the associated study is generally Academic & Institutional use. It does not include paid advertising, commercial product marketing, corporate sales materials, investor campaigns, merchandise, fundraising campaigns, or unrelated promotional use.",
  },
  {
    key: "commercial",
    title: "Organizational & Promotional",
    summary:
      "For unpaid communication that promotes or represents an organization, technology, service, product, research group, or employer outside a specific publication context.",
    includes: [
      "Company or institutional websites",
      "Organic LinkedIn and social-media posts",
      "Press releases",
      "Product pages",
      "Brochures and newsletters",
      "Recruitment and employer-branding material",
      "Ongoing brand or technology marketing",
    ],
    note:
      "This applies when the original Axivion Studio artwork is separated from its publication context and reused as a broader promotional asset. It does not include paid advertising, sponsored content, fundraising campaigns, large trade-show displays, or merchandise.",
  },
  {
    key: "extended",
    title: "Campaign, Fundraising & Large-Scale",
    summary:
      "For high-value, paid, investor-facing, fundraising, large-format, sponsored, or coordinated campaign use.",
    includes: [
      "Paid digital or print advertising",
      "Sponsored social-media posts",
      "Investor and fundraising presentations",
      "Product-launch campaigns",
      "Trade-show booths and large event displays",
      "Keynote backdrops",
      "Billboards and out-of-home advertising",
      "Coordinated multi-channel campaigns",
    ],
    note:
      "Choose this tier when the visual supports a broader campaign, paid placement, investor-facing communication, or large-format promotional environment.",
  },
];

const QUOTE_TIMELINE = STUDIO_TIMELINES;

export default function StudioProjectGuide() {
  const [quotePackage, setQuotePackage] = useState("custom");
  const [quoteComplexity, setQuoteComplexity] = useState("technical");
  const [quoteUsage, setQuoteUsage] = useState("academic");
  const [quoteTimeline, setQuoteTimeline] = useState("standard");
  const [licenseDialogOpen, setLicenseDialogOpen] = useState(false);
  const [complexityDialogOpen, setComplexityDialogOpen] = useState(false);
  const [packageDialogKey, setPackageDialogKey] = useState(null);
  const [scopeRecommendation, setScopeRecommendation] = useState("");
  const licenseDialogRef = useRef(null);
  const licenseCloseRef = useRef(null);
  const licenseInfoButtonRef = useRef(null);
  const complexityDialogRef = useRef(null);
  const complexityCloseRef = useRef(null);
  const complexityInfoButtonRef = useRef(null);
  const packageDialogRef = useRef(null);
  const packageDialogScrollRef = useRef(null);
  const packageCloseRef = useRef(null);
  const pageScrollPositionRef = useRef(0);
  const packageInfoButtonRefs = useRef({});

  const selectedUsageGuide = useMemo(
    () => LICENSE_GUIDE.find((item) => item.key === quoteUsage) || LICENSE_GUIDE[0],
    [quoteUsage]
  );
  const selectedComplexityGuide = useMemo(
    () => COMPLEXITY_GUIDE.find((item) => item.key === quoteComplexity) || COMPLEXITY_GUIDE[1],
    [quoteComplexity]
  );

  const selectedQuotePackage = useMemo(
    () => QUOTE_PACKAGES.find((item) => item.key === quotePackage) || QUOTE_PACKAGES[1],
    [quotePackage]
  );

  const selectedPackageDetails = useMemo(
    () => PACKAGES.find((item) => item.key === packageDialogKey) || null,
    [packageDialogKey]
  );

  const quoteEstimate = useMemo(() => {
    const selectedPackage = PACKAGES.find((item) => item.key === selectedQuotePackage.key) || PACKAGES[1];
    const estimate = calculateStudioEstimate({
      packageOption: selectedPackage,
      complexityKey: quoteComplexity,
      usageKey: quoteUsage,
      timelineKey: quoteTimeline,
    });

    return {
      ...estimate,
      label: selectedQuotePackage.label,
      timeline: estimate.timeline.label,
    };
  }, [selectedQuotePackage, quoteComplexity, quoteUsage, quoteTimeline]);

  const handleQuotePackageChange = (nextPackage) => {
    if (nextPackage === "refinement" && quoteComplexity !== "simple") {
      setQuotePackage("custom");
      setScopeRecommendation(
        "This scope requires new concept or scene development and is better suited to the Custom Scientific Visual package."
      );
      return;
    }
    setQuotePackage(nextPackage);
    setScopeRecommendation("");
  };

  const handleComplexityChange = (nextComplexity) => {
    setQuoteComplexity(nextComplexity);
    if (quotePackage === "refinement" && nextComplexity !== "simple") {
      setQuotePackage("custom");
      setScopeRecommendation(
        "This scope requires new concept or scene development and is better suited to the Custom Scientific Visual package."
      );
      return;
    }
    setScopeRecommendation("");
  };

  const handlePackageAction = (packageKey) => {
    setQuotePackage(packageKey);
    if (packageKey === "refinement") setQuoteComplexity("simple");
    setScopeRecommendation("");
    window.requestAnimationFrame(() => scrollToId("quote"));
  };

  const estimateEmail = 'mailto:contact@axivionstudio.com?subject=' + encodeURIComponent('Axivion Studio project discussion') + '&body=' + encodeURIComponent('I would like to discuss a scientific visual.\n\nPackage: ' + selectedQuotePackage.label + '\nComplexity: ' + quoteComplexity + '\nTimeline: ' + quoteTimeline + '\nUse rights: ' + quoteUsage + '\nPlanning estimate: ' + quoteEstimate.range + '\n\nProject context:\n');

  const scrollToId = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    const top = section.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

    window.scrollTo({ top, behavior: "smooth" });
  };
  useEffect(() => {
    if (!licenseDialogOpen) return undefined;

    licenseCloseRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setLicenseDialogOpen(false);
        licenseInfoButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !licenseDialogRef.current) return;

      const focusable = licenseDialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [licenseDialogOpen]);

  useEffect(() => {
    if (!complexityDialogOpen) return undefined;

    complexityCloseRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setComplexityDialogOpen(false);
        complexityInfoButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !complexityDialogRef.current) return;

      const focusable = complexityDialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [complexityDialogOpen]);

  const closePackageDialog = () => {
    const closingKey = packageDialogKey;
    setPackageDialogKey(null);
    window.requestAnimationFrame(() => packageInfoButtonRefs.current[closingKey]?.focus({ preventScroll: true }));
  };

  useEffect(() => {
    if (!packageDialogKey) return undefined;

    if (packageDialogScrollRef.current) packageDialogScrollRef.current.scrollTop = 0;
    window.requestAnimationFrame(() => {
      if (packageDialogScrollRef.current) packageDialogScrollRef.current.scrollTop = 0;
      packageCloseRef.current?.focus();
    });

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        const closingKey = packageDialogKey;
        setPackageDialogKey(null);
        window.requestAnimationFrame(() => packageInfoButtonRefs.current[closingKey]?.focus({ preventScroll: true }));
        return;
      }

      if (event.key !== "Tab" || !packageDialogRef.current) return;
      const focusable = packageDialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [packageDialogKey]);
  useEffect(() => {
    const dialogOpen = licenseDialogOpen || complexityDialogOpen || Boolean(packageDialogKey);
    if (!dialogOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previousOverscrollBehavior = document.body.style.overscrollBehavior;
    pageScrollPositionRef.current = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.overscrollBehavior = previousOverscrollBehavior;
      window.scrollTo({ top: pageScrollPositionRef.current, left: 0, behavior: "auto" });
    };
  }, [licenseDialogOpen, complexityDialogOpen, packageDialogKey]);

  const closeLicenseDialog = () => {
    setLicenseDialogOpen(false);
    licenseInfoButtonRef.current?.focus();
  };

  const closeComplexityDialog = () => {
    setComplexityDialogOpen(false);
    complexityInfoButtonRef.current?.focus();
  };


  return <StudioFrame title="PROJECT GUIDE" backTo="/" showPublicNav={false}>
    <main className="relative mx-auto max-w-7xl pt-32">
      <section className="px-6 pb-6">
        <p className="text-sm uppercase tracking-widest text-emerald-300">Axivion Studio</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Project guide</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">Package details and a planning estimate for our discussion. Your written quote confirms the final scope, deliverables, timeline, and usage rights.</p>
      </section>
        <section id="pricing" className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-sm uppercase tracking-widest" style={{ color: ACCENT }}>
                Services
              </div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Project Packages</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/70">
              Straightforward <strong className="font-semibold text-white/90">starting budgets</strong> for scientific visualization projects. Prices are listed in CAD. Final quotes depend on scientific complexity, reference and asset quality, intended usage, licensing, deliverables, and timeline.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 items-start gap-4 md:grid-cols-2 xl:grid-cols-3 xl:items-stretch">
            {PACKAGES.map((pkg) => (
              <motion.article
                key={pkg.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45 }}
                className={`studio-package-card flex flex-col rounded-3xl border p-6 transition xl:h-full hover:-translate-y-0.5 md:last:col-span-2 xl:last:col-span-1 ${pkg.badge === "Most requested" ? "studio-package-card-featured shadow-2xl shadow-emerald-950/20" : "studio-package-card-neutral"}`}
              >
                <div className="flex flex-col items-start gap-3 min-[900px]:flex-row min-[900px]:justify-between min-[900px]:gap-4">
                  <h3 className="min-w-0 text-xl font-semibold leading-tight">{pkg.name}</h3>
                  <span className={getPackageBadgeClassName(pkg.badge) + " inline-flex h-7 w-max max-w-full shrink-0 items-center justify-center whitespace-nowrap rounded-full px-4 text-center text-xs font-medium"}>
                    {pkg.badge}
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium leading-6 text-emerald-100">{pkg.distinction}</p>
                <div className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/58">Starting at</div>
                <div className="mt-1 text-3xl font-semibold tracking-tight">{pkg.priceLabel}</div>
                <p className="mt-3 text-sm leading-6 text-white/72">{pkg.description}</p>
                <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] gap-3 text-sm">
                  <div className="rounded-2xl border border-white/10 bg-black/25 p-3">
                    <div className="text-white/60">Best for</div>
                    <div className="mt-1 font-medium text-white/85">{pkg.bestForShort}</div>
                  </div>
                  <div className="min-w-[116px] rounded-2xl border border-white/10 bg-black/25 p-3">
                    <div className="flex items-center gap-1.5 text-white/60">
                      <Clock size={14} /> Timeline
                    </div>
                    <div className="mt-1 font-medium text-white/85">{pkg.timeline}</div>
                  </div>
                </div>
                <dl className="mt-4 grid grid-cols-1 gap-2 text-xs sm:grid-cols-3">
                  {pkg.facts.map((fact) => (
                    <div key={fact.label} className="flex min-h-[68px] flex-col justify-center rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2.5">
                      <dt className="text-white/55">{fact.label}</dt>
                      <dd className="mt-1 font-medium leading-5 text-white/85">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="mt-5 space-y-2.5 text-sm text-white/76">
                  {pkg.includes.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: ACCENT }} />
                      <span className={/final still|related final/i.test(item) ? "font-medium text-white" : ""}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-9 flex items-center gap-3 border-t border-white/10 pt-5 xl:mt-auto xl:pt-6">
                  <button
                    ref={(node) => { packageInfoButtonRefs.current[pkg.key] = node; }}
                    type="button"
                    aria-haspopup="dialog"
                    aria-controls="studio-package-dialog"
                    aria-label={`View full ${pkg.name} package details`}
                    onClick={() => setPackageDialogKey(pkg.key)}
                    className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-emerald-300/32 bg-emerald-300/[0.09] px-4 py-2.5 text-sm font-medium text-emerald-100 transition hover:border-emerald-300/55 hover:bg-emerald-300/[0.14]"
                  >
                    <Info size={16} className="shrink-0" aria-hidden="true" />
                    <span>Package details</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePackageAction(pkg.key)}
                    aria-label={`Select ${pkg.name} in the quote estimator`}
                    className="inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 bg-white/[0.035] px-3.5 py-2.5 text-sm font-medium text-white/75 transition hover:border-white/30 hover:text-white"
                  >
                    <span>Estimate</span> <Calculator size={14} className="shrink-0" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="quote" className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.22)] md:p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="studio-section-pill inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]">Quote Calculator</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">Estimate a starting range.</h2>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  Calculator results are planning estimates. Final pricing is confirmed in the written project quote.
                </p>
                <div className="studio-quote-summary mt-6 rounded-3xl border p-5">
                  <div className="flex items-center gap-2 text-sm uppercase tracking-widest text-white/58">
                    <Calculator size={16} /> Estimated range
                  </div>
                  <div className="mt-3 text-4xl font-semibold tracking-tight">
                    {quoteEstimate.range}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/72">
                    Based on {quoteEstimate.label} with {quoteEstimate.timeline.toLowerCase()}.
                  </p>
                  {scopeRecommendation && (
                    <p className="mt-3 rounded-2xl border border-emerald-300/22 bg-emerald-300/[0.08] px-3 py-2 text-sm leading-6 text-emerald-100">
                      {scopeRecommendation}
                    </p>
                  )}
                  {quoteTimeline === "rush" && (
                    <p className="mt-3 text-sm font-medium text-amber-100">Rush availability requires scope review.</p>
                  )}
                  <p className="mt-2 text-xs leading-5 text-white/65">
                    Estimates include the usage selected when the project is quoted. Expanding usage after approval may require the current applicable usage rate plus an additional $250 CAD update fee under the Terms of Service.
                  </p>
                  <a
                    href={estimateEmail}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium text-white"
                    style={{ borderColor: "rgba(52,211,153,0.55)", background: "rgba(52,211,153,0.16)" }}
                  >
                    Open email to discuss this estimate <SendHorizonal size={16} />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  ["Project type", quotePackage, handleQuotePackageChange, QUOTE_PACKAGES],
                  ["Timeline", quoteTimeline, setQuoteTimeline, QUOTE_TIMELINE],
                  ["Scientific complexity", quoteComplexity, handleComplexityChange, QUOTE_COMPLEXITY],
                  ["Use rights", quoteUsage, setQuoteUsage, QUOTE_USAGE],
                ].map(([label, value, setter, options]) => {
                  const selectId = `studio-quote-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
                  const isPackageSelect = label === "Project type";
                  const isTimelineSelect = label === "Timeline";
                  const isComplexitySelect = label === "Scientific complexity";
                  const isUsageSelect = label === "Use rights";

                  return (
                    <div key={label} className="studio-select-card rounded-2xl border p-4">
                      <div className="flex items-center justify-between gap-3">
                        <label htmlFor={selectId} className="block text-sm text-white/70">
                          {label}
                        </label>
                        {isComplexitySelect && (
                          <button
                            ref={complexityInfoButtonRef}
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded={complexityDialogOpen}
                            aria-controls="studio-complexity-dialog"
                            aria-label="Open scientific complexity explanation"
                            onClick={() => setComplexityDialogOpen(true)}
                            className="studio-info-button inline-flex h-8 w-8 items-center justify-center rounded-full border text-emerald-100 transition"
                          >
                            <Info size={15} aria-hidden="true" />
                          </button>
                        )}
                        {isUsageSelect && (
                          <button
                            ref={licenseInfoButtonRef}
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded={licenseDialogOpen}
                            aria-controls="studio-license-dialog"
                            aria-label="Open use rights explanation"
                            onClick={() => setLicenseDialogOpen(true)}
                            className="studio-info-button inline-flex h-8 w-8 items-center justify-center rounded-full border text-emerald-100 transition"
                          >
                            <Info size={15} aria-hidden="true" />
                          </button>
                        )}
                      </div>
                      <select
                        id={selectId}
                        value={value}
                        onChange={(event) => setter(event.target.value)}
                        className="studio-quote-select mt-3 w-full rounded-xl border px-3 py-3 pr-10 text-sm text-white outline-none focus:border-emerald-300/60"
                      >
                        {options.map((option) => (
                          <option key={option.key} value={option.key}>{option.label}</option>
                        ))}
                      </select>
                      {isPackageSelect && (
                        <p className="mt-3 text-xs leading-5 text-white/65">{selectedQuotePackage.scopeNote}</p>
                      )}
                      {isTimelineSelect && (
                        <p className="mt-3 text-xs leading-5 text-white/65">
                          {QUOTE_TIMELINE.find((item) => item.key === quoteTimeline)?.description}
                        </p>
                      )}
                      {isComplexitySelect && (
                        <p className="mt-3 text-xs leading-5 text-white/65">
                          {selectedComplexityGuide.summary}
                        </p>
                      )}
                      {isUsageSelect && (
                        <p className="mt-3 text-xs leading-5 text-white/65">
                          {selectedUsageGuide.summary}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

      <p className="px-6 pb-12 text-sm text-white/60">The estimate action opens your email app. It does not send a message automatically.</p>
    </main>
      {selectedPackageDetails && (
        <div
          className="studio-license-dialog-backdrop studio-package-dialog-backdrop fixed inset-0 z-[80] flex items-center justify-center"
          onPointerDown={(event) => { if (event.target === event.currentTarget) closePackageDialog(); }}
        >
          <div
            ref={packageDialogRef}
            id="studio-package-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="studio-package-dialog-title"
            className="studio-license-dialog studio-package-dialog-shell relative flex w-full max-w-3xl flex-col overflow-hidden rounded-[28px] border shadow-2xl"
          >
            <button
              ref={packageCloseRef}
              type="button"
              aria-label={`Close ${selectedPackageDetails.name} package details`}
              onClick={closePackageDialog}
              className="absolute right-3 top-3 z-20 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-300/[0.28] bg-[#07100d]/95 text-emerald-100 shadow-lg shadow-black/25 backdrop-blur transition hover:border-emerald-300/50 hover:bg-emerald-300/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 sm:right-4 sm:top-4"
            >
              <X size={18} aria-hidden="true" />
            </button>

            <div ref={packageDialogScrollRef} className="studio-package-dialog-scroll min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain p-4 sm:p-5">
              <div className="rounded-3xl border border-emerald-300/[0.14] bg-emerald-300/[0.045] p-4 pr-14 sm:p-5 sm:pr-16">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={getPackageBadgeClassName(selectedPackageDetails.badge) + " inline-flex h-7 w-max max-w-full items-center whitespace-nowrap rounded-full px-4 text-xs font-medium"}>{selectedPackageDetails.badge}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">Package details</span>
                  </div>
                  <h2 id="studio-package-dialog-title" className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {selectedPackageDetails.name}
                  </h2>
                  <p className="mt-1.5 text-sm font-medium leading-6 text-emerald-100">{selectedPackageDetails.distinction}</p>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">{selectedPackageDetails.description}</p>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-[1.1fr_1fr_repeat(3,minmax(0,1fr))]">
                  <div className="flex min-h-[72px] flex-col justify-center rounded-2xl border border-white/[0.09] bg-black/20 px-3 py-2.5">
                    <div className="text-xs leading-4 text-white/52">Starting budget</div>
                    <div className="mt-1 text-lg font-semibold leading-6 text-white">{selectedPackageDetails.priceLabel}</div>
                  </div>
                  <div className="flex min-h-[72px] flex-col justify-center rounded-2xl border border-white/[0.09] bg-black/20 px-3 py-2.5">
                    <div className="flex items-center gap-1.5 text-xs leading-4 text-white/52"><Clock size={13} aria-hidden="true" /> Timeline</div>
                    <div className="mt-1 text-sm font-medium leading-5 text-white/88">{selectedPackageDetails.timeline}</div>
                  </div>
                  {selectedPackageDetails.facts.map((fact) => (
                    <div key={fact.label} className="flex min-h-[72px] flex-col justify-center rounded-2xl last:col-span-2 sm:last:col-span-1 border border-white/[0.09] bg-black/20 px-3 py-2.5">
                      <div className="text-xs leading-4 text-white/50">{fact.label}</div>
                      <div className="mt-1 text-xs font-medium leading-5 text-white/85">{fact.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid items-start gap-4 lg:grid-cols-2">
                <section className="studio-license-category-card rounded-2xl border p-4 lg:col-span-2">
                  <div className="flex items-center gap-2 font-medium text-white"><Layers3 size={16} className="text-emerald-300" aria-hidden="true" /> Best for</div>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-white/70">{selectedPackageDetails.bestFor}</p>
                </section>
                <section className="studio-license-category-card rounded-2xl border p-4">
                  <div className="flex items-center gap-2 font-medium text-white"><CheckCircle2 size={16} className="text-emerald-300" aria-hidden="true" /> Included</div>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-white/70">
                    {selectedPackageDetails.includes.map((item) => <li key={item} className="flex items-start gap-2"><span className="mt-px text-emerald-300" aria-hidden="true">+</span><span>{item}</span></li>)}
                  </ul>
                </section>
                <section className="studio-license-category-card rounded-2xl border p-4">
                  <div className="flex items-center gap-2 font-medium text-white"><FileText size={16} className="text-emerald-300" aria-hidden="true" /> {selectedPackageDetails.boundaryHeading}</div>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-white/70">
                    {selectedPackageDetails.boundaries.map((item) => <li key={item} className="flex items-start gap-2"><span className="mt-px text-white/35" aria-hidden="true">-</span><span>{item}</span></li>)}
                  </ul>
                </section>
                {selectedPackageDetails.clarifications && (
                  <section className="rounded-2xl border border-emerald-300/[0.18] bg-emerald-300/[0.065] p-4 lg:col-span-2">
                    <div className="flex items-center gap-2 font-medium text-emerald-100"><Info size={16} aria-hidden="true" /> {selectedPackageDetails.clarificationHeading}</div>
                    <ul className="mt-3 grid gap-x-6 gap-y-2 text-sm leading-6 text-white/72 lg:grid-cols-2">
                      {selectedPackageDetails.clarifications.map((item) => <li key={item} className="flex items-start gap-2"><span className="mt-px text-emerald-300" aria-hidden="true">+</span><span>{item}</span></li>)}
                    </ul>
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>
      )}      {complexityDialogOpen && (
        <div
          className="studio-license-dialog-backdrop fixed inset-0 z-[80] flex items-end justify-center px-4 py-5 sm:items-center sm:p-6"
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) closeComplexityDialog();
          }}
        >
          <div
            ref={complexityDialogRef}
            id="studio-complexity-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="studio-complexity-dialog-title"
            aria-describedby="studio-complexity-dialog-intro"
            className="studio-license-dialog max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border p-5 shadow-2xl sm:p-6"
          >
            <div className="flex flex-col items-start gap-3 min-[900px]:flex-row min-[900px]:justify-between min-[900px]:gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-300/78">Scientific complexity</p>
                <h3 id="studio-complexity-dialog-title" className="mt-2 text-2xl font-semibold tracking-tight text-white">
                  Choosing the right complexity
                </h3>
                <p id="studio-complexity-dialog-intro" className="mt-3 max-w-2xl text-sm leading-7 text-white/66">
                  Complexity reflects how much creative and technical development is needed to accurately communicate your science. It is not a judgment of the research importance, scientific sophistication, work quality, or publication prestige. The final written quote confirms the actual scope and price.
                </p>
              </div>
              <button
                ref={complexityCloseRef}
                type="button"
                aria-label="Close scientific complexity explanation"
                onClick={closeComplexityDialog}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.045] text-white/80 transition hover:border-emerald-300/45 hover:text-white"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              {COMPLEXITY_GUIDE.map((level) => (
                <article key={level.key} className="studio-license-category-card rounded-2xl border p-4">
                  <h4 className="text-base font-semibold text-white">{level.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-white/62">{level.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-white/67">
                    {level.items.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <CheckCircle2 size={15} className="mt-1 shrink-0 text-emerald-300/85" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <p className="mt-5 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm leading-6 text-white/62">
              Still unsure? Choose the closest match. After reviewing your references, technical constraints, intended use, and timeline, Axivion Studio will confirm the final complexity and scope before work begins.
            </p>
          </div>
        </div>
      )}
      {licenseDialogOpen && (
        <div
          className="studio-license-dialog-backdrop fixed inset-0 z-[80] flex items-end justify-center px-4 py-5 sm:items-center sm:p-6"
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) closeLicenseDialog();
          }}
        >
          <div
            ref={licenseDialogRef}
            id="studio-license-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="studio-license-dialog-title"
            aria-describedby="studio-license-dialog-intro"
            className="studio-license-dialog max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[28px] border p-5 shadow-2xl sm:p-6"
          >
            <div className="flex flex-col items-start gap-3 min-[900px]:flex-row min-[900px]:justify-between min-[900px]:gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-300/78">Use rights</p>
                <h3 id="studio-license-dialog-title" className="mt-2 text-2xl font-semibold tracking-tight text-white">
                  Licence categories for final visuals
                </h3>
                <p id="studio-license-dialog-intro" className="mt-3 max-w-2xl text-sm leading-7 text-white/66">
                  Choose the category that matches the main intended use of the final visual. When several categories apply, the broader applicable category should be selected. The final written quote confirms the actual licence.
                </p>
              </div>
              <button
                ref={licenseCloseRef}
                type="button"
                aria-label="Close use rights explanation"
                onClick={closeLicenseDialog}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.045] text-white/80 transition hover:border-emerald-300/45 hover:text-white"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
              {LICENSE_GUIDE.map((category) => (
                <article key={category.key} className="studio-license-category-card rounded-2xl border p-4">
                  <h4 className="text-base font-semibold text-white">{category.title}</h4>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-white/67">
                    {category.includes.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <CheckCircle2 size={15} className="mt-1 shrink-0 text-emerald-300/85" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-5 text-white/55">{category.note}</p>
                </article>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/25 p-4">
              <h4 className="text-sm font-semibold text-white">Publication sharing versus promotional reuse</h4>
              <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                <div className="rounded-2xl border border-emerald-300/18 bg-emerald-300/[0.07] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/75">Publication-related sharing</p>
                  <p className="mt-2 text-sm leading-6 text-white/72">Sharing the complete journal cover to announce your paper.</p>
                </div>
                <div className="rounded-2xl border border-white/12 bg-white/[0.045] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/48">Promotional reuse</p>
                  <p className="mt-2 text-sm leading-6 text-white/72">Using the original artwork by itself as a permanent company marketing visual.</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-white/62">
                Example: Posting the complete published journal cover on LinkedIn to announce that your paper was selected is Academic & Institutional Use. Reusing the original artwork by itself as an ongoing company marketing image is Organizational & Promotional Use.
              </p>
              <p className="mt-3 text-sm leading-6 text-white/62">
                Posting the artwork with a link to the applicable paper, university research news page, or a message explaining the associated study is normally Academic & Institutional Use. Using the same artwork to advertise a product, service, company capability, or recruitment campaign is Organizational & Promotional Use.
              </p>
            </div>

            <p className="mt-5 text-sm leading-6 text-white/58">
              The Axivion Studio licence controls the final artwork delivered by Axivion Studio. It does not grant rights to third-party publisher branding, mastheads, typography, issue layouts, logos, or other publisher-owned material.
            </p>

            <Link
              to="/terms#licence-categories-and-examples"
              onClick={() => setLicenseDialogOpen(false)}
              className="mt-5 inline-flex text-sm font-medium text-white/80 underline decoration-white/30 underline-offset-4 transition hover:text-white"
            >
              View full licensing terms
            </Link>
          </div>
        </div>
      )}


  </StudioFrame>;
}
