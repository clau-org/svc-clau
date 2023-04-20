import { DBClient } from "../../database/client.ts";

export interface readPlatformOptions {
  db: DBClient;
  page?: number;
  pageSize?: number;
}

export async function readPlatforms(options: readPlatformOptions) {
  const { db, page = 1, pageSize = 12 } = options;

  const skip = (page - 1) * pageSize;
  const platforms = await db.platforms.findMany({ skip, take: pageSize });

  const maxPlatforms = await db.platforms.count();
  const maxPage = Math.ceil(maxPlatforms / pageSize);

  return { platforms, maxPage };
}
