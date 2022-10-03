import { mdsvex } from "mdsvex";
import { mdsvexConfig } from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-node";
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
    }
};

export default config;