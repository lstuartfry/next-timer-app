import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next-Timer-App",
  description: "Timer SPA built using Next.JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
