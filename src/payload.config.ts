import { type Config, buildConfig } from "payload";
import sharp from "sharp";

import { payloadLocalizationConfig as localization } from "@/config/language";
import { payloadI18nConfig as i18n } from "@/config/language";
import { admin } from "@/config/payload-config/admin";
import { collections } from "@/config/payload-config/collections";
import { db } from "@/config/payload-config/db";
import { editor } from "@/config/payload-config/editor";
import { email } from "@/config/payload-config/email";
import { plugins } from "@/config/payload-config/plugins";
import { secret } from "@/config/payload-config/secret";
import { typescript } from "@/config/payload-config/typescript";

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
