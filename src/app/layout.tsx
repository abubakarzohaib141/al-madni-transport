import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import {
  Cormorant_Garamond,
  Manrope,
} from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Al Madni Transport | Makkah & Madinah",

  description:
    "Private transportation and Ziyarat journey arrangements in Makkah and Madinah. Travel with comfort and care with Al Madni Transport.",

  applicationName: "Al Madni Transport",

  openGraph: {
    title: "Al Madni Transport",
    description:
      "Private transportation and Ziyarat experiences across Makkah and Madinah.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F5EF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${cormorant.variable}`}
      >
        {children}
      </body>
    </html>
  );
}