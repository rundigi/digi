import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { guildSettings } from "./guild-settings";

export const ticketTypes = pgTable("ticket_types", {
  id: text("id").primaryKey(),
  guildSettingsId: text("guild_settings_id")
    .notNull()
    .references(() => guildSettings.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  emoji: text("emoji"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
