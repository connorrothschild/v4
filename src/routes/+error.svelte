<script>
  import { page } from "$app/stores";
  let showTech = false;
  console.log($page);
</script>

<div class="error">
  <h1>There was an error ☹️</h1>
  <h2>Error {$page.status}</h2>

  <p
    on:click={() => {
      showTech = !showTech;
    }}
  >
    {showTech ? "Hide" : "Show"} the technical details {@html showTech
      ? "&uarr;"
      : "&darr;"}
  </p>
  {#if showTech}
    <pre>{$page.error.message}</pre>
  {/if}
</div>

<style>
  .error {
    margin: auto;
    margin-top: calc(var(--nav-height) + 3rem);
    max-width: 1068px;
    width: 95%;
    padding: 1rem;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  h2 {
    font-family: var(--font-mono);
    font-size: 1rem;
    margin-bottom: 0.75rem;
    padding: 0.75rem;
    width: max-content;
    background: var(--semitransparent-bg);
    box-shadow: 1px 1px 6px var(--box-shadow-color);
    border-radius: 3px;
  }

  p {
    margin-bottom: 1rem;
    cursor: pointer;
  }

  pre {
    font-family: var(--font-mono);
    overflow-x: scroll;
    overflow-y: visible;
    height: max-content;
    padding: 1rem;
    background: var(--semitransparent-bg);
    box-shadow: 1px 1px 6px var(--box-shadow-color);
  }

  h1,
  p,
  pre {
    color: var(--text-color);
  }
</style>
