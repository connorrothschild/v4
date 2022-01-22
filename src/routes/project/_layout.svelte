<script>
  import CornerTitle from "$lib/Text/CornerTitle.svelte";
  import Transition from "$lib/Transition.svelte";
  import BackTo from "$lib/BackTo.svelte";

  export let title;
  export let description;
  export let date;
  export let techstack;
  export let url;

  import Seo from "$lib/Seo.svelte";
  let image = `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${description}&theme=light&md=true&hasImage=true`;

  import { dateFormat } from "../../scripts/utils.js";

  import IntersectionObserver from "svelte-intersection-observer";
  let element, intersecting;
</script>

<Transition split={"words"} stagger={0.07} />
<Seo title={`${title} | Connor Rothschild`} {description} {image} />
<CornerTitle {title} subtitle={dateFormat(date)} {intersecting} />
<main>
  <IntersectionObserver {element} bind:intersecting rootMargin="-60px">
    <div class="top-level" style="max-width: none;" bind:this={element}>
      <BackTo
        href="/project"
        text="Projects"
        classes="page-overline transition-content"
      />
      <h1 class="content-title uppercase transition-title">
        {@html title}
      </h1>
      <div class="transition-content misc overflow-hidden content-description">
        <div class="two-thirds">
          <h2 class="description">
            {@html description}
          </h2>
          {#if techstack}
            <div class="tags">
              {#each techstack as tech}
                <span class="tag">{tech}</span>
              {/each}
            </div>
          {/if}
        </div>
        <h2 class="one-third">
          <a
            class="live-site"
            target="_blank"
            rel="noopener noreferrer"
            href={url}>Live site &rarr;</a
          >
        </h2>
      </div>
    </div>
  </IntersectionObserver>
  <div class="project main-content transition-content">
    <slot />
    <BackTo href="/project" text="Back to all projects" classes="border-top" />
  </div>
</main>

<style>
  .misc {
    display: flex;
    place-items: center;
    justify-content: space-between;
    height: 100%;
    overflow: visible;
  }

  .description {
    font-weight: 200;
    user-select: none;
    /* font-size: 1.75rem; */
  }

  .two-thirds {
    flex: 2;
  }

  .one-third {
    flex: 1;
  }

  .live-site {
    padding: 2rem;
    background: var(--semitransparent-bg);
    /* border-radius: 50%; */
    text-transform: uppercase;
    font-size: 2.5rem;
    /* font-weight: bold; */
    font-weight: 200;
    font-family: var(--font-serif);
    border-radius: 50%;
    transition: border-radius 500ms ease;
  }

  .live-site:hover {
    border-radius: 0;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    place-items: center;
    justify-content: center;
    margin-top: 1rem;
  }

  .tag {
    /* margin: .35rem .35rem 0 0;
    letter-spacing: .025rem;
    color: var(--text-color);
    font-size: 1.25rem;
    font-family: var(--font-serif);
    background: var(--semitransparent-bg);
    padding: .5rem;
    user-select: none; */
    font-size: 1.15rem;
    margin: 0.5rem 0 0 0.5rem;
    background: rgba(var(--accent-color-rgb), 0.2);
    padding: 0.45rem 0.55rem;
    border-radius: 2px;
    letter-spacing: 0.05rem;
    color: var(--text-color);
    /* text-transform: uppercase; */
    font-family: var(--font-serif);
  }

  @media screen and (max-width: 1068px) {
    .misc {
      flex-direction: column;
    }
    .one-third {
      margin-top: 4rem;
    }
    .live-site {
      font-size: 2rem;
      padding: 1rem 4rem;
    }
  }

  @media screen and (max-width: 568px) {
    .tag {
      font-size: 1rem;
      margin: 0.25rem 0 0 0.25rem;
    }
    .misc {
      align-items: flex-end;
    }
    .tags {
      justify-content: flex-end;
    }
    .one-third {
      margin-top: 2.5rem;
      margin-bottom: 1rem;
    }
    .live-site {
      font-size: 1.5rem;
      padding: 1rem 2rem;
      margin-top: 0;
      justify-content: flex-end;
    }
  }
</style>
