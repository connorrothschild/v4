<script>
  import { onMount } from "svelte";
  import { currentColorMode, navigationState } from "../stores/global.js";

  import Seo from "$lib/Seo.svelte";
  import Nav from "$lib/Nav.svelte";
  import ColorSwitcher from "$lib/ColorSwitcher.svelte";

  import "../styles/fonts.css";
  import "../styles/immutable.css";
  import "../styles/code.css";
  import "../styles/style.css";
  import "../styles/blog.css";
  import "../styles/project.css";

  let currentMode = "light";

  onMount(() => {
    currentColorMode.set(currentMode);
  });

  // PAGE LOADER
  import Loading from "../lib/Loading.svelte";

  // Get current page path
  import { page } from "$app/stores";
  $: path = $page.path;
</script>

<svelte:window
  on:sveltekit:navigation-start={() => {
    navigationState.set("loading");
  }}
  on:sveltekit:navigation-end={() => {
    navigationState.set("loaded");
  }}
/>
<Seo />
<Nav styles={path !== "/" ? "position: fixed;" : ""} />
<slot />
<Loading />
<ColorSwitcher />

<style>
</style>
