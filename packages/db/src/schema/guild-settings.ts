import { pgTable, text, boolean, timestamp } from "drizzle-orm/pg-core";

export const guildSettings = pgTable("guild_settings", {
  id: text("id").primaryKey(),
  guildId: text("guild_id").notNull().unique(),
  ticketCategoryId: text("ticket_category_id"),
  logChannelId: text("log_channel_id"),
  verificationChannelId: text("verification_channel_id"),
  statsServerVcId: text("stats_server_vc_id"),
  statsVmVcId: text("stats_vm_vc_id"),
  statsMembersVcId: text("stats_members_vc_id"),
  setupComplete: boolean("setup_complete").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
