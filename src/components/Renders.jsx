import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStudioPointerGlow } from "../hooks/useStudioPointerGlow";
import { useScrolledHeader } from "../hooks/useScrolledHeader";
import studioPackages from "../data/studioPackages.json";
import { calculateStudioEstimate, STUDIO_COMPLEXITIES, STUDIO_TIMELINES, STUDIO_USAGE } from "../data/studioQuote";
import { motion } from "framer-motion";
import {
  Calculator,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  Info,
  Layers3,
  Menu,
  Quote,
  SendHorizonal,
  X,
} from "lucide-react";

const ACCENT = "#34d399";
const CONTACT_ACCENT = ACCENT;
const IQC_ACCENT = "#A40C34";
const PORTFOLIO_ACCENT = "#C97A3A";
const AAAS_ACCENT = "#273591";
const PUBLIC = process.env.PUBLIC_URL || "";

const renderImg = (file) => `${PUBLIC}/${file}`;

const WORK_EXAMPLES = [
  {
    key: "phoenix-inside",
    icon: ImageIcon,
    title: "Inside Phoenix Figure Visual",
    tag: "Science Advances Cover",
    image: renderImg("NewWebPhotos/inside-phoenix-web.webp"),
    metadata: [
      { category: "Service", label: "Coordinated Visual Set" },
      { category: "Complexity", label: "Technical" },
      { category: "Usage", label: "Academic" },
      { category: "Delivery", label: "Standard" },
    ],
    bullets: [
      "Scientific visualization by Dejan Latkovic / Axivion Studio. Cover art credit: Science Advances, Vol. 12, Issue 21, May 22, 2026.",
      "Depicts a photon extractor in bulk diamond, visualizing photonic nanojet behavior around NV centers.",
      "Cover render credited on the AAAS Science Advances issue page.",
    ],
    links: [
      { label: "Issue", href: "https://www.science.org/toc/sciadv/12/21" },
      { label: "Paper", href: "https://www.science.org/doi/10.1126/sciadv.aea5936" },
    ],
  },
  {
    key: "phoenix-outside",
    icon: ImageIcon,
    title: "Outside Phoenix Figure Visual",
    tag: "Quantum Optics",
    image: renderImg("NewWebPhotos/outside-phoenix-web.webp"),
    metadata: [
      { category: "Service", label: "Coordinated Visual Set" },
      { category: "Complexity", label: "Technical" },
      { category: "Usage", label: "Academic" },
      { category: "Delivery", label: "Standard" },
    ],
    bullets: [
      "Companion visual for the Science Advances cover submission.",
      "Visualizes the exterior optical structure of the inverse-designed diamond nanostructure.",
      "Part of the render set commissioned by Behrooz Semnani for the photonic nanojets paper.",
    ],
    links: [
      { label: "Issue", href: "https://www.science.org/toc/sciadv/12/21" },
      { label: "Paper", href: "https://www.science.org/doi/10.1126/sciadv.aea5936" },
      {
        label: "IQC Feature",
        href: "https://uwaterloo.ca/institute-for-quantum-computing/news/new-nanoscale-diamond-structure-better-collects-and-controls",
      },
    ],
  },
  {
    key: "metasurface",
    icon: Layers3,
    title: "Metasurface Visualization",
    tag: "Nanophotonics",
    image: renderImg("AxivionStudioWorkExperiencePhoto.jpg"),
    metadata: [
      { category: "Service", label: "Custom Scientific Visual" },
      { category: "Complexity", label: "Technical" },
      { category: "Usage", label: "Academic" },
      { category: "Delivery", label: "Rush" },
    ],
    bullets: [
      "Visualization of a metasurface-stabilized chiral cavity designed to separate right- and left-handed optical spin states.",
      "The cavity allows the right-handed spin state to pass through while trapping the left-handed state so its energy can dissipate.",
      "Communicates the cavity geometry and spin-selective filtering mechanism for photonics research.",
    ],
  },
];

const getWorkPillClassName = ({ category, label }) => {
  const base = "studio-work-pill inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium leading-none";
  const tier = (() => {
    if (["Coordinated Visual Set", "Advanced", "Campaign, Fundraising & Large-Scale", "Rush"].includes(label)) return "gold";
    if (["Custom Scientific Visual", "Technical", "Organizational & Promotional", "Priority"].includes(label)) return "silver";
    return "basic";
  })();

  return `${base} studio-work-pill-${tier} studio-work-pill-${category.toLowerCase()}`;
};

