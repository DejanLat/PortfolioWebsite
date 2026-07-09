import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, FileText, SendHorizonal } from "lucide-react";
import { TERMS_GROUPS } from "./Renders";

const ACCENT = "#34d399";

export default function StudioTerms() {
  useEffect(() => {
    document.documentElement.classList.add("scrollbar-teal");
    return () => document.documentElement.classList.remove("scrollbar-teal");
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10 bg-black/90">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white">
            <ArrowLeft size={16} />
            Axivion Studio
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-white"
            style={{ borderColor: "rgba(52,211,153,0.45)", background: "rgba(52,211,153,0.14)" }}
          >
            Request a Project <SendHorizonal size={15} />
          </Link>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-1 text-xs uppercase tracking-widest text-emerald-100">
              <FileText size={14} /> Project Terms
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">Clear terms before we begin.</h1>
            <p className="mt-5 text-base leading-8 text-white/68">
              Every Axivion Studio project starts with a written scope, timeline, license, and payment structure so both sides know exactly what is included before work begins.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/52">
              This page is a client-facing summary for scientific visualization work. Final project-specific terms are confirmed in the written quote or agreement before payment is collected.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {TERMS_GROUPS.map((group) => (
              <article key={group.title} className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
                <h2 className="text-xl font-semibold">{group.title}</h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/70">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="mt-1 shrink-0" style={{ color: ACCENT }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="text-sm uppercase tracking-widest" style={{ color: ACCENT }}>
              Written scope first
            </div>
            <div className="mt-2 text-2xl font-semibold">Need project-specific terms?</div>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/65">
              Send the project context, intended use, reference material, and timeline. The quote will define deliverables, review rounds, use rights, payment structure, and any special confidentiality needs before work begins.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium text-white"
              style={{ borderColor: "rgba(52,211,153,0.55)", background: "rgba(52,211,153,0.16)" }}
            >
              Request a Project <SendHorizonal size={16} />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div>Axivion Studio - Scientific Visualization</div>
          <div>&copy; {new Date().getFullYear()} Dejan Latkovic / Axivion Studio</div>
        </div>
      </footer>
    </div>
  );
}