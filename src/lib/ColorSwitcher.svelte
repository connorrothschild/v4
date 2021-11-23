<script>
  import { onMount } from "svelte";
  import { currentColorMode } from "../stores/global.js";

  const lightModeColors = [
    { var: `--pure-background-color`, value: `#ffffff` },
    { var: `--primary-color`, value: `#edf0f8` },
    { var: `--primary-color-rgb`, value: `237, 240, 248` },
    { var: `--accent-color`, value: `rgb(235, 96, 128)` },
    { var: `--accent-color-rgb`, value: `235, 96, 128` },
    { var: `--heading-color`, value: `rgba(0, 0, 0, 0.7)` },
    { var: `--text-color`, value: `#1c1c1c` },
    { var: `--text-color-rgb`, value: `28, 28, 28` },
    { var: `--off-text-color`, value: `#3a3a3a` },
    { var: `--pure-text-color`, value: `#000000` },
    { var: `--background-without-opacity`, value: `rgba(255, 255, 255, 0.7)` },
    { var: `--box-shadow-color`, value: `rgba(0, 0, 0, 0.1)` },
    { var: `--works-on-accent-bg`, value: `var(--pure-background-color)` },
    { var: `--semitransparent-bg`, value: `rgba(255, 255, 255, 0.5)` },
    { var: `--footer-bg`, value: `rgba(220, 220, 220, .8)` },
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
  ];

  let currentMode = "dark";
  function setColors() {
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
</script>

<p class="color-switcher" on:click={setColors}>
  {currentMode == "dark" ? "🌕" : "☀️"}
</p>

<style>
  p {
    cursor: pointer;
    position: fixed;
    bottom: 3.5%;
    left: 2%;
    font-family: var(--font-sans);
    font-weight: 300;
    font-size: 1.5rem;
    z-index: 101;
    user-select: none;
  }

  @media screen and (max-width: 768px) {
    p {
      left: 20px;
      bottom: 20px;
    }
  }
</style>
