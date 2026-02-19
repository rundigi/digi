import { pgTable, text, boolean, timestamp } from "drizzle-orm/pg-core";
import { tickets } from "./tickets";

export const ticketMessages = pgTable("ticket_messages", {
  id: text("id").primaryKey(),
  ticketId: text("ticket_id")
    .notNull()
    .references(() => tickets.id, { onDelete: "cascade" }),
  discordMessageId: text("discord_message_id").notNull(),
  authorDiscordUserId: text("author_discord_user_id").notNull(),
  authorDiscordUsername: text("author_discord_username").notNull(),
  authorAvatarUrl: text("author_avatar_url"),
  content: text("content").notNull().default(""),
  isBot: boolean("is_bot").notNull().default(false),
  editedAt: timestamp("edited_at"),
  createdAt: timestamp("created_at").notNull(), // Discord message timestamp, NOT defaultNow
});
