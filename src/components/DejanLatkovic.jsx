import React, { useEffect } from "react";
import { ArrowLeft, ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrolledHeader } from "../hooks/useScrolledHeader";

const ACCENT = "#34d399";

export default function DejanLatkovic() {
  const solidNav = useScrolledHeader();
  useEffect(() => {
    document.documentElement.classList.add("scrollbar-studio");
    return () => document.documentElement.classList.remove("scrollbar-studio");
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solidNav ? "border-b border-white/10 bg-black/75 backdrop-blur" : "border-b border-transparent bg-transparent"}`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/75 transition hover:text-white">
            <ArrowLeft size={18} />
            Back
          </Link>
          <div className="h-5 w-px bg-white/18" />
          <div className="font-semibold tracking-widest">AXIVION STUDIO</div>
        </div>
      </header>

      <main className="relative pt-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[70vh]" style={{ background: "radial-gradient(54rem 28rem at 50% -10%, rgba(52,211,153,0.16), transparent 62%)" }} />
        <section className="relative mx-auto max-w-4xl px-6 pb-16">
          <div className="inline-flex rounded-full border border-emerald-300/35 bg-emerald-300/10 px-4 py-1 text-xs uppercase tracking-widest text-emerald-100">
            Founder
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">Dejan Latkovic</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/74">
            Dejan Latkovic is the founder of Axivion Studio, creating scientific visualization for researchers, labs, papers, proposals, covers, and advanced hardware teams.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              "Nanotechnology Engineering, University of Waterloo.",
              "Work across optics, photonics, instrumentation, CAD, Blender, and technical visualization.",
              "Scientific visualization by Dejan Latkovic / Axivion Studio has been credited on a Science Advances cover issue page.",
              "Axivion Studio focuses on accurate, publication-ready research visuals built through direct collaboration.",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/70">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium text-white"
              style={{ borderColor: "rgba(52,211,153,0.55)", background: "rgba(52,211,153,0.16)" }}
            >
              Contact Axivion Studio <Mail size={16} />
            </Link>
            <a
              href="https://dejanlat.github.io/PortfolioWebsite/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white/82 hover:text-white"
            >
              Personal portfolio <ExternalLink size={16} />
            </a>
            <a
              href="https://uwaterloo.ca/institute-for-quantum-computing/contacts/dejan-latkovic-0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white/82 hover:text-white"
            >
              IQC profile <ExternalLink size={16} />
            </a>
            <a
              href="https://www.science.org/toc/sciadv/12/21"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white/82 hover:text-white"
            >
              Science Advances issue <ExternalLink size={16} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}