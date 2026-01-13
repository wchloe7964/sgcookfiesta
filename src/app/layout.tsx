import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import ScriptsInit from "@/components/ScriptsInit";

export const metadata: Metadata = {
  title: "Markies - Talents Agency Sg",
  description: "A Singapore Based Talent Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* All your original links from Point A */}
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/index.css" />
        {/* Google Fonts will now work again! */}
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScriptsInit />
        {children}
        {/* All your working Point A Scripts */}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
