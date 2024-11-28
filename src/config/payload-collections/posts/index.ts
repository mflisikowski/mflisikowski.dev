import type { CollectionConfig } from "payload";

import { postsAccess as access } from "@/config/payload-collections/posts/access";
import { postsAdmin as admin } from "@/config/payload-collections/posts/admin";
import { postsDefaultPopulate as defaultPopulate } from "@/config/payload-collections/posts/default-populate";
import { postsFields as fields } from "@/config/payload-collections/posts/fields";
import { postsHooks as hooks } from "@/config/payload-collections/posts/hooks";
import { postsVersions as versions } from "@/config/payload-collections/posts/version";

export const Posts: CollectionConfig = {
  defaultPopulate,
  versions,
  access,
  fields,
  admin,
  hooks,

  slug: "posts",
};
