import { mdsvex } from "mdsvex";
import { mdsvexConfig } from "./mdsvex.config.js";
// import adapter from "@sveltejs/adapter-netlify";
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    extensions: [".svelte", ...mdsvexConfig.extensions],
    preprocess: [
        mdsvex(mdsvexConfig),
    ],
    kit: {
        // target: "#svelte",
        adapter: adapter(),
        trailingSlash: 'never',
        browser: { hydrate: true },
        prerender: {
            default: true
        }
    }
};

export default config;