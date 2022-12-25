<script>
  import Phrases from "./Phrases.svelte";
  let shadowX = 0;
  let shadowY = 0;

  let maxX = 50;
  let maxY = 50;
  const handleMousemove = function (e) {
    shadowX = (e.clientX / maxX) * -1;
    shadowY = (e.clientY / maxY) * -1;
  };
</script>

<div class="container" on:mousemove={handleMousemove}>
  <div class="bg" />
  <h1>
    <slot />
    <span class="shadow" style:top={`${shadowY}px`} style:left={`${shadowX}px`}
      ><slot /></span
    >
  </h1>
  <h2>By Connor Rothschild</h2>
  <Phrases />
  <h3>The complete roadmap for interactive data visualization</h3>
</div>

<style>
  .container {
    cursor: crosshair;
    position: relative;
    left: calc(-50vw + 50%);
    width: 100vw;
    height: 100vh;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(var(--accent-color-rgb), 0.2),
      rgba(var(--accent-color-rgb), 0.1)
    );
    z-index: 1;
  }

  h1 {
    position: relative;
  }

  h1 {
    font-family: Satoshi;
    font-size: 13vw;
    font-weight: 900;
    text-align: left;
    text-transform: uppercase;
    text-indent: -100px;
    margin-left: 100px;
    pointer-events: none;
    line-height: 0.9;
  }

  .shadow {
    position: absolute;
    z-index: 100;
    mix-blend-mode: color-burn;
    pointer-events: none;
  }

  h2 {
    padding-right: 1rem;
    font-weight: 200;
    text-align: right;
    margin-top: 2rem;
    font-size: 4rem;
  }

  h3 {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    font-size: 2rem;
    color: white;
  }
</style>
