<script>
  import { quintOut } from "svelte/easing";
  import { fade, draw, fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  export function expand(node, params) {
    const { delay = 0, duration = 400, easing = cubicOut } = params;

    const w = parseFloat(getComputedStyle(node).strokeWidth);

    return {
      delay,
      duration,
      easing,
      css: (t) => `opacity: ${t}; stroke-width: ${t * w}`,
    };
  }

  export let options;
  let index = 0;

  function increment() {
    let newIndex = index + 1 > options.length - 1 ? 0 : index + 1;
    return newIndex;
  }

  $: currJob = options[index];

  let color = {
    Axios: "#3b6be3",
    USSOCOM: "#BDAE50",
    "Texas Policy Lab": "#e54e4d",
  };

  let hovered = false;
</script>

<div
  style="border-bottom: 4px solid {color[currJob]}"
  on:click={() => (index = increment())}
  on:mouseover={() => (hovered = true)}
>
  {currJob}
  <img src="/images/icons/shuffle.svg" alt="Shuffle icon" />
</div>

<style>
  div {
    display: inline;
    user-select: none;
    cursor: pointer;
  }

  img {
    vertical-align: middle;
    margin-bottom: 1px;
    width: 32px;
    height: 32px;
  }
</style>
