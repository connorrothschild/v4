<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, fetch, session }) {
    const res = await fetch(`./experience.json`);
    const jobs = await res.json();
    return {
      props: {
        jobs,
      },
    };
  }
</script>

<script>
  import SvelteMarkdown from "svelte-markdown";

  import Transition from "$lib/Transition.svelte";
  import JobSection from "$lib/Content/Job.svelte";
  export let jobs;

  const sortedJobs = jobs.sort((a, b) => a.metadata.order - b.metadata.order);

  import { seo } from "$lib/store.js";
  $seo = {
    title: "Experience | Connor Rothschild",
    description: "Some of my work experience.",
  };
  console.log(jobs);
</script>

<Transition />
<main>
  <h1 class="page-overline transition-subtitle">Experience</h1>
  <h1 class="page-title transition-title">
    Places I've
    <span class="gradient-accented bolded ">worked</span>
  </h1>

  <div class="transition-content">
    {#each sortedJobs as job}
      <JobSection job={job.metadata} slug={job.path.replace(/\.[^/.]+$/, "")} />
      <p><SvelteMarkdown source={job.metadata.content} /></p>
    {/each}
  </div>
</main>

<style>
  main {
    width: 90vw;
    max-width: 860px;
    margin: 0 auto;
    padding: 1em;
    width: 90%;
    margin-bottom: 2rem;
  }
</style>
