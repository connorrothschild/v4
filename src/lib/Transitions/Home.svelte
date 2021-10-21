<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  function transition() {
    gsap.fromTo(
      ".title",
      { x: 10, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5 }
    );

    gsap.fromTo(
      ".subtitle",
      { x: 10, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.5 }
    );

    gsap.fromTo(
      ".content",
      { x: 10, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.5 }
    );
  }

  onMount(() => {
    transition();
  });
</script>
