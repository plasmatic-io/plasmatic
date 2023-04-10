import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";

import * as packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ["src"],
    }),
  ],
  build: {
    lib: {
      entry: resolve("src", "index.ts"),
      name: "@plasmatic-ui",
      formats: ["es", "umd", "cjs"],
      fileName: (format) =>
        `plasmatic.${format == "cjs" ? "cjs" : `${format}.js`}`,
    },
    minify: "esbuild",
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
});
