import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Credits from "../components/Credits/Credits";
import ServiceWorkerRegister from "../components/ServiceWorkerRegister/ServiceWorkerRegister";

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
      <body className="Layout">
        <Navbar />
        {children}
        <About />
        <Experience />
        <Education />
        <Analytics />
        <SpeedInsights />
        <Credits />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
