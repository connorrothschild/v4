<script>
  import CornerTitle from "$lib/Text/CornerTitle.svelte";
  import Transition from "$lib/Transition.svelte";
  import BackTo from "$lib/BackTo.svelte";

  export let title;
  export let organization;
  export let media_url;
  export let date;

  import Seo from "$lib/Seo.svelte";
  let image = `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${organization}, ${date}&theme=light&md=true&hasImage=true`;

  import { dateFormat } from "../../scripts/utils.js";

  import IntersectionObserver from "svelte-intersection-observer";
  let element, intersecting;
</script>

<Transition split={"words"} stagger={0.07} />
<Seo
  title={`${title} | Connor Rothschild`}
  description={`${organization}, ${date}`}
  {image}
/>
<CornerTitle {title} subtitle={dateFormat(date)} {intersecting} />
<main>
  <IntersectionObserver {element} bind:intersecting rootMargin="-60px">
    <div class="top-level" bind:this={element}>
      <BackTo
        href="/award"
        text="Awards"
        classes="page-overline transition-content"
      />

      <h1
        class="content-title uppercase transition-title"
        style="margin-bottom: 1rem;"
      >
        {@html title}
      </h1>
      <h2 class="content-description overflow-hidden flex">
        <div class="misc transition-subtitle ">
          <span style="display: block; font-weight: 600; margin-bottom: .25rem;"
            >{organization}</span
          >
          <span
            style="display: block; font-weight: 300; text-transform: uppercase; font-size: 1.05rem;"
            >{dateFormat(date)}</span
          >
        </div>
        <a
          href={media_url}
          target="_blank"
          rel="noopener noreferrer"
          class="media transition-subtitle">See media &rarr;</a
        >
      </h2>
    </div>
  </IntersectionObserver>
  <div class="content main-content transition-content">
    <slot />
    <BackTo href="/award" text="Back to all awards" classes="border-top" />
  </div>
</main>

<style>
  .flex {
    display: flex;
    justify-content: space-between;
    place-items: center;
    padding-top: 2rem;
    margin-top: 0;
  }

  .misc {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .media {
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

  .media:hover {
    border-radius: 0;
  }

  @media screen and (max-width: 1068px) {
    .media {
      font-size: 2rem;
      padding: 1rem 4rem;
    }
  }

  @media screen and (max-width: 568px) {
    .flex {
      display: flex;
      flex-direction: column;
      place-items: unset;
      padding-top: 1rem;
    }
    .misc {
      margin-bottom: 2rem;
    }
    .media {
      font-size: 1.5rem;
      padding: 1rem 2rem;
      margin-top: 0;
      text-align: right;
      align-self: flex-end;
    }
  }
</style>
