import {
  SlashCommandBuilder,
  PermissionFlagsBits,
  type ChatInputCommandInteraction,
  ChannelType,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} from "discord.js";
import { eq } from "drizzle-orm";
import { type Database, guildSettings, ticketPanels } from "@digi/db";
import { generateId } from "@digi/shared/utils";

export const setupTicketPanelCommand = new SlashCommandBuilder()
  .setName("setup-ticket-panel")
  .setDescription("Post a ticket panel embed in a channel")
  .addChannelOption((opt) =>
    opt
      .setName("channel")
      .setDescription("Channel to post the panel in")
      .addChannelTypes(ChannelType.GuildText)
      .setRequired(true)
  )
  .addStringOption((opt) =>
    opt.setName("title").setDescription("Panel title").setRequired(false)
  )
  .addStringOption((opt) =>
    opt
      .setName("description")
      .setDescription("Panel description")
      .setRequired(false)
  )
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function handleSetupTicketPanel(
  interaction: ChatInputCommandInteraction,
  db: Database
) {
  await interaction.deferReply({ ephemeral: true });

  const guild = interaction.guild;
  if (!guild) {
    await interaction.editReply("This command can only be used in a server.");
    return;
  }

  const channel = interaction.options.getChannel("channel", true);
  const title =
    interaction.options.getString("title") ?? "Support Tickets";
  const description =
    interaction.options.getString("description") ??
    "Click the button below to open a support ticket. A staff member will assist you shortly.";

  const settings = await db.query.guildSettings.findFirst({
    where: eq(guildSettings.guildId, guild.id),
  });

  if (!settings) {
    await interaction.editReply(
      "Server not configured. Run `/setup build-server` first."
    );
    return;
  }

  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setColor(0x3a7dff)
    .setFooter({ text: "Digi Support" });

  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId("ticket:open")
      .setLabel("Open Ticket")
      .setStyle(ButtonStyle.Primary)
      .setEmoji("🎫")
  );

  try {
    const targetChannel = guild.channels.cache.get(channel.id);
    if (!targetChannel?.isTextBased()) {
      await interaction.editReply("Invalid channel.");
      return;
    }

    const message = await (targetChannel as import("discord.js").TextChannel).send({
      embeds: [embed],
      components: [row],
    });

    await db.insert(ticketPanels).values({
      id: generateId("tpn"),
      guildSettingsId: settings.id,
      channelId: channel.id,
      messageId: message.id,
      title,
      description,
    });

    await interaction.editReply(
      `Ticket panel posted in <#${channel.id}>!`
    );
  } catch (err) {
    console.error("Error posting ticket panel:", err);
    await interaction.editReply(
      "Failed to post the ticket panel. Check bot permissions."
    );
  }
}
