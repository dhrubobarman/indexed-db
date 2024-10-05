import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/main.ts"],
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  dts: true,
  format: ["cjs", "esm"],
  target: "es2020",
  outDir: "dist",
  platform: "browser",
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});
