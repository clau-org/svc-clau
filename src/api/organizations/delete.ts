import {
  defineEventHandler,
  Handler,
  middlewareDbExist,
  schemaIds,
  z,
} from "../../../deps.ts";
import { ServiceContext } from "../../service.ts";
import { deleteOrganization } from "../../modules/organizations/delete.ts";

export const path = "/organizations/delete";
export const schema = z.object({ ...schemaIds });

const validateExist = middlewareDbExist("organizations", {
  varKey: "organization",
});
export const middlewares = [validateExist];

export const handler: Handler = async (ctx) => {
  const { event, db, logger } = ctx as ServiceContext;
  let { organization } = event;

  if (!organization) return { data: { organization } };

  organization = await deleteOrganization({ db, uuid: organization.uuid });

  logger.log(`${path}`, "organization deleted");

  return { data: { organization } };
};

export default defineEventHandler({ path, schema, middlewares, handler });
