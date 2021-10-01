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

  // let items = posts;
  // let currentPage = 1;
  // let pageSize = 5;
  // $: paginatedItems = paginate({ items, pageSize, currentPage });

  $seo = {
    title: "Connor Rothschild",
    description: "Description",
  };
</script>

<main>
  <h1 class="page-overline">Blog</h1>
  <h1 class="page-title">
    What I've
    <span class="accented bolded">written</span>​
  </h1>
  <div class="post-grid">
    {#each posts as post}
      <BlogSection
        post={post.metadata}
        slug={post.path.replace(/\.[^/.]+$/, "")}
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
    grid-gap: 15px;
  }
</style>
