<script>
  import { seo } from "./store";
</script>

<svelte:head>
  <title>{$seo.title}</title>
  <meta name="og:title" content={$seo.title} />
  <meta name="twitter:title" content={$seo.title} />
  <meta name="description" content={$seo.description} />
  <meta name="twitter:description" content={$seo.description} />
  <meta property="og:image" content={$seo.image} />
  <meta property="twitter:image" content={$seo.image} />
  <meta property="twitter:card" content="summary_large_image" />
</svelte:head>
