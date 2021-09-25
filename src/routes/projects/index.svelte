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
  import ProjectSection from "$lib/ProjectSection.svelte";
  export let projects;

  // where .metadata has slug image name etc
  console.log(projects);
</script>

<main>
  <h1 class="page-overline">Projects</h1>
  <h1 class="page-title">
    What I've <span class="accented bolded">done</span>
  </h1>

  <div class="projects-container">
    {#each projects as project}
      <ProjectSection project={project.metadata} />
    {/each}
  </div>
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
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0;
  }
</style>
