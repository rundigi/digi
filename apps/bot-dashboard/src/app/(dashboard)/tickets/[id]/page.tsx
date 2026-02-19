import { redirect, notFound } from "next/navigation";
import { headers } from "next/headers";
import Link from "next/link";
import { createDb } from "@digi/db";
import { createAuth } from "@digi/auth/server";
import { and, eq } from "drizzle-orm";
import { accounts, tickets } from "@digi/db/schema";
import { env } from "~/env";
import TicketStatusBadge from "../../../components/ticket-status-badge";
import MessageViewer from "../../../components/message-viewer";

async function getSession() {
  const db = createDb(env.DATABASE_URL);
  const auth = createAuth({
    db,
    baseURL: env.NEXT_PUBLIC_API_URL,
    secret: env.BETTER_AUTH_SECRET,
  });
  const headersList = await headers();
  return auth.api.getSession({ headers: headersList });
}

export default async function TicketDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await getSession();
  if (!session) redirect("/login");

  const { id } = await params;
  const db = createDb(env.DATABASE_URL);

  const ticket = await db.query.tickets.findFirst({
    where: eq(tickets.id, id),
    with: {
      messages: {
        orderBy: (m, { asc }) => [asc(m.createdAt)],
        with: { attachments: true },
      },
      tags: { with: { ticketType: true } },
    },
  });

  if (!ticket) notFound();

  // Validate: only the opener may view (match via Discord account)
  const discordAccount = await db.query.accounts.findFirst({
    where: and(
      eq(accounts.userId, session.user.id),
      eq(accounts.providerId, "discord")
    ),
  });

  if (
    !discordAccount ||
    discordAccount.accountId !== ticket.openerDiscordUserId
  ) {
    notFound();
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <Link
            href="/tickets"
            className="mb-3 inline-flex items-center gap-1.5 text-sm text-neutral-500 transition hover:text-neutral-300"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5m7-7-7 7 7 7" />
            </svg>
            Back to tickets
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Ticket #{ticket.ticketNumber}
          </h1>
          <div className="mt-2 flex items-center gap-3">
            <TicketStatusBadge status={ticket.status} />
            <span className="text-sm text-neutral-500">
              {new Date(ticket.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>

        <a
          href={`/tickets/${ticket.id}/download?format=html`}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300 transition hover:bg-white/10"
        >
          Download transcript
        </a>
      </div>

      {/* Tags */}
      {ticket.tags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {ticket.tags.map((tag) => (
            <span
              key={tag.id}
              className="inline-flex items-center gap-1 rounded-lg border border-blue-500/20 bg-blue-500/5 px-2.5 py-1 text-xs text-blue-400"
            >
              {tag.ticketType.emoji && <span>{tag.ticketType.emoji}</span>}
              {tag.ticketType.name}
            </span>
          ))}
        </div>
      )}

      {/* Close reason */}
      {ticket.closeReason && (
        <div className="mb-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
          <p className="text-xs font-medium text-neutral-400">Close reason</p>
          <p className="mt-1 text-sm text-neutral-300">{ticket.closeReason}</p>
        </div>
      )}

      {/* Messages */}
      <div className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02]">
        <div className="border-b border-white/5 px-6 py-4">
          <p className="text-sm font-medium text-white">
            {ticket.messages.length} messages
          </p>
        </div>
        <div className="divide-y divide-white/5 p-4">
          {ticket.messages.map((msg) => (
            <MessageViewer key={msg.id} message={msg} />
          ))}
        </div>
      </div>
    </div>
  );
}
