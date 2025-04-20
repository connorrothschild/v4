import { base } from "$app/paths";

/**
 * @type {import('@sveltejs/kit').PageLoad}
 */
export async function load({ fetch }) {
  const res = await fetch(`/projects.json`);
  const projects = await res.json();

  return {
    projects,
  };
}
