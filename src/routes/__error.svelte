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
  <h1>{title}</h1>

  <p
    on:click={() => {
      showTech = !showTech;
    }}
  >
    {showTech ? "Hide" : "Show"} the technical details
  </p>
  {#if showTech}
    <pre>{errorCode}</pre>
  {/if}
</div>

<style>
  .error {
    margin-top: var(--nav-height);
  }
</style>
