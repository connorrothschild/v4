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
  import BackTo from "$lib/BackTo.svelte";

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

  import Seo from "$lib/Seo.svelte";

  let title = "Projects | Connor Rothschild";
  let description = "Some of my projects.";
  let image = `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${description}&theme=light&md=true&hasImage=true`;
</script>

<Transition />
<Seo {title} {description} {image} />
<main class="main">
  <BackTo
    href="/"
    text="Home"
    classes="page-overline transition-content centered"
  />
  <h1 class="page-title transition-title overflow-hidden">Projects</h1>

  <div class="projects-container transition-content">
    {#each filteredProjects as project}
      <ProjectSection
        project={project.metadata}
        slug={project.path.replace(/\.[^/.]+$/, "").replace("./", "/")}
      />
    {/each}
  </div>
</main>

<style>
  .projects-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  @media screen and (max-width: 700px) {
    .projects-container {
      grid-template-columns: auto;
      grid-template-rows: repeat(1, 1fr);
    }
  }
</style>
