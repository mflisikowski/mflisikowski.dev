import { type Config, buildConfig } from "payload";
import sharp from "sharp";

import { payloadLocalizationConfig as localization } from "@/i18n/config";
import { payloadI18nConfig as i18n } from "@/i18n/config";

import { admin } from "@/payload/config-admin";
import { collections } from "@/payload/config-collections";
import { db } from "@/payload/config-db";
import { editor } from "@/payload/config-editor";
import { email } from "@/payload/config-email";
import { plugins } from "@/payload/config-plugins";
import { secret } from "@/payload/config-secret";
import { typescript } from "@/payload/config-typescript";

const config: Config = {
  localization,
  collections,
  typescript,
  plugins,
  editor,
  secret,
  email,
  admin,
  sharp,
  i18n,
  db,
};

export default buildConfig(config);
