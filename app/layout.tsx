import type { Metadata } from "next";
import { IBM_Plex_Sans as FontSans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "AI Youtube Script Generator ",
  description: "Create your next youtube script in under 5 minutes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.className} antialiased`}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
