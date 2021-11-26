<script>
  import IntersectionObserver from "svelte-intersection-observer";

  let element;
  let intersecting;
</script>

<IntersectionObserver {element} bind:intersecting once>
  <div bind:this={element}>
    <div class="transitioning-container" class:intersecting>
      <slot />
    </div>
  </div>
</IntersectionObserver>

<style>
  /* Only apply if user prefers reduced motion is false */
  @media (prefers-reduced-motion: no-preference) {
    .transitioning-container {
      transition: opacity 1000ms ease 200ms, transform 1000ms ease;
      opacity: 0;
      transform: translateX(-5%);
      /* transform: translateY(15%); */
    }

    .intersecting {
      opacity: 1;
      transform: none;
    }
  }

  div {
    height: 100%;
    width: 100%;
  }
</style>
