import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display-internal",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body-internal",
});

export const metadata: Metadata = {
  title: "Raja K C | Full Stack Developer and AI Student",
  description:
    "Premium personal portfolio for Raja K C, an AI and Data Science student specializing in full-stack development, machine learning, and REST APIs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="flex min-h-full flex-col font-body">{children}</body>
    </html>
  );
}
