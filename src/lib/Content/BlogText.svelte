<script>
  export let post;
  export let slug;
  export let anyHovered;
  export let index;

  import { fly, fade } from "svelte/transition";

  import { dateFormat } from "../../scripts/utils.js";
  import Star from "$lib/icons/Star.svelte";

  let hovered = false;

  import TransitionInView from "$lib/TransitionInView.svelte";
</script>

<TransitionInView>
  <a
    class="post-container no-underline {post.featured ? 'featured' : ''} 
           {anyHovered ? (hovered ? 'hovered' : 'unhovered') : ''}"
    sveltekit:prefetch
    href={slug}
    on:mouseover={() => {
      anyHovered = true;
      hovered = true;
    }}
    on:focus={() => {
      null;
    }}
    on:mouseleave={() => {
      anyHovered = false;
      hovered = false;
    }}
  >
    {#if post.featured}
      <div class="featured-star">
        <Star
          width="20"
          height="20"
          fill="var(--accent-color)"
          stroke="none"
          {hovered}
          {index}
        />
      </div>
    {/if}
    <div class="post-card">
      <div class="post-info">
        <h2 class="post-date">{dateFormat(post.date)}</h2>
        <h1 class="post-title">{@html post.title}</h1>
        <h2 class="post-description">{@html post.description}</h2>
      </div>
      <div class="post-misc">
        {#if hovered && !post.featured}
          <p transition:fly|local={{ x: -50, duration: 500 }} class="read-more">
            Read more &#8594;
          </p>
        {:else}
          <p class="placeholder">​​</p>
        {/if}
        <div class="post-tags">
          {#each post.tags as tag}
            <span class="post-tag">{tag}</span>
          {/each}
        </div>
      </div>
    </div>
  </a>
</TransitionInView>

<style>
  .post-container {
    display: block;
    width: 100%;
    height: 100%;
    padding: 1rem 1rem 2rem 1rem;
    overflow: hidden;
    transition: all 100ms linear, border 300ms ease;
    cursor: pointer;
    border-bottom: 1px solid rgba(var(--text-color-rgb), 0.2);
    position: relative;
  }

  .post-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    pointer-events: none;
  }

  .post-date {
    text-transform: uppercase;
    letter-spacing: 0.34px;
    font-size: 1rem;
    font-family: var(--font-serif);
    color: var(--off-text-color);
    font-weight: 200;
    margin-bottom: 0.75rem;
  }

  .post-title {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    font-family: var(--font-sans);
    font-weight: 500;
    line-height: 1.2;
  }

  .post-description {
    font-size: 1.2rem;
    font-family: var(--font-sans);
    font-weight: 200;
    line-height: 1.15;
  }

  .post-misc {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    place-items: flex-end;
  }

  .read-more {
    text-align: left;
    color: var(--accent-color);
  }

  .post-tags {
    text-align: right;
  }

  .post-tag {
    font-family: var(--font-sans);
    padding: 3px 8px;
    background: var(--semitransparent-bg);
    margin: 2px;
    margin-right: 2px;
    border-radius: 3px;
    color: rgba(var(--accent-color-rgb), 1);
    /* color: var(--pure-text-color); */
    font-size: 0.85rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-right: 0.25rem;
    letter-spacing: 1px;
    /* border: 0.5px solid rgba(var(--accent-color-rgb), 0.5); */
  }

  .featured-star {
    position: absolute;
    top: 0;
    right: 0;
    padding: 6px;
  }

  /* .hovered {
    border-bottom: 1px solid var(--accent-color);
  } */

  .unhovered {
    filter: grayscale(0.7);
    border-bottom: 1px solid rgba(var(--text-color-rgb), 0.05);
  }

  .post-container::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: var(--accent-color);
    transform-origin: bottom left;
    transition: transform 500ms ease;
  }

  .post-container:hover::after {
    transform: scaleX(1);
  }

  .unhovered .post-date,
  .unhovered .post-title,
  .unhovered .post-description,
  .unhovered .post-tag,
  .unhovered .featured-star {
    color: transparent;
    opacity: 0.5;
    text-shadow: 0 0 2px var(--text-color);
  }

  .post-date,
  .post-title,
  .post-description,
  .post-tag,
  .featured-star {
    transition: opacity 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),
      color 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),
      text-shadow 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99);
  }

  @media screen and (max-width: 400px) {
    .post-date {
      font-size: 0.85rem;
    }

    .post-title {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }

    .post-description {
      font-size: 1rem;
    }

    .post-tag {
      font-size: 0.75rem;
    }
  }
</style>
