import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import node from "@astrojs/node";

export default defineConfig({
  site: "https://maktuba.app",
  output: "hybrid",
  adapter: node({ mode: "standalone" }),
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    icon(),
  ],
  i18n: {
    defaultLocale: "he",
    locales: ["he", "en", "ar"],
    routing: { prefixDefaultLocale: false },
  },
  server: { host: true, port: 3000 },
  vite: { ssr: { noExternal: ["astro-icon"] } },
});
