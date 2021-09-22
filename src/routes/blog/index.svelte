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
  import { paginate, PaginationNav } from "svelte-paginate";
  import { seo } from "$lib/store.js";
  //https://www.npmjs.com/package/svelte-paginate

  export let posts;

  let items = posts;
  let currentPage = 1;
  let pageSize = 5;
  $: paginatedItems = paginate({ items, pageSize, currentPage });

  $seo = {
    title: "Connor Rothschild",
    description: "Description",
  };

  let hovered = null;
  let fallbackImage = "images/jobs/moksha.svg";
</script>

<main>
  <h1 class="page-overline">Blog</h1>
  <h1 class="page-title">
    What I've <span class="accented bolded">written</span>
  </h1>
  <div class="article-list">
    {#each paginatedItems as { metadata: { title, description, tags, outline, slug, image }, path }}
      <a
        sveltekit:prefetch
        href={path.replace(/\.[^/.]+$/, "")}
        on:mouseover={() => {
          hovered = path;
        }}
        on:mouseout={() => {
          hovered = null;
        }}
        class="post-container {hovered == path ? 'hovered' : ''}"
      >
        <img
          src={image || fallbackImage}
          alt="Blog post image for {title}"
          class="post-image"
        />
        <div>
          <h2 class="post-title">{title}</h2>
          <p class="post-description">{description}</p>
        </div>
      </a>
    {/each}
    {#if items.length > pageSize}
      <PaginationNav
        totalItems={items.length}
        {pageSize}
        {currentPage}
        limit={1}
        showStepOptions={true}
        on:setPage={(e) => (currentPage = e.detail.page)}
      />
    {/if}
  </div>
</main>

<style>
  main {
    /* width: 100%; */
    max-width: 860px;
    margin: 0 auto;
    padding: 1em;
  }

  .post-container {
    display: flex;
    padding-top: 1.5em;
    padding-bottom: 1.5em;
    border-bottom: 1px dashed var(--accent-color);
  }

  .post-container.hovered {
    cursor: pointer;
    border-bottom: 1px solid var(--accent-color);
  }

  .post-container.hovered .post-title {
    color: var(--accent-color);
  }

  .post-image {
    margin-right: 1.75em;
    max-width: 100px;
    object-fit: contain; /* cover */
  }

  .post-title {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    transition: color 300ms ease;
  }

  a:hover {
    text-decoration: none;
  }

  @media screen and (max-width: 560px) {
    .post-container {
      flex-direction: column;
    }

    .post-image {
      margin-right: 0;
      margin-bottom: 1em;
      max-width: 100%;
      max-height: 80px;
    }
  }
</style>
