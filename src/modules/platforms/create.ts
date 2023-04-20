import { DBClient } from "../../database/client.ts";

export interface createPlatformOptions {
  db: DBClient;
  data: any;
}

export async function createPlatform(options: createPlatformOptions) {
  const { db, data } = options;
  return await db.platforms.create({ data });
}
