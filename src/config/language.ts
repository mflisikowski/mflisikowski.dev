import { en } from "@payloadcms/translations/languages/en";
import { pl } from "@payloadcms/translations/languages/pl";
import type { Config } from "payload";

enum Locale {
  EN = "en",
  PL = "pl",
}

export const defaultLocale = Locale.PL;
export const locales = [Locale.EN, Locale.PL];

export const payloadLocalizationConfig: Config["localization"] = {
  defaultLocale,
  fallback: true,
  locales,
};

export const payloadI18nConfig: Config["i18n"] = {
  supportedLanguages: { en, pl },
  fallbackLanguage: defaultLocale,
};

export const nextIntlConfig = {
  defaultLocale,
  locales,
};
