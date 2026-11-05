import React, { useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, GraduationCap, Youtube } from "lucide-react";
import WebpImg from "./WebpImg";
import ContentMedia, { contentAsset } from "./ContentMedia";
import PortfolioBenchGallery from "./PortfolioBenchGallery";
import content from "../content/portfolio.json";
import { COURSEWORK, PORTFOLIO_EXPERIENCE, PORTFOLIO_VIEWS } from "../data/portfolioExperience";

const PUBLIC = process.env.PUBLIC_URL || "";

function ExperienceImage({ experience }) {
  const [slide, setSlide] = useState(0);
  const gallery = experience.gallery;
  const current = gallery?.[slide];
  const base = current ? current.base : experience.imageBase;
  return (
    <div className="relative flex min-w-0 flex-col bg-black/20">
      <div className="relative min-h-[240px] flex-1 overflow-hidden lg:min-h-[300px]">
        {base ? (
          <WebpImg webp={`${PUBLIC}/${base}.webp`} fallback={`${PUBLIC}/${base}.png`}
            alt={current?.caption || experience.company} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <img src={contentAsset(current?.src || experience.image)} alt={current?.alt || current?.caption || experience.imageAlt || experience.company}
            className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: current?.imagePosition || experience.imagePosition || "center", objectFit: current?.imageFit || experience.imageFit || "cover" }} loading="lazy" />
        )}
      </div>
      {gallery && (
        <div className="border-t border-white/10 p-4">
          <p className="min-h-[2.5rem] text-xs leading-5 text-white/70" aria-live="polite">{current.caption}</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-white/50">{slide + 1} / {gallery.length}</span>
            <div className="flex gap-2">
              <button type="button" aria-label={`Previous ${experience.company} photo`} className="portfolio-gallery-button"
                onClick={() => setSlide((slide - 1 + gallery.length) % gallery.length)}><ChevronLeft size={18} /></button>
              <button type="button" aria-label={`Next ${experience.company} photo`} className="portfolio-gallery-button"
                onClick={() => setSlide((slide + 1) % gallery.length)}><ChevronRight size={18} /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function PortfolioExperience() {
  const [params, setParams] = useSearchParams();
  const tabRefs = useRef([]);
  const view = PORTFOLIO_VIEWS.find((item) => item.key === params.get("focus")) || PORTFOLIO_VIEWS[0];
  const selectView = (key) => {
    const next = new URLSearchParams(params);
    if (key === "overview") next.delete("focus"); else next.set("focus", key);
    setParams(next, { replace: true, preventScrollReset: true });
  };
  const onTabKeyDown = (event, index) => {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % PORTFOLIO_VIEWS.length;
    if (event.key === "ArrowLeft") next = (index - 1 + PORTFOLIO_VIEWS.length) % PORTFOLIO_VIEWS.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = PORTFOLIO_VIEWS.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    selectView(PORTFOLIO_VIEWS[next].key);
    tabRefs.current[next]?.focus();
  };
  return (
    <>
      <section id="experience" aria-labelledby="experience-heading" className="relative scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-[#e7a56f]">{content.experienceSection.eyebrow}</p>
          <h2 id="experience-heading" className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{content.experienceSection.heading}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-white/65">{content.experienceSection.intro}</p>
          <div role="tablist" aria-label="Explore engineering experience" className="mt-8 grid grid-cols-2 gap-2 lg:flex lg:flex-wrap">
            {PORTFOLIO_VIEWS.map((item, index) => (
              <button key={item.key} id={`focus-${item.key}`} role="tab" type="button"
                ref={(element) => { tabRefs.current[index] = element; }}
                aria-selected={view.key === item.key} aria-controls={`focus-panel-${item.key}`}
                tabIndex={view.key === item.key ? 0 : -1} onClick={() => selectView(item.key)} onKeyDown={(event) => onTabKeyDown(event, index)}
                className={`rounded-2xl border px-4 py-3 text-sm font-medium transition lg:rounded-full ${view.key === item.key ? "border-[#C97A3A]/60 bg-[#C97A3A]/15 text-[#f0bc91]" : "border-white/15 bg-white/[0.035] text-white/65 hover:border-white/35 hover:text-white"}`}>{item.label}</button>
            ))}
          </div>
          <div key={view.key} id={`focus-panel-${view.key}`} role="tabpanel" aria-labelledby={`focus-${view.key}`} tabIndex={0} className="site-glass-panel mt-8 rounded-[28px] border border-white/15 p-6 md:p-8">
            <h3 className="text-xl font-semibold md:text-2xl">{view.title}</h3>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-white/65">{view.summary}</p>
            <div className="mt-7 grid gap-6 md:grid-cols-3">
              {view.skills.map((skill) => (
                <div key={skill.title} className="border-t border-white/15 pt-4">
                  <h4 className="font-medium text-white/90">{skill.title}</h4>
                  <p className="mt-2 text-xs leading-5 text-[#e7a56f]">{skill.context}</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">{skill.text}</p>
                  {skill.href && (skill.href !== "#home-lab" || content.homeLab.enabled) && <a href={skill.href} className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-[#e7a56f] hover:text-white">{skill.linkLabel || "See the work"}<ArrowRight size={14} /></a>}
                </div>
              ))}
            </div>
          </div>

          <PortfolioBenchGallery />

          <div className="mt-12 space-y-6">
            {PORTFOLIO_EXPERIENCE.map((experience) => (
              <article key={experience.id} id={`experience-${experience.id}`} className="scroll-mt-24 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
                <div className="grid lg:grid-cols-[minmax(220px,0.8fr)_minmax(0,2fr)]">
                  <ExperienceImage experience={experience} />
                  <div className="min-w-0 p-6 md:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                      <p className="uppercase tracking-widest text-[#e7a56f]">{experience.category}</p>
                      <p className="text-white/55">{experience.period}</p>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight">{experience.role}</h3>
                    <p className="mt-1 text-base text-white/85">{experience.company}</p>
                    <p className="mt-2 text-xs leading-5 text-white/55">{experience.engagement}</p>
                    {experience.affiliationNote && <p className="mt-1 text-xs leading-5 text-white/50">{experience.affiliationNote}</p>}
                    <p className="mt-5 text-base leading-7 text-white/85">{experience.summary}</p>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-white/65">
                      {experience.achievements.map((achievement) => <li key={achievement} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C97A3A]" /><span>{achievement}</span></li>)}
                    </ul>
                    {experience.history && (
                      <details className="portfolio-detail mt-6 border-t border-white/10 pt-4">
                        <summary className="cursor-pointer text-sm font-medium text-white/80">Appointment history</summary>
                        <ol className="mt-4 space-y-4">
                          {experience.history.map((appointment) => <li key={appointment.period} className="text-sm leading-6"><p className="text-white/85">{appointment.role}</p><p className="text-xs text-white/55">{appointment.period} · {appointment.type}</p></li>)}
                        </ol>
                        {experience.projectHistory && <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-6 text-white/60">{experience.projectHistory}</p>}
                      </details>
                    )}
                    {experience.evidence?.to ? <Link to={experience.evidence.to} className="mt-6 inline-flex items-center gap-2 text-sm text-[#e7a56f] hover:text-white">{experience.evidence.label}<ArrowRight size={16} /></Link> : <a href={experience.evidence.href} className="mt-6 inline-flex items-center gap-2 text-sm text-[#e7a56f] hover:text-white">{experience.evidence.label}<ArrowRight size={16} /></a>}
                    {experience.media?.length > 0 && <div className="mt-6 grid gap-4">{experience.media.map((item, index) => <ContentMedia key={index} item={item} />)}</div>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="coursework" aria-labelledby="coursework-heading" className="relative scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 pb-20 lg:pb-24">
          <p className="text-xs uppercase tracking-[0.22em] text-[#e7a56f]">{content.courseworkSection.eyebrow}</p>
          <h2 id="coursework-heading" className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{content.courseworkSection.heading}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">{content.courseworkSection.intro}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {COURSEWORK.map((course) => (
              <article key={course.id} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 md:p-8">
                <GraduationCap size={24} className="text-[#e7a56f]" />
                <h3 className="mt-5 text-xl font-semibold">{course.title}</h3>
                <p className="mt-2 text-xs leading-5 text-white/50">{course.institution} · {course.context}{course.term ? ` · ${course.term}` : ""}</p>
                <p className="mt-4 text-sm leading-7 text-white/65">{course.summary}</p>
                <p className="mt-4 text-xs text-[#e7a56f]">{course.status}</p>
                {course.media?.length > 0 && <div className="mt-5 grid gap-4">{course.media.map((item, index) => <ContentMedia key={index} item={item} />)}</div>}
                {course.methods.length > 0 && <ul className="mt-4 space-y-2 text-sm text-white/70">{course.methods.map((method) => <li key={method}>{method}</li>)}</ul>}
              </article>
            ))}
            <div className="flex flex-col justify-center rounded-3xl border border-dashed border-white/15 p-6 md:p-8">
              <p className="text-sm font-medium text-white/80">{content.courseworkSection.upcomingTitle}</p>
              <p className="mt-3 text-sm leading-7 text-white/55">{content.courseworkSection.upcomingText}</p>
            </div>
          </div>
        </div>
      </section>

      {content.homeLab.enabled && <section id="home-lab" aria-labelledby="home-lab-heading" className="relative scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 pb-20 lg:pb-24">
          <div className="site-glass-panel rounded-[28px] border border-[#C97A3A]/25 p-6 md:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-[#e7a56f]">{content.homeLab.eyebrow}</p>
            <h2 id="home-lab-heading" className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{content.homeLab.title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">{content.homeLab.description}</p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">{content.homeLab.note}</p>
            {(content.homeLab.photos.length > 0 || content.homeLab.videos.length > 0) && <div className="mt-7 grid gap-5 md:grid-cols-2">{[...content.homeLab.photos, ...content.homeLab.videos].map((item, index) => <ContentMedia key={index} item={item} />)}</div>}
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={content.homeLab.youtubeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#C97A3A]/50 bg-[#C97A3A]/10 px-5 py-3 text-sm text-white hover:bg-[#C97A3A]/20"><Youtube size={18} /> {content.homeLab.youtubeLabel}</a>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 px-1 text-sm">
            <span className="text-white/50">{content.homeLab.carIntro}</span>
            <Link to="/car-modding" className="inline-flex items-center gap-2 py-1 text-white/80 transition-colors hover:text-white">{content.homeLab.carLabel}<ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>}
    </>
  );
}
