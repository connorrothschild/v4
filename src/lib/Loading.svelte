<script>
  import { fade } from "svelte/transition";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { navigationState, pageTransitionDelay } from "../stores/global.js";
  import { page } from "$app/stores";

  // When navigation state becomes loading, trigger page transition
  $: $navigationState == "loading", initTransition();

  let transitioning = false;

  let initTransition = function () {
    let transitionDur = $page.path == "/" ? 0 : $pageTransitionDelay;
    transitioning = true;
    setTimeout(() => {
      transitioning = false;
    }, transitionDur);
  };
</script>

{#if transitioning}
  <div
    in:fade={{ duration: 0 }}
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
