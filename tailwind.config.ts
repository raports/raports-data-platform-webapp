import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#CEE5FD",
          "500": "#2389F5",
          "700": "#0F2590",
        },
        dark: {
          "100": "#030E1B",
          "200": "#0F1B2A",
          "300": "#1B2839",
          "400": "#2E3C4E",
          "500": "#415062",
        },
        light: {
          "400": "#617691",
          "500": "#A9BACE",
          "700": "#F4F4F5",
          "800": "#F4F6F8",
          "850": "#F9FBFB",
          "900": "#FFFFFF",
        },
      },
      borderRadius: {
        "2": "8px",
        "1.5": "6px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "light-100":
          "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)",
        "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",
        "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(30deg, #2389F5 0%, #1957C3 70%, #0F2590 100%)",
      },
      screens: {
        xs: "420px",
      },
      fontFamily: {
        "open-sans": ["var(--font-open-sans)"],
        "space-grotesk": ["var(--font-space-grotesk)"],
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};

export default config;
