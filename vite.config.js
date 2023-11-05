import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Home/",
  server: {
    host: "mini2-frontend2.onrender.com", // Change this to the desired localhost address
    port: 80, // Change this to the desired port number
  },
});
