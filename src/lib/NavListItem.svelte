<script>
  export let code;
  export let title;
  export let anyHovered;

  import { page } from "$app/stores";
  import { currentIcon } from "../stores/global.js";

  let hoveredIcon, hovered;
  const setCurrent = function (icon) {
    // hoveredIcon = icon == "" ? "home" : icon;
    // currentIcon.set(hoveredIcon);
    hovered = true;
  };
</script>

<li>
  <a
    on:mouseover={() => {
      setCurrent(code);
      anyHovered = true;
    }}
    on:focus={() => {
      setCurrent(code);
      anyHovered = true;
    }}
    on:click={() => {
      setCurrent(code);
    }}
    on:mouseleave={() => {
      setCurrent(null);
      anyHovered = false;
      hovered = false;
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
