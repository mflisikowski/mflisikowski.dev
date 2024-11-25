import createMiddleware from "next-intl/middleware";

import { routing } from "@/i18n/routing";

export const config = {
  matcher: [
    //
    "/",
    "/(en|pl)/:path*",
    "/((?!api|_next|_vercel|admin|.*\\..*).*)",
  ],
};

export default createMiddleware(routing);
