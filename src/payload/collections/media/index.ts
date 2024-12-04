import type { CollectionConfig } from "payload";

import { mediaAccess as access } from "@/payload/collections/media/access";
import { mediaFields as fields } from "@/payload/collections/media/fields";
import { mediaLabels as labels } from "@/payload/collections/media/labels";
import { mediaUpload as upload } from "@/payload/collections/media/upload";

export const Media: CollectionConfig = {
  access,
  upload,
  fields,
  labels,

  slug: "media",
};
