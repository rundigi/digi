interface TicketStatusBadgeProps {
  status: "open" | "closed" | "deleted";
}

const statusConfig: Record<
  TicketStatusBadgeProps["status"],
  { label: string; className: string }
> = {
  open: {
    label: "Open",
    className:
      "border-green-500/20 bg-green-500/10 text-green-400",
  },
  closed: {
    label: "Closed",
    className:
      "border-neutral-500/20 bg-neutral-500/10 text-neutral-400",
  },
  deleted: {
    label: "Deleted",
    className:
      "border-red-500/20 bg-red-500/10 text-red-400",
  },
};

export default function TicketStatusBadge({ status }: TicketStatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center rounded-lg border px-2 py-0.5 text-xs font-medium ${config.className}`}
    >
      {config.label}
    </span>
  );
}
