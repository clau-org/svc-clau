import {
  defineEventHandler,
  Handler,
  middlewareDbExist,
  schemaIds,
  z,
} from "../../../deps.ts";
import { ServiceContext } from "../../service.ts";
import { schema as schemaCreate } from "./create.ts";
import { updateOrganization } from "../../modules/organizations/update.ts";

// Definición del esquema para la actualización de usuarios
export const updateOrganizationSchema = z.object({
  email: z.string().email().optional(),
  name: z.string().nullish().optional(),
  phone: z.string().nullish().optional(),
}).partial();

export const path = "/organizations/update";
export const schema = z.object({ ...schemaIds }).merge(
  updateOrganizationSchema.partial(),
);

const validateExist = middlewareDbExist("organizations", {
  varKey: "organization",
});

export const middlewares = [validateExist];

export const handler: Handler = async (ctx) => {
  const { event, db, logger } = ctx as ServiceContext;
  let { organization, id, uuid, ...organizationData } = event;

  if (!organization) return { data: { organization } };

  organization = await updateOrganization({
    db,
    uuid: organization.uuid,
    data: organizationData,
  });

  logger.log(`[${path}]`, "organizations updated");

  return { data: { organization } };
};

export default defineEventHandler({ path, schema, middlewares, handler });
