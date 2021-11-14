<script>
  export let split = "chars";

  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { SplitText } from "gsap/dist/SplitText.js";

  gsap.registerPlugin(SplitText);

  let prefersReducedMotion = false;
  let title, subtitle, content;

  async function transition() {
    if (prefersReducedMotion) return;

    title = document.querySelectorAll(".transition-title");
    subtitle = document.querySelectorAll(".transition-subtitle");
    content = document.querySelectorAll(".transition-content");

    content.forEach((d) => {
      gsap.set(d, { opacity: 0 });
      gsap.fromTo(d, { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.5 });

      gsap.fromTo(
        d,
        { x: -10, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, delay: 0.5, clearProps: "x" }
      );
    });

    title.forEach((d) => {
      gsap.set(d, { opacity: 0 });
      gsap.fromTo(d, { opacity: 0 }, { opacity: 1, duration: 1.5 });

      const titleSplit = new SplitText(d, {
        type: "lines,words,chars",
      });

      gsap.fromTo(
        titleSplit[split],
        { y: 100, opacity: 0, rotation: 0 },
        {
          translateY: 0,
          opacity: 1,
          rotation: 0,
          stagger: 0.02,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    });

    subtitle.forEach((d) => {
      gsap.set(d, { opacity: 0 });
      gsap.fromTo(d, { opacity: 0 }, { opacity: 1, duration: 1.5 });

      const subtitleSplit = new SplitText(d, {
        type: "lines,words,chars",
      });

      gsap.fromTo(
        subtitleSplit[split],
        { x: 10, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.02,
          duration: 0.5,
          ease: "backwards",
        }
      );
    });
  }

  onMount(async () => {
    let listener = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion = listener.matches;

    await transition();
  });
</script>
