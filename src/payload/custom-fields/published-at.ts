import { tl } from "@/i18n/translations";

import { dateField } from "@/payload/fields/date";

export const pagePublishedAt = dateField({
  admin: {
    position: "sidebar",
  },
  label: tl("custom:field-published-at"),
  name: "publishedAt",
});
