<script>
  import { fade } from "svelte/transition";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { navigationState, pageTransitionDelay } from "../stores/global.js";

  const progress = tweened(0, {
    duration: 2000,
    easing: cubicOut,
  });

  $: $navigationState == "loading", progress.set(0, { duration: 0 });
  $: $navigationState == "loaded",
    progress.set(1, { duration: 1000, easing: cubicOut });

  // When navigation state becomes loading, trigger page transition
  $: $navigationState == "loading", initTransition();

  let transitioning = false;

  let initTransition = function () {
    transitioning = true;
    setTimeout(() => {
      transitioning = false;
    }, $pageTransitionDelay);
  };
</script>

<!-- {#if $navigationState === "loading"}
  <div class="progress-bar">
    <div class="progress-sliver" style={`--width: ${$progress * 100}%`} />
  </div>
{/if} -->
{#if transitioning}
  <div
    in:fade={{ duration: 600 }}
    out:fade={{ duration: 600 }}
    class="fullscreen-loading"
  />
{/if}

<style>
  .fullscreen-loading {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background: var(--primary-color);
    z-index: 100;
    /* cursor: none; */
  }

  /* .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 0.2rem;
    z-index: 10000;
    width: 100%;
  }

  .progress-sliver {
    width: var(--width);
    background-color: var(--accent-color);
    height: 100%;
  } */
</style>
