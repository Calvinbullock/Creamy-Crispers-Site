import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    target: ['es2022'],
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cookies: resolve(__dirname, "src/cookies/index.html"),
        iceCream: resolve(__dirname, "src/iceCream/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
        product_item_page: resolve(
          __dirname,
          "src/product_item_page/index.html"
        ),
        cart: resolve(__dirname, "src/cart/index.html"),
      },
    },
  },
  envPrefix: 'VITE_'
});
