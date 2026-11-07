import React, { useEffect, useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import WebpImg from "./WebpImg";
import PortfolioExperience from "./PortfolioExperience";
import content from "../content/portfolio.json";
import { contentAsset } from "./ContentMedia";
import { usePointerGlow } from "../hooks/usePointerGlow";
import { useScrolledHeader } from "../hooks/useScrolledHeader";


import {
  Award, Shield, Users, Target,
  ArrowRight, ArrowUp, Cpu, MicroscopeIcon, Microscope,
  Menu, X, Quote, ExternalLink, Info,
} from "lucide-react";

// --- helpers ---
const MotionWebpImg = motion(WebpImg);
const PUBLIC = process.env.PUBLIC_URL || "";

// Build /public paths for a base filename (without extension)
const srcFor = (base) => ({
  webp: `${PUBLIC}/${base}${/\.[a-z0-9]+$/i.test(base) ? "" : ".webp"}`,
  png:  `${PUBLIC}/${base}${/\.[a-z0-9]+$/i.test(base) ? "" : ".png"}`,
});

// --- slide lists (put files in /public with these names) ---
const topSlides = content.hero.slides;
// --- engineering project slides (put both .webp and .png in /public) ---
const engProjectSlides = [  
  { base: "image1Engproject", title: "PRISM", description: "Test bench" },
  { base: "image4Engprojectcarosel", title: "Car Modding", description: "Rear shocks replacement" },
  { image: "NewWebPhotos/inside-phoenix-web.webp", title: "Scientific Visualization", description: "Inside Phoenix render" },
  { image: "NewWebPhotos/outside-phoenix-web.webp", title: "Scientific Visualization", description: "Outside Phoenix render" },
  { base: "image5Engprojectcarosel", title: "Spectrometer", description: "Reviving old spectrometer" },
  { base: "image3Engprojectcarosel", title: "Pygame", description: "Screenshot" },

  

];

export default function PortfolioWhite() {


  // tabs + carousels
  const ACCENT       = "#C97A3A";
  const ACCENT_SOFT  = "rgba(201, 122, 58, 0.13)";
  const PAGE_BG      = "#080e14";

  const { rootRef, rootStyle, onPointerMove } = usePointerGlow();
  const reducedMotion = useReducedMotion();
  const solidNav = useScrolledHeader();
  const [navOpen, setNavOpen] = useState(false);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [heroImageVisible, setHeroImageVisible] = useState(true);
  const [currentProjectImage, setCurrentProjectImage] = useState(0);
  const [vladanTestimonialOpen, setVladanTestimonialOpen] = useState(false);
  const vladanDialogRef = useRef(null);
  const vladanCloseRef = useRef(null);
  const vladanInfoButtonRef = useRef(null);

  useEffect(() => {
    if (!vladanTestimonialOpen) return undefined;

    vladanCloseRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setVladanTestimonialOpen(false);
        vladanInfoButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !vladanDialogRef.current) return;
      const focusable = vladanDialogRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
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
  }, [vladanTestimonialOpen]);

  useEffect(() => {
    document.documentElement.classList.add("scrollbar-orange");
    return () => document.documentElement.classList.remove("scrollbar-orange");
  }, []);

  // use the placeholder slide arrays
  const heroImages = useMemo(() => topSlides, []);
  const projectCarouselImages = useMemo(() => engProjectSlides, []);

  useEffect(() => {
    if (!content.hero.autoplay || reducedMotion || heroImages.length < 2) return undefined;
    heroImages.forEach((slide) => {
      const image = new Image();
      image.src = contentAsset(slide.fallback || slide.src);
    });
    let fadeTimer;
    const timer = window.setInterval(() => {
      setHeroImageVisible(false);
      fadeTimer = window.setTimeout(() => {
        setCurrentHeroImage((current) => (current + 1) % heroImages.length);
        setHeroImageVisible(true);
      }, 400);
    }, Math.max(3000, content.hero.intervalMs || 5500));
    return () => {
      window.clearInterval(timer);
      window.clearTimeout(fadeTimer);
    };
  }, [reducedMotion, heroImages.length]);



  const scrollToSection = (id) => {
    setNavOpen(false);
    const section = document.getElementById(id);
    if (!section) return;

    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    const top = section.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

    window.scrollTo({ top, behavior: "smooth" });
  };

  const pageLinks = [
    { label: "Coursework & Lab Training", action: () => scrollToSection("coursework") },
    ...(content.homeLab.enabled ? [{ label: "Home Lab", action: () => scrollToSection("home-lab") }] : []),
    { label: "Experience", action: () => scrollToSection("experience") },
    { label: "Testimonials", action: () => scrollToSection("testimonials") },
    { label: "Cover art", action: () => scrollToSection("reference-visualization") },
    { label: "Projects", action: () => scrollToSection("projects") },
    { label: "PRISM", to: "/prism" },
    { label: "Studio", href: `${PUBLIC}/studio` },
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


  return (
    
    <div
      className="g21 isolate relative min-h-screen w-full text-white"
      ref={rootRef}
      style={{ ...rootStyle, backgroundColor: PAGE_BG, "--glow-rgb": "201,122,58", "--glass-accent-rgb": "201,122,58" }}
      onPointerMove={onPointerMove}
    >
      {/* Header */}
      <header className={`site-glass-header fixed inset-x-0 top-0 z-50 ${solidNav || navOpen ? "is-scrolled" : ""}`}>
        <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="min-w-0 flex items-center gap-2 sm:gap-3">
            <div className="font-semibold tracking-widest text-white text-sm sm:text-base">DEJAN</div>
            <div className="text-white/50 text-sm sm:text-base">LATKOVIC</div>
          </div>
          <nav className="hidden min-[1100px]:flex items-center gap-3 text-sm overflow-x-auto no-scrollbar" aria-label="Primary">
            <button onClick={() => scrollToSection("experience")} className="whitespace-nowrap text-white/70 hover:text-white transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="whitespace-nowrap text-white/70 hover:text-white transition-colors">
              References
            </button>
            <button onClick={() => scrollToSection("reference-visualization")} className="whitespace-nowrap text-white/70 hover:text-white transition-colors">
              Cover art
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
              style={{ border: "1.5px solid rgba(255,255,255,0.2)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#A40C34"; e.currentTarget.style.color = "#A40C34"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "white"; }}
            >
              IQC
            </a>
            <Link
              to="/prism"
              className="whitespace-nowrap rounded-full px-4 py-2 font-medium text-white"
              style={{ border: "1.5px solid rgba(255,255,255,0.2)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#13c2b3"; e.currentTarget.style.color = "#13c2b3"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "white"; }}
            >
              PRISM
            </Link>
            <a
              href={`${PUBLIC}/studio`}
              className="whitespace-nowrap rounded-full px-4 py-2 font-medium text-white"
              style={{ border: "1.5px solid rgba(255,255,255,0.2)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#34d399"; e.currentTarget.style.color = "#34d399"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "white"; }}
            >
              Studio
            </a>
            <Link
              to="/portfolio/contact"
              className="whitespace-nowrap rounded-full px-4 py-2 font-medium text-white"
              style={{
                border: "1.5px solid rgba(255,255,255,0.2)"
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
            className="min-[1100px]:hidden inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-white"
            aria-expanded={navOpen}
            aria-controls="mobile-page-menu"
          >
            {navOpen ? <X size={18} /> : <Menu size={18} />}
            Pages
          </button>
        </div>
        {navOpen && (
          <div id="mobile-page-menu" className="site-glass-menu min-[1100px]:hidden border-t border-white/10">
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

      <div className="portfolio-content-layer relative z-10">
      <div className="page-cursor-glow pointer-events-none fixed inset-0" aria-hidden="true" />

      
     {/* TOP HERO */}
<section data-glow-boundary className="portfolio-main-hero relative min-h-[100svh]" style={{ backgroundColor: PAGE_BG }}>
  {/* Background image fades through black between slides. */}
  <div className="absolute inset-0 z-0 overflow-hidden bg-black">
    <img
      src={contentAsset(heroImages[currentHeroImage].fallback || heroImages[currentHeroImage].src)}
      alt={heroImages[currentHeroImage].alt || ""}
      className="absolute inset-0 h-full w-full object-cover"
      style={{ opacity: heroImageVisible ? 1 : 0, filter: `blur(${heroImages[currentHeroImage].blurPx}px)`, transform: "scale(1.02)", transition: reducedMotion ? "none" : "opacity 400ms ease-in-out" }}
    />

    <div className="absolute inset-0 pointer-events-none" style={{
      background: `linear-gradient(to top, rgba(8,14,20,0.8), transparent 45%), linear-gradient(to right, rgba(8,14,20,0.45), transparent 75%), rgba(0,0,0,${heroImages[currentHeroImage].overlayOpacity})`
    }} />

    {/* cursor glow */}
    <div className="absolute inset-0 pointer-events-none" style={{
      background: `radial-gradient(700px at 50% 40%, ${ACCENT_SOFT}, transparent 60%)`
    }} />
  </div>

  {/* foreground content */}
  <div className="relative z-10 flex min-h-[100svh] flex-col justify-center pb-36 pt-28 sm:pb-32">
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
          <MicroscopeIcon size={14} /> {content.hero.eyebrow}
        </div>

        <h1
          className="
            mt-4 font-semibold tracking-tight text-balance leading-[0.95]
            break-words hyphens-auto text-white
            text-[clamp(2.25rem,8vw,4.5rem)] md:text-[clamp(3rem,7vw,5.5rem)]
          "
        >
          {content.hero.name}
          <span className="block text-white/55">{content.hero.title}</span>
        </h1>

        <p className="mt-5 max-w-2xl text-lg font-medium leading-7 text-white/90 sm:text-xl">{content.hero.tagline}</p>
        <p className="mt-3 max-w-2xl leading-7 text-white/75">
          {content.hero.description}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
          <Link
            to="/prism"
            className="rounded-full px-6 py-3 text-sm font-medium text-white inline-flex items-center gap-2"
            style={{ border: "1.5px solid rgba(255,255,255,0.2)", transition: "border-color 0.25s ease, color 0.25s ease" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#13c2b3"; e.currentTarget.style.color = "#13c2b3"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "white"; }}
          >
            {content.hero.instrumentsLabel} <ArrowRight size={18} />
          </Link>
          <Link
            to="/portfolio/contact"
            className="portfolio-contact-button inline-flex items-center justify-center rounded-full border border-[#C97A3A]/60 bg-[#C97A3A]/20 px-6 py-3 text-sm font-medium text-[#ffd8b8] transition hover:bg-[#C97A3A]/30"
          >
            {content.hero.contactLabel}
          </Link>
        </div>
      </div>
    </motion.div>
  </div>
</section>


      {/* Highlights */}
      <section aria-label="Experience at a glance" className="relative -mt-8 z-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {content.highlights.map((h) => (
              <div
                key={h.title}
                title={h.title}
                className="group flex items-center gap-3 rounded-xl border border-white/10
                           bg-white/5 backdrop-blur-md px-5 py-3 hover:bg-white/10 transition"
              >
                <div className="h-9 w-9 rounded-full border border-white/15 grid place-items-center bg-white/5 shrink-0">
                  {React.createElement(({ cpu: Cpu, users: Users, target: Target, award: Award })[h.icon] || Target, { size: 18 })}
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

      {/* Reader views and consolidated experience */}
      <PortfolioExperience />

      {/* Approved recommendation excerpt */}
      <section id="testimonials" aria-labelledby="recommendation-heading" className="relative scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 pb-20 lg:pb-24">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-widest" style={{ color: ACCENT }}>Professional perspective</p>
            <h2 id="recommendation-heading" className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">Professional Recommendations</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">Perspectives on engineering ownership, technical communication, and translating complex research into clear outcomes.</p>
          </div>
          <div className="space-y-6">
          <motion.article id="reference-atomic"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/25 md:p-8"
          >
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{
                background: "radial-gradient(36rem 18rem at 12% 0%, rgba(201,122,58,0.15), transparent 62%), linear-gradient(135deg, rgba(255,255,255,0.055), rgba(255,255,255,0.018))",
              }}
            />

            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(240px,320px)] lg:items-center">
              <aside className="order-2 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <div className="aspect-square w-[min(100%,360px)] overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06] shadow-2xl shadow-black/25 lg:ml-auto lg:w-[min(100%,300px)]">
                  <img
                    src={`${PUBLIC}/Dan_LaCroix_Headshot.jpeg`}
                    alt="Daniel LaCroix"
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="mt-5 lg:pl-1">
                  <a
                    href="https://www.linkedin.com/in/daniel-lacroix-99810144/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg font-semibold text-white underline decoration-white/25 underline-offset-4 transition hover:decoration-white/70"
                  >
                    Daniel LaCroix <ExternalLink size={15} aria-hidden="true" />
                  </a>
                  <div className="mt-1 text-xs uppercase tracking-widest text-white/48">Staff Mechanical Engineer</div>
                  <div className="mt-1 text-sm text-white/55">Positioning Team</div>
                  <div className="mt-1 text-sm text-white/40">Fab2 · Internship supervisor</div>
                </div>
              </aside>

              <div className="order-1 min-w-0">
                <p
                  className="inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]"
                  style={{
                    borderColor: "rgba(201,122,58,0.32)",
                    backgroundColor: "rgba(201,122,58,0.11)",
                    color: "#e7a56f",
                  }}
                >
                  Professional recommendation
                </p>
                <Quote size={42} className="mt-6" style={{ color: "rgba(201,122,58,0.55)" }} aria-hidden="true" />
                <blockquote className="mt-5 max-w-4xl text-lg leading-8 text-white/76 md:text-xl md:leading-9">
                  Dejan proved himself to be a bright, self-motivated, and resourceful engineer. His ability to seek out and synthesize new technical information across mechanical engineering, optics, heat transfer, electronics, and software was especially strong. His technical communication and documentation were excellent, and he always maintained a positive outlook toward the problems he faced.
                </blockquote>
                <div className="mt-6 inline-flex items-center rounded-full border border-white/12 bg-white/[0.045] px-4 py-2.5 text-sm text-white/58">
                  Letter of recommendation available on request.
                </div>
              </div>
            </div>
          </motion.article>

          <motion.article id="reference-visualization"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="relative scroll-mt-24 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 md:p-8"
          >
            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[minmax(240px,320px)_minmax(0,1fr)] lg:items-center">
              <figure className="min-w-0 border-b border-white/10 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
                <a href={content.coverCredit.link} target="_blank" rel="noopener noreferrer"
                  aria-label={`View ${content.coverCredit.title} cover issue`}
                  className="mx-auto block max-w-[280px] lg:mx-0">
                  <img src={contentAsset(content.coverCredit.image)} alt={`${content.coverCredit.title} cover, ${content.coverCredit.date}`}
                    className="h-auto w-full rounded-sm shadow-2xl shadow-black/30" loading="lazy" />
                </a>
                <figcaption className="mt-5">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#e7a56f]">{content.coverCredit.type}</p>
                  <p className="mt-2 text-sm leading-6 text-white/80">{content.coverCredit.venue}</p>
                  <p className="mt-1 text-sm text-white/60">{content.coverCredit.attribution}</p>
                  <p className="mt-1 text-xs text-white/50">{content.coverCredit.date}</p>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                    {content.coverCredit.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 py-1 text-sm font-medium text-white/80 underline decoration-white/25 underline-offset-4 transition hover:text-white">
                        {link.label}<ExternalLink size={14} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </figcaption>
              </figure>

              <div className="min-w-0">
                <p
                  className="inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]"
                  style={{
                    borderColor: "rgba(201,122,58,0.32)",
                    backgroundColor: "rgba(201,122,58,0.11)",
                    color: "#e7a56f",
                  }}
                >
                  Research collaboration
                </p>
                <Quote size={42} className="mt-6" style={{ color: "rgba(201,122,58,0.55)" }} aria-hidden="true" />
                <blockquote className="mt-5 max-w-4xl text-lg leading-8 text-white/76 md:text-xl md:leading-9">
                  I have had the pleasure of working with Dejan on several scientific visualization projects, with the most prominent being the cover image developed for our paper in Science Advances. Across these projects, Dejan consistently demonstrated a strong ability to understand complex scientific ideas and translate them into clear, accurate, and visually compelling images. His background in optics and quantum science is a major advantage, as it allows him to quickly grasp the technical concepts and identify the most important elements to communicate.
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <img src={`${PUBLIC}/behrooz-semnani.avif?v=2`} alt="Behrooz Semnani"
                    className="h-12 w-12 shrink-0 rounded-full border border-white/15 object-cover" loading="lazy" />
                  <div>
                    <div className="text-base font-semibold text-white">Behrooz Semnani, PhD</div>
                    <div className="mt-1 text-xs leading-5 text-white/55">R&amp;D Team Leader, Flat Optics · imec</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          <motion.article id="reference-pirlitor"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/25 md:p-8"
          >
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{
                background: "radial-gradient(34rem 18rem at 88% 0%, rgba(201,122,58,0.13), transparent 64%), linear-gradient(135deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015))",
              }}
            />

            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(240px,320px)] lg:items-center">
              <aside className="order-2 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <div className="aspect-square w-[min(100%,360px)] overflow-hidden rounded-[2rem] border border-white/15 bg-white p-5 shadow-2xl shadow-black/25 lg:ml-auto lg:w-[min(100%,300px)]">
                  <img
                    src={`${PUBLIC}/pirlitor-squarelogo-1546834955391.png`}
                    alt="Pirlitor Machine & Tool Ltd. logo"
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="mt-5 lg:pl-1">
                  <div className="text-lg font-semibold text-white">Vladan Gavrilovic</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-white/48">Manager, Production Planning</div>
                  <div className="mt-1 text-sm text-white/55">Pirlitor Machine &amp; Tool Ltd.</div>
                </div>
              </aside>

              <div className="order-1 min-w-0">
                <p
                  className="inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]"
                  style={{
                    borderColor: "rgba(201,122,58,0.32)",
                    backgroundColor: "rgba(201,122,58,0.11)",
                    color: "#e7a56f",
                  }}
                >
                  Professional recommendation
                </p>
                <Quote size={42} className="mt-6" style={{ color: "rgba(201,122,58,0.55)" }} aria-hidden="true" />
                <blockquote className="mt-5 max-w-4xl text-lg leading-8 text-white/76 md:text-xl md:leading-9">
                  When provided with a high-level outline, Dejan proactively sets effective priorities, gathers the necessary information, and fulfills the task with minimal assistance. His autonomous work style enabled the rest of the team to concentrate on other critical tasks, assured of the quality of his work.
                </blockquote>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    ref={vladanInfoButtonRef}
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded={vladanTestimonialOpen}
                    aria-controls="vladan-testimonial-dialog"
                    onClick={() => setVladanTestimonialOpen(true)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.055] px-4 py-2.5 text-sm font-medium text-white/85 transition hover:border-[#C97A3A]/60 hover:bg-[#C97A3A]/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C97A3A]"
                  >
                    <Info size={16} aria-hidden="true" /> Read the full testimonial
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
          </div>
        </div>
      </section>

{/* Projects + full-width carousel */}
<section id="projects" className="relative scroll-mt-20">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
    <h2 className="text-4xl font-semibold tracking-tight text-white">Selected Projects</h2>

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
  {content.projects.map((project, index) => {
    const isFeatured = !!project.featured;
    const techs = Array.isArray(project.technologies) ? project.technologies : [];
    const projectUrl = project.slug ? `${PUBLIC}/${project.slug === "renders" ? "studio" : project.slug}` : project.demo || project.github || undefined;
    const ProjectCard = projectUrl ? motion.a : motion.article;

    return (
      <ProjectCard
        key={project.id ?? index}
        href={projectUrl}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: index * 0.06 }}
        whileHover={{ scale: 1.03 }}
        aria-label={projectUrl ? `Open project: ${project.title}` : undefined}
        className={`block w-full text-left rounded-3xl border p-6 transition-all duration-200 ease-out
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20
                    ${isFeatured ? "bg-white/10 border-white/20 hover:bg-white/15" : "bg-white/5 border-white/10 hover:bg-white/10"}
                    ${project.slug === "prism" ? "prism-card" : ""}
                    ${project.slug === "car-modding" ? "car-card" : ""}
                    ${project.slug === "renders" ? "renders-card" : ""}`}
      >
        {/* Breakthrough pill (accent color on hover via CSS) */}
        {isFeatured && (
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-3 breakthrough-pill accent">
            <Award size={14} /> Research instrument
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

        {/* Patent status : outlined pill (color comes from CSS .patent-pill for PRISM) */}
        {project.patentStatus && (
          <div
            className="mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs patent-pill"
            aria-label="Design disclosure status"
            title={project.patentStatus}
          >
            <Shield size={14} />
            <span>{project.patentStatus}</span>
          </div>
        )}

        {/* Technical specifications */}
        <div className="mt-4">
          <div className="text-sm font-medium text-white/80">Project details</div>
          <div className="mt-2 space-y-2">
            {(project.specifications ?? []).slice(0, 4).map((s, si) => (
              <div key={si} className="flex items-center gap-2 text-sm">
                <div className="size-4 rounded-full grid place-items-center checkmark accent">✓</div>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies chips : only BORDER changes color on hover */}
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
      </ProjectCard>
    );
  })}
</div>

  </div>
</section>


      <footer className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/45">{content.hero.title}</p>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-white">{content.hero.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">{content.footer.education}</p>
            <p className="text-sm leading-6 text-white/45">{content.footer.graduation}</p>
            <p className="mt-5 inline-flex max-w-full items-center gap-3 rounded-[22px] border border-white/15 bg-white/[0.05] px-4 py-3 text-sm leading-6 text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md sm:rounded-full">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C97A3A]" aria-hidden="true" />
              <span>{content.footer.availability}</span>
            </p>
            <nav aria-label="Portfolio contact links" className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
              <Link to={content.footer.contactUrl} className="inline-flex items-center gap-2 rounded-full border border-[#C97A3A]/45 bg-[#C97A3A]/10 px-4 py-2.5 font-medium text-white transition hover:border-[#C97A3A]/75 hover:bg-[#C97A3A]/20">
                {content.footer.contactLabel}<ArrowRight size={15} aria-hidden="true" />
              </Link>
              {content.footer.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="rounded text-white/65 transition hover:text-white">{link.label}</a>)}
            </nav>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/45">{content.footerSkills.title}</p>
            <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-6 sm:gap-x-8">
              {content.footerSkills.items.map((skill) => (
                <div key={skill.title} className="border-t border-white/10 pt-3">
                  <dt className="text-sm font-medium leading-6 text-white/85">{skill.title}</dt>
                  <dd className="mt-1 text-[13px] leading-6 text-white/55">{skill.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 text-xs text-white/45">
            <p>© {new Date().getFullYear()} {content.hero.name}</p>
            <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" })} className="inline-flex shrink-0 items-center gap-2 rounded py-1 text-white/60 transition hover:text-white">
              {content.footer.backToTopLabel}<ArrowUp size={14} aria-hidden="true" />
            </button>
          </div>
        </div>
      </footer>
      </div>
      {vladanTestimonialOpen && (
        <div
          className="fixed inset-0 z-[90] flex items-end justify-center bg-black/70 px-4 py-5 backdrop-blur-[14px] sm:items-center sm:p-6"
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) {
              setVladanTestimonialOpen(false);
              vladanInfoButtonRef.current?.focus();
            }
          }}
        >
          <div
            ref={vladanDialogRef}
            id="vladan-testimonial-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="vladan-testimonial-title"
            aria-describedby="vladan-testimonial-role"
            className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border border-white/15 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.032))] bg-[#080e14] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.46)] sm:p-6"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: "#e7a56f" }}>Professional recommendation</p>
                <h3 id="vladan-testimonial-title" className="mt-2 text-2xl font-semibold tracking-tight text-white">Vladan Gavrilovic</h3>
                <p id="vladan-testimonial-role" className="mt-2 text-sm leading-6 text-white/58">Manager, Production Planning · Pirlitor Machine &amp; Tool Ltd.</p>
              </div>
              <button
                ref={vladanCloseRef}
                type="button"
                aria-label="Close Vladan Gavrilovic testimonial"
                onClick={() => {
                  setVladanTestimonialOpen(false);
                  vladanInfoButtonRef.current?.focus();
                }}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.045] text-white/80 transition hover:border-[#C97A3A]/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C97A3A]"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 space-y-4 rounded-3xl border border-white/10 bg-black/25 p-5 sm:p-6">
              <p className="text-sm leading-7 text-white/72 sm:text-base sm:leading-8">Throughout his work term with us, Dejan has shown numerous strengths, with his capacity for independent work standing out. When provided with a high-level outline of tasks to be accomplished, Dejan proactively sets effective priorities, gathers the necessary information, and fulfills the task with minimal assistance. His autonomous work style has been greatly beneficial, enabling the rest of the team to concentrate on other critical tasks, assured of the quality of his work.</p>
              <p className="text-sm leading-7 text-white/72 sm:text-base sm:leading-8">Dejan's ability to quickly understand new concepts deserves special mention. Extensive training or in-depth explanations are not necessary for him. A broad summary is sufficient for him to master new skills. His critical-thinking ability is impressive, as he consistently brings unique insights and perspectives that show an understanding of the underlying principles. Whether mastering new skills or problem-solving, Dejan consistently demonstrates a logical and objective approach to analysis.</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
