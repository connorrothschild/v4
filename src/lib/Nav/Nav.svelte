<script>
  export let styles = "";
  import NavListItem from "./NavListItem.svelte";
  import OpenToClose from "./OpenToClose.svelte";

  let anyHovered,
    hovered = null,
    expanded = false,
    closedViaX = false,
    mounted = false;

  const toggle = function () {
    expanded = !expanded;
  };

  import { slide, fade } from "svelte/transition";
  import { onMount } from "svelte";

  onMount(() => {
    mounted = true;
  });

  $: if (mounted) {
    expanded
      ? document.documentElement.classList.add("disable-scroll")
      : document.documentElement.classList.remove("disable-scroll");
  }
</script>

<div id="nav" style={styles}>
  <a
    class="home-button no-underline"
    href="/"
    on:click={() => {
      expanded = false;
    }}>CR</a
  >
  <h2
    class="toggle-button"
    on:click={() => {
      toggle();
      closedViaX = true;
    }}
  >
    <OpenToClose {expanded} />
  </h2>
</div>
{#if expanded}
  <div
    class="fullpage-nav"
    in:slide={{ duration: 800 }}
    out:slide={{ duration: closedViaX ? 800 : 0 }}
    style={styles}
  >
    {#key hovered}
      <h1
        in:fade={{ delay: 100, duration: 300 }}
        out:fade={{ duration: 300 }}
        class="massive-word"
      >
        {hovered != null ? hovered : ""}
      </h1>
    {/key}
    <ul class="nav-items">
      <NavListItem
        bind:expanded
        bind:anyHovered
        bind:hovered
        bind:closedViaX
        code={"project"}
        title={"Projects"}
      />

      <NavListItem
        bind:expanded
        bind:anyHovered
        bind:hovered
        bind:closedViaX
        code={"award"}
        title={"Awards"}
      />
      <NavListItem
        bind:expanded
        bind:anyHovered
        bind:hovered
        bind:closedViaX
        code={"about"}
        title={"About"}
      /><NavListItem
        bind:expanded
        bind:anyHovered
        bind:hovered
        bind:closedViaX
        code={"post"}
        title={"Blog"}
      />
    </ul>
  </div>
{/if}

<style>
  /* TOP LEVEL NAV (when fullpage is invisible) */
  #nav {
    display: flex;
    place-items: center;
    background: var(--primary-color);
    margin: 0 auto;
    width: 100%;
    height: var(--nav-height);
    z-index: 102;
    justify-content: space-between;
  }

  .toggle-button {
    display: flex;
    margin-right: 1rem;
    cursor: pointer;
    user-select: none;
  }

  .massive-word {
    position: absolute;
    font-size: 20vw;
    right: 2.5vw;
    bottom: 0;
    opacity: 0.15;
    user-select: none;
    pointer-events: none;
  }

  .home-button {
    display: flex;
    place-items: center;
    padding-left: 1rem;
    margin-left: 0;
    font-weight: 300;
    letter-spacing: 1px;
    font-size: 2rem;
    font-family: var(--font-serif);
    cursor: pointer;
  }

  @media screen and (max-width: 560px) {
    .home-button {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 460px) {
    .home-button {
      padding-left: 0.85rem;
      font-size: 1.35rem;
    }
  }

  /* FULLPAGE NAV */
  .fullpage-nav {
    display: flex;
    flex-direction: column;
    place-items: flex-start;
    justify-content: center;
    padding-left: 7.5vw;
    background: var(--primary-color);
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    z-index: 101;
    position: fixed;
  }

  .nav-items {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  /* FIXME: Disable scroll when nav is open */
  :global(html.disable-scroll) {
    overflow-y: hidden;
    /* position: absolute; */
  }

  @media screen and (max-width: 868px) {
    .fullpage-nav {
      padding-left: 0;
    }
    ul {
      text-align: center;
    }
    .massive-word {
      font-size: 30vw;
      right: 4vw;
    }
  }
</style>
