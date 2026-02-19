import Pika, { type InferPrefixes } from "pika-id";

const pika = new Pika([
  { prefix: "usr", description: "User" },
  { prefix: "ses", description: "Session" },
  { prefix: "acc", description: "Account" },
  { prefix: "vrf", description: "Verification" },
  { prefix: "srv", description: "Server (Proxmox node)" },
  { prefix: "vm", description: "Virtual machine" },
  { prefix: "ip", description: "IP pool entry" },
  { prefix: "dom", description: "Platform domain" },
  { prefix: "svc", description: "Service" },
  { prefix: "ctr", description: "Container" },
  { prefix: "dpl", description: "Deployment" },
  { prefix: "cdn", description: "Custom domain" },
  { prefix: "dns", description: "DNS record" },
  { prefix: "pln", description: "Plan" },
  { prefix: "sub", description: "Subscription" },
  { prefix: "cpn", description: "Coupon" },
  { prefix: "atk", description: "API token" },
  { prefix: "log", description: "Audit log" },
  { prefix: "job", description: "Job" },
  { prefix: "gld", description: "Guild settings" },
  { prefix: "thr", description: "Ticket helper role" },
  { prefix: "tpn", description: "Ticket panel" },
  { prefix: "tty", description: "Ticket type" },
  { prefix: "tkt", description: "Ticket" },
  { prefix: "tmg", description: "Ticket message" },
  { prefix: "tat", description: "Ticket attachment" },
  { prefix: "ttg", description: "Ticket tag" },
] as const);

export type PikaPrefix = InferPrefixes<typeof pika>;

export function generateId<P extends PikaPrefix>(prefix: P): `${P}_${string}` {
  return pika.gen(prefix);
}
