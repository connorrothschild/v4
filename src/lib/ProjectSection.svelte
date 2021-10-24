<script>
  export let project;
  export let slug;

  import { fly, fade } from "svelte/transition";

  let hovered = false;

  // Prevent double clicking messing up routing
  import { goto, prefetch } from "$app/navigation";

  let linkClicked = false;
  function navigate(slug) {
    if (linkClicked) return;
    linkClicked = true;
    setTimeout(() => {
      linkClicked = false;
    }, 500);

    goto(slug);
  }

  // Show titles by default on touch devices
  import { onMount } from "svelte";
  import { detectTouchscreen } from "../scripts/utils.js";
  let isTouchscreen = false;
  onMount(() => {
    isTouchscreen = detectTouchscreen();
  });
</script>

<div class="project-card no-underline" on:click={navigate(slug)}>
  {#if hovered || isTouchscreen}
    <div transition:fade={{ duration: 200 }} class="hovered-gradient" />
  {/if}
  <img
    src="/images/project/{project.image}"
    alt="Project image for {project.title}"
    class="project-image"
    on:mouseover={() => {
      hovered = true;
      prefetch(slug);
    }}
    on:focus={() => {
      hovered = true;
      prefetch(slug);
    }}
    on:mouseleave={() => {
      hovered = false;
    }}
    class:hovered
  />
  {#if hovered || isTouchscreen}
    <div
      in:fly={{ y: 50, duration: 200 }}
      out:fade={{ duration: 200 }}
      class="project-text"
    >
      <h1 class="title">{project.title}</h1>
      <h2 class="description">{project.description}</h2>
    </div>
  {/if}
</div>

<style>
  .project-card {
    position: relative;
    border-radius: 5px;
    box-shadow: 1px 1px 4px #b2b2b2;
    height: 100%;
    cursor: pointer;
  }

  .project-image {
    width: 100%;
    height: 100%;
    min-height: 200px;  
    object-fit: cover;
    border-radius: 5px;
    filter: blur(0);
    z-index: 0;
    /* transition: filter 1000ms linear; */
  }

  .hovered-gradient {
    position: absolute;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1)
    );
    width: 100%;
    height: 100%;
    background-size: cover;
    pointer-events: none;
    z-index: 1; /* Above image */
  }

  .hovered {
    filter: blur(1px);
  }

  .project-text {
    position: absolute;
    bottom: 0;
    left: 0;
    pointer-events: none;
    padding: 1.5rem;
    z-index: 3;
  }

  .title,
  .description {
    color: white;
  }

  .title {
    font-size: 1.5rem;
    line-height: 1.15;
    text-shadow: 1px 1px 6px black;
  }

  .description {
    font-family: var(--font-sans);
    font-size: 1rem;
    line-height: 1.2;
    font-weight: 300;
    margin-top: 12px;
    letter-spacing: 0.64px;
    text-shadow: 1px 1px 6px black;
  }

  @media screen and (max-width: 600px) {
    .hovered-gradient {
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0));
    }

    .project-text {
      padding: 1rem;
    }

    .title {
      font-size: 1.2rem;
    }

    .description {
      font-size: 0.8rem;
      letter-spacing: 0.3px;
      margin-top: 6px;
    }
  }
</style>
