<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, fetch, session }) {
    const jobsJson = await fetch(`./experience.json`);
    const jobs = await jobsJson.json();

    const projectsJson = await fetch(`./projects.json`);
    const projects = await projectsJson.json();

    const postsJson = await fetch(`./posts.json`);
    const posts = await postsJson.json();

    const awardsJson = await fetch(`./awards.json`);
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
  export let jobs;
  export let projects;
  export let posts;
  export let awards;

  import Home from "$lib/Sections/Home.svelte";
  import Work from "$lib/Sections/Work.svelte";
  import Projects from "$lib/Sections/Projects.svelte";
  import Blog from "$lib/Sections/Blog.svelte";
  import Awards from "$lib/Sections/Awards.svelte";
  import Footer from "$lib/Sections/Footer.svelte";
</script>

<main>
  <Home />
  <Work {jobs} />
  <Projects {projects} />
  <Blog {posts} />
  <Awards {awards} />
  <Footer />
</main>

<style>
  main {
    /* max-width: 860px; */
    width: 100%;
    margin: 0 auto;
    /* padding: 1em; */
    /* margin-bottom: 2rem; */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
