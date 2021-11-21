<script>
  import { onMount } from "svelte";
  import { windowHeight, pageTransitionDelay } from "../../stores/global.js";

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
    await sleep($pageTransitionDelay);
    await transition(connor, rothschild, subtitle, overline);
    transitioned = true;
  });
</script>

<section
  id="hero"
  style="min-height: {$windowHeight
    ? `calc(${$windowHeight * 1.01}px - var(--nav-height))`
    : '101vh'};"
>
  <div aria-hidden="true" class="scroll-down" on:click={scrollToProjects}>
    <div class="line" />
    <div class="arrow" />
  </div>
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
    <h2 class="subtitle begin-invisible " class:transitioned>
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
  .scroll-down {
    top: calc(50% - 80px);
    right: 25px;
    position: absolute;
    width: 12px;
    height: 80px;
    display: flex;
    justify-content: center;
    color: rgba(var(--text-color-rgb), 0.5);
    cursor: pointer;
  }

  .line {
    position: relative;
    width: 1px;
    height: 100%;
    overflow: hidden;
  }

  .line::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: auto;
    top: 0;
    bottom: auto;
    width: 100%;
    height: 100%;
    background-color: currentColor;
  }

  .line::before {
    height: 50%;
    animation: arrow-line 4s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
  }

  @keyframes arrow-line {
    0% {
      transform: translate3d(0, -101%, 0);
    }
    25% {
      transform: translate3d(0, 101%, 0);
    }
    50% {
      transform: translate3d(0, 101%, 0);
    }
    75% {
      transform: translate3d(0, 101%, 0);
    }
    100% {
      transform: translate3d(0, -101%, 0);
    }
  }

  .arrow {
    position: absolute;
    bottom: 2px;
    left: 0.5px;
    width: 100%;
    padding-bottom: 100%;
    border-bottom: 1px solid;
    border-right: 1px solid;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    animation: arrow 2s cubic-bezier(0.845, 0.05, 0.05, 0.845) infinite
      alternate;
  }

  /* This just pushes arrow up and down smoothly */
  @keyframes arrow {
    0% {
      -webkit-transform: translateZ(0) rotate(45deg);
      transform: translateZ(0) rotate(45deg);
    }
    100% {
      -webkit-transform: translate3d(0, 10px, 0) rotate(45deg);
      transform: translate3d(0, 10px, 0) rotate(45deg);
    }
  }
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
    left: 0.75%;
    margin-left: 1rem;
    color: rgba(var(--text-color-rgb), 0.35);
    font-family: var(--font-sans);
    font-weight: 300;
    font-size: 1.5rem;
    letter-spacing: -0.05rem;
    user-select: none;
  }

  .begin-invisible:not(.transitioned) {
    opacity: 0;
  }

  .hero-container {
    line-height: 0.85;
    user-select: none;
    margin-top: calc(0px - var(--nav-height));
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
    /* .big-word {
      font-size: 3rem;
    } */
    .year {
      font-size: 1.5rem;
      left: 2.5%;
    }
  }
</style>
