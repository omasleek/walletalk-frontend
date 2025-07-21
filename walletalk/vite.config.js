import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/", // <-- ensures correct path resolution
  plugins: [tailwindcss()],
  build: {
    outDir: "dist", // <-- confirms build folder for Vercel
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
