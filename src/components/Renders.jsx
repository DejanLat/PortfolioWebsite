import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SendHorizonal } from "lucide-react";
import StudioFrame from "./StudioFrame";
import StudioWork from "./StudioWork";
import StudioPerspectives from "./StudioPerspectives";
import ContentMedia from "./ContentMedia";
import { useStudioPointerGlow } from "../hooks/useStudioPointerGlow";
import content from "../content/studio.json";

const CHAT_BUTTON = "inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300/45 bg-emerald-300/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-300/25";
const publicUrl = process.env.PUBLIC_URL || "";
const assetUrl = src => /^(?:https?:|data:|\/)/i.test(src) ? src : `${publicUrl}/${src}`;

function MediaList({ items = [] }) {
  return items.length ? <div className="mt-7 grid gap-5 md:grid-cols-2">
    {items.map((item, index) => <ContentMedia key={item.id || item.src || item.url || index} item={item} />)}
  </div> : null;
}

export default function Renders() {
  const [openFaqItems, setOpenFaqItems] = useState({});
  const heroRef = useRef(null);
  const { updateLocalPointer } = useStudioPointerGlow();
  const { hero, services, process, faq, closing } = content;

  return (
    <StudioFrame>
      <section ref={heroRef} onPointerMove={event => updateLocalPointer(heroRef, event)} className="studio-welcome-hero relative flex min-h-[760px] h-[88vh] max-h-[980px] items-center">
        <div className="absolute inset-0 z-0">
          <img src={assetUrl(hero.background.src)} alt={hero.background.alt} className="h-full w-full object-cover" style={{ objectPosition: hero.background.objectPosition || "center" }} />
          <div className="studio-welcome-horizontal-overlay absolute inset-0" aria-hidden="true" />
          <div className="studio-welcome-vertical-falloff absolute inset-0" aria-hidden="true" />
        </div>
        <div className="studio-local-cursor-glow studio-welcome-local-glow pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs uppercase tracking-widest text-white/90 backdrop-blur-sm" style={{ borderColor: "rgba(52,211,153,0.35)", background: "rgba(5,10,13,0.48)" }}>{hero.badge}</div>
            <h1 className="mt-4 text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-tight text-white">{hero.heading} <span className="text-emerald-300">{hero.highlight}</span></h1>
            <p className="mt-5 max-w-2xl text-base text-white/82 sm:text-lg">{hero.summary}</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">{hero.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to={hero.primaryAction.to} className={CHAT_BUTTON}>{hero.primaryAction.label} <SendHorizonal size={16} aria-hidden="true" /></Link>
              <a href={hero.secondaryAction.href} className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/15 px-5 py-3 text-sm font-medium text-white/85 backdrop-blur-sm transition hover:text-white">{hero.secondaryAction.label}</a>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/55">{hero.note}</p>
          </div>
        </motion.div>
      </section>
      <main className="studio-work-continuation relative w-full">
        {hero.media?.length > 0 && <section className="mx-auto max-w-7xl px-6 py-12" aria-label="More Studio visuals"><MediaList items={hero.media} /></section>}
        <StudioWork />
        <section id="services" className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-sm uppercase tracking-widest text-emerald-300">{services.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{services.heading}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.items.map(item => <article key={item.id} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/70">{item.body}</p>
              <MediaList items={item.media} />
            </article>)}
          </div>
          <MediaList items={services.media} />
        </section>
        <section id="process" className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <p className="text-sm uppercase tracking-widest text-emerald-300">{process.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">{process.heading}</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {process.items.map((item, index) => <article key={item.id} className="rounded-2xl border border-white/10 bg-black/25 p-5">
                <p className="text-sm text-emerald-300/70">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{item.body}</p>
                <MediaList items={item.media} />
              </article>)}
            </div>
            <MediaList items={process.media} />
          </div>
        </section>
        <StudioPerspectives />
        <section id="faq" className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <p className="text-sm uppercase tracking-widest text-emerald-300">{faq.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">{faq.heading}</h2>
            <div className="mt-7 space-y-3">
              {faq.items.map(item => <article key={item.id} className="overflow-hidden rounded-2xl border border-white/10 bg-black/25">
                <button type="button" id={`studio-faq-question-${item.id}`} aria-expanded={Boolean(openFaqItems[item.id])} aria-controls={`studio-faq-answer-${item.id}`} onClick={() => setOpenFaqItems(current => ({ ...current, [item.id]: !current[item.id] }))} className="flex w-full items-center justify-between gap-4 p-5 text-left font-medium">
                  <span>{item.question}</span><span className="text-emerald-300" aria-hidden="true">{openFaqItems[item.id] ? "-" : "+"}</span>
                </button>
                <div id={`studio-faq-answer-${item.id}`} role="region" aria-labelledby={`studio-faq-question-${item.id}`} hidden={!openFaqItems[item.id]}>
                  <p className="px-5 pb-5 text-sm leading-7 text-white/70">{item.answer}</p>
                  <MediaList items={item.media} />
                </div>
              </article>)}
            </div>
            <MediaList items={faq.media} />
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 pb-16 pt-8">
          <div className="rounded-3xl border border-emerald-300/20 bg-emerald-300/[0.07] p-7 md:p-10">
            <h2 className="text-3xl font-semibold tracking-tight">{closing.heading}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">{closing.body}</p>
            <Link to={closing.action.to} className={`${CHAT_BUTTON} mt-7`}>{closing.action.label} <SendHorizonal size={16} aria-hidden="true" /></Link>
            <MediaList items={closing.media} />
          </div>
        </section>
      </main>
    </StudioFrame>
  );
}
