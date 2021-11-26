<script>
  import { onMount, tick } from "svelte";
  import { currentColorMode } from "../stores/global.js";

  import Window from "$lib/Window.svelte";
  import Seo from "$lib/Seo.svelte";
  import Nav from "$lib/Nav/Nav.svelte";
  import ColorSwitcher from "$lib/ColorSwitcher.svelte";
  import Footer from "$lib/Footer.svelte";
  import SmallFooter from "$lib/FooterSmall.svelte";
  import Circle from "$lib/CircleText.svelte";
  import Noise from "$lib/Noise.svelte";

  import "../styles/fonts.css";
  import "../styles/immutable.css";
  import "../styles/code.css";
  import "../styles/style.css";
  import "../styles/blog.css";
  import "../styles/project.css";

  let currentMode = "dark";
  let mounted = false;

  onMount(() => {
    currentColorMode.set(currentMode);
    mounted = true;
  });

  // This implements fade-in and out on the page level (smooth transitions)
  import Loading from "../lib/Loading.svelte";

  // When current page path changes, scroll to top (fixes https://github.com/sveltejs/kit/issues/2794)
  import { page } from "$app/stores";
  $: $page.path, $page.path ? scrollTop() : null;

  async function scrollTop() {
    if (mounted) {
      await tick();
      document.scrollingElement.scrollTop = 0;
      window.scrollTo(0, 0);
    }
  }
</script>

<Window />
<Seo />
<Nav hasBackground={true} />
<Noise />
<slot />
<Loading />
<ColorSwitcher />
<Circle />
{#if $page.path === "/"}
  <Footer />
{:else}
  <SmallFooter />
{/if}

<style>
</style>
