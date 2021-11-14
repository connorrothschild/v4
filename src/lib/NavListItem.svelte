<script>
  export let code;
  export let title;
  export let anyHovered = false;

  import { page } from "$app/stores";

  let hovered;
</script>

<li>
  <a
    on:mouseover={() => {
      hovered = true;
      anyHovered = true;
    }}
    on:focus={() => {
      hovered = true;
      anyHovered = true;
    }}
    on:click={() => {
      hovered = true;
    }}
    on:mouseleave={() => {
      hovered = false;
      anyHovered = false;
    }}
    sveltekit:prefetch
    href="/{code}"
    class="no-underline link {anyHovered
      ? hovered
        ? 'active'
        : 'inactive'
      : $page.path.replace(/^\/([^\/]*).*$/, '$1') == `${code}`
      ? 'current-page'
      : 'not-current-page'}">{title}</a
  >
</li>

<style>
  li {
    display: inline-block;
    padding: 0;
    margin: 0;
    margin-left: 2rem;
  }

  .link {
    color: var(--text-color);
    text-transform: uppercase;
    transition: all 400ms ease;
  }

  .link:hover {
    text-decoration: none;
  }

  :global(.left .link) {
    color: var(--pure-text-color);
  }

  .link:not(.active):hover {
    color: var(--text-color);
  }

  .active {
    color: var(--accent-color);
    opacity: 1;
    text-shadow: none;
  }

  .active:hover {
    text-decoration: none;
    background-size: 0 1px;
  }

  .inactive {
    opacity: 0.5;
    color: transparent;
    text-shadow: 0px 0px 3px var(--text-color);
  }

  .current-page {
    color: var(--accent-color);
  }
</style>
