<script>
  let input = 0;

  import { scaleLinear } from "d3-scale";

  let width = 400;

  let xScale = scaleLinear().domain([0, 9]).range([0, width]);
</script>

<div class="example">
  <h1>Input</h1>
  <input min="0" max="9" type="range" bind:value={input} /><span>{input}</span>

  <h1 style="margin-top: 1.5rem;">Output</h1>
  <div class="output-range">
    <div class="circle output" style="left: {xScale(input)}px" />
    <p class="output" style="left: {xScale(input)}px">
      {Math.round(xScale(input))}px
    </p>
  </div>
</div>

<style>
  h1 {
    margin: 0 0 1rem 0;
  }

  span {
    vertical-align: bottom;
    font-size: 1.75rem;
    margin-left: 0.5rem;
    color: var(--text-color);
  }

  .example {
    width: 480px;
    max-width: 100%;
    margin: auto;
    background: var(--semitransparent-bg);
    margin-bottom: 1.15rem;
    z-index: 3;
    position: relative;
    padding: 1rem;
    overflow: hidden;
  }

  .output-range {
    width: 100%;
    height: 50px;
    position: relative;
  }

  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--text-color);
  }

  .output {
    position: absolute;
    transition: left 300ms ease 0s;
  }

  p.output {
    top: 25px;
  }
</style>
