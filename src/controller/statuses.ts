import { Context } from "https://deno.land/x/oak@v17.1.2/mod.ts";
import { getAllStatues } from "../services/index.ts";

export const fetchStatuses = async (ctx: Context) => {
  try {
    const statuses = await getAllStatues();
    ctx.response.body = {
      success: true,
      data: statuses,
    };

    ctx.response.status = 200;
  } catch (error) {
    ctx.response.body = {
      success: false,
      message: error,
    };
    ctx.response.status = 500;
  }
};
