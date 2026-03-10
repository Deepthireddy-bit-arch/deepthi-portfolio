import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Bricolage Grotesque", "sans-serif"],
        mono:    ["DM Mono", "monospace"],
      },
      colors: {
        bg: {
          DEFAULT: "#FAFAF8",
          card:    "#FFFFFF",
          subtle:  "#F0EEE9",
        },
        ink: {
          primary:   "#111110",
          secondary: "#333330",
          muted:     "#78756F",
          xmuted:    "#B0ACA5",
        },
        border: {
          DEFAULT: "#E4E1DB",
          strong:  "#CBC7BF",
        },
      },
    },
  },
  plugins: [],
};

export default config;