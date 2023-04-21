<script>
  import { fade } from "svelte/transition";
  import OptionsPage from "./OptionsPage.svelte";

  let currentVideo = false;
  let currentVideoTitle;
  let isOpen = false;
  let isHovered = false;

  let mounted = false;
  import { onMount } from "svelte";
  onMount(() => {
    mounted = true;
  });

  $: if (mounted) {
    isOpen
      ? document.documentElement.classList.add("disable-scroll")
      : document.documentElement.classList.remove("disable-scroll");
  }
</script>

{#if isOpen || currentVideo}
  <OptionsPage bind:currentVideo bind:currentVideoTitle {isOpen} />
{/if}
<div
  class="jukebox"
  class:playing={currentVideo}
  on:click={() => {
    isOpen = !isOpen;
  }}
  on:mouseover={() => {
    isHovered = true;
  }}
  on:focus={() => {
    isHovered = true;
  }}
  on:mouseleave={() => {
    isHovered = false;
  }}
>
  <div class="playing-line">
    <div class="icon">{currentVideo ? "📀" : "🔇"}</div>
    {#if currentVideoTitle && !isOpen && isHovered}
      <p class="marquee-text" transition:fade>
        <span>{currentVideoTitle}</span>
      </p>
    {/if}
  </div>
</div>

<style>
  .jukebox {
    position: fixed;
    left: 50%;
    transform: translateX(-50%) translateZ(0);
    bottom: 6px;
    padding: 1rem 0.5rem;
    z-index: 104;
    overflow: hidden;
    overflow: visible;
    width: max-content;
    transition: all 600ms ease;
    cursor: pointer;
  }

  @media screen and (max-width: 967px) {
    .jukebox {
      bottom: 0;
      right: 6px;
      transform: none;
      left: unset;
    }
  }

  .icon {
    font-size: 2rem;
    margin: 0;
    transform-origin: center;
    width: max-content;
    padding: 1px;
  }

  .playing .icon {
    animation: rotate 5s linear infinite;
  }

  /* Create a CSS animation that rotates the circle every 25 seconds */
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .playing-line .marquee-text {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 100%;
    width: 300px;
    white-space: nowrap;
    overflow: hidden;
    /* animation: marquee 10s linear infinite; */
    z-index: -1;
  }

  @media screen and (max-width: 967px) {
    .playing-line .marquee-text {
      /* width: 100%; */
      text-align: right;
      left: -3px;
      transform: translateY(-50%) translateX(-100%);
    }
  }

  @media screen and (max-width: 528px) {
    .playing-line .marquee-text {
      display: none;
    }
  }

  /* @keyframes marquee {
    0% {
      transform: translateY(-50%) translateX(0);
    }
    100% {
      transform: translateY(-50%) translateX(-100%);
    }
  } */

  /* TMP: Hide jukebox on mobile for performance */
  @media screen and (max-width: 567px) {
    .jukebox {
      display: none;
    }
  }
</style>
