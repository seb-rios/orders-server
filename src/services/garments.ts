import { postgreClient } from "../config/db.ts";
import { Garments, GarmentOptions } from "../types/garments.ts";

export const getAllGarments = async () => {
  try {
    const result = await postgreClient.queryObject<Garments>(
      "SELECT * FROM get_all_garments();"
    );
    return result.rows;
  } catch (error) {
    console.error("Garments Service: Error fetching all garments! ", error);
    throw new Error("Unable to retrieve all garments");
  }
};

export const getAllGarmentOptions = async () => {
  try {
    const result = await postgreClient.queryObject<GarmentOptions>(
      "SELECT * FROM get_all_garment_options();"
    );
    return result.rows;
  } catch (error) {
    console.error(
      "Garments Service: Error fetching all garment options! ",
      error
    );
    throw new Error("Unable to retrieve all garment options");
  }
};
