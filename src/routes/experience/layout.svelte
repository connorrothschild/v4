<script>
  import Transition from "$lib/Transition.svelte";
  import BackTo from "$lib/BackTo.svelte";

  import { seo } from "$lib/store";

  export let name;
  export let description;
  export let imageUrl;

  let image = `https://og-image-eight-eta.vercel.app/Connor Rothschild | ${name}.png?subtitle=Some details about my work experience at ${name}.&theme=light&md=true&hasImage=true`;

  // META TAGS
  $seo = {
    title: name,
    description: description,
    image: image,
  };
</script>

<Transition />
<main>
  <BackTo
    href="/experience"
    text="Experience"
    classes="page-overline transition-subtitle"
  />

  <h1 class="page-title transition-title">
    {name}
    <img
      src={`/images/jobs/${imageUrl}.svg`}
      alt="Logo for {name}"
      class="logo"
    />
  </h1>
  <div class="transition-content">
    <div class="content">
      <slot />
      <BackTo href="/experience" text="Back to all jobs" classes="border-top" />
    </div>
  </div>
</main>

<style>
  main {
    max-width: 860px;
    margin: 0 auto;
    padding: 1em;
    width: 90%;
    margin-bottom: 2rem;
  }

  .logo {
    height: 0.75em;
    transition: transform 500ms ease;
  }

  .logo:hover {
    transform: rotate(360deg);
  }
</style>
