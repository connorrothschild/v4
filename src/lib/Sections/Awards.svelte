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
</script>

<Transition />
<section>
  <div class="sticky-top">
    <div class="see-all-flex">
      <h1 class="page-overline">Awards</h1>
      <a class="page-overline padding-bottom" href="/awards"
        >See all awards &#8599;</a
      >
    </div>
    <h1 class="page-title">
      Awards I've
      <span class="gradient-accented bolded ">won</span>
    </h1>
  </div>

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
</section>

<style>
  section {
    min-height: 70vh;
    padding: 1rem;
  }

  .awards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-auto-rows: 1fr; */
    grid-gap: 10px;
    margin-bottom: 10px;
    width: 99%;
    margin: auto;
  }

  @media screen and (max-width: 1000px) {
    .awards-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 700px) {
    .awards-grid {
      grid-template-columns: auto;
      grid-template-rows: repeat(1, 1fr);
    }
  }
</style>
