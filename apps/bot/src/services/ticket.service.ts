import { eq, desc } from "drizzle-orm";
import { type Database, tickets, ticketMessages, ticketAttachments } from "@digi/db";

export async function getTicketWithMessages(ticketId: string, db: Database) {
  return db.query.tickets.findFirst({
    where: eq(tickets.id, ticketId),
    with: {
      messages: {
        orderBy: [desc(ticketMessages.createdAt)],
        with: { attachments: true },
      },
      tags: { with: { ticketType: true } },
    },
  });
}

export async function getTicketsByDiscordUser(
  discordUserId: string,
  db: Database
) {
  return db.query.tickets.findMany({
    where: eq(tickets.openerDiscordUserId, discordUserId),
    orderBy: [desc(tickets.createdAt)],
  });
}
