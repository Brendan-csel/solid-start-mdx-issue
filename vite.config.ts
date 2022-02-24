import { defineConfig } from "vite";
import solid from "solid-start";
import rehypeHighlight from "rehype-highlight";

export default defineConfig({
  plugins: [
    {
      ...(await import("@mdx-js/rollup")).default({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
        rehypePlugins: [rehypeHighlight]
      }),
      enforce: "pre"
    },
    solid({
      extensions: [".mdx", ".md"]
    })
  ]
});
