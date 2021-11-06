<script>
  import { fade } from "svelte/transition";

  export let projects;
  import Scroll from "$lib/Scroll.svelte";

  import { currentColorMode } from "../../stores/global.js";

  let value = 0;
  let video, source;
  let videoTransitioning = false;

  const updateVideo = function (url) {
    if (video && source) {
      videoTransitioning = true;

      setTimeout(() => {
        source.src = url;
        video.load();
        video.play();
        videoTransitioning = false;
      }, 1000);
    }
  };

  $: value || $currentColorMode,
    typeof value == "number"
      ? updateVideo(`./videos/${$currentColorMode}/${value}.mp4`)
      : null;

  $: currentProject = value ? projects[value] : projects[0];
</script>

<div class="section-container">
  <div class="steps-container">
    <Scroll bind:value>
      {#each projects as project, i}
        <div class="step" class:active={value === i}>
          <div class="step-content">
            <h1>{project.metadata.title}</h1>
            <h2>{project.metadata.description}</h2>
          </div>
        </div>
      {/each}
    </Scroll>
  </div>
  <div class="sticky">
    <!-- {#if videoTransitioning} -->
    <a
      class="transition-overlay"
      href={currentProject.path.replace(/\.[^/.]+$/, "")}
      class:videoTransitioning
    />
    <!-- {/if} -->
    <video
      preload="metadata"
      autoplay
      muted
      playsinline
      id="video"
      bind:this={video}
    >
      <source bind:this={source} src="" type="video/mp4" />
    </video>
  </div>
</div>

<style>
  .sticky {
    position: sticky;
    top: calc(var(--nav-height) + 3rem);
  }

  .section-container {
    margin-top: 1em;
    text-align: center;
    transition: background 100ms;
    display: flex;
  }

  .step {
    height: 80vh;
    display: flex;
    place-items: center;
    justify-content: center;
    padding: 0 1rem;
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
    border-left: 5px solid transparent;

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

  .step.active .step-content {
    border-left: 5px solid var(--accent-color);
    background: var(--semitransparent-bg);
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

  .transition-overlay {
    background: var(--tertiary-color);
    width: 100%;
    height: 100%;
    display: block;
    margin: auto;
    max-width: 100vw;
    -o-object-fit: cover;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    opacity: 0;
    transition: opacity 200ms ease;
  }

  .videoTransitioning {
    opacity: 1;
  }

  video {
    width: 100%;
    height: 80vh;
    display: block;
    object-fit: cover;
    margin: auto;
    /* position: absolute; */
  }

  @media screen and (max-width: 868px) {
    /* You can make this true on all desktop sizes for an overlay effect */
    .section-container {
      flex-direction: column-reverse;
    }

    video {
      width: auto;
      height: 80vh;
      display: block;
      margin: 0 auto;
      max-width: 100vw;
      object-fit: cover;
    }

    .step.active .step-content {
      background: var(--pure-background-color);
    }
  }
</style>
