import migrationRunner from "node-pg-migrate";
import { join } from "node:path";

export default async function migrations(request, response) {
  const migrations = await migrationRunner({
    databaseUrl: process.env.DATABASE_URL,
    dryRun: true,
    dir: join("infra", "migrations"),
    direction: "up",
  });
  response.status(200).json(migrations);
}

// async para tornar a função asincrona
// await para aguardar a resposta
//snake_case parajson sempre separado por _
