import { DBClient } from "../../database/client.ts";

export interface updateOrganizationOptions {
  db: DBClient;
  uuid: string;
  data?: any;
}

export async function updateOrganization(options: updateOrganizationOptions) {
  const { db, data, uuid } = options;
  return await db.organizations.update({ where: { uuid }, data });
}
