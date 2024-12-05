import type { DefaultTranslationsObject } from "@payloadcms/translations";

import type { LocaleType } from "@/i18n/config";

// This is a workaround to allow custom translations to be merged with the default translations.
// This is necessary because the generic passed to TFunction does not automatically merge the custom translations with the default translations.
type CustomTranslation = {
  [K in `custom-${string}`]: string;
};

export const translations: Record<
  LocaleType,
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
    "custom-rich-text": "Rich-Text editor",
    "custom-text": "Text",
    "custom-slug": "Slug",
    "custom-upload": "Upload",
    "custom-case-study-url": "URL",
    "custom-case-study-industry": "Industry",
    "custom-case-study-use-case": "Use Case",
    "custom-user-roles": "User roles",
    "custom-user-avatar": "Avatar",
    "custom-user-first-name": "First name",
    "custom-user-last-name": "Last name",
    "custom-post-image": "Post image",
    "custom-post-published-on": "Published on",
    "custom-post-use-video": "Use video",
    "custom-post-video-url": "Video URL",
    "custom-post-content": "Content",
    "custom-post-excerpt": "Excerpt",
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
    "custom-checkbox": "Zaznacz",
    "custom-select": "Wybierz",
    "custom-title": "Tytuł",
    "custom-date": "Data",
    "custom-pagePublishedAt": "Data publikacji",
    "custom-rich-text": "Edytor tekstu",
    "custom-text": "Tekst",
    "custom-slug": "Przyjazny URL",
    "custom-upload": "Plik",
    "custom-case-study-url": "URL",
    "custom-case-study-industry": "Branża",
    "custom-case-study-use-case": "Zastosowanie",
    "custom-user-roles": "Role użytkownika",
    "custom-user-avatar": "Zdjęcie profilowe",
    "custom-user-first-name": "Imię",
    "custom-user-last-name": "Nazwisko",
    "custom-post-image": "Zdjęcie artykułu",
    "custom-post-published-on": "Data publikacji",
    "custom-post-use-video": "Użyj filmu",
    "custom-post-video-url": "URL filmu",
    "custom-post-content": "Treść",
    "custom-post-excerpt": "Podsumowanie",
  },
};

export type CustomTranslationsObject = DefaultTranslationsObject & CustomTranslation;
export type CustomTranslationsKeys = keyof CustomTranslationsObject;
