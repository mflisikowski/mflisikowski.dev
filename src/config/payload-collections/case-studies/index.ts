import type { CollectionConfig } from "payload";

import { caseStudiesAccess as access } from "@/config/payload-collections/case-studies/access";
import { caseStudiesAdmin as admin } from "@/config/payload-collections/case-studies/admin";
import { caseStudiesDefaultPopulate as defaultPopulate } from "@/config/payload-collections/case-studies/default-populate";
import { caseStudiesFields as fields } from "@/config/payload-collections/case-studies/fields";
import { caseStudiesHooks as hooks } from "@/config/payload-collections/case-studies/hooks";
import { caseStudiesVersions as versions } from "@/config/payload-collections/case-studies/version";

export const CaseStudies: CollectionConfig = {
  defaultPopulate,
  versions,
  access,
  fields,
  hooks,
  admin,

  slug: "case-studies",
};
