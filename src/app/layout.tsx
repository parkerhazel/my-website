import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar/Navbar";
import Intro from "../components/Intro/Intro";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Credits from "../components/Credits/Credits";

export const metadata: Metadata = {
  title: "Parker",
  description: "Parker Hazel's Website.",
  icons: "/favicon.ico",
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
        <Intro />
        <Experience />
        <Projects />
        <Analytics />
        <SpeedInsights />
        <Credits />
      </body>
    </html>
  );
}
