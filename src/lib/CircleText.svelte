<script>
  import { fade, fly } from "svelte/transition";

  import { windowWidth, menuExpanded } from "../stores/global.js";

  let hovered = false;
  let imageIndex = 1;

  $: text = hovered
    ? "Scroll to the top 👆 "
    : "👋 Connor 👀 Rothschild 🤠 Connor 🔥 Rothschild";
</script>

{#if $windowWidth > 968}
  <div
    aria-hidden="true"
    transition:fly={{ y: 50 }}
    class="circle {$menuExpanded ? 'invisible' : ''}"
    sveltekit:prefetch
    on:click={() => {
      window.scrollTo(0, 0);
    }}
    on:mouseover={() => {
      hovered = true;
    }}
    on:focus={() => {
      hovered = true;
    }}
    on:mouseleave={() => {
      hovered = false;
      imageIndex = imageIndex == 5 ? 1 : imageIndex + 1;
    }}
  >
    {#if hovered}
      <img transition:fade|local src="/images/me/{imageIndex}.png" alt="" />
    {/if}
    <svg class="circleText" viewBox="0 0 500 500" data-duration="5">
      <path
        id="circle"
        fill="none"
        data-duration="5"
        d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
      />
      {#key text}
        <text
          dy="-25"
          in:fade={{ duration: 300, delay: 300 }}
          out:fade={{ duration: 300 }}
        >
          <textPath xlink:href="#circle">
            {text}
          </textPath>
        </text>
      {/key}
    </svg>
  </div>
{/if}

<style>
  .circle {
    position: sticky;
    right: 6px;
    bottom: 6px;
    padding: 1rem;
    z-index: 101;
    overflow: hidden;
    width: min-content;
    margin-left: auto;
    margin-right: 6px;
    transform: translateZ(0);
    transition: all 600ms ease;
    cursor: pointer;
  }

  .circle:hover {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  img {
    position: absolute;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: contain;
    transform: scale(0.795);
    z-index: 100;
  }

  text {
    fill: var(--text-color);
    font-family: var(--font-serif);
    font-weight: 200;
    font-size: 63px;
    letter-spacing: -1px;
    text-shadow: 1px 0px 0px var(--pure-background-color);
    user-select: none;
  }

  path {
    fill: rgba(var(--accent-color-rgb), 0.2);
  }

  .circleText {
    width: 100px;
    height: 100px;
    overflow: visible;
    transform-origin: center center;
    stroke-opacity: 0.75;
    animation: rotate 25s linear infinite;
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

  .invisible {
    opacity: 0;
  }
</style>
