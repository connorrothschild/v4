<script>
  export let award;
  export let index;
  export let slug;

  import { dateFormat } from "../scripts/utils.js";
  import Star from "$lib/icons/Star.svelte";

  let hovered = false;

  // Prevent double clicking messing up routing
  import { goto, prefetch } from "$app/navigation";

  let linkClicked = false;
  function navigate(slug) {
    if (linkClicked) return;
    linkClicked = true;
    setTimeout(() => {
      linkClicked = false;
    }, 500);

    goto(slug);
  }
</script>

<div
  class="award-container no-underline"
  sveltekit:prefetch
  on:click={navigate(slug)}
  on:mouseover={() => {
    hovered = true;
    prefetch(slug);
  }}
  on:focus={() => {
    hovered = true;
  }}
  on:mouseleave={() => {
    hovered = false;
  }}
>
  {#if award.featured == true}
    <div class="star-container">
      <Star
        {hovered}
        {index}
        fill={"var(--accent-color)"}
        width="18"
        height="18"
      />
    </div>
  {/if}
  <h1 class="award-title">
    {award.title}
  </h1>
  <h2 class="award-description">
    <span class="organization">{award.organization}</span>
    <span class="divider">|</span>
    <span class="date">{dateFormat(award.date)}</span>
  </h2>
</div>

<style>
  .award-container {
    display: block;
    position: relative;
    padding: 1.5rem 1rem;
    background: transparent;
    cursor: pointer;
    /* background-image: linear-gradient(
      to right,
      white 0%,
      white 100%
      ); */
    /* border-radius: 5px; */
    /* border-width: 1px;
      border-style: solid;
      border-color: white;
      border-image-slice: 1; */
    /* margin: 0.75rem 0; */
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */
    border-bottom: 0.5px solid var(--accent-color);
    transition: all 200ms linear;
    position: relative;
    z-index: 0;
  }

  .award-container:before {
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
    /* background-image: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 30%,
      rgba(var(--accent-color-rgb), 0.2) 100%
    ); */
    /* border-radius: 5px 5px 0 0; */
    /* background: rgba(var(--accent-color-rgb), 0.125); */
    background: var(--semitransparent-bg);
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    border-left: 0.5px solid var(--accent-color);
    transition: opacity 200ms linear;
  }

  .award-title {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }

  .award-description {
    font-size: 1rem;
    font-weight: 200;
    letter-spacing: 0.64px;
    text-transform: uppercase;
    font-family: var(--font-sans);
    color: var(--text-color);
  }

  /* .award-container:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  } */

  .award-container:hover::before {
    opacity: 1;
  }

  .star-container {
    position: absolute;
    top: 0;
    right: 0;
    padding: 6px;
  }

  @media screen and (max-width: 400px) {
    .award-title {
      font-size: 1.35rem;
    }

    .divider {
      display: none;
    }

    .organization,
    .date {
      display: block;
    }

    .organization {
      font-weight: 300;
    }

    .date {
      margin-top: 6px;
      font-size: 0.8rem;
    }
  }
</style>
