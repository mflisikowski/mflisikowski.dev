import { notFound, redirect } from "next/navigation";
import type React from "react";

import { getCachedDocument, getCachedRedirects, isDocument } from "@/utils/payload";

interface Props {
  disableNotFound?: boolean;
  url: string;
}

/* This component helps us with SSR based dynamic redirects */
export const PayloadRedirects: React.FC<Props> = async ({ disableNotFound, url }) => {
  const slug = url.startsWith("/") ? url : `${url}`;
  const redirects = await getCachedRedirects()();
  const redirectItem = redirects.find((redirect) => redirect.from === slug);

  if (redirectItem) {
    if (redirectItem.to?.url) {
      redirect(redirectItem.to.url);
    }

    let redirectUrl: string;

    if (typeof redirectItem.to?.reference?.value === "string") {
      const collection = redirectItem.to?.reference?.relationTo;
      const id = redirectItem.to?.reference?.value;

      const document = await getCachedDocument(collection, id)();

      if (!isDocument(document)) {
        throw new Error("Invalid document returned from getCachedDocument");
      }

      redirectUrl = `/${
        redirectItem.to?.reference?.relationTo === "posts"
          ? "posts/"
          : redirectItem.to?.reference?.relationTo === "case-studies"
            ? "case-studies/"
            : ""
      }${document.slug}`;
    } else {
      const value = redirectItem.to?.reference?.value;

      if (!isDocument(value)) {
        throw new Error("Invalid reference value");
      }

      redirectUrl = `/${
        redirectItem.to?.reference?.relationTo === "posts"
          ? "posts/"
          : redirectItem.to?.reference?.relationTo === "case-studies"
            ? "case-studies/"
            : ""
      }${value.slug}`;
    }

    if (redirectUrl) redirect(redirectUrl);
  }

  if (disableNotFound) return null;
  return notFound();
};
