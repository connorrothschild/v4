<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch }) {
    const res = await fetch(`/projects.json`);
    const projects = await res.json();
    return {
      props: {
        projects,
      },
    };
  }
</script>

<script>
  import { slide } from "svelte/transition";
  import { linear } from "svelte/easing";
  import ProjectSection from "$lib/ProjectSection.svelte";
  export let projects;

  let filteredProjects = projects
    .filter((d) => d.metadata.archived != true)
    .sort((a, b) => Date.parse(b.metadata.date) - Date.parse(a.metadata.date));

  let featuredProjects = filteredProjects.filter(
    (d) => d.metadata.featured == true
  );
  let otherProjects = filteredProjects.filter(
    (d) => !d.metadata.featured == true
  );

  let showAll = false;

  import { seo } from "$lib/store.js";
  $seo = {
    title: "Projects | Connor Rothschild",
    description: "Some of my projects.",
  };
</script>

<main>
  <h1 class="page-overline">Projects</h1>
  <h1 class="page-title">
    What I've <span class="accented bolded">built</span>
  </h1>

  <div class="projects-container">
    {#each featuredProjects as project}
      <ProjectSection
        project={project.metadata}
        slug={project.path.replace(/\.[^/.]+$/, "")}
      />
    {/each}
  </div>
  {#if showAll}
    <div
      transition:slide={{ duration: 300, easing: linear }}
      class="projects-container"
    >
      {#each otherProjects as project}
        <ProjectSection
          project={project.metadata}
          slug={project.path.replace(/\.[^/.]+$/, "")}
        />
      {/each}
    </div>
  {/if}
  <button
    class="button pulled-right block"
    on:click={() => {
      showAll = !showAll;
    }}
  >
    {showAll ? "Hide others" : "Show all"}
    <span style="font-size: .85rem; vertical-align: top;">
      {showAll ? "↑" : "↓"}</span
    >
  </button>
</main>

<style>
  main {
    width: 90vw;
    max-width: 860px;
    margin: 0 auto;
    padding: 1em;
  }

  .projects-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin-bottom: 10px;
  }

  .button {
    margin: 12px 0 12px auto;
  }

  @media screen and (max-width: 660px) {
    .projects-container {
      grid-template-columns: auto;
      grid-template-rows: repeat(1, 1fr);
    }
  }
</style>
