<script>
  export let styles = "";
  import NavListItem from "./NavListItem.svelte";
  import OpenToClose from "./OpenToClose.svelte";

  let anyHovered,
    hovered = null;

  let expanded = false;
  let closedViaX = false;

  const toggle = function () {
    expanded = !expanded;
  };

  import { slide, fade } from "svelte/transition";
</script>

<div id="nav">
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
    in:slide={{ duration: 1000 }}
    out:slide={{ duration: closedViaX ? 1000 : 0 }}
    style={styles}
  >
    {#key hovered}
      {#if hovered != null}
        <h1
          in:fade={{ delay: 300, duration: 300 }}
          out:fade={{ duration: 300 }}
          class="massive-word"
        >
          {hovered}
        </h1>
      {/if}
    {/key}
    <ul class="nav-items">
      <NavListItem
        bind:expanded
        bind:anyHovered
        bind:hovered
        bind:closedViaX
        code={"about"}
        title={"About"}
      />
      <NavListItem
        bind:expanded
        bind:anyHovered
        bind:hovered
        bind:closedViaX
        code={"post"}
        title={"Blog"}
      />
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
    font-size: 30vw;
    right: 5vw;
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
    padding-bottom: 10vh;
    height: 90vh;
    z-index: 101;
    position: fixed;
  }

  .nav-items {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
