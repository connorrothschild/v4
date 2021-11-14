<script>
  import debounce from "lodash.debounce";
  import { onMount } from "svelte";
  import { windowWidth, windowHeight } from "../stores/global.js";

  export let debounceDur = 300;
  const onResize = () => {
    $windowWidth = window.innerWidth;
    $windowHeight = window.innerHeight;
  };
  onMount(() => {
    onResize();
  });
</script>

<svelte:window on:resize={debounce(onResize, debounceDur)} />
