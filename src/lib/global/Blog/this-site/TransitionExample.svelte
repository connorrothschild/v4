<script>
  import { gsap } from "gsap";
  import { SplitText } from "gsap/dist/SplitText.js";

  gsap.registerPlugin(SplitText);

  let title;

  function transition() {
    title = document.querySelector("#transition-me");

    gsap.set(title, { opacity: 0 });
    gsap.fromTo(title, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    const titleSplit = new SplitText(title, {
      type: "lines,words,chars",
    });

    gsap.fromTo(
      titleSplit["chars"],
      { y: "100%", opacity: 0, rotation: 0 },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        stagger: 0.025,
        duration: 0.5,
        ease: "power2.out",
      }
    );
  }
</script>

<div class="example">
  <div class="button" on:click={transition}>Transition</div>
  <h1 id="transition-me">Hi, I'm Connor Rothschild!</h1>
  <a
    class="code no-underline"
    href="https://github.com/connorrothschild/.com/tree/master/src/lib/global/Blog/this-site/TransitionExample.svelte"
    target="_blank"
    rel="noopener noreferrer">See source code</a
  >
</div>

<style>
  .example {
    /* width: max-content; */
    width: auto;
    margin: 1.15rem auto;
    background: var(--semitransparent-bg);
    padding: 2rem;
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    position: relative;
  }

  .button {
    text-align: center;
    font-size: 1.25rem;
  }

  h1 {
    /* opacity: 0; */
    margin: 2.5rem 0 0.5rem 0 !important;
  }

  .code {
    position: absolute;
    right: 0;
    top: unset;
    bottom: 0;
    padding: 0.5rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    font-family: var(--font-sans);
  }
</style>
