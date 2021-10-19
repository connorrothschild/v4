<script>
  export let project;
  export let slug;

  import { fly, fade } from "svelte/transition";

  let hovered = false;
</script>

<a class="project-card no-underline" href={slug} sveltekit:prefetch>
  {#if hovered}
    <div transition:fade={{ duration: 200 }} class="hovered-gradient" />
  {/if}
  <img
    src="/images/project/{project.image}"
    alt="Project image for {project.title}"
    class="project-image"
    on:mouseover={() => {
      hovered = true;
    }}
    on:focus={() => {
      hovered = true;
    }}
    on:mouseleave={() => {
      hovered = false;
    }}
    class:hovered
  />
  {#if hovered}
    <div
      in:fly={{ y: 50, duration: 200 }}
      out:fade={{ duration: 200 }}
      class="project-text"
    >
      <h1>{project.title}</h1>
      <h2 class="description">{project.description}</h2>
    </div>
  {/if}
</a>

<style>
  .project-card {
    position: relative;
    border-radius: 5px;
    box-shadow: 1px 1px 4px #b2b2b2;
    height: 100%;
  }

  .project-image {
    width: 100%;
    height: 100%;
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
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 0.75)
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

  h1,
  h2 {
    color: white;
  }

  h1 {
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
</style>
