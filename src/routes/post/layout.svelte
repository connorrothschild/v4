<script>
  import Transition from "$lib/Transition.svelte";
  import BackTo from "$lib/BackTo.svelte";

  import { seo } from "$lib/store";
  import { dateFormat } from "../../scripts/utils.js";

  import { page } from "$app/stores";
  export let title;
  export let description;
  export let date;

  let slug = $page.path;

  const options = [
    { setting: "theme", value: "two_up" },
    { setting: "mode", value: "light" },
    { setting: "color", value: "C5516C" },
    { setting: "pattern", value: "diagonal_lines" },
    { setting: "image", value: "92b91df8" },
    { setting: "hide_watermark", value: "true" },
    { setting: "url", value: "https://connorrothschild.com" },
  ];

  let image =
    "https://mugshotbot.com/m?" +
    options.map((o) => o.setting + "=" + o.value).join("&") +
    slug;

  // META TAGS
  $seo = {
    title: title,
    description: description,
    image: image,
  };
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="og:title" content={title} />
  <meta name="twitter:title" content={title} />
  <meta name="description" content={description} />
  <meta name="twitter:description" content={description} />
  <meta property="og:image" content={image} />
  <meta property="twitter:image" content={image} />
  <meta property="twitter:card" content="summary_large_image" />
</svelte:head>

<Transition />
<main>
  <BackTo
    href="/post"
    text="Blog"
    classes="page-overline transition-subtitle"
  />
  <h1 class="page-title no-border transition-title">{title}</h1>
  <div class="date border-bottom transition-content">
    {dateFormat(date)} | 1 minute read (if you're fast)
  </div>
  <div class="transition-content">
    <div class="content">
      <slot />
      <BackTo href="/post" text="Back to all posts" classes="border-top" />
    </div>
  </div>
</main>

<style>
  main {
    /* background: var(--secondary-color); */
    max-width: 860px;
    margin: 0 auto;
    padding: 1em;
    width: 90%;
    margin-bottom: 2rem;
  }

  .date {
    font-weight: 100;
    margin-top: -1.25rem;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    letter-spacing: 0.64px;
    color: var(--text-color);
  }
</style>
