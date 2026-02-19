import { type NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { createDb } from "@digi/db";
import { createAuth } from "@digi/auth/server";
import { and, eq } from "drizzle-orm";
import { accounts, tickets } from "@digi/db/schema";
import { env } from "~/env";

async function getSession() {
  const db = createDb(env.DATABASE_URL);
  const auth = createAuth({
    db,
    baseURL: env.NEXT_PUBLIC_API_URL,
    secret: env.BETTER_AUTH_SECRET,
  });
  const headersList = await headers();
  return auth.api.getSession({ headers: headersList });
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getSession();
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { id } = await params;
  const format = request.nextUrl.searchParams.get("format") ?? "html";

  const db = createDb(env.DATABASE_URL);

  const ticket = await db.query.tickets.findFirst({
    where: eq(tickets.id, id),
    with: {
      messages: {
        orderBy: (m, { asc }) => [asc(m.createdAt)],
        with: { attachments: true },
      },
    },
  });

  if (!ticket) {
    return new NextResponse("Not found", { status: 404 });
  }

  // Validate ownership
  const discordAccount = await db.query.accounts.findFirst({
    where: and(
      eq(accounts.userId, session.user.id),
      eq(accounts.providerId, "discord")
    ),
  });

  if (
    !discordAccount ||
    discordAccount.accountId !== ticket.openerDiscordUserId
  ) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  if (format === "txt") {
    const lines = [
      `Ticket #${ticket.ticketNumber} — ${ticket.status.toUpperCase()}`,
      `Opened by: ${ticket.openerDiscordUsername}`,
      `Created: ${new Date(ticket.createdAt).toISOString()}`,
      ticket.closeReason ? `Close reason: ${ticket.closeReason}` : null,
      "",
      "--- MESSAGES ---",
      "",
      ...ticket.messages.map((msg) => {
        const ts = new Date(msg.createdAt).toISOString();
        const lines = [`[${ts}] ${msg.authorDiscordUsername}: ${msg.content}`];
        for (const att of msg.attachments) {
          lines.push(`  [Attachment: ${att.filename} — ${att.url}]`);
        }
        return lines.join("\n");
      }),
    ]
      .filter((l) => l !== null)
      .join("\n");

    return new NextResponse(lines, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Content-Disposition": `attachment; filename="ticket-${ticket.ticketNumber}.txt"`,
      },
    });
  }

  // HTML format
  const messagesHtml = ticket.messages
    .map((msg) => {
      const ts = new Date(msg.createdAt).toLocaleString("en-US");
      const avatar = msg.authorAvatarUrl
        ? `<img src="${msg.authorAvatarUrl}" style="width:32px;height:32px;border-radius:50%;margin-right:10px;" />`
        : `<div style="width:32px;height:32px;border-radius:50%;background:#3a3a3a;margin-right:10px;display:flex;align-items:center;justify-content:center;font-size:14px;color:#aaa;">${msg.authorDiscordUsername[0]?.toUpperCase()}</div>`;

      const attachmentsHtml =
        msg.attachments.length > 0
          ? `<div style="margin-top:8px;">` +
            msg.attachments
              .map(
                (att) =>
                  `<a href="${att.url}" style="color:#7289da;font-size:12px;display:block;margin-top:4px;">📎 ${att.filename} (${att.contentType ?? "file"})</a>`
              )
              .join("") +
            `</div>`
          : "";

      return `
      <div style="display:flex;padding:12px 16px;${msg.isBot ? "opacity:0.7;" : ""}">
        <div style="flex-shrink:0;">${avatar}</div>
        <div style="flex:1;min-width:0;">
          <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:4px;">
            <span style="font-weight:600;color:#fff;font-size:14px;">${msg.authorDiscordUsername}</span>
            ${msg.isBot ? '<span style="background:#5865f2;color:#fff;font-size:10px;padding:1px 4px;border-radius:3px;font-weight:600;">BOT</span>' : ""}
            <span style="color:#72767d;font-size:12px;">${ts}</span>
          </div>
          <div style="color:#dcddde;font-size:14px;line-height:1.5;white-space:pre-wrap;">${escapeHtml(msg.content)}</div>
          ${attachmentsHtml}
        </div>
      </div>`;
    })
    .join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ticket #${ticket.ticketNumber} Transcript</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #36393f; color: #dcddde; font-family: 'Whitney', 'Helvetica Neue', Helvetica, Arial, sans-serif; }
    .header { background: #2f3136; padding: 20px 24px; border-bottom: 1px solid #202225; }
    .header h1 { color: #fff; font-size: 20px; font-weight: 700; }
    .header .meta { margin-top: 8px; font-size: 13px; color: #72767d; }
    .messages { padding: 16px 0; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Ticket #${ticket.ticketNumber} Transcript</h1>
    <div class="meta">
      Opened by ${ticket.openerDiscordUsername} ·
      ${new Date(ticket.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} ·
      Status: ${ticket.status.toUpperCase()}
      ${ticket.closeReason ? ` · Reason: ${escapeHtml(ticket.closeReason)}` : ""}
    </div>
  </div>
  <div class="messages">${messagesHtml}</div>
</body>
</html>`;

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": `attachment; filename="ticket-${ticket.ticketNumber}-transcript.html"`,
    },
  });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
