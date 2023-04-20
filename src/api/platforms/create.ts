import {
  defineEventHandler,
  Handler,
  middlewareDbUnique,
  schemaId,
  z,
} from "../../../deps.ts";
import { ServiceContext } from "../../service.ts";
import { createPlatform } from "../../modules/platforms/create.ts";

export const path = "/platforms/create";

export const schema = z.object({
  key: z.string(),
  username: z.string().nullish(),
  name: z.string().nullish(),
  user_ids: z.array(schemaId).nullish(),
  organization_ids: z.array(schemaId).nullish(),
}).strict();

const validateUniquekey = middlewareDbUnique("platforms", "key");
const validateUniqueusername = middlewareDbUnique("platforms", "username");

export const middlewares = [validateUniquekey, validateUniqueusername];

export const handler: Handler = async (ctx) => {
  const { event, db, logger } = ctx as ServiceContext;

  const platform = await createPlatform({ data: event, db });

  logger.log(`[${path}]`, "platform created");

  return { data: { platform } };
};

export default defineEventHandler({ path, schema, middlewares, handler });
