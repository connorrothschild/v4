<script>
  export let projects;
  export let videos;

  import { onMount } from "svelte";

  let video,
    videoTransitioning = false,
    value = 0;

  const updateVideo = function (index) {
    if (video) {
      videoTransitioning = true;

      setTimeout(() => {
        video.src = window.URL.createObjectURL(videos[index]);
        video.load();

        videoTransitioning = false;
      }, 200);
    }
  };

  onMount(() => {
    updateVideo(0);
  });

  $: value, typeof value == "number" ? updateVideo(value) : null;
</script>

<div class="section-container">
  <div class="projects">
    {#each projects as project, i}
      <a
        href={project.path.replace(/\.[^/.]+$/, "")}
        sveltekit:prefetch
        class="project-card no-underline 
        {value === i ? 'active' : 'inactive'}"
      >
        <h1
          class="title-{i}"
          on:mouseover={() => {
            value = i;
          }}
          on:focus={() => {
            value = i;
          }}
        >
          {project.metadata.title}
        </h1>
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
      class:videoTransitioning
    />
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
  }

  .projects {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 95%;
    height: 100%;
    text-align: left;
    position: relative;
    max-width: 1168px;
    margin: auto;
  }

  .project-card {
    height: 100%;
    border-bottom: 1px solid rgba(var(--text-color-rgb), 0.2);
    display: inline-flex;
    width: fit-content;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: all 600ms ease;
  }

  .section-container {
    position: relative;
    min-height: 45vh;
    height: 60vh;
    overflow: hidden;
    /* min-height: 400px; */
  }

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 200;
    transition: opacity 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),
      color 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),
      text-shadow 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99);
  }

  .inactive {
    opacity: 1;
    z-index: 1;
  }

  .inactive h1 {
    /* border-bottom: 1px dashed rgba(var(--text-color-rgb), 0.6); */
    /* border-bottom: 1px dashed transparent; */
    color: transparent;
    opacity: 0.5;
    text-shadow: 0 0 2px rgba(var(--text-color-rgb), 0.8);
  }

  .active {
    z-index: 5;
    border-bottom: 1px solid rgba(var(--accent-color-rgb), 0.8);
  }

  .active h1 {
    color: var(--accent-color);
  }

  .absolute-container {
    z-index: 2;
    pointer-events: none;
    transition: transform 500ms ease;
  }

  video {
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    cursor: pointer;
    transition: opacity 200ms linear;
  }

  .videoTransitioning {
    opacity: 0;
  }

  .title-0 {
    margin-top: 1rem;
  }

  .title-3 {
    transform: scaleY(0.95);
  }

  @media screen and (max-height: 600px) {
    .section-container {
      height: auto;
    }
  }
  @media screen and (min-width: 1269px) {
    .absolute-container {
      transform: translateX(55%);
      position: absolute;
      right: 0;
      left: unset;
    }

    .title-0 {
      font-size: 3.75rem;
    }

    .title-1 {
      font-size: 4.05rem;
    }

    .title-2 {
      font-size: 4.8rem;
    }

    .title-3 {
      font-size: 9.1rem;
    }
  }
  @media screen and (max-width: 1268px) {
    .absolute-container {
      transform: none;
    }

    video {
      left: 50%;
      transform: translateX(-50%);
    }

    .projects {
      text-align: center;
      width: 100%;
    }

    .project-card {
      padding: 1rem;
      margin: auto;
    }

    .section-container {
      height: auto;
      overflow-y: hidden;
    }

    .inactive {
      border-bottom: 1px solid transparent;
      border-top: 1px solid transparent;
    }

    .active {
      background: rgba(var(--primary-color-rgb), 0.8);
      border-bottom: 1px solid var(--accent-color);
      border-top: 1px solid var(--accent-color);
    }

    .project-card {
      display: flex;
      place-items: center;
      justify-content: center;
    }

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
