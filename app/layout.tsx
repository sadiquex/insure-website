import type { Metadata } from "next";
import "./globals.css";
import { Karla } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Insure Landing Page",
  description: "Insure Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${karla.className}`}>{children}</body>
    </html>
  );
}
