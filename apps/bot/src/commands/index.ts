import {
  REST,
  Routes,
  type RESTPostAPIApplicationCommandsJSONBody,
} from "discord.js";
import { env } from "../env.js";
import { setupBuildServerCommand } from "./setup/build-server.js";
import { setupTicketPanelCommand } from "./setup/ticket-panel.js";
import { setupHelperRoleCommand } from "./setup/helper-role.js";
import { ticketCloseCommand } from "./ticket/close.js";
import { ticketClaimCommand } from "./ticket/claim.js";
import { ticketUnclaimCommand } from "./ticket/unclaim.js";
import { ticketTagCommand } from "./ticket/tag.js";

export const allCommands: RESTPostAPIApplicationCommandsJSONBody[] = [
  setupBuildServerCommand.toJSON(),
  setupTicketPanelCommand.toJSON(),
  setupHelperRoleCommand.toJSON(),
  ticketCloseCommand.toJSON(),
  ticketClaimCommand.toJSON(),
  ticketUnclaimCommand.toJSON(),
  ticketTagCommand.toJSON(),
];

// Deploy commands when run with --deploy flag
if (process.argv.includes("--deploy")) {
  const rest = new REST().setToken(env.DISCORD_BOT_TOKEN);

  const target = env.DISCORD_GUILD_ID
    ? Routes.applicationGuildCommands(
        env.DISCORD_APPLICATION_ID,
        env.DISCORD_GUILD_ID
      )
    : Routes.applicationCommands(env.DISCORD_APPLICATION_ID);

  rest
    .put(target, { body: allCommands })
    .then(() => {
      const scope = env.DISCORD_GUILD_ID
        ? `guild ${env.DISCORD_GUILD_ID}`
        : "global";
      console.log(`Successfully registered ${allCommands.length} commands to ${scope}`);
    })
    .catch(console.error);
}
