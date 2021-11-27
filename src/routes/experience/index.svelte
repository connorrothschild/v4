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
  import Transition from "$lib/Transition.svelte";
  import JobSection from "$lib/Content/Job.svelte";
  import BackTo from "$lib/BackTo.svelte";

  export let jobs;

  const sortedJobs = jobs.sort((a, b) => a.metadata.order - b.metadata.order);

  import { seo } from "$lib/store.js";
  let title = "Experience • Connor Rothschild";
  let description = "Some of my work experience.";

  $seo = {
    title: title,
    description: description,
    image: `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${description}&theme=light&md=true&hasImage=true`,
  };
</script>

<Transition />
<main class="main">
  <BackTo
    href="/"
    text="Home"
    classes="page-overline transition-content centered"
  />
  <h1 class="page-title transition-title overflow-hidden">Work</h1>

  <div class="transition-content">
    {#each sortedJobs as job}
      <JobSection
        job={job.metadata}
        slug={job.path.replace(/\.[^/.]+$/, "")}
        preview={false}
        hoveredFromChild={null}
      />
    {/each}
  </div>
</main>

<style>
</style>
