import type { CollectionConfig } from "payload";

export const postsHooks: CollectionConfig["hooks"] = {
  afterChange: [
    async ({ doc }) => {
      if (doc?.slug) {
        try {
          await fetch("/api/posts/revalidate", {
            method: "POST",
            body: JSON.stringify({
              slug: doc.slug,
            }),
          });

          console.log(`Revalidation requested for: /posts/${doc.slug}`);
        } catch (error) {
          console.error("Revalidation request failed:", error);
        }
      }
    },
  ],
};
