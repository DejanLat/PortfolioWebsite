import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Menu, X } from "lucide-react";
import { useStudioPointerGlow } from "../hooks/useStudioPointerGlow";
import { useScrolledHeader } from "../hooks/useScrolledHeader";
import content from "../content/studio.json";

const PILL_STYLE = {
  border: "1.5px solid rgba(255,255,255,0.2)",
};

export default function StudioFrame({ children, title, backTo, showPublicNav = true, className = "" }) {
  const { rootRef, rootStyle, updateRootPointer } = useStudioPointerGlow();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolledHeader();

  useEffect(() => {
    document.documentElement.classList.add("scrollbar-studio");
    return () => document.documentElement.classList.remove("scrollbar-studio");
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const handleAnchor = (event, href) => {
    closeMenu();
    const id = href.split("#")[1];
    const section = id && document.getElementById(id);
    if (!section) return;
    event.preventDefault();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const headerHeight = document.querySelector("header")?.offsetHeight || 64;
    window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY - headerHeight - 16, behavior: reducedMotion ? "auto" : "smooth" });
    window.history.replaceState(null, "", `#${id}`);
  };
  const proofEvents = accent => ({
    onMouseEnter: event => { event.currentTarget.style.borderColor = accent; event.currentTarget.style.color = accent; },
    onMouseLeave: event => { event.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; event.currentTarget.style.color = "white"; },
  });
  const renderNavItem = (item, mobile = false) => {
    const className = mobile
      ? "rounded-xl px-3 py-3 text-left text-white/80 transition hover:bg-white/10 hover:text-white"
      : "whitespace-nowrap text-white/70 transition-colors hover:text-white";
    return item.to
      ? <Link key={item.label} to={item.to} className={className} onClick={closeMenu}>{item.label}</Link>
      : <a key={item.label} href={item.href} className={className} onClick={event => handleAnchor(event, item.href)}>{item.label}</a>;
  };
  const renderProofLink = (item, mobile = false) => {
    const className = mobile
      ? "rounded-xl px-3 py-3 font-medium text-white transition hover:bg-white/10"
      : "whitespace-nowrap rounded-full px-4 py-2 font-medium text-white";
    return item.to
      ? <Link key={item.label} to={item.to} className={className} style={PILL_STYLE} {...proofEvents(item.accent)} onClick={closeMenu}>{item.label}</Link>
      : <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={className} style={PILL_STYLE} {...proofEvents(item.accent)} onClick={closeMenu}>{item.label}</a>;
  };

  return (
    <div ref={rootRef} style={rootStyle} onPointerMove={updateRootPointer} className={`studio-page min-h-screen w-full text-white ${className}`}>
      <div className="studio-ambient-layer pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div className="studio-cursor-glow absolute inset-0" />
        <div className="studio-top-glow absolute inset-x-0 top-0 h-[70vh]" />
      </div>
      <header className={`site-glass-header fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? "is-scrolled" : ""}`}>
        {showPublicNav ? <>
          <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:h-16 lg:px-8 lg:py-0">
            <Link to="/" className="min-w-0 text-left" onClick={closeMenu}>
              <div className="truncate font-semibold leading-none tracking-widest">{content.brand.headerName}</div>
              <div className="mt-1 truncate text-[11px] uppercase tracking-widest text-white/45">{content.brand.descriptor}</div>
            </Link>
            <nav className="hidden items-center gap-4 text-sm min-[1100px]:flex" aria-label="Axivion Studio navigation">
              {content.navigation.links.map(item => renderNavItem(item))}
              {content.navigation.proofLinks.map(item => renderProofLink(item))}
            </nav>
            <button type="button" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-white/85 transition hover:border-white/30 hover:text-white min-[1100px]:hidden" onClick={() => setMenuOpen(open => !open)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="studio-mobile-navigation">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {menuOpen && <div className="site-glass-menu border-t border-white/10 px-4 py-3 shadow-2xl min-[1100px]:hidden">
            <nav id="studio-mobile-navigation" className="mx-auto grid max-w-7xl gap-1 text-sm" aria-label="Studio mobile navigation">
              {content.navigation.links.map(item => renderNavItem(item, true))}
              {content.navigation.proofLinks.map(item => renderProofLink(item, true))}
            </nav>
          </div>}
        </> : <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
          <Link to={backTo || "/"} className="inline-flex items-center gap-2 text-sm text-white/75 transition hover:text-white"><ArrowLeft size={18} />Back</Link>
          <div className="h-5 w-px bg-white/18" />
          <div className="font-semibold tracking-widest">{title}</div>
          <Link to="/" className="hidden text-white/45 sm:block">{content.brand.headerName}</Link>
        </div>}
      </header>
      {children}
      <footer className="relative border-t border-white/10 bg-black/30">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm leading-6 text-white/50 sm:flex-row sm:justify-between">
          <div>Axivion Studio is the registered business name of Innovations Boutique Inc.<br />&copy; {new Date().getFullYear()} Innovations Boutique Inc. / Axivion Studio</div>
          <div className="flex flex-wrap items-start gap-x-5 gap-y-2">
            <Link to="/dejan-latkovic" className="text-white/70 hover:text-white">About Dejan</Link>
            <Link to="/terms" className="text-white/70 hover:text-white">Terms</Link>
            <Link to="/terms#privacy-and-website-contact" className="text-white/70 hover:text-white">Privacy</Link>
            <a href={`mailto:${content.contact.email}`} className="text-white/70 hover:text-white">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
