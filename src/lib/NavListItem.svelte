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
    class="link no-underline {$page.path.replace(/^\/([^\/]*).*$/, '$1') ==
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
    /* color: var(--text-color); */
    color: black;
    font-family: var(--font-serif);
    text-transform: uppercase;
    transition: color 400ms ease;
  }

  .link:hover {
    color: var(--accent-color);
  }

  .current {
    color: var(--accent-color);
    /* border-bottom: 1px solid var(--accent-color); */
  }

  .current:hover {
    text-decoration: none;
  }

  @media screen and (max-width: 560px) {
    li {
      font-size: 3vw;
      /* margin-right: 1.5vw; */
    }
  }

  @media screen and (max-width: 460px) {
    li {
      font-size: 3.5vw;
      margin-left: 1rem;
    }

    .current {
      border-bottom: 1px solid rgba(var(--accent-color-rgb), 0.5);
    }
  }
</style>
