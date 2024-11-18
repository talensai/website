import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
const tiemposHeadline = localFont({
  src: "./fonts/tiempos-headline-web-regular.woff2", 
  variable: "--tiempos-headline",
  weight: "400", 
});

const metadata: Metadata = {
  title: "Talens | AI-Powered Talent Assessment Platform",
  description: "Talens connects exceptional global talent with opportunities through AI-powered soft skill assessments, focusing on the skills needed in the post-AI world.",
  keywords: [
    "talent assessment",
    "AI interviews",
    "soft skills",
    "global talent",
    "remote work",
    "emerging markets",
    "recruitment platform"
  ],
  authors: [{ name: "Talens" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://talensai.com",
    title: "Talens | AI-Powered Talent Assessment Platform",
    description: "Talens connects exceptional global talent with opportunities through AI-powered soft skill assessments.",
    siteName: "Talens"
  }
};

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tiemposHeadline.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
