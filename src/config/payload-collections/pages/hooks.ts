import { populatePublishedAt } from "@/hooks/payload-populate-published-at";
import { revalidatePage } from "@/hooks/payload-revalidate-page";

import type { PageCollectionConfig } from ".";

export const pagesHooks: PageCollectionConfig["hooks"] = {
  beforeChange: [populatePublishedAt],
  afterChange: [revalidatePage],
};
