import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Printer } from "lucide-react";
import { useStudioPointerGlow } from "../hooks/useStudioPointerGlow";
import { useScrolledHeader } from "../hooks/useScrolledHeader";

const EFFECTIVE_DATE = "July 16, 2026";
const TERMS_VERSION = "Version 2026-07-16";
const TERMS_URL = "https://axivionstudio.com/terms";

// Maintain archived copies of materially different terms versions before publishing changes.
const IMPORTANT_POINTS = [
  "A written quote and project scope come before work begins.",
  "Most projects use a 50% deposit before work starts and 50% before final delivery.",
  "Deliverables, formats, revisions, timeline, and licence are defined in the quote.",
  "Final unwatermarked high-resolution files and usage rights normally follow cleared final payment.",
  "Source files, editable scenes, CAD, models, and working assets are separate from final exports unless quoted.",
  "Confidential or embargoed work can be handled when requirements are agreed in writing.",
  "The client reviews and confirms final scientific and technical accuracy before publication or release.",
];

const TERMS_SECTIONS = [
  {
    title: "Acceptance and project documents",
    body: [
      "These general terms cover a range of scientific visualization, technical rendering, modeling, figure package, animation, consulting, and related creative-service projects. For most projects, the written quote and project scope contain the most important project-specific details, including price, deliverables, revisions, timeline, and licence.",
      "A project agreement may be accepted by a signed agreement, electronic acceptance, clear written approval by email, or payment of the required deposit or first milestone after the client has received the quote and access to these terms. A general inquiry, informal discussion, or isolated email does not by itself create a project agreement.",
      "For a project intended to use these published terms, the quote, project scope, or signed agreement should reference the Axivion Studio Terms of Service, Version 2026-07-16, available at https://axivionstudio.com/terms. That exact published version applies when the client accepts the project agreement unless both parties later agree in writing to use a different version. Website updates apply prospectively and do not automatically rewrite an already accepted project.",
    ],
  },
  {
    title: "Definitions and order of precedence",
    body: [
      "\"Axivion Studio\" means \"Innovations Boutique Inc., operating under its registered business name Axivion Studio.\" After this definition, Axivion Studio is used as the short brand name for Innovations Boutique Inc. Client means the person, researcher, lab, university, company, institution, or organization that requests, approves, pays for, or is identified in the project documents as receiving the services.",
      "Innovations Boutique Inc. is the legal service provider, issuer of project invoices, recipient of project payments, and GST/HST registrant for services supplied under the Axivion Studio brand.",
      "Services may include scientific visualization, technical rendering, modeling, figure packages, animations, consulting, proposal graphics, publication figures, journal cover artwork, optics diagrams, engineering visuals, and related technical communication work. Deliverables means the final export files specifically listed in the written quote or project scope.",
      "If project documents conflict, the order of precedence is: 1. signed project-specific agreement or amendment; 2. written project quote and scope; 3. invoice or approved change order, where relevant; 4. these general Terms of Service. A more specific provision controls only the subject it addresses.",
    ],
  },
  {
    title: "Project scope and client materials",
    body: [
      "A written quote and project scope are required before work begins. The quote should identify deliverables, intended use, licence, final formats, dimensions where relevant, included revision rounds, expected timeline, client-supplied materials, exclusions, payment schedule, confidentiality or embargo requirements, source-file treatment, and any material third-party costs.",
      "The client is responsible for providing accurate references, technical context, intended use, deadlines, journal or publication requirements, required dimensions, source material, and other constraints that may affect the work. Axivion Studio may rely on client-provided material when preparing drafts and final deliverables.",
      "The client represents, to the best of its knowledge and authority, that it has the right to provide and authorize use of supplied CAD, images, figures, papers, logos, datasets, models, fonts, trademarks, confidential material, third-party content, and other references for the project.",
      "Informal conversations, exploratory calls, and technical discussions help shape the work, but they do not change the approved scope unless the change is confirmed in writing.",
    ],
  },
  {
    title: "Pricing, taxes, currency, and fees",
    body: [
      "Website prices, package prices, and calculator outputs are starting prices or planning estimates. Final pricing is determined by the written quote and may depend on complexity, reference quality, technical risk, deadline, usage rights, deliverable count, revision scope, and source-file needs.",
      "Innovations Boutique Inc. issues all Axivion Studio invoices. Invoices may be issued in CAD, USD, or another currency identified in the quote or invoice. Approximate currency conversions are informational only and may differ from the amount charged by a bank, card provider, platform, or payment processor.",
      "Innovations Boutique Inc. is the GST/HST registrant for Axivion Studio services. Applicable taxes are added where legally required and invoices will include the applicable tax and registration information where required. Transaction, transfer, platform, wire, payment-processor, or currency-conversion fees are handled as stated in the quote or invoice.",
      "A quote is valid for the period stated in the quote. If no validity period is stated, Axivion Studio may update the quote before the client accepts it.",
    ],
  },
  {
    title: "Payment, deposits, and late payments",
    body: [
      "The default payment structure is a 50% deposit before work begins and 50% before final unwatermarked, high-resolution delivery. Larger projects may use milestone billing, such as concept, draft, production, and final delivery stages.",
      "All deposits, milestone payments, final payments, and other project amounts are payable to Innovations Boutique Inc., including when an invoice, payment instruction, or processor displays the Axivion Studio business name.",
      "Work does not begin until required start conditions are satisfied: quote approval, receipt of required project materials, and cleared deposit or first milestone payment, unless Axivion Studio confirms otherwise in writing. Proposed dates are not reserved until those start conditions are satisfied unless stated otherwise.",
      "Final unwatermarked high-resolution files are normally provided after final payment clears. Client usage rights become effective only after required payment has cleared, unless the quote states otherwise. If a payment is reversed, charged back, withdrawn, or materially disputed after delivery, the related licence may be suspended until the account is reasonably resolved.",
      "If a required milestone or final payment is late, Axivion Studio may pause work, withhold unfinished or final deliverables, move the project to a later production window, revise the schedule, or require overdue amounts to be resolved before continuing.",
    ],
  },
  {
    title: "Timelines, feedback, and inactive projects",
    body: [
      "Delivery dates are good-faith estimates based on the approved scope, available information, current workload, and expected client response times. Timelines may change if scope changes, feedback is delayed, source material is incomplete, payment is late, or unexpected technical issues arise.",
      "Unless the quote states otherwise, feedback should normally be provided within five business days of a review request to preserve the proposed schedule. Delayed feedback may shift the timeline or move the project to a later production window, but it does not automatically terminate the project.",
      "Feedback should be consolidated by one designated client contact where practical. Axivion Studio will make reasonable efforts to consider late feedback where practical, but late or fragmented feedback may be moved to a later revision round if it causes additional rework.",
      "If required information, decisions, feedback, or payment are missing for an extended period, Axivion Studio may attempt to contact the client and may suspend the project. Reactivation may require a new schedule, updated quote, additional payment, or a reasonable reactivation fee.",
    ],
  },
  {
    title: "Review milestones and revision rounds",
    body: [
      "Projects may include review milestones such as direction checks, reference reviews, draft previews, composition reviews, technical checks, or final proofing. The exact review process depends on the quote and project type.",
      "A revision round consists of one consolidated set of feedback submitted for a draft or milestone. A round begins when Axivion Studio starts implementing that feedback. Small corrections within the approved concept count as revisions. The number of included rounds is stated in the quote.",
      "Changing the core concept, replacing major structures, rebuilding the scene, changing the intended use after approval, introducing a new technical requirement, requesting a replacement deliverable, or requesting a new format may be treated as additional scope rather than a revision.",
      "Additional revisions beyond the included rounds may be charged per round, hourly, or as a revised project fee. Axivion Studio will identify additional revision costs before substantial extra work begins where practical.",
    ],
  },
  {
    title: "Scope changes and change approval",
    body: [
      "A scope change should normally identify the additional work, updated price or billing method, effect on schedule, and client approval before substantial additional work begins. Small changes may be approved by email if both sides clearly understand the change.",
      "Examples of scope changes include new concepts, additional visuals, new formats, major scientific direction changes, new technical requirements, replacement reference material, expanded usage rights, rush handling, and source-file delivery.",
      "Axivion Studio may pause affected work until the scope change is approved, especially where proceeding would create meaningful extra cost, schedule risk, or licensing uncertainty.",
    ],
  },
  {
    title: "Deliverables, previews, and source files",
    body: [
      "Final deliverables are only the final export files listed in the quote. Common final formats may include PNG, JPEG, TIFF, MP4, or other agreed formats. Alternate crops, transparent-background versions, layered files, journal-specific dimensions, or special submission specifications should be included in the quote or added by written approval.",
      "Drafts, previews, screenshots, low-resolution exports, and watermarked files are provided for review only. They are not final deliverables and may not be published, redistributed, submitted, or used externally unless Axivion Studio gives written permission.",
      "Blender scenes, CAD working files, models, textures, node systems, lighting setups, project folders, templates, workflows, reusable methods, non-client-specific assets, and general technical know-how are excluded unless the quote expressly includes source-file delivery or a different arrangement.",
      "If future editability is important, source-file delivery or future update support can be discussed and quoted before work begins. Source files requested later require a separate written agreement based on the project, because file availability, third-party assets, permitted use, support, compatibility, and future software-version limits may vary.",
    ],
  },
  {
    title: "Copyright, client material, and reusable assets",
    body: [
      "Unless the quote expressly states otherwise, Axivion Studio retains copyright and ownership of its original visual work, working files, source scenes, reusable assets, production methods, templates, workflows, and general technical know-how. The client receives the licence stated in the quote after required payment clears.",
      "Copyright ownership, source-file possession, attribution, and licence rights are separate concepts. Delivery of a final export does not transfer copyright or source-file ownership unless the quote expressly says so.",
      "The client retains ownership of its own confidential information, supplied data, research, inventions, trademarks, papers, CAD, technical materials, and other client-owned material. These terms do not give Axivion Studio ownership of the client's research, inventions, or institutional intellectual property.",
      "Axivion Studio may reuse general know-how, workflows, non-confidential methods, and non-client-specific assets in other work, provided it does not knowingly disclose the client's confidential information or use client-owned material outside the project licence.",
    ],
  },
  {
    title: "Client licence and permitted use",
    body: [
      "After full cleared payment, the client receives the licence identified in the quote for the final Axivion Studio deliverables. The licence may cover Academic and Institutional Use, Organizational and Promotional Use, Campaign, Fundraising, and Large-Scale Use, paid advertising, packaging, merchandise, resale, sublicensing, geographic scope, duration, exclusivity, or non-exclusivity as applicable.",
      "Not every project needs a complex licence. The project-specific quote controls if it contains different or more specific terms, and may state exceptions or special restrictions for the intended use.",
      "Use outside the approved licence requires written approval. Unless the quote states otherwise, a later licence expansion may be priced at the current applicable usage rate plus an additional $250 CAD update fee. This is a later-use pricing rule, not a penalty or fine.",
      "No licence is granted for unpaid work, drafts, previews, source files, working materials, publisher-owned cover layouts, publisher branding, third-party logos, or other third-party material unless the quote states otherwise.",
    ],
  },
  {
    title: "Licence categories and examples",
    numberLabel: "11.1",
    anchorId: "licence-categories-and-examples",
    body: [
      "The licence category identified in the quote determines how the final deliverables may be used. The following descriptions are provided as practical guidance. The project-specific quote controls if it contains different or more specific terms.",
      "Academic and Institutional Use means use in journal publications, scientific journals, journal cover submissions, selected journal covers, conference materials, theses, dissertations, teaching materials, academic grant applications, university or laboratory websites, research news releases, institutional press releases, and unpaid institutional communications directly relating to the research. Ordinary promotion by a journal, publisher, researcher, university, laboratory, research group, or institution that directly relates to the applicable paper, issue, cover, conference, or research output is included unless the quote states otherwise. It does not include paid advertising, commercial product marketing, corporate sales materials, investor campaigns, merchandise, fundraising campaigns, or unrelated promotional use.",
      "Organizational and Promotional Use means unpaid communication that promotes or represents a company, institution, product, service, technology, research group, or employer. Examples include organizational websites, organic social-media posts, press releases, product pages, brochures, newsletters, recruitment materials, and ordinary public-relations communication.",
      "Campaign, Fundraising, and Large-Scale Use means paid, sponsored, investor-facing, fundraising, large-format, or coordinated campaign use. Examples include paid advertisements, sponsored posts, investor or fundraising presentations, product-launch campaigns, trade-show booths, keynote displays, billboards, out-of-home advertising, and coordinated multi-channel campaigns.",
      "Where the intended use falls into more than one category, the broader applicable licence applies unless otherwise confirmed in writing. The client must disclose the intended use before work begins. Additional uses may be approved later through a written licence expansion and additional fee.",
    ],
  },
  {
    title: "Publication-related sharing and publisher material",
    numberLabel: "11.2",
    anchorId: "publication-sharing-and-publisher-material",
    body: [
      "Academic and Institutional Use includes reasonable sharing of a published journal cover, article page, publisher-provided promotional graphic, or the licensed artwork when the use directly announces, discusses, documents, celebrates, promotes, or explains the applicable publication, journal issue, conference presentation, or research result. This may include sharing through personal, laboratory, research-group, institutional, university, or company communication channels.",
      "The platform used for sharing does not by itself determine the licence category. For example, an organic LinkedIn post directly announcing a journal publication may fall within Academic and Institutional Use, while an unrelated product-marketing post using the same artwork may require Organizational and Promotional Use.",
      "Axivion Studio grants rights only to the final deliverables identified in the quote. A complete journal cover or publisher-created promotional graphic may contain third-party logos, mastheads, typography, text, layouts, branding, or other material controlled by the publisher or another rights holder. The Axivion Studio licence does not grant rights to that third-party material. The client remains responsible for following applicable publisher sharing rules, permissions, attribution requirements, and platform restrictions.",
      "Separate reuse of the underlying Axivion Studio artwork as a general company, product, technology, recruitment, public-relations, or marketing asset requires the applicable Organizational and Promotional Use licence unless otherwise confirmed in writing.",
    ],
  },
  {
    title: "Restricted use and practical sharing",
    body: [
      "Unless the quote allows it, the client may not resell, sublicense, redistribute as a reusable asset, upload to a stock library, resell as a template, use for AI training, fine-tune models, create datasets, generate synthetic data, or use deliverables outside the agreed licence.",
      "Ordinary project sharing is allowed where needed to support the licensed use. This may include sharing final Axivion Studio deliverables with journal publishers, printers, co-authors, collaborators, institutional communications teams, web developers, approved contractors, or similar service providers. Those third parties receive only what they need to support the client's licensed use and do not receive independent reuse rights.",
      "If the client wants AI-training, dataset, sublicensing, corporate-partner reuse, resale, merchandise, packaging, paid advertising, publisher-material reuse beyond applicable publisher permissions, or unusually broad campaign rights, those rights should be requested before work begins or handled through a written licence expansion.",
    ],
  },
  {
    title: "Scientific accuracy, approval, and corrections",
    body: [
      "Axivion Studio uses reasonable professional care to create clear, polished scientific and technical visuals. The client supplies scientific context, source material, labels, claims, reference data, and technical direction, and must involve appropriate researchers, authors, engineers, or reviewers before approving final publication or release.",
      "Client approval of a draft, proof, or final file confirms that the client has reviewed the work for accuracy, completeness, spelling, labels, claims, and intended use. Changes requested after final approval may require additional fees and may affect delivery timing.",
      "Production errors introduced by Axivion Studio that materially differ from approved instructions or approved content and are reported promptly after delivery will be corrected within a reasonable scope without consuming a revision round. Changes to client-supplied, previously approved, or newly revised scientific content may require an additional fee.",
      "Axivion Studio does not guarantee journal acceptance, cover selection, grant funding, investor response, research outcomes, commercial performance, or any external approval or result.",
    ],
  },
  {
    title: "Confidentiality, embargoes, and NDAs",
    body: [
      "Both parties will use reasonable care to protect non-public information received from the other and will use that information only for the project. Confidential information may include unpublished research, patent-sensitive information, proprietary technical material, private business information, and non-public project files.",
      "Confidentiality does not apply to information that is already public without breach, was already lawfully known, is independently developed without using the other party's confidential information, is lawfully received from another source, or must be disclosed by law or valid legal process. Where legally required disclosure occurs, the receiving party should give reasonable notice where permitted.",
      "Confidential, embargoed, unpublished, export-controlled, patient-related, personal, patent-critical, or highly sensitive material should be identified before work begins and should not be sent through ordinary email before appropriate arrangements are confirmed. Ordinary email should not be treated as fully secure.",
      "A signed non-disclosure agreement may replace or supplement these confidentiality terms. If a signed NDA conflicts with these general terms on confidentiality, the signed NDA takes priority for that subject.",
    ],
  },
  {
    title: "Portfolio use and credit",
    body: [
      "Unless confidentiality, embargo, or written portfolio restrictions apply, Axivion Studio may display final approved public work in its portfolio, website, proposals, and promotional materials after public release, publication, expiry of an agreed embargo, or written client approval where required.",
      "Axivion Studio will not knowingly reveal confidential technical information, unpublished results, patent-sensitive details, private data, or unreleased client work. Portfolio restrictions should normally be agreed before work begins. Later requests will be considered in good faith, but may require discussion if public use has already occurred or project materials have already been prepared.",
      "Credit requirements are project-specific. Axivion Studio may request reasonable credit where appropriate, especially for academic, editorial, cover, or public research use, but commercial clients are not required to display public credit unless the quote says so. The client remains responsible for journal, institution, collaborator, author, funder, and publisher credit requirements.",
    ],
  },
  {
    title: "Third-party assets and software",
    body: [
      "Some projects may use properly licensed third-party fonts, textures, plugins, models, software, stock elements, or references. Axivion Studio will use reasonable care regarding third-party materials it selects for the project.",
      "The quote should identify third-party restrictions that materially affect the client's intended use where those restrictions are known and relevant. Source-file delivery may be limited by third-party licences and may exclude assets that Axivion Studio is not permitted to transfer.",
      "The client remains responsible for permissions related to materials it provides. Axivion Studio does not promise that every minor software component, dependency, or background production tool will be itemized unless it materially affects the client's use of the final deliverables.",
    ],
  },
  {
    title: "Cancellation by the client",
    body: [
      "The client may cancel a project by giving written notice. If cancellation occurs before work begins and no non-cancellable costs have been incurred, any refund will be handled according to the quote and invoice status.",
      "After work begins, deposits are non-refundable to the extent they cover reserved production time, completed work, approved milestones, administrative setup, and project planning. The client remains responsible for completed work, approved milestones, committed production time where reasonably documented, non-cancellable third-party expenses, and work performed beyond payments already received.",
      "Axivion Studio will provide a reasonable final accounting based on the project stage, agreed pricing structure, payments received, and remaining deliverables. The full remaining project price is not automatically due unless the quote expressly establishes a reserved-time or cancellation fee.",
    ],
  },
  {
    title: "Cancellation by Axivion Studio",
    body: [
      "Axivion Studio may decline, pause, or cancel work for reasons such as overdue payment, missing required information, impractical or materially changed scope, unlawful or unethical requested use, abusive conduct, serious conflict with the written agreement, health, emergency, or inability to complete the project.",
      "If Axivion Studio cancels because of client fault or unresolved client-side issues, earned amounts, non-refundable deposits, approved milestones, and committed third-party costs may remain payable. If Axivion Studio cancels without client fault, unearned prepaid amounts will be reasonably refunded, while amounts already earned or committed to third-party costs are not automatically refunded.",
      "Where practical, Axivion Studio will communicate the reason for cancellation or suspension and any reasonable next steps, such as transfer of approved final deliverables already paid for, a revised schedule, or a final accounting.",
    ],
  },
  {
    title: "File retention and archival",
    body: [
      "Clients should download, back up, and safely store final files after delivery. Long-term storage, restoration, re-export, or future software compatibility is not guaranteed unless the quote includes archival or maintenance support.",
      "Axivion Studio may retain project files for administrative, portfolio, support, quality-control, or recordkeeping purposes, subject to confidentiality obligations and practical storage limits. Files may later be deleted, archived, or become unavailable.",
      "Reopening, restoring, converting, or re-exporting a past project may require additional fees and may not be possible if source material, software, third-party assets, or old project files are no longer available or compatible.",
    ],
  },
  {
    title: "Privacy and website contact",
    body: [
      "Website privacy information, project confidentiality, client personal information, and sensitive scientific material are related but separate issues. Confidential project material should be handled through the project scope, NDA, or other agreed arrangements rather than ordinary website browsing.",
      "The public website may use basic analytics if analytics are active in the deployed site. Contact requests currently open the visitor's email application through a mailto link. The website does not collect payment information directly. Visitors should avoid sending highly sensitive or confidential project files before confidentiality arrangements are confirmed.",
      "Project communications may include names, email addresses, institutional or company information, project descriptions, references, and files provided by the client. Axivion Studio uses this information to evaluate, quote, perform, administer, and communicate about the project.",
      "These terms do not claim compliance with a specific privacy statute. Privacy, analytics, retention, and cross-border handling should be reviewed professionally as the business operations develop.",
    ],
  },
  {
    title: "Warranty and responsibility",
    body: [
      "Axivion Studio provides services using reasonable professional care and commercially practical effort based on the approved scope and materials provided. The services are creative and technical in nature, and outcomes depend on client input, project complexity, available references, and external requirements.",
      "Except as expressly stated in the quote or required by applicable law, Axivion Studio does not warrant uninterrupted compatibility, perpetual software editability, external publication acceptance, journal or cover selection, grant results, investor response, research outcomes, commercial performance, third-party platform availability, or results controlled by journals, institutions, publishers, funders, platforms, reviewers, or audiences.",
      "Nothing in these terms is intended to exclude obligations, rights, or remedies that cannot legally be excluded.",
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "Subject to applicable law and any project-specific agreement, Axivion Studio's total liability for claims arising from a project is limited to the amount paid to Axivion Studio for the affected project or affected project stage.",
      "Axivion Studio is not responsible for indirect, incidental, consequential, special, punitive, lost-profit, lost-opportunity, lost-funding, lost-publication, lost-data, or reputational damages, except where such limitation is not permitted by applicable law.",
      "This limitation does not attempt to exclude liability for fraud, intentional misconduct, or other liability that cannot legally be limited.",
    ],
  },
  {
    title: "Indemnification",
    body: [
      "The client is responsible for third-party claims, losses, or costs arising from material the client supplied without appropriate permission, materially inaccurate information supplied by the client, use outside the agreed licence, unauthorized modifications, unauthorized redistribution, or breach of the client's written obligations.",
      "Subject to the limitations in these terms and applicable law, Axivion Studio is responsible for third-party claims arising from intentional infringement through material supplied directly by Axivion Studio, intentional misconduct, or clear material breach of its own written obligations.",
      "Each party should give the other reasonable notice of a relevant third-party claim and cooperate in good faith. This clause is not intended to create unlimited indemnity or responsibility for remote, speculative, or unrelated losses.",
    ],
  },
  {
    title: "Force majeure",
    body: [
      "Neither party is responsible for delay or failure caused by events reasonably outside that party's control, such as serious illness, emergency, natural disaster, labour disruption, infrastructure failure, cyber incident, platform outage, supply-chain disruption, legal restriction, or other comparable events.",
      "The affected party should communicate reasonably, mitigate where practical, and work in good faith to adjust the schedule. Force majeure does not excuse payment already due for completed work, approved milestones, or non-cancellable third-party costs.",
    ],
  },
  {
    title: "Independent contractor, subcontractors, and assignment",
    body: [
      "Axivion Studio acts as an independent contractor. These terms do not create an employment, partnership, joint venture, agency, or fiduciary relationship between the parties.",
      "Axivion Studio may use appropriate subcontractors, professional services, software providers, or technical collaborators while remaining responsible for its agreed deliverables. Confidential or sensitive client material should not be shared with outside parties beyond what is reasonably needed for the project or permitted by the quote, NDA, or written approval.",
      "Neither party may assign the project agreement or licence in a way that materially changes the other party's rights or obligations without written approval, except where allowed by the quote, corporate reorganization, merger, sale of substantially related assets, or applicable law. Licence transfers, sublicensing, and corporate-partner reuse must be handled through the quote or written approval.",
    ],
  },
  {
    title: "Governing law and disputes",
    body: [
      "Unless the quote or signed agreement states otherwise, these terms are intended to be governed by the laws of Ontario and the applicable federal laws of Canada.",
      "If a dispute arises, the parties should first try to resolve it through good-faith written discussion and a reasonable opportunity to correct the issue. The parties may use mediation if both agree. Court proceedings may be used where necessary.",
      "These terms do not impose mandatory arbitration, a class-action waiver, an artificial limitation period, or a foreign-law clause.",
    ],
  },
  {
    title: "General provisions and amendments",
    body: [
      "If part of these terms is found invalid or unenforceable, the remaining terms continue to apply as far as reasonably possible. A failure to enforce a provision once does not waive the right to enforce it later.",
      "The accepted quote, scope, invoice or approved change order where relevant, signed agreement where applicable, and the exact published version of these general terms identified in the project documents form the project agreement for the relevant project. For projects using this publication, the reference is Axivion Studio Terms of Service, Version 2026-07-16, available at https://axivionstudio.com/terms. These documents replace prior discussions on the same subject unless those discussions are included in the written project documents.",
      "Website terms may be updated prospectively. Axivion Studio will not use a later website update alone to rewrite the terms of an already accepted project. Material changes affecting an active project should be agreed in writing.",
      "University purchase orders, institutional terms, vendor forms, and client procurement documents may require separate review. They do not override these terms unless accepted in writing by Axivion Studio or clearly incorporated into the project agreement.",
    ],
  },
  {
    title: "Contact information",
    body: [
      "Questions about these terms or a proposed project can be sent to contact@axivionstudio.com.",
      "A project-specific written quote, scope, signed agreement, purchase order, NDA, or invoice may list additional contacts or instructions for that project.",
    ],
  },
];

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const StudioTerms = () => {
  const { rootRef, rootStyle, updateRootPointer } = useStudioPointerGlow();
  const solidNav = useScrolledHeader();

  useEffect(() => {
    document.documentElement.classList.add("scrollbar-studio");
    return () => document.documentElement.classList.remove("scrollbar-studio");
  }, []);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <main
      ref={rootRef}
      className="studio-page studio-terms-page min-h-screen bg-black text-white selection:bg-emerald-300/30 selection:text-white"
      style={rootStyle}
      onPointerMove={updateRootPointer}
    >
      <div className="studio-ambient-layer pointer-events-none fixed inset-0 z-0 print:hidden" aria-hidden>
        <div className="studio-cursor-glow absolute inset-0" />
        <div className="studio-top-glow absolute inset-x-0 top-0 h-[76vh]" />
      </div>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 print:hidden ${solidNav ? "border-b border-white/10 bg-black/75 backdrop-blur" : "border-b border-transparent bg-transparent"}`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/75 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300">
            <ArrowLeft size={18} />
            Back
          </Link>
          <div className="h-5 w-px bg-white/18" />
          <div className="font-semibold tracking-widest">TERMS</div>
          <div className="hidden text-white/45 sm:block">AXIVION STUDIO</div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10 bg-transparent px-5 pb-10 pt-32 sm:px-8 lg:px-10 print:border-b-0 print:bg-white print:px-0 print:py-0">
        <div className="pointer-events-none absolute inset-0 studio-terms-header-glow print:hidden" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300 print:text-black">
              Axivion Studio
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl print:text-3xl print:text-black">
              Axivion Studio Terms of Service
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg print:text-sm print:leading-6 print:text-black">
              These Terms apply to scientific visualization, technical rendering, modeling, figure packages, animations, consulting, and related creative services provided by Axivion Studio.
            </p>
          </div>
          <div className="studio-terms-meta-card flex flex-col gap-3 rounded-[28px] border p-5 text-sm text-white/72 print:border print:border-black print:bg-white print:text-black print:shadow-none">
            <div>
              <span className="block text-xs uppercase tracking-[0.2em] text-white/42 print:text-black/60">Effective date</span>
              <strong className="mt-1 block text-white print:text-black">{EFFECTIVE_DATE}</strong>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-[0.2em] text-white/42 print:text-black/60">Version</span>
              <strong className="mt-1 block text-white print:text-black">{TERMS_VERSION}</strong>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-[0.2em] text-white/42 print:text-black/60">Stable URL</span>
              <a href={TERMS_URL} className="mt-1 block break-all text-emerald-100 underline decoration-emerald-300/40 underline-offset-4 print:text-black">
                {TERMS_URL}
              </a>
            </div>
            <button
              type="button"
              onClick={handlePrint}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/12 px-4 py-2 font-semibold text-emerald-100 transition hover:border-emerald-300/60 hover:bg-emerald-300/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 print:hidden"
            >
              <Printer className="h-4 w-4" aria-hidden="true" />
              Print terms
            </button>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-transparent px-5 py-8 sm:px-8 lg:px-10 print:border-b-0 print:bg-white print:px-0 print:py-4">
        <div className="studio-terms-summary-card relative mx-auto max-w-6xl overflow-hidden rounded-[28px] border p-6 print:border-black print:bg-white print:shadow-none">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(36rem_18rem_at_12%_0%,rgba(52,211,153,0.12),transparent_62%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] print:hidden" />
          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <p className="inline-flex rounded-full border border-emerald-300/28 bg-emerald-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200 print:border-black print:bg-white print:text-black">What matters most</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white print:text-black">Project-specific documents do the practical work.</h2>
              <p className="mt-3 text-sm leading-7 text-white/68 print:text-black">
                This summary is provided for orientation and does not replace the complete terms. For most projects, the written quote and project scope contain the most important project-specific details.
              </p>
            </div>
            <ul className="grid gap-3 text-sm leading-6 text-white/72 sm:grid-cols-2 lg:max-w-2xl print:text-black">
              {IMPORTANT_POINTS.map((point) => (
                <li key={point} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-300 print:text-black" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-10 print:block print:px-0 print:py-0">
        <aside className="hidden lg:block print:hidden">
          <nav aria-label="Terms table of contents" className="studio-terms-toc sticky top-24 rounded-[28px] border p-5">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/45">Contents</p>
            <ol className="space-y-2 text-sm text-white/66">
              {TERMS_SECTIONS.map((section, index) => {
                const displayNumber = section.numberLabel || String(TERMS_SECTIONS.slice(0, index + 1).filter((item) => !item.numberLabel).length).padStart(2, "0");
                const id = section.anchorId || slugify(section.title);

                return (
                  <li key={section.title}>
                    <a
                      href={`#${id}`}
                      className="block rounded-xl px-3 py-2 transition hover:bg-white/[0.055] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
                    >
                      <span className="mr-2 text-white/35">{displayNumber}</span>
                      {section.title}
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>
        </aside>

        <article className="space-y-5 print:space-y-4">
          {TERMS_SECTIONS.map((section, index) => {
            const id = section.anchorId || slugify(section.title);
            const displayNumber = section.numberLabel || String(TERMS_SECTIONS.slice(0, index + 1).filter((item) => !item.numberLabel).length);

            return (
              <section
                key={section.title}
                id={id}
                className="studio-terms-section scroll-mt-28 rounded-[28px] border p-6 sm:p-8 print:break-inside-avoid print:rounded-none print:border-0 print:border-t print:border-black/20 print:bg-white print:p-0 print:pt-4 print:shadow-none"
              >
                <div className="mb-5 flex items-start gap-4">
                  <span className="flex h-9 min-w-9 flex-none items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-300/10 px-2 text-sm font-semibold text-emerald-100 print:border-black print:bg-white print:text-black">
                    {displayNumber}
                  </span>
                  <h2 className="text-2xl font-semibold tracking-tight text-white print:text-xl print:text-black">{section.title}</h2>
                </div>
                <div className="space-y-4 text-base leading-8 text-white/70 print:space-y-2 print:text-sm print:leading-6 print:text-black">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            );
          })}
        </article>
      </div>

      <section className="border-t border-white/10 bg-transparent px-5 py-10 sm:px-8 lg:px-10 print:hidden">
        <div className="studio-terms-footer-card mx-auto flex max-w-6xl flex-col gap-4 rounded-[28px] border p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">Ready to scope a project?</p>
            <p className="mt-1 text-sm text-white/58">Use the quote form to start with project context, intended use, timeline, and references.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-white/82 transition hover:border-white/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
            >
              Back to Studio
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-emerald-300/35 bg-emerald-300/14 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300/60 hover:bg-emerald-300/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
            >
              Request a project quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StudioTerms;
