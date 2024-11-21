import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";
import { Inter as Font } from "next/font/google";
import localFont from "next/font/local";
import React from "react";

import { CookieConsent } from "@/components/cookie-consent";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

import { cn } from "@/utils/cn";

import { Providers } from "@/providers/index";

import { routing } from "@/i18n/routing";

import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: `Mateusz Flisikowski Mission Focused Developer`,
    template: `%s | Mateusz Flisikowski`,
  },
  description: `Mateusz Flisikowski, deweloper z pasją do tworzenia innowacyjnych rozwiązań, posiada podejście skoncentrowane na misji, nowoczesnych technologiach i rozwoju oprogramowania.`,
  keywords: [
    "Mateusz Flisikowski",
    "TypeScript Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer",
    "Tworzenie aplikacji webowych",
    "Tworzenie stron internetowych",
    "Programista JavaScript",
    "Programista TypeScript",
    "Innowacyjne rozwiązania",
    "Technologia zorientowana na misję",
    "Tworzenie stron internetowych dostosowanych do potrzeb klienta",
    "Tworzenie aplikacji webowych dostosowanych do potrzeb klienta",
    "Innowacyjne rozwiązania technologiczne dla małych i średnich przedsiębiorstw",
    "Rozwój oprogramowania zorientowany na potrzeby biznesowe klienta",
  ],
  authors: {
    name: "Mateusz Flisikowski",
    url: "www.mflisikowski.dev",
  },
};

const CalSans = localFont({
  variable: "--font-cal",
  display: "swap",
  src: "../../../public/fonts/CalSans-SemiBold.woff2",
});

const Inter = Font({
  variable: "--font-inter",
  subsets: ["latin"],
});

const AnalyticsPageView = dynamic(() => import("@/components/analytics/analytics-page-view"));

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
