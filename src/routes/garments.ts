import { Router } from "https://deno.land/x/oak@v17.1.2/mod.ts";
import { fetchGarments, fetchGarmentOptions } from "../controller/garments.ts";

const garmentsRouter = new Router();
garmentsRouter.get("/garments", fetchGarments);
garmentsRouter.get("/garments/options", fetchGarmentOptions);

export default garmentsRouter;
