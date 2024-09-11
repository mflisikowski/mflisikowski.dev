import createMiddleware from "next-intl/middleware";

import { routing } from "@/i18n/routing";

export const config = {
  matcher: [
    //
    "/",
    "/(en|pl)/:path*",
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};

export default createMiddleware(routing, {
  localeDetection: true,
});