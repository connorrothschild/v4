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
</script>

<Transition />
<CornerTitle {title} subtitle={dateFormat(date)} />
<main>
  <BackTo
    href="/project"
    text="Projects"
    classes="page-overline transition-subtitle"
  />
  <h1 class="page-title transition-title overflow-hidden">{title}</h1>
  <div class="project transition-content">
    <slot />
    <BackTo href="/project" text="Back to all projects" classes="border-top" />
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

  /* .date {
    font-weight: 300;
    margin-top: -1rem;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--accent-color);
    padding-bottom: 1rem;
  } */
</style>
