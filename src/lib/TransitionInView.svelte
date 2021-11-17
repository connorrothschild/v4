<script>
  import IntersectionObserver from "svelte-intersection-observer";

  let element;
  let intersecting;
</script>

<IntersectionObserver {element} bind:intersecting once>
  <div bind:this={element}>
    <div class="opacity-container" class:intersecting>
      <slot />
    </div>
  </div>
</IntersectionObserver>

<style>
  .opacity-container {
    transition: opacity 1000ms ease 200ms;
    opacity: 0;
  }

  .intersecting {
    opacity: 1;
  }

  div {
    height: 100%;
    width: 100%;
  }
</style>
