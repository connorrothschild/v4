<script>
  export let isPlaying;
  export let styles = "";
  export let isOpen;

  import AudioOption from "./AudioOption.svelte";

  import {
    menuExpanded,
    windowHeight,
    windowWidth,
  } from "../../stores/global.js";

  import Transition from "../Transition.svelte";

  let anyHovered,
    hovered = null,
    expanded = false,
    closedViaX = false,
    mounted = false;

  $: expanded, menuExpanded.set(expanded);

  import { fly, fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { expoInOut } from "svelte/easing";

  onMount(() => {
    mounted = true;
  });

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

  let options = [
    {
      src: "audio/babygirl.mp3",
      code: "babygirl",
      title: "Always",
      artist: "Babygirl",
    },
    {
      src: "audio/fred.mp3",
      code: "fred",
      title: "Danielle",
      artist: "Fred again..",
    },
    {
      src: "audio/ecco.mp3",
      code: "ecco",
      title: "Peroxide",
      artist: "Ecco2k",
    },
    {
      src: "audio/vansire.mp3",
      code: "vansire",
      title: "Evening Light",
      artist: "Vansire",
    },
    {
      src: "audio/yves.mp3",
      code: "yves",
      title: "Dream Palette",
      artist: "Yves Tumor",
    },
  ];
</script>

<Transition split={"chars"} stagger={0.05} startingOpacity={0} />
<div
  class="fullpage-nav {isOpen ? '' : 'hidden'}"
  in:fly={inParams}
  out:fly={outParams}
  style={styles}
>
  {#if !$isTouchscreen}
    {#key hovered}
      <h1
        in:fade={{ delay: 100, duration: 300 }}
        out:fade={{ duration: 300 }}
        class="massive-word"
      >
        {hovered != null ? `by ${hovered}` : ""}
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
    {#each options as option, index}
      <AudioOption
        bind:expanded
        bind:anyHovered
        bind:hovered
        bind:closedViaX
        bind:isPlaying
        code={option.code}
        title={option.title}
        artist={option.artist}
        src={option.src}
        index={index + 1}
      />
    {/each}
  </ul>
</div>

<style>
  .massive-word {
    position: absolute;
    font-size: 9vw;
    right: 1vw;
    bottom: 0;
    opacity: 0.15;
    user-select: none;
    pointer-events: none;
  }

  /* FULLPAGE NAV */
  .fullpage-nav {
    position: fixed;
    z-index: 101;
    display: flex;
    flex-direction: column;
    place-items: flex-start;
    justify-content: center;
    padding-left: 2.5vw;
    background: var(--primary-color);
    margin: 0 auto;
    width: 100vw;
    height: 100%;
    transition: opacity 500ms ease-in-out;
  }

  .nav-items {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    .fullpage-nav {
      padding-left: 0;
    }

    ul {
      text-align: center;
    }

    .massive-word {
      font-size: 13vw;
    }
  }

  .hidden {
    opacity: 0;
    pointer-events: none;
  }
</style>
