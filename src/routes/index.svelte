<script>
  import { onMount } from "svelte";
  import { currentColorMode } from "../stores/global.js";
  import Home from "$lib/HomeSection.svelte";

  let currentMode = "light";
  const updateSystemPreferenceDarkTheme = () => {
    currentMode = matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  onMount(() => {
    updateSystemPreferenceDarkTheme();
    currentColorMode.set(currentMode);
  });
</script>

<Home />

<style>
</style>
