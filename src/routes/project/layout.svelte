<script>
  import CornerTitle from "$lib/Text/CornerTitle.svelte";
  import Transition from "$lib/Transition.svelte";
  import BackTo from "$lib/BackTo.svelte";

  import { seo } from "$lib/store";

  export let title;
  export let description;
  export let date;

  let image = `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${description}&theme=light&md=true&hasImage=true`;

  // META TAGS
  $seo = {
    title: title,
    description: description,
    image: image,
  };

  import { dateFormat } from "../../scripts/utils.js";

  import IntersectionObserver from "svelte-intersection-observer";
  let element, intersecting;
</script>

<Transition split={"words"} />
<CornerTitle {title} subtitle={dateFormat(date)} {intersecting} />
<main>
  <IntersectionObserver {element} bind:intersecting rootMargin="-60px">
    <div class="top-level" bind:this={element}>
      <BackTo
        href="/project"
        text="Projects"
        classes="page-overline transition-content"
      />
      <h1 class="content-title uppercase transition-title overflow-hidden">
        {title}
      </h1>
      <h1 class="content-description transition-subtitle overflow-hidden">
        {description}
      </h1>
    </div>
  </IntersectionObserver>
  <div class="project main-content transition-content">
    <slot />
    <BackTo href="/project" text="Back to all projects" classes="border-top" />
  </div>
</main>

<style>
</style>
