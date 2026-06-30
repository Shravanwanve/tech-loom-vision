import { useEffect, useRef, useState } from "react";

export function ProgressBar({ value, className = "" }: { value: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setW(value);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className={`h-1.5 w-full overflow-hidden rounded-full bg-ink/10 ${className}`}>
      <div
        className="h-full rounded-full bg-ink"
        style={{ width: `${w}%`, transition: "width 1.2s cubic-bezier(0.2,0.8,0.2,1)" }}
      />
    </div>
  );
}
