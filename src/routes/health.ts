import { Router } from "https://deno.land/x/oak@v17.1.2/mod.ts";
import { healthCheck } from "../controller/health.ts";

const healthRouter = new Router();
healthRouter.get("/healthcheck", healthCheck);

export default healthRouter;
