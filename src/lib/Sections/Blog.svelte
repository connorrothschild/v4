<script>
  export let isMobile;
  export let posts;

  import { fly, fade } from "svelte/transition";
  import IntersectionObserver from "svelte-intersection-observer";

  import BlogSection from "$lib/Content/Blog.svelte";
  import Transition from "$lib/Transition.svelte";
  import SectionTitle from "$lib/Text/SectionTitle.svelte";

  let anyHovered = false;

  let filteredPosts = posts
    .filter((d) => !d.metadata.draft && !d.metadata.archived)
    // Sort by featured first, and if featured is the same (both false), then sort by date
    .sort((a, b) => {
      if (b.metadata.featured && !a.metadata.featured) return 1;
      if (!b.metadata.featured && a.metadata.featured) return -1;
      if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date)) return 1;
      if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date)) return -1;
    });

  $: finalPosts = isMobile
    ? filteredPosts.filter((d) => d.metadata.featured)
    : filteredPosts;

  let element;
  let intersecting;
</script>

<IntersectionObserver {element} bind:intersecting>
  <section bind:this={element}>
    <div class="sticky-top">
      <div class="see-all-flex">
        <h1 class="page-overline">
          {isMobile ? "Selected blog posts" : "Blog"}
        </h1>
        <a
          class="page-overline padding-bottom see-all"
          sveltekit:prefetch
          href="/post">See all posts &#8599;</a
        >
      </div>
      <SectionTitle {intersecting} element="#posts-title">
        <h1 id="posts-title" class="page-title home overflow-hidden">
          Posts I've
          <span class="gradient-accented bolded">written</span>​
        </h1>
      </SectionTitle>
    </div>
    <div class="posts-grid">
      {#each finalPosts as post, index}
        <BlogSection
          post={post.metadata}
          slug={post.path.replace(/\.[^/.]+$/, "")}
          {index}
          bind:anyHovered
        />
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

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-auto-rows: 1fr; */
    grid-gap: 10px;
    width: 99%;
    margin: auto;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 1000px) {
    .posts-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 700px) {
    .posts-grid {
      grid-template-columns: auto;
      grid-template-rows: repeat(1, 1fr);
      grid-auto-rows: auto;
    }
  }
</style>
