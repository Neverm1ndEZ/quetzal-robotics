import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MaterialProvider } from "./providers";
import { NavbarFinal } from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Quetzal Robotics",
	description: "Quetzal Robotics",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
			>
				<MaterialProvider>
					<NavbarFinal />
					<div className="flex flex-col min-h-screen items-center justify-center mx-auto max-w-full">
						{children}
					</div>
					<Footer />
				</MaterialProvider>
			</body>
		</html>
	);
}
