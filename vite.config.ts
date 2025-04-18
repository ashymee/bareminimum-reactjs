import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    react(),
    tailwindcss()
  ],
  server: {
    host: true,
    port: 2700,
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  }
});
