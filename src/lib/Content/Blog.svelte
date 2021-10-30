<script>
  export let post;
  export let slug;

  import { currentColorMode } from "../../stores/global.js";

  let hovered = false;

  // Prevent double clicking messing up routing
  import { goto, prefetch } from "$app/navigation";

  let linkClicked = false;
  function navigate(slug) {
    if (linkClicked) return;
    linkClicked = true;
    setTimeout(() => {
      linkClicked = false;
    }, 500);

    goto(slug);
  }

  let lightImage =
    "https://mugshotbot.com/m?mode=light&color=c5516c&pattern=none&hide_watermark=true&url=https://connorrothschild.com/" +
    slug.replace("./", "");

  let darkImage =
    "https://mugshotbot.com/m?mode=dark&color=57DFD2&pattern=none&hide_watermark=true&url=https://connorrothschild.com/" +
    slug.replace("./", "");
</script>

<div class="post-card no-underline" on:click={navigate(slug)}>
  <img
    src={lightImage}
    alt="Post image for {post.title}"
    class="post-image light {$currentColorMode == 'light'
      ? 'visible'
      : 'invisible'}"
    on:mouseover={() => {
      hovered = true;
      prefetch(slug);
    }}
    on:focus={() => {
      hovered = true;
      prefetch(slug);
    }}
    on:mouseleave={() => {
      hovered = false;
    }}
    class:hovered
  />
  <img
    src={darkImage}
    alt="Post image for {post.title}"
    class="post-image dark {$currentColorMode == 'dark'
      ? 'visible'
      : 'invisible'}"
    on:mouseover={() => {
      hovered = true;
      prefetch(slug);
    }}
    on:focus={() => {
      hovered = true;
      prefetch(slug);
    }}
    on:mouseleave={() => {
      hovered = false;
    }}
    class:hovered
  />
  <!-- {#if hovered || isTouchscreen}
    <div
      in:fly={{ y: 50, duration: 200 }}
      out:fade={{ duration: 200 }}
      class="post-text"
    >
      <h1 class="title">{post.title}</h1>
      <h2 class="description">{post.description}</h2>
    </div>
  {/if} -->
</div>

<style>
  .post-card {
    position: relative;
    border-radius: 5px;
    box-shadow: 1px 1px 4px var(--box-shadow-color);
    height: 100%;
    cursor: pointer;
  }

  .post-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    filter: blur(0);
    z-index: 0;
    height: 180px;
    -o-object-fit: center top;
    object-position: center top;
  }

  .invisible {
    display: none;
  }

  /* .hovered-gradient {
    position: absolute;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1)
    );
    width: 100%;
    height: 100%;
    background-size: cover;
    pointer-events: none;
    border-radius: 5px;
    z-index: 1; 
  } */

  /* .hovered {
    filter: blur(1px);
  } */

  /* .post-text {
    position: absolute;
    bottom: 0;
    left: 0;
    pointer-events: none;
    padding: 1rem;
    z-index: 3;
  }

  .title,
  .description {
    color: white;
  }

  .title {
    font-size: 1.5rem;
    line-height: 1.15;
    text-shadow: 1px 1px 6px black;
  }

  .description {
    font-family: var(--font-sans);
    font-size: 1rem;
    line-height: 1.2;
    font-weight: 300;
    margin-top: 12px;
    letter-spacing: 0.64px;
    text-shadow: 1px 1px 6px black;
  } */

  /* @media screen and (max-width: 600px) {
    .hovered-gradient {
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0));
    }

    .post-text {
      padding: 1rem;
    }

    .title {
      font-size: 2rem;
    }

    .description {
      font-size: 0.8rem;
      letter-spacing: 0.3px;
      margin-top: 6px;
    }
  }

  @media screen and (max-width: 600px) {
    .title {
      font-size: 1.5rem;
    }

    .description {
      font-size: 0.9rem;
      letter-spacing: 0.3px;
      margin-top: 6px;
    }
  } */
</style>
