import { Application } from "https://deno.land/x/oak@v17.1.2/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { servicesMiddleware } from "./middleware/index.ts";
import serverRouter from "./routes/index.ts";

try {
  const app = new Application();

  const middleware = await servicesMiddleware();

  if (middleware) {
    app.use(oakCors({ origin: Deno.env.get("CLIENT_APP_URL") }));
    app.use(serverRouter.routes());
    app.use(serverRouter.allowedMethods());

    await app.listen({ port: parseInt(Deno.env.get("SERVER_PORT") || "8080") });
  } else {
    console.error("Server failure to start due to middleware service!");
  }
} catch (error) {
  console.error("Server failure to start due to caught exception! ", error);
}
