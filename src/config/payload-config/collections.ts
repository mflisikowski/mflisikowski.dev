import type { Config } from "payload";

import { Media } from "@/config/payload-collections/media";
import { Pages } from "@/config/payload-collections/pages";
import { Users } from "@/config/payload-collections/users";

export const collections: Config["collections"] = [Pages, Users, Media];
