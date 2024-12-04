import type { CollectionConfig } from "payload";

import { pagesAccess as access } from "@/payload/collections/pages/access";
import { pagesAdmin as admin } from "@/payload/collections/pages/admin";
import { pagesDefaultPopulate as defaultPopulate } from "@/payload/collections/pages/default-populate";
import { pagesFields as fields } from "@/payload/collections/pages/fields";
import { pagesHooks as hooks } from "@/payload/collections/pages/hooks";
import { pageLabels as labels } from "@/payload/collections/pages/labels";
import { pagesVersions as versions } from "@/payload/collections/pages/version";

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
