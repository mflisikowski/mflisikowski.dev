import type { CollectionConfig } from "payload";

import { pagesAccess as access } from "@/config/payload-collections/pages/access";
import { pagesAdmin as admin } from "@/config/payload-collections/pages/admin";
import { pagesDefaultPopulate as defaultPopulate } from "@/config/payload-collections/pages/default-populate";
import { pagesFields as fields } from "@/config/payload-collections/pages/fields";
import { pagesHooks as hooks } from "@/config/payload-collections/pages/hooks";
import { pageLabels as labels } from "@/config/payload-collections/pages/labels";
import { pagesVersions as versions } from "@/config/payload-collections/pages/version";

export const Pages: CollectionConfig = {
  defaultPopulate,
  versions,
  access,
  fields,
  labels,
  hooks,
  admin,

  slug: "pages",
};
