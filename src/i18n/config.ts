import { en } from "@payloadcms/translations/languages/en";
import { pl } from "@payloadcms/translations/languages/pl";
import type { Config } from "payload";

import { translations } from "@/i18n/translations";

export const enum Locale {
  EN = "en",
  PL = "pl",
}

export const LocaleLabels = {
  [Locale.PL]: "Polski",
  [Locale.EN]: "English",
};

export type LocaleType = `${Locale}`;

export const payloadLocalizationConfig: Config["localization"] = {
  defaultLocale: Locale.PL,
  fallback: true,

  locales: [
    {
      label: LocaleLabels[Locale.PL],
      code: Locale.PL,
    },
    {
      label: LocaleLabels[Locale.EN],
      code: Locale.EN,
    },
  ],
};

export const payloadI18nConfig: Config["i18n"] = {
  supportedLanguages: { en, pl },
  fallbackLanguage: Locale.PL,
  translations,
};

export const nextIntlConfig = {
  defaultLocale: Locale.PL,
  locales: [Locale.PL, Locale.EN],
};
