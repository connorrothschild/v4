import { browser } from '$app/env';
import { writable } from 'svelte/store';

const defaultValue = 'dark';
const initialValue = browser ? window.localStorage.getItem('theme') ?? defaultValue : defaultValue;

export const theme = writable(initialValue);

theme.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('theme', value);
  }
});