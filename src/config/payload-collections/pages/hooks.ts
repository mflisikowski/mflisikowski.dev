import type { CollectionConfig } from "payload";

import { populatePublishedAt } from "@/hooks/payload-populate-published-at";
import { revalidatePage } from "@/hooks/payload-revalidate-page";

export const pagesHooks: CollectionConfig["hooks"] = {
  beforeChange: [populatePublishedAt],
  afterChange: [revalidatePage],
};
