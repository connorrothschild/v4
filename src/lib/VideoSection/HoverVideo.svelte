<script>
  import { onMount } from "svelte";

  export let projects;

  import { currentColorMode } from "../../stores/global.js";

  let value = 0;
  let video, source;
  let videoTransitioning = false;

  const updateVideo = function (url) {
    if (video && source) {
      // videoTransitioning = true;

      // setTimeout(() => {
      source.src = url;
      video.load();
      video.play();
      videoTransitioning = false;
      // }, 1000);
    }
  };

  $: currentProject = value ? projects[value] : projects[0];

  $: value || $currentColorMode,
    typeof value == "number"
      ? updateVideo(`./videos/${$currentColorMode}/${value}.mp4`)
      : null;

  onMount(() => {
    updateVideo(`./videos/${$currentColorMode}/${value}.mp4`);
  });
</script>

<div class="section-container">
  <div class="projects">
    {#each projects as project, i}
      <a
        href={currentProject.path.replace(/\.[^/.]+$/, "")}
        on:mouseover={() => {
          value = i;
        }}
        on:focus={() => {
          value = i;
        }}
        class="project-card no-underline {value === i ? 'active' : 'inactive'}"
      >
        <h1>{project.metadata.title}</h1>
        <!-- <h2>{project.metadata.description}</h2> -->
      </a>
    {/each}
  </div>
  <div class="absolute-container">
    <video
      preload="metadata"
      autoplay
      muted
      playsinline
      id="video"
      bind:this={video}
    >
      <source bind:this={source} type="video/mp4" />
    </video>
  </div>
</div>

<style>
  .absolute-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
    transform: translateX(42.5%);
  }

  .projects {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 95%;
    height: 100%;
    text-align: left;
    position: relative;
    z-index: 5;
    max-width: 1168px;
    margin: auto;
  }

  .project-card {
    height: 100%;
    /* border-bottom: 1px dashed var(--accent-color); */
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  .project-card:hover {
    transition: all 300ms ease;
  }

  .project-card.active {
    /* border-bottom: 1px solid var(--accent-color); */
  }

  .project-card.active h1 {
    letter-spacing: 0.64px;
    color: var(--accent-color);
  }

  .section-container {
    position: relative;
    height: 70vh;
    overflow: visible;
    overflow-x: hidden;
  }

  h1 {
    margin-bottom: 0.25rem;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 200;
    letter-spacing: 0;
    transition: letter-spacing 400ms linear,
      opacity 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),
      color 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),
      text-shadow 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99);
  }

  h2 {
    font-family: var(--font-sans);
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 1.25;
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

  video {
    height: 100%;
    max-height: 80vh;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
  }

  /* You can make this true on all desktop sizes for an overlay effect */
  .section-container {
    flex-direction: column-reverse;
  }

  .inactive {
    opacity: 0.3;
    /* border-bottom: 1px dashed rgba(var(--text-color-rgb), 0.6); */
    border-bottom: 1px dashed transparent;
  }

  .inactive h1 {
    color: transparent;
    opacity: 0.5;
    text-shadow: 0 0 2px rgba(var(--text-color-rgb), 0.8);
  }

  @media screen and (max-width: 868px) {
    h1 {
      font-size: 2.5rem;
    }
    .active {
      background: rgba(var(--tertiary-color-rgb), 0.8);
    }

    .absolute-container {
      transform: none;
    }

    video {
      width: 100%;
    }
  }
</style>
