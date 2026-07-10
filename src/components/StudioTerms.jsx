import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, FileText, Printer, SendHorizonal } from "lucide-react";

const ACCENT = "#34d399";
const EFFECTIVE_DATE = "July 10, 2026";

// Professional legal review is recommended before relying on this page as a final contract.
const TERMS_SECTIONS = [
  {
    title: "Acceptance of terms",
    body: [
      "These Terms of Service apply when you request, approve, purchase, or use services from Axivion Studio. By approving a quote, paying an invoice, or authorizing work to begin, you agree to these terms unless a signed written agreement says otherwise.",
      "If a project quote, project scope, statement of work, or written agreement contains more specific terms, that document takes priority over these general terms for that project.",
    ],
  },
  {
    title: "Definitions",
    body: [
      "Axivion Studio means the scientific visualization and technical rendering practice operated by Dejan Latkovic. Client means the person, lab, company, institution, or organization requesting or paying for the services.",
      "Services may include scientific visualization, technical rendering, modeling, figure packages, animations, consulting, proposal graphics, publication figures, and related creative or technical communication work. Deliverables means the final files listed in the written quote or project scope.",
    ],
  },
  {
    title: "Project quotes and scope",
    body: [
      "A written quote and project scope are required before work begins. The quote defines the expected deliverables, price, timeline, included revision rounds, use rights, and any special requirements.",
      "The project scope protects both sides by making clear what is included before time and budget are committed.",
    ],
  },
  {
    title: "Client-provided information and reference material",
    body: [
      "The client is responsible for providing accurate references, technical context, source material, intended use, deadlines, and any constraints that may affect the work.",
      "Axivion Studio may rely on client-provided material when preparing drafts and final deliverables. Delays or inaccuracies in supplied material may affect the schedule, cost, and final result.",
    ],
  },
  {
    title: "Estimates and pricing",
    body: [
      "Prices shown on the website are starting prices or planning estimates unless a written quote says otherwise. Final pricing depends on complexity, reference quality, technical risk, deadline, usage rights, deliverable count, and revision scope.",
      "A quote is valid only for the period stated in the quote. If no period is stated, Axivion Studio may update pricing before the project is accepted.",
    ],
  },
  {
    title: "Deposits and payment schedules",
    body: [
      "The default payment structure is a 50% deposit before work begins and 50% before final unwatermarked, high-resolution delivery. Larger projects may use milestone payments such as concept, draft, and final delivery stages.",
      "Payment schedules are confirmed in the written quote or invoice. Work may be paused if required payments are late.",
    ],
  },
  {
    title: "Taxes, currencies, and transaction fees",
    body: [
      "Prices may be stated in CAD, USD, or another currency identified in the quote. Any applicable taxes, transaction fees, currency conversion charges, wire fees, or platform fees are the client's responsibility unless the quote states otherwise.",
      "Currency estimates shown for convenience are approximate and may vary from the final billed amount.",
    ],
  },
  {
    title: "Project start conditions",
    body: [
      "A project begins only after Axivion Studio has received the required deposit or first milestone payment, the quote has been approved, and the client has supplied the materials needed to start.",
      "A proposed schedule is not reserved until these start conditions are met unless Axivion Studio confirms otherwise in writing.",
    ],
  },
  {
    title: "Timelines and estimated delivery dates",
    body: [
      "Delivery dates are good-faith estimates based on the project scope, available information, and expected client response times. They are not guarantees of journal acceptance, publication results, scientific outcomes, or business performance.",
      "Timelines may change if the project scope changes, feedback is delayed, source material is incomplete, or unexpected technical issues arise.",
    ],
  },
  {
    title: "Client delays and inactive projects",
    body: [
      "Project timing depends on timely client materials, decisions, and consolidated feedback. If a client delay prevents work from continuing, the schedule may move to the next available production window.",
      "Projects with no meaningful client response for an extended period may be paused and may require a reactivation fee or revised quote before work resumes.",
    ],
  },
  {
    title: "Review milestones and feedback",
    body: [
      "Projects may include review milestones such as direction checks, draft previews, composition reviews, or final proofing. The exact review process depends on the quote and project type.",
      "Feedback should be clear, consolidated, and provided by the client or a single designated contact wherever possible.",
    ],
  },
  {
    title: "Included revision rounds",
    body: [
      "A revision round means one consolidated set of feedback on a draft, preview, or milestone. Included revision rounds are listed in the written quote.",
      "Splitting feedback across multiple messages, stakeholders, or changing priorities may count as multiple rounds if it requires additional rework.",
    ],
  },
  {
    title: "Additional revisions",
    body: [
      "Additional revisions beyond the included rounds may be charged per round, hourly, or as a revised project fee. Axivion Studio will identify additional revision costs before proceeding where practical.",
      "Small refinements may sometimes be handled during normal check-ins, but larger revisions require clear approval before extra work begins.",
    ],
  },
  {
    title: "Changes in scope",
    body: [
      "New concepts, additional visuals, new formats, major direction changes, new technical requirements, or expanded usage rights may be treated as a change in scope.",
      "Scope changes may require a revised quote, additional payment, and a new schedule.",
    ],
  },
  {
    title: "Rush projects",
    body: [
      "Rush work may be accepted at Axivion Studio's discretion and may carry an additional fee. Rush availability depends on current workload, technical complexity, and the client's ability to provide fast feedback.",
      "A rush fee does not guarantee a particular external outcome, approval, publication result, or review decision.",
    ],
  },
  {
    title: "Deliverables and file formats",
    body: [
      "Final export files are included only as listed in the quote. Common deliverables may include PNG, JPEG, TIFF, MP4, or other agreed export formats.",
      "Additional formats, alternate crops, transparent-background versions, layered files, or special publication specifications must be included in the quote or added by written agreement.",
    ],
  },
  {
    title: "Drafts, previews, and watermarked files",
    body: [
      "Drafts, previews, screenshots, low-resolution exports, and watermarked files are provided for review only. They are not final deliverables and may not be published, redistributed, or used externally unless Axivion Studio gives written permission.",
      "Final unwatermarked, high-resolution files are delivered after full payment is received.",
    ],
  },
  {
    title: "Working files and source files",
    body: [
      "Blender files, CAD files, models, textures, project folders, working scenes, editable source files, render setups, node trees, and other working materials are excluded unless explicitly purchased in the written quote.",
      "If source files are purchased, the quote will define exactly which files are included and what usage rights apply to them.",
    ],
  },
  {
    title: "Scientific and technical accuracy",
    body: [
      "Axivion Studio aims to create clear, accurate, and polished scientific visuals, but the client is responsible for supplying correct technical information and reviewing the final work for scientific or technical accuracy.",
      "The client should involve appropriate researchers, authors, engineers, or reviewers before approving final publication or release.",
    ],
  },
  {
    title: "Client approval",
    body: [
      "Client approval of a draft, proof, or final file confirms that the client has reviewed the work for accuracy, completeness, spelling, labels, claims, and intended use.",
      "Changes requested after final approval may require additional fees and may affect delivery timing.",
    ],
  },
  {
    title: "Intellectual property in client-provided material",
    body: [
      "The client represents that they have the right to provide and use all reference material, data, images, diagrams, papers, CAD files, logos, fonts, trademarks, and other material supplied to Axivion Studio.",
      "The client remains responsible for permissions, clearances, confidentiality restrictions, and institutional or third-party approvals related to client-provided material.",
    ],
  },
  {
    title: "Ownership of working methods and reusable assets",
    body: [
      "Axivion Studio retains ownership of working files, reusable methods, templates, workflows, lighting setups, material systems, general-purpose models, non-client-specific assets, and production know-how developed before, during, or after a project.",
      "This does not give Axivion Studio ownership of the client's confidential information, supplied data, proprietary inventions, or materials owned by the client or third parties.",
    ],
  },
  {
    title: "Licence granted to the client",
    body: [
      "After full payment, the client receives the specific licence described in the quote for the final deliverables. Usage rights apply only to the deliverables and only within the agreed scope.",
      "It is usually most cost-effective to choose the intended usage before the project begins. If usage needs expand later, Axivion Studio can usually arrange a licence upgrade at 1.5x the standard pre-project usage add-on rate.",
      "No licence is granted for unpaid work, drafts, previews, source files, or working materials unless the quote states otherwise.",
    ],
  },
  {
    title: "Academic and research use",
    body: [
      "Academic or research use may include papers, posters, presentations, lab websites, grant material, internal research communication, and related scholarly communication where included in the quote.",
      "The client remains responsible for journal, conference, institutional, funder, and co-author requirements.",
    ],
  },
  {
    title: "Commercial and promotional use",
    body: [
      "Commercial or promotional use may include company websites, product pages, pitch decks, press releases, investor material, trade-show visuals, and normal business communication when included in the quote.",
      "Broader commercial campaigns, paid advertising, packaging, merchandise, resale, or unusually high-reach uses may require expanded rights and additional fees.",
    ],
  },
  {
    title: "Restricted and extended uses",
    body: [
      "Use outside the agreed licence is not permitted without written approval. Restricted or extended uses may include resale, sublicensing, redistribution, paid advertising, merchandise, packaging, dataset creation, AI training, or use in unrelated projects.",
      "Axivion Studio may approve expanded use through an updated licence and fee. Later usage upgrades are typically priced at 1.5x the standard usage add-on rate that would have applied if selected before the project began.",
    ],
  },
  {
    title: "Resale, sublicensing, and redistribution",
    body: [
      "The client may not resell, sublicense, redistribute, upload as a reusable asset, or transfer the deliverables to another party for reuse unless the written licence allows it.",
      "Normal sharing with publishers, collaborators, printers, web developers, or institutional communication teams is allowed when necessary for the agreed use.",
    ],
  },
  {
    title: "AI training and dataset use",
    body: [
      "Deliverables, drafts, previews, working files, and source material may not be used for AI training, model fine-tuning, dataset creation, synthetic data generation, or similar machine-learning purposes unless Axivion Studio gives written permission.",
      "This restriction is intended to protect both Axivion Studio's creative work and any client confidential or technical material involved in the project.",
    ],
  },
  {
    title: "Credit and attribution",
    body: [
      "Credit or attribution requirements are defined in the quote, publication context, or written agreement. Axivion Studio may request reasonable credit where appropriate, especially for public research visuals or cover artwork.",
      "Required journal, publisher, institutional, or collaborator credits remain the client's responsibility.",
    ],
  },
  {
    title: "Portfolio and promotional use by Axivion Studio",
    body: [
      "Axivion Studio may display final approved work in its portfolio, website, social media, proposals, and promotional material unless confidentiality, embargo, or non-disclosure restrictions are agreed to in writing before the project begins.",
      "Axivion Studio will use reasonable care when presenting public work and will not knowingly disclose confidential technical information that was identified as confidential.",
    ],
  },
  {
    title: "Confidential, embargoed, and unpublished projects",
    body: [
      "Confidential, embargoed, unpublished, or sensitive projects must be identified before work begins. The client should clearly mark confidential material and explain any embargo dates or sharing restrictions.",
      "Axivion Studio can handle confidential work privately when those requirements are agreed in writing.",
    ],
  },
  {
    title: "Non-disclosure agreements",
    body: [
      "If a non-disclosure agreement is required, it should be provided before confidential material is shared and before work begins. Axivion Studio may review NDAs for practicality and consistency with the project scope.",
      "An NDA may modify confidentiality and portfolio-use terms for that project if it is signed by both sides.",
    ],
  },
  {
    title: "Third-party materials, fonts, models, and software",
    body: [
      "Some projects may use third-party materials, fonts, textures, models, software, plugins, or references. The quote or project discussion should identify any third-party material that affects licensing, credit, or delivery.",
      "The client is responsible for third-party permissions related to material they provide. Axivion Studio is responsible for using reasonable care with third-party materials it selects.",
    ],
  },
  {
    title: "Cancellation by the client",
    body: [
      "The client may cancel a project by written notice. The client remains responsible for work completed, committed production time, approved milestones, third-party costs, and any non-refundable amounts stated in the quote.",
      "If cancellation occurs after work begins, the deposit is non-refundable unless Axivion Studio agrees otherwise in writing.",
    ],
  },
  {
    title: "Cancellation by Axivion Studio",
    body: [
      "Axivion Studio may cancel or decline a project if required information is not provided, payments are late, the scope becomes impractical, the requested work creates an ethical or legal concern, or the working relationship becomes unworkable.",
      "If Axivion Studio cancels without client fault, any unearned prepaid amount may be refunded in a reasonable manner.",
    ],
  },
  {
    title: "Refunds and non-refundable deposits",
    body: [
      "Deposits become non-refundable once work begins because they reserve production time and cover early concept, planning, communication, and setup work.",
      "Refunds, if any, are handled based on work completed, project stage, committed costs, and the terms of the written quote.",
    ],
  },
  {
    title: "Project suspension and reactivation",
    body: [
      "Axivion Studio may suspend work if payments are overdue, feedback is missing, required materials are unavailable, or the project is inactive. Suspended projects are not guaranteed to keep their original timeline.",
      "Reactivation may require a revised schedule, updated quote, reactivation fee, or additional payment before work resumes.",
    ],
  },
  {
    title: "File retention and archival",
    body: [
      "Axivion Studio may retain project files for a limited period for administrative, portfolio, or future revision purposes, but long-term archival is not guaranteed.",
      "The client is responsible for downloading and safely storing final deliverables after delivery. Re-exporting or retrieving old files later may not be possible and may require an additional fee.",
    ],
  },
  {
    title: "Warranty disclaimer",
    body: [
      "Services and deliverables are provided with reasonable professional care, but Axivion Studio does not guarantee journal acceptance, publication outcomes, research results, funding decisions, sales results, investor responses, or other external outcomes.",
      "Except as expressly stated in the quote, deliverables are provided without additional warranties to the maximum extent permitted by applicable law.",
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "To the maximum extent permitted by applicable law, Axivion Studio is not liable for indirect, incidental, special, consequential, or punitive damages, including lost profits, lost opportunities, publication delays, or reputational harm.",
      "Axivion Studio's total liability for a project is limited to the amount paid by the client for that project, unless applicable law requires otherwise.",
    ],
  },
  {
    title: "Indemnification",
    body: [
      "The client agrees to be responsible for claims, losses, or expenses arising from client-provided material, inaccurate information supplied by the client, unauthorized use of deliverables, or use outside the agreed licence.",
      "Axivion Studio agrees to be responsible for its own intentional misconduct or clear breach of the written agreement, subject to the limitations in these terms.",
    ],
  },
  {
    title: "Force majeure",
    body: [
      "Neither side is responsible for delays or failures caused by events beyond reasonable control, such as illness, outages, natural disasters, labour disruption, platform failures, government action, or other unexpected events.",
      "If such an event occurs, both sides should communicate in good faith and adjust the schedule where practical.",
    ],
  },
  {
    title: "Independent contractor relationship",
    body: [
      "Axivion Studio provides services as an independent contractor. These terms do not create an employment, partnership, joint venture, agency, or fiduciary relationship.",
      "The client does not have authority to bind Axivion Studio to obligations outside the written project scope.",
    ],
  },
  {
    title: "Assignment",
    body: [
      "The client may not assign or transfer the project agreement or usage rights to another party without written approval, except as allowed by the quote or applicable law.",
      "Axivion Studio may use trusted subcontractors or service providers where appropriate, while remaining responsible for the services it agrees to provide.",
    ],
  },
  {
    title: "Governing law and jurisdiction",
    body: [
      "Unless a written agreement states otherwise, these terms are governed by the laws of Ontario and the applicable federal laws of Canada.",
      "The parties will try to resolve disputes in good faith before starting formal proceedings. Any formal dispute will be handled in the courts with jurisdiction in Ontario, unless applicable law requires another forum.",
    ],
  },
  {
    title: "Severability",
    body: [
      "If any part of these terms is found to be invalid or unenforceable, the remaining parts continue to apply as much as possible.",
      "The invalid or unenforceable part should be interpreted or adjusted in a way that best reflects the original intent while remaining lawful.",
    ],
  },
  {
    title: "Waiver",
    body: [
      "If Axivion Studio does not enforce a term immediately, that does not mean the term is waived. A waiver must be clear and in writing to apply.",
      "A waiver for one situation does not automatically apply to future situations.",
    ],
  },
  {
    title: "Entire agreement and order of precedence",
    body: [
      "These terms, the written quote, the project scope, invoices, and any signed project-specific agreement form the agreement for the project.",
      "If there is a conflict, the more specific project quote or signed agreement takes priority over these general terms, followed by the project scope, invoice, and then these Terms of Service.",
    ],
  },
  {
    title: "Amendments to the terms",
    body: [
      "Axivion Studio may update these Terms of Service from time to time. The version that applies to a project is usually the version in effect when the client approves the quote, unless the parties agree otherwise.",
      "Material project-specific changes should be confirmed in writing.",
    ],
  },
  {
    title: "Privacy and website contact",
    body: [
      "The website may use basic analytics if Google Analytics is active, such as general traffic and page interaction information.",
      "Contact requests currently open the visitor's email application through a mailto link, so the message is sent through the visitor's own email provider rather than a website payment or upload system.",
      "Axivion Studio does not collect payment information directly through the website.",
      "Visitors should avoid sending highly sensitive or confidential project files before confidentiality arrangements, embargo expectations, or a non-disclosure agreement are confirmed in writing.",
    ],
  },
  {
    title: "Contact information",
    body: [
      "Questions about these terms, project quotes, usage rights, confidentiality, or file delivery can be sent to Axivion Studio before work begins.",
      "Current project contact: axivioninstruments@gmail.com.",
    ],
  },
];

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function StudioTerms() {
  useEffect(() => {
    document.documentElement.classList.add("scrollbar-teal");
    return () => document.documentElement.classList.remove("scrollbar-teal");
  }, []);

  const handlePrint = () => window.print();

  return (
    <div className="studio-terms-page min-h-screen bg-black text-white">
      <header className="border-b border-white/10 bg-black/90 print:hidden">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 rounded-full text-sm text-white/70 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300">
            <ArrowLeft size={16} />
            Back to Studio
          </Link>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-emerald-300/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
            >
              <Printer size={15} /> Print
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
              style={{ borderColor: "rgba(52,211,153,0.45)", background: "rgba(52,211,153,0.14)" }}
            >
              Request a Project <SendHorizonal size={15} />
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:pt-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-1 text-xs uppercase tracking-widest text-emerald-100">
              <FileText size={14} /> Terms of Service
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">Axivion Studio Terms of Service</h1>
            <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              Effective date: {EFFECTIVE_DATE}
            </div>
            <p className="mt-6 text-base leading-8 text-white/70">
              These terms apply to scientific visualization, technical rendering, modeling, figure packages, animations, consulting, and related creative services provided by Axivion Studio.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/55">
              They are written to make project scope, payment, revisions, usage rights, confidentiality, and delivery expectations clear before work begins. Your written quote and project scope define the specific terms for your project.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-20 lg:grid-cols-[minmax(240px,320px)_minmax(0,1fr)] lg:items-start">
          <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 lg:sticky lg:top-6 print:hidden">
            <div className="text-sm uppercase tracking-widest" style={{ color: ACCENT }}>
              Contents
            </div>
            <nav className="mt-4 max-h-[72vh] overflow-auto pr-2" aria-label="Terms of Service table of contents">
              <ol className="space-y-1 text-sm text-white/62">
                {TERMS_SECTIONS.map((section, index) => (
                  <li key={section.title}>
                    <a
                      href={`#${slugify(section.title)}`}
                      className="block rounded-xl px-3 py-2 transition hover:bg-emerald-300/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
                    >
                      <span className="mr-2 text-white/35">{index + 1}.</span>{section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="space-y-4">
            {TERMS_SECTIONS.map((section, index) => (
              <section
                key={section.title}
                id={slugify(section.title)}
                className="scroll-mt-8 rounded-3xl border border-white/10 bg-white/[0.045] p-5 md:p-6 print:border-neutral-300 print:bg-white print:p-0"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-300/25 bg-emerald-300/10 text-sm font-medium text-emerald-100 print:border-neutral-400 print:bg-white print:text-neutral-700">
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-white print:text-neutral-950">{section.title}</h2>
                    <div className="mt-3 space-y-3 text-sm leading-7 text-white/68 print:text-neutral-800">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black print:hidden">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div>Axivion Studio Terms of Service</div>
          <div className="flex flex-wrap gap-4">
            <Link to="/" className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300">Back to Studio</Link>
            <Link to="/contact" className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300">Request a Project</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}