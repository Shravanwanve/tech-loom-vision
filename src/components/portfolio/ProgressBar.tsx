export function ProgressBar({ value, className = "" }: { value: number; className?: string }) {
  return (
    <div className={`h-1.5 w-full overflow-hidden rounded-full bg-ink/10 ${className}`}>
      <div className="h-full rounded-full bg-ink" style={{ width: `${value}%` }} />
    </div>
  );
}
