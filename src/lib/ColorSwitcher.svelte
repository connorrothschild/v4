<script>
  import { onMount } from "svelte";

  import { currentColorMode } from "../stores/global.js";

  const lightModeColors = [
    { var: `--pure-background-color`, value: `#ffffff` },
    { var: `--primary-color`, value: ` #ccdbe9` },
    { var: `--secondary-color`, value: `#d0dde9` },
    { var: `--tertiary-color`, value: `#edf0f8` },
    { var: `--accent-color`, value: `rgb(197, 81, 108)` },
    { var: `--accent-color-rgb`, value: `197, 81, 108` },
    { var: `--heading-color`, value: `rgba(0, 0, 0, 0.7)` },
    { var: `--text-color`, value: `#3a3a3a` },
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
    { var: `--secondary-color`, value: `rgb(25, 25, 25)` },
    { var: `--tertiary-color`, value: `rgb(25, 25, 25)` },
    { var: `--accent-color`, value: `rgb(87, 223, 210)` },
    { var: `--accent-color-rgb`, value: `87, 223, 210` },
    { var: `--heading-color`, value: `rgba(255, 255, 255, 0.7)` },
    { var: `--text-color`, value: `#f2f2f2` },
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

<p on:click={setColors}>
  {currentMode == "dark" ? "🌕" : "☀️"}
</p>

<style>
  p {
    text-transform: uppercase;
    cursor: pointer;
  }
</style>
