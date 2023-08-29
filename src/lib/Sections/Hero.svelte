<script>
  import { onMount } from "svelte";
  import { windowHeight, windowWidth } from "../../stores/global.js";
  import { prefersReducedMotion } from "../../stores/motion.js";
  import { fly } from "svelte/transition";
  import { scaleLinear } from "d3-scale";

  let subtitleIndex = 0;
  let subtitleOptions = [
    "on the web.",
    "with data.",
    "like these <span style='vertical-align: top; font-size: .8em;'>&darr;</span>",
  ];
  $: subtitleString = subtitleOptions[subtitleIndex];

  let scrollToProjects = () => window.scrollTo(0, $windowHeight);
  let unclicked = true;
  const switchSub = () => {
    unclicked = false;
    subtitleIndex == subtitleOptions.length - 1
      ? scrollToProjects()
      : subtitleIndex++;
  };

  let connor, rothschild, subtitle, overline;
  let transitioned = false;

  import { sleep } from "../../scripts/utils.js";
  import { transition } from "../../scripts/transitions/rotate.js";

  onMount(async () => {
    if ($prefersReducedMotion) return;

    await sleep(250);
    await transition(connor, rothschild, subtitle, overline);

    await sleep(2000);
    transitioned = true;
  });

  // HOVER EFFECT ON TEXT ROTATION
  let xDeg = 0;
  let yDeg = 0;

  $: xScale = scaleLinear().domain([0, $windowWidth]).range([-10, 10]);
  $: yScale = scaleLinear().domain([0, $windowHeight]).range([-10, 10]);

  function handleMousemove(event) {
    xDeg = xScale(event.clientX);
    yDeg = yScale(event.clientY);
  }
</script>

<section
  id="hero"
  style="min-height: {$windowHeight
    ? `${$windowHeight * 1.01}px`
    : '101vh'}; perspective: 100vw;"
  on:mousemove={handleMousemove}
>
  <div
    class="hero-container"
    style="transition: 1000ms cubic-bezier(.3, 1, 1, .3); transform: translateX({xDeg}px) translateY({yDeg}px);"
  >
    <h1 class="overline begin-invisible" class:transitioned>Hi, I'm</h1>
    <div class="title">
      <h1 class="connor begin-invisible gradient-accented" class:transitioned>
        Jacob
      </h1>
      <h1
        class="rothschild begin-invisible gradient-accented"
        class:transitioned
      >
        Werbin
      </h1>
    </div>
    <h2 class="subtitle begin-invisible" class:transitioned>
      And I tell visual stories
      {#key subtitleString}
        <span
          in:fly={{ y: 30 }}
          class="switch"
          class:unclicked
          on:click={switchSub}
        >
          {@html subtitleString}
        </span>
      {/key}
    </h2>
  </div>
  <h1 class="year">Portfolio 2023</h1>
</section>

<style>
  section {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center; /* center */
    place-items: center; /* center */
    overflow: hidden;
    position: relative;
    transition: height 100ms ease; /* Height is initially 101vh UNTIL windowHeight is set */
  }

  .year {
    position: absolute;
    bottom: calc(20px + 1.5rem / 2);
    left: 20px;
    margin-left: 2rem;
    color: rgba(var(--text-color-rgb), 0.35);
    font-family: var(--font-sans);
    font-weight: 300;
    font-size: 1.5rem;
    letter-spacing: -0.05rem;
    user-select: none;
  }

  .hero-container {
    line-height: 0.85;
    user-select: none;
  }

  .overline {
    font-weight: 200;
    text-align: left;
    margin-bottom: 0.75rem;
    font-style: italic;
    font-size: 2.75rem;
  }

  .title {
    margin-bottom: 1.5rem;
    /* overflow: hidden; */
  }

  .connor,
  .rothschild {
    display: block;
    font-weight: 500;
    letter-spacing: -0.1rem;
    text-transform: uppercase;
    text-shadow: 1px 1px 2px var(--box-shadow-color);
    overflow: hidden;
  }

  :global(.connor *) {
    transform-origin: center bottom;
    /* transform-origin: center top; */
    transform-style: preserve-3d;
    transition: opacity 0s cubic-bezier(0.215, 0.61, 0.355, 1),
      transform 0s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  :global(.rothschild *) {
    transform-origin: center bottom;
    /* transform-origin: center top; */
    transform-style: preserve-3d;
    transition: opacity 0s cubic-bezier(0.215, 0.61, 0.355, 1),
      transform 0s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .connor {
    font-size: 20vw;
  }

  .rothschild {
    font-size: 13.65vw;
  }

  .subtitle {
    font-size: 3vw;
    max-width: 1068px;
    font-weight: 300;
    margin-bottom: 1rem;
    text-align: right;
    margin-left: auto;
    color: rgba(var(--text-color-rgb), 0.9);
  }

  .switch {
    cursor: pointer;
    border-bottom: 1px solid rgba(var(--text-color-rgb), 0.2);
    transition: border-bottom-color 200ms ease;
    display: inline-block;
    padding-bottom: 0.5rem;
    font-style: italic;
    font-weight: 200;
  }

  /* .switch.unclicked {
    animation: wiggle 3000ms infinite;
  } */

  @keyframes wiggle {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(2deg);
    }
    50% {
      transform: rotate(-2deg);
    }
    75% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  .switch:hover {
    border-bottom-color: rgba(var(--accent-color-rgb), 0.6);
  }

  @media screen and (max-width: 768px) {
    .overline {
      font-size: 2rem;
      margin-bottom: 0.75rem;
    }

    .subtitle {
      font-size: 1.8rem;
    }

    .year {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 468px) {
    section {
      place-items: center;
    }

    .overline {
      font-size: 8vw;
    }

    .subtitle {
      font-size: 5.75vw;
    }
  }
</style>
