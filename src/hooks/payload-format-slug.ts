import type { FieldHook } from "payload";

import { createSlug } from "@/utils/create-slug";

export const formatSlug =
  (fallback: string): FieldHook =>
  ({ data, operation, value }) => {
    if (typeof value === "string") {
      return createSlug(value);
    }

    if (
      data &&
      (operation === "create" || !data.slug) &&
      fallback &&
      fallback in data &&
      typeof data[fallback] === "string"
    ) {
      return createSlug(data[fallback]);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return value;
  };
