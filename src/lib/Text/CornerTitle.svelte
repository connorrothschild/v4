<script>
  export let title;
  export let subtitle;

  // let y;
  let w;
  $: cornerTitleWidth = ((w - 768) / 2) * 0.85;

  // Use IntersectionObserver to detect when the 300px div is no longer visible
  import IntersectionObserver from "svelte-intersection-observer";

  let element;
  let intersecting = true;
</script>

<!-- Show the blog title in the top right corner of the page, when
    1. User has scrolled a certain amount and 
    2. The device is desktop -->
<!-- Archived: using scrollY prevents scrollToTop because the binding redefines the Y position of the page -->
<!-- <svelte:window bind:scrollY={y} bind:innerWidth={w} /> -->
<svelte:window bind:innerWidth={w} />

<!-- New solution is to show when the invisible scroll listener is no longer intersecting -->
<IntersectionObserver {element} bind:intersecting>
  <div class="invisible-scroll-listener" bind:this={element} />
</IntersectionObserver>

<div
  aria-hidden="true"
  class="corner {!intersecting && w > 1168 ? 'visible' : 'invisible'}"
  style="max-width: {cornerTitleWidth}px"
>
  <p class="corner-title">{title}</p>
  <p class="corner-subtitle">{subtitle}</p>
</div>

<style>
  .corner {
    position: fixed;
    top: var(--nav-height);
    left: 0;
    padding: 1rem;
    opacity: 0;
    transition: opacity 500ms ease 250ms;
  }

  .corner.visible {
    opacity: 1;
  }

  .corner.invisible {
    pointer-events: none;
  }

  .corner-title {
    font-size: 1.15rem;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: 0.64px;
    color: var(--text-color);
    margin-bottom: 0.5rem;
  }

  .corner-subtitle {
    font-size: 1rem;
    font-weight: 100;
    letter-spacing: 0.64px;
    color: var(--text-color);
  }

  .invisible-scroll-listener {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 250px;
    z-index: -1;
  }
</style>
