<script>
  import { onMount } from "svelte";
  import { currentColorMode } from "../stores/global.js";

  import Seo from "$lib/Seo.svelte";
  import Nav from "$lib/Nav.svelte";
  // import HoveredSvg from "$lib/HoveredSvg.svelte";

  import "../styles/immutable.css";
  import "../styles/code.css";
  import "../styles/style.css";
  import "../styles/blog.css";
  import "../styles/project.css";

  let currentMode = "light";

  onMount(() => {
    currentColorMode.set(currentMode);
  });
</script>

<Seo />
<Nav />
<slot />

<style>
</style>
