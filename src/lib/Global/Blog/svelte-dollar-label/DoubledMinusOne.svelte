<script>
  let count = 0;
  let doubled, doubledMinusOne; // We initialize these outside of the block

  $: {
    doubled = count * 2;
    doubledMinusOne = doubled - 1;
    // console.log(doubledMinusOne);
  }
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

  <p>
    <strong>{count}</strong> doubled is <strong>{doubled}</strong>, and if you
    subtract one it is <strong>{doubledMinusOne}</strong>
  </p>
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
