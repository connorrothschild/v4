<script>
  import CornerTitle from "$lib/Text/CornerTitle.svelte";
  import Transition from "$lib/Transition.svelte";
  import BackTo from "$lib/BackTo.svelte";

  import { seo } from "$lib/store";

  export let title;
  export let organization;
  export let media_url;
  export let date;

  let image = `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${organization}, ${date}&theme=light&md=true&hasImage=true`;

  // META TAGS
  $seo = {
    title: title,
    image: image,
  };

  import { dateFormat } from "../../scripts/utils.js";

  import IntersectionObserver from "svelte-intersection-observer";
  let element, intersecting;
</script>

<Transition split={"words"} />
<CornerTitle
  {title}
  subtitle={dateFormat(date)}
  {intersecting}
  rootMargin="-60px"
/>
<main>
  <IntersectionObserver {element} bind:intersecting rootMargin="-60px">
    <div class="top-level" bind:this={element}>
      <BackTo
        href="/award"
        text="Awards"
        classes="page-overline transition-content"
      />

      <h1 class="content-title uppercase transition-title">
        {@html title}
      </h1>
      <h2 class="content-description transition-subtitle overflow-hidden">
        <span style="display: block; font-weight: 600;">{organization}</span>
        <span
          style="display: block; font-weight: 300; text-transform: uppercase; font-size: 1.25rem;"
          >{dateFormat(date)}</span
        >
      </h2>
    </div>
  </IntersectionObserver>
  <div class="content main-content transition-content">
    <slot />

    <p class="media-link">
      <a href={media_url} target="_blank" rel="noopener noreferrer"
        >See media &rarr;</a
      >
    </p>
    <BackTo href="/award" text="Back to all awards" classes="border-top" />
  </div>
</main>

<style>
  .media-link {
    text-align: right;
    font-family: var(--font-serif);
  }
</style>
