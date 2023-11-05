import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Home/",
  server: {
    port: 80, // Change this to the desired port number
  },
});
