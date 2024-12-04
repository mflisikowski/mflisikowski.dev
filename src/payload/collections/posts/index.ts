import type { CollectionConfig } from "payload";

import { postsAccess as access } from "@/payload/collections/posts/access";
import { postsAdmin as admin } from "@/payload/collections/posts/admin";
import { postsDefaultPopulate as defaultPopulate } from "@/payload/collections/posts/default-populate";
import { postsFields as fields } from "@/payload/collections/posts/fields";
import { postsHooks as hooks } from "@/payload/collections/posts/hooks";
import { postsLabels as labels } from "@/payload/collections/posts/labels";
import { postsVersions as versions } from "@/payload/collections/posts/version";

export const Posts: CollectionConfig = {
  defaultPopulate,
  versions,
  access,
  fields,
  admin,
  hooks,
  labels,

  slug: "posts",
};
