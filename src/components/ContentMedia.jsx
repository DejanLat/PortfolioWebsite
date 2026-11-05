import React, { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import WebpImg from "./WebpImg";

const PUBLIC = process.env.PUBLIC_URL || "";

export const contentAsset = (path) => {
  if (!path) return undefined;
  if (/^https?:\/\//i.test(path)) return path;
  return `${PUBLIC}/${path.replace(/^\/+/, "")}`;
};

export function youtubeEmbedUrl(value) {
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase().replace(/^www\./, "").replace(/^m\./, "");
    let id;
    if (host === "youtu.be") id = url.pathname.split("/")[1];
    else if (["youtube.com", "youtube-nocookie.com"].includes(host)) {
      id = url.searchParams.get("v");
      if (!id && /^(embed|shorts|live)$/.test(url.pathname.split("/")[1])) id = url.pathname.split("/")[2];
    }
    if (!/^[\w-]{11}$/.test(id || "")) return null;
    return `https://www.youtube-nocookie.com/embed/${id}`;
  } catch { return null; }
}

export default function ContentMedia({ item }) {
  const [playing, setPlaying] = useState(false);
  if (!item) return null;
  const media = typeof item === "string" ? { src: item } : item;
  const source = media.url || media.src || media.href;
  const embed = youtubeEmbedUrl(source);
  const title = media.title || media.alt || media.caption || "Project video";
  const caption = media.caption;
  const video = media.type === "video" || /\.(mp4|webm|mov)(\?|$)/i.test(source || "");

  if (!source) return null;
  if (!embed && (media.type === "youtube" || /^https?:\/\/(www\.|m\.)?(youtube\.com|youtu\.be|youtube-nocookie\.com)\//i.test(source))) {
    return /^https?:\/\//i.test(source) ? <a href={source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm text-white/80 hover:bg-white/10">Open on YouTube<ExternalLink size={16} /></a> : null;
  }
  return (
    <figure className="content-media overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04]">
      {embed ? (
        <div className="relative aspect-video bg-black/30">
          {playing ? <iframe src={`${embed}?autoplay=1&rel=0`} title={title}
            className="absolute inset-0 h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> : (
            <button type="button" onClick={() => setPlaying(true)} aria-label={`Play ${title}`} className="group relative flex h-full w-full flex-col items-center justify-center gap-4 p-6 text-center">
              {media.poster && <img src={contentAsset(media.poster)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" loading="lazy" />}
              <span className="relative grid h-14 w-14 place-items-center rounded-full border border-white/35 bg-white/10 backdrop-blur transition group-hover:scale-105 group-hover:bg-white/20"><Play size={24} fill="currentColor" /></span>
              <span className="relative text-sm font-medium text-white/85">{title}</span>
            </button>
          )}
        </div>
      ) : media.type === "link" ? (
        /^https?:\/\//i.test(source) && <a href={source} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-5 text-sm text-white/85 hover:text-white">{title}<ExternalLink size={16} /></a>
      ) : video ? (
        <video controls playsInline preload="none" poster={contentAsset(media.poster)} aria-label={title} className="max-h-[40rem] w-full bg-black/30">
          <source src={contentAsset(source)} type={media.mimeType} />
          {media.captions && <track kind="captions" src={contentAsset(media.captions)} srcLang="en" label="English" default />}
        </video>
      ) : (
        <WebpImg webp={contentAsset(source)} fallback={contentAsset(media.fallback)} alt={media.alt || caption || ""} className="max-h-[40rem] w-full object-contain" loading="lazy" />
      )}
      {caption && <figcaption className="border-t border-white/10 px-4 py-3 text-sm leading-6 text-white/70">{caption}</figcaption>}
    </figure>
  );
}
