<script>
  export let id;
  export let title;
  export let paused;
  export let anyHovered = false;
  export let hovered = null;
  export let currentVideo;

  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let hoverReady = false;

  onMount(() => {
    setTimeout(() => {
      hoverReady = true;
    }, 1000);
  });

  export let artist;

  const classify = (title) => {
    return title.replace(/\s/g, "-").toLowerCase();
  };
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

    if (currentVideo == id) {
      paused = !paused;
    } else {
      paused = false;
      currentVideo = id;
    }
  }}
  class="transition-title overflow-hidden {classify(title)}
    {currentVideo
    ? currentVideo == id && !paused
      ? 'playing'
      : 'inactive'
    : ''}
    {anyHovered ? (hovered == id ? 'hovered' : 'inactive') : ''}
    "
>
  {title}
  {#if currentVideo == id || (anyHovered && hovered == id)}
    <span transition:fade class="artist">by {artist}</span>
  {/if}
</li>

<style>
  .current {
    opacity: 1;
  }

  li {
    padding: 0;
    margin: 0;
    font-size: 9vw;
    font-family: var(--font-serif);
    line-height: 0.95;
    width: 100%;
    cursor: pointer;
    user-select: none;
    display: flex;
    color: var(--text-color);
    text-transform: uppercase;
    transition: color 600ms ease, text-shadow 300ms ease;
    width: max-content;
    z-index: 2;
    overflow: visible;
  }

  .artist {
    display: inline-block;
    font-size: 2rem;
    font-family: var(--font-sans);
    line-height: 1;
    align-self: flex-end;
    text-transform: none;
    margin: 0 0 0.15rem 0.75rem;
    text-shadow: none;
    color: rgba(var(--text-color-rgb), 0.5);
  }

  .inactive {
    color: rgba(var(--text-color-rgb), 0.2);
  }

  .hovered {
    color: rgba(var(--text-color-rgb), 0.85);
    z-index: 4;
  }

  .playing {
    color: var(--accent-color);
    z-index: 4;
    text-shadow: 0 0 4px var(--accent-color);
  }

  @media screen and (max-width: 768px) {
    li {
      line-height: 0.9;
      text-align: center;
      margin: auto;
    }
    .artist {
      display: none;
    }

    .the-kiss-of-venus {
      font-size: 9.5vw;
    }

    .dreams-tonite {
      font-size: 10.9vw;
    }
    .that-i-miss-you {
      font-size: 11vw;
    }
    .show-me-how {
      font-size: 11.6vw;
    }
    .wusyaname {
      font-size: 13.4vw;
    }

    .freelance {
      font-size: 14.6vw;
    }

    .グッドバイ {
      font-size: 15.8vw;
    }
    .bad-habit {
      font-size: 16.1vw;
    }
    .peroxide {
      font-size: 17.3vw;
    }
    .danielle {
      font-size: 18.3vw;
    }
    .always {
      font-size: 21.4vw;
    }
    .victim {
      font-size: 24.2vw;
    }
    .kyoto {
      font-size: 24vw;
    }
    .jackie {
      font-size: 26vw;
    }
    .bags {
      font-size: 33.2vw;
    }
  }
</style>
