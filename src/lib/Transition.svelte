<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  function transition() {
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

  onMount(() => {
    transition();
  });
</script>
