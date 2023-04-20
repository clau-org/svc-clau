import { DBClient } from "../../database/client.ts";

export interface deleteOrganizationOptions {
  db: DBClient;
  uuid: string;
}

export async function deleteOrganization(options: deleteOrganizationOptions) {
  const { db, uuid } = options;
  return await db.organizations.delete({ where: { uuid } });
}
