<script>
  export let post;
  export let slug;
  export let anyHovered;
  export let index;

  import { dateFormat } from "../../scripts/utils.js";
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
  class="post-container no-underline {post.featured ? 'featured' : ''} 
           {anyHovered ? (hovered ? 'hovered' : 'unhovered') : ''}"
  on:click={navigate(slug)}
  on:mouseover={() => {
    anyHovered = true;
    hovered = true;
    prefetch(slug);
  }}
  on:focus={() => {
    prefetch(slug);
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
  <div class="post-card no-underline" on:click={navigate(slug)}>
    <div class="post-info">
      <h3 class="post-date">{dateFormat(post.date)}</h3>
      <h1 class="post-title">{post.title}</h1>
      <h2 class="post-description">{post.description}</h2>
    </div>
    <div class="post-tags">
      {#each post.tags as tag}
        <span class="post-tag">{tag}</span>
      {/each}
    </div>
  </div>
</div>

<style>
  .post-container {
    width: 100%;
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

  .post-tags {
    margin-top: 1rem;
    text-align: right;
  }

  .post-tag {
    font-family: var(--font-sans);
    padding: 3px 8px;
    background: rgba(var(--accent-color-rgb), 0.1);
    margin: 2px;
    margin-right: 2px;
    border-radius: 3px;
    color: rgba(var(--accent-color-rgb), 1);
    font-size: 0.85rem;
    font-weight: 200;
    text-transform: uppercase;
    margin-right: 0.25rem;
    letter-spacing: 1px;
  }

  .featured-star {
    position: absolute;
    top: 0;
    right: 0;
    padding: 6px;
  }

  .hovered {
    border-bottom: 1px solid var(--accent-color);
  }

  .unhovered {
    filter: grayscale(0.7);
    border-bottom: 1px solid rgba(var(--text-color-rgb), 0.1);
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
