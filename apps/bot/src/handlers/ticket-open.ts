import {
  type ButtonInteraction,
  ChannelType,
  OverwriteType,
  PermissionFlagsBits,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} from "discord.js";
import { eq, sql } from "drizzle-orm";
import {
  type Database,
  guildSettings,
  ticketHelperRoles,
  tickets,
} from "@digi/db";
import { generateId } from "@digi/shared/utils";

// In-memory cache of open ticket channel IDs
export const openTicketChannels = new Set<string>();

export async function openTicket(
  interaction: ButtonInteraction,
  db: Database
) {
  await interaction.deferReply({ ephemeral: true });

  const guild = interaction.guild;
  if (!guild) {
    await interaction.editReply("This can only be used in a server.");
    return;
  }

  const settings = await db.query.guildSettings.findFirst({
    where: eq(guildSettings.guildId, guild.id),
    with: { helperRoles: true },
  });

  if (!settings?.ticketCategoryId) {
    await interaction.editReply(
      "Tickets are not configured. Ask an admin to run `/setup build-server`."
    );
    return;
  }

  // Get next ticket number
  const result = await db
    .select({ max: sql<number>`MAX(${tickets.ticketNumber})` })
    .from(tickets)
    .where(eq(tickets.guildSettingsId, settings.id));

  const nextNumber = (result[0]?.max ?? 0) + 1;

  // Build permission overwrites
  const overwrites: import("discord.js").OverwriteResolvable[] = [
    {
      id: guild.roles.everyone.id,
      type: OverwriteType.Role,
      deny: [PermissionFlagsBits.ViewChannel],
    },
    {
      id: interaction.user.id,
      type: OverwriteType.Member,
      allow: [
        PermissionFlagsBits.ViewChannel,
        PermissionFlagsBits.SendMessages,
        PermissionFlagsBits.ReadMessageHistory,
        PermissionFlagsBits.AttachFiles,
      ],
    },
    {
      id: interaction.client.user.id,
      type: OverwriteType.Member,
      allow: [
        PermissionFlagsBits.ViewChannel,
        PermissionFlagsBits.SendMessages,
        PermissionFlagsBits.ManageChannels,
        PermissionFlagsBits.ManageMessages,
      ],
    },
  ];

  for (const helperRole of settings.helperRoles) {
    overwrites.push({
      id: helperRole.roleId,
      type: OverwriteType.Role,
      allow: [
        PermissionFlagsBits.ViewChannel,
        PermissionFlagsBits.SendMessages,
        PermissionFlagsBits.ReadMessageHistory,
        PermissionFlagsBits.AttachFiles,
      ],
    });
  }

  const channel = await guild.channels.create({
    name: `ticket-${nextNumber}`,
    type: ChannelType.GuildText,
    parent: settings.ticketCategoryId,
    permissionOverwrites: overwrites,
  });

  const ticket = await db
    .insert(tickets)
    .values({
      id: generateId("tkt"),
      guildSettingsId: settings.id,
      channelId: channel.id,
      openerDiscordUserId: interaction.user.id,
      openerDiscordUsername: interaction.user.username,
      ticketNumber: nextNumber,
    })
    .returning();

  openTicketChannels.add(channel.id);

  const embed = new EmbedBuilder()
    .setTitle(`Ticket #${nextNumber}`)
    .setDescription(
      `Welcome <@${interaction.user.id}>!\n\nPlease describe your issue and a staff member will assist you shortly.`
    )
    .setColor(0x3a7dff)
    .setTimestamp();

  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId(`ticket:claim:${ticket[0]!.id}`)
      .setLabel("Claim")
      .setStyle(ButtonStyle.Secondary)
      .setEmoji("✋"),
    new ButtonBuilder()
      .setCustomId(`ticket:close:${ticket[0]!.id}`)
      .setLabel("Close")
      .setStyle(ButtonStyle.Danger)
      .setEmoji("🔒")
  );

  await channel.send({ embeds: [embed], components: [row] });

  await interaction.editReply(
    `Your ticket has been created: <#${channel.id}>`
  );
}
