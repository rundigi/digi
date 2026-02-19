import Link from "next/link";
import { StatusBadge } from "~/components/status-badge";

interface ServiceCardProps {
  id: string;
  name: string;
  status: string;
  subdomain: string;
  createdAt: string;
}

export function ServiceCard({ id, name, status, subdomain, createdAt }: ServiceCardProps) {
  const publicUrl = `https://${subdomain}`;

  return (
    <Link
      href={`/services/${id}`}
      className="group block rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-200 hover:border-white/[0.15] hover:bg-white/[0.04]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-heading text-base font-semibold text-white transition group-hover:text-blue-400">
            {name}
          </h3>
          <a
            href={publicUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mt-1 block truncate text-xs text-neutral-500 transition hover:text-blue-400"
          >
            {subdomain}
          </a>
        </div>
        <StatusBadge status={status} />
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs text-neutral-600">
          Deployed {new Date(createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
        </span>
        <span className="flex items-center gap-1 text-xs text-neutral-600 opacity-0 transition group-hover:opacity-100">
          View
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
            <path d="M5 12h14m-7-7 7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
