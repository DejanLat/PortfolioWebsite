import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, ExternalLink,
  FileText, FlaskConical, Microscope, Play, ScanLine, Wrench,
} from "lucide-react";
import { useScrolledHeader } from "../hooks/useScrolledHeader";
import { useStudioPointerGlow } from "../hooks/useStudioPointerGlow";
import ContentMedia from "./ContentMedia";
import content from "../content/prism.json";

const PUBLIC = process.env.PUBLIC_URL || "";
const mediaPath = (src) => /^(https?:|data:|blob:)/i.test(src) ? src : `${PUBLIC}/${src.replace(/^\/+/, "")}`;
const WORK_ICONS = { wrench: Wrench, microscope: Microscope, scan: ScanLine };

function LabGallery({ gallery, labels }) {
  const [index, setIndex] = useState(0);
  const current = gallery[index];
  if (!current) return null;
  const changeImage = (step) => setIndex((currentIndex) => (currentIndex + step + gallery.length) % gallery.length);
  const onGalleryKey = (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    changeImage(event.key === "ArrowRight" ? 1 : -1);
  };

  return (
    <div role="region" aria-roledescription="carousel" aria-label={labels.galleryLabel} onKeyDown={onGalleryKey}>
      <figure className="overflow-hidden rounded-3xl border border-white/15 bg-black/50">
        <div className="relative aspect-[4/3]">
          <img src={mediaPath(current.src)} alt={current.alt} className="h-full w-full object-contain" loading="lazy" />
          {gallery.length > 1 && (
            <div className="absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between">
              <button type="button" onClick={() => changeImage(-1)} aria-label={labels.previousLabel} className="rounded-full border border-white/20 bg-black/65 p-3 text-white backdrop-blur hover:bg-black/90"><ChevronLeft size={19} aria-hidden="true" /></button>
              <button type="button" onClick={() => changeImage(1)} aria-label={labels.nextLabel} className="rounded-full border border-white/20 bg-black/65 p-3 text-white backdrop-blur hover:bg-black/90"><ChevronRight size={19} aria-hidden="true" /></button>
            </div>
          )}
        </div>
        <figcaption aria-live="polite" aria-atomic="true" className="flex min-h-[76px] items-center justify-between gap-4 border-t border-white/10 px-5 py-4 text-xs leading-6 text-white/65">
          <span>{current.caption}</span><span className="shrink-0 text-white/40">{index + 1} / {gallery.length}</span>
        </figcaption>
      </figure>
      {gallery.length > 1 && (
        <div className="mt-3 grid grid-cols-5 gap-2" aria-label={labels.chooseLabel}>
          {gallery.map((photo, photoIndex) => (
            <button key={photo.src} type="button" onClick={() => setIndex(photoIndex)} aria-label={photo.caption || photo.alt}
              aria-current={photoIndex === index ? "true" : undefined}
              className="aspect-[4/3] overflow-hidden rounded-xl border bg-black/50 transition hover:border-white/50"
              style={{ borderColor: photoIndex === index ? content.accent : "rgba(255,255,255,0.15)" }}>
              <img src={mediaPath(photo.src)} alt="" loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function PrismProject() {
  const solidNav = useScrolledHeader();
  const heroRef = useRef(null);
  const { rootRef, rootStyle, updateRootPointer, updateLocalPointer } = useStudioPointerGlow();
  const { hero, currentWork, configuration, homeLab, collaboration, footer } = content;
  const channel = homeLab.channel;

  useEffect(() => {
    document.documentElement.classList.add("scrollbar-teal");
    return () => document.documentElement.classList.remove("scrollbar-teal");
  }, []);

  return (
    <div ref={rootRef} onPointerMove={updateRootPointer}
      className="readability-page prism-readability-page min-h-screen w-full bg-black text-white"
      style={{ ...rootStyle, "--page-accent": content.accent }}>
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0" style={{ background: "radial-gradient(700px at var(--mx) var(--my), rgba(19,194,179,0.14), transparent 60%)" }} />
        <div className="absolute inset-x-0 top-0 h-[70vh]" style={{ background: "radial-gradient(60rem 30rem at 50% -10%, rgba(19,194,179,0.18), transparent 60%)" }} />
      </div>

      <div className="relative z-10">
        <header className={`site-glass-header fixed inset-x-0 top-0 z-50 ${solidNav ? "is-scrolled" : ""}`}>
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
              <Link to={content.header.backUrl} className="inline-flex shrink-0 items-center gap-1.5 text-xs text-white/80 hover:text-white sm:text-sm">
                <ArrowLeft size={16} aria-hidden="true" />{content.header.backLabel}
              </Link>
              <span className="h-4 w-px shrink-0 bg-white/20 sm:h-5" aria-hidden="true" />
              <span className="truncate text-[10px] font-semibold tracking-[0.12em] text-white sm:text-sm sm:tracking-widest">{content.brand}</span>
            </div>
            <Link to={content.header.contactUrl} className="shrink-0 rounded-full border border-[#13c2b3]/40 bg-[#13c2b3]/[0.08] px-4 py-2 text-xs font-medium text-[#a4eee6] hover:border-[#13c2b3]/70 sm:text-sm">{content.header.contactLabel}</Link>
          </div>
        </header>

        <main>
          <section ref={heroRef} onPointerMove={(event) => updateLocalPointer(heroRef, event)} className="relative flex min-h-[760px] w-full flex-col justify-center pb-64 pt-28 sm:min-h-[780px] sm:pb-52 lg:h-[92vh] lg:min-h-[740px] lg:max-h-[1100px]">
            <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
              <img src={mediaPath(hero.image)} alt="" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#062a2e]/45 via-[#052024]/55 to-black" />
              <div className="absolute inset-0" style={{ background: "radial-gradient(60rem 30rem at 50% 120%, rgba(19,194,179,0.18), transparent 60%), linear-gradient(to bottom, rgba(0,0,0,0.32), rgba(0,0,0,0.68))" }} />
            </div>
            <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true" style={{ background: "radial-gradient(700px at var(--hx) var(--hy), rgba(19,194,179,0.18), transparent 60%)" }} />
            <div className="relative z-20 mx-auto w-full max-w-5xl px-6 text-center">
              <p className="readability-glass-pill mx-auto inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.18em] sm:text-xs"><Microscope size={14} aria-hidden="true" />{hero.eyebrow}</p>
              <h1 className="mt-5 text-[clamp(2.1rem,7vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
                <span className="block text-white">{hero.title}</span>{" "}<span className="mt-1 block" style={{ color: content.accent }}>{hero.accentTitle}</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">{hero.description}</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a href={hero.exploreUrl} className="rounded-full px-6 py-3 text-sm font-medium hover:brightness-110" style={{ backgroundColor: content.accent, color: "#001b19" }}>{hero.exploreLabel}</a>
                <a href={channel.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-5 py-3 text-sm text-white/90 backdrop-blur hover:border-white/50"><Play size={15} aria-hidden="true" />{hero.videoLabel}</a>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-7 z-20">
              <div className="mx-auto grid max-w-5xl grid-cols-2 gap-2 px-6 md:grid-cols-4">
                {hero.proof.map((proof) => <div key={proof.label} className="readability-kpi-pill rounded-2xl border px-3 py-3 text-center backdrop-blur"><div className="text-lg font-semibold sm:text-xl">{proof.value}</div><div className="mt-1 text-[10px] leading-4 text-white/65 sm:text-xs">{proof.label}</div></div>)}
              </div>
              <p className="mx-auto mt-3 max-w-5xl px-6 text-center text-xs leading-5 text-white/65">{hero.specContext}</p>
            </div>
          </section>

          <nav aria-label={content.navigationLabel} className="sticky top-16 z-40 border-y border-white/10 site-glass-subnav">
            <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
              {content.navigation.map((section) => <a key={section.id} href={`#${section.id}`} className="readability-meta-pill shrink-0 rounded-full border px-4 py-2 text-xs text-white/80 transition hover:text-white sm:text-sm">{section.label}</a>)}
              <a href={channel.url} target="_blank" rel="noopener noreferrer" className="ml-auto hidden shrink-0 items-center gap-2 px-3 text-sm text-white/70 hover:text-white md:inline-flex"><Play size={14} aria-hidden="true" />{channel.name}<ExternalLink size={12} aria-hidden="true" /></a>
            </div>
          </nav>

          <section id="current-work" aria-labelledby="current-work-title" className="scroll-mt-36">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
              <div>
                <p className="text-xs uppercase tracking-[0.2em]" style={{ color: content.accent }}>{currentWork.eyebrow}</p>
                <h2 id="current-work-title" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{currentWork.title}</h2>
                <div className="mt-6 space-y-5 text-base leading-7 text-white/75">{currentWork.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {configuration.work.map((work) => {
                    const Icon = WORK_ICONS[work.icon] || Wrench;
                    return <div key={work.title} className="readability-surface-card rounded-2xl border p-4"><Icon size={19} style={{ color: content.accent }} aria-hidden="true" /><h3 className="mt-3 text-sm font-medium">{work.title}</h3></div>;
                  })}
                </div>
              </div>
              <LabGallery gallery={currentWork.gallery} labels={currentWork} />
            </div>
          </section>

          <section id="configuration" aria-labelledby="configuration-title" className="scroll-mt-36">
            <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 pb-20 lg:grid-cols-2 lg:gap-12 lg:pb-28">
              <div>
                <p className="text-xs uppercase tracking-[0.2em]" style={{ color: content.accent }}>{configuration.eyebrow}</p>
                <h2 id="configuration-title" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{configuration.title}</h2>
                <div className="mt-5 max-w-3xl space-y-4 text-base leading-7 text-white/75">
                  {configuration.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
              <Link to="/prism/lab-work" aria-labelledby="prism-documentation-title" className="readability-surface-card group relative flex min-h-[290px] flex-col justify-between overflow-hidden rounded-3xl border p-7 transition-colors hover:border-[#13c2b3]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#13c2b3] sm:p-9 lg:min-h-96">
                <img src={mediaPath("photos/prism/Rastor_Scanning_Experimentation_Line_Photo.PNG")} alt="" aria-hidden="true" loading="lazy" className="pointer-events-none absolute -inset-2 h-[calc(100%+1rem)] w-[calc(100%+1rem)] object-cover opacity-35 blur-[4px]" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />
                <div className="relative z-10 flex items-center justify-between gap-3">
                  <FileText size={24} strokeWidth={1.5} style={{ color: content.accent }} aria-hidden="true" />
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">{configuration.placeholderStatus}</span>
                </div>
                <div className="relative z-10">
                  <h3 id="prism-documentation-title" className="mt-4 flex items-center justify-between gap-3 text-xl font-semibold text-white/90">
                    {configuration.shieldTitle}<ArrowRight size={18} className="shrink-0 text-[#a4eee6]" aria-hidden="true" />
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{configuration.shieldText}</p>
                </div>
              </Link>
            </div>
          </section>

          <section id="home-lab" aria-labelledby="home-lab-title" className="scroll-mt-36">
            <div className="mx-auto max-w-7xl px-6 pb-20 lg:pb-28">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em]" style={{ color: content.accent }}>{homeLab.eyebrow}</p>
                  <h2 id="home-lab-title" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{homeLab.title}</h2>
                  <div className="mt-5 space-y-4 text-base leading-7 text-white/70">{homeLab.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                </div>
                <a href={channel.url} target="_blank" rel="noopener noreferrer" className="readability-surface-card group relative flex min-h-[290px] flex-col justify-between overflow-hidden rounded-3xl border p-7 sm:p-9 lg:min-h-96">
                  <img src={mediaPath("photos/portfolio/HomeLab_Photo.jpg")} alt="" aria-hidden="true" loading="lazy" className="pointer-events-none absolute -inset-2 h-[calc(100%+1rem)] w-[calc(100%+1rem)] object-cover opacity-35 blur-[4px]" />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />
                  <div className="relative z-10 flex items-center justify-between"><span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/25" style={{ color: content.accent }}><Play size={22} aria-hidden="true" /></span><ExternalLink size={18} className="text-white/40 group-hover:text-white" aria-hidden="true" /></div>
                  <div className="relative z-10 mt-7"><p className="text-[10px] uppercase tracking-[0.18em] text-white/70">{channel.eyebrow}</p><h3 className="mt-3 text-3xl font-semibold">{channel.name}</h3><p className="mt-3 text-sm leading-6 text-white/80">{channel.description}</p><span className="mt-5 inline-flex items-center gap-2 text-sm" style={{ color: content.accent }}>{channel.actionLabel}<ArrowRight size={15} aria-hidden="true" /></span></div>
                </a>
              </div>
              {(homeLab.photos.length > 0 || homeLab.videos.length > 0) && (
                <div className="mt-9 grid items-start gap-6 md:grid-cols-2">
                  {homeLab.photos.map((item, index) => <ContentMedia key={`photo-${item.src || index}`} item={{ ...item, type: "image" }} />)}
                  {homeLab.videos.map((item, index) => <ContentMedia key={`video-${item.url || item.src || index}`} item={item} />)}
                </div>
              )}
            </div>
          </section>

          <section id="collaborate" aria-labelledby="collaborate-title" className="scroll-mt-36">
            <div className="mx-auto max-w-7xl px-6 pb-20 lg:pb-28">
              <div className="readability-surface-card flex flex-col items-start gap-7 rounded-3xl border p-7 sm:p-10 lg:flex-row lg:items-center lg:gap-10">
                <div className="flex-1"><p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em]" style={{ color: content.accent }}><FlaskConical size={16} aria-hidden="true" />{collaboration.eyebrow}</p><h2 id="collaborate-title" className="mt-4 text-3xl font-semibold tracking-tight">{collaboration.title}</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">{collaboration.description}</p></div>
                <Link to={collaboration.actionUrl} className="inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-medium hover:brightness-110" style={{ backgroundColor: content.accent, color: "#001b19" }}>{collaboration.actionLabel}<ArrowRight size={16} aria-hidden="true" /></Link>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/15 bg-black/40">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-9 text-xs text-white/55 sm:flex-row">
            <span>{footer.project}</span><span>© {new Date().getFullYear()} {footer.brand}</span>
            <div className="flex items-center gap-4"><Link to={content.header.backUrl} className="hover:text-white">{footer.portfolioLabel}</Link><a href={channel.url} target="_blank" rel="noopener noreferrer" className="hover:text-white">{channel.name}</a><Link to={content.header.contactUrl} className="hover:text-white">{footer.contactLabel}</Link></div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export function PrismLabWork() {
  const { configuration } = content;
  const { rootRef, rootStyle, updateRootPointer } = useStudioPointerGlow();

  useEffect(() => {
    document.documentElement.classList.add("scrollbar-teal");
    return () => document.documentElement.classList.remove("scrollbar-teal");
  }, []);

  return (
    <main ref={rootRef} onPointerMove={updateRootPointer} style={{ ...rootStyle, "--page-accent": content.accent }} className="readability-page prism-readability-page relative min-h-screen overflow-hidden bg-black px-6 py-12 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[70vh]" aria-hidden="true" style={{ background: "radial-gradient(60rem 30rem at 50% -10%, rgba(19,194,179,0.18), transparent 60%)" }} />
      <div className="pointer-events-none absolute inset-0" aria-hidden="true" style={{ background: "radial-gradient(700px at var(--mx) var(--my), rgba(19,194,179,0.14), transparent 60%)" }} />
      <div className="relative mx-auto max-w-3xl">
        <Link to="/prism#configuration" className="inline-flex items-center gap-2 text-sm text-[#a4eee6] hover:underline">
          <ArrowLeft size={16} aria-hidden="true" />Back to PRISM
        </Link>
        <div className="readability-surface-card mt-12 rounded-3xl border p-6 sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: content.accent }}>{configuration.placeholderStatus}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{configuration.shieldTitle}</h1>
          <p className="mt-4 max-w-xl leading-7 text-white/70">{configuration.shieldText}</p>
        </div>
      </div>
    </main>
  );
}
