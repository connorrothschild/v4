<script>
  export let projects;

  import Transition from "$lib/Transition.svelte";
  import ProjectSection from "$lib/Content/Project.svelte";

  import { linear } from "svelte/easing";
  import { slide } from "svelte/transition";

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
</script>

<Transition />
<section>
  <div class="sticky-top">
    <h1 class="page-overline">Projects</h1>
    <h1 class="page-title">
      Projects I've
      <span class="gradient-accented bolded">built</span>
    </h1>
  </div>

  <div class="projects-container transition-content">
    {#each featuredProjects as project}
      <ProjectSection
        project={project.metadata}
        slug={project.path.replace(/\.[^/.]+$/, "").replace("./", "")}
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
    class="button pulled-right block transition-content"
    on:click={() => {
      showAll = !showAll;
    }}
  >
    {showAll ? "Hide others ↑" : "Show all ↓"}
  </button>
</section>

<style>
  section {
    min-height: 70vh;
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

  @media screen and (max-width: 700px) {
    .projects-container {
      grid-template-columns: auto;
      grid-template-rows: repeat(1, 1fr);
    }
  }
</style>
