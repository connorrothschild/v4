<script>
  export let href;
  export let text = "";
  export let classes = "";
</script>

<div class={classes}>
  <a class="padding-bottom" {href} sveltekit:prefetch>&#8592; {@html text} </a>
</div>

<style>
  a {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0;
    font-weight: 300 !important;
    font-family: var(--font-sans);
  }
</style>
