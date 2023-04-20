import {
  defineEventHandler,
  Handler,
  middlewareDbExist,
  schemaIds,
  schemaPage,
  z,
} from "../../../deps.ts";
import { ServiceContext } from "../../service.ts";
import { readPlatforms } from "../../modules/platforms/read.ts";

export const path = "/platforms/read";
export const schema = z.object({ ...schemaIds, ...schemaPage });

const validateExist = middlewareDbExist("platforms", { varKey: "platform" });
export const middlewares = [validateExist];

export const handler: Handler = async (ctx) => {
  const { event, db, logger } = ctx as ServiceContext;
  const { platform, page, pageSize } = event;

  if (platform) {
    logger.log(`[${path}]`, "platform read");
    return { data: { platform } };
  }

  // If platform not requested, get all platforms
  const { platforms, maxPage } = await readPlatforms({ db, page, pageSize });

  logger.log(`[${path}]`, "platforms read");

  return { data: { platforms, maxPage } };
};

export default defineEventHandler({ path, schema, middlewares, handler });
