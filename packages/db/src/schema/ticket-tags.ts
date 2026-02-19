import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { tickets } from "./tickets";
import { ticketTypes } from "./ticket-types";

export const ticketTags = pgTable("ticket_tags", {
  id: text("id").primaryKey(),
  ticketId: text("ticket_id")
    .notNull()
    .references(() => tickets.id, { onDelete: "cascade" }),
  ticketTypeId: text("ticket_type_id")
    .notNull()
    .references(() => ticketTypes.id, { onDelete: "cascade" }),
  addedByDiscordUserId: text("added_by_discord_user_id").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
