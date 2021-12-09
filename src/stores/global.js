import { writable, readable } from "svelte/store";

export const currentIcon = writable("");

export const pageTransitionDelay = readable(900);
export const menuExpanded = writable(false);

export const windowWidth = writable(0);
export const windowHeight = writable(0);

export const isTouchscreen = writable(false);