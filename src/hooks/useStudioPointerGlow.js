import { useCallback, useEffect, useMemo, useRef } from "react";

const HIDDEN_POINT = "-9999px";

export function useStudioPointerGlow() {
  const rootRef = useRef(null);
  const reducedMotionRef = useRef(false);
  const finePointerRef = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return undefined;
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");

    const syncPreferences = () => {
      reducedMotionRef.current = reducedMotionQuery.matches;
      finePointerRef.current = !coarsePointerQuery.matches;

      if (rootRef.current && (reducedMotionRef.current || !finePointerRef.current)) {
        rootRef.current.style.setProperty("--mx", HIDDEN_POINT);
        rootRef.current.style.setProperty("--my", HIDDEN_POINT);
        rootRef.current.style.setProperty("--hx", HIDDEN_POINT);
        rootRef.current.style.setProperty("--hy", HIDDEN_POINT);
      }
    };

    syncPreferences();

    reducedMotionQuery.addEventListener?.("change", syncPreferences);
    coarsePointerQuery.addEventListener?.("change", syncPreferences);

    return () => {
      reducedMotionQuery.removeEventListener?.("change", syncPreferences);
      coarsePointerQuery.removeEventListener?.("change", syncPreferences);
    };
  }, []);

  const rootStyle = useMemo(
    () => ({
      "--mx": HIDDEN_POINT,
      "--my": HIDDEN_POINT,
      "--hx": HIDDEN_POINT,
      "--hy": HIDDEN_POINT,
    }),
    []
  );

  const updateRootPointer = useCallback((event) => {
    if (reducedMotionRef.current || !finePointerRef.current || !rootRef.current) return;
    rootRef.current.style.setProperty("--mx", `${event.clientX}px`);
    rootRef.current.style.setProperty("--my", `${event.clientY}px`);
  }, []);

  const updateLocalPointer = useCallback((targetRef, event) => {
    if (reducedMotionRef.current || !finePointerRef.current || !targetRef?.current) return;
    const bounds = targetRef.current.getBoundingClientRect();
    targetRef.current.style.setProperty("--hx", `${event.clientX - bounds.left}px`);
    targetRef.current.style.setProperty("--hy", `${event.clientY - bounds.top}px`);
  }, []);

  return { rootRef, rootStyle, updateRootPointer, updateLocalPointer };
}
