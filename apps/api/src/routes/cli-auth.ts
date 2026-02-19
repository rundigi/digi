import { type Elysia } from "elysia";
import { apiTokens } from "@digi/db/schema";
import { type Auth } from "@digi/auth/server";
import { type Database } from "@digi/db";
import { type RedisClient } from "@digi/redis";

const CLI_CODE_TTL = 5 * 60; // 5 minutes in seconds
const CLI_CODE_PREFIX = "cli:auth:code:";

async function sha256Hex(value: string): Promise<string> {
  const encoder = new TextEncoder();
  const hashBuffer = await crypto.subtle.digest("SHA-256", encoder.encode(value));
  return Array.from(new Uint8Array(hashBuffer), (b) =>
    b.toString(16).padStart(2, "0")
  ).join("");
}

function generateToken(length = 32): string {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const CLI_AUTH_HTML = (code: string, callbackUrl: string, needsLogin: boolean, errorMsg?: string) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Authorize Digi CLI</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #0a0a0a;
      color: #fff;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .card {
      background: #111;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 12px;
      padding: 40px;
      max-width: 420px;
      width: 100%;
      text-align: center;
    }
    .logo {
      font-size: 24px;
      font-weight: 700;
      color: #3A7DFF;
      margin-bottom: 24px;
      letter-spacing: -0.5px;
    }
    h1 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 12px;
      color: #fff;
    }
    p {
      font-size: 14px;
      color: rgba(255,255,255,0.6);
      margin-bottom: 24px;
      line-height: 1.6;
    }
    .code-box {
      background: #1a1a1a;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 28px;
      font-family: 'SF Mono', 'Fira Code', monospace;
      font-size: 20px;
      letter-spacing: 4px;
      color: #3A7DFF;
      font-weight: 600;
    }
    .form-group {
      margin-bottom: 16px;
      text-align: left;
    }
    .form-group label {
      display: block;
      font-size: 13px;
      color: rgba(255,255,255,0.5);
      margin-bottom: 6px;
    }
    .form-group input {
      width: 100%;
      padding: 10px 12px;
      background: #1a1a1a;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 8px;
      color: #fff;
      font-size: 14px;
      outline: none;
      transition: border-color 0.15s;
    }
    .form-group input:focus {
      border-color: #3A7DFF;
    }
    .error-msg {
      background: rgba(255,68,68,0.1);
      border: 1px solid rgba(255,68,68,0.2);
      border-radius: 8px;
      padding: 10px;
      margin-bottom: 16px;
      font-size: 13px;
      color: #ff6666;
    }
    .btn-approve {
      display: block;
      width: 100%;
      padding: 12px;
      background: #3A7DFF;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      margin-bottom: 12px;
      transition: background 0.15s;
    }
    .btn-approve:hover { background: #2E6BE6; }
    .btn-cancel {
      display: block;
      width: 100%;
      padding: 12px;
      background: transparent;
      color: rgba(255,255,255,0.4);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 8px;
      font-size: 15px;
      cursor: pointer;
      text-decoration: none;
      transition: border-color 0.15s, color 0.15s;
    }
    .btn-cancel:hover { border-color: rgba(255,255,255,0.2); color: rgba(255,255,255,0.6); }
    .warning {
      margin-top: 20px;
      font-size: 12px;
      color: rgba(255,255,255,0.3);
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">Digi</div>
    <h1>Authorize CLI Access</h1>
    <p>${needsLogin
      ? "Sign in to your Digi account to authorize the CLI. Confirm the code matches what you see in your terminal."
      : "A CLI client is requesting access to your Digi account. Confirm the code matches what you see in your terminal."
    }</p>
    <div class="code-box">${escapeHtml(code)}</div>
    ${errorMsg ? `<div class="error-msg">${escapeHtml(errorMsg)}</div>` : ""}
    <form method="POST" action="/auth/cli/approve">
      <input type="hidden" name="code" value="${escapeHtml(code)}">
      <input type="hidden" name="callback" value="${escapeHtml(callbackUrl)}">
      ${needsLogin ? `
      <div class="form-group">
        <label>Email</label>
        <input type="email" name="email" required autocomplete="email" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" name="password" required autocomplete="current-password" />
      </div>
      <button type="submit" class="btn-approve">Sign in &amp; Approve</button>
      ` : `
      <button type="submit" class="btn-approve">Approve Access</button>
      `}
    </form>
    <a href="${escapeHtml(callbackUrl)}?error=cancelled" class="btn-cancel">Cancel</a>
    <p class="warning">This authorization code expires in 5 minutes and can only be used once.</p>
  </div>
</body>
</html>`;

const ERROR_HTML = (message: string) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Error | Digi</title>
  <style>
    body { font-family: sans-serif; background: #0a0a0a; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
    .card { background: #111; border: 1px solid rgba(255,0,0,0.2); border-radius: 12px; padding: 40px; max-width: 420px; text-align: center; }
    h1 { color: #ff4444; margin-bottom: 12px; font-size: 20px; }
    p { color: rgba(255,255,255,0.6); font-size: 14px; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Authorization Failed</h1>
    <p>${escapeHtml(message)}</p>
  </div>
</body>
</html>`;

export function mountCliAuthRoutes(
  app: Elysia,
  deps: { auth: Auth; db: Database; redis: RedisClient }
) {
  return app
    .get("/auth/cli", async (ctx) => {
      const url = new URL(ctx.request.url);
      const code = url.searchParams.get("code");
      const callback = url.searchParams.get("callback");

      if (!code || !callback) {
        return new Response(
          ERROR_HTML("Missing required parameters: code and callback are required."),
          { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } }
        );
      }

      // Validate callback URL must be localhost
      let callbackUrl: URL;
      try {
        callbackUrl = new URL(callback);
      } catch {
        return new Response(
          ERROR_HTML("Invalid callback URL."),
          { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } }
        );
      }

      if (callbackUrl.hostname !== "localhost" && callbackUrl.hostname !== "127.0.0.1") {
        return new Response(
          ERROR_HTML("Callback URL must be a localhost address for security."),
          { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } }
        );
      }

      // Store the pending code in Redis with callback URL
      const redisKey = `${CLI_CODE_PREFIX}${code}`;
      await deps.redis.setex(redisKey, CLI_CODE_TTL, callback);

      // Check if user already has a session
      let hasSession = false;
      try {
        const sessionResult = await deps.auth.api.getSession({
          headers: ctx.request.headers,
        });
        hasSession = !!sessionResult?.user;
      } catch {
        // No session — show login form
      }

      return new Response(CLI_AUTH_HTML(code, callback, !hasSession), {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    })
    .post("/auth/cli/approve", async (ctx) => {
      // Parse form body
      let code: string | null = null;
      let callback: string | null = null;
      let email: string | null = null;
      let password: string | null = null;

      try {
        const formData = await ctx.request.formData();
        code = formData.get("code") as string | null;
        callback = formData.get("callback") as string | null;
        email = formData.get("email") as string | null;
        password = formData.get("password") as string | null;
      } catch {
        return new Response(
          ERROR_HTML("Invalid form submission."),
          { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } }
        );
      }

      if (!code || !callback) {
        return new Response(
          ERROR_HTML("Missing code or callback in form data."),
          { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } }
        );
      }

      // Validate callback URL
      let callbackUrl: URL;
      try {
        callbackUrl = new URL(callback);
      } catch {
        return new Response(
          ERROR_HTML("Invalid callback URL."),
          { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } }
        );
      }

      if (callbackUrl.hostname !== "localhost" && callbackUrl.hostname !== "127.0.0.1") {
        return new Response(
          ERROR_HTML("Callback URL must be a localhost address for security."),
          { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } }
        );
      }

      // Check if code exists in Redis (single-use)
      const redisKey = `${CLI_CODE_PREFIX}${code}`;
      const storedCallback = await deps.redis.get(redisKey);

      if (!storedCallback) {
        return new Response(
          ERROR_HTML("Authorization code has expired or already been used."),
          { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } }
        );
      }

      // Verify user session or sign in
      let userId: string;
      let userEmail: string;

      // First try existing session from cookies
      let sessionResult: { user?: { id: string; email: string } } | null = null;
      try {
        sessionResult = await deps.auth.api.getSession({
          headers: ctx.request.headers,
        });
      } catch {
        // No session cookie
      }

      if (sessionResult?.user) {
        userId = sessionResult.user.id;
        userEmail = sessionResult.user.email;
      } else if (email && password) {
        // No session — attempt sign in with provided credentials
        try {
          const signInResult = await deps.auth.api.signInEmail({
            body: { email, password },
          });

          if (!signInResult?.user?.id) {
            // Re-store the code so user can try again
            await deps.redis.setex(redisKey, CLI_CODE_TTL, callback);
            return new Response(
              CLI_AUTH_HTML(code, callback, true, "Invalid email or password. Please try again."),
              { headers: { "Content-Type": "text/html; charset=utf-8" } }
            );
          }

          userId = signInResult.user.id;
          userEmail = signInResult.user.email;
        } catch {
          // Re-store the code so user can try again
          await deps.redis.setex(redisKey, CLI_CODE_TTL, callback);
          return new Response(
            CLI_AUTH_HTML(code, callback, true, "Sign in failed. Please check your credentials."),
            { headers: { "Content-Type": "text/html; charset=utf-8" } }
          );
        }
      } else {
        // No session and no credentials provided — re-store code and show login form
        await deps.redis.setex(redisKey, CLI_CODE_TTL, callback);
        return new Response(
          CLI_AUTH_HTML(code, callback, true, "Please sign in to authorize the CLI."),
          { headers: { "Content-Type": "text/html; charset=utf-8" } }
        );
      }

      // Delete the code (single-use)
      await deps.redis.del(redisKey);

      // Generate a new API token
      const rawToken = generateToken(32);
      const tokenHash = await sha256Hex(rawToken);
      const tokenId = generateToken(16);

      await deps.db.insert(apiTokens).values({
        id: tokenId,
        userId,
        name: `CLI Token (${new Date().toISOString().slice(0, 10)})`,
        tokenHash,
        createdAt: new Date(),
      });

      // Redirect to callback with token
      const successUrl = new URL(callback);
      successUrl.searchParams.set("token", rawToken);
      successUrl.searchParams.set("email", userEmail);

      return new Response(null, {
        status: 302,
        headers: { Location: successUrl.toString() },
      });
    });
}
