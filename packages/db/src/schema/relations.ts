import { relations as drizzleRelations } from "drizzle-orm";
import { users } from "./users";
import { sessions } from "./sessions";
import { accounts } from "./accounts";
import { servers } from "./servers";
import { vms } from "./vms";
import { services } from "./services";
import { containers } from "./containers";
import { deployments } from "./deployments";
import { customDomains } from "./custom-domains";
import { dnsRecords } from "./dns-records";
import { platformDomains } from "./platform-domains";
import { subscriptions } from "./subscriptions";
import { apiTokens } from "./api-tokens";
import { auditLogs } from "./audit-logs";
import { plans } from "./plans";
import { guildSettings } from "./guild-settings";
import { ticketHelperRoles } from "./ticket-helper-roles";
import { ticketPanels } from "./ticket-panels";
import { ticketTypes } from "./ticket-types";
import { tickets } from "./tickets";
import { ticketMessages } from "./ticket-messages";
import { ticketAttachments } from "./ticket-attachments";
import { ticketTags } from "./ticket-tags";

export const usersRelations = drizzleRelations(users, ({ many, one }) => ({
  sessions: many(sessions),
  accounts: many(accounts),
  services: many(services),
  subscription: one(subscriptions, {
    fields: [users.id],
    references: [subscriptions.userId],
  }),
  apiTokens: many(apiTokens),
  auditLogs: many(auditLogs),
  deployments: many(deployments),
}));

export const sessionsRelations = drizzleRelations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const accountsRelations = drizzleRelations(accounts, ({ one }) => ({
  user: one(users, { fields: [accounts.userId], references: [users.id] }),
}));

export const serversRelations = drizzleRelations(servers, ({ many }) => ({
  vms: many(vms),
}));

export const vmsRelations = drizzleRelations(vms, ({ one, many }) => ({
  server: one(servers, { fields: [vms.serverId], references: [servers.id] }),
  services: many(services),
}));

export const servicesRelations = drizzleRelations(services, ({ one, many }) => ({
  user: one(users, { fields: [services.userId], references: [users.id] }),
  vm: one(vms, { fields: [services.vmId], references: [vms.id] }),
  platformDomain: one(platformDomains, {
    fields: [services.platformDomainId],
    references: [platformDomains.id],
  }),
  containers: many(containers),
  deployments: many(deployments),
  customDomains: many(customDomains),
  dnsRecords: many(dnsRecords),
}));

export const containersRelations = drizzleRelations(containers, ({ one }) => ({
  service: one(services, {
    fields: [containers.serviceId],
    references: [services.id],
  }),
}));

export const deploymentsRelations = drizzleRelations(deployments, ({ one }) => ({
  service: one(services, {
    fields: [deployments.serviceId],
    references: [services.id],
  }),
  user: one(users, { fields: [deployments.userId], references: [users.id] }),
}));

export const customDomainsRelations = drizzleRelations(
  customDomains,
  ({ one, many }) => ({
    service: one(services, {
      fields: [customDomains.serviceId],
      references: [services.id],
    }),
    dnsRecords: many(dnsRecords),
  })
);

export const dnsRecordsRelations = drizzleRelations(dnsRecords, ({ one }) => ({
  domain: one(customDomains, {
    fields: [dnsRecords.domainId],
    references: [customDomains.id],
  }),
  service: one(services, {
    fields: [dnsRecords.serviceId],
    references: [services.id],
  }),
}));

export const platformDomainsRelations = drizzleRelations(
  platformDomains,
  ({ many }) => ({
    services: many(services),
  })
);

export const plansRelations = drizzleRelations(plans, ({ many }) => ({
  subscriptions: many(subscriptions),
}));

export const subscriptionsRelations = drizzleRelations(
  subscriptions,
  ({ one }) => ({
    user: one(users, {
      fields: [subscriptions.userId],
      references: [users.id],
    }),
    plan: one(plans, {
      fields: [subscriptions.planId],
      references: [plans.id],
    }),
  })
);

export const apiTokensRelations = drizzleRelations(apiTokens, ({ one }) => ({
  user: one(users, { fields: [apiTokens.userId], references: [users.id] }),
}));

export const auditLogsRelations = drizzleRelations(auditLogs, ({ one }) => ({
  actor: one(users, { fields: [auditLogs.actorId], references: [users.id] }),
}));

export const guildSettingsRelations = drizzleRelations(
  guildSettings,
  ({ many }) => ({
    helperRoles: many(ticketHelperRoles),
    panels: many(ticketPanels),
    ticketTypes: many(ticketTypes),
    tickets: many(tickets),
  })
);

export const ticketHelperRolesRelations = drizzleRelations(
  ticketHelperRoles,
  ({ one }) => ({
    guildSettings: one(guildSettings, {
      fields: [ticketHelperRoles.guildSettingsId],
      references: [guildSettings.id],
    }),
  })
);

export const ticketPanelsRelations = drizzleRelations(
  ticketPanels,
  ({ one, many }) => ({
    guildSettings: one(guildSettings, {
      fields: [ticketPanels.guildSettingsId],
      references: [guildSettings.id],
    }),
    tickets: many(tickets),
  })
);

export const ticketTypesRelations = drizzleRelations(
  ticketTypes,
  ({ one, many }) => ({
    guildSettings: one(guildSettings, {
      fields: [ticketTypes.guildSettingsId],
      references: [guildSettings.id],
    }),
    tags: many(ticketTags),
  })
);

export const ticketsRelations = drizzleRelations(tickets, ({ one, many }) => ({
  guildSettings: one(guildSettings, {
    fields: [tickets.guildSettingsId],
    references: [guildSettings.id],
  }),
  panel: one(ticketPanels, {
    fields: [tickets.panelId],
    references: [ticketPanels.id],
  }),
  messages: many(ticketMessages),
  tags: many(ticketTags),
}));

export const ticketMessagesRelations = drizzleRelations(
  ticketMessages,
  ({ one, many }) => ({
    ticket: one(tickets, {
      fields: [ticketMessages.ticketId],
      references: [tickets.id],
    }),
    attachments: many(ticketAttachments),
  })
);

export const ticketAttachmentsRelations = drizzleRelations(
  ticketAttachments,
  ({ one }) => ({
    message: one(ticketMessages, {
      fields: [ticketAttachments.messageId],
      references: [ticketMessages.id],
    }),
  })
);

export const ticketTagsRelations = drizzleRelations(ticketTags, ({ one }) => ({
  ticket: one(tickets, {
    fields: [ticketTags.ticketId],
    references: [tickets.id],
  }),
  ticketType: one(ticketTypes, {
    fields: [ticketTags.ticketTypeId],
    references: [ticketTypes.id],
  }),
}));

export const relations = {
  usersRelations,
  sessionsRelations,
  accountsRelations,
  serversRelations,
  vmsRelations,
  servicesRelations,
  containersRelations,
  deploymentsRelations,
  customDomainsRelations,
  dnsRecordsRelations,
  platformDomainsRelations,
  plansRelations,
  subscriptionsRelations,
  apiTokensRelations,
  auditLogsRelations,
  guildSettingsRelations,
  ticketHelperRolesRelations,
  ticketPanelsRelations,
  ticketTypesRelations,
  ticketsRelations,
  ticketMessagesRelations,
  ticketAttachmentsRelations,
  ticketTagsRelations,
};
