import GlobalBackground from "@/components/shared/GlobalBackground";
import { Toaster } from "@/components/ui/sonner";
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
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable}`}
    >
      <body className="font-sans antialiased">
        <GlobalBackground>
          {children}
          <Toaster richColors position="top-center" />
        </GlobalBackground>
      </body>
    </html>
  );
}
