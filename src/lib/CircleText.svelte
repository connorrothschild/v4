<script>
  import { fade } from "svelte/transition";
  let hovered = false;
  let imageIndex = 1;

  $: text = hovered
    ? "👆 Scroll to top 👆 Scroll to top 👆 Scroll to top"
    : "👋 Connor 👀 Rothschild 🤠 Connor 🔥 Rothschild";
</script>

<a
  class="circle no-underline"
  sveltekit:prefetch
  href="#home"
  on:mouseover={() => {
    hovered = true;
  }}
  on:focus={() => {
    hovered = true;
  }}
  on:mouseleave={() => {
    hovered = false;
    imageIndex = imageIndex == 4 ? 1 : imageIndex + 1;
  }}
>
  {#if hovered}
    <img transition:fade src="/images/me/{imageIndex}.png" alt="Me" />
  {/if}
  <svg class="circleText" viewBox="0 0 500 500" data-duration="5">
    <path
      id="circle"
      fill="none"
      stroke="var(--text-color)"
      stroke-width="5"
      data-duration="5"
      d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
    />

    <text dy="-25">
      <textPath xlink:href="#circle">
        {text}
      </textPath>
    </text>
  </svg>
</a>

<style>
  .circle {
    position: sticky;
    right: 6px;
    bottom: 6px;
    padding: 1rem;
    z-index: 99;
    overflow: hidden;
    width: min-content;
    margin-left: auto;
    margin-right: 6px;
    transform: translateZ(0);
    transition: all 600ms ease;
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
    font-size: 65px;
    letter-spacing: -1px;
    text-shadow: 1px 0px 0px var(--pure-background-color);
    user-select: none;
  }

  .circle:hover text {
    font-size: 72px;
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
</style>
