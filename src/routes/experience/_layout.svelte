<script>
  import Transition from "$lib/Transition.svelte";
  import BackTo from "$lib/BackTo.svelte";

  export let name;
  export let description;
  export let imageUrl;

  import Seo from "$lib/Seo.svelte";
  let image = `https://og-image-eight-eta.vercel.app/Connor Rothschild | ${name}.png?subtitle=Some details about my work experience at ${name}.&theme=light&md=true&hasImage=true`;

  import IntersectionObserver from "svelte-intersection-observer";
  let element, intersecting;
</script>

<Transition split={"words"} stagger={0.07} />
<Seo title={name} {description} {image} />
<main>
  <IntersectionObserver {element} bind:intersecting>
    <div class="top-level" bind:this={element}>
      <BackTo
        href="/experience"
        text="Experience"
        classes="page-overline transition-content"
      />

      <h1 class="content-title uppercase transition-title ">
        {name}
        <img
          loading="lazy"
          src={imageUrl ? `/images/jobs/${imageUrl}.svg` : ""}
          alt="Logo for {name}"
          class="logo"
        />
      </h1>
    </div>
  </IntersectionObserver>
  <div class="main-content transition-content">
    <div class="content">
      <slot />
      <BackTo href="/experience" text="Back to all jobs" classes="border-top" />
    </div>
  </div>
</main>

<style>
  .logo {
    height: 0.75em;
    transition: transform 500ms ease;
  }

  .logo:hover {
    transform: rotate(360deg);
  }
</style>
