<script>
  import { seo } from "./store";
</script>

<svelte:head>
  <title>{$seo.title}</title>
  <meta name="description" content={$seo.description} />
</svelte:head>
