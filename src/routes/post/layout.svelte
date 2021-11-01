<script>
  import Transition from "$lib/Transition.svelte";
  import CornerTitle from "$lib/Text/CornerTitle.svelte";
  import BackTo from "$lib/BackTo.svelte";

  import { seo } from "$lib/store";
  import { dateFormat } from "../../scripts/utils.js";

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
</script>

<Transition />
<CornerTitle {title} subtitle={dateFormat(date)} />
<main>
  <BackTo
    href="/post"
    text="Blog"
    classes="page-overline transition-subtitle"
  />
  <h1 class="page-title no-border transition-title">{title}</h1>
  <div class="date border-bottom transition-content">
    {dateFormat(date)} | 1 minute read (if you're fast)
  </div>
  <div class="transition-content">
    <div class="content">
      <slot />
      <BackTo href="/post" text="Back to all posts" classes="border-top" />
    </div>
  </div>
</main>

<style>
  main {
    /* background: var(--secondary-color); */
    max-width: 768px;
    margin: 0 auto;
    padding: 1em;
    width: 90%;
    margin-bottom: 2rem;
  }

  .date {
    font-weight: 100;
    margin-top: -1.25rem;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    letter-spacing: 0.64px;
    color: var(--text-color);
  }
</style>
