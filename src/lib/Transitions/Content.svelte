<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  function transition() {
    gsap.fromTo(
      ".page-title",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );

    gsap.fromTo(
      ".page-overline",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );

    gsap.fromTo(
      ".transition-container",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.5, clearProps: "x" }
    );
  }

  onMount(() => {
    transition();
  });
</script>
