<script>
  export let title;
  export let subtitle;
  let y;
  let w;
  $: cornerTitleWidth = ((w - 768) / 2) * 0.85;
</script>

<!-- Show the blog title in the top right corner of the page, when
    1. User has scrolled a certain amount and 
    2. The device is desktop -->
<svelte:window bind:scrollY={y} bind:innerWidth={w} />
<div
  aria-hidden="true"
  class="corner {y > 300 && w > 1168 ? 'visible' : 'invisible'}"
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
    transition: opacity 700ms ease;
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
</style>
