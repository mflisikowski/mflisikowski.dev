import type { Metadata } from "next";
import { Inter as Font } from "next/font/google";
import localFont from "next/font/local";

import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { Navigation } from "@/components/navigation";

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
  src: "./fonts/CalSans-SemiBold.woff2",
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
    <html lang="en">
      <body
        className={cn(
          "flex min-h-screen flex-col space-y-16 py-8 antialiased",
          CalSans.variable,
          Inter.variable,
        )}
      >
        <Container
          className="sticky top-0 z-50 w-full bg-white/95 backdrop-saturate-150 backdrop:blur"
          as="header"
        >
          <div className="flex min-h-24 items-center justify-between font-inter">
            <Logo />
            <Navigation />
          </div>
        </Container>

        <main className="flex-grow">
          <>{children}</>
        </main>

        <Container as="footer" className="w-full">
          <div className="flex items-center justify-between">
            <p className="text-md font-cal tracking-wider">
              With a passion for creating innovative solutions.
            </p>
            <p className="text-md font-mono tracking-wide">
              <>&copy; {new Date().getFullYear()}</>
            </p>
          </div>
        </Container>
      </body>
    </html>
  );
}
