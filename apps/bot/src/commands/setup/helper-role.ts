import {
  SlashCommandBuilder,
  PermissionFlagsBits,
  type ChatInputCommandInteraction,
} from "discord.js";
import { and, eq } from "drizzle-orm";
import {
  type Database,
  guildSettings,
  ticketHelperRoles,
} from "@digi/db";
import { generateId } from "@digi/shared/utils";

export const setupHelperRoleCommand = new SlashCommandBuilder()
  .setName("setup-helper-role")
  .setDescription("Add or remove a helper role for tickets")
  .addStringOption((opt) =>
    opt
      .setName("action")
      .setDescription("Add or remove")
      .setRequired(true)
      .addChoices(
        { name: "Add", value: "add" },
        { name: "Remove", value: "remove" }
      )
  )
  .addRoleOption((opt) =>
    opt.setName("role").setDescription("The role").setRequired(true)
  )
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export async function handleSetupHelperRole(
  interaction: ChatInputCommandInteraction,
  db: Database
) {
  await interaction.deferReply({ ephemeral: true });

  const guild = interaction.guild;
  if (!guild) {
    await interaction.editReply("This command can only be used in a server.");
    return;
  }

  const action = interaction.options.getString("action", true) as
    | "add"
    | "remove";
  const role = interaction.options.getRole("role", true);

  const settings = await db.query.guildSettings.findFirst({
    where: eq(guildSettings.guildId, guild.id),
  });

  if (!settings) {
    await interaction.editReply(
      "Server not configured. Run `/setup build-server` first."
    );
    return;
  }

  if (action === "add") {
    const existing = await db.query.ticketHelperRoles.findFirst({
      where: and(
        eq(ticketHelperRoles.guildSettingsId, settings.id),
        eq(ticketHelperRoles.roleId, role.id)
      ),
    });

    if (existing) {
      await interaction.editReply(`<@&${role.id}> is already a helper role.`);
      return;
    }

    await db.insert(ticketHelperRoles).values({
      id: generateId("thr"),
      guildSettingsId: settings.id,
      roleId: role.id,
      roleName: role.name,
    });

    await interaction.editReply(`<@&${role.id}> added as a helper role.`);
  } else {
    await db
      .delete(ticketHelperRoles)
      .where(
        and(
          eq(ticketHelperRoles.guildSettingsId, settings.id),
          eq(ticketHelperRoles.roleId, role.id)
        )
      );

    await interaction.editReply(`<@&${role.id}> removed from helper roles.`);
  }
}
