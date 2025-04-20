import { base } from "$app/paths";

/**
 * @type {import('@sveltejs/kit').PageLoad}
 */
export async function load({ fetch }) {
  const res = await fetch(`/experience.json`);
  const jobs = await res.json();

  return {
    jobs,
  };
}
