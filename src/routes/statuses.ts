import { Router } from "https://deno.land/x/oak@v17.1.2/mod.ts";
import { fetchStatuses } from "../controller/index.ts";

const statusesRouter = new Router();
statusesRouter.get("/statuses", fetchStatuses);

export default statusesRouter;
