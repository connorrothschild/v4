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
  import JobSection from "$lib/JobSection.svelte";
  export let jobs;
</script>

<main>
  <h1 class="page-overline">Experience</h1>
  <h1 class="page-title">
    Where I've <span class="accented bolded">worked</span>
  </h1>

  {#each jobs as job}
    <JobSection job={job.metadata} slug={job.path.replace(/\.[^/.]+$/, "")} />
  {/each}
</main>

<style>
  main {
    width: 90vw;
    max-width: 860px;
    margin: 0 auto;
    padding: 1em;
  }

  /* .page-title {
    font-size: 2.5rem !important;
  } */
</style>
