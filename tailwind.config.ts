import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,json}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0612",
        surface: "#0f0b1a",
        "surface-2": "#160d24",
        gold: "#d4a574",
        "gold-hi": "#f1d694",
        "gold-light": "#f4e4a0",
        "gold-dark": "#b8860b",
        "gold-logo": "#c9a96e",
        "body-text": "#ebe3d3",
        "parchment-2": "#ebe3d3",
        muted: "#8a7a60",
        border: "#1e1535",
        success: "#6b8f71",
        warning: "#c45d4e",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["Heebo", "Inter", "sans-serif"],
        arabic: ["'Noto Kufi Arabic'", "Heebo", "sans-serif"],
      },
      typography: {
        maktuba: {
          css: {
            "--tw-prose-body": "#ebe3d3",
            "--tw-prose-headings": "#d4a574",
            "--tw-prose-links": "#f1d694",
            "--tw-prose-bold": "#f1d694",
            "--tw-prose-quotes": "#d4a574",
            "--tw-prose-code": "#f1d694",
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
