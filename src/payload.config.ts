import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";

import {
  payloadAdminConfig,
  payloadCollectionsConfig,
  payloadDbConfig,
  payloadEditorConfig,
  payloadEmailConfig,
  payloadPluginsConfig,
  payloadSecretConfig,
} from "@/config";

export default buildConfig({
  collections: payloadCollectionsConfig,

  secret: payloadSecretConfig,

  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },

  plugins: payloadPluginsConfig,

  editor: payloadEditorConfig,

  email: payloadEmailConfig,

  admin: payloadAdminConfig,

  db: payloadDbConfig,

  sharp,
});
