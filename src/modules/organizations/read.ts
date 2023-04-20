import { DBClient } from "../../database/client.ts";

export interface readOrganizationOptions {
  db: DBClient;
  page?: number;
  pageSize?: number;
}

export async function readOrganizations(options: readOrganizationOptions) {
  const { db, page = 1, pageSize = 12 } = options;

  const skip = (page - 1) * pageSize;
  const organizations = await db.organizations.findMany({
    skip,
    take: pageSize,
  });

  const maxOrganizations = await db.organizations.count();
  const maxPage = Math.ceil(maxOrganizations / pageSize);

  return { organizations, maxPage };
}
