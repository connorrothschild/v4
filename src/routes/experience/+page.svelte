<script>
  // throw new Error(
  //   "@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)"
  // );

  import Transition from "$lib/Transition.svelte";
  import JobSection from "$lib/Content/Job.svelte";
  import BackTo from "$lib/BackTo.svelte";

  // export let jobs;
  export let data;

  const sortedJobs = data.jobs.sort(
    (a, b) => a.metadata.order - b.metadata.order
  );

  import Seo from "$lib/Seo.svelte";
  import { base } from "$app/paths";
  let title = "Experience | Connor Rothschild";
  let description = "Some of my work experience.";
  let image = `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${description}&theme=light&md=true&hasImage=true`;
</script>

<Transition />
<Seo {title} {description} {image} />
<main class="main">
  <BackTo
    href="/"
    text="Home"
    classes="page-overline transition-content centered"
  />
  <h1 class="page-title transition-title overflow-hidden">Work</h1>

  <div class="transition-content">
    {#each sortedJobs as job}
      <div>
        <JobSection
          job={job.metadata}
          slug={job.path
            .replace(/\.[^/.]+$/, "")
            .replace("./", "/")
            .replace("+page", "")}
          preview={false}
          hoveredFromChild={null}
        />
      </div>
    {/each}
  </div>
</main>

<style>
</style>
