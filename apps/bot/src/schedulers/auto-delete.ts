import { type Client, ChannelType } from "discord.js";
import { and, eq, lte, isNotNull } from "drizzle-orm";
import { type Database, tickets } from "@digi/db";

const CHECK_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes

export function startAutoDelete(db: Database, client: Client) {
  const run = async () => {
    try {
      const now = new Date();

      const toDelete = await db.query.tickets.findMany({
        where: and(
          eq(tickets.status, "closed"),
          isNotNull(tickets.scheduledDeleteAt),
          lte(tickets.scheduledDeleteAt, now)
        ),
      });

      for (const ticket of toDelete) {
        try {
          // Find and delete the Discord channel
          const guild = client.guilds.cache.find((g) =>
            g.channels.cache.has(ticket.channelId)
          );
          const channel = guild?.channels.cache.get(ticket.channelId);

          if (channel) {
            await channel.delete("Auto-delete: 48h after ticket close");
          }

          // Mark as deleted in DB
          await db
            .update(tickets)
            .set({ status: "deleted", updatedAt: new Date() })
            .where(eq(tickets.id, ticket.id));
        } catch (err) {
          console.error(`Error deleting ticket ${ticket.id}:`, err);
        }
      }
    } catch (err) {
      console.error("Error in auto-delete scheduler:", err);
    }
  };

  void run();
  setInterval(run, CHECK_INTERVAL_MS);
}
