import GlobalBackground from "@/components/shared/GlobalBackground";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { Geist_Mono } from "next/font/google";
import "./globals.css";
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blood Donation",
  description: "Donate blood, save lives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} font-sans`}>
      <body>
        <GlobalBackground>{children}</GlobalBackground>
      </body>
    </html>
  );
}
