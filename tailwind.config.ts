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
        // background: "#7998cc", // Custom background color
        // textPrimary: "#bee3b6", // Custom textPrimary color
        // textSecondary: "#765fb0", // Custom textSecondary color
        background: "#CAD2C5", // Light Greenish Gray
        primary: "#52796F", // Desaturated Green
        secondary: "#84A98C", // Soft Green
        textPrimary: "#2F3E46", // Deep Blue Gray
        textSecondary: "#52796F", // Dark Greenish Gray
        textTertiary: "#84A98C", // Desaturated Green
        accent: "#354f52", // Soft Green
      },
      fontFamily: {
        custom: ["NTR", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
