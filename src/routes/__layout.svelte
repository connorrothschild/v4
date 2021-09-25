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
  import PageTransition from "$lib/PageTransition.svelte";
  export let key;

  import "../styles/immutable.css";
  import "../styles/code.css";
  import "../styles/style.css";
  import "../styles/blog.css";

  // let x, y;
  // let cursorDrunkenness = 0;

  // function handleMousemove(event) {
  //   x = event.clientX;
  //   y = event.clientY;
  // }

  // $: xPos = x;
  // $: yPos = y;

  // let emoji = "&#128200";

  // setInterval(function () {
  //   emoji = emoji == "&#128200" ? "&#128201" : "&#128200";
  // }, 1000);
</script>

<Seo />
<!-- <div class="header">
  🖱🍺❓
  <input type="range" bind:value={cursorDrunkenness} min="0" max="1000" />
</div>
<div on:mousemove={handleMousemove} style="min-height: 100vh;">
  <div
    class="cursor-follow"
    style="opacity: {xPos ? 1 : 0}; left: {xPos + 30}px; top: {yPos +
      30}px; transition: {cursorDrunkenness}ms ease all;"
  >
    {@html emoji}
  </div> -->
<Nav />
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
