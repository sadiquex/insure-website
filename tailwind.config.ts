import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // sm: "480px", // Mobile
        // md: "768px",
        // lg: "1024px",
        // xl: "1440px", // Desktop
      },
      colors: {
        "dark-violet": "hsl(256, 26%, 20%)",
        "grayish-blue": "hsl(216, 30%, 68%)",
        "very-dark-violet": "hsl(270, 9%, 17%)",
        "dark-grayish-violet": "hsl(273, 4%, 51%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        "dm-serif-display": ["DM Serif Display", "serif"],
        karla: ["Karla", "sans-serif"],
      },
      fontSize: {
        "16": "16px",
      },
    },
  },
  plugins: [],
};
export default config;
