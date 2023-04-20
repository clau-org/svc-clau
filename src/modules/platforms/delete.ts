import { DBClient } from "../../database/client.ts";

export interface deletePlatformOptions {
  db: DBClient;
  uuid: string;
}

export async function deletePlatform(options: deletePlatformOptions) {
  const { db, uuid } = options;
  return await db.platforms.delete({ where: { uuid } });
}
