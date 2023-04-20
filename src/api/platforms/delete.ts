import {
  defineEventHandler,
  Handler,
  middlewareDbExist,
  schemaIds,
  z,
} from "../../../deps.ts";
import { ServiceContext } from "../../service.ts";
import { deletePlatform } from "../../modules/platforms/delete.ts";

export const path = "/platforms/delete";
export const schema = z.object({ ...schemaIds });

const validateExist = middlewareDbExist("platforms", { varKey: "platform" });
export const middlewares = [validateExist];

export const handler: Handler = async (ctx) => {
  const { event, db, logger } = ctx as ServiceContext;
  let { platform } = event;

  if (!platform) return { data: { platform } };

  platform = await deletePlatform({ db, uuid: platform.uuid });

  logger.log(`${path}`, "platform deleted");

  return { data: { platform } };
};

export default defineEventHandler({ path, schema, middlewares, handler });
