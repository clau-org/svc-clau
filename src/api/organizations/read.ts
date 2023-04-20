import {
  defineEventHandler,
  Handler,
  middlewareDbExist,
  schemaIds,
  schemaPage,
  z,
} from "../../../deps.ts";
import { ServiceContext } from "../../service.ts";
import { readOrganizations } from "../../modules/organizations/read.ts";

export const path = "/organizations/read";
export const schema = z.object({ ...schemaIds, ...schemaPage });

const validateExist = middlewareDbExist("organizations", {
  varKey: "organization",
});
export const middlewares = [validateExist];

export const handler: Handler = async (ctx) => {
  const { event, db, logger } = ctx as ServiceContext;
  const { organization, page, pageSize } = event;

  if (organization) {
    logger.log(`[${path}]`, "organization read");
    return { data: { organization } };
  }

  // If organization not requested, get all organizations
  const { organizations, maxPage } = await readOrganizations({
    db,
    page,
    pageSize,
  });

  logger.log(`[${path}]`, "organizations read");

  return { data: { organizations, maxPage } };
};

export default defineEventHandler({ path, schema, middlewares, handler });
