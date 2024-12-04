import { dateField } from "@/payload/fields/date";

export const pagePublishedAt = dateField({
  // @ts-expect-error - TFunction type is not automatically merged with the default translations
  label: ({ t }) => t("custom-pagePublishedAt"),

  admin: {
    position: "sidebar",
  },

  name: "publishedAt",
});
