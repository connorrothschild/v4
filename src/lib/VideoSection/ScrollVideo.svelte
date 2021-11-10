<script>
  export let projects;

  import Scroll from "$lib/Scroll.svelte";

  import { onMount } from "svelte";
  import { supportsHEVCAlpha } from "../../scripts/utils.js";

  let currentUrl = "./videos/0",
    playedOnce = false,
    video,
    webmSource,
    movSource,
    isHEVC = false,
    videoTransitioning = false,
    value = 0;

  onMount(() => {
    isHEVC = supportsHEVCAlpha();
    updateVideo(`./videos/${value}`, 0);
  });

  const updateVideo = function (url, index) {
    // If value is unchanged from prior, do nothing (this could occur since the default/initial value is 0, and when a user re-hovers over zero)
    if (playedOnce && url === currentUrl) return;

    if (video && (webmSource || movSource)) {
      videoTransitioning = true;

      setTimeout(() => {
        // video.src = isHEVC ? `${url}.mov` : `${url}.webm`;
        movSource.src = `${url}.mov`;
        webmSource.src = `${url}.webm`;

        video.load();

        videoTransitioning = false;

        currentUrl = url;
        playedOnce = true;
      }, 200);

      let nextVideo = index == 3 ? 0 : index + 1;

      // fetch(`./videos/${nextVideo}.mov`);
      // fetch(`./videos/${nextVideo}.webm`);
    }
  };

  $: currentProject = value ? projects[value] : projects[0];
  $: value,
    typeof value == "number" ? updateVideo(`./videos/${value}`, value) : null;

  // vh calculations
  let windowHeight;
</script>

<svelte:window bind:outerHeight={windowHeight} />
<div class="section-container">
  <div class="steps-container">
    <Scroll bind:value>
      {#each projects as project, i}
        <div
          class="step"
          class:active={value === i}
          style="height: {windowHeight * 0.7}px;"
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
      style="height: {0.7 * windowHeight}px;"
    >
      <source bind:this={movSource} type="video/mp4" />
      <source bind:this={webmSource} type="video/webm" />
    </video>
  </div>
</div>

<style>
  .sticky {
    position: sticky;
    z-index: 1;
    top: calc(var(--nav-height) + 6rem); /* Based on desktop sizing */
  }

  .section-container {
    /* margin-top: 1em; */
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

  @media screen and (max-width: 868px) {
    /* You can make this true on all desktop sizes for an overlay effect */
    .sticky {
      top: calc(var(--nav-height) + 3rem); /* Based on mobile sizing */
    }

    .section-container {
      flex-direction: column-reverse;
    }

    video {
      width: auto;
      margin: 0 auto;
      max-width: 100vw;
    }
  }
</style>
