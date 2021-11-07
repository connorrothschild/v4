<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
  import { SplitText } from "gsap/dist/SplitText.js";

  gsap.registerPlugin(ScrollTrigger, SplitText);

  import { onMount } from "svelte";

  let connor, rothschild, subtitle, overline;

  onMount(() => {
    connor = document.querySelector(".connor");
    rothschild = document.querySelector(".rothschild");
    subtitle = document.querySelector(".subtitle");
    overline = document.querySelector(".overline");

    let overlineSplit = new SplitText(overline, { type: "words,chars" });
    let overlineChars = overlineSplit.chars;

    let connorSplit = new SplitText(connor, { type: "words,chars" });
    let connorChars = connorSplit.chars;

    let rothschildSplit = new SplitText(rothschild, { type: "words,chars" });
    let rothschildChars = rothschildSplit.chars;

    gsap.set(connor, { perspective: 400 });
    gsap.set(rothschild, { perspective: 400 });
    gsap.set(overline, { perspective: 400 });

    gsap.fromTo(overline, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    gsap.fromTo(connor, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    gsap.fromTo(rothschild, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    gsap.fromTo(
      overlineChars,
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
      connorChars,
      { y: "-15%", opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        ease: "ease",
      }
    );
    gsap.fromTo(
      rothschildChars,
      { y: "15%", opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "ease",
      }
    );

    gsap.fromTo(
      subtitle,
      { opacity: 0, x: "-2.5%" },
      { opacity: 1, x: 0, duration: 1, delay: 1.5 }
    );
  });
</script>

<section id="hero">
  <div class="hero-container">
    <h1 class="overline begin-invisible">Hi, I'm</h1>
    <div class="title">
      <h1 class="connor begin-invisible gradient-accented">Connor</h1>
      <h1 class="rothschild begin-invisible gradient-accented">Rothschild</h1>
    </div>
    <h2 class="subtitle begin-invisible">
      And I tell visual stories on the web.
    </h2>
  </div>
</section>

<style>
  section {
    width: 95%;
    margin: auto;
    min-height: calc(100vh - var(--nav-height));
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    overflow-x: hidden;
  }

  .hero-container {
    text-align: center;
    line-height: 0.85;
    user-select: none;
  }

  .overline {
    font-weight: 200;
    text-align: left;
    margin-bottom: 0.5rem;
  }

  .begin-invisible {
    opacity: 0;
  }

  .title {
    margin-bottom: 1.25rem;
  }

  .connor,
  .rothschild {
    display: block;
    font-weight: 600;
    text-transform: uppercase;
    /* letter-spacing: 0.1rem; */
    text-align: center;
    text-transform: uppercase;
    /* text-shadow: 1px 1px 2px black; */
  }

  .connor {
    font-size: 17.4vw;
  }

  .rothschild {
    font-size: 11.5vw;
    margin-left: 1.5vw;
  }

  .subtitle {
    font-size: 3vw;
    max-width: 1068px;
    font-weight: 300;
    margin-bottom: 1rem;
    text-align: right;
    margin-left: auto;
  }

  /* @media screen and (max-width: 1068px) {
    section {
      min-height: 70vh;
    }
  } */

  @media screen and (max-width: 768px) {
    .subtitle {
      font-size: 4vw;
    }

    .hero-container {
      margin-bottom: 15vh;
    }
  }

  @media screen and (max-width: 468px) {
    .overline,
    .subtitle {
      text-align: center;
    }
    .overline {
      font-size: 2.5rem;
      margin-bottom: 0.75rem;
    }
    .subtitle {
      font-size: 1.5rem;
    }
  }
</style>
