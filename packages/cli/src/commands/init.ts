import { existsSync, writeFileSync } from "fs";
import { join } from "path";
import { colors, success, info, log, newline } from "../lib/output";
import { confirm } from "../lib/prompt";

const TEMPLATE = `# digi.toml — Digi PaaS deployment config
# Docs: https://digi.run/docs/cli

# [app] Main app must be [app]
# source_type = "github"
# repo_url = ""
# branch = "main"
# port = "3000"

name = "&&NAME&&"

[app]
source_type = "docker"
docker_image = "wrlliam/digi-ts-hello-world:latest"
port = 5001

# Uncomment to add a database:
# [postgres]
# type = "postgres"

# Uncomment to add Redis:
# [redis]
# type = "redis"
`;

export async function initCommand(args: string[]): Promise<void> {
  const name = args[0];
  const tomlPath = join(process.cwd(), "digi.toml");

  if (existsSync(tomlPath)) {
    const overwrite = await confirm(
      `${colors.yellow("⚠")} digi.toml already exists. Overwrite?`,
      false,
    );
    if (!overwrite) {
      info("Cancelled.");
      return;
    }
  }

  const content = name ? TEMPLATE.replace("&&NAME&&", name) : TEMPLATE.replace("&&NAME&&", "Example Name");

  writeFileSync(tomlPath, content);

  newline();
  success("Created digi.toml");
  if (name) {
    success(`Project ${colors.bold(name)} initialized`);
  } else {
    success("Project initialized");
  }

  newline();
  log(`  ${colors.bold("Next steps:")}`);
  log(`    ${colors.blue("digi services create")}    Add services`);
  log(`    ${colors.blue("digi deploy")}             Deploy to digi`);
  newline();
}
