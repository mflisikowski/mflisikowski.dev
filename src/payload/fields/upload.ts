import type { UploadField } from "payload";
import { deepMerge } from "payload";

export type UploadFieldProps = (overrides?: Partial<UploadField>) => UploadField;

export const uploadField: UploadFieldProps = (overrides = {}) =>
  deepMerge<UploadField>(
    {
      // @ts-expect-error - TFunction type is not automatically merged with the default translations
      label: ({ t }) => t("custom-upload"),

      localized: true,
      name: "upload",
      type: "upload",
    },
    overrides,
  );
