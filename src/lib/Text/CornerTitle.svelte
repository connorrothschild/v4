<script>
  import { onMount } from "svelte";

  export let title;
  export let subtitle;
  export let intersecting; /* This is false whenever the page title is no longer in view */

  import { fly } from "svelte/transition";
  let w;
  $: cornerTitleWidth = ((w - 768) / 2) * 0.85;

  // Wait at least 1000ms before transitioning in the corner title
  // This will prevent it from flashing on page navigation
  // When the page starts low and scrolls back up rapidly
  let pageHasLoaded = false;
  onMount(() => {
    setTimeout(() => {
      pageHasLoaded = true;
    }, 1500);
  });
</script>

<svelte:window bind:innerWidth={w} />
{#if !intersecting && w > 1168 && pageHasLoaded}
  <div
    transition:fly|local={{ y: -200 }}
    aria-hidden="true"
    class="corner"
    style="max-width: {cornerTitleWidth}px"
  >
    <p class="corner-title">{@html title}</p>
    <p class="corner-subtitle">{subtitle}</p>
    <p
      class="scroll-to-top"
      on:click={() => {
        window.scrollTo(0, 0);
      }}
    >
      Scroll to top &uarr;
    </p>
  </div>
{/if}

<style>
  .corner {
    position: fixed;
    top: var(--nav-height);
    left: 0;
    padding: 1rem;
    opacity: 1;
    transition: opacity 500ms ease 500ms;
  }

  .corner-title {
    font-size: 1.15rem;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: 0.64px;
    color: var(--pure-text-color);
    margin-bottom: 0.25rem;
  }

  .corner-subtitle {
    font-size: 0.9rem;
    font-weight: 100;
    letter-spacing: 0.64px;
    color: var(--text-color);
    margin-bottom: 0.75rem;
  }

  .scroll-to-top {
    font-size: 0.85rem;
    text-transform: uppercase;
    color: var(--accent-color);
    cursor: pointer;
  }
</style>
