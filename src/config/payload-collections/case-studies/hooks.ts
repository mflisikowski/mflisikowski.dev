import type { CollectionConfig } from "payload";

export const caseStudiesHooks: CollectionConfig["hooks"] = {
  afterChange: [
    async ({ doc }) => {
      if (doc?.slug) {
        try {
          await fetch("/api/case-studies/revalidate", {
            method: "POST",
            body: JSON.stringify({
              slug: doc.slug,
            }),
          });

          console.log(`Revalidation requested for: /case-studies/${doc.slug}`);
        } catch (error) {
          console.error("Revalidation request failed:", error);
        }
      }
    },
  ],
};
