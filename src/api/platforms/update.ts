import {
  defineEventHandler,
  Handler,
  middlewareDbExist,
  schemaIds,
  z,
} from "../../../deps.ts";
import { ServiceContext } from "../../service.ts";
import { schema as schemaCreate } from "./create.ts";
import { updatePlatform } from "../../modules/platforms/update.ts";

// Definición del esquema para la actualización de usuarios
export const updatePlatformSchema = z.object({
  email: z.string().email().optional(),
  name: z.string().nullish().optional(),
  phone: z.string().nullish().optional(),
}).partial();

export const path = "/platforms/update";
export const schema = z.object({ ...schemaIds }).merge(
  schemaCreate.partial(),
);

const validateExist = middlewareDbExist("platforms", { varKey: "platform" });

export const middlewares = [validateExist];

export const handler: Handler = async (ctx) => {
  const { event, db, logger } = ctx as ServiceContext;
  let { platform, id, uuid, ...platformData } = event;

  if (!platform) return { data: { platform } };

  platform = await updatePlatform({
    db,
    uuid: platform.uuid,
    data: platformData,
  });

  logger.log(`[${path}]`, "platforms updated");

  return { data: { platform } };
};

export default defineEventHandler({ path, schema, middlewares, handler });
