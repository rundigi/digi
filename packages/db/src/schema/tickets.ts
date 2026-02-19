import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";
import { guildSettings } from "./guild-settings";
import { ticketPanels } from "./ticket-panels";

export const tickets = pgTable("tickets", {
  id: text("id").primaryKey(),
  guildSettingsId: text("guild_settings_id")
    .notNull()
    .references(() => guildSettings.id, { onDelete: "cascade" }),
  panelId: text("panel_id").references(() => ticketPanels.id),
  channelId: text("channel_id").notNull().unique(),
  openerDiscordUserId: text("opener_discord_user_id").notNull(),
  openerDiscordUsername: text("opener_discord_username").notNull(),
  claimedByDiscordUserId: text("claimed_by_discord_user_id"),
  claimedByDiscordUsername: text("claimed_by_discord_username"),
  ticketNumber: integer("ticket_number").notNull(),
  status: text("status", { enum: ["open", "closed", "deleted"] })
    .notNull()
    .default("open"),
  closeReason: text("close_reason"),
  closedAt: timestamp("closed_at"),
  closedByDiscordUserId: text("closed_by_discord_user_id"),
  lastMessageAt: timestamp("last_message_at").defaultNow().notNull(),
  scheduledDeleteAt: timestamp("scheduled_delete_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
