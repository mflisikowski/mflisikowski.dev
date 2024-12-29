import { postgresAdapter } from "@payloadcms/db-postgres";
import type { Config } from "payload";

export const db: Config["db"] = postgresAdapter({
  idType: "uuid",
  pool: {
    connectionString: process.env.DATABASE_URI!,
  },
});
