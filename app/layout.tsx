import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { profile } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: `${profile.name} | Electrical & Computer Engineering`,
  description: profile.tagline,
  applicationName: `${profile.name} Portfolio`,
  keywords: [
    "electrical engineering",
    "computer engineering",
    "Virginia Tech",
    "embedded systems",
    "digital design",
    "semiconductors",
    "software engineering"
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: profile.siteUrl,
    title: `${profile.name} | Electrical & Computer Engineering`,
    description: profile.tagline,
    siteName: `${profile.name} Portfolio`
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Electrical & Computer Engineering`,
    description: profile.tagline
  },
  alternates: { canonical: profile.siteUrl }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f5f1",
  colorScheme: "light"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
