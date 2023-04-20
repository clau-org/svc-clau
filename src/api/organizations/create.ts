import {
  defineEventHandler,
  Handler,
  middlewareDbUnique,
  schemaId,
  z,
} from "../../../deps.ts";
import { ServiceContext } from "../../service.ts";
import { createOrganization } from "../../modules/organizations/create.ts";

export const path = "/organizations/create";

export const schema = z.object({
  username: z.string().nullish(),
  name: z.string().nullish(),
  platform_ids: z.array(schemaId).nullish(),
  user_ids: z.array(schemaId).nullish(),
}).strict();

const validateUnique = middlewareDbUnique("organizations", "username");

export const middlewares = [validateUnique];

export const handler: Handler = async (ctx) => {
  const { event, db, logger } = ctx as ServiceContext;

  const organization = await createOrganization({ data: event, db });

  logger.log(`[${path}]`, "organization created");

  return { data: { organization } };
};

export default defineEventHandler({ path, schema, middlewares, handler });
