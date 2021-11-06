<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch }) {
    const jobsJson = await fetch(`/experience.json`);
    const jobs = await jobsJson.json();

    const projectsJson = await fetch(`/projects.json`);
    const projects = await projectsJson.json();

    const postsJson = await fetch(`/posts.json`);
    const posts = await postsJson.json();

    const awardsJson = await fetch(`/awards.json`);
    const awards = await awardsJson.json();

    return {
      props: {
        jobs,
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

  import Intro from "$lib/Sections/Intro.svelte";
  // import Work from "$lib/Sections/Work.svelte";
  import Projects from "$lib/Sections/Projects.svelte";
  import Blog from "$lib/Sections/Blog.svelte";
  import Awards from "$lib/Sections/Awards.svelte";
  import Footer from "$lib/Sections/Footer.svelte";
  import Circle from "$lib/CircleText.svelte";

  let pageWidth;
  $: isMobile = pageWidth < 768;
</script>

<svelte:window bind:innerWidth={pageWidth} />
<main>
  <Intro />
  <!-- <Work {jobs} /> -->
  <Projects {projects} {isMobile} />
  <Blog {posts} {isMobile} />
  <Awards {awards} {isMobile} />
  <Circle />
</main>
<Footer />

<style>
  main {
    width: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: var(--tertiary-color);

    /* This is for the footer reveal on scroll */
    position: relative;
    z-index: 1;
    /* margin-bottom: var(--footer-height); */
  }
</style>
