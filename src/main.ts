import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router.get("/", (context) => {
  context.response.body = "Ordenes Sejim";
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8080 });
