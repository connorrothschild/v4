<script context="module">
  export async function load({ fetch }) {
    // const jobsJson = await fetch(`/experience.json`);
    // const jobs = await jobsJson.json();

    const projectsJson = await fetch(`/projects.json`);
    const projects = await projectsJson.json();

    const postsJson = await fetch(`/posts.json`);
    const posts = await postsJson.json();

    const awardsJson = await fetch(`/awards.json`);
    const awards = await awardsJson.json();

    return {
      props: {
        // jobs,
        projects,
        posts,
        awards,
      },
    };
  }
</script>

<script>
  // export let jobs;
  export let projects;
  export let posts;
  export let awards;

  import Hero from "$lib/Sections/Hero.svelte";
  import Projects from "$lib/Sections/Projects.svelte";
  import Blog from "$lib/Sections/Blog.svelte";
  import Awards from "$lib/Sections/Awards.svelte";
  import Circle from "$lib/CircleText.svelte";

  let pageWidth;
  $: isMobile = pageWidth < 768;
</script>

<svelte:window bind:innerWidth={pageWidth} />
<main id="home">
  <Hero />
  <!-- <Work {jobs} /> -->
  <Projects {projects} />
  <Awards {awards} {isMobile} />
  <Blog {posts} {isMobile} />
  <Circle />
</main>

<style>
  main {
    width: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: var(--primary-color);
    z-index: 100; /* This is over the nav */
  }

  /* On desktop, do the cool sticky footer that reveals on scroll */
  /* @media screen and (min-width: 768px) {
    main {
      position: relative;
    }
  } */
</style>
