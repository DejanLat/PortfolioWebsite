import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowLeft, ChevronLeft, ChevronRight, Lightbulb, Music2, Shield, Wrench } from "lucide-react";
import { useScrolledHeader } from "../hooks/useScrolledHeader";
import { usePointerGlow } from "../hooks/usePointerGlow";
import carContent from "../content/car.json";
import ContentMedia, { contentAsset } from "./ContentMedia";
import WebpImg from "./WebpImg";
import OverlayPageScrollbar from "./OverlayPageScrollbar";
import "./CarModding.css";

const CATEGORY_ICONS = { audio: Music2, lighting: Lightbulb, security: Shield, mechanical: Wrench };
const mediaSource = (item) => typeof item === "string" ? item : item?.src;

function ProjectPhoto({ photo, className = "", alt = "", eager = false }) {
  return <WebpImg webp={contentAsset(mediaSource(photo))} fallback={contentAsset(typeof photo === "string" ? undefined : photo?.fallback)} alt={alt} className={className} loading={eager ? "eager" : "lazy"} />;
}

export default function CarModding() {
  const solidNav = useScrolledHeader();
  const { rootRef, rootStyle, onPointerMove } = usePointerGlow();
  const railRef = useRef(null);
  const tabRefs = useRef([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const labels = carContent.timelineLabels;
  const entries = useMemo(() => [
    ...carContent.timeline.filter((entry) => entry.publicationStatus !== "hidden").sort((a, b) => a.sortOrder - b.sortOrder),
    ...(carContent.showPlaceholders === false ? [] : carContent.placeholders).filter((entry) => entry.publicationStatus !== "hidden").map((entry) => ({ ...entry, isPlaceholder: true })).sort((a, b) => a.sortOrder - b.sortOrder),
  ], []);
  useEffect(() => { setSelectedIndex((index) => Math.min(index, Math.max(0, entries.length - 1))); }, [entries.length]);
  const current = entries[selectedIndex];
  const Icon = CATEGORY_ICONS[current?.categoryKey] || Wrench;
  const media = [...(current?.photos || []), ...(current?.videos || [])].filter(Boolean);

  useEffect(() => {
    document.documentElement.classList.add("scrollbar-pink");
    return () => document.documentElement.classList.remove("scrollbar-pink");
  }, []);

  const selectProject = (index, focus = false) => {
    const next = Math.max(0, Math.min(entries.length - 1, index));
    setSelectedIndex(next);
    const rail = railRef.current;
    const tab = tabRefs.current[next];
    if (rail && tab) {
      const railBounds = rail.getBoundingClientRect();
      const tabBounds = tab.getBoundingClientRect();
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (tabBounds.left < railBounds.left + 8 || tabBounds.right > railBounds.right - 8) {
        rail.scrollTo({ left: rail.scrollLeft + tabBounds.left - railBounds.left - (rail.clientWidth - tabBounds.width) / 2, behavior: reduceMotion ? "auto" : "smooth" });
      }
      if (focus) tab.focus({ preventScroll: true });
    }
  };
  const onTimelineKeyDown = (event, index) => {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % entries.length;
    if (event.key === "ArrowLeft") next = (index - 1 + entries.length) % entries.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = entries.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    selectProject(next, true);
  };

  return (
    <div ref={rootRef} onPointerMove={onPointerMove} style={{ ...rootStyle, "--glow-rgb": "255,42,160", "--glass-accent-rgb": "255,42,160" }} className="car-page">
      <div className="car-content-layer relative z-10">
        <div className="page-cursor-glow pointer-events-none fixed inset-0" aria-hidden="true" />
        <OverlayPageScrollbar controls="car-page-content" />
        <header className={`site-glass-header fixed inset-x-0 top-0 z-50 ${solidNav ? "is-scrolled" : ""}`}>
          <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
            <Link to="/portfolio" className="car-focus inline-flex items-center gap-2 rounded text-sm text-white/85 hover:text-white"><ArrowLeft size={18} aria-hidden="true" /><span>Portfolio</span></Link>
            <div className="h-5 w-px bg-white/25" aria-hidden="true" />
            <span className="text-sm font-semibold tracking-widest">CAR MODDING</span>
            <span className="ml-auto hidden text-xs tracking-widest text-white/60 sm:block">BUILD NOTES</span>
          </div>
        </header>

        <main id="car-page-content">
          <section data-glow-boundary className="car-hero" aria-labelledby="car-heading">
            <div className="car-hero-media" aria-hidden="true">{carContent.hero.background?.enabled !== false && carContent.hero.background?.src && <ProjectPhoto photo={carContent.hero.background} className={`car-hero-photo${carContent.hero.background.mirrorHorizontally ? " is-mirrored" : ""}`} eager />}</div>
            <div className="car-hero-copy mx-auto w-full max-w-7xl px-6">
              <h1 id="car-heading" className="mt-4 max-w-3xl text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-tight">{carContent.hero.title} <span className="car-hero-highlight">{carContent.hero.titleHighlight}</span></h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">{carContent.hero.description}</p>
              <a href="#build-log" className="car-focus car-hero-link">Browse the build log <ArrowDown size={16} aria-hidden="true" /></a>
            </div>
          </section>

          <section id="build-log" aria-labelledby="build-log-heading" className="car-build-log mx-auto max-w-[1440px] px-5 pb-20 sm:px-8">
            <div className="car-timeline-heading">
              <div><p className="car-eyebrow">{labels.eyebrow}</p><h2 id="build-log-heading" className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{labels.title}</h2><p className="mt-2 text-sm leading-6 text-white/70">{labels.description}</p></div>
              {entries.length > 0 && <div className="car-timeline-controls"><span className="car-timeline-position" aria-live="polite">{selectedIndex + 1} / {entries.length}</span><button type="button" onClick={() => selectProject(selectedIndex - 1)} disabled={selectedIndex === 0} className="car-focus car-timeline-arrow" aria-label={labels.previous}><ChevronLeft size={20} aria-hidden="true" /></button><button type="button" onClick={() => selectProject(selectedIndex + 1)} disabled={selectedIndex === entries.length - 1} className="car-focus car-timeline-arrow" aria-label={labels.next}><ChevronRight size={20} aria-hidden="true" /></button></div>}
            </div>

            <div ref={railRef} className="car-timeline-scroll" role="tablist" aria-label="Car build timeline" aria-orientation="horizontal">
              <div className="car-timeline-track">
                {entries.map((entry, index) => {
                  const photo = entry.photos?.[0] || carContent.placeholderImage;
                  const selected = selectedIndex === index;
                  return (
                    <button type="button" key={entry.id} id={`car-tab-${entry.id}`} ref={(element) => { tabRefs.current[index] = element; }} role="tab" aria-selected={selected} aria-controls="car-project-panel" tabIndex={selected ? 0 : -1} onClick={() => selectProject(index)} onKeyDown={(event) => onTimelineKeyDown(event, index)} className={`car-focus car-timeline-tab ${selected ? "is-selected" : ""} ${entry.isPlaceholder ? "is-placeholder" : ""}`}>
                      <span className="car-timeline-date">{entry.date ? <time dateTime={entry.date}>{entry.dateLabel || entry.date}</time> : entry.dateLabel || "Date to add"}</span>
                      <span className="car-timeline-dot" aria-hidden="true" />
                      <span className="car-parallelogram"><span className="car-parallelogram-inner"><ProjectPhoto photo={photo} className="car-parallelogram-photo" />{entry.isPlaceholder && <span className="car-placeholder-photo-label">{labels.placeholderPhotoLabel}</span>}</span></span>
                      <span className="car-timeline-card-category">{entry.isPlaceholder ? labels.placeholderLabel : entry.category}</span>
                      <span className="car-timeline-card-title">{entry.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <p className="car-timeline-date-note">{labels.dateNote}</p>

            {current && <div id="car-project-panel" role="tabpanel" aria-labelledby={`car-tab-${current.id}`} tabIndex={0} className="car-focus site-glass-panel car-project-panel">
              <div className={`car-project-layout ${media.length ? "has-media" : ""}`}>
                <div className="car-project-copy">
                  <p className="car-project-category"><Icon size={14} aria-hidden="true" />{current.isPlaceholder ? labels.placeholderLabel : current.category}<span aria-hidden="true">·</span><span>{current.dateLabel || current.date || "Date to add"}</span></p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{current.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/80">{current.summary}</p>
                  {current.context && <p className="mt-3 text-sm leading-7 text-white/65">{current.context}</p>}
                  {current.workNotes?.length > 0 && <><h4 className="car-project-subheading">{labels.workHeading}</h4><ul className="mt-3 space-y-2 text-sm leading-6 text-white/80">{current.workNotes.map((note) => <li key={note} className="flex gap-3"><span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#ff78c1]" /><span>{note}</span></li>)}</ul></>}
                  {current.outcome && <><h4 className="car-project-subheading">{labels.resultHeading}</h4><p className="mt-3 text-sm leading-7 text-white/80">{current.outcome}</p></>}
                  {!current.isPlaceholder && current.publicationStatus === "draft" && <p className="mt-6 text-xs leading-5 text-white/50">More photos, dates, and notes to come.</p>}
                </div>
                {media.length > 0 && <div className="car-project-media">{media.map((item, index) => <ContentMedia key={`${current.id}-${index}`} item={item} />)}</div>}
                {current.isPlaceholder && media.length === 0 && <div className="car-project-empty"><span>Photos and video can go here.</span><span>This is a sample slot, ready for a real project.</span></div>}
              </div>
            </div>}
          </section>
        </main>
        <footer className="border-t border-white/15 bg-white/[0.025]"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-white/60"><Link to="/portfolio" className="car-focus rounded hover:text-white">Dejan Latkovic · Portfolio</Link><span>© {new Date().getFullYear()} Dejan Latkovic</span></div></footer>
      </div>
    </div>
  );
}
