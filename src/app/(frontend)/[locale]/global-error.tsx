"use client";

import { Inter as Font } from "next/font/google";
import localFont from "next/font/local";
import React from "react";

import Error from "@/components/(frontend)/error";

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
});

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <title>Something went wrong!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </head>

      <body className={cn(CalSans.variable, Inter.variable)}>
        <main className="relative z-20 flex flex-grow flex-col overflow-hidden">
          <Error error={error} />
        </main>
      </body>
    </html>
  );
}
