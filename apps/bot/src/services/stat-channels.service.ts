import { type Client } from "discord.js";
import { eq, count } from "drizzle-orm";
import { type Database, guildSettings, servers, vms } from "@digi/db";

const RATE_LIMIT_MS = 10 * 60 * 1000; // 10 minutes minimum between updates
const lastUpdate = new Map<string, number>();

export async function updateStatChannels(
  guildId: string,
  db: Database,
  client: Client
) {
  const now = Date.now();
  const last = lastUpdate.get(guildId) ?? 0;

  if (now - last < RATE_LIMIT_MS) return;
  lastUpdate.set(guildId, now);

  const settings = await db.query.guildSettings.findFirst({
    where: eq(guildSettings.guildId, guildId),
  });

  if (
    !settings?.statsServerVcId &&
    !settings?.statsVmVcId &&
    !settings?.statsMembersVcId
  )
    return;

  const guild = client.guilds.cache.get(guildId);
  if (!guild) return;

  // Get counts
  const [serverCount] = await db
    .select({ count: count() })
    .from(servers);
  const [vmCount] = await db
    .select({ count: count() })
    .from(vms);
  const memberCount = guild.memberCount;

  if (settings.statsServerVcId) {
    const vc = guild.channels.cache.get(settings.statsServerVcId);
    if (vc) {
      await vc.setName(`Servers: ${serverCount?.count ?? 0}`);
    }
  }

  if (settings.statsVmVcId) {
    const vc = guild.channels.cache.get(settings.statsVmVcId);
    if (vc) {
      await vc.setName(`VMs: ${vmCount?.count ?? 0}`);
    }
  }

  if (settings.statsMembersVcId) {
    const vc = guild.channels.cache.get(settings.statsMembersVcId);
    if (vc) {
      await vc.setName(`Members: ${memberCount}`);
    }
  }
}
