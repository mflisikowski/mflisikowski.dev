import { postgresAdapter } from "@payloadcms/db-postgres";
import type { Config } from "payload";

export const db: Config["db"] = postgresAdapter({
  pool: {
    connectionString: process.env.DATABASE_URI!,
  },
});
