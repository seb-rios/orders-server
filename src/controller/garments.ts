import { Context } from "https://deno.land/x/oak@v17.1.2/mod.ts";
import { getAllGarments, getAllGarmentOptions } from "../services/garments.ts";

export const fetchGarments = async (ctx: Context) => {
  try {
    const garments = await getAllGarments();
    ctx.response.body = {
      success: true,
      garments,
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

export const fetchGarmentOptions = async (ctx: Context) => {
  try {
    const garments = await getAllGarmentOptions();
    ctx.response.body = {
      success: true,
      garments,
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
