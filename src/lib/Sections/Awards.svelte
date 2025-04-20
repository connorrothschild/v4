<script>
  export let isMobile;
  export let awards;

  import { fly, fade } from "svelte/transition";
  import IntersectionObserver from "svelte-intersection-observer";

  import AwardSection from "$lib/Content/Award.svelte";
  import SectionTitle from "$lib/Text/SectionTitle.svelte";
  import { base } from "$app/paths";

  let element;
  let intersecting;

  // Sort by featured first, and if featured is the same (both false), then sort by date
  awards.sort((a, b) => {
    // if (b.metadata.featured && !a.metadata.featured) return 1;
    // if (!b.metadata.featured && a.metadata.featured) return -1;
    if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date)) return 1;
    if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date)) return -1;
  });

  $: filteredAwards = isMobile
    ? awards.filter((d) => d.metadata.featured)
    : awards;

  let anyHovered;
</script>

<IntersectionObserver {element} bind:intersecting>
  <section bind:this={element} id="awards">
    <div class="see-all-flex">
      <h1 class="page-overline">
        <!-- {isMobile ? "Selected awards" : "Awards"} -->
        02. Selected awards
      </h1>
      <a
        class="page-overline padding-bottom see-all"
        sveltekit:prefetch
        href="/award">See all awards &#8599;</a
      >
    </div>
    <SectionTitle {intersecting} element="#awards-title">
      <h1 id="awards-title" class="section-title overflow-hidden">
        Awards I’ve
        <span class="gradient-accented bolded">won</span>
      </h1>
    </SectionTitle>

    <div class="awards-grid">
      {#each filteredAwards as award}
        <div>
          <AwardSection
            award={award.metadata}
            slug={award.path
              .replace(/\.[^/.]+$/, "")
              .replace("./", "/")
              .replace("+page", "")}
            bind:anyHovered
          />
        </div>
      {/each}
    </div>
  </section>
</IntersectionObserver>

<style>
  section {
    width: 95%;
    max-width: 1168px;
    margin: auto;
    margin-bottom: var(--section-margin-bottom);
  }
</style>
