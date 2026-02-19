"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { gql } from "~/lib/graphql";
import { ServiceCard } from "~/components/service-card";

interface Service {
  id: string;
  name: string;
  status: string;
  subdomain: string;
  createdAt: string;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    gql<{ services: Service[] }>(`
      query Services {
        services {
          id
          name
          status
          subdomain
          createdAt
        }
      }
    `)
      .then((data) => {
        setServices(data.services);
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-semibold text-white">Services</h1>
          <p className="mt-1 text-sm text-neutral-500">Deploy and manage your microservices.</p>
        </div>
        <Link
          href="/services/new"
          className="rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
        >
          New Service
        </Link>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-20">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-500/20 bg-red-500/[0.06] px-4 py-3 text-sm text-red-400">
          Failed to load services: {error}
        </div>
      )}

      {!loading && !error && services.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] py-24">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 text-neutral-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Z" />
            </svg>
          </div>
          <p className="text-sm font-medium text-neutral-300">No services yet</p>
          <p className="mt-1 text-xs text-neutral-600">Deploy your first microservice to get started.</p>
          <Link
            href="/services/new"
            className="mt-5 rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
          >
            Create your first service
          </Link>
        </div>
      )}

      {!loading && !error && services.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      )}
    </div>
  );
}
