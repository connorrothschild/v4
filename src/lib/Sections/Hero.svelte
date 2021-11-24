<script>
  import { onMount } from "svelte";
  import { windowHeight } from "../../stores/global.js";
  import { prefersReducedMotion } from "../../stores/motion.js";

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
  import { transition } from "../../scripts/transitionHero.js";

  onMount(async () => {
    if ($prefersReducedMotion) return;

    await sleep(250);
    await transition(connor, rothschild, subtitle, overline);
    transitioned = true;
  });
</script>

<section
  id="hero"
  style="min-height: {$windowHeight ? `${$windowHeight * 1.01}px` : '101vh'};"
>
  <div class="hero-container">
    <h1 class="overline begin-invisible" class:transitioned>Hi, I'm</h1>
    <div class="title">
      <h1 class="connor begin-invisible gradient-accented" class:transitioned>
        Connor
      </h1>
      <h1
        class="rothschild begin-invisible gradient-accented"
        class:transitioned
      >
        Rothschild
      </h1>
    </div>
    <h2 class="subtitle begin-invisible" class:transitioned>
      And I tell visual stories <span
        class="switch"
        class:unclicked
        on:click={switchSub}>{@html subtitleString}</span
      >
    </h2>
  </div>
  <h1 class="year">Portfolio 2021</h1>
</section>

<style>
  section {
    width: 95%;
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
    bottom: 5.35%;
    left: 15px;
    margin-left: 1rem;
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
    margin-bottom: 0.5rem;
  }

  .title {
    margin-bottom: 1.25rem;
  }

  .connor,
  .rothschild {
    display: block;
    font-weight: 500;
    letter-spacing: -0.1rem;
    text-transform: uppercase;
    overflow-y: hidden;
    /* text-shadow: 1px 1px 2px black; */
  }

  .connor {
    font-size: 17.55vw;
  }

  .rothschild {
    font-size: 12.15vw;
    /* margin-left: 1.5vw; */
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
  }

  .switch.unclicked {
    animation: wiggle 3000ms infinite;
  }
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
    .subtitle {
      font-size: 4vw;
    }

    .year {
      font-size: 1.5rem;
      bottom: 4%;
      left: 25px;
    }
  }

  @media screen and (max-width: 468px) {
    section {
      place-items: center;
    }

    .overline,
    .subtitle,
    .hero-container {
      /* text-align: center; */
      text-align: left;
    }

    .overline {
      font-size: 2.25rem;
      margin-bottom: 0.75rem;
    }
    .subtitle {
      font-size: 1.4rem;
    }
  }
</style>
