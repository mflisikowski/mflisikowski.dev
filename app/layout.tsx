import type { Metadata } from "next";
import { Inter as Font } from "next/font/google";
import localFont from "next/font/local";

import { Footer } from "@/components/footer";
import { GenericMouseMask } from "@/components/framer-motion/generic-mouse-mask";
import { RadialGradient } from "@/components/framer-motion/radial-gradient";
import { Header } from "@/components/header";

import { cn } from "@/utils/cn";

import "./globals.css";

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
  src: "../public/fonts/CalSans-SemiBold.woff2",
});

const Inter = Font({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "relative flex min-h-full flex-col text-gray-900 antialiased",
          CalSans.variable,
          Inter.variable,
        )}
      >
        <Header />

        <GenericMouseMask offset={10}>
          <main className="relative z-10 flex flex-grow flex-col">{children}</main>
        </GenericMouseMask>

        <Footer />
        <RadialGradient />
      </body>
    </html>
  );
}
