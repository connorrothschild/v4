<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { SplitText } from "gsap/dist/SplitText.js";

  gsap.registerPlugin(SplitText);

  let prefersReducedMotion = false;
  onMount(async () => {
    let listener = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion = listener.matches;

    listener.addEventListener("change", () => {
      prefersReducedMotion = listener.matches;
      transition();
    });

    await transition();
  });

  async function transition() {
    if (prefersReducedMotion) return;

    let titleSplit = new SplitText(
      document.querySelector(".transition-title"),
      {
        type: "words,chars",
      }
    );
    let titleChars = titleSplit.chars;

    let subtitleSplit = new SplitText(
      document.querySelector(".transition-subtitle"),
      {
        type: "words,chars",
      }
    );
    let subtitleChars = subtitleSplit.chars;

    gsap.fromTo(
      titleChars,
      { y: 100, opacity: 0, rotation: 0 },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        stagger: 0.02,
        duration: 0.5,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      subtitleChars,
      { x: 10, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 0.5,
        ease: "backwards",
      }
    );

    gsap.fromTo(
      ".transition-content",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, delay: 0.5, clearProps: "x" }
    );
  }
</script>
