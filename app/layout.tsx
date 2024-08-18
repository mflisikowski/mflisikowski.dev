import type { Metadata } from "next";
import { Inter as Font } from "next/font/google";
import localFont from "next/font/local";

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
				<main className="flex-grow">
					<>{children}</>
				</main>
			</body>
		</html>
	);
}
