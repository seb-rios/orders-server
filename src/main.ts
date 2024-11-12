import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { servicesMiddleware } from "./middleware/index.ts";

try {
  const app = new Application();
  const router = new Router();

  const middleware = await servicesMiddleware();

  router.get("/", (context) => {
    context.response.body = `Ordenes Sejim ${Deno.env.get("TEST")}`;
  });

  if (middleware) {
    app.use(router.routes());
    app.use(router.allowedMethods());

    await app.listen({ port: 8080 });
  } else {
    console.error("Server failure to start due to middleware service!");
  }
} catch (error) {
  console.error("Server failure to start due to caught exception! ", error);
}
