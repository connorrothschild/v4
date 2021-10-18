<script>
  export let href;
  export let text = "";
  export let classes = "";
</script>

<a class="block no-underline {classes}" {href} sveltekit:prefetch
  >&#8592; {@html text}
</a>

<style>
  a {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0;
    font-weight: 300;
    transition: transform 300ms ease;
  }

  a:hover {
    transform: translateX(-10px);
  }
</style>
