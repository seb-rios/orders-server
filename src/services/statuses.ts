import { postgreClient } from "../config/index.ts";
import { Statuses } from "../types/index.ts";

export const getAllStatues = async () => {
  try {
    const result = await postgreClient.queryObject<Statuses>(
      "SELECT * FROM statuses;"
    );
    return result.rows;
  } catch (error) {
    console.error("Statuses Service: Error fetching all statuses", error);
    throw new Error("Unable to retrieve all statuses");
  }
};
