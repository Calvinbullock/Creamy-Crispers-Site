import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cookies: resolve(__dirname, "src/cookies/index.html"),
        iceCream: resolve(__dirname, "src/iceCream/index.html"),
      },
    },
  },
});
