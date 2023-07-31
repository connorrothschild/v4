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

  let yOffsetFromMouse = 0;

  let maxX = 50;
  let maxY = 50;
  const handleMousemove = function (e) {
    shadowX = (e.clientX / maxX) * -1;
    shadowY = (e.clientY / maxY) * -1;

    $translateX = e.clientX / maxX;
    $translateY = e.clientY / maxY;
    // yOffsetFromMouse = e.clientY / maxY;
  };

  let sectionHeight;
  let scrollPos;

  // $: percentOfTotalScrolled = scrollPos / sectionHeight;
  // $: yOffsetFromScroll = percentOfTotalScrolled * -100;

  // $: yOffsetFromScroll,
  //   yOffsetFromMouse,
  //   ($translateY =
  //     Math.abs(yOffsetFromScroll) > 0 ? yOffsetFromScroll : yOffsetFromMouse);

  import { onMount } from "svelte";
  let hasMounted = false;
  onMount(() => {
    hasMounted = true;
  });
</script>

<svelte:window bind:scrollY={scrollPos} />
<div
  class="title-container"
  on:mousemove={handleMousemove}
  bind:clientHeight={sectionHeight}
>
  <div class="bg" />
  <div
    class="card"
    style:transform={`translate(${$translateX}px, ${$translateY}px`}
    style:opacity={1 - scrollPos / sectionHeight}
  >
    <h1
      style:transform={`translate(${$translateX / 2.5}px, ${$translateY / 3}px`}
      style:opacity={hasMounted ? 1 : 0}
    >
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
  .title-container {
    /* cursor: crosshair; */
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
    z-index: 100;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: var(--primary-color); */
    /* background: linear-gradient(
      90deg,
      rgba(var(--accent-color-rgb), 0.2) -50%,
      rgba(var(--primary-color-rgb), 1)
    ); */
    /* background: rgba(var(--accent-color-rgb), 0.2); 
    background: linear-gradient(
      45deg,
      rgba(var(--accent-color-rgb), 0.2),
      rgba(var(--accent-color-rgb), 0.1)
    ); */
    z-index: -1;
  }

  h1 {
    position: relative;
    font-family: Satoshi;
    font-size: 13vw;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    pointer-events: none;
    line-height: 0.9;
    opacity: 0;
    transition: opacity 1000ms ease 300ms;
    /* color: var(--primary-color) !important; */
  }

  .card {
    /* background: black;
    background: linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0.5) -50%,
      rgba(0, 0, 0, 1) 150%
    ); */
    /* background: var(--text-color);
    background: linear-gradient(
      to bottom right,
      rgba(var(--text-color-rgb), 1) -50%,
      rgba(var(--primary-color-rgb), 1) 150%
    ); */
    backdrop-filter: blur(1px);

    max-width: 1220px;
    width: 95%;
    margin: auto;
    border-radius: 1rem;
    padding: 2rem 1rem;
    text-align: right;

    z-index: 2;
  }

  .how-to {
    font-size: 21vw;
  }

  .learn-d3 {
    font-size: 15vw;
    color: var(--accent-color);
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
</style>
