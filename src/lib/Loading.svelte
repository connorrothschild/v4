<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { navigationState } from "../stores/global.js";

  const progress = tweened(0, {
    duration: 2000,
    easing: cubicOut,
  });

  $: $navigationState == "loading", progress.set(0, { duration: 0 });
  $: $navigationState == "loaded",
    progress.set(1, { duration: 1000, easing: cubicOut });
</script>

{#if $navigationState === "loading"}
  <div class="progress-bar">
    <div class="progress-sliver" style={`--width: ${$progress * 100}%`} />
  </div>
{/if}

<style>
  .progress-bar {
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
  }
</style>
