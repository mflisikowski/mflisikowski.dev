import { Users } from "@/collections/Users";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { resendAdapter } from "@payloadcms/email-resend";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";

export default buildConfig({
  editor: lexicalEditor(),

  collections: [Users],

  secret: process.env.PAYLOAD_SECRET || "",

  email: resendAdapter({
    defaultFromAddress: "dev@mflisikowski.dev",
    defaultFromName: "Mateusz Flisikowski",
    apiKey: process.env.RESEND_API_KEY || "",
  }),

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),

  sharp,
});
