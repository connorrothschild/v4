<script>
  import Transition from "$lib/Transitions/Content.svelte";
  import BackTo from "$lib/Text/BackTo.svelte";

  import { seo } from "$lib/store";

  export let title;
  export let description;

  $seo = {
    title: title,
    description: description,
  };
</script>

<Transition />
<main>
  <BackTo href="/award" text="Awards" classes="page-overline" />

  <h1 class="page-title">{title}</h1>
  <div class="content">
    <slot />
    <BackTo href="/award" text="Back to all awards" classes="border-top" />
  </div>
</main>

<style>
  main {
    max-width: 768px;
    margin: 0 auto;
    padding: 1em;
    width: 90vw;
  }

  .content {
    margin-bottom: 4rem;
  }
</style>
