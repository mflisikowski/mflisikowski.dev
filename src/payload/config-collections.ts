import type { CollectionConfig } from "payload";

import { CaseStudies } from "@/payload/collections/case-studies";
import { Media } from "@/payload/collections/media";
import { Pages } from "@/payload/collections/pages";
import { Posts } from "@/payload/collections/posts";
import { Users } from "@/payload/collections/users";

export const collections: CollectionConfig[] = [
  //
  CaseStudies,
  Pages,
  Posts,
  Users,
  Media,
];
