<script>
  // throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  import BlogSection from "$lib/Content/Blog.svelte";
  import Transition from "$lib/Transition.svelte";
  import BackTo from "$lib/BackTo.svelte";

  import { slide } from "svelte/transition";
  import { linear } from "svelte/easing";

  // export let posts;
  export let data;

  let filteredPosts = data.posts
    .filter((d) => !d.metadata?.draft && !d.metadata?.archived)
    // Sort by featured first, and if featured is the same (both false), then sort by date
    .sort((a, b) => {
      if (b.metadata.featured && !a.metadata.featured) return 1;
      if (!b.metadata.featured && a.metadata.featured) return -1;
      if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date)) return 1;
      if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date)) return -1;
    });

  let otherPosts = data.posts
    .filter((d) => d.metadata.archived == true)
    .sort((a, b) => Date.parse(b.metadata.date) - Date.parse(a.metadata.date));

  import Seo from "$lib/Seo.svelte";

  let title = "Blog | Connor Rothschild";
  let description = "Some of my writing.";
  let image = `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${description}&theme=light&md=true&hasImage=true`;

  let anyHovered = false;
  let showAll = false;
</script>

<Transition />
<Seo {title} {description} {image} />
<main class="main">
  <BackTo
    href="/"
    text="Home"
    classes="page-overline transition-content centered"
  />
  <h1 class="page-title transition-title overflow-hidden">Writing</h1>
  <!-- Viz article at top -->
  <div style:margin-bottom="8px">
    <BlogSection
      post={{
        title: "How To Learn D3 in 2023",
        description:
          "The complete roadmap for interactive data visualization in 2023.",
        date: "2023-08-01",
        tags: ["D3", "Svelte"],
        featured: true,
      }}
      slug={"/viz"}
      bind:anyHovered
      big={true}
    />
  </div>
  <div class="transition-content posts-grid">
    {#each filteredPosts as post, index}
      <div>
        <BlogSection
          post={post.metadata}
          slug={post.path
            .replace(/\.[^/.]+$/, "")
            .replace("./", "/")
            .replace("+page", "")}
          {index}
          bind:anyHovered
        />
      </div>
    {/each}
  </div>
  <div>
    {#if showAll}
      <div in:slide|local={{ duration: 300, easing: linear }}>
        <h1 class="archives-title">😬 The archives 😬</h1>
        <div class="posts-grid">
          {#each otherPosts as post, index}
            <div>
              <BlogSection
                post={post.metadata}
                slug={post.path
                  .replace(/\.[^/.]+$/, "")
                  .replace("./", "/")
                  .replace("+page", "")}
                {index}
                bind:anyHovered
              />
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
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
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 10px;
  }

  .button {
    margin: 12px 0 12px auto;
  }

  .archives-title {
    font-size: 3rem;
    margin: 1.5rem 1rem 1rem 1rem;
    border-top: 1px solid rgba(var(--accent-color-rgb), 0.5);
    padding: 2rem 0 0.5rem 0;
    font-weight: 100;
    color: var(--pure-text-color);
    text-transform: uppercase;
    text-align: center;
  }

  @media screen and (max-width: 668px) {
    .posts-grid {
      grid-template-columns: auto;
      grid-template-rows: repeat(1, 1fr);
      grid-auto-rows: auto;
    }

    .archives-title {
      font-size: 9vw;
    }
  }
</style>
