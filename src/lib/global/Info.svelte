<script>
  // import SvelteMarkdown from "svelte-markdown";
</script>

<div class="info">
  <div class="text">
    <p>
      <slot />
      <!-- <SvelteMarkdown source={$$slots.content} /> -->
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
    background: white;
    box-shadow: 2px 2px 5px 1px #cecece80;
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
