<script>
  import BackTo from "$lib/text/BackTo.svelte";

  import { seo } from "$lib/store";

  export let name;
  export let description;
  export let imageUrl;

  $seo = {
    title: name,
    description: description,
  };
</script>

<main>
  <BackTo href="/experience" text="Experience" classes="page-overline" />

  <h1 class="page-title">
    {name}
    <img
      src={`/images/jobs/${imageUrl}.svg`}
      alt="Logo for {name}"
      class="logo"
    />
  </h1>
  <div class="post">
    <slot />
    <BackTo href="/experience" text="Back to all jobs" classes="border-top" />
  </div>
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

  .logo {
    height: 0.75em;
    transition: transform 500ms ease;
  }

  .logo:hover {
    transform: rotate(360deg);
  }
</style>
