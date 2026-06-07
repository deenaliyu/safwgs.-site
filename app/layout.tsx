import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import AnnouncementBar from "@/components/announcement-bar";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SAFWGS - Girl Code Bootcamp 5.0",
  description:
    "Supporting Africans For Women Global Society - Empowering women through skill development, mentorship, and community",
  icons: {
    icon: "/safwgs.jpeg",
    apple: "/safwgs.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <AnnouncementBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
