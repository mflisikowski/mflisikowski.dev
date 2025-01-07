import type {
  DefaultTranslationKeys,
  NestedKeysStripped,
  TFunction,
} from "@payloadcms/translations";
import type { Config, LabelFunction } from "payload";

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
      "hero-field": "Hero",
      "hero-type": "Hero Type",
      "hero-type-home": "Home",
      "hero-headline": "Headline",
      "hero-subheadline": "Subheadline",
      "hero-media": "Media",

      /**
       * Media
       * */
      "hero-media-type-none": "None",
      "hero-media-type-image": "Image",
      "hero-media-type-video": "Video",
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
       * Collection fields
       */
      "collection-content": "Content",
      "collection-hero": "Hero",
      "collection-seo": "SEO",

      /**
       * Fields
       */
      "field-slug": "Slug",
      "field-published-at": "Published at",
      "field-content": "Content",
      "field-seo": "SEO",

      /**
       * Media fields
       */
      "media-singular": "Media",
      "media-plural": "Media",

      /**
       * Pages fields
       */
      "page-singular": "Page",
      "page-plural": "Pages",
      "page-title": "Page Title",
      "page-slug": "Friendly URL",

      /**
       * Case Studies fields
       */
      "case-study-singular": "Case Study",
      "case-study-plural": "Case Studies",
      "case-study-url": "URL",
      "case-study-industry": "Industry",
      "case-study-use-case": "Use Case",
      "case-study-title": "Title",
      /**
       * Posts fields
       */
      "post-singular": "Post",
      "post-plural": "Posts",
      "post-image": "Post image",
      "post-published-on": "Published on",
      "post-use-video": "Use video",
      "post-video-url": "Video URL",
      "post-content": "Content",
      "post-excerpt": "Excerpt",

      /**
       * Users fields
       */
      "user-singular": "User",
      "user-plural": "Users",

      "rich-text": "Rich-Text editor",
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
      "hero-field": "Hero",
      "hero-type": "Rodzaj elementu Hero",
      "hero-type-home": "Strona główna",
      "hero-headline": "Nagłówek",
      "hero-subheadline": "Podtytuł",
      "hero-media": "Multimedia",

      /**
       * Media
       * */
      "hero-media-type-none": "Brak",
      "hero-media-type-image": "Obraz",
      "hero-media-type-video": "Film",
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
       * Collection fields
       */
      "collection-content": "Treść",
      "collection-hero": "Hero",
      "collection-seo": "SEO",

      /**
       * Fields
       * */
      "field-slug": "Przyjazny URL",
      "field-published-at": "Data publikacji",
      "field-content": "Treść",
      "field-seo": "SEO",

      /**
       * Media fields
       */
      "media-singular": "Multimedia",
      "media-plural": "Multimedia",

      /**
       * Pages fields
       */
      "page-singular": "Strona",
      "page-plural": "Strony",
      "page-title": "Tytuł strony",
      "page-slug": "Adres URL",

      /**
       * Case Studies fields
       */
      "case-study-singular": "Realizacja",
      "case-study-plural": "Realizacje",
      "case-study-url": "URL",
      "case-study-industry": "Branża",
      "case-study-use-case": "Zastosowanie",
      "case-study-title": "Tytuł",
      /**
       * Posts fields
       */
      "post-singular": "Artykuł",
      "post-plural": "Artykuły",
      "post-image": "Zdjęcie artykułu",
      "post-published-on": "Data publikacji",
      "post-use-video": "Użyj filmu",
      "post-video-url": "URL filmu",
      "post-content": "Treść",
      "post-excerpt": "Podsumowanie",

      /**
       * Users fields
       */
      "user-singular": "Użytkownik",
      "user-plural": "Użytkownicy",

      "rich-text": "Edytor tekstu",
    },
  },
};

export type CustomTranslationsObject = (typeof translations)[keyof typeof translations];
export type CustomTranslationsKeys = NestedKeysStripped<CustomTranslationsObject>;

export type TranslationLabelKey = CustomTranslationsKeys | DefaultTranslationKeys;

// prettier-ignore
export const tl = (transKey: TranslationLabelKey): LabelFunction => ({ t }: { t: TFunction<TranslationLabelKey> }) => t(transKey)
