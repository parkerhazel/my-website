import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "../components/Navbar/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Credits } from "../components/Credits/Credits";

export const metadata: Metadata = {
  title: "Parker",
  description: "Parker Hazel's Website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}
        <SpeedInsights />
        <Credits />
      </body>
    </html>
  );
}
