<script>
  import { fade } from "svelte/transition";

  export let projects;
  import Scroll from "$lib/Scroll.svelte";

  let value = 0;
  let video, webmSource, movSource;
  let videoTransitioning = false;

  const updateVideo = function (url) {
    if (video && (webmSource || movSource)) {
      videoTransitioning = true;

      setTimeout(() => {
        movSource.src = `${url}.mov`;
        webmSource.src = `${url}.webm`;
        video.load();
        video.play();
        videoTransitioning = false;
      }, 200);
    }
  };

  $: value, typeof value == "number" ? updateVideo(`./videos/${value}`) : null;

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
      <!-- Safari uses .mov, Chrome and FF use .webm -->
      <source bind:this={movSource} type="video/mp4" />
      <source bind:this={webmSource} type="video/webm" />
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

  .step:last-of-type {
    margin-bottom: 20vh;
  }

  .step-content {
    font-size: 1rem;
    background: transparent;
    border-radius: 5px;
    padding: 1rem;
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
