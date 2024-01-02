import { base } from "$app/paths";

/**
 * @type {import('@sveltejs/kit').PageLoad}
 */
export async function load({ fetch }) {
  const res = await fetch(`${base}/posts.json`);
  const posts = await res.json();

  return {
    posts,
  };
}
