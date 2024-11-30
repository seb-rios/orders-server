import { Router } from "https://deno.land/x/oak@v17.1.2/mod.ts";
import healthRouter from "./health.ts";
import ordersRouter from "./orders.ts";
import statusesRouter from "./statuses.ts";
import garmentsRouter from "./garments.ts";

const allRouters = [healthRouter, statusesRouter, ordersRouter, garmentsRouter];

const serverRouter = new Router();

try {
  allRouters.forEach((router) => {
    serverRouter.use("/api/v1", router.routes(), router.allowedMethods());
  });
} catch (error) {
  console.error("Index Routes: Error setting server routes! ", error);
  throw new Error("Unable to configure routes for server");
}

export default serverRouter;
