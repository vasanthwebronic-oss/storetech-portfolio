import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "StoreTech",
    template: "%s | StoreTech",
  },
  description:
    "StoreTech delivers autonomous retail, IoT, AI-powered automation, and smart commerce solutions.",
  icons: {
    icon: "/favicon.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header id="main-header">
          <Navbar />
        </header>

        <main className="pt-16">{children}</main>

        <footer className="bg-black py-12">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
