import { setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";
import { Inter as Font } from "next/font/google";
import localFont from "next/font/local";
import React from "react";

import { CookieConsent } from "@/components/(frontend)/cookie-consent";
import { Footer } from "@/components/(frontend)/footer";
import { Header } from "@/components/(frontend)/header";

import { routing } from "@/i18n/routing";

import { Providers } from "@/providers/index";

import { cn } from "@/utils/cn";

import "../../globals.css";

const CalSans = localFont({
  variable: "--font-cal",
  display: "swap",
  src: "../../../../public/fonts/CalSans-SemiBold.woff2",
});

const Inter = Font({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
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
