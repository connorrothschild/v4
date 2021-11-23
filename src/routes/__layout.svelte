<script>
  import { onMount, tick } from "svelte";
  import { currentColorMode, navigationState } from "../stores/global.js";

  import Window from "$lib/Window.svelte";
  import Seo from "$lib/Seo.svelte";
  import Nav from "$lib/Nav/Nav.svelte";
  import ColorSwitcher from "$lib/ColorSwitcher.svelte";
  import Footer from "$lib/Footer.svelte";
  import SmallFooter from "$lib/FooterSmall.svelte";

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

  async function scrollTop() {
    await tick();
    document.scrollingElement.scrollTop = 0;
    window.scrollTo(0, 0);
  }
</script>

<svelte:window
  on:sveltekit:navigation-start={() => {
    navigationState.set("loading");
  }}
  on:sveltekit:navigation-end={() => {
    navigationState.set("loaded");
    scrollTop();
  }}
/>

<Window />
<Seo />
<Nav styles={path === "/" ? "" : "position: fixed;"} />
<slot />
<Loading />
<ColorSwitcher />
{#if path === "/"}
  <Footer />
{:else}
  <SmallFooter />
{/if}

<style>
</style>
