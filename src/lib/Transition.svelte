<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  let prefersReducedMotion = false;
  onMount(() => {
    let listener = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion = listener.matches;

    listener.addEventListener("change", () => {
      prefersReducedMotion = listener.matches;
      transition();
    });

    transition();
  });

  function transition() {
    if (prefersReducedMotion) return;
    gsap.fromTo(
      ".transition-title",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5 }
    );

    gsap.fromTo(
      ".transition-subtitle",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5 }
    );

    gsap.fromTo(
      ".transition-content",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, delay: 0.5, clearProps: "x" }
    );
  }
</script>
