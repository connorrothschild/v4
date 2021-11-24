<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch }) {
    const res = await fetch(`/awards.json`);
    const awards = await res.json();

    return {
      props: {
        awards,
      },
    };
  }
</script>

<script>
  import AwardSection from "$lib/Content/Award.svelte";
  import Transition from "$lib/Transition.svelte";
  import BackTo from "$lib/BackTo.svelte";

  export let awards;

  // Sort by featured first, and if featured is the same (both false), then sort by date
  awards.sort((a, b) => {
    // if (b.metadata.featured && !a.metadata.featured) return 1;
    // if (!b.metadata.featured && a.metadata.featured) return -1;
    if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date)) return 1;
    if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date)) return -1;
  });

  let anyHovered;

  import { seo } from "$lib/store.js";
  let title = "Awards • Connor Rothschild";
  let description = "Some of my awards.";

  $seo = {
    title: title,
    description: description,
    image: `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${description}&theme=light&md=true&hasImage=true`,
  };
</script>

<Transition />
<main>
  <!-- <h1 class="page-overline transition-subtitle">Awards I’ve won</h1> -->
  <BackTo
    href="/"
    text="Home"
    classes="page-overline transition-content centered"
  />
  <h1 class="page-title transition-title overflow-hidden">
    Awards
    <!-- I’ve
    <span class="gradient-accented bolded ">won</span> -->
  </h1>

  <div class="awards-grid transition-content">
    {#each awards as award}
      <AwardSection
        award={award.metadata}
        slug={award.path.replace(/\.[^/.]+$/, "")}
        bind:anyHovered
      />
    {/each}
  </div>
</main>

<style>
  main {
    max-width: 860px;
    margin: 0 auto;
    padding: 1rem;
    width: 95%;
    margin-bottom: 4rem;
    margin-top: var(--nav-height);
  }
</style>
