import { writable } from "svelte/store";

export const currentIcon = writable("");
export const currentColorMode = writable('light')

export const navigationState = writable('loaded');