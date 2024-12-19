import type {
  DefaultTranslationKeys,
  NestedKeysStripped,
  TFunction,
} from "@payloadcms/translations";
import type { Config } from "payload";

// TODO: wait for answer on this: https://github.com/payloadcms/payload/issues/9858
// @ts-expect-error: TFunction type is not automatically merged with the default translations
export const translations: Config["i18n"]["translations"] = {
  en: {
    custom: {
      /**
       * User roles
       * */
      "user-roles-admin": "Admin",
      "user-roles-public": "Public",
      "user-first-name": "First name",
      "user-last-name": "Last name",
      "user-avatar": "Avatar",
      "user-roles": "User roles",

      /**
       * Hero
       * */
      "hero-type": "Hero Type",
      "hero-type-home": "Home",
      "hero-headline": "Headline",
      "hero-subheadline": "Subheadline",
      "hero-media": "Media",
      "hero-media-image": "Image",
      "hero-media-video": "Video",

      /**
       * Media
       * */
      "media-position": "Position",
      "media-position-default": "Default",
      "media-position-wide": "Wide",
      "media-caption": "Caption",
      "media-image": "Image",

      /**
       * Grid Layout
       * */
      columns: "Columns",
      "select-columns": "Select columns",
      "columns-three": "Three columns",
      "columns-two": "Two columns",
      "columns-one": "One column",

      /**
       * Fields
       */
      "field-slug": "Slug",
      "field-published-at": "Published at",
      "field-content": "Content",
      "field-seo": "SEO",

      "rich-text": "Rich-Text editor",

      "case-study-url": "URL",
      "case-study-industry": "Industry",
      "case-study-use-case": "Use Case",
      "post-image": "Post image",
      "post-published-on": "Published on",
      "post-use-video": "Use video",
      "post-video-url": "Video URL",
      "post-content": "Content",
      "post-excerpt": "Excerpt",
    },
  },
  pl: {
    custom: {
      /**
       * User roles
       * */
      "user-roles-admin": "Administrator",
      "user-roles-public": "Publiczny",
      "user-first-name": "Imię",
      "user-last-name": "Nazwisko",
      "user-avatar": "Zdjęcie profilowe",
      "user-roles": "Role użytkownika",

      /**
       * Hero
       * */
      "hero-type": "Rodzaj elementu Hero",
      "hero-type-home": "Strona główna",
      "hero-headline": "Tytuł",
      "hero-subheadline": "Podtytuł",
      "hero-media": "Multimedia",
      "hero-media-image": "Obraz",
      "hero-media-video": "Film",

      /**
       * Media
       * */
      "media-position": "Pozycja",
      "media-position-default": "Domyślny",
      "media-position-wide": "Szeroki",
      "media-caption": "Podpis",
      "media-image": "Obraz",

      /**
       * Grid Layout
       * */
      columns: "Układ kolumn",
      "select-columns": "Wybierz kolumny",
      "columns-three": "Trzy kolumny",
      "columns-two": "Dwie kolumny",
      "columns-one": "Jedna kolumna",

      /**
       * Fields
       * */
      "field-slug": "Przyjazny URL",
      "field-published-at": "Data publikacji",
      "field-content": "Treść",
      "field-seo": "SEO",

      "rich-text": "Edytor tekstu",
      "case-study-url": "URL",
      "case-study-industry": "Branża",
      "case-study-use-case": "Zastosowanie",

      "post-image": "Zdjęcie artykułu",
      "post-published-on": "Data publikacji",
      "post-use-video": "Użyj filmu",
      "post-video-url": "URL filmu",
      "post-content": "Treść",
      "post-excerpt": "Podsumowanie",
    },
  },
};

export type CustomTranslationsObject = (typeof translations)[keyof typeof translations];
export type CustomTranslationsKeys = NestedKeysStripped<CustomTranslationsObject>;

// prettier-ignore
export const tl = (transKey: CustomTranslationsKeys | DefaultTranslationKeys) => ({ t }: { t: TFunction<CustomTranslationsKeys | DefaultTranslationKeys> }) => t(transKey)
