import { type ticketMessages, type ticketAttachments } from "@digi/db/schema";

type Message = typeof ticketMessages.$inferSelect & {
  attachments: (typeof ticketAttachments.$inferSelect)[];
};

interface MessageViewerProps {
  message: Message;
}

export default function MessageViewer({ message }: MessageViewerProps) {
  const ts = new Date(message.createdAt).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="flex gap-3 py-3">
      {/* Avatar */}
      {message.authorAvatarUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={message.authorAvatarUrl}
          alt={message.authorDiscordUsername}
          className="h-8 w-8 flex-shrink-0 rounded-full"
        />
      ) : (
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-neutral-800 text-xs font-semibold text-neutral-400">
          {message.authorDiscordUsername[0]?.toUpperCase()}
        </div>
      )}

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center gap-2">
          <span className="text-sm font-semibold text-white">
            {message.authorDiscordUsername}
          </span>
          {message.isBot && (
            <span className="rounded bg-indigo-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-indigo-400">
              BOT
            </span>
          )}
          <span className="text-xs text-neutral-600">{ts}</span>
        </div>

        {message.content && (
          <p className="whitespace-pre-wrap text-sm text-neutral-300">
            {message.content}
          </p>
        )}

        {/* Attachments */}
        {message.attachments.length > 0 && (
          <div className="mt-2 space-y-1">
            {message.attachments.map((att) => (
              <a
                key={att.id}
                href={att.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-blue-400 transition hover:bg-white/10"
              >
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </svg>
                {att.filename}
                {att.sizeBytes && (
                  <span className="text-neutral-500">
                    ({formatBytes(att.sizeBytes)})
                  </span>
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
