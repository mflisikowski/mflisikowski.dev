import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";
import { Inter as Font } from "next/font/google";
import localFont from "next/font/local";
import React from "react";

import { CookieConsent } from "@/components/(frontend)/cookie-consent";
import { Footer } from "@/components/(frontend)/footer";
import { Header } from "@/components/(frontend)/header";

import {
  META_AUTHOR_NAME,
  META_AUTHOR_URL,
  META_DESCRIPTION,
  META_KEYWORDS,
  META_WEBSITE_TITLE,
} from "@/config/meta";

import { cn } from "@/utils/cn";

import { Providers } from "@/providers/index";

import { routing } from "@/i18n/routing";

import "../../globals.css";

export const metadata: Metadata = {
  title: {
    default: META_WEBSITE_TITLE,
    template: `%s | ${META_WEBSITE_TITLE}`,
  },
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  authors: {
    name: META_AUTHOR_NAME,
    url: META_AUTHOR_URL,
  },
};

const CalSans = localFont({
  variable: "--font-cal",
  display: "swap",
  src: "../../../../public/fonts/CalSans-SemiBold.woff2",
});

const Inter = Font({
  variable: "--font-inter",
  subsets: ["latin"],
});

const AnalyticsPageView = dynamic(
  () => import("@/components/(frontend)/analytics/analytics-page-view"),
);

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <html lang={locale} className="h-full" suppressHydrationWarning>
      <body className={cn("relative", CalSans.variable, Inter.variable)}>
        <Providers>
          <AnalyticsPageView />

          <Header />
          <main className="relative z-20 flex flex-grow flex-col overflow-hidden">
            <>{children}</>
          </main>
          <Footer />

          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
