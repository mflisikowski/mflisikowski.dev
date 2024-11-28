import type { CollectionConfig } from "payload";

import { mediaAccess as access } from "@/config/payload-collections/media/access";
import { mediaFields as fields } from "@/config/payload-collections/media/fields";
import { mediaUpload as upload } from "@/config/payload-collections/media/upload";

export const Media: CollectionConfig = {
  access,
  upload,
  fields,

  slug: "media",
};
