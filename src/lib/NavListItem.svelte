<script>
  export let code;
  export let title;

  import { page } from "$app/stores";
  import { currentIcon } from "../stores/global.js";

  let hoveredIcon;
  const setCurrent = function (icon) {
    hoveredIcon = icon == "" ? "home" : icon;
    currentIcon.set(hoveredIcon);
  };
</script>

<li>
  <a
    on:mouseover={() => {
      setCurrent(code);
    }}
    on:focus={() => {
      setCurrent(code);
    }}
    on:click={() => {
      setCurrent(code);
    }}
    on:mouseleave={() => {
      setCurrent(null);
    }}
    sveltekit:prefetch
    href="/{code}"
    class="link padding-bottom {$page.path.replace(/^\/([^\/]*).*$/, '$1') ==
    `${code}`
      ? 'current'
      : ''}">{title}</a
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
    /* transition: color 400ms ease; */
  }

  .link:hover {
    text-decoration: none;
  }

  :global(.left .link) {
    color: var(--pure-text-color);
  }

  .link:not(.current):hover {
    color: var(--text-color);
  }

  .current {
    color: var(--accent-color);
    /* background-size: 100% 1px; */
  }

  .current:hover {
    text-decoration: none;
    background-size: 0 1px;
  }
</style>
