<script>
  import BackTo from "$lib/text/BackTo.svelte";
  import { seo } from "$lib/store";

  export let title;
  export let description;

  $seo = {
    title: title,
    description: description,
  };
</script>

<main>
  <BackTo href="/project" text="Projects" classes="page-overline" />
  <h1 class="page-title">{title}</h1>
  <div class="project">
    <slot />
    <BackTo href="/project" text="Back to all projects" classes="border-top" />
  </div>
</main>

<style>
  main {
    max-width: 768px;
    margin: 0 auto;
    padding: 1em;
    width: 90vw;
  }

  .project {
    margin-bottom: 4rem;
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
