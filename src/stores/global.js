import { writable, readable } from "svelte/store";

export const currentIcon = writable("");
export const currentColorMode = writable('light')

export const pageTransitionDelay = readable(900);

export const windowWidth = writable(0);
export const windowHeight = writable(0);
