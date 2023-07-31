<script>
  export let color = '';
</script>

<div class="info" style="background: {color}">
  <div class="text">
    <p>
      <slot />
    </p>
  </div>
</div>

<style>
  .info::before {
    content: "❗️";
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  .info {
    display: flex;
    place-items: center;
    border-radius: 10px;
    font-weight: normal;
    background: var(--semitransparent-bg);
    box-shadow: 2px 2px 5px 1px var(--box-shadow-color);
    padding: 1rem;
    margin: 1.75rem 0;
  }

  :global(.info .text p:not(:last-child)) {
    margin-bottom: 1rem;
  }

  :global(.info .text p:last-child) {
    margin-bottom: 0;
  }
</style>
