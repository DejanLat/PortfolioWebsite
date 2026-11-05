import React, { useEffect, useRef, useState } from "react";

// Keep the document scroll native, but draw its scrollbar over the full-bleed artwork.
export default function OverlayPageScrollbar({ controls }) {
  const trackRef = useRef(null);
  const thumbRef = useRef(null);
  const dragRef = useRef(null);
  const valuesRef = useRef(null);
  const [values, setValues] = useState(null);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("car-overlay-scrollbar-active");
    let frame = 0;
    const update = () => {
      const trackHeight = Math.max(0, window.innerHeight - 12);
      const documentHeight = document.scrollingElement?.scrollHeight || html.scrollHeight;
      const maxScroll = Math.max(0, documentHeight - window.innerHeight);
      const thumbHeight = Math.min(trackHeight, Math.max(36, trackHeight * window.innerHeight / documentHeight));
      const progress = maxScroll ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
      const next = { maxScroll, trackHeight, thumbHeight, top: progress * (trackHeight - thumbHeight), progress };
      valuesRef.current = next;
      setValues(next);
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    return () => {
      html.classList.remove("car-overlay-scrollbar-active");
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  const scrollAt = (clientY, offset) => {
    const current = valuesRef.current;
    if (!current || !trackRef.current) return;
    const travel = current.trackHeight - current.thumbHeight;
    const position = clientY - trackRef.current.getBoundingClientRect().top - offset;
    window.scrollTo({ top: travel > 0 ? Math.max(0, Math.min(1, position / travel)) * current.maxScroll : 0, behavior: "instant" });
  };
  const onPointerDown = (event) => {
    if (event.button !== 0 || !valuesRef.current) return;
    event.preventDefault();
    const offset = event.target === thumbRef.current
      ? event.clientY - thumbRef.current.getBoundingClientRect().top
      : valuesRef.current.thumbHeight / 2;
    dragRef.current = offset;
    event.currentTarget.setPointerCapture(event.pointerId);
    scrollAt(event.clientY, offset);
  };
  const onKeyDown = (event) => {
    const max = valuesRef.current?.maxScroll || 0;
    const destinations = { ArrowDown: window.scrollY + 40, ArrowUp: window.scrollY - 40,
      PageDown: window.scrollY + window.innerHeight * 0.9, PageUp: window.scrollY - window.innerHeight * 0.9,
      Home: 0, End: max };
    if (!(event.key in destinations)) return;
    event.preventDefault();
    window.scrollTo({ top: Math.max(0, Math.min(max, destinations[event.key])), behavior: "instant" });
  };
  if (!values?.maxScroll) return null;
  return (
    <div ref={trackRef} className="car-overlay-scrollbar" role="scrollbar" aria-label="Page scroll"
      aria-controls={controls} aria-orientation="vertical" aria-valuemin={0} aria-valuemax={100}
      aria-valuenow={Math.round(values.progress * 100)} aria-valuetext={`${Math.round(values.progress * 100)}% down the page`}
      tabIndex={0} onKeyDown={onKeyDown} onPointerDown={onPointerDown}
      onPointerMove={(event) => { if (dragRef.current !== null) scrollAt(event.clientY, dragRef.current); }}
      onPointerUp={() => { dragRef.current = null; }} onPointerCancel={() => { dragRef.current = null; }}
      onLostPointerCapture={() => { dragRef.current = null; }}>
      <span ref={thumbRef} className="car-overlay-scrollbar-thumb" style={{ height: values.thumbHeight, transform: `translateY(${values.top}px)` }} />
    </div>
  );
}
