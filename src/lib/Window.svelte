<script>
  import debounce from "lodash.debounce";
  import { onMount } from "svelte";
  import { windowWidth, windowHeight } from "../stores/global.js";

  export let debounceDur = 300;
  const onResize = () => {
    $windowWidth = window.innerWidth;
    // Only redefine window height if it is significantly changed ( > .10)
    // This prevents jankiness on mobile with URL bar
    if (Math.abs($windowHeight - window.innerHeight) > $windowHeight * 0.1) {
      $windowHeight = window.innerHeight;
      console.log("height changed");
    }
  };
  onMount(() => {
    onResize();
  });
</script>

<svelte:window on:resize={debounce(onResize, debounceDur)} />
