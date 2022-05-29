<script>
  import { scaleLinear } from "d3-scale";

  let width;
  let formerWidth = width;
  $: xScale = scaleLinear().domain([0, 100]).range([0, width]);

  let resized = false;
  import { fly } from "svelte/transition";

  // When width first changes, set resized to true
  // This is slightly more complex because it is initialized as null and then immediately gets a px property
  let setResized = () => {
    let diff = width - formerWidth;
    formerWidth = width;
    if (isNaN(diff)) return;
    resized = true;
  };
  $: width, resized ? null : setResized();
</script>

<div class="example" bind:clientWidth={width}>
  {#if !resized}<span transition:fly={{ y: 15 }}>Resize me!</span>{/if}
  <p>
    <code>xScale(50)</code> is equal to: {Math.round(xScale(50))}px.
  </p>
</div>

<style>
  .example {
    width: 480px;
    max-width: 100%;
    background: var(--semitransparent-bg);
    margin: 2rem auto;
    z-index: 3;
    position: relative;
    padding: 2rem 1rem;
    text-align: center;
    overflow: hidden;
    resize: horizontal;
  }

  span {
    position: absolute;
    top: 3px;
    right: 3px;
    color: white;
    padding: 4px;
    font-family: var(--font-sans);
    font-weight: 200;
    font-size: 0.85rem;
    text-transform: uppercase;
  }

  p {
    margin: 0 !important;
  }
</style>
