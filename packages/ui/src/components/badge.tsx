type Status = "running" | "stopped" | "error" | "deploying" | "pending" | "active" | "inactive" | string;

interface BadgeProps {
  status: Status;
  label?: string;
  className?: string;
}

const statusConfig: Record<string, { dot: string; text: string; bg: string }> = {
  running: { dot: "bg-green-400", text: "text-green-400", bg: "bg-green-400/10 border-green-400/20" },
  active: { dot: "bg-green-400", text: "text-green-400", bg: "bg-green-400/10 border-green-400/20" },
  live: { dot: "bg-green-400", text: "text-green-400", bg: "bg-green-400/10 border-green-400/20" },
  stopped: { dot: "bg-neutral-500", text: "text-neutral-400", bg: "bg-neutral-500/10 border-neutral-500/20" },
  error: { dot: "bg-red-400", text: "text-red-400", bg: "bg-red-400/10 border-red-400/20" },
  failed: { dot: "bg-red-400", text: "text-red-400", bg: "bg-red-400/10 border-red-400/20" },
  deploying: { dot: "bg-blue-400 animate-pulse", text: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/20" },
  building: { dot: "bg-blue-400 animate-pulse", text: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/20" },
  pending: { dot: "bg-yellow-400 animate-pulse", text: "text-yellow-400", bg: "bg-yellow-400/10 border-yellow-400/20" },
};

export function Badge({ status, label, className = "" }: BadgeProps) {
  const config = statusConfig[status] ?? { dot: "bg-neutral-400", text: "text-neutral-400", bg: "bg-neutral-400/10 border-neutral-400/20" };
  const displayLabel = label ?? status;

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${config.bg} ${config.text} ${className}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
      {displayLabel}
    </span>
  );
}
