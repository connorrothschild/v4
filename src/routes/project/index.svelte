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
  import Transition from "$lib/Transition.svelte";
  import ProjectSection from "$lib/Content/Project.svelte";

  import { linear } from "svelte/easing";
  import { slide } from "svelte/transition";

  export let projects;

  let filteredProjects = projects
    .filter((d) => d.metadata.archived != true)
    // Sort by featured first, and if featured is the same (both false), then sort by date
    .sort((a, b) => {
      if (b.metadata.featured && !a.metadata.featured) return 1;
      if (!b.metadata.featured && a.metadata.featured) return -1;
      if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date)) return 1;
      if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date)) return -1;
    });

  // let featuredProjects = filteredProjects.filter(
  //   (d) => d.metadata.featured == true
  // );
  // let otherProjects = filteredProjects.filter(
  //   (d) => !d.metadata.featured == true
  // );

  // let showAll = true;

  import { seo } from "$lib/store.js";
  let title = "Projects | Connor Rothschild";
  let description = "Some of my projects.";

  $seo = {
    title: title,
    description: description,
    image: `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${description}&theme=light&md=true&hasImage=true`,
  };
</script>

<Transition />
<main>
  <h1 class="page-overline transition-subtitle">Projects</h1>
  <h1 class="page-title transition-title overflow-hidden">
    Projects I've
    <span class="gradient-accented bolded">built</span>
  </h1>

  <div class="projects-container transition-content">
    {#each filteredProjects as project}
      <ProjectSection
        project={project.metadata}
        slug={project.path.replace(/\.[^/.]+$/, "")}
      />
    {/each}
  </div>
  <!-- {#if showAll}
    <div
      in:slide={{ duration: 300, easing: linear }}
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
    class="button pulled-right block transition-content"
    on:click={() => {
      showAll = !showAll;
    }}
  >
    {showAll ? "Hide others ↑" : "Show all ↓"}
  </button> -->
</main>

<style>
  main {
    max-width: 860px;
    margin: 0 auto;
    padding: 1em;
    width: 90%;
    margin-bottom: 4rem;
  }

  .projects-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  /* .button {
    margin: 12px 0 12px auto;
  } */

  @media screen and (max-width: 700px) {
    .projects-container {
      grid-template-columns: auto;
      grid-template-rows: repeat(1, 1fr);
    }
  }
</style>
