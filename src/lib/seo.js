import { writable } from "svelte/store";

export const seo = writable({
  title: "Connor Rothschild",
  description: "I tell visual stories on the web.",
  keywords: "web design, data science, data visualization",
  image: "https://connorr.netlify.app/social.png"
});
