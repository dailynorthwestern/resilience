import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://dailynorthwestern.github.io",
  base: process.env.BASE_PATH || "/resilience/",
});
