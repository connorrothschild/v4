<script>
  export let project;
  export let i;
  export let videos;
  export let videosLoaded;

  import IntersectionObserver from "svelte-intersection-observer";

  let intersected = false;

  let element, intersecting;

  const playVideo = function () {
    if (element) {
      element.load();
      element.play();
    }
  };

  $: if (intersecting) {
    intersected = true;
  }

  $: intersected == true, playVideo();

  import { windowHeight } from "../../stores/global.js";
</script>

<IntersectionObserver {element} bind:intersecting once>
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
    {#if !videos[i]}
      <div class="lds-dual-ring" />
    {:else}
      <video
        bind:this={element}
        preload="metadata"
        autoplay
        muted
        playsinline
        style="height: {$windowHeight * 0.8}px;"
        src={window.URL.createObjectURL(videos[i])}
      />
    {/if}
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

  video {
    width: auto;
    margin: 0 auto;
    width: 101vw;
  }

  /* LOADING */
  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
