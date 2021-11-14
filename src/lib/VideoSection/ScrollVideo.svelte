<script>
  export let projects;
  export let videos;
  export let videosLoaded;

  import Scroll from "$lib/Scroll.svelte";

  let playedOnce = false,
    video,
    currentIndex = 0,
    videoTransitioning = false,
    value = 0;

  const updateVideo = function (index) {
    // If value is unchanged from prior, do nothing (this could occur since the default/initial value is 0, and when a user re-hovers over zero)
    if (playedOnce && index === currentIndex) return;

    if (video) {
      videoTransitioning = true;

      setTimeout(() => {
        video.src = window.URL.createObjectURL(videos[value]);
        video.load();

        videoTransitioning = false;

        currentIndex = index;
        playedOnce = true;
      }, 200);
    }
  };

  $: videosLoaded, updateVideo(0);

  $: currentProject = value ? projects[value] : projects[0];
  $: value, typeof value == "number" ? updateVideo(value) : null;

  import { windowHeight } from "../../stores/global.js";
</script>

<div class="section-container">
  <div class="steps-container">
    <Scroll bind:value>
      {#each projects as project, i}
        <div
          class="step"
          class:active={value === i}
          style="height: {$windowHeight * 0.7}px;"
        >
          <a
            class="step-content no-underline"
            href={currentProject.path.replace(/\.[^/.]+$/, "")}
            sveltekit:prefetch
          >
            <h1>{project.metadata.title}</h1>
            <h2>{project.metadata.description}</h2>
          </a>
        </div>
      {/each}
    </Scroll>
  </div>
  <div class="sticky">
    <video
      preload="metadata"
      autoplay
      muted
      playsinline
      id="video"
      bind:this={video}
      class:videoTransitioning
      style="height: {$windowHeight * 0.7}px;"
    />
  </div>
</div>

<style>
  .sticky {
    position: sticky;
    z-index: 1;
    /* top: calc(var(--nav-height) + 6rem);  */
    top: 8rem;
  }

  .section-container {
    /* margin-top: 1rem; */
    text-align: center;
    display: flex;
  }

  .step {
    /* height: 80vh; */
    display: flex;
    place-items: center;
    justify-content: center;
    padding: 0 1rem;
    z-index: 10;
    position: relative;
  }

  .step:last-of-type {
    /* margin-bottom: 20vh; */
    margin-bottom: 200px;
  }

  .step-content {
    font-size: 1rem;
    background: transparent;
    border-radius: 5px;
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: background 500ms ease;
    box-shadow: 1px 1px 6px var(--box-shadow-color);

    text-align: left;
    margin: auto;
    max-width: 500px;
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

  .step-content h1,
  .step-content h2 {
    color: rgba(var(--text-color-rgb), 0.4);
  }

  .step.active .step-content h1,
  .step.active .step-content h2 {
    color: var(--text-color);
  }

  .steps-container,
  .sticky {
    height: 100%;
    flex: 1;
  }

  .steps-container {
    z-index: 9;
  }

  video {
    width: 100%;
    /* height: 80vh; */
    display: block;
    object-fit: cover;
    margin: auto;
    z-index: 5;
    opacity: 1;
    transition: opacity 200ms linear;
  }

  .videoTransitioning {
    opacity: 0;
  }

  .step.active .step-content {
    background: var(--pure-background-color);
  }

  /* @media screen and (max-width: 868px) { */
  /* You can make this true on all desktop sizes for an overlay effect */
  .sticky {
    /* top: calc(var(--nav-height) + 3rem);  */
    top: 6rem;
  }

  .section-container {
    flex-direction: column-reverse;
  }

  video {
    width: auto;
    margin: 0 auto;
    max-width: 100vw;
  }
  /* } */
</style>
