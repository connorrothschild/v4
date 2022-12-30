<script context="module">
  let current;
</script>

<script>
  export let id;
  export let title;
  export let index;
  export let paused;
  export let anyHovered = false;
  export let expanded = true;
  export let hovered = null;
  export let closedViaX = false;
  export let currentVideo;

  import { page } from "$app/stores";

  import { onMount } from "svelte";

  let hoverReady = false;

  onMount(() => {
    setTimeout(() => {
      hoverReady = true;
    }, 1000);
  });

  export let src;
  export let artist;

  let audio;

  function stopOthers() {
    // if (current && current !== audio) current.pause();
    // current = audio;

    // currentVideo = paused ? false : id;
  }

  let progress;
</script>

<li
  on:mouseover={() => {
    if (!hoverReady) return;

    hovered = id;
    anyHovered = true;
  }}
  on:focus={() => {
    if (!hoverReady) return;

    hovered = id;
    anyHovered = true;
  }}
  on:click={() => {
    if (!hoverReady) return;

    hovered = id;
    expanded = false;

    if (currentVideo == id) {
      paused = !paused;
    } else {
      paused = false;
      currentVideo = id;
    }
    console.log({currentVideo})
  }}
  class="transition-title overflow-hidden no-underline 
    link link-{index} 
    {currentVideo ? (currentVideo == id ? 'playing' : 'not-playing') : ''}
    {anyHovered ? (hovered == id ? 'active' : 'inactive') : ''}
    "
>
  {title}
</li>

<!-- </article> -->
<style>
  .current {
    opacity: 1;
  }

  li {
    display: inline-block;
    padding: 0;
    margin: 0;
    font-size: 9vw;
    font-family: var(--font-serif);
    line-height: 1;
    width: 100%;
    cursor: pointer;
    user-select: none;
  }

  .link {
    color: var(--text-color);
    text-transform: uppercase;
    transition: color 600ms ease;
    width: 100%;
    display: block;
    width: max-content;
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

  .playing {
    color: var(--accent-color);
    /* background: rgba(var(--primary-color-rgb), 0.9); */
    backdrop-filter: blur(6px);
    z-index: 4;
  }

  @media screen and (max-width: 768px) {
    .link {
      line-height: 0.9;
      text-align: center;
      margin: auto;
    }
    .link-1 {
      font-size: 21.4vw;
    }
    .link-2 {
      font-size: 18.34vw;
    }
    .link-3 {
      font-size: 18vw;
    }
    .link-4 {
      font-size: 11.8vw;
    }
    .link-5 {
      font-size: 10.9vw;
    }
  }
</style>
