import { type Client, OverwriteType, PermissionFlagsBits } from "discord.js";
import { eq } from "drizzle-orm";
import { type Database, tickets, guildSettings } from "@digi/db";

export async function claimTicket(
  channelId: string,
  claimerDiscordUserId: string,
  claimerDiscordUsername: string,
  db: Database,
  client: Client
): Promise<{ success: boolean; error?: string }> {
  const ticket = await db.query.tickets.findFirst({
    where: eq(tickets.channelId, channelId),
  });

  if (!ticket) {
    return { success: false, error: "This channel is not a ticket." };
  }

  if (ticket.status !== "open") {
    return { success: false, error: "This ticket is not open." };
  }

  if (ticket.claimedByDiscordUserId) {
    return {
      success: false,
      error: `This ticket is already claimed by <@${ticket.claimedByDiscordUserId}>.`,
    };
  }

  // Verify caller has a helper role
  const settings = await db.query.guildSettings.findFirst({
    where: eq(guildSettings.id, ticket.guildSettingsId),
    with: { helperRoles: true },
  });

  if (settings) {
    const guild = client.guilds.cache.get(settings.guildId);
    const member = guild?.members.cache.get(claimerDiscordUserId);
    const helperRoleIds = settings.helperRoles.map((r) => r.roleId);
    const hasHelperRole = member?.roles.cache.some((r) =>
      helperRoleIds.includes(r.id)
    );

    if (!hasHelperRole) {
      return {
        success: false,
        error: "Only helper role members can claim tickets.",
      };
    }
  }

  await db
    .update(tickets)
    .set({
      claimedByDiscordUserId: claimerDiscordUserId,
      claimedByDiscordUsername: claimerDiscordUsername,
      updatedAt: new Date(),
    })
    .where(eq(tickets.id, ticket.id));

  return { success: true };
}
