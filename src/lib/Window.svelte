<script>
  import debounce from "lodash.debounce";
  import { onMount } from "svelte";
  import { windowWidth, windowHeight } from "../stores/global.js";

  export let debounceDur = 300;
  const onResize = () => {
    $windowWidth = window.innerWidth;
    // Only redefine window height if it is significantly changed (> 20%)
    // This prevents jankiness on mobile with URL bar
    if (Math.abs($windowHeight - window.innerHeight) > $windowHeight * 0.2) {
      $windowHeight = window.innerHeight;
    }
  };
  onMount(() => {
    onResize();
    $windowHeight = window.innerHeight;
  });
</script>

<svelte:window on:resize={debounce(onResize, debounceDur)} />
