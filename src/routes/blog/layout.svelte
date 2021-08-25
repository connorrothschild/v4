<script>
  import { onMount } from "svelte";
  import { seo } from "$lib/store";

  export let title;
  export let description;
  export let date;

  $seo = {
    title: title,
    description: description,
  };
</script>

<main>
  <h1 class="page-title accented">{title}</h1>
  <div class="date">{date} | 1 minute read (if you're fast)</div>
  <div class="post">
    <slot />
  </div>
  <hr style="margin-bottom: 12px" />
  <a sveltekit:prefetch href="/blog">&#8592; Back to all posts</a>
</main>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<style>
  main {
    max-width: 860px;
    margin: 0 auto;
    padding: 1em;
    width: 90vw;
  }

  /* .blog-container {
    background: var(--secondary-color);
  } */

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
