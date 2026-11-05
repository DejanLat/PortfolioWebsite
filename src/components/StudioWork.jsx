import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { WORK_EXAMPLES } from "../data/studioPublicContent";
const ACCENT = "#34d399";
export default function StudioWork() { return (<section id="work" className="mx-auto max-w-7xl px-6 pb-12 pt-12 md:pt-16 lg:pt-20">
          <p className="text-sm uppercase tracking-widest text-emerald-300">Selected work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">A closer look at the science.</h2>
          <div className="mt-8 space-y-8">
            {WORK_EXAMPLES.map((section) => (
              <motion.div
                key={section.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl p-0 overflow-hidden"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(0,0,0,0.55)",
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(340px,0.65fr)] h-full">
                  <div className="min-h-[360px] lg:min-h-[560px]">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center justify-between gap-3">
                      <div
                        className="inline-flex items-center gap-2 text-xs rounded-full border px-2.5 py-1 text-white/80"
                        style={{ borderColor: "rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)" }}
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                        Visual Work
                      </div>
                      <span
                        className="inline-flex items-center gap-1.5 text-[11px] px-2 py-1 rounded-full border bg-white/5 text-white/85"
                        style={{ borderColor: "rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.06)" }}
                      >
                        <FileText size={12} /> {section.tag}
                      </span>
                    </div>

                    <div className="mt-2 text-xl font-semibold flex items-center gap-2">
                      {section.icon && <section.icon size={18} />}
                      <span>{section.title}</span>
                    </div>

                    {section.bullets.length > 0 && (
                      <ul className="mt-3 space-y-2 text-sm">
                        {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span
                            aria-hidden
                            className="mt-1 inline-block h-2 w-2 rounded-full shrink-0"
                            style={{ backgroundColor: ACCENT }}
                          />
                          <span className="text-white/90">{bullet}</span>
                        </li>
                        ))}
                      </ul>
                    )}

                    {Array.isArray(section.links) && (
                      <div className="mt-5 flex flex-wrap gap-3">
                        {section.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-medium"
                            style={{ color: ACCENT }}
                          >
                            {link.label} <ExternalLink size={14} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>); }
