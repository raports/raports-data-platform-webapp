import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";

const openSans = localFont({
  src: "./fonts/OpenSans.ttf",
  variable: "--font-open-sans",
  weight: "100 200 300 400 500 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 700",
});

export const metadata: Metadata = {
  title: "Raports Data Platform",
  description:
    "The all-in-one solution for data analytics and management. It features a BI Dashboards, Data Market, Data Management Services and various ML tools. Integrated Chat GPT and a Data Quality Monitor make it ideal for organizations seeking streamlined data operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
