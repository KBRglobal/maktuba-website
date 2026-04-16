import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,json}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0612",
        surface: "#12091f",
        "surface-2": "#1a0f2e",
        gold: "#d4a574",
        "gold-light": "#e8c9a0",
        "body-text": "#ddd5ea",
        muted: "#7a6b90",
        border: "#2a1f3d",
        success: "#7dba8a",
        warning: "#c47070",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["Heebo", "Inter", "sans-serif"],
        arabic: ["'Noto Kufi Arabic'", "Heebo", "sans-serif"],
      },
      typography: {
        maktuba: {
          css: {
            "--tw-prose-body": "#ddd5ea",
            "--tw-prose-headings": "#d4a574",
            "--tw-prose-links": "#e8c9a0",
            "--tw-prose-bold": "#e8c9a0",
            "--tw-prose-quotes": "#b8a0d8",
            "--tw-prose-code": "#e8c9a0",
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
