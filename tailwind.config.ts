import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  plugins: [],

  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#1a202c",
          default: "#f2f2f2",
          light: "#4b4a48",
          social: "#d1d0cd",
          // social: {
          //   facebook: "#3b5998",
          //   instagram: "#e1306c",
          //   twitter: "#1da1f2",
          // },
        },
        secondary: {
          dark: "#2b6cb0",
          default: "#3182ce",
          light: "#4299e1",
        },
      },
      fontSize: {
        "2xl": "1.8rem",
      },
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
};
export default config;
