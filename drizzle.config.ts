import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config();

export default {
  schema: "./src/database/schema.ts", // Path to your Drizzle schema file
  driver: "pg", // Specify the database driver
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string, // Your Supabase database connection string
  },
  out: "./drizzle",
} as Config;
