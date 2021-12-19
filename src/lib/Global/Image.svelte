<script>
  export let src;
  export let alt;
  export let width = "100%";
  export let centered = false;
  export let style = "";
  export let href = null;

  import { fade } from "svelte/transition";

  let expanded = false;

  const toggleExpand = function () {
    if (href) {
      return;
    }
    expanded = !expanded;
  };
</script>

<svelte:window
  on:scroll={() => {
    expanded ? (expanded = false) : null;
  }}
  on:keydown={(e) => {
    e.key == "Escape" ? (expanded = false) : null;
  }}
/>

{#if expanded}
  <div
    transition:fade|local
    class="fullscreen-unscrollable"
    on:click={() => {
      expanded = false;
    }}
  />
  <img
    transition:fade|local
    class="expanded"
    {src}
    {alt}
    on:click={toggleExpand}
  />
{/if}
<a {href} target="_blank" rel="noopener noreferrer" class="no-underline">
  <img
    loading="lazy"
    {src}
    {alt}
    {width}
    {style}
    on:click={toggleExpand}
    class:centered
    class:href
  />
</a>

<style>
  .centered {
    display: block;
    margin: auto;
  }

  .fullscreen-unscrollable {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 102;
    display: flex;
    place-items: center;
    justify-content: center;
  }

  img:not(.expanded) {
    cursor: zoom-in;
    z-index: 1;
    position: relative;
    margin-bottom: 0;
  }

  img:last-of-type {
    margin-bottom: 1.15rem;
  }

  img.href {
    cursor: pointer;
  }

  .expanded {
    z-index: 103;
    max-height: 95%;
    max-width: 95%;
    left: 50%;
    top: 50%;
    position: fixed;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    cursor: zoom-out;
  }

  @media screen and (max-width: 768px) {
    img:not(.project img) {
      width: 100% !important;
    }
  }
</style>
