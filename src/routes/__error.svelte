<script context="module">
  export function load({ error, status }) {
    console.log(error);
    return {
      props: {
        title: `${status}: ${error.message}`,
        errorCode: `${error.stack}`,
      },
    };
  }
</script>

<script>
  export let title;
  export let errorCode;

  let showTech = false;
</script>

<div class="error">
  <h1>There was an error ☹️</h1>
  <h2>Error {title}</h2>

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
    <pre>{errorCode}</pre>
  {/if}
</div>

<style>
  .error {
    margin-top: var(--nav-height);
    max-width: 1068px;
    margin: auto;
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
