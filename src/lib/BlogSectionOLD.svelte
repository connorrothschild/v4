<script>
  export let post;
  export let slug;

  let hovered = null;
  let fallbackImage = "images/jobs/moksha.svg";
</script>

<a
  sveltekit:prefetch
  href={slug}
  on:mouseover={() => {
    hovered = slug;
  }}
  on:mouseout={() => {
    hovered = null;
  }}
  class="post-container {hovered == slug ? 'hovered' : ''}"
>
  <img
    src={post.image}
    alt="Blog post image for {post.title}"
    class="post-image"
  />
  <div>
    <h2 class="post-title">{post.title}</h2>
    <p class="post-description">{post.description}</p>
  </div>
</a>

<style>
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
    letter-spacing: 0.24px;
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
    transition: all 300ms ease;
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
