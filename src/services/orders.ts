import { postgreClient } from "../config/db.ts";
import { Orders } from "../types/index.ts";

export const getAllOrders = async () => {
  try {
    const result = await postgreClient.queryObject<Orders>(
      "SELECT * FROM get_all_orders();"
    );
    return result.rows;
  } catch (error) {
    console.error("Orders Service: Error fetching all orders! ", error);
    throw new Error("Unable to retrieve all orders");
  }
};
