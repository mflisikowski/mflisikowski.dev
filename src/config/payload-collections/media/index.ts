import type { CollectionConfig } from "payload";

import { mediaAccess as access } from "@/config/payload-collections/media/access";
import { mediaFields as fields } from "@/config/payload-collections/media/fields";
import { mediaUpload as upload } from "@/config/payload-collections/media/upload";

export type MediaCollectionConfig = CollectionConfig<"media">;

export const Media: MediaCollectionConfig = {
  access,
  upload,
  fields,

  slug: "media",
};
