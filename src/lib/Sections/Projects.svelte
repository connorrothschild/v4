<script>
  export let projects;

  import SectionTitle from "$lib/Text/SectionTitle.svelte";
  import HoverVideo from "$lib/VideoSection/HoverVideo.svelte";
  import ProjectSection from "$lib/Content/Project.svelte";

  import { onMount } from "svelte";
  import IntersectionObserver from "svelte-intersection-observer";

  let element;
  let intersecting;

  let filteredProjects = projects.filter((d) => d.metadata.featured == true);

  import { isHEVC, isPre1015 } from "../../stores/device.js";

  let videos = [];

  function preload(i) {
    let videoUrl = $isHEVC ? `./videos/${i}.mov` : `./videos/${i}.webm`;
    let req = fetch(videoUrl).then((response) => response.blob());

    req.then((blob) => {
      videos[i] = blob;
    });
  }

  let videosLoaded = false;
  $: if (intersecting) {
    for (let i = 0; i < filteredProjects.length; i++) {
      preload(i);
    }
  }

  $: videosLoaded = videos.length == 4;
</script>

<IntersectionObserver {element} bind:intersecting once>
  <section bind:this={element} id="projects">
    <div class="see-all-flex">
      <h1 class="page-overline">
        <!-- {isMobile ? "Selected projects" : "Selected projects"} -->
        01. Selected projects
      </h1>
      <a
        class="page-overline padding-bottom see-all"
        sveltekit:prefetch
        href="/project"
      >
        See all projects &#8599;
      </a>
    </div>
    <SectionTitle {intersecting} element="#projects-title">
      <h1 id="projects-title" class="section-title overflow-hidden">
        Projects I’ve
        <span class="gradient-accented bolded">built</span>
      </h1>
    </SectionTitle>
    {#if $isPre1015}
      <div class="projects-container">
        {#each filteredProjects as project}
          <ProjectSection
            project={project.metadata}
            slug={project.path
              .replace(/\.[^/.]+$/, "")
              .replace("./", "/")
              .replace("+page", "")}
          />
        {/each}
      </div>
    {:else}
      <HoverVideo projects={filteredProjects} {videos} {videosLoaded} />
    {/if}
  </section>
</IntersectionObserver>

<style>
  /* This section handled differently because we want project gallery fullbleed */
  section {
    margin: auto;
    margin-bottom: var(--section-margin-bottom);
    width: 100%;
    overflow-y: visible;
  }

  .see-all-flex,
  #projects-title {
    width: 95%;
    max-width: 1168px;

    margin-left: auto;
    margin-right: auto;
  }

  #projects-title {
    margin-bottom: 0; /* This allows for section content to be flush with border bottom on page title */
  }

  .projects-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    width: 100%;
    margin: auto;
    padding: 1rem;
    max-width: 1168px;
  }

  @media screen and (max-width: 700px) {
    .projects-container {
      grid-template-columns: auto;
      grid-template-rows: repeat(1, 1fr);
    }
  }
</style>
