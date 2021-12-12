<script>
  import { fly } from "svelte/transition";
  import { windowWidth } from "../stores/global.js";
  import { theme } from "../stores/theme.js";

  let transitioning = false;
  let transitionDuration = 600;
  let currentAccent;

  import { sleep } from "../scripts/utils.js";

  async function setColors() {
    currentAccent = getComputedStyle(document.documentElement).getPropertyValue(
      "--accent-color"
    );

    transitioning = true;
    await sleep(transitionDuration);

    transitioning = false;
    if ($theme == "dark") {
      theme.set("light");
    } else {
      theme.set("dark");
    }
  }

  import { cubicIn, cubicOut } from "svelte/easing";
</script>

{#if transitioning}
  <div
    in:fly={{ opacity: 1, x: -$windowWidth, easing: cubicIn }}
    out:fly={{ opacity: 1, x: $windowWidth, easing: cubicOut }}
    class="fullscreen-transition"
    style="background: {currentAccent};"
  />
{/if}
{#key $theme}
  <p class="color-switcher" on:click={setColors}>
    {$theme == "dark" ? "🌙" : "☀️"}
  </p>
{/key}

<style>
  .fullscreen-transition {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: grey;
    z-index: 10000;
  }

  p {
    cursor: pointer;
    position: fixed;
    bottom: 20px;
    left: 20px;
    font-family: var(--font-sans);
    font-weight: 300;
    font-size: 1.5rem;
    z-index: 101;
    user-select: none;
  }
</style>
