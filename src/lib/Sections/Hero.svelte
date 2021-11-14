<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
  import { SplitText } from "gsap/dist/SplitText.js";

  gsap.registerPlugin(ScrollTrigger, SplitText);

  let subtitleIndex = 0;
  let subtitleOptions = [
    "on the web.",
    "with data.",
    "like these <span style='vertical-align: top; font-size: .8em;'>&darr;</span>",
  ];
  $: subtitleString = subtitleOptions[subtitleIndex];

  import { goto } from "$app/navigation";

  let unclicked = true;
  const switchSub = () => {
    const nav = () => {
      goto("#projects", { replaceState: false });
      // window.location.hash = "";
    };
    unclicked = false;
    subtitleIndex == subtitleOptions.length - 1 ? nav() : subtitleIndex++;
  };

  import { onMount } from "svelte";
  import { windowHeight } from "../../stores/global.js";

  let connor, rothschild, subtitle, overline, bigWords;

  onMount(() => {
    connor = document.querySelector(".connor");
    rothschild = document.querySelector(".rothschild");
    subtitle = document.querySelector(".subtitle");
    overline = document.querySelector(".overline");
    bigWords = document.querySelector(".big-word");

    let overlineSplit = new SplitText(overline, { type: "words,chars" });
    let connorSplit = new SplitText(connor, { type: "words,chars" });
    let rothschildSplit = new SplitText(rothschild, { type: "words,chars" });
    let bigSplit = new SplitText(bigWords, { type: "lines" });

    gsap.set(connor, { perspective: 400, opacity: 0 });
    gsap.set(rothschild, { perspective: 400, opacity: 0 });
    gsap.set(overline, { perspective: 400, opacity: 0 });
    gsap.set(bigWords, { perspective: 400, opacity: 0 });

    gsap.fromTo(overline, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    gsap.fromTo(connor, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    gsap.fromTo(rothschild, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    gsap.fromTo(bigWords, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    gsap.fromTo(
      overlineSplit.chars,
      { x: -20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 0.5,
        ease: "backwards",
      }
    );

    gsap.fromTo(
      connorSplit.chars,
      // { y: "100%", scaleY: "100%", opacity: 0 },
      { y: "-50%", opacity: 0 },
      {
        x: 0,
        y: 0,
        // scaleY: "100%",
        opacity: 1,
        duration: 0.95,
        stagger: 0.12,
        ease: "ease",
      }
    );

    gsap.fromTo(
      rothschildSplit.chars,
      // { y: "-100%", scaleY: "100%", opacity: 0 },
      { y: "50%", opacity: 0 },
      {
        x: 0,
        y: 0,
        // scaleY: "100%",
        opacity: 1,
        duration: 0.95,
        stagger: 0.08,
        ease: "ease",
      }
    );

    gsap.fromTo(
      subtitle,
      { opacity: 0, x: "-2.5%" },
      { opacity: 1, x: 0, duration: 1, delay: 1.3 }
    );

    // gsap.fromTo(
    //   bigSplit.lines,
    //   {
    // y: -200,
    //     // color: "rgba(0, 0, 0, .5)",
    //     opacity: 1,
    //   },
    //   {
    // y: 0,
    //     // color: "rgba(var(--accent-color-rgb), .1)",
    //     opacity: 1,
    //     stagger: -0.5,
    //     duration: 0.5,
    //     ease: "ease",
    //   }
    // );

    gsap.to(".big-words-container", {
      scrollTrigger: {
        trigger: "#projects",
        end: 200,
        scrub: true,
        once: false,
      },
      opacity: 0,
    });

    gsap.to(".year", {
      scrollTrigger: {
        trigger: "#projects",
        end: 200,
        scrub: true,
        once: false,
      },
      opacity: 0,
    });
  });
</script>

<section
  id="hero"
  style="min-height: calc({$windowHeight * 1.01}px - var(--nav-height));"
>
  <a class="scroll-down no-underline" href="#projects">Projects &rarr;</a>
  <div class="hero-container">
    <h1 class="overline begin-invisible">Hi, I'm</h1>
    <div class="title">
      <h1 class="connor begin-invisible gradient-accented">Connor</h1>
      <h1 class="rothschild begin-invisible gradient-accented">Rothschild</h1>
    </div>
    <h2 class="subtitle begin-invisible">
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
  }

  /* .big-words-container {
    position: absolute;
    left: unset;
    right: 0;
    top: 2.5%;
    height: 100%;
    line-height: 0.8;
    user-select: none;
  }

  .big-word {
    text-align: right;
    font-family: var(--font-sans);
    color: rgba(var(--text-color-rgb), 0.075);
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: -0.1rem;
    font-size: 3.5rem;
  }

  :global(.big-word div:hover) {
    color: rgba(var(--accent-color-rgb), 0.5);
  } */

  /* :global(.big-word div:nth-of-type(1)) {
    font-size: 3.9rem;
  }

  :global(.big-word div:nth-of-type(2)) {
    font-size: 4.33rem;
  }

  :global(.big-word div:nth-of-type(3)) {
    font-size: 5.025rem;
  }

  :global(.big-word div:nth-of-type(4)) {
    font-size: 5.75rem;
  } */

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

  .begin-invisible {
    opacity: 0;
  }

  .scroll-down {
    position: absolute;
    right: 0;
    top: 30%;
    transform: rotate(90deg) translateX(50%);
    transform-origin: 100% 0;
    /* font-family: var(--font-sans); */
    text-transform: uppercase;
    color: rgba(var(--text-color-rgb), 0.1);
    font-size: 2rem;
  }

  .hero-container {
    /* text-align: center; */
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
    padding-bottom: 0.2rem;
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
