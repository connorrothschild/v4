<script>
  import Transition from "$lib/Transition.svelte";
  import CornerTitle from "$lib/Text/CornerTitle.svelte";
  import BackTo from "$lib/BackTo.svelte";

  import { seo } from "$lib/store";
  import { dateFormat } from "../../scripts/utils.js";

  export let title;
  export let description;
  export let date;
  export let tags;

  let image = `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${description}&theme=light&md=true&hasImage=true`;

  // META TAGS
  $seo = {
    title: title,
    description: description,
    image: image,
  };

  import IntersectionObserver from "svelte-intersection-observer";
  let element, intersecting;
</script>

<Transition split={"words"} />
<CornerTitle {title} subtitle={dateFormat(date)} {intersecting} />
<main>
  <IntersectionObserver {element} bind:intersecting rootMargin="-60px">
    <div class="top-level" bind:this={element}>
      <BackTo
        href="/post"
        text="Blog"
        classes="page-overline transition-subtitle"
      />
      <h1 class="content-title uppercase transition-title overflow-hidden">
        {title}
      </h1>
      <div class="content-flex">
        <h2
          class="description transition-content content-description overflow-hidden"
        >
          {description}
        </h2>
        <div
          class="misc transition-content content-description overflow-hidden"
        >
          <h2 class="date">{dateFormat(date)}</h2>
          <div class="tags">
            {#if tags}
              {#each tags as tag}
                <span class="tag">{tag}</span>
              {/each}
            {/if}
          </div>
        </div>
      </div>
    </div>
  </IntersectionObserver>
  <div class="main-content transition-content">
    <div class="content">
      <slot />
      <BackTo href="/post" text="Back to all posts" classes="border-top" />
    </div>
  </div>
</main>

<style>
  .content-flex {
    display: flex;
    place-items: center;
  }

  .content-flex .description {
    flex: 2;
  }

  .content-flex .misc {
    flex: 1;
  }

  .date,
  .tags {
    text-transform: uppercase;
    color: var(--text-color);
  }

  .date {
    font-family: var(--font-serif);
    font-weight: 200;
    font-size: 1.5rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1rem;
  }

  .tag {
    font-size: 0.9rem;
    margin: 0.5rem 0 0 0.5rem;
    background: rgba(var(--accent-color-rgb), 0.2);
    padding: 0.45rem 0.55rem;
    border-radius: 2px;
    letter-spacing: 0.05rem;
  }

  @media screen and (max-width: 768px) {
    .content-flex {
      flex-direction: column;
    }
    .content-flex .description {
      margin-bottom: 2rem;
    }
    .content-flex .misc {
      display: flex;
      flex-direction: row;
      place-items: center;
      justify-content: space-between;
    }
    .tags,
    .tag {
      margin-top: 0;
    }
  }

  @media screen and (max-width: 468px) {
    .content-flex .description {
      margin-bottom: 1rem;
    }
    .content-flex .misc {
      flex-direction: column-reverse;
    }
    .date {
      font-size: 1rem;
    }
    .tags {
      margin-bottom: 1rem;
    }
    .tag {
      font-size: 0.7rem;
    }
  }
</style>
