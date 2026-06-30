import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let frame = 0;
    const start = performance.now();
    const duration = 1100;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setProgress(Math.round(t * 100));
      if (t < 1) frame = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 220);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      aria-hidden={done}
      className={`fixed inset-0 z-[100] grid place-items-center bg-ink text-cream transition-opacity duration-500 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        {/* spinning PCB chip */}
        <div className="relative h-20 w-20">
          <div
            className="absolute inset-0 rounded-xl border-2 border-lime/40"
            style={{ animation: "spin-slow 2s linear infinite" }}
          />
          <div
            className="absolute inset-2 rounded-lg border border-cream/30"
            style={{ animation: "spin-slow 3s linear infinite reverse" }}
          />
          <div className="absolute inset-0 grid place-items-center">
            <svg viewBox="0 0 24 24" width="32" height="32" className="text-lime">
              <rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="1.5">
                <line x1="2" y1="9" x2="6" y2="9" />
                <line x1="2" y1="12" x2="6" y2="12" />
                <line x1="2" y1="15" x2="6" y2="15" />
                <line x1="18" y1="9" x2="22" y2="9" />
                <line x1="18" y1="12" x2="22" y2="12" />
                <line x1="18" y1="15" x2="22" y2="15" />
                <line x1="9" y1="2" x2="9" y2="6" />
                <line x1="12" y1="2" x2="12" y2="6" />
                <line x1="15" y1="2" x2="15" y2="6" />
                <line x1="9" y1="18" x2="9" y2="22" />
                <line x1="12" y1="18" x2="12" y2="22" />
                <line x1="15" y1="18" x2="15" y2="22" />
              </g>
            </svg>
          </div>
        </div>
        <div className="font-display text-sm uppercase tracking-[0.4em] text-cream/80">
          Booting Circuits
        </div>
        <div className="h-1 w-56 overflow-hidden rounded-full bg-cream/15">
          <div
            className="h-full bg-lime transition-[width] duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="font-mono text-xs text-cream/60">{progress}%</div>
      </div>
    </div>
  );
}
