import {
  SlashCommandBuilder,
  type ChatInputCommandInteraction,
} from "discord.js";
import { eq } from "drizzle-orm";
import {
  type Database,
  tickets,
  ticketTypes,
  ticketTags,
  guildSettings,
} from "@digi/db";
import { generateId } from "@digi/shared/utils";

export const ticketTagCommand = new SlashCommandBuilder()
  .setName("ticket-tag")
  .setDescription("Tag this ticket with a type")
  .addStringOption((opt) =>
    opt
      .setName("type")
      .setDescription("Ticket type name")
      .setRequired(true)
      .setAutocomplete(true)
  );

export async function handleTicketTag(
  interaction: ChatInputCommandInteraction,
  db: Database
) {
  await interaction.deferReply({ ephemeral: true });

  const typeName = interaction.options.getString("type", true);

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

  const settings = await db.query.guildSettings.findFirst({
    where: eq(guildSettings.id, ticket.guildSettingsId),
  });

  if (!settings) {
    await interaction.editReply("Server configuration not found.");
    return;
  }

  const ticketType = await db.query.ticketTypes.findFirst({
    where: eq(ticketTypes.name, typeName),
  });

  if (!ticketType || ticketType.guildSettingsId !== settings.id) {
    await interaction.editReply(`Ticket type "${typeName}" not found.`);
    return;
  }

  await db.insert(ticketTags).values({
    id: generateId("ttg"),
    ticketId: ticket.id,
    ticketTypeId: ticketType.id,
    addedByDiscordUserId: interaction.user.id,
  });

  const emoji = ticketType.emoji ? `${ticketType.emoji} ` : "";
  await interaction.editReply(
    `Tag "${emoji}${ticketType.name}" added to this ticket.`
  );
}
