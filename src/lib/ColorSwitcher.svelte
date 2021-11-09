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
  ];

  const darkModeColors = [
    { var: `--pure-background-color`, value: `#000000` },
    { var: `--primary-color`, value: `rgb(25, 25, 25)` },
    { var: `--primary-color-rgb`, value: `25, 25, 25` },
    { var: `--accent-color`, value: `rgb(49, 179, 167)` },
    { var: `--accent-color-rgb`, value: `49, 179, 167` },
    { var: `--heading-color`, value: `rgba(255, 255, 255, 0.7)` },
    { var: `--text-color`, value: `#f2f2f2` },
    { var: `--text-color-rgb`, value: `242, 242, 242` },
    { var: `--off-text-color`, value: `#e3e3e3` },
    { var: `--pure-text-color`, value: `#ffffff` },
    { var: `--background-without-opacity`, value: `rgba(0, 0, 0, 0.7)` },
    { var: `--box-shadow-color`, value: `rgba(0, 0, 0, 0.1)` },
    { var: `--works-on-accent-bg`, value: `var(--pure-background-color)` },
    { var: `--semitransparent-bg`, value: `rgba(255, 255, 255, 0.08)` },
  ];

  let currentMode = "light";
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
  <!-- <span class={currentMode == "dark" ? "active" : ""}>☀️</span>
  ⇆
  <span class={currentMode == "light" ? "active" : ""}>🌕</span> -->
</p>

<style>
  p {
    cursor: pointer;
    position: fixed;
    bottom: 3.5%;
    left: 3.5%;
    font-family: var(--font-sans);
    font-weight: 300;
    font-size: 1.5rem;
    z-index: 300;
    user-select: none;
    /* color: rgba(var(--text-color-rgb), 0.35); */
  }

  .active {
    /* text-decoration: underline; */
    color: var(--pure-text-color);
  }
</style>
