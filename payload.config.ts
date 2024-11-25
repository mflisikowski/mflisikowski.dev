import { buildConfig } from "payload";
import sharp from "sharp";

import { collections, db, editor, email, plugins } from "@/payload/config";

export default buildConfig({
  collections,

  secret: process.env.PAYLOAD_SECRET || "",

  plugins,

  editor,

  email,

  sharp,

  db,
});
