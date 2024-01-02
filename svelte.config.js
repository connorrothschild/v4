import { mdsvex } from "mdsvex";
import { mdsvexConfig } from "./mdsvex.config.js";
import vitePreprocess from "svelte-preprocess";
import { sveltekit } from "@sveltejs/kit/vite";
import adapter from "@sveltejs/adapter-static";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  extensions: [".svelte", ...mdsvexConfig.extensions],
  preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
  kit: {
    // adapter: adapter({
    //   fallback: "404.html",
    // }),
    paths: {
      base: process.env.NODE_ENV === "production" ? "/v4" : "",
    },
  },
};

export default config;
