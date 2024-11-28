import type { CollectionConfig } from "payload";

import { CaseStudies } from "@/config/payload-collections/case-studies";
import { Media } from "@/config/payload-collections/media";
import { Pages } from "@/config/payload-collections/pages";
import { Posts } from "@/config/payload-collections/posts";
import { Users } from "@/config/payload-collections/users";

export const collections: CollectionConfig[] = [
  //
  CaseStudies,
  Pages,
  Posts,
  Users,
  Media,
];
