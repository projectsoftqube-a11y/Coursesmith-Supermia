import { useEffect } from "react";

/**
 * Lenis smooth scrolling, mounted client-side only.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;

    let cancelled = false;
    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const instance = new Lenis({
        duration: 1.1,
        lerp: 0.09,
        smoothWheel: true,
      });
      lenis = instance;
      const loop = (time: number) => {
        instance.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  return null;
}
