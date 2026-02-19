import {
  type Client,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChannelType,
} from "discord.js";
import { eq } from "drizzle-orm";
import { type Database, tickets } from "@digi/db";

export async function sendInactivityWarning(
  ticket: typeof tickets.$inferSelect,
  client: Client,
  dashboardUrl: string
) {
  const guild = client.guilds.cache.find((g) =>
    g.channels.cache.has(ticket.channelId)
  );
  const channel = guild?.channels.cache.get(ticket.channelId);

  if (!channel || channel.type !== ChannelType.GuildText) return;

  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId(`ticket:close:${ticket.id}`)
      .setLabel("Close Ticket")
      .setStyle(ButtonStyle.Danger)
      .setEmoji("🔒")
  );

  await channel.send({
    content: `<@${ticket.openerDiscordUserId}> This ticket has been inactive for 24 hours. It will be automatically closed if no activity occurs.`,
    components: [row],
  });
}
