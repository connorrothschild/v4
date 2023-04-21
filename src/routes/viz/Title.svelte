<script>
  import { spring } from "svelte/motion";
  import Phrases from "./Phrases.svelte";
  let shadowX = 0;
  let shadowY = 0;

  let translateX = spring(0, {
    stiffness: 0.2,
    damping: 0.95,
  });
  let translateY = spring(0, {
    stiffness: 0.2,
    damping: 0.95,
  });

  let maxX = 50;
  let maxY = 50;
  const handleMousemove = function (e) {
    shadowX = (e.clientX / maxX) * -1;
    shadowY = (e.clientY / maxY) * -1;

    $translateX = e.clientX / maxX;
    $translateY = e.clientY / maxY;
  };
</script>

<div class="container" on:mousemove={handleMousemove}>
  <div class="bg" />
  <div class="card">
    <h1 style:transform={`translate(${$translateX}px, ${$translateY}px`}>
      <!-- <slot />
    <span class="shadow" style:top={`${shadowY}px`} style:left={`${shadowX}px`}
      ><slot /></span
    > -->
      <span class="how-to">How To</span>
      <span class="learn-d3">&#8220;Learn D3&#8221;</span>
      <span class="in-2023">In 2023</span>
    </h1>
  </div>
  <!-- <h2>By Connor Rothschild</h2>
  <h3>The complete roadmap for interactive data visualization</h3> -->
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

    /* Scroll over effect */
    position: sticky;
    top: 0;
    z-index: 1;
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
    pointer-events: none;
    line-height: 0.9;
  }

  .card {
    background: black;
    background: linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0.5) -50%,
      rgba(0, 0, 0, 1) 150%
    );
    max-width: 1220px;
    margin-right: auto;
    margin-left: 2.5vw;
    border-radius: 1rem;
    padding: 1rem;
    text-align: right;
  }

  .how-to {
    font-size: 21vw;
  }

  .learn-d3 {
    font-size: 15vw;
  }

  .in-2023 {
    font-size: 22.5vw;
  }

  @media screen and (min-width: 1220px) {
    .how-to {
      font-size: 270px;
    }

    .learn-d3 {
      font-size: 190px;
    }

    .in-2023 {
      font-size: 290px;
    }
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
