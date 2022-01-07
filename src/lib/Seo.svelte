<script>
  import { seo } from "./seo.js";
</script>

<svelte:head>
  <title>{$seo.title}</title>
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@CL_Rothschild" />
  <meta name="twitter:creator" content="@CL_Rothschild" />
  <meta name="twitter:image" content={$seo.image} />
  <meta name="twitter:title" content={$seo.title} />
  <meta name="twitter:description" content={$seo.description} />
  <meta name="title" property="og:title" content={$seo.title} />
  <meta
    name="description"
    property="og:description"
    content={$seo.description}
  />
  <meta name="image" property="og:image" content={$seo.image} />
  <meta name="keywords" content={$seo.keywords} />
  <meta name="topic" content={$seo.keywords} />
  <meta name="language" content="EN" />
  <meta name="robots" content="index, follow" />
  <meta name="abstract" content={$seo.description} />
  <meta name="summary" content={$seo.description} />
  <meta name="author" content="Connor Rothschild" />
  <meta name="url" content="http://www.connorrothschild.com" />
</svelte:head>
