import { Context } from "https://deno.land/x/oak@v17.1.2/mod.ts";
import { getAllOrders } from "../services/index.ts";

export const fetchOrders = async (ctx: Context) => {
  try {
    const orders = await getAllOrders();
    ctx.response.body = {
      success: true,
      orders,
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