const getPackageBadgeClassName = (badge) => {
  const finish =
    badge === "Multi-visual package"
      ? "gold"
      : badge === "Most requested"
        ? "silver"
        : "basic";

  return "studio-soft-pill studio-work-pill studio-work-pill-" + finish;
};
const WorkMetadataPills = ({ metadata }) => {
  if (!Array.isArray(metadata) || metadata.length === 0) return null;

  return (
    <div className="mt-3 flex flex-wrap gap-2" aria-label="Project metadata">
      {metadata.map((item) => (
        <span key={`${item.category}-${item.label}`} className={getWorkPillClassName(item)}>
          <span className="sr-only">{item.category}: </span>
          {item.label}
        </span>
      ))}
    </div>
  );
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
export const TERMS_GROUPS = [
  {
    title: "Scope and payment",
    items: [
      "You receive a written quote before work begins.",
      "Most projects begin with a 50% deposit.",
      "Final unwatermarked high-resolution files are delivered after final payment clears.",
    ],
  },
  {
    title: "Deliverables and revisions",
    items: [
      "Your quote lists exactly what files, formats, and revision rounds are included.",
      "A revision round is one consolidated set of feedback for a draft or milestone.",
      "Small corrections within the approved concept count as revisions; changing the core concept, replacing major structures, rebuilding the scene, or changing the intended use after approval is additional scope.",
    ],
  },
  {
    title: "Usage and ownership",
    items: [
      "Final usage rights are confirmed in the project quote and normally begin after required payment clears.",
      "Working files, source scenes, models, and editable assets are not included unless stated.",
      "Expanded use or additional formats can be quoted before work begins or approved later in writing. Source files require a separate agreement based on the project.",
    ],
  },
  {
    title: "Accuracy and confidentiality",
    items: [
      "Confidential and unpublished work can be handled privately.",
      "Portfolio and public-sharing permissions are agreed on in writing.",
      "The client confirms the final scientific or technical accuracy before publication.",
    ],
  },
];

const FAQ_ITEMS = [
  {
    question: "What files will I receive?",
    answer:
      "Your quote lists the final export files included. Typical deliverables are high-resolution PNG or JPEG files, with TIFF, MP4, transparent-background versions, alternate crops, or other formats added when agreed in the quote.",
  },
  {
    question: "Are Blender, CAD, or source files included?",
    answer:
      "Not by default. Working files, source scenes, models, textures, project folders, and editable assets are only included when specifically listed in the written quote. If requested later, source files require a separate agreement based on the project.",
  },
  {
    question: "What information do you need to begin?",
    answer:
      "Please share the project context, intended use, timeline, reference material, technical constraints, and any journal, proposal, website, presentation, or publication requirements.",
  },
  {
    question: "How do revision rounds work?",
    answer:
      "A revision round means one consolidated set of feedback. Small corrections within the approved concept count as revisions. Changing the core concept, replacing major structures, rebuilding the scene, or changing the intended use after approval is additional scope. Your quote states how many revision rounds are included for the project.",
  },
  {
    question: "Can confidential or embargoed projects be handled?",
    answer:
      "Yes. Confidential or unpublished projects can be handled privately when confidentiality, embargo, and portfolio-sharing expectations are agreed in writing before sensitive material is shared.",
  },
  {
    question: "How are usage rights selected?",
    answer:
      "Your quote confirms the approved uses for the final visual, such as academic publication, internal communication, websites, promotional material, or broader commercial use.",
  },
  {
    question: "Can usage rights be expanded later?",
    answer:
      "Usually, yes. Expanded use may require written approval, an updated licence, and the current applicable usage rate plus an additional $250 CAD update fee.",
  },
  {
    question: "Do you guarantee journal or cover acceptance?",
    answer:
      "No. Axivion Studio can design around journal specifications and cover requirements, but editorial selection, publication acceptance, funding, and other external outcomes are not guaranteed.",
  },
  {
    question: "What currencies and payment schedules are available?",
    answer:
      "Prices are quoted in CAD, with approximate USD guidance when useful. Most projects begin with a 50% deposit and the remaining balance is due before final delivery. Larger projects may use milestone payments.",
  },
  {
    question: "What happens if the project scope changes?",
    answer:
      "New concepts, additional visuals, new formats, major direction changes, or expanded usage may require an updated quote, fee, and timeline.",
  },
  {
    question: "Can journal-specific dimensions or submission requirements be accommodated?",
    answer:
      "Yes. Include the target dimensions, format, resolution, colour requirements, and submission specifications during scoping so they can be included in the quote.",
  },
  {
    question: "Is rush work available?",
    answer:
      "Rush work may be available depending on project scope and current schedule. Priority or accelerated timelines may carry an additional fee.",
  },
  {
    question: "What happens after I request a quote?",
    answer:
      "You will receive a reply requesting any missing project details. Once the scope is clear, Axivion Studio will provide a written quote outlining deliverables, pricing, revision rounds, timeline, payment schedule, and usage rights.",
  },
];
const PROCESS = [
  ["Scope", "Define the scientific concept, audience, references, deliverables, use rights, timeline, and payment structure."],
  ["Direction", "Translate the core technical message into a visual approach that is accurate, readable, and polished."],
  ["Build", "Model, compose, light, render, and refine the scene around the agreed scientific or technical focus."],
  ["Check-ins", "Share progress during active work so the visual stays aligned before major time is spent in the wrong direction."],
  ["Revisions", "Use included revision rounds for consolidated feedback on a draft or milestone."],
  ["Delivery", "Provide final agreed export files for publication, presentation, web, or proposal use."],
];

const TESTIMONIAL = {
  label: "Client perspective",
  name: "Behrooz Semnani, PhD",
  role: "R&D Team Leader, Flat Optics",
  organization: "imec",
  initials: "BS",
  image: `${renderImg("behrooz-semnani.avif")}?v=2`,
  linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7462984701742575617/",
  quote:
    "He quickly digests the scientific concept and develops a strong visual direction, so we usually converge on the best final image with only a limited amount of back-and-forth. Through discussion and a small number of focused revisions, Dejan transformed a complex scientific concept and rough visual direction into a final render that was both scientifically accurate and visually elegant. Even when working under tight timelines, he remains available, professional, and focused on delivering high-quality results.",
  fullQuote: [
    "I have had the pleasure of working with Dejan on several scientific visualization projects, with the most prominent being the cover image developed for our paper in Science Advances. Across these projects, Dejan consistently demonstrated a strong ability to understand complex scientific ideas and translate them into clear, accurate, and visually compelling images. His background in optics and quantum science is a major advantage, as it allows him to quickly grasp the technical concepts and identify the most important elements to communicate.",
    "What makes working with Dejan particularly easy is his friendly, flexible, and approachable manner. Communication with him is always smooth, and he is responsive whenever questions, changes, or new ideas arise. He quickly digests the scientific concept and develops a strong visual direction, so we usually converge on the best final image with only a limited amount of back-and-forth.",
    "The Science Advances project was the clearest example of these strengths. The work began with a complex scientific concept and only a rough visual direction. Through discussion and a small number of focused revisions, Dejan transformed it into a final render that was both scientifically accurate and visually elegant. The image was ultimately selected for the cover of Science Advances, reflecting both the quality of the work and its ability to communicate complex research in an accessible and engaging way.",
    "I have also been impressed by Dejanâ€™s reliability and commitment. Even when working under tight timelines, he remains available, professional, and focused on delivering high-quality results.",
    "I would gladly recommend Dejan to researchers, companies, and institutions looking for high-quality scientific visualization. He combines scientific understanding, artistic skill, excellent communication, and a highly collaborative approach.",
  ],
  isReady: true,
};

const ARTIST_QUOTE = {
  label: "Artist perspective",
  name: "Dejan Latkovic",
  role: "Scientific Visual Artist",
  image: renderImg("Dejan_Lat_Quotepicture.jpg"),
  quote:
    "Scientific visualization sits between technical accuracy and visual clarity. My background in optics, instrumentation, and nanotechnology helps me understand complex systems quickly, communicate with researchers directly, and turn technical ideas into visuals that are accurate, polished, and publication-ready.",
};

export default function Renders() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  const solidNav = useScrolledHeader();
  const heroRef = useRef(null);
  const { rootRef, rootStyle, updateRootPointer, updateLocalPointer } = useStudioPointerGlow();
  const [quotePackage, setQuotePackage] = useState("custom");
  const [quoteComplexity, setQuoteComplexity] = useState("technical");
  const [quoteUsage, setQuoteUsage] = useState("academic");
  const [quoteTimeline, setQuoteTimeline] = useState("standard");
  const [openFaqItems, setOpenFaqItems] = useState({});
  const [licenseDialogOpen, setLicenseDialogOpen] = useState(false);
  const [complexityDialogOpen, setComplexityDialogOpen] = useState(false);
  const [testimonialDialogOpen, setTestimonialDialogOpen] = useState(false);
  const [packageDialogKey, setPackageDialogKey] = useState(null);
  const [scopeRecommendation, setScopeRecommendation] = useState("");
  const licenseDialogRef = useRef(null);
  const licenseCloseRef = useRef(null);
  const licenseInfoButtonRef = useRef(null);
  const complexityDialogRef = useRef(null);
  const complexityCloseRef = useRef(null);
  const complexityInfoButtonRef = useRef(null);
  const testimonialDialogRef = useRef(null);
  const testimonialCloseRef = useRef(null);
  const testimonialButtonRef = useRef(null);
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

  const contactParams = new URLSearchParams({
    package: quotePackage,
    complexity: quoteComplexity,
    timeline: quoteTimeline,
    usage: quoteUsage,
    estimate: quoteEstimate.range,
    scope: selectedQuotePackage.scopeNote,
  }).toString();

  const scrollToId = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    const top = section.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

    window.scrollTo({ top, behavior: "smooth" });
  };
  const updateHeroMouse = (event) => updateLocalPointer(heroRef, event);
  const navItems = [
    { label: "Work", href: "#work", sectionId: "work" },
    { label: "Pricing", href: "#pricing", sectionId: "pricing" },
    { label: "Quote", href: "#quote", sectionId: "quote" },
    { label: "Process", href: "#process", sectionId: "process" },
    { label: "Terms", to: "/terms" },
  ];

  const handleSectionNav = (event, id) => {
    event.preventDefault();
    scrollToId(id);
    window.history.replaceState(null, "", `#${id}`);
    setNavOpen(false);
  };

  useEffect(() => {
    document.documentElement.classList.add("scrollbar-studio");
    return () => document.documentElement.classList.remove("scrollbar-studio");
  }, []);

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

  useEffect(() => {
    if (!testimonialDialogOpen) return undefined;

    testimonialCloseRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setTestimonialDialogOpen(false);
        testimonialButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !testimonialDialogRef.current) return;

      const focusable = testimonialDialogRef.current.querySelectorAll(
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
  }, [testimonialDialogOpen]);

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
    const dialogOpen = licenseDialogOpen || complexityDialogOpen || testimonialDialogOpen || Boolean(packageDialogKey);
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
  }, [licenseDialogOpen, complexityDialogOpen, testimonialDialogOpen, packageDialogKey]);

  const closeLicenseDialog = () => {
    setLicenseDialogOpen(false);
    licenseInfoButtonRef.current?.focus();
  };

  const closeComplexityDialog = () => {
    setComplexityDialogOpen(false);
    complexityInfoButtonRef.current?.focus();
  };

  const closeTestimonialDialog = () => {
    setTestimonialDialogOpen(false);
    testimonialButtonRef.current?.focus();
  };

  return (
    <div
      ref={rootRef}
      className="studio-page min-h-screen w-full bg-black text-white"
      onPointerMove={updateRootPointer}
      style={rootStyle}
    >
      <div className="studio-ambient-layer pointer-events-none fixed inset-0 z-0" aria-hidden>
        <div className="studio-cursor-glow absolute inset-0" />
        <div className="studio-top-glow absolute inset-x-0 top-0 h-[70vh]" />
      </div>

                              <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solidNav || navOpen ? "border-b border-white/10 bg-black/80 backdrop-blur" : "border-b border-transparent bg-transparent"}`}>
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:h-16 lg:px-8 lg:py-0">
          <Link to="/" className="min-w-0 text-left" onClick={() => setNavOpen(false)}>
            <div className="truncate font-semibold tracking-widest leading-none">AXIVION STUDIO</div>
            <div className="mt-1 truncate text-[11px] uppercase tracking-widest text-white/45">
              Scientific Visualization
            </div>
          </Link>

          <nav className="hidden items-center gap-4 text-sm min-[1100px]:flex" aria-label="Axivion Studio navigation">
            {navItems.map((item) => item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className="whitespace-nowrap text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => handleSectionNav(event, item.sectionId)}
                className="whitespace-nowrap text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://uwaterloo.ca/institute-for-quantum-computing/contacts/dejan-latkovic-0"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-full px-4 py-2 font-medium text-white"
              style={{ border: "1.5px solid rgba(255,255,255,0.2)", transition: "border-color 0.25s ease, color 0.25s ease" }}
              onMouseEnter={(event) => { event.currentTarget.style.borderColor = IQC_ACCENT; event.currentTarget.style.color = IQC_ACCENT; }}
              onMouseLeave={(event) => { event.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; event.currentTarget.style.color = "white"; }}
            >
              IQC
            </a>
            <a
              href="https://www.science.org/toc/sciadv/12/21"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-full px-4 py-2 font-medium text-white"
              style={{ border: "1.5px solid rgba(255,255,255,0.2)", transition: "border-color 0.25s ease, color 0.25s ease" }}
              onMouseEnter={(event) => { event.currentTarget.style.borderColor = AAAS_ACCENT; event.currentTarget.style.color = AAAS_ACCENT; }}
              onMouseLeave={(event) => { event.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; event.currentTarget.style.color = "white"; }}
            >
              AAAS
            </a>

            <a
              href="https://dejanlat.github.io/PortfolioWebsite/"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-full px-4 py-2 font-medium text-white"
              style={{ border: "1.5px solid rgba(255,255,255,0.2)", transition: "border-color 0.25s ease, color 0.25s ease" }}
              onMouseEnter={(event) => { event.currentTarget.style.borderColor = PORTFOLIO_ACCENT; event.currentTarget.style.color = PORTFOLIO_ACCENT; }}
              onMouseLeave={(event) => { event.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; event.currentTarget.style.color = "white"; }}
            >
              Founder Portfolio
            </a>
            <Link
              to="/contact"
              className="whitespace-nowrap rounded-full px-4 py-2 font-medium text-white"
              style={{ border: "1.5px solid rgba(255,255,255,0.2)", transition: "border-color 0.25s ease, color 0.25s ease" }}
              onMouseEnter={(event) => { event.currentTarget.style.borderColor = CONTACT_ACCENT; event.currentTarget.style.color = CONTACT_ACCENT; }}
              onMouseLeave={(event) => { event.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; event.currentTarget.style.color = "white"; }}
            >
              Contact
            </Link>
          </nav>

          <button
            type="button"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-white/85 transition hover:border-white/30 hover:text-white min-[1100px]:hidden"
            onClick={() => setNavOpen((open) => !open)}
            aria-label={navOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={navOpen}
          >
            {navOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {navOpen && (
          <div className="border-t border-white/10 bg-black/95 px-4 py-3 shadow-2xl min-[1100px]:hidden">
            <div className="mx-auto grid max-w-7xl gap-1 text-sm">
              {navItems.map((item) => item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className="rounded-xl px-3 py-3 text-left text-white/80 transition hover:bg-white/10 hover:text-white"
                  onClick={() => setNavOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) => handleSectionNav(event, item.sectionId)}
                  className="rounded-xl px-3 py-3 text-left text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://uwaterloo.ca/institute-for-quantum-computing/contacts/dejan-latkovic-0"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl px-3 py-3 text-white/80 transition hover:bg-white/10 hover:text-white"
                onClick={() => setNavOpen(false)}
              >
                IQC
              </a>
              <a
                href="https://www.science.org/toc/sciadv/12/21"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl px-3 py-3 text-white/80 transition hover:bg-white/10 hover:text-white"
                onClick={() => setNavOpen(false)}
              >
                AAAS
              </a>
              <a
                href="https://dejanlat.github.io/PortfolioWebsite/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 rounded-xl border px-3 py-3 font-medium text-white transition hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.15)" }}
                onMouseEnter={(event) => { event.currentTarget.style.borderColor = PORTFOLIO_ACCENT; event.currentTarget.style.color = PORTFOLIO_ACCENT; }}
                onMouseLeave={(event) => { event.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; event.currentTarget.style.color = "white"; }}
                onClick={() => setNavOpen(false)}
              >
                Founder Portfolio
              </a>

              <Link
                to="/contact"
                className="mt-1 rounded-xl border border-white/15 px-3 py-3 font-medium text-white transition hover:border-white/30"
                onClick={() => setNavOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>

                  <section
        ref={heroRef}
        onPointerMove={updateHeroMouse}
        className="studio-welcome-hero relative flex min-h-[760px] h-[88vh] max-h-[980px] items-center"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={`${PUBLIC}/Axivion%20Photos/WebsiteLinkPhotoStudio.jpg`}
            alt="Emerald Axivion Studio prism mark"
            className="h-full w-full object-cover" style={{ objectPosition: "calc(50% + 100px) center" }}
          />
          <div className="studio-welcome-horizontal-overlay absolute inset-0" aria-hidden="true" />
          <div className="studio-welcome-vertical-falloff absolute inset-0" aria-hidden="true" />
        </div>

        <div className="studio-local-cursor-glow studio-welcome-local-glow pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-16"
        >
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs uppercase tracking-widest text-white/90 backdrop-blur-sm"
              style={{ borderColor: "rgba(52,211,153,0.35)", background: "rgba(5,10,13,0.48)" }}
            >
              Welcome to Axivion Studio
            </div>
            <h1 className="mt-4 text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-tight text-white">
              Axivion <span style={{ color: ACCENT }}>Studio</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base text-white/82 sm:text-lg">
              Scientific visualization for researchers, labs, and advanced hardware teams.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
              Publication-ready scientific and technical visuals built through direct collaboration with researchers, with a focus on accuracy, clarity, and polished visual communication.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium text-white"
                style={{ borderColor: "rgba(52,211,153,0.45)", background: "rgba(52,211,153,0.16)" }}
              >
                Request a Project <SendHorizonal size={16} aria-hidden="true" />
              </Link>
              <a
                href="https://www.science.org/toc/sciadv/12/21"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/15 px-5 py-3 text-sm font-medium text-white/85 backdrop-blur-sm hover:text-white"
              >
                View AAAS Issue <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
      <main className="studio-work-continuation relative w-full">
        <section id="work" className="mx-auto max-w-7xl px-6 pb-12 pt-12 md:pt-16 lg:pt-20">
          <div className="space-y-8">
            {WORK_EXAMPLES.map((section) => (
              <motion.div
                key={section.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl p-0 overflow-hidden"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(0,0,0,0.55)",
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(340px,0.65fr)] h-full">
                  <div className="min-h-[360px] lg:min-h-[560px]">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center justify-between gap-3">
                      <div
                        className="inline-flex items-center gap-2 text-xs rounded-full border px-2.5 py-1 text-white/80"
                        style={{ borderColor: "rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)" }}
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                        Visual Work
                      </div>
                      <span
                        className="inline-flex items-center gap-1.5 text-[11px] px-2 py-1 rounded-full border bg-white/5 text-white/85"
                        style={{ borderColor: "rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.06)" }}
                      >
                        <FileText size={12} /> {section.tag}
                      </span>
                    </div>

                    <div className="mt-2 text-xl font-semibold flex items-center gap-2">
                      {section.icon && <section.icon size={18} />}
                      <span>{section.title}</span>
                    </div>

                    <WorkMetadataPills metadata={section.metadata} />

                    <ul className="mt-3 space-y-2 text-sm">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span
                            aria-hidden
                            className="mt-1 inline-block h-2 w-2 rounded-full shrink-0"
                            style={{ backgroundColor: ACCENT }}
                          />
                          <span className="text-white/90">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {Array.isArray(section.links) && (
                      <div className="mt-5 flex flex-wrap gap-3">
                        {section.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-medium"
                            style={{ color: ACCENT }}
                          >
                            {link.label} <ExternalLink size={14} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
                  <Link
                    to={`/contact?${contactParams}`}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium text-white"
                    style={{ borderColor: "rgba(52,211,153,0.55)", background: "rgba(52,211,153,0.16)" }}
                  >
                    Request a Project <SendHorizonal size={16} />
                  </Link>
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
        <section id="trust" className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div className="text-sm uppercase tracking-widest" style={{ color: ACCENT }}>
              Trust and Perspective
            </div>
            <div className="max-w-xl text-sm leading-6 text-white/50">
              Client and artist perspectives on translating technical work into clear scientific visuals.
            </div>
          </div>

          <div className="space-y-6">

            {TESTIMONIAL.isReady && (
              <article className="studio-terms-summary-card relative overflow-hidden rounded-[2rem] border p-6 md:p-8 lg:p-8">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(36rem_18rem_at_12%_0%,rgba(52,211,153,0.12),transparent_62%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))]" aria-hidden="true" />
                <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(240px,320px)] lg:items-center">
                  <aside className="order-2 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <div className="aspect-square w-[min(100%,360px)] overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06] shadow-2xl shadow-black/25 lg:ml-auto lg:w-[min(100%,300px)]">
                      <img src={TESTIMONIAL.image} alt={`${TESTIMONIAL.name} portrait`} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div className="mt-5 lg:pl-1">
                      <div className="text-lg font-semibold text-white">{TESTIMONIAL.name}</div>
                      <div className="mt-1 text-xs uppercase tracking-widest text-white/48">{TESTIMONIAL.role}</div>
                      <div className="mt-1 text-sm text-white/55">{TESTIMONIAL.organization}</div>
                    </div>
                  </aside>

                  <div className="order-1 min-w-0">
                    <p className="inline-flex rounded-full border border-emerald-300/28 bg-emerald-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
                      {TESTIMONIAL.label}
                    </p>
                    <Quote size={42} className="mt-6 text-emerald-300/45" />
                    <p className="mt-5 max-w-4xl text-lg leading-8 text-white/76 md:text-xl md:leading-9">
                      {TESTIMONIAL.quote}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <button ref={testimonialButtonRef} type="button" aria-haspopup="dialog" aria-controls="studio-testimonial-dialog" onClick={() => setTestimonialDialogOpen(true)} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.055] px-4 py-2.5 text-sm font-medium text-white/85 transition hover:border-emerald-300/40 hover:bg-emerald-300/10 hover:text-white">
                        <Info size={16} aria-hidden="true" /> Read the full testimonial
                      </button>
                      <a href={TESTIMONIAL.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-white/65 underline decoration-white/25 underline-offset-4 transition hover:text-white">
                        View Behrooz's AAAS cover announcement <ExternalLink size={14} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            )}

            <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 md:p-8 lg:p-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(240px,320px)_minmax(0,1fr)] lg:items-center">
                <aside className="order-2 border-t border-white/10 pt-6 lg:order-1 lg:border-r lg:border-t-0 lg:pr-8 lg:pt-0">
                  <div
                    className="aspect-square w-[min(100%,360px)] overflow-hidden rounded-[2rem] border shadow-2xl shadow-black/25 lg:w-[min(100%,300px)]"
                    style={{ borderColor: "rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.06)" }}
                  >
                    <img
                      src={ARTIST_QUOTE.image}
                      alt={`${ARTIST_QUOTE.name} portrait`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-5">
                    <div className="text-lg font-semibold text-white">{ARTIST_QUOTE.name}</div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-white/38">{ARTIST_QUOTE.role}</div>
                  </div>
                </aside>

                <div className="order-1 min-w-0 lg:order-2">
                  <div className="text-xs uppercase tracking-[0.22em]" style={{ color: ACCENT }}>
                    {ARTIST_QUOTE.label}
                  </div>
                  <Quote size={42} className="mt-6 text-emerald-300/45" />
                  <p className="mt-5 max-w-4xl text-lg leading-8 text-white/76 md:text-xl md:leading-9">
                    {ARTIST_QUOTE.quote}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section id="process" className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.22)] md:p-8">
            <div className="text-sm uppercase tracking-widest" style={{ color: ACCENT }}>
              Process
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {PROCESS.map(([title, body], index) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <div className="text-sm text-white/45">{String(index + 1).padStart(2, "0")}</div>
                  <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="terms" className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.22)] md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <div className="text-sm uppercase tracking-widest" style={{ color: ACCENT }}>
                  Project Terms
                </div>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">Clear terms before we begin.</h2>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  A short summary of how Axivion Studio projects are scoped, reviewed, licensed, and delivered.
                </p>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
              {TERMS_GROUPS.map((group) => (
                <motion.article
                  key={group.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4 }}
                  className="flex h-full flex-col rounded-3xl border border-emerald-300/18 bg-white/[0.055] p-5 transition hover:border-emerald-300/28 hover:bg-white/[0.075] md:p-6"
                >
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-white/70">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="mt-1 shrink-0" style={{ color: ACCENT }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>

            <p className="mt-7 max-w-3xl text-sm leading-7 text-white/68">
              Every project is governed by a written quote, project scope, and the full Axivion Studio Terms of Service.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/terms"
                className="inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium text-white"
                style={{ borderColor: "rgba(52,211,153,0.48)", background: "rgba(52,211,153,0.14)" }}
              >
                Read full terms <FileText size={15} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition hover:border-emerald-300/45 hover:bg-emerald-300/10"
              >
                Request a project quote <SendHorizonal size={15} />
              </Link>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.22)] md:p-8">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-widest" style={{ color: ACCENT }}>
                FAQ
              </div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">Common project questions.</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Short answers for scoping, deliverables, revisions, confidentiality, and usage rights.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 lg:grid-cols-2">
              {FAQ_ITEMS.map((item, index) => {
                const answerId = `studio-faq-answer-${index}`;
                const questionId = `studio-faq-question-${index}`;
                const isOpen = Boolean(openFaqItems[index]);

                return (
                  <article
                    key={item.question}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-black/25 transition hover:border-emerald-300/25 hover:bg-white/[0.06]"
                  >
                    <button
                      id={questionId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenFaqItems((current) => ({ ...current, [index]: !current[index] }))}
                      className="flex w-full cursor-pointer items-start justify-between gap-4 p-4 text-left text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-emerald-300"
                    >
                      <span>{item.question}</span>
                      <span className="mt-0.5 shrink-0 text-lg leading-none text-emerald-300" aria-hidden="true">
                        {isOpen ? "-" : "+"}
                      </span>
                    </button>
                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      className={`studio-faq-answer ${isOpen ? "is-open" : ""}`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-4 pb-4 text-sm leading-7 text-white/68">{item.answer}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 pt-8 pb-14">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5">
            <div className="flex-1">
              <div className="text-sm uppercase tracking-widest" style={{ color: ACCENT }}>
                Axivion Studio
              </div>
              <div className="mt-2 text-2xl md:text-3xl font-semibold">
                Need a scientific visual for a paper, proposal, or cover submission?
              </div>
              <p className="mt-3 text-sm leading-6 text-white/65 max-w-3xl">
                Send the project context, intended use case, timeline, and any reference material. I can help
                turn a device, structure, mechanism, or experimental concept into a clean visual for research
                communication.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium text-white"
              style={{ borderColor: "rgba(52,211,153,0.55)", background: "rgba(52,211,153,0.18)" }}
            >
              Request a Project <SendHorizonal size={16} />
            </Link>
          </div>
        </section>
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
      )}      {testimonialDialogOpen && (
        <div className="studio-license-dialog-backdrop fixed inset-0 z-[80] flex items-end justify-center px-4 py-5 sm:items-center sm:p-6" onPointerDown={(event) => { if (event.target === event.currentTarget) closeTestimonialDialog(); }}>
          <div ref={testimonialDialogRef} id="studio-testimonial-dialog" role="dialog" aria-modal="true" aria-labelledby="studio-testimonial-dialog-title" aria-describedby="studio-testimonial-dialog-intro" className="studio-license-dialog max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border p-5 shadow-2xl sm:p-6">
            <div className="flex flex-col items-start gap-3 min-[900px]:flex-row min-[900px]:justify-between min-[900px]:gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-300/78">Client testimonial</p>
                <h3 id="studio-testimonial-dialog-title" className="mt-2 text-2xl font-semibold tracking-tight text-white">{TESTIMONIAL.name}</h3>
                <p id="studio-testimonial-dialog-intro" className="mt-2 text-sm leading-6 text-white/58">{TESTIMONIAL.role}, {TESTIMONIAL.organization}</p>
              </div>
              <button ref={testimonialCloseRef} type="button" aria-label="Close Behrooz Semnani testimonial" onClick={closeTestimonialDialog} className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.045] text-white/80 transition hover:border-emerald-300/45 hover:text-white">
                <X size={18} aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 space-y-4 rounded-3xl border border-white/10 bg-black/25 p-5 sm:p-6">
              {TESTIMONIAL.fullQuote.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-white/72 sm:text-base sm:leading-8">{paragraph}</p>
              ))}
            </div>
            <a href={TESTIMONIAL.linkedin} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/80 underline decoration-white/30 underline-offset-4 transition hover:text-white">
              View Behrooz's AAAS cover announcement <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      )}

      {complexityDialogOpen && (
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

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-white/60 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <div>Axivion Studio is the registered business name of Innovations Boutique Inc. <a href="https://dejanlat.github.io/PortfolioWebsite/" className="font-medium text-white/80 underline decoration-white/30 underline-offset-4 hover:text-white">Founder Portfolio</a> <span className="text-white/25">/</span> <Link to="/terms" className="font-medium text-white/80 underline decoration-white/30 underline-offset-4 hover:text-white">Terms of Service</Link> <span className="text-white/25">/</span> <Link to="/terms#privacy-and-website-contact" className="font-medium text-white/80 underline decoration-white/30 underline-offset-4 hover:text-white">Privacy</Link></div>
          <div>&copy; {new Date().getFullYear()} Innovations Boutique Inc. / Axivion Studio</div>
        </div>
      </footer>
    </div>
  );
}






