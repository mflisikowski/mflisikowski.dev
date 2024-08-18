import type { Metadata } from "next";
import { Inter as Font } from "next/font/google";
import localFont from "next/font/local";

import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { Navigation } from "@/components/navigation";

import { cn } from "@/utils/cn";

import "./globals.css";

export const metadata: Metadata = {
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
			</body>
		</html>
	);
}
