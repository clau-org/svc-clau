import { DBClient } from "../../database/client.ts";

export interface updatePlatformOptions {
  db: DBClient;
  uuid: string;
  data?: any;
}

export async function updatePlatform(options: updatePlatformOptions) {
  const { db, data, uuid } = options;
  return await db.platforms.update({ where: { uuid }, data });
}
