import { connectDB } from "../config/index.ts";

export const servicesMiddleware = async () => {
  return await connectDB();
};
