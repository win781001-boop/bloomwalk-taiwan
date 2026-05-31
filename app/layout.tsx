import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bloom Walk — 散步種花路線地圖",
  description:
    "整理各縣市適合散步、種花、社群日活動與附近餐飲補給的散步路線地圖。",
  openGraph: {
    title: "Bloom Walk — 散步種花路線地圖",
    description:
      "整理各縣市適合散步、種花、社群日活動與附近餐飲補給的散步路線地圖。",
    type: "website",
    locale: "zh_TW",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
