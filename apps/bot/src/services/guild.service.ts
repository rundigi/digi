import { eq } from "drizzle-orm";
import { type Database, guildSettings } from "@digi/db";

export async function getGuildSettings(guildId: string, db: Database) {
  return db.query.guildSettings.findFirst({
    where: eq(guildSettings.guildId, guildId),
    with: { helperRoles: true },
  });
}
