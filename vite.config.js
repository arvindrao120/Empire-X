import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],

  server: {
    proxy: {
      "/submit": {
        target: "https://api.web3forms.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/submit/, "/submit"),
      },
    },
  },
});
