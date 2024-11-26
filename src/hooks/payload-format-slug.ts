import type { FieldHook } from "payload";

import { normalizeString } from "@/utils/normalize-string";

export const formatSlug =
  (fallback: string): FieldHook =>
  ({ data, operation, value }) => {
    if (typeof value === "string") {
      return normalizeString(value);
    }

    if (operation === "create" || !data?.slug) {
      const fallbackData = data?.[fallback] || data?.[fallback];

      if (fallbackData && typeof fallbackData === "string") {
        return normalizeString(fallbackData);
      }
    }

    return value;
  };
