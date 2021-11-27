<script>
  export let code;
  export let title;
  export let index;
  export let anyHovered = false;
  export let expanded = true;
  export let hovered = null;
  export let closedViaX = false;

  import { page } from "$app/stores";
</script>

<li>
  <a
    on:mouseover={() => {
      hovered = title;
      anyHovered = true;
    }}
    on:focus={() => {
      hovered = title;
      anyHovered = true;
    }}
    on:click={() => {
      hovered = title;
      anyHovered = false;
      expanded = false;

      // If the user is already on the current page, clicking on the same URL as current should trigger the slide up, not the abrupt page reload.
      closedViaX = $page.path.replace(/^\/([^\/]*).*$/, "$1") == `${code}`;
    }}
    sveltekit:prefetch
    href="/{code}"
    class="transition-title overflow-hidden no-underline 
    link link-{index} 
    {anyHovered
      ? hovered == title
        ? 'active'
        : 'inactive'
      : $page.path.replace(/^\/([^\/]*).*$/, '$1') == `${code}`
      ? 'current-page'
      : 'not-current-page'}"
  >
    {title}
  </a>
</li>

<style>
  li {
    display: inline-block;
    padding: 0;
    margin: 0;
    font-size: 9vw;
    font-family: var(--font-serif);
    line-height: 1;
    width: 100%;
  }

  .link {
    color: var(--text-color);
    text-transform: uppercase;
    transition: color 600ms ease;
    width: 100%;
    display: block;
  }

  .link:hover {
    text-decoration: none;
  }

  .link:not(.active):hover {
    color: var(--text-color);
  }

  .active {
    color: var(--accent-color);
  }

  .active:hover {
    text-decoration: none;
  }

  .inactive {
    color: rgba(var(--text-color-rgb), 0.3);
  }

  .current-page {
    color: var(--accent-color);
  }

  @media screen and (max-width: 1068px) {
    li {
      font-size: 7rem;
    }
  }

  @media screen and (max-width: 528px) {
    .link {
      line-height: 0.9;
    }
    .link-1 {
      font-size: 20.3vw;
      overflow: visible;
    }
    .link-2 {
      font-size: 24vw;
    }
    .link-3 {
      font-size: 28.9vw;
    }
    .link-4 {
      font-size: 36.8vw;
    }
  }
</style>
