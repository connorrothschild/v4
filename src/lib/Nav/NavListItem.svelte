<script>
  export let code;
  export let title;
  export let index;
  export let anyHovered = false;
  export let expanded = true;
  export let hovered = null;
  export let closedViaX = false;

  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
</script>

<li transition:fade|local>
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
      closedViaX =
        $page.path.replace(/^\/([^\/]*).*$/, "$1") == `${code}` ? true : false;
    }}
    on:mouseleave={() => {
      hovered = null;
      anyHovered = false;
    }}
    sveltekit:prefetch
    href="/{code}"
    class="no-underline link link-{index} {anyHovered
      ? hovered == title
        ? 'active'
        : 'inactive'
      : $page.path.replace(/^\/([^\/]*).*$/, '$1') == `${code}`
      ? 'current-page'
      : 'not-current-page'}"
  >
    {title}
    <!-- {#if hovered == title}
      <span>🔥</span>
    {/if} -->
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
    transition: opacity 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),
      color 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),
      text-shadow 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99);
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
    text-shadow: 0px 0px 6px var(--text-color);
  }

  .current-page {
    color: var(--accent-color);
  }

  @media screen and (max-width: 1068px) {
    li {
      font-size: 7rem;
    }
  }

  @media screen and (max-width: 468px) {
    .link-1 {
      font-size: 20vw;
    }
    .link-2 {
      font-size: 24vw;
    }
    .link-3 {
      font-size: 29vw;
    }
    .link-4 {
      font-size: 37vw;
    }
  }
</style>
