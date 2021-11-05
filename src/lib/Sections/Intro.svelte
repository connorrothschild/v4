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

    let connorSplit = new SplitText(connor, { type: "words,chars" });
    let connorChars = connorSplit.chars;

    let rothschildSplit = new SplitText(rothschild, { type: "words,chars" });
    let rothschildChars = rothschildSplit.chars;

    gsap.set(connor, { perspective: 400 });
    gsap.set(rothschild, { perspective: 400 });
    // let timeline = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: document.querySelector("#hero"),
    //     start: "top top",
    //     end: "bottom top",
    //     scrub: true,
    //   },
    // });
    // timeline.to(connor, { x: "-5%", ease: "power2.out" }, 0);
    // timeline.to(rothschild, { x: "5%", ease: "power2.out" }, 0);

    gsap.fromTo(overline, { opacity: 0 }, { opacity: 1, duration: 0.75 });

    gsap.fromTo(connor, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    gsap.fromTo(rothschild, { opacity: 0 }, { opacity: 1, duration: 1.5 });

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
  <!-- <h2 class="content transition-content">
      Right now, I lead the interactives and visualization team at <a
        href="https://www.mokshadata.com/"
        target="_blank"
        rel="noopener noreferrer">Moksha Data</a
      >.
    </h2> -->
</section>

<!-- <Transition />
<section>
  <div class="wrapper">
    {#if active}
      <div transition:fade={{ duration: 200 }} class="transition-overlay" />
    {/if}
    <div class="sticky-stack transition-content">
      <div class="step zero">
        <h1 class="title">
          Hi, I'm <span class="gradient-accented" style="font-weight: 600;"
            >Connor Rothschild.</span
          >
        </h1>
      </div>
      <div class="step one">
        <h2 class="subtitle with-border">
          And I tell visual stories on the web. Right now, I lead the
          interactives and visualization team at <a
            href="https://www.mokshadata.com/"
            target="_blank"
            rel="noopener noreferrer">Moksha Data</a
          >.
        </h2>
      </div>
      <div class="step two">
        <h3>
          I make data make sense for people in the <strong>government</strong>
          and
          <strong>nonprofit</strong> space. At Moksha, I lead the development of
          interactives, web applications, and visual essays for our partners in the
          social impact space.
        </h3>
      </div>
      <div class="step three">
        <h3>
          We make it easier for you to talk about the impact you're making in
          your community, through <strong>data-driven</strong> and
          <strong>engaging</strong> visual stories. Interested in working with
          us?
          <a href="mailto:connor@mokshadata.com?subject=Project%20Inquiry"
            >Reach out.</a
          >
        </h3>
      </div>
      <div
        class="buffer"
        use:sticky={{ stickToTop: true, rootMargin: "10%" }}
        on:stuck={handleStuck}
      />
    </div>
  </div>
</section> -->
<style>
  section {
    width: 95%;
    /* max-width: 1068px; */
    margin: auto;
    height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    overflow-x: hidden;
  }

  .hero-container {
    text-align: center;
    line-height: 0.85;
    margin-bottom: 2rem;
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
    letter-spacing: 0.1rem;
    text-align: center;
    text-transform: uppercase;
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

  .content {
    font-size: 1.5rem;
    font-family: var(--font-sans);
  }

  .invisible {
    /* opacity: 0; */
    transition: opacity 500ms ease;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 768px) {
    .subtitle {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 568px) {
    .subtitle {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 468px) {
    .subtitle {
      font-size: 1.25rem;
    }
  }
</style>
