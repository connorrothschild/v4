<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch }) {
    const res = await fetch(`/experience.json`);
    const jobs = await res.json();
    return {
      props: {
        jobs,
      },
    };
  }
</script>

<script>
  import Transition from "$lib/Transitions/Main.svelte";
  import JobSection from "$lib/JobSection.svelte";
  export let jobs;

  const sortedJobs = jobs.sort((a, b) => a.metadata.order - b.metadata.order);

  import { seo } from "$lib/store.js";
  $seo = {
    title: "Experience | Connor Rothschild",
    description: "Some of my work experience.",
  };
</script>

<Transition />
<main>
  <h1 class="page-overline">Experience</h1>
  <h1 class="page-title">
    Where I've
    <span class="gradient-accented bolded ">worked</span>
  </h1>

  <div class="transition-container">
    {#each sortedJobs as job}
      <JobSection job={job.metadata} slug={job.path.replace(/\.[^/.]+$/, "")} />
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
  }

  /* .page-title {
    font-size: 2.5rem !important;
  } */
</style>
