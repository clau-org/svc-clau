import {
  defineService,
  ServiceContext as DefaultServiceContext,
} from "../deps.ts";
import { DBClient, default as dbClient } from "./database/client.ts";

// users
import usersCreate from "./api/users/create.ts";
import usersRead from "./api/users/read.ts";
import usersUpdate from "./api/users/update.ts";
import usersDelete from "./api/users/delete.ts";
// platforms
import platformsCreate from "./api/platforms/create.ts";
import platformsRead from "./api/platforms/read.ts";
import platformsUpdate from "./api/platforms/update.ts";
import platformsDelete from "./api/platforms/delete.ts";
// organizations
import organizationsCreate from "./api/organizations/create.ts";
import organizationsRead from "./api/organizations/read.ts";
import organizationsUpdate from "./api/organizations/update.ts";
import organizationsDelete from "./api/organizations/delete.ts";

const eventHandlers = [
  //users
  usersCreate,
  usersRead,
  usersUpdate,
  usersDelete,
  //platforms
  platformsCreate,
  platformsRead,
  platformsUpdate,
  platformsDelete,
  //organizations
  organizationsCreate,
  organizationsRead,
  organizationsUpdate,
  organizationsDelete,
];
export interface ServiceContext extends DefaultServiceContext {
  db: DBClient;
}

export default await defineService({ dbClient, eventHandlers });
