import type { FieldHook } from "payload";

import { createSlug } from "@/utils/create-slug";

export const formatSlug =
  (fallback: string): FieldHook =>
  ({ data, operation, originalDoc, value }) => {
    if (typeof value === "string") {
      return createSlug(value);
    }

    if (operation === "create") {
      const fallbackData = data?.[fallback] || originalDoc?.[fallback];

      if (fallbackData && typeof fallbackData === "string") {
        return createSlug(fallbackData);
      }
    }

    return value;
  };
