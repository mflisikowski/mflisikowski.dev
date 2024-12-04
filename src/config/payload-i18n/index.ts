import type { DefaultTranslationsObject } from "@payloadcms/translations";
import { en } from "@payloadcms/translations/languages/en";
import { pl } from "@payloadcms/translations/languages/pl";
import type { Config } from "payload";

// This is a workaround to allow custom translations to be merged with the default translations.
// This is necessary because the generic passed to TFunction does not automatically merge the custom translations with the default translations.
type CustomTranslation = {
  [K in `custom-${string}`]: string;
};

export const translations: Record<
  "en" | "pl",
  Partial<DefaultTranslationsObject> & CustomTranslation
> = {
  en: {
    "custom-checkboxLeadingHeader": "Use Leading Header",
    "custom-selectGridLayout": "Grid Layout",
    "custom-selectGridLayoutDescription": "Choose the layout of the grid",
    "custom-gridLayoutOneColumn": "Single Column Layout",
    "custom-gridLayoutTwoColumns": "Two Column Layout",
    "custom-gridLayoutTwoThirdsOneThird": "Two-Thirds and One-Third Split",
    "custom-gridLayoutHalfAndHalf": "Equal Two Column Split",
    "custom-gridLayoutThreeColumns": "Three Column Layout",
    "custom-checkbox": "Checkbox",
    "custom-select": "Select",
    "custom-title": "Title",
    "custom-date": "Date",
    "custom-pagePublishedAt": "Published at",
  },
  pl: {
    "custom-checkboxLeadingHeader": "Użyj nagłówka wiodącego",
    "custom-selectGridLayout": "Układ siatki",
    "custom-selectGridLayoutDescription": "Wybierz układ siatki",
    "custom-gridLayoutOneColumn": "Pojedyncza kolumna",
    "custom-gridLayoutTwoColumns": "Podział na dwie kolumny",
    "custom-gridLayoutTwoThirdsOneThird": "Podział 2/3 + 1/3",
    "custom-gridLayoutHalfAndHalf": "Podział po połowie",
    "custom-gridLayoutThreeColumns": "Podział na trzy kolumny",
    "custom-checkbox": "Pole wyboru",
    "custom-select": "Pole wyboru",
    "custom-title": "Tytuł",
    "custom-date": "Data",
    "custom-pagePublishedAt": "Data publikacji",
  },
};

export type CustomTranslationsObject = DefaultTranslationsObject & CustomTranslation;
export type CustomTranslationsKeys = keyof CustomTranslationsObject;

export const i18n: Config["i18n"] = {
  supportedLanguages: { en, pl },
  fallbackLanguage: "pl",
  translations,
};
