import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import DynamicBackground from "@/components/DynamicBackground";
import Footer from "@/components/Footer";
import { LanguageProvider, LangHtml } from "@/i18n/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Makr.tech - Business Transformation Architect',
  description: 'Translating complex business challenges into simple, scalable digital solutions.',
  icons: {
    icon: '/glyficon.png',
    shortcut: '/glyficon.png',
    apple: '/glyficon.png',
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
        <LanguageProvider>
          <LangHtml />
          <DynamicBackground/>
          <Navbar />
          {children}
          <Footer/>
        </LanguageProvider>
      </body>
    </html>
  );
}
