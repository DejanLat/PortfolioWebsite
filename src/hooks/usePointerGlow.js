import { useCallback, useEffect, useRef } from "react";
import { useStudioPointerGlow } from "./useStudioPointerGlow";

const REVEAL_DISTANCE = 320;

export function usePointerGlow() {
  const { rootRef, rootStyle, updateRootPointer } = useStudioPointerGlow();
  const heroRef = useRef(null);
  const pointerY = useRef(null);
  const frameRef = useRef(0);

  const updateGlow = useCallback(() => {
    const root = rootRef.current;
    const hero = heroRef.current;
    if (!root || !hero) return;
    const edge = hero.getBoundingClientRect().bottom;
    const depth = pointerY.current === null ? 0 : Math.max(0, Math.min(1, (pointerY.current - edge) / REVEAL_DISTANCE));
    const progress = depth * depth * (3 - 2 * depth);
    root.style.setProperty("--glow-start", `${Math.max(0, edge)}px`);
    root.style.setProperty("--glow-radius", `${(700 * progress).toFixed(1)}px`);
    root.style.setProperty("--glow-strength", Math.sqrt(progress).toFixed(3));
  }, [rootRef]);

  const schedule = useCallback(() => {
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(updateGlow);
  }, [updateGlow]);

  useEffect(() => {
    heroRef.current = rootRef.current?.querySelector("[data-glow-boundary]");
    if (!heroRef.current) return undefined;
    updateGlow();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(schedule);
    observer?.observe(heroRef.current);
    return () => {
      cancelAnimationFrame(frameRef.current);
      observer?.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      heroRef.current = null;
    };
  }, [rootRef, schedule, updateGlow]);

  const onPointerMove = useCallback((event) => {
    updateRootPointer(event);
    pointerY.current = event.clientY;
    schedule();
  }, [schedule, updateRootPointer]);

  return { rootRef, rootStyle, onPointerMove };
}
