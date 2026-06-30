import { Cpu, Wifi, Zap, Radio } from "lucide-react";

/** Floating PCB chips, traces, and a small drone — decorative electronics motifs. */
export function FloatingPCB({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* PCB trace lines */}
      <svg
        className="absolute inset-0 h-full w-full text-ink/15"
        viewBox="0 0 800 600"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M0 80 L160 80 L200 120 L360 120 L380 100 L560 100" />
        <path d="M0 520 L120 520 L160 480 L320 480 L340 500 L640 500" />
        <path d="M800 200 L680 200 L640 240 L520 240" />
        <circle cx="160" cy="80" r="3" fill="currentColor" />
        <circle cx="380" cy="100" r="3" fill="currentColor" />
        <circle cx="640" cy="500" r="3" fill="currentColor" />
        <circle cx="640" cy="240" r="3" fill="currentColor" />
      </svg>

      {/* Chip 1 */}
      <FloatChip className="left-[6%] top-[14%]" delay={0}>
        <Cpu className="h-5 w-5" />
      </FloatChip>
      {/* Chip 2 */}
      <FloatChip className="right-[8%] top-[28%]" delay={1.4} accent>
        <Wifi className="h-5 w-5" />
      </FloatChip>
      {/* Chip 3 */}
      <FloatChip className="left-[12%] bottom-[14%]" delay={2.6}>
        <Zap className="h-5 w-5" />
      </FloatChip>
      {/* Chip 4 */}
      <FloatChip className="right-[14%] bottom-[10%]" delay={0.8} accent>
        <Radio className="h-5 w-5" />
      </FloatChip>

      {/* Mini drone */}
      <div
        className="absolute right-[18%] top-[8%]"
        style={{ animation: "float 5s ease-in-out infinite" }}
      >
        <Drone />
      </div>
    </div>
  );
}

function FloatChip({
  children,
  className = "",
  delay = 0,
  accent,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  accent?: boolean;
}) {
  return (
    <div
      className={`absolute ${className}`}
      style={{ animation: `float 6s ease-in-out ${delay}s infinite` }}
    >
      <div
        className={`relative grid h-12 w-12 place-items-center rounded-lg border ${
          accent ? "border-ink bg-lime text-ink" : "border-ink/30 bg-paper text-ink"
        } shadow-md`}
      >
        {/* chip pins */}
        <div className="absolute -left-1.5 top-1 h-1 w-1.5 rounded-sm bg-ink/60" />
        <div className="absolute -left-1.5 top-4 h-1 w-1.5 rounded-sm bg-ink/60" />
        <div className="absolute -left-1.5 top-7 h-1 w-1.5 rounded-sm bg-ink/60" />
        <div className="absolute -right-1.5 top-1 h-1 w-1.5 rounded-sm bg-ink/60" />
        <div className="absolute -right-1.5 top-4 h-1 w-1.5 rounded-sm bg-ink/60" />
        <div className="absolute -right-1.5 top-7 h-1 w-1.5 rounded-sm bg-ink/60" />
        {children}
      </div>
    </div>
  );
}

function Drone() {
  return (
    <svg width="72" height="48" viewBox="0 0 72 48" className="text-ink/80">
      {/* rotors */}
      <g style={{ transformOrigin: "12px 10px", animation: "spin-slow 0.4s linear infinite" }}>
        <ellipse cx="12" cy="10" rx="11" ry="1.6" fill="currentColor" opacity="0.5" />
      </g>
      <g style={{ transformOrigin: "60px 10px", animation: "spin-slow 0.4s linear infinite" }}>
        <ellipse cx="60" cy="10" rx="11" ry="1.6" fill="currentColor" opacity="0.5" />
      </g>
      <g style={{ transformOrigin: "12px 38px", animation: "spin-slow 0.4s linear infinite" }}>
        <ellipse cx="12" cy="38" rx="11" ry="1.6" fill="currentColor" opacity="0.5" />
      </g>
      <g style={{ transformOrigin: "60px 38px", animation: "spin-slow 0.4s linear infinite" }}>
        <ellipse cx="60" cy="38" rx="11" ry="1.6" fill="currentColor" opacity="0.5" />
      </g>
      {/* arms */}
      <line x1="18" y1="14" x2="32" y2="22" stroke="currentColor" strokeWidth="2" />
      <line x1="54" y1="14" x2="40" y2="22" stroke="currentColor" strokeWidth="2" />
      <line x1="18" y1="34" x2="32" y2="26" stroke="currentColor" strokeWidth="2" />
      <line x1="54" y1="34" x2="40" y2="26" stroke="currentColor" strokeWidth="2" />
      {/* body */}
      <rect x="30" y="20" width="12" height="8" rx="2" fill="currentColor" />
      <circle cx="36" cy="24" r="1.4" fill="oklch(0.92 0.18 125)" />
    </svg>
  );
}
