<script>
  export let title = "Connor Rothschild";
  export let description = "I tell visual stories on the web.";
  export let keywords = "web design, data science, data visualization";
  export let image = "https://connorr.netlify.app/social.png";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@CL_Rothschild" />
  <meta name="twitter:creator" content="@CL_Rothschild" />
  <meta name="twitter:image" content={image} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="title" property="og:title" content={title} />
  <meta name="description" property="og:description" content={description} />
  <meta name="image" property="og:image" content={image} />
  <meta name="keywords" content={keywords} />
  <meta name="topic" content={keywords} />
  <meta name="language" content="EN" />
  <meta name="robots" content="index, follow" />
  <meta name="abstract" content={description} />
  <meta name="summary" content={description} />
  <meta name="author" content="Connor Rothschild" />
  <meta name="url" content="http://www.connorrothschild.com" />
</svelte:head>
