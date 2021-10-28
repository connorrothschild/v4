<script>
  import { onMount } from "svelte";
  import { currentColorMode } from "../stores/global.js";

  import Seo from "$lib/Seo.svelte";
  import Nav from "$lib/Nav.svelte";
  import HoveredSvg from "$lib/HoveredSvg.svelte";

  import "../styles/immutable.css";
  import "../styles/code.css";
  import "../styles/style.css";
  import "../styles/blog.css";
  import "../styles/project.css";

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

<Seo />
<Nav />
<HoveredSvg />
<slot />

<style>
</style>
