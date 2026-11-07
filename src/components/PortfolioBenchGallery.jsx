import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import content from "../content/portfolio.json";
import WebpImg from "./WebpImg";
import { contentAsset } from "./ContentMedia";

export default function PortfolioBenchGallery() {
  const [index, setIndex] = useState(0);
  const { bench } = content;
  const photo = bench.photos[index];
  if (!photo) return null;
  const move = (direction) => setIndex((current) => (current + direction + bench.photos.length) % bench.photos.length);
  return (
    <section aria-labelledby="bench-heading" className="mt-12">
      <p className="text-xs uppercase tracking-[0.22em] text-[#e7a56f]">{bench.eyebrow}</p>
      <h3 id="bench-heading" className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">{bench.heading}</h3>
      <p className="mt-3 text-sm leading-6 text-white/65">{bench.intro}</p>
      <div className="site-glass-panel mt-7 grid overflow-hidden rounded-[28px] border border-white/15 lg:grid-cols-[1.25fr_1fr]">
        <div className="relative min-h-[280px] bg-black/20 sm:min-h-[360px]" role="region" aria-label="Lab and workshop photos" tabIndex={0}
          onKeyDown={(event) => { if (["ArrowLeft", "ArrowRight"].includes(event.key)) { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); } }}>
          <WebpImg key={photo.src} webp={contentAsset(photo.src)} fallback={contentAsset(photo.fallback)} alt={photo.alt} className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: photo.imagePosition || "center" }} />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black/80 to-transparent p-5 pt-16">
            <span className="text-xs text-white/75">{index + 1} / {bench.photos.length}</span>
            <div className="flex gap-2">
              <button type="button" className="portfolio-gallery-button bg-black/30 backdrop-blur" aria-label="Previous bench photo" onClick={() => move(-1)}><ChevronLeft size={18} /></button>
              <button type="button" className="portfolio-gallery-button bg-black/30 backdrop-blur" aria-label="Next bench photo" onClick={() => move(1)}><ChevronRight size={18} /></button>
            </div>
          </div>
        </div>
        <div className="p-6 md:p-8" aria-live="polite">
          <p className="text-xs uppercase tracking-widest text-[#e7a56f]">{photo.context}</p>
          <h4 className="mt-3 text-2xl font-semibold">{photo.title}</h4>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-white/75">{photo.notes.map((note) => <li key={note} className="flex gap-3"><span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-[#C97A3A]" aria-hidden="true" />{note}</li>)}</ul>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2" aria-label="Choose a bench photo">
        {bench.photos.map((item, itemIndex) => <button type="button" key={item.src} onClick={() => setIndex(itemIndex)} aria-pressed={itemIndex === index}
          className={`rounded-full border px-4 py-2 text-xs transition ${itemIndex === index ? "border-[#C97A3A]/55 bg-[#C97A3A]/15 text-[#efbc95]" : "border-white/15 bg-white/5 text-white/65 hover:bg-white/10"}`}>{item.title}</button>)}
      </div>
    </section>
  );
}
