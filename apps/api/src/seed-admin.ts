import { createDb } from "@digi/db";
import { users } from "@digi/db/schema";
import { createAuth } from "@digi/auth/server";
import { eq } from "drizzle-orm";

const DATABASE_URL = process.env.DATABASE_URL;
const BETTER_AUTH_SECRET = process.env.BETTER_AUTH_SECRET;
const BETTER_AUTH_URL = process.env.BETTER_AUTH_URL;

if (!DATABASE_URL || !BETTER_AUTH_SECRET || !BETTER_AUTH_URL) {
  console.error("DATABASE_URL, BETTER_AUTH_SECRET, and BETTER_AUTH_URL are required");
  process.exit(1);
}

const db = createDb(DATABASE_URL);

const auth = createAuth({
  db,
  baseURL: BETTER_AUTH_URL,
  secret: BETTER_AUTH_SECRET,
});

async function seedAdmin() {
  const email = process.argv[2] ?? "admin@digi.dev";
  const name = process.argv[3] ?? "Admin";

  // Generate a secure password
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  const password = Array.from(array, (byte) => chars[byte % chars.length]).join("");

  // Use better-auth's API to create the user (handles password hashing correctly)
  const result = await auth.api.signUpEmail({
    body: {
      email,
      password,
      name,
    },
  });

  if (!result?.user?.id) {
    console.error("Failed to create admin user");
    process.exit(1);
  }

  // Promote to admin role
  await db
    .update(users)
    .set({ role: "admin", emailVerified: true })
    .where(eq(users.id, result.user.id));

  console.log("========================================");
  console.log("Admin user created successfully!");
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  console.log("========================================");
  console.log("IMPORTANT: Save this password now. It will rotate in 24 hours.");
  console.log("After rotation, check server logs for the new password.");

  process.exit(0);
}

seedAdmin().catch((err) => {
  console.error("Failed to seed admin:", err);
  process.exit(1);
});
