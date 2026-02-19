import Link from "next/link";
import { type tickets } from "@digi/db/schema";
import TicketStatusBadge from "./ticket-status-badge";

interface TicketRowProps {
  ticket: typeof tickets.$inferSelect;
}

export default function TicketRow({ ticket }: TicketRowProps) {
  return (
    <Link
      href={`/tickets/${ticket.id}`}
      className="flex items-center justify-between px-6 py-4 transition hover:bg-white/[0.03]"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
          <span className="text-xs font-semibold text-neutral-400">
            #{ticket.ticketNumber}
          </span>
        </div>
        <div>
          <p className="text-sm font-medium text-white">
            Ticket #{ticket.ticketNumber}
          </p>
          <p className="mt-0.5 text-xs text-neutral-500">
            {new Date(ticket.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
            {ticket.closeReason && ` · ${ticket.closeReason}`}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <TicketStatusBadge status={ticket.status} />
        <svg
          className="h-4 w-4 text-neutral-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    </Link>
  );
}
