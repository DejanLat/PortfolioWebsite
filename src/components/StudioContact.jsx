import React, { useState } from "react";
import { Mail, SendHorizonal } from "lucide-react";
import StudioFrame from "./StudioFrame";
import ContentMedia from "./ContentMedia";
import studio from "../content/studio.json";

const content = studio.contact;
const FIELD_CLASS = "mt-2 w-full rounded-xl border border-white/15 bg-black/60 px-3 py-3 text-sm text-white outline-none focus:border-emerald-300/60";

export default function StudioContact() {
  const [values, setValues] = useState(() => ({ ...Object.fromEntries(content.fields.map(field => [field.name, ""])), message: "" }));
  const update = event => setValues(current => ({ ...current, [event.target.name]: event.target.value }));
  const handleSubmit = event => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const details = content.fields.map(field => `${field.emailLabel || field.label}: ${values[field.name] || ""}`).join("\n");
    const body = `${content.emailGreeting}\n\n${content.emailIntro}\n\n${details}\n\n${content.messageLabel}\n${values.message}`;
    window.location.href = `mailto:${content.email}?subject=${encodeURIComponent(content.emailSubject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <StudioFrame title={content.headerTitle} backTo="/" showPublicNav={false}>
      <main className="relative mx-auto max-w-7xl px-6 pb-20 pt-36">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-emerald-300">{content.eyebrow}</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">{content.heading}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{content.description}</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55">{content.reassurance}</p>
        </div>
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="rounded-3xl border border-emerald-300/20 bg-emerald-300/[0.06] p-6">
            <h2 className="text-xl font-semibold">{content.asideTitle}</h2>
            {content.asideParagraphs.map(paragraph => <p key={paragraph} className="mt-4 text-sm leading-7 text-white/70">{paragraph}</p>)}
            <a href={`mailto:${content.email}`} className="mt-6 inline-flex max-w-full items-center gap-2 break-all text-sm text-emerald-200 underline decoration-emerald-300/30 underline-offset-4"><Mail size={17} className="shrink-0" />{content.email}</a>
            <p className="mt-6 text-xs leading-6 text-white/50">{content.privacyNote}</p>
          </aside>
          <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">{content.formTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-white/60">{content.formIntro}</p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {content.fields.map(field => <label key={field.name} className="block text-sm text-white/75">
                {field.label}
                <input name={field.name} type={field.type || "text"} required={field.required} autoComplete={field.autoComplete} value={values[field.name] || ""} onChange={update} className={FIELD_CLASS} />
              </label>)}
            </div>
            <label className="mt-5 block text-sm text-white/75">{content.messageLabel}
              <textarea name="message" required rows={5} value={values.message} onChange={update} placeholder={content.messagePlaceholder} className={FIELD_CLASS} />
            </label>
            <button type="submit" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300/45 bg-emerald-300/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-300/25">{content.buttonLabel} <SendHorizonal size={16} /></button>
            <p className="mt-4 text-xs leading-6 text-white/55">{content.mailtoNote}</p>
          </form>
        </div>
        {content.media?.length > 0 && <section className="mt-12 grid gap-6 md:grid-cols-2" aria-label="Studio contact media">
          {content.media.map((item, index) => <ContentMedia key={item.id || item.src || item.url || index} item={item} />)}
        </section>}
      </main>
    </StudioFrame>
  );
}
