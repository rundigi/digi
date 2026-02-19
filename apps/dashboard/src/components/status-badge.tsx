interface StatusConfig {
  label: string;
  color: string;
  dot: string;
  animate?: boolean;
}

const statusConfig: Record<string, StatusConfig> = {
  running: {
    label: "Running",
    color: "border-green-500/20 bg-green-500/[0.08] text-green-400",
    dot: "bg-green-400",
  },
  deploying: {
    label: "Deploying",
    color: "border-yellow-500/20 bg-yellow-500/[0.08] text-yellow-400",
    dot: "bg-yellow-400",
    animate: true,
  },
  building: {
    label: "Building",
    color: "border-blue-500/20 bg-blue-500/[0.08] text-blue-400",
    dot: "bg-blue-400",
    animate: true,
  },
  error: {
    label: "Error",
    color: "border-red-500/20 bg-red-500/[0.08] text-red-400",
    dot: "bg-red-400",
  },
  stopped: {
    label: "Stopped",
    color: "border-neutral-700/50 bg-neutral-800/50 text-neutral-500",
    dot: "bg-neutral-600",
  },
};

export function StatusBadge({ status }: { status: string }) {
  const config = statusConfig[status.toLowerCase()] ?? statusConfig.stopped!;

  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${config.color}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        {config.animate && (
          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${config.dot} opacity-60`} />
        )}
        <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${config.dot}`} />
      </span>
      {config.label}
    </span>
  );
}
