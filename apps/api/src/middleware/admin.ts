import { type Context } from "../context.js";
import { requireAuth } from "./auth.js";
import { AuthorizationError } from "../errors.js";

export function requireAdmin(ctx: Context): asserts ctx is Context & {
  user: NonNullable<Context["user"]> & { role: "admin" };
  session: NonNullable<Context["session"]>;
} {
  requireAuth(ctx);
  if (ctx.user.role !== "admin") {
    throw new AuthorizationError("Admin access required");
  }
}
