import { mdsvex } from "mdsvex";
import { mdsvexConfig } from "./mdsvex.config.js";
// import adapter from "@sveltejs/adapter-netlify";
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  preprocess: [
    mdsvex(mdsvexConfig),
  ],
	kit: {
    paths: {
			base: dev ? '' : '/svelte-personal-site',
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;