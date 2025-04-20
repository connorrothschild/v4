<script>
  // throw new Error(
  //   "@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)"
  // );

  import AwardSection from "$lib/Content/Award.svelte";
  import Transition from "$lib/Transition.svelte";
  import BackTo from "$lib/BackTo.svelte";

  // export let awards;
  export let data;

  // Sort by featured first, and if featured is the same (both false), then sort by date
  data.awards.sort((a, b) => {
    // if (b.metadata.featured && !a.metadata.featured) return 1;
    // if (!b.metadata.featured && a.metadata.featured) return -1;
    if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date)) return 1;
    if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date)) return -1;
  });

  let anyHovered;

  import Seo from "$lib/Seo.svelte";
  import { base } from "$app/paths";
  let title = "Awards | Connor Rothschild";
  let description = "Some of my awards.";
  let image = `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${description}&theme=light&md=true&hasImage=true`;
</script>

<Transition />
<Seo {title} {description} {image} />
<main class="main">
  <BackTo
    href="/"
    text="Home"
    classes="page-overline transition-content centered"
  />
  <h1 class="page-title transition-title overflow-hidden">Awards</h1>

  <div class="awards-grid transition-content">
    {#each data.awards as award}
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
</main>

<style>
</style>
