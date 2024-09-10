import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
    plugins: [
      vue(),                  // Example plugin for Vue.js
      viteCompression()       // Compresses assets during the build
    ],
    build: {
    outDir: "dist",
    assetsDir: "assets", // Custom directory for static assets
    sourcemap: true, // Enable source maps for production build
    
    
  },
});
