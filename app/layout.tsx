import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
