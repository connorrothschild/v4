<script>
  import { fly } from "svelte/transition";
  import IntersectionObserver from "svelte-intersection-observer";
  import Transition from "$lib/Transition.svelte";
  import JobSection from "$lib/Content/Job.svelte";
  export let jobs;

  const sortedJobs = jobs.sort((a, b) => a.metadata.order - b.metadata.order);

  let element;
  let intersecting;
</script>

<!-- <Transition /> -->

<!-- <IntersectionObserver {element} bind:intersecting> -->
<!-- <section bind:this={element}> -->
<section>
  <!-- {#if intersecting} -->
  <!-- <div transition:fly={{ duration: 1000, x: -200 }}> -->
  <div>
    <div class="sticky-top">
      <div class="see-all-flex">
        <h1 class="page-overline">Experience</h1>
        <a class="page-overline padding-bottom" href="/experience"
          >See all work experience &#8599;</a
        >
      </div>
      <h1 class="page-title">
        Places I've
        <span class="gradient-accented bolded ">worked</span>
      </h1>
    </div>

    <!-- <div class="transition-content"> -->

    <div class="flex">
      <div class="sticky">
        {#each sortedJobs as job, index}
          <!-- <JobSection
          job={job.metadata}
          slug={job.path.replace(/\.[^/.]+$/, "")}
        /> -->
          <div class="job">
            {job.metadata.name}
          </div>
        {/each}
      </div>
      <div class="fixed">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </div>
    </div>
    <!-- </div> -->
  </div>
  <!-- {/if} -->
</section>

<!-- </IntersectionObserver> -->
<style>
  section {
    min-height: 80vh;
    padding: 1rem;
    /* max-width: 1068px; */
  }

  .flex {
    display: flex;
  }

  .fixed,
  .sticky {
    flex: 1 1 50%;
  }

  .fixed p {
    height: 50vh;
  }

  .sticky {
    display: flex;
    justify-content: center;
    place-items: center;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    height: 100vh;
  }
</style>
