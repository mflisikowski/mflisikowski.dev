import type { UploadField } from "payload";
import { deepMerge } from "payload";

import { tl } from "@/i18n/translations";

export type UploadFieldProps = (overrides?: Partial<UploadField>) => UploadField;

export const uploadField: UploadFieldProps = (overrides = {}) =>
  deepMerge<UploadField>(
    {
      relationTo: "media",
      localized: true,
      label: tl("custom-upload"),
      name: "upload",
      type: "upload",
    },
    overrides,
  );
