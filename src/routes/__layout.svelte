<script>
  import { onMount } from "svelte";
  import { currentColorMode, navigationState } from "../stores/global.js";

  import Seo from "$lib/Seo.svelte";
  import Nav from "$lib/Nav.svelte";

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
  import { fade } from "svelte/transition";
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
<Nav />
<slot />
<Loading />

<style>
</style>
