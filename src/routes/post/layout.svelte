<script>
  import BackTo from "$lib/text/BackTo.svelte";

  import { seo } from "$lib/store";
  import { dateFormat } from "../../scripts/utils.js";

  export let title;
  export let description;
  export let date;

  $seo = {
    title: title,
    description: description,
  };
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<main>
  <!-- <div class="post-container"> -->
  <BackTo href="/post" text="Blog" classes="page-overline" />
  <h1 class="page-title no-border">{title}</h1>
  <div class="date border-bottom">
    {dateFormat(date)} | 1 minute read (if you're fast)
  </div>
  <div class="post">
    <slot />
    <BackTo href="/post" text="Back to all posts" classes="border-top" />
  </div>
  <!-- </div> -->
</main>

<style>
  main {
    /* background: var(--secondary-color); */
    max-width: 768px;
    margin: 0 auto;
    padding: 1em;
    /* width: 90vw; */
  }

  .post {
    margin-bottom: 4rem;
  }

  .date {
    font-weight: 200;
    margin-top: -2rem;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    letter-spacing: 0.64px;
  }
</style>
