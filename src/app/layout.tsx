import GlobalBackground from "@/components/shared/GlobalBackground";
import Navbar from "@/components/shared/nav/Navbar";
import { Toaster } from "@/components/ui/sonner";
import GoogleProvider from "@/providers/GoogleProvider";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Blood Care",
  description: "Donate blood, save lives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body
        style={{ fontFamily: "var(--font-inter), Arial, sans-serif" }}
        className="antialiased"
      >
        <GlobalBackground>
          <GoogleProvider>
            <Navbar />
            {children}
            <Toaster richColors position="top-center" />
          </GoogleProvider>
        </GlobalBackground>
      </body>
    </html>
  );
}
