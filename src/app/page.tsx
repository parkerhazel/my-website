import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <html lang="en">
    <head>
      <title>Next.js</title>
    </head>
    <body>
      <h1>Hello World</h1>
      <SpeedInsights />
    </body>
  </html>
  );
}
