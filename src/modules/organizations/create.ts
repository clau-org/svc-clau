import { DBClient } from "../../database/client.ts";

export interface createOrganizationOptions {
  db: DBClient;
  data: any;
}

export async function createOrganization(options: createOrganizationOptions) {
  const { db, data } = options;
  return await db.organizations.create({ data });
}
