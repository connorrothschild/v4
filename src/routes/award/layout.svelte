<script>
  import CornerTitle from "$lib/Text/CornerTitle.svelte";
  import Transition from "$lib/Transition.svelte";
  import BackTo from "$lib/BackTo.svelte";

  import { seo } from "$lib/store";

  export let title;
  export let description;
  export let media_url;
  export let date;

  let image = `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${description}&theme=light&md=true&hasImage=true`;

  // META TAGS
  $seo = {
    title: title,
    description: description,
    image: image,
  };

  import { dateFormat } from "../../scripts/utils.js";
</script>

<Transition />
<CornerTitle {title} subtitle={dateFormat(date)} />
<main>
  <BackTo
    href="/award"
    text="Awards"
    classes="page-overline transition-subtitle"
  />

  <h1 class="page-title transition-title">{title}</h1>
  <div class="content transition-content">
    <slot />

    <p class="media-link">
      <a href={media_url} target="_blank">See media here.</a>
    </p>
    <BackTo href="/award" text="Back to all awards" classes="border-top" />
  </div>
</main>

<style>
  main {
    max-width: 768px;
    margin: 0 auto;
    padding: 1em;
    width: 90%;
    margin-bottom: 2rem;
  }

  .media-link {
    /* font-size: 1.5rem; */
    /* margin-bottom: 1rem; */
    /* text-align: center; */
    /* font-family: var(--font-serif); */
  }
</style>
