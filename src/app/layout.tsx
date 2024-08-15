import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import Intro from "../components/Intro/Intro";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Credits from "../components/Credits/Credits";

export const metadata: Metadata = {
  title: "Parker",
  description: "Parker Hazel's Website."
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body >
        <Navbar />
        <Home />
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
