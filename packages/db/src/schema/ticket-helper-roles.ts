import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { guildSettings } from "./guild-settings";

export const ticketHelperRoles = pgTable("ticket_helper_roles", {
  id: text("id").primaryKey(),
  guildSettingsId: text("guild_settings_id")
    .notNull()
    .references(() => guildSettings.id, { onDelete: "cascade" }),
  roleId: text("role_id").notNull(),
  roleName: text("role_name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
