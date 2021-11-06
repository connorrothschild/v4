<script>
  export let projects;
  export let isMobile;

  import SectionTitle from "$lib/Text/SectionTitle.svelte";
  import HoverVideo from "$lib/VideoSection/HoverVideo.svelte";
  import ScrollVideo from "$lib/VideoSection/ScrollVideo.svelte";
  import { onMount } from "svelte";
  import IntersectionObserver from "svelte-intersection-observer";

  let element;
  let intersecting;

  let filteredProjects = projects.filter((d) => d.metadata.featured == true);

  let isTouchscreen = false;
  import { detectTouchscreen } from "../../scripts/utils.js";

  onMount(() => {
    isTouchscreen = detectTouchscreen();
  });
</script>

<IntersectionObserver {element} bind:intersecting>
  <section bind:this={element} id="projects">
    <div class="sticky-top">
      <div class="see-all-flex">
        <h1 class="page-overline">
          {isMobile ? "Selected projects" : "Selected projects"}
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
        <h1 id="projects-title" class="page-title home overflow-hidden">
          Projects I've
          <span class="gradient-accented bolded">built</span>
        </h1>
      </SectionTitle>
    </div>
    {#if isTouchscreen}
      <ScrollVideo projects={filteredProjects} />
    {:else}
      <HoverVideo projects={filteredProjects} />
    {/if}
  </section>
</IntersectionObserver>

<style>
  /* This section handled differently because we want project gallery fullbleed */
  section {
    margin: auto;
    margin-bottom: var(--section-margin-bottom);
    width: 100%;
    overflow: hidden;
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
</style>
