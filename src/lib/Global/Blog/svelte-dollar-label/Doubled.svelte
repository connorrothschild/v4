<script>
  let count = 0;
  $: doubled = count * 2;
</script>

<div class="example">
  <button
    class="button"
    on:click={() => {
      count += 1;
    }}
  >
    Increment
  </button>

  <p>{count} doubled is {doubled}</p>
</div>

<style>
  .example {
    width: 480px;
    max-width: 100%;
    background: var(--semitransparent-bg);
    margin: 2rem auto;
    z-index: 3;
    position: relative;
    padding: 1rem;
    overflow: hidden;
    text-align: center;
  }

  p {
    margin: 0 !important;
  }
</style>
