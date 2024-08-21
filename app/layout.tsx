import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import NavBar from "./NavBar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ALORE",
	description:
		"Making memories through melodies, Alore is a global muscial experience with events in Sacramento and Los Angeles.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript />
			</head>
			<body className={`overflow-x-hidden bg-[#140f14] ${inter.className}`}>
				<MantineProvider>
					<NavBar />
					{children}
					<Footer />
				</MantineProvider>
			</body>
		</html>
	);
}
