<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  function transition() {
    gsap.fromTo(
      ".page-title",
      { x: -10, opacity: 0.5 },
      { x: 0, opacity: 1, duration: 0.5 }
    );

    gsap.fromTo(
      ".page-overline",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, delay: 0.5 }
    );

    gsap.fromTo(
      ".transition-container",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, delay: 0.5 }
    );
  }

  onMount(() => {
    transition();
  });
</script>
