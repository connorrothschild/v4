<script>
  import { onMount, tick } from "svelte";
  import { theme } from "../stores/theme.js";

  import Window from "$lib/Window.svelte";
  // import Seo from "$lib/Seo.svelte";
  import Nav from "$lib/Nav/Nav.svelte";
  import ColorSwitcher from "$lib/ColorSwitcher.svelte";
  import Footer from "$lib/Footer.svelte";
  import Circle from "$lib/CircleText.svelte";
  import Noise from "$lib/Noise.svelte";

  import "../styles/fonts.css";
  import "../styles/immutable.css";
  import "../styles/code.css";
  import "../styles/blog.css";
  import "../styles/project.css";
  import "../styles/style.css";

  let mounted = false;

  onMount(() => {
    mounted = true;
    setColors($theme);
  });

  // This implements fade-in and out on the page level (smooth transitions)
  import Loading from "../lib/Loading.svelte";

  // When current page path changes, scroll to top (fixes https://github.com/sveltejs/kit/issues/2794)
  import { page } from "$app/stores";
  $: $page.url.pathname, $page.url.pathname ? scrollTop() : null;

  async function scrollTop() {
    if (mounted) {
      await tick();
      document.scrollingElement.scrollTop = 0;
      window.scrollTo(0, 0);
    }
  }

  // THEME HANDLER
  const lightModeColors = [
    { var: `--pure-background-color`, value: `#ffffff` },
    { var: `--primary-color`, value: `#edf0f8` },
    { var: `--primary-color-rgb`, value: `237, 240, 248` },
    { var: `--accent-color`, value: `rgb(41, 89, 180)` },
    { var: `--accent-color-rgb`, value: `41, 89, 180` },
    { var: `--heading-color`, value: `rgba(0, 0, 0, 0.7)` },
    { var: `--text-color`, value: `#1c1c1c` },
    { var: `--text-color-rgb`, value: `28, 28, 28` },
    { var: `--off-text-color`, value: `#3a3a3a` },
    { var: `--pure-text-color`, value: `#000000` },
    { var: `--background-without-opacity`, value: `rgba(255, 255, 255, 0.7)` },
    { var: `--box-shadow-color`, value: `rgba(0, 0, 0, 0.1)` },
    { var: `--works-on-accent-bg`, value: `var(--pure-background-color)` },
    { var: `--semitransparent-bg`, value: `rgba(255, 255, 255, 0.5)` },
    { var: `--footer-bg`, value: `var(--semitransparent-bg)` },
    { var: `--noise-opacity`, value: `.35` },
  ];

  const darkModeColors = [
    { var: `--pure-background-color`, value: `#000000` },
    { var: `--primary-color`, value: `rgb(22, 25, 26)` },
    { var: `--primary-color-rgb`, value: `22, 25, 26` },
    { var: `--accent-color`, value: `rgb(76, 159, 247)` },
    { var: `--accent-color-rgb`, value: `76, 159, 247` },
    { var: `--heading-color`, value: `rgba(255, 255, 255, 0.7)` },
    { var: `--text-color`, value: `#f2f2f2` },
    { var: `--text-color-rgb`, value: `242, 242, 242` },
    { var: `--off-text-color`, value: `#e3e3e3` },
    { var: `--pure-text-color`, value: `#ffffff` },
    { var: `--background-without-opacity`, value: `rgba(0, 0, 0, 0.7)` },
    { var: `--box-shadow-color`, value: `rgba(0, 0, 0, 0.1)` },
    { var: `--works-on-accent-bg`, value: `var(--pure-background-color)` },
    { var: `--semitransparent-bg`, value: `rgba(255, 255, 255, 0.08)` },
    { var: `--footer-bg`, value: `var(--semitransparent-bg)` },
    { var: `--noise-opacity`, value: `.35` },
  ];

  function setColors(theme) {
    if (!mounted) return;
    if (theme == "light") {
      lightModeColors.forEach((color) => {
        document.documentElement.style.setProperty(color.var, color.value);
      });
    } else {
      darkModeColors.forEach((color) => {
        document.documentElement.style.setProperty(color.var, color.value);
      });
    }
  }

  $: $theme, setColors($theme);
</script>

<Window />
<!-- <Seo /> -->
<Nav hasBackground={true} />
<Noise />
<ColorSwitcher />
<slot />
<Loading />
<Circle />
<Footer />

<style>
</style>
