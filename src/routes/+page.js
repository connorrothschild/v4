// Use base path defined in svelte.config.js
import { base } from "$app/paths";

export async function load({ fetch }) {
  const projectsJson = await fetch(`/v4/projects.json`);
  const projects = await projectsJson.json();

  const postsJson = await fetch(`/v4/posts.json`);
  const posts = await postsJson.json();

  const awardsJson = await fetch(`/v4/awards.json`);
  const awards = await awardsJson.json();

  return {
    // jobs,
    projects,
    posts,
    awards,
  };
}
