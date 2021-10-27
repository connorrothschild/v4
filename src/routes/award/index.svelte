<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, fetch, session }) {
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
  import AwardSection from "$lib/AwardSection.svelte";
  import Transition from "$lib/Transition.svelte";

  export let awards;

  // Sort by featured first, and if featured is the same (both false), then sort by date
  awards.sort((a, b) => {
    if (b.metadata.featured && !a.metadata.featured) return 1;
    if (!b.metadata.featured && a.metadata.featured) return -1;
    if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date)) return 1;
    if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date)) return -1;
  });

  import { seo } from "$lib/store.js";
  $seo = {
    title: "Awards | Connor Rothschild",
    description: "Some of my awards.",
  };

  console.log(awards);
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
</style>
