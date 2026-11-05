import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, Info, Quote, X } from "lucide-react";
import { TESTIMONIAL, ARTIST_QUOTE } from "../data/studioPublicContent";
const ACCENT = "#34d399";
export default function StudioPerspectives() {
  const [testimonialDialogOpen, setTestimonialDialogOpen] = useState(false);
  const testimonialDialogRef = useRef(null), testimonialCloseRef = useRef(null), testimonialButtonRef = useRef(null);
  const closeTestimonialDialog = () => { setTestimonialDialogOpen(false); testimonialButtonRef.current?.focus(); };
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


  useEffect(() => { if (!testimonialDialogOpen) return undefined; const previous = document.body.style.overflow; document.body.style.overflow = "hidden"; return () => { document.body.style.overflow = previous; }; }, [testimonialDialogOpen]);
  return <>        <section id="trust" className="mx-auto max-w-7xl px-6 py-12">
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
      {testimonialDialogOpen && (
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

</>;
}
