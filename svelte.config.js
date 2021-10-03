import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import { mdsvexConfig } from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-netlify";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  // preprocess: preprocess(),
  preprocess: mdsvex(mdsvexConfig),
  kit: {
    adapter: adapter(),
    target: "#svelte",
  },
};

export default config;