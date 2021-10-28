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
</script>

<Transition />
<section>
  <div class="sticky-top">
    <h1 class="page-overline">Awards</h1>
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
        {index}
      />
    {/each}
  </div>
</section>

<style>
  section {
    min-height: 70vh;
  }
</style>
