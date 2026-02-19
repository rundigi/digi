import {
  SlashCommandBuilder,
  type ChatInputCommandInteraction,
} from "discord.js";
import { eq } from "drizzle-orm";
import { type Database, tickets } from "@digi/db";

export const ticketUnclaimCommand = new SlashCommandBuilder()
  .setName("ticket-unclaim")
  .setDescription("Unclaim this support ticket");

export async function handleTicketUnclaim(
  interaction: ChatInputCommandInteraction,
  db: Database
) {
  await interaction.deferReply({ ephemeral: true });

  const ticket = await db.query.tickets.findFirst({
    where: eq(tickets.channelId, interaction.channelId),
  });

  if (!ticket) {
    await interaction.editReply("This channel is not a ticket.");
    return;
  }

  if (ticket.status !== "open") {
    await interaction.editReply("This ticket is not open.");
    return;
  }

  if (ticket.claimedByDiscordUserId !== interaction.user.id) {
    await interaction.editReply("You have not claimed this ticket.");
    return;
  }

  await db
    .update(tickets)
    .set({
      claimedByDiscordUserId: null,
      claimedByDiscordUsername: null,
      updatedAt: new Date(),
    })
    .where(eq(tickets.id, ticket.id));

  await interaction.editReply("Ticket unclaimed.");
}
