import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import "https://deno.land/x/dotenv@v3.2.0/load.ts";

export const postgreClient = new Client({
  user: Deno.env.get("DEV_DB_USER"),
  database: Deno.env.get("DEV_DB_NAME"),
  hostname: Deno.env.get("DEV_DB_HOST"),
  password: Deno.env.get("DEV_DB_PASSWORD"),
  port: Number(Deno.env.get("DEV_DB_PORT")),
});

export const connectDB = async () => {
  try {
    await postgreClient.connect();
    console.log("PostgreSQL DB Connection Succesful!");

    await postgreClient.queryArray("SELECT 1");
    console.log("PostgreSQL DB Ping Successful!");

    return true;
  } catch (error) {
    console.error("PostgreSQL DB Connection Failed!: ", error);
    return false;
  }
};
