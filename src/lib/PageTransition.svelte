<script>
  import { fly } from "svelte/transition";
  export let refresh = "";
  export let duration = 400;

  // For the duration of the transition, apply a class to the html/body tags that prevent overflow
  let isTransitioning;
  function setTransitioningForDuration() {
    isTransitioning = true;

    setTimeout(() => {
      isTransitioning = false;
    }, duration);
  }

  // Run this function anytime "refresh" updates (new page load)
  $: refresh, setTransitioningForDuration();
</script>

<svelte:head>
  {#if isTransitioning == true}
    <style>
      body {
        overflow: hidden !important;
      }
      html {
        overflow: hidden !important;
      }
    </style>
  {/if}
</svelte:head>

{#key refresh}
  <div
    in:fly={{ x: -10, duration: duration / 2, delay: duration / 2 }}
    out:fly={{ x: 10, duration: duration / 2 }}
  >
    <slot />
  </div>
{/key}
