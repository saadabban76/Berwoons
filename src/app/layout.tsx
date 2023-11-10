import Navbar from "@/landing-layouts/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Viral Pit",
  description: "Struggling To Go Viral ? You're in the Right Place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-[100vw] overflow-x-hidden h-[100vh]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
