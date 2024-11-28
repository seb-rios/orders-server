import { Application, Router } from "https://deno.land/x/oak@v17.1.2/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { servicesMiddleware } from "./middleware/index.ts";
import statusesRouter from "./routes/statuses.ts";
import ordersRouter from "./routes/orders.ts";

try {
  const app = new Application();
  const router = new Router();

  const middleware = await servicesMiddleware();

  router.get("/", (context) => {
    context.response.body = `Ordenes Sejim ${Deno.env.get("TEST")}`;
  });

  if (middleware) {
    app.use(oakCors({ origin: Deno.env.get("CLIENT_APP_URL") }));
    app.use(router.routes());
    app.use(statusesRouter.routes());
    app.use(ordersRouter.routes());
    app.use(router.allowedMethods());

    await app.listen({ port: parseInt(Deno.env.get("SERVER_PORT") || "8080") });
  } else {
    console.error("Server failure to start due to middleware service!");
  }
} catch (error) {
  console.error("Server failure to start due to caught exception! ", error);
}
