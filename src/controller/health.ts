import { Context } from "https://deno.land/x/oak@v17.1.2/mod.ts";

export const healthCheck = (ctx: Context) => {
  try {
    ctx.response.body = {
      success: true,
      message: "Orders API up and running!",
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
