import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import withVercelToolbarPlugin from '@vercel/toolbar/plugins/next';

const withVercelToolbar = withVercelToolbarPlugin();
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {};

export default withVercelToolbar(withNextIntl(nextConfig));
