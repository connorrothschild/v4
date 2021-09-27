<script>
  export let project;
  export let slug;

  import { fly, fade } from "svelte/transition";

  let hovered = false;
</script>

<a class="project no-underline" href={slug} sveltekit:prefetch>
  {#if hovered}
    <div transition:fade={{ duration: 200 }} class="hovered-gradient" />{/if}
  <img
    src="./images/projects/{project.imageUrl}.png"
    alt="Project image for {project.name}"
    class="project-image"
    on:mouseover={() => {
      hovered = true;
    }}
    on:mouseout={() => {
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
      <h1>{project.name}</h1>
      <h2 class="description">{project.description}</h2>
    </div>{/if}
</a>

<style>
  .project {
    position: relative;
  }

  .project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3px;
    box-shadow: 1px 1px 4px #b2b2b2;
    /* transition: filter 300ms ease; */
  }

  .project-image.hovered {
    /* filter: brightness(0.7); */
  }

  .hovered-gradient {
    position: absolute;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 0.52)
    );
    width: 100%;
    height: 100%;
    background-size: cover;
    pointer-events: none;
  }

  .project-text {
    position: absolute;
    bottom: 0;
    left: 0;
    pointer-events: none;
    padding: 0.5rem 0.5rem 1rem 1rem;
  }

  h1,
  h2 {
    color: white;
  }

  h1 {
    font-size: 1.5rem;
    text-shadow: 1px 1px 6px black;
  }

  .description {
    font-size: 1rem;
    margin-top: 12px;
    font-weight: 200;
    letter-spacing: 0.44px;
    /* text-shadow: 1px 1px 1 0px black; */
  }
</style>
