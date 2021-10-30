import { writable } from "svelte/store";

export const seo = writable({
  title: "Connor Rothschild",
  description: "I tell visual stories on the web.",
  keywords: "web design, data science, data visualization",
  image: "https://og-image-eight-eta.vercel.app/Connor Rothschild.png?subtitle=I%20I%20tell%20visual%20stories%20on%20the%20web.&theme=light&md=true&hasImage=true"
});
