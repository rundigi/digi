import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { guildSettings } from "./guild-settings";

export const ticketPanels = pgTable("ticket_panels", {
  id: text("id").primaryKey(),
  guildSettingsId: text("guild_settings_id")
    .notNull()
    .references(() => guildSettings.id, { onDelete: "cascade" }),
  channelId: text("channel_id").notNull(),
  messageId: text("message_id").notNull(),
  title: text("title").notNull().default("Support Tickets"),
  description: text("description")
    .notNull()
    .default("Click the button below to open a ticket."),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
