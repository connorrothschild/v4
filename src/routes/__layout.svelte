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
</script>

<Seo />
<Nav />
<HoveredSvg />
<PageTransition refresh={key} duration={1000}>
  <slot />
</PageTransition>

<!-- </div> -->
<style>
  .cursor-follow {
    position: fixed;
    user-select: none;
    font-size: 50px;
    z-index: 9999;
  }

  .header {
    display: flex;
    place-items: center;
  }
</style>
