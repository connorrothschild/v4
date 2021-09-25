<script>
  export let project;

  import { fly, fade } from "svelte/transition";

  let hovered = false;
</script>

<div class="project">
  {#if hovered}<div
      transition:fade={{ duration: 200 }}
      class="hovered-gradient"
    />{/if}
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
      <h2>{project.description}</h2>
    </div>{/if}
</div>

<style>
  .project {
    position: relative;
  }

  .project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3px;
    transition: filter 300ms ease;
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
    top: 60%;
    /* transform: translateY(-50%); */
    left: 2.5%;
    pointer-events: none;
    padding: 0.5rem;
  }

  h1,
  h2 {
    color: white;
    text-shadow: 1px 1px 6px black;
  }

  h2 {
    font-size: 1rem;
    margin-top: 12px;
  }
</style>
