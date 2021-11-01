<script>
  import { fly, fade } from "svelte/transition";
  import IntersectionObserver from "svelte-intersection-observer";

  import BlogSection from "$lib/Content/Blog.svelte";

  export let posts;
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

  let element;
  let intersecting;
</script>

<IntersectionObserver {element} bind:intersecting>
  <section bind:this={element}>
    <!-- {#if intersecting} -->
    <div transition:fly={{ x: -50 }}>
      <!-- <div transition:fade> -->
      <div class="sticky-top">
        <div class="see-all-flex">
          <h1 class="page-overline">Blog</h1>
          <a class="page-overline padding-bottom" href="/post"
            >See all posts &#8599;</a
          >
        </div>
        <h1 class="page-title home">
          Posts I've
          <span class="gradient-accented bolded">written</span>​
        </h1>
      </div>
      <div class="posts-grid">
        {#each filteredPosts as post, index}
          <BlogSection
            post={post.metadata}
            slug={post.path.replace(/\.[^/.]+$/, "")}
            {index}
            bind:anyHovered
          />
        {/each}
      </div>
    </div>
    <!-- {/if} -->
  </section>
</IntersectionObserver>

<style>
  section {
    width: 95%;
    max-width: 1268px;
    margin: auto;
    padding: 1rem;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-auto-rows: 1fr; */
    grid-gap: 10px;
    width: 99%;
    margin: auto;
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
    }
  }
</style>
