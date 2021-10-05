<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch }) {
    const res = await fetch(`/posts.json`);
    const posts = await res.json();

    return {
      props: {
        posts,
      },
    };
  }
</script>

<script>
  import BlogSection from "$lib/BlogSection.svelte";
  import { paginate, PaginationNav } from "svelte-paginate";
  import { seo } from "$lib/store.js";
  //https://www.npmjs.com/package/svelte-paginate

  export let posts;

  let filteredPosts = posts
    .filter((d) => d.metadata.draft != true && d.metadata.archived != true)
    .sort((a, b) => Date.parse(b.metadata.date) - Date.parse(a.metadata.date))
    .sort((a, b) => b.metadata.featured);

  $seo = {
    title: "Connor Rothschild",
    description: "Description",
  };

  let anyHovered = false;
</script>

<main>
  <h1 class="page-overline">Blog</h1>
  <h1 class="page-title">
    What I've
    <span class="accented bolded">written</span>​
  </h1>
  <div class="post-grid">
    {#each filteredPosts as post}
      <BlogSection
        post={post.metadata}
        slug={post.path.replace(/\.[^/.]+$/, "")}
        bind:anyHovered
      />
    {/each}
    <!-- {#if items.length > pageSize}
      <PaginationNav
        totalItems={items.length}
        {pageSize}
        {currentPage}
        limit={1}
        showStepOptions={true}
        on:setPage={(e) => (currentPage = e.detail.page)}
      />
    {/if} -->
  </div>
</main>

<style>
  main {
    /* width: 100%; */
    max-width: 860px;
    margin: 0 auto;
    padding: 1em;
  }

  .post-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* grid-gap: 15px; */
  }

  @media screen and (max-width: 668px) {
    .post-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
