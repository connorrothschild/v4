<script>
  export let href;
  export let text = "";
  export let classes = "";
</script>

<div class={classes}>
  <a class="block no-underline" {href} sveltekit:prefetch
    >&#8592; {@html text}
  </a>
</div>

<style>
  a {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0;
    font-weight: 300;
    transition: transform 300ms ease;
  }

  a:hover {
    transform: translateX(-10px);
  }

  @media screen and (max-width: 660px) {
    a {
      font-size: 0.75rem;
    }
  }
</style>
