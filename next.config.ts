import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const isProduction = process.env.VERCEL_ENV === "production";

/**
 * Temporary redirects for development
 * TODO: Remove after integration with PayloadCMS
 * @see https://github.com/payloadcms/payload
 */
const tempRedirects = [
  {
    source: "/:locale(en|pl)?",
    destination: "/home",
    permanent: true,
  },
];

const redirects = async () => (isProduction ? tempRedirects : []);

const nextConfig: NextConfig = {
  redirects,
};

export default withPayload(withNextIntl(nextConfig));
