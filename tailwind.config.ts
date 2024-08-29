import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#7998cc", // Custom primary color
        // secondary: "#bee3b6", // Custom secondary color
        // accent: "#765fb0", // Custom accent color
        primary: "#cad2c5",
        secondary: "#52796f",
        tertiary: "#354f52",
        accent: "#2f3e46",
      },
      fontFamily: {
        custom: ["NTR", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
