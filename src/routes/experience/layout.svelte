<script>
  import { onMount } from "svelte";
  import { seo } from "$lib/store";

  export let name;
  export let description;
  // export let imageUrl;

  $seo = {
    title: name,
    description: description,
  };
</script>

<main>
  <h1 class="page-title">{name}</h1>
  <div class="post">
    <slot />
  </div>
  <a class="border-top no-underline block" sveltekit:prefetch href="/experience"
    >&#8592; Back to all jobs</a
  >
</main>

<style>
  main {
    max-width: 768px;
    margin: 0 auto;
    padding: 1em;
    width: 90vw;
  }

  .post {
    margin-bottom: 4rem;
  }

  .date {
    font-weight: 300;
    margin-top: -1rem;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--accent-color);
    padding-bottom: 1rem;
  }
</style>
