<script>
  export let title;
  export let subtitle;
  export let intersecting; /* This is false whenever the page title is no longer in view */

  import { fly } from "svelte/transition";
  let w;
  $: cornerTitleWidth = ((w - 768) / 2) * 0.85;
</script>

<!-- Archived: using scrollY prevents scrollToTop because the binding redefines the Y position of the page -->
<!-- <svelte:window bind:scrollY={y} bind:innerWidth={w} /> -->
<svelte:window bind:innerWidth={w} />

{#if !intersecting && w > 1168}
  <div
    transition:fly={{ x: -200 }}
    aria-hidden="true"
    class="corner"
    style="max-width: {cornerTitleWidth}px"
  >
    <p class="corner-title">{title}</p>
    <p class="corner-subtitle">{subtitle}</p>
  </div>
{/if}

<style>
  .corner {
    position: fixed;
    top: var(--nav-height);
    left: 0;
    padding: 1rem;
    opacity: 1;
    transition: opacity 500ms ease 250ms;
  }

  .corner-title {
    font-size: 1.15rem;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: 0.64px;
    color: var(--text-color);
    margin-bottom: 0.5rem;
  }

  .corner-subtitle {
    font-size: 1rem;
    font-weight: 100;
    letter-spacing: 0.64px;
    color: var(--text-color);
  }
</style>
