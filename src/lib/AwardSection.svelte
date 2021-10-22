<script>
  export let award;
  export let index;
  export let slug;

  import { dateFormat } from "../scripts/utils.js";
  import Star from "$lib/icons/Star.svelte";

  let hovered = false;
</script>

<a
  class="award-container no-underline"
  href={slug}
  on:mouseover={() => {
    hovered = true;
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
    {award.organization} | {dateFormat(award.date)}
  </h2>
</a>

<style>
  .award-container {
    display: block;
    position: relative;
    padding: 1.5rem 1rem;
    margin: 0.75rem 0;
    background: white;
    /* background-image: linear-gradient(
      to right,
      white 0%,
      white 100%
    ); */
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: white;
    border-image-slice: 1;
    box-shadow: 10px -10px 10px rgba(0, 0, 0, 0.1);
    transition: all 500ms ease;
    position: relative;
    z-index: 0;
  }

  .award-container:before {
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
    background-image: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 30%,
      rgba(var(--accent-color-rgb), 0.45) 100%
    );
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: opacity 500ms linear;
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
    color: rgb(55, 55, 55);
  }

  .award-container:hover {
    border-color: rgba(var(--accent-color-rgb), 0.45);
    box-shadow: 5px -5px 5px rgba(0, 0, 0, 0.1); /* none */
  }

  .award-container:hover::before {
    opacity: 1;
  }

  .star-container {
    position: absolute;
    top: 0;
    right: 0;
    padding: 6px;
  }
</style>
