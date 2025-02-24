import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist", // Output directory
    rollupOptions: {
      input: "./index.html", // Entry point
    },
  },
  base: "./",
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss({
          content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
          theme: {
            extend: {},
          },
          plugins: [],
        }),
      ],
    },
  },
});
