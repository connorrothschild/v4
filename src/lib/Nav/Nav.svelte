<script>
  export let styles = "";
  export let hasBackground = false;

  import {
    menuExpanded,
    windowHeight,
    windowWidth,
  } from "../../stores/global.js";

  import NavListItem from "./NavListItem.svelte";
  import OpenToClose from "./OpenToClose.svelte";
  import Transition from "../Transition.svelte";

  let anyHovered,
    hovered = null,
    expanded = false,
    closedViaX = false,
    mounted = false;

  const toggle = function () {
    expanded = !expanded;
  };

  $: expanded, menuExpanded.set(expanded);

  import { fly, fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { expoInOut } from "svelte/easing";

  onMount(() => {
    mounted = true;
  });

  $: if (mounted) {
    expanded
      ? document.documentElement.classList.add("disable-scroll")
      : document.documentElement.classList.remove("disable-scroll");

    hovered = null;
  }

  // Transition params (responsive)
  $: inParams = {
    duration: 1000,
    opacity: 1,
    y: $windowWidth > 768 ? -$windowHeight : 0,
    x: $windowWidth > 768 ? 0 : $windowWidth,
    easing: expoInOut,
  };
  $: outParams = {
    duration: closedViaX ? 400 : 800,
    opacity: closedViaX ? 1 : 0,
    y: closedViaX ? ($windowWidth > 768 ? -$windowHeight : 0) : 0,
    x: $windowWidth > 768 ? 0 : -$windowWidth,
    delay: closedViaX ? 0 : 200,
    easing: expoInOut,
  };

  import { page } from "$app/stores";
  import { isTouchscreen } from "../../stores/device.js";
</script>

<div id="nav" style={styles} class:hasBackground>
  <a
    class="home-button no-underline"
    href="/"
    on:click={() => {
      expanded = false;
      // If the user is already on the current page, clicking on the same URL as current should trigger the slide up, not the abrupt page reload.
      closedViaX = $page.path.replace(/^\/([^\/]*).*$/, "$1") == "";
    }}>CR</a
  >
  <button
    class="toggle-button"
    aria-label={expanded ? "Close menu" : "Open menu"}
    on:click={() => {
      toggle();
      closedViaX = true;
    }}
  >
    <OpenToClose {expanded} />
  </button>
</div>
{#if expanded}
  <Transition split={"chars"} stagger={0.05} startingOpacity={0} />
  <div
    class="fullpage-nav"
    in:fly|local={inParams}
    out:fly|local={outParams}
    style={styles}
  >
    {#if !$isTouchscreen}
      {#key hovered}
        <h1
          in:fade={{ delay: 100, duration: 300 }}
          out:fade={{ duration: 300 }}
          class="massive-word"
        >
          {hovered != null ? hovered : ""}
        </h1>
      {/key}
    {/if}
    <ul
      class="nav-items"
      on:mouseleave={() => {
        hovered = null;
        anyHovered = false;
      }}
    >
      <NavListItem
        bind:expanded
        bind:anyHovered
        bind:hovered
        bind:closedViaX
        code={"project"}
        title={"Projects"}
        index={1}
      />
      <NavListItem
        bind:expanded
        bind:anyHovered
        bind:hovered
        bind:closedViaX
        code={"award"}
        title={"Awards"}
        index={2}
      />
      <NavListItem
        bind:expanded
        bind:anyHovered
        bind:hovered
        bind:closedViaX
        code={"about"}
        title={"About"}
        index={3}
      />
      <NavListItem
        bind:expanded
        bind:anyHovered
        bind:hovered
        bind:closedViaX
        code={"post"}
        title={"Blog"}
        index={4}
      />
    </ul>
  </div>
{/if}

<style>
  /* TOP LEVEL NAV (when fullpage is invisible) */
  #nav {
    display: flex;
    place-items: center;
    position: fixed;
    margin: 0 auto;
    width: 100%;
    height: var(--nav-height);
    z-index: 102;
    justify-content: space-between;
    pointer-events: none;
  }

  #nav > * {
    pointer-events: all;
  }

  .toggle-button {
    display: flex;
    margin-right: 1rem;
    cursor: pointer;
    user-select: none;
    background: none;
    border: none;
  }

  .toggle-button:focus,
  .toggle-button:active {
    background: none;
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

  /* On small screens, put a background behind nav to prevent text overlap */
  @media screen and (max-width: 868px) {
    .hasBackground {
      background: var(--primary-color);
      /* box-shadow: 1px 1px 6px var(--box-shadow-color); */
    }
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
    position: fixed;
    z-index: 101;
    display: flex;
    flex-direction: column;
    place-items: flex-start;
    justify-content: center;
    padding-left: 7.5vw;
    background: var(--primary-color);
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
  }

  .nav-items {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  /* FIXME: Disable scroll when nav is open */
  :global(.disable-scroll, .disable-scroll body) {
    overflow: hidden;
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
