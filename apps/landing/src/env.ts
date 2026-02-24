import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
});

export const env = process.env.SKIP_ENV_VALIDATION
  ? (process.env as unknown as z.infer<typeof envSchema>)
  : envSchema.parse(process.env);
