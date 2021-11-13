<script>
  export let projects;

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

  let handleResponse = function (req) {
    req.onload = function () {
      // Onload is triggered even on 404 so we need to check the status code
      if (this.status === 200) {
        var videoBlob = this.response;
        var vid = URL.createObjectURL(videoBlob); // IE10+
        // Video is now downloaded  and we can set it as source on the video element
        // video.src = vid;
        // console.log("Loaded " + vid);
      }
    };
    req.onerror = function () {
      // console.log("Could not load video");
    };
    req.send();
  };

  function preload(i) {
    let req = new XMLHttpRequest();
    req.open("GET", `./videos/${i}.mov`, true);
    req.responseType = "blob";

    handleResponse(req);

    let req2 = new XMLHttpRequest();
    req2.open("GET", `./videos/${i}.mov`, true);
    req2.open("GET", `./videos/${i}.webm`, true);
    req2.responseType = "blob";

    handleResponse(req2);
  }

  $: if (intersecting) {
    for (let i = 0; i < filteredProjects.length; i++) {
      preload(i);
    }
  }
</script>

<IntersectionObserver {element} bind:intersecting>
  <section bind:this={element} id="projects">
    <div class="sticky-top">
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

  /* @media screen and (max-width: 768px) { */
  section {
    overflow: visible;
  }
  /* } */
</style>
