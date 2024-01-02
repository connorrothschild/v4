<script>
  export let data;

  import Seo from "$lib/Seo.svelte";
  import Hero from "$lib/Sections/Hero.svelte";
  import Projects from "$lib/Sections/Projects.svelte";
  import Blog from "$lib/Sections/Blog.svelte";
  import Awards from "$lib/Sections/Awards.svelte";

  let pageWidth;
  $: isMobile = pageWidth < 768;

  export const prerender = true;
</script>

<svelte:window bind:innerWidth={pageWidth} />
<Seo />
<main id="home">
  <Hero />
  <Projects projects={data.projects} />
  <Awards awards={data.awards} {isMobile} />
  <Blog posts={data.posts} {isMobile} />
</main>

<style>
  main {
    width: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    /* background-color: var(--primary-color); */
    z-index: 100; /* This is over the nav */
    position: relative;
  }

  /* On desktop, do the cool sticky footer that reveals on scroll */
  /* @media screen and (min-width: 768px) {
    main {
      position: relative;
    }
  } */
</style>
