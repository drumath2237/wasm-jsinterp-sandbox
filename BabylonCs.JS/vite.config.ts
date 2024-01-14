import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import copy from "rollup-plugin-copy";

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "./lib/index.ts"),
      name: "babyloncs-js",
      fileName: "index",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      plugins: [
        copy({
          targets: [{ src: "dist/*.{js,ts}", dest: "../wwwroot/BabylonCs" }],
          verbose: true,
        }),
      ],
    },
  },
});
