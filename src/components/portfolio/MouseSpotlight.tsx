import { useEffect, useRef } from "react";

/** Global cursor glow + soft spotlight that follows the mouse. */
export function MouseSpotlight() {
  const dot = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Skip on touch devices.
    if (window.matchMedia?.("(hover: none)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let gx = x;
    let gy = y;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${x - 6}px, ${y - 6}px, 0)`;
      }
    };

    const tick = () => {
      gx += (x - gx) * 0.12;
      gy += (y - gy) * 0.12;
      if (glow.current) {
        glow.current.style.transform = `translate3d(${gx - 220}px, ${gy - 220}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={glow}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] h-[440px] w-[440px] rounded-full opacity-60 mix-blend-multiply blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.92 0.18 125 / 0.55) 0%, transparent 60%)",
        }}
      />
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[70] h-3 w-3 rounded-full bg-ink shadow-[0_0_24px_6px_oklch(0.92_0.18_125/0.6)] transition-transform duration-75"
      />
    </>
  );
}
