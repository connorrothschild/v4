<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, fetch, session }) {
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
  import { slide } from "svelte/transition";
  import { linear } from "svelte/easing";

  import BlogSection from "$lib/BlogSection.svelte";
  import Transition from "$lib/Transition.svelte";

  export let posts;

  let filteredPosts = posts
    .filter((d) => d.metadata.draft != true && d.metadata.archived != true)
    // Sort by featured first, and if featured is the same (both false), then sort by date
    .sort((a, b) => {
      if (b.metadata.featured && !a.metadata.featured) return 1;
      if (!b.metadata.featured && a.metadata.featured) return -1;
      if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date)) return 1;
      if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date)) return -1;
    });

  let otherPosts = posts
    .filter((d) => d.metadata.archived == true)
    .sort((a, b) => Date.parse(b.metadata.date) - Date.parse(a.metadata.date));

  import { seo } from "$lib/store.js";
  $seo = {
    title: "Blog | Connor Rothschild",
    description: "Some of my writing.",
  };

  let anyHovered = false;
  let showAll = false;
</script>

<Transition />
<main>
  <h1 class="page-overline transition-subtitle">Blog</h1>
  <h1 class="page-title transition-title">
    What I've
    <span class="gradient-accented bolded">written</span>​
  </h1>
  <div class="transition-content post-grid">
    {#each filteredPosts as post, index}
      <BlogSection
        post={post.metadata}
        slug={post.path.replace(/\.[^/.]+$/, "")}
        {index}
        bind:anyHovered
      />
    {/each}
  </div>
  {#if showAll}
    <div transition:slide={{ duration: 300, easing: linear }}>
      <h1 class="archives-title">😬 The archives 😬</h1>
      <div class="post-grid">
        {#each otherPosts as post, index}
          <BlogSection
            post={post.metadata}
            slug={post.path.replace(/\.[^/.]+$/, "")}
            {index}
            bind:anyHovered
          />
        {/each}
      </div>
    </div>
  {/if}
  <button
    class="button pulled-right block transition-content"
    on:click={() => {
      showAll = !showAll;
    }}
  >
    {showAll ? "Hide the archives 👍" : "Show the archives 😬"}
  </button>
</main>

<style>
  main {
    max-width: 860px;
    margin: 0 auto;
    padding: 1em;
    width: 90%;
    margin-bottom: 2rem;
  }

  .post-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* grid-gap: 15px; */
  }

  .archives-title {
    font-size: 3rem;
    margin: 1.5rem 1rem 1rem 1rem;
    border-top: 1px solid rgba(var(--accent-color-rgb), 0.5);
    padding: 2rem 0 0.5rem 0;
    font-weight: 100;
    color: black;
    text-transform: uppercase;
    text-align: center;
  }

  @media screen and (max-width: 668px) {
    .post-grid {
      grid-template-columns: 1fr;
    }

    .archives-title {
      font-size: 9vw;
    }
  }
</style>
