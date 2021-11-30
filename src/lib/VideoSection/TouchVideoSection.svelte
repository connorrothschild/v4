<script>
  export let project;
  export let i;
  export let videosLoaded;

  import IntersectionObserver from "svelte-intersection-observer";

  let playedOnce = false,
    currentIndex = 0,
    videoTransitioning = false,
    videoHasSrc = false;

  let element, intersecting;

  const playVideo = function (index) {
    // If value is unchanged from prior, do nothing (this could occur since the default/initial value is 0, and when a user re-hovers over zero)
    if (playedOnce && index === currentIndex) return;

    videoTransitioning = true;

    setTimeout(() => {
      // let video = document.getElementById(`video-${index}`);
      element.load();
      element.play();

      videoTransitioning = false;

      videoHasSrc = true;

      currentIndex = index;
      playedOnce = true;
    }, 200);
  };

  $: videosLoaded, playVideo(0);

  import { windowHeight } from "../../stores/global.js";

  $: if (intersecting) {
    element.load();
    element.play();
  }
</script>

<IntersectionObserver {element} bind:intersecting>
  <div class="project-section" style="height: {$windowHeight * 0.85}px;">
    <a
      class="project-overlay no-underline"
      href={project.path.replace(/\.[^/.]+$/, "")}
      sveltekit:prefetch
    >
      <div class="project-text">
        <h1>{project.metadata.title}</h1>
        <h2>{project.metadata.description}</h2>
      </div>
    </a>
    <video
      bind:this={element}
      preload="metadata"
      muted
      playsinline
      id="video-{i}"
      class:videoTransitioning
      style="height: {$windowHeight * 0.8}px;"
    >
      <source src="videos/{i}.webm" />
      <source src="videos/{i}.mov" />
    </video>
  </div>
</IntersectionObserver>

<style>
  .project-section {
    display: flex;
    position: relative;
    min-width: 100vw;
  }

  .project-section:not(:last-of-type) {
    margin-right: 10vw;
  }

  .project-overlay {
    z-index: 100;
    /* padding: 1rem; */
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    width: 100%;
  }

  .project-text {
    background: rgba(0, 0, 0, 0.75);
    padding: 1rem;
    width: 95%;
    margin: auto;
    border-radius: 5px;
  }

  h1 {
    margin-bottom: 1rem;
  }

  h2 {
    font-family: var(--font-sans);
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 1.25;
  }

  video {
    width: 100%;
    display: block;
    object-fit: cover;
    margin: auto;
    z-index: 5;
    position: relative;
    opacity: 1;
    position: absolute;
    transition: opacity 200ms linear;
  }

  .videoTransitioning {
    opacity: 0;
  }

  video {
    width: auto;
    margin: 0 auto;
    width: 101vw;
  }
</style>
