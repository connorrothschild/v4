<script context="module">
  export const load = async ({ page }) => ({
    props: {
      key: page.path,
    },
  });
</script>

<script>
  import Seo from "$lib/Seo.svelte";
  import Nav from "$lib/Nav.svelte";
  import HoveredSvg from "$lib/HoveredSvg.svelte";
  import PageTransition from "$lib/PageTransition.svelte";
  export let key;

  import "../styles/immutable.css";
  import "../styles/code.css";
  import "../styles/style.css";
  import "../styles/blog.css";
  import "../styles/project.css";
</script>

<Seo />
<Nav />
<HoveredSvg />
<PageTransition refresh={key} duration={1000}>
  <slot />
</PageTransition>

<style>
</style>
