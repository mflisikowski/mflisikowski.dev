import { Page } from "@/payload-types";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { GenerateTitle, GenerateURL } from "@payloadcms/plugin-seo/types";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";
import { Plugin } from "payload";

import { getServerSideURL } from "@/utils/get-url";

const generateTitle: GenerateTitle<Page> = ({ doc }) => {
  return doc?.title ? `${doc.title} | Payload Website Template` : "Payload Website Template";
};

const generateURL: GenerateURL<Page> = ({ doc }) => {
  const url = getServerSideURL();

  return doc?.slug ? `${url}/${doc.slug}` : url;
};

export const payloadPluginsConfig: Plugin[] = [
  uploadthingStorage({
    collections: {
      media: true,
    },

    options: {
      token: process.env.UPLOADTHING_TOKEN,
      acl: "public-read",
    },
  }),

  seoPlugin({
    generateTitle,
    generateURL,
  }),
];
