import type { Config } from "payload";

import * as collectionsList from "@/payload/collections";

export const collections: Config["collections"] = [...Object.values(collectionsList)];
