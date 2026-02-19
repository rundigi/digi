import { type Client } from "discord.js";
import { type Database } from "@digi/db";
import { type RedisClient } from "@digi/redis";
import { registerReadyEvent } from "./ready.js";
import { registerInteractionCreateEvent } from "./interactionCreate.js";
import { registerMessageCreateEvent } from "./messageCreate.js";

interface BotDeps {
  db: Database;
  redis: RedisClient;
}

export function registerEvents(client: Client, deps: BotDeps) {
  registerReadyEvent(client, deps);
  registerInteractionCreateEvent(client, deps);
  registerMessageCreateEvent(client, deps);
}
