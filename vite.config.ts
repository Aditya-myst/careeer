import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), // React plugin with SWC for faster builds
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias for @ to point to the src directory
    },
  },
});
