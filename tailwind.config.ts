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
        background: "#361d11",
        textForeground: "#7a4f2c",
        "primary-50": "#f9f6ed",
        "primary-100": "#f0e9d1",
        "primary-200": "#e2d2a6",
        "primary-300": "#d1b573",
        "primary-400": "#c29a4d",
        "primary-500": "#b3873f",
        "primary-600": "#9a6a34",
        "primary-700": "#7a4f2c",
        "primary-800": "#68422b",
        "primary-900": "#5a3929",
        "primary-950": "#331e15",
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
