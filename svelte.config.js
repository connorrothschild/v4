// import { preprocess } from 'svelte/compiler';
// import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import { mdsvexConfig } from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-netlify";
import image from 'svelte-image';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  // 	preprocess: preprocess({
	// 	...image(), ...mdsvex(mdsvexConfig)
	// }),
  preprocess: [
    // image(),
    mdsvex(mdsvexConfig),
  ],
  kit: {
    adapter: adapter(),
    target: "#svelte",
    ssr: true
  },
};

export default config;