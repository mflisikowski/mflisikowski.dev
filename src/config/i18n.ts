import { en } from "@payloadcms/translations/languages/en";
import { pl } from "@payloadcms/translations/languages/pl";
import type { Config } from "payload";

export const payloadI18nConfig: Config["i18n"] = {
  supportedLanguages: { en, pl },
  fallbackLanguage: "pl",
};

export const nextIntlConfig = {
  defaultLocale: "pl",
  locales: ["en", "pl"],
};
