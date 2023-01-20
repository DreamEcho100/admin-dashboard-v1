import { createTRPCRouter } from "../../trpc";

import { clientsRouter } from "./clients";
import { generalRouter } from "./general";
import { managementRouter } from "./management";
import { salesRouter } from "./sales";

export const dashboardRouter = createTRPCRouter({
  clients: clientsRouter,
  sales: salesRouter,
  general: generalRouter,
  management: managementRouter,
});
