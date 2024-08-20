import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fff",
        textForeground: "#000",
      },
      fontSize: {
        xs: "10.24px",
        sm: "12.8px",
        base: "16px",
        lg: "20px",
        xl: "25px",
        "2xl": "32px",
        "3xl": "40px",
        "4xl": "48px",
        "5xl": "61px",
      },
    },
  },
  plugins: [],
};
export default config;
