"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gql } from "~/lib/graphql";

interface ServiceItem {
  id: string;
  name: string;
  status: string;
}

const navLinks = [
  { href: "/services", label: "Services", icon: ServerIcon },
  { href: "/billing", label: "Billing", icon: CreditCardIcon },
  { href: "/settings", label: "Settings", icon: GearIcon },
];

const statusColors: Record<string, string> = {
  running: "bg-green-500",
  deploying: "bg-yellow-500",
  stopped: "bg-neutral-500",
  error: "bg-red-500",
};

export function Sidebar() {
  const pathname = usePathname();
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [servicesOpen, setServicesOpen] = useState(true);

  useEffect(() => {
    gql<{ services: ServiceItem[] }>(`
      query { services { id name status } }
    `)
      .then((data) => setServices(data.services))
      .catch(() => {});
  }, []);

  return (
    <aside className="fixed left-0 top-14 z-30 flex h-[calc(100vh-3.5rem)] w-56 flex-col border-r border-white/[0.06] bg-neutral-950">
      <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-4">
        {navLinks.map(({ href, label, icon: Icon }) => {
          const active = href === "/services"
            ? pathname === "/services" || pathname === "/services/new"
            : pathname.startsWith(href);
          return (
            <div key={href}>
              <Link
                href={href}
                className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm transition ${
                  active
                    ? "bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20"
                    : "text-neutral-500 hover:bg-white/[0.04] hover:text-neutral-200"
                }`}
              >
                <Icon className={`h-4 w-4 shrink-0 ${active ? "text-blue-400" : "text-neutral-600"}`} />
                {label}
                {href === "/services" && services.length > 0 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setServicesOpen(!servicesOpen);
                    }}
                    className="ml-auto text-neutral-600 hover:text-neutral-400"
                  >
                    <ChevronIcon className={`h-3.5 w-3.5 transition ${servicesOpen ? "rotate-90" : ""}`} />
                  </button>
                )}
              </Link>

              {/* Collapsible services list */}
              {href === "/services" && servicesOpen && services.length > 0 && (
                <div className="ml-4 mt-1 space-y-0.5 border-l border-white/[0.06] pl-3">
                  {services.map((svc) => {
                    const svcActive = pathname === `/services/${svc.id}`;
                    return (
                      <Link
                        key={svc.id}
                        href={`/services/${svc.id}`}
                        className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs transition ${
                          svcActive
                            ? "text-blue-400"
                            : "text-neutral-500 hover:text-neutral-300"
                        }`}
                      >
                        <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${statusColors[svc.status] ?? "bg-neutral-600"}`} />
                        <span className="truncate">{svc.name}</span>
                      </Link>
                    );
                  })}
                  <Link
                    href="/services/new"
                    className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-neutral-600 transition hover:text-neutral-400"
                  >
                    <PlusIcon className="h-3 w-3" />
                    New service
                  </Link>
                </div>
              )}
            </div>
          );
        })}

        <div className="pt-2">
          <Link
            href="/settings/tokens"
            className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm transition ${
              pathname.startsWith("/settings/tokens")
                ? "bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20"
                : "text-neutral-500 hover:bg-white/[0.04] hover:text-neutral-200"
            }`}
          >
            <KeyIcon className={`h-4 w-4 shrink-0 ${pathname.startsWith("/settings/tokens") ? "text-blue-400" : "text-neutral-600"}`} />
            API Tokens
          </Link>
        </div>
      </nav>
    </aside>
  );
}

function ServerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z" />
    </svg>
  );
}

function CreditCardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
    </svg>
  );
}

function GearIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function KeyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
}
