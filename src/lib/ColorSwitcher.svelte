<script>
  import { fly } from "svelte/transition";
  import { currentColorMode, windowWidth } from "../stores/global.js";

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

  let currentMode = "dark";
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
    if (currentMode == "dark") {
      lightModeColors.forEach((color) => {
        document.documentElement.style.setProperty(color.var, color.value);
      });
      currentMode = "light";
    } else {
      darkModeColors.forEach((color) => {
        document.documentElement.style.setProperty(color.var, color.value);
      });
      currentMode = "dark";
    }
  }

  $: currentMode, currentColorMode.set(currentMode);
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
{#key currentMode}
  <!-- <p
    out:fly={{ y: 50, duration: 300 }}
    in:fly={{ y: 50, delay: 300 }}
    class="color-switcher"
    on:click={setColors}
  > -->
  <p class="color-switcher" on:click={setColors}>
    {currentMode == "dark" ? "🌙" : "☀️"}
    <!-- <MoonSun active={currentMode} /> -->
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
