import { Router } from "https://deno.land/x/oak@v17.1.2/mod.ts";
import { fetchOrders } from "../controller/index.ts";

const ordersRouter = new Router();
ordersRouter.get("/orders", fetchOrders);

export default ordersRouter;
