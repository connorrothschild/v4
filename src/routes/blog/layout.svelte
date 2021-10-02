<script>
  import { seo } from "$lib/store";

  export let title;
  export let description;
  export let date;

  $seo = {
    title: title,
    description: description,
  };

  const dateFormat = (date) => {
    const parsed = new Date(date);
    const month = parsed.toLocaleString("default", { month: "long" });
    const year = parsed.getUTCFullYear();

    return `${month} ${year}`;
  };
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<main>
  <div class="post-container">
    <h1 class="page-title no-border">{title}</h1>
    <div class="date border-bottom">
      {dateFormat(date)} | 1 minute read (if you're fast)
    </div>
    <div class="post">
      <slot />
    </div>
    <a
      class="footer border-top no-underline block"
      sveltekit:prefetch
      href="/blog">&#8592; Back to all posts</a
    >
  </div>
</main>

<style>
  main {
    background: var(--secondary-color);
  }

  .post-container {
    max-width: 768px;
    margin: 0 auto;
    padding: 1em;
    width: 90vw;
  }

  .post {
    margin-bottom: 1rem;
  }

  .date {
    font-weight: 200;
    margin-top: -2rem;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    letter-spacing: 0.64px;
  }

  .footer {
    padding: 1rem 0 2rem 0;
  }
</style>
