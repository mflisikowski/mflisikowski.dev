import { generatePreviewPath } from "@/utils/generate-preview-path";
import { getServerSideURL } from "@/utils/get-url";

import type { PageCollectionConfig } from ".";

export const pagesAdmin: PageCollectionConfig["admin"] = {
  defaultColumns: ["title", "slug", "updatedAt"],
  useAsTitle: "title",

  livePreview: {
    url: ({ data }) => {
      const path = generatePreviewPath({
        slug: typeof data?.slug === "string" ? data.slug : "",
        collection: "pages",
      });
      return `${getServerSideURL()}${path}`;
    },
  },

  preview: (data) => {
    const path = generatePreviewPath({
      slug: typeof data?.slug === "string" ? data.slug : "",
      collection: "pages",
    });
    return `${getServerSideURL()}${path}`;
  },
};
