import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit, Merriweather, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";

const kanit = Kanit({
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-kanit",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  weight: ["400"],
  variable: "--font-merriweather",
  subsets: ["latin"],
});

const syne = Syne({
  weight: ["400"],
  variable: "--font-syne",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CoreBridge",
  description: "CoreBridge Busines Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} ${merriweather.variable} ${syne.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
