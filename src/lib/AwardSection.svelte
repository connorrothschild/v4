<script>
  export let award;
  export let slug;

  import { dateFormat } from "../scripts/utils.js";
  import Star from "$lib/icons/Star.svelte";
</script>

<a class="award-container no-underline" href={award.media_url} target="_blank">
  <!-- {#if award.featured == true}
    <div class="featured-star"><Star /></div>
  {/if} -->
  <h1 class="award-title">
    {award.title}
    {#if award.featured == true}
      <Star fill="#131A20" width="20" height="20" />
    {/if}
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
    margin: 0.5rem 0;
    background: rgba(255, 255, 255, 0.8);
    /* background: linear-gradient(
      to right,
      rgba(var(--accent-color-rgb), 0.15) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 90%
    ); */
    /* border-radius: 5px; */
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-color: var(--accent-color);
    border-image-slice: 1;
    box-shadow: 10px -10px 10px rgba(0, 0, 0, 0.1);
    transition: transform 500ms ease;
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
  }

  .award-container:hover {
    transform: translateY(-5px);
  }
  /* .featured-star {
    position: absolute;
    top: 0;
    right: 0;
  } */
</style>
