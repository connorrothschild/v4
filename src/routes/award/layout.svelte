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

      <h1 class="content-title uppercase transition-title overflow-hidden">
        {title}
      </h1>
      <h1 class="content-description transition-subtitle overflow-hidden">
        {organization}, {dateFormat(date)}
      </h1>
    </div>
  </IntersectionObserver>
  <div class="content main-content transition-content">
    <slot />

    <p class="media-link">
      <a href={media_url} target="_blank" rel="noopener noreferrer"
        >See media here.</a
      >
    </p>
    <BackTo href="/award" text="Back to all awards" classes="border-top" />
  </div>
</main>

<style>
</style>
