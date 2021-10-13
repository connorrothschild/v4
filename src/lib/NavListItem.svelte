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
    class={$page.path == `/${code}` ? "current" : ""}>{title}</a
  >
</li>

<style>
  li {
    display: inline-block;
    padding: 0;
    margin: 0;
  }

  a {
    color: var(--text-color);
    font-family: var(--font-serif);
    text-transform: uppercase;
  }

  .current {
    color: var(--accent-color);
    border-bottom: 2px solid var(--accent-color);
  }

  .current:hover {
    text-decoration: none;
  }

  @media screen and (max-width: 560px) {
    li {
      font-size: 0.9rem;
      margin-right: 1.35rem;
    }
  }
</style>
