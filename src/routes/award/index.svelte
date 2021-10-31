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

  export let awards;

  // Sort by featured first, and if featured is the same (both false), then sort by date
  awards.sort((a, b) => {
    if (b.metadata.featured && !a.metadata.featured) return 1;
    if (!b.metadata.featured && a.metadata.featured) return -1;
    if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date)) return 1;
    if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date)) return -1;
  });

  let anyHovered;

  import { seo } from "$lib/store.js";
  let title = "Awards | Connor Rothschild";
  let description = "Some of my awards.";

  $seo = {
    title: title,
    description: description,
    image: `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${description}&theme=light&md=true&hasImage=true`,
  };
</script>

<Transition />
<main>
  <h1 class="page-overline transition-subtitle">Awards</h1>
  <h1 class="page-title transition-title">
    Awards I've
    <span class="gradient-accented bolded ">won</span>
  </h1>

  <div class="awards-grid transition-content">
    {#each awards as award, index}
      <AwardSection
        award={award.metadata}
        slug={award.path.replace(/\.[^/.]+$/, "")}
        bind:anyHovered
        {index}
      />
    {/each}
  </div>
</main>

<style>
  main {
    width: 90vw;
    max-width: 860px;
    margin: 0 auto;
    padding: 1em;
    width: 90%;
    margin-bottom: 2rem;
  }

  .awards-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin-bottom: 10px;
    width: 99%;
    margin: auto;
  }

  @media screen and (max-width: 700px) {
    .awards-grid {
      grid-template-columns: auto;
      grid-template-rows: repeat(1, 1fr);
    }
  }
</style>
