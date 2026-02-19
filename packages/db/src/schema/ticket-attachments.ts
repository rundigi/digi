import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";
import { ticketMessages } from "./ticket-messages";

export const ticketAttachments = pgTable("ticket_attachments", {
  id: text("id").primaryKey(),
  messageId: text("message_id")
    .notNull()
    .references(() => ticketMessages.id, { onDelete: "cascade" }),
  discordAttachmentId: text("discord_attachment_id").notNull(),
  filename: text("filename").notNull(),
  contentType: text("content_type"),
  url: text("url").notNull(),
  sizeBytes: integer("size_bytes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
