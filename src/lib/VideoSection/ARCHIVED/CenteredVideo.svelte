<script>
  import { onMount } from "svelte";

  export let projects;

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

  $: currentProject = value ? projects[value] : projects[0];

  $: value, typeof value == "number" ? updateVideo(`./videos/${value}`) : null;

  onMount(() => {
    updateVideo(`./videos/${value}`);
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
        <h1 class="title-{i}">{project.metadata.title}</h1>
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
      <!-- Safari uses .mov, Chrome and FF use .webm -->
      <source bind:this={movSource} type="video/mp4" />
      <source bind:this={webmSource} type="video/webm" />
    </video>
  </div>
</div>

<style>
  .absolute-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    overflow: visible;
    z-index: 1;
    transform: translate(-50%);
    /* transform: translateX(42.5%); */
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
    transition: all 600ms ease-in-out;
  }

  .project-card:hover {
    transition: all 300ms ease;
  }

  .project-card.active h1 {
    /* letter-spacing: 0.64px; */
    color: var(--accent-color);
    /* background: rgba(var(--tertiary-color-rgb), 0.85); */
    border-radius: 5px;
  }

  .section-container {
    position: relative;
    height: 70vh;
    overflow: visible;
    /* overflow-x: hidden; */
  }

  h1 {
    margin-bottom: 0.25rem;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 200;
    padding: 0.25rem;
    letter-spacing: 0;
    transition: letter-spacing 400ms linear,
      opacity 800ms cubic-bezier(0.37, 0.35, 0.01, 0.99),
      color 800ms cubic-bezier(0.37, 0.35, 0.01, 0.99),
      text-shadow 800ms cubic-bezier(0.37, 0.35, 0.01, 0.99);
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
    z-index: 4;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .inactive {
    z-index: -1;
  }
  /* You can make this true on all desktop sizes for an overlay effect */
  .section-container {
    flex-direction: column-reverse;
  }

  .inactive {
    opacity: 0.3;
    /* border-bottom: 1px dashed rgba(var(--text-color-rgb), 0.6); */
    border-bottom: 1px dashed transparent;
    border-top: 1px dashed transparent;
  }

  .inactive h1 {
    color: transparent;
    opacity: 0.5;
    text-shadow: 0 0 2px rgba(var(--text-color-rgb), 0.8);
  }

  .active {
    background: rgba(var(--tertiary-color-rgb), 0.95);
    border-bottom: 1px solid var(--accent-color);
    border-top: 1px solid var(--accent-color);
  }

  @media screen and (max-width: 868px) {
    h1 {
      font-size: 2.5rem;
    }

    .absolute-container {
      transform: none;
    }

    video {
      width: 100%;
    }

    .projects {
      width: 100%;
    }

    .project-card {
      padding: 1rem;
    }

    .project-card.active h1 {
      letter-spacing: 0.4px;
    }
  }

  .title-0 {
    font-size: 4.5rem;
  }

  .title-1 {
    font-size: 4.9rem;
  }

  .title-2 {
    font-size: 5.82rem;
  }

  .title-3 {
    font-size: 11.05rem;
  }

  @media screen and (max-width: 1268px) {
    .title-0 {
      font-size: 5.69vw;
    }

    .title-1 {
      font-size: 6.2vw;
    }

    .title-2 {
      font-size: 7.3vw;
    }

    .title-3 {
      font-size: 13.9vw;
    }
  }
</style>
