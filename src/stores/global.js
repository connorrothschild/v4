import { writable, readable } from "svelte/store";

export const currentIcon = writable("");
export const currentColorMode = writable('light')

export const navigationState = writable('loaded');
export const pageTransitionDelay = readable(700);

export const windowWidth = writable(0);
export const windowHeight = writable(0);
