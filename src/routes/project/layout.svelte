<script>
  import { seo } from "$lib/store";

  export let title;
  export let description;

  $seo = {
    title: title,
    description: description,
  };
</script>

<main>
  <h1 class="page-title">{title}</h1>
  <div class="project">
    <slot />
  </div>
  <a class="border-top no-underline block" sveltekit:prefetch href="/project"
    >&#8592; Back to all projects</a
  >
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
