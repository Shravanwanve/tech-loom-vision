/** Futuristic PCB scene: animated traces, floating chips, scan-line glow,
 *  and a drone flying a curved takeoff path. Purely decorative. */
export function PCBScene({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const stroke = variant === "dark" ? "rgba(212,245,113,0.55)" : "rgba(20,20,20,0.35)";
  const dim = variant === "dark" ? "rgba(212,245,113,0.18)" : "rgba(20,20,20,0.14)";
  const glow = "rgba(212,245,113,0.85)";

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Scan-line glow sweeping vertically */}
      <div
        className="absolute inset-x-0 h-24"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(212,245,113,0.35), transparent)",
          filter: "blur(6px)",
          animation: "pcb-scan 6s linear infinite",
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 700"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="trace-glow" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor={glow} stopOpacity="0" />
            <stop offset="50%" stopColor={glow} stopOpacity="1" />
            <stop offset="100%" stopColor={glow} stopOpacity="0" />
          </linearGradient>

          {/* Drone flight path */}
          <path
            id="drone-path"
            d="M -60 560 Q 220 540 360 440 T 720 280 T 1180 80"
          />
        </defs>

        {/* Faint PCB traces */}
        <g stroke={dim} strokeWidth="1">
          <path d="M0 120 L220 120 L260 160 L520 160 L560 130 L820 130 L860 170 L1200 170" />
          <path d="M0 580 L180 580 L220 540 L440 540 L480 570 L780 570 L820 540 L1200 540" />
          <path d="M1200 300 L980 300 L940 340 L680 340 L640 310 L360 310" />
          <path d="M60 40 L60 220 M300 20 L300 200 M900 40 L900 200" />
        </g>

        {/* Solder pads */}
        <g fill={stroke}>
          {[
            [220, 120], [520, 160], [820, 130], [440, 540], [780, 570],
            [940, 340], [640, 310], [60, 220], [300, 200], [900, 200],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" />
          ))}
        </g>

        {/* Animated glowing traces */}
        <g strokeWidth="2" stroke="url(#trace-glow)" strokeLinecap="round">
          <line x1="-200" y1="120" x2="200" y2="120">
            <animate attributeName="x1" from="-200" to="1200" dur="4s" repeatCount="indefinite" />
            <animate attributeName="x2" from="0" to="1400" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="1400" y1="540" x2="1000" y2="540">
            <animate attributeName="x1" from="1400" to="0" dur="5s" repeatCount="indefinite" />
            <animate attributeName="x2" from="1000" to="-400" dur="5s" repeatCount="indefinite" />
          </line>
          <line x1="-200" y1="340" x2="200" y2="340">
            <animate attributeName="x1" from="-200" to="1200" dur="6s" repeatCount="indefinite" />
            <animate attributeName="x2" from="0" to="1400" dur="6s" repeatCount="indefinite" />
          </line>
        </g>

        {/* Chip nodes */}
        <g>
          {[
            { x: 200, y: 240, w: 60, h: 40 },
            { x: 620, y: 400, w: 80, h: 52 },
            { x: 940, y: 180, w: 54, h: 54 },
            { x: 380, y: 130, w: 48, h: 32 },
          ].map((c, i) => (
            <g key={i} style={{ transformOrigin: `${c.x + c.w / 2}px ${c.y + c.h / 2}px`, animation: `pcb-blink ${3 + i}s ease-in-out ${i * 0.4}s infinite` }}>
              <rect x={c.x} y={c.y} width={c.w} height={c.h} rx="4" fill="none" stroke={stroke} strokeWidth="1.5" />
              <rect x={c.x + 8} y={c.y + 8} width={c.w - 16} height={c.h - 16} fill={dim} />
              {Array.from({ length: 4 }).map((_, k) => (
                <line key={k} x1={c.x + 8 + k * ((c.w - 16) / 3)} y1={c.y - 4} x2={c.x + 8 + k * ((c.w - 16) / 3)} y2={c.y} stroke={stroke} strokeWidth="1" />
              ))}
            </g>
          ))}
        </g>

        {/* Drone flying along path with takeoff */}
        <g>
          {/* path shimmer */}
          <use href="#drone-path" stroke={glow} strokeWidth="1" strokeDasharray="4 8" opacity="0.35" fill="none" />
          <g>
            <g transform="translate(-40,-14)">
              <Drone />
            </g>
            <animateMotion dur="9s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
              <mpath href="#drone-path" />
            </animateMotion>
          </g>
          {/* takeoff exhaust glow */}
          <circle r="14" fill={glow} opacity="0.55">
            <animateMotion dur="9s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1">
              <mpath href="#drone-path" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.6;0.1" dur="9s" repeatCount="indefinite" />
            <animate attributeName="r" values="4;18;10" dur="9s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
}

function Drone() {
  return (
    <svg width="80" height="28" viewBox="0 0 80 28">
      <g>
        <ellipse cx="12" cy="8" rx="10" ry="1.4" fill="rgba(20,20,20,0.55)">
          <animate attributeName="ry" values="1.4;0.4;1.4" dur="0.15s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="68" cy="8" rx="10" ry="1.4" fill="rgba(20,20,20,0.55)">
          <animate attributeName="ry" values="1.4;0.4;1.4" dur="0.15s" repeatCount="indefinite" />
        </ellipse>
      </g>
      <line x1="18" y1="10" x2="34" y2="16" stroke="rgba(20,20,20,0.7)" strokeWidth="1.5" />
      <line x1="62" y1="10" x2="46" y2="16" stroke="rgba(20,20,20,0.7)" strokeWidth="1.5" />
      <rect x="32" y="12" width="16" height="8" rx="2" fill="rgba(20,20,20,0.85)" />
      <circle cx="40" cy="16" r="1.6" fill="rgb(212,245,113)" />
    </svg>
  );
}
