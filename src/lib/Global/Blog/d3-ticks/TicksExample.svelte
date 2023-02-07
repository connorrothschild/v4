<script>
  import Code from "$lib/Global/Code.svelte";

  let numTicks = 5;
  export let includesExact = false;

  import { scaleLinear } from "d3-scale";

  $: xScale = scaleLinear().domain([0, 100]).range([0, 1000]);
  $: ticks = xScale.ticks(numTicks);

  $: str = `
let xScale = d3.scaleLinear()
    .domain([0, 100]) 
    .range([0, 1000]);
    
let ticks = xScale.ticks(${numTicks}); 
${
  includesExact
    ? `let exactedTicks = exactTicks(xScale, ${numTicks}, true);`
    : ""
}
    `;

  import { range } from "d3-array";

  const exactTicks = function (scale, numTicks, round = false) {
    const maxVal = scale.domain()[1];
    const minVal = scale.domain()[0];
    const stepValue = (maxVal - minVal) / (numTicks - 1);
    const output = range(minVal, maxVal + stepValue, stepValue);
    if (round) {
      return output.map((d) => Math.round(d));
    }
    return output;
  };

  $: exactedTicks = exactTicks(xScale, numTicks, true);
</script>

<div style="margin-bottom: 2rem;">
  <input type="range" bind:value={numTicks} min="1" max="20" step="1" />
  {#key str}
    <Code>
      {str}
    </Code>
  {/key}

  <!-- Returned output -->
  <div class="output">
    <div>
      ticks: [{ticks.join(", ")}]
      <span class="num-ticks"
        >&larr; actual ticks: {ticks.length}
        {ticks.length === numTicks ? "✅" : " (not " + numTicks + " 😱)"}
      </span>
    </div>
    {#if includesExact}
      <div>
        exactedTicks: [{exactedTicks.join(", ")}]
        <span class="num-ticks"
          >&larr; actual ticks: {exactedTicks.length}
          {exactedTicks.length === numTicks ? "✅" : " (not " + numTicks + ")"}
        </span>
      </div>
    {/if}
  </div>
</div>

<style>
  input {
    width: 100%;
    margin-bottom: 1rem;
  }

  .output {
    background: rgba(var(--primary-color-rgb), 0.15);
    backdrop-filter: blur(6px);
    color: var(--text-color);
    /* padding: 1rem; */
    font-family: var(--font-mono);
    font-size: 1rem;
    line-height: 1.5;
    display: flex;
    flex-direction: column;

    border: 1px solid rgba(var(--accent-color-rgb), 0.75);
    box-shadow: 1px 1px 20px rgba(var(--accent-color-rgb), 0.45);

    border-radius: 0.35rem;
    /* gap: 1rem; */
  }

  .output div {
    padding: 1rem;
  }

  .output div:not(:last-child) {
    border-bottom: 1px solid rgba(var(--accent-color-rgb), 0.4);
  }

  .num-ticks {
    font-size: 0.8rem;
    font-family: var(--font-sans);
  }
</style>
