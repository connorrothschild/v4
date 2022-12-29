<script>
  import { fade, fly } from "svelte/transition";
  import { windowWidth } from "../../stores/global.js";
  import OptionsPage from "./OptionsPage.svelte";

  let isPlaying = false;
  let isOpen = false;
  let isHovered = false;
</script>

{#if isOpen || isPlaying}
  <OptionsPage bind:isPlaying {isOpen} />
{/if}
<div
  class="jukebox"
  class:playing={isPlaying}
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
    <div class="icon">{isPlaying ? "📀" : "🔇"}</div>
    {#if isPlaying && !isOpen && isHovered}
      <p class="marquee-text" transition:fade>
        <span>{isPlaying}</span>
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

  .icon {
    font-size: 2rem;
    margin: 0;
    transform-origin: center;
    width: max-content;
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

  .playing-line .icon {
    z-index: 1;
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

  /* @keyframes marquee {
    0% {
      transform: translateY(-50%) translateX(0);
    }
    100% {
      transform: translateY(-50%) translateX(-100%);
    }
  } */
</style>
