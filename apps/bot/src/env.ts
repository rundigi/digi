import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  REDIS_URL: z.string(),
  DISCORD_BOT_TOKEN: z.string().min(1),
  DISCORD_APPLICATION_ID: z.string().min(1),
  DISCORD_GUILD_ID: z.string().optional(), // dev only, fast command registration
  BOT_DASHBOARD_URL: z.string().url().default("http://localhost:3003"),
});

export const env = envSchema.parse(process.env);
