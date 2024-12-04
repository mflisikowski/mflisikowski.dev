import type { CollectionConfig } from "payload";

import { caseStudiesAccess as access } from "@/payload/collections/case-studies/access";
import { caseStudiesAdmin as admin } from "@/payload/collections/case-studies/admin";
import { caseStudiesDefaultPopulate as defaultPopulate } from "@/payload/collections/case-studies/default-populate";
import { caseStudiesFields as fields } from "@/payload/collections/case-studies/fields";
import { caseStudiesHooks as hooks } from "@/payload/collections/case-studies/hooks";
import { caseStudiesLabels as labels } from "@/payload/collections/case-studies/labels";
import { caseStudiesVersions as versions } from "@/payload/collections/case-studies/version";

export const CaseStudies: CollectionConfig = {
  defaultPopulate,
  versions,
  access,
  fields,
  labels,
  hooks,
  admin,

  slug: "case-studies",
};
