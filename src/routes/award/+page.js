import { base } from "$app/paths";

/**
 * @type {import('@sveltejs/kit').PageLoad}
 */
export async function load({ fetch }) {
  const res = await fetch(`${base}/awards.json`);
  const awards = await res.json();

  return {
    awards,
  };
}
