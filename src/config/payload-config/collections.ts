import type { CollectionConfig } from "payload";

import { Media } from "@/config/payload-collections/media";
import { Pages } from "@/config/payload-collections/pages";
import { Users } from "@/config/payload-collections/users";

export const collections: CollectionConfig[] = [Pages, Users, Media];
