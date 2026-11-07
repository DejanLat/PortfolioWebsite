import React from "react";
import { ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import StudioFrame from "./StudioFrame";

export default function DejanLatkovic() {
  return (
    <StudioFrame title="Founder" backTo="/" showPublicNav={false} className="flex flex-col">
      <main className="relative mx-auto w-full max-w-6xl flex-1 px-6 pb-20 pt-36">
        <section className="studio-terms-summary-card relative overflow-hidden rounded-[28px] border p-6 shadow-[0_22px_80px_rgba(0,0,0,0.3)] sm:p-8 lg:p-12">
          <div className="relative inline-flex rounded-full border border-emerald-300/35 bg-emerald-300/10 px-4 py-1 text-xs uppercase tracking-widest text-emerald-100">
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

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
    </StudioFrame>
  );
}
