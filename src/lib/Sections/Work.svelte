<script>
  import { fly } from "svelte/transition";
  import IntersectionObserver from "svelte-intersection-observer";

  import JobSection from "$lib/Content/Job.svelte";
  import SectionTitle from "$lib/Text/SectionTitle.svelte";

  export let jobs;

  const sortedJobs = jobs.sort((a, b) => a.metadata.order - b.metadata.order);

  let element;
  let intersecting;

  let hoveredFromChild;
  $: hoveredData = jobs.find((d) => d.metadata.name == hoveredFromChild);
</script>

<IntersectionObserver {element} bind:intersecting>
  <section bind:this={element}>
    <div class="sticky-top">
      <div class="see-all-flex">
        <h1 class="page-overline">Experience</h1>
        <a
          class="page-overline padding-bottom see-all"
          sveltekit:prefetch
          href="/experience">See all work experience &#8599;</a
        >
      </div>
      <SectionTitle {intersecting} element="#work-title">
        <h1 id="work-title" class="page-title home overflow-hidden">
          Places I've
          <span class="gradient-accented bolded ">worked</span>
        </h1>
      </SectionTitle>
    </div>
    <div class="flex">
      <div class="jobs-container">
        {#each sortedJobs as job, index}
          <div class="job">
            <JobSection
              job={job.metadata}
              slug={job.path.replace(/\.[^/.]+$/, "")}
              preview={true}
              bind:hoveredFromChild
            />
          </div>
        {/each}
      </div>
      {#key hoveredData}
        <div in:fly={{ x: -20, uration: 100 }} class="hovered-job">
          {#if hoveredData}
            <h1 class="hovered-job-title">
              {hoveredData.metadata.name}
              <img
                loading="lazy"
                class="job-image"
                src="/images/jobs/{hoveredData.metadata.imageUrl}.svg"
                alt="Logo for {hoveredData.metadata.name}"
              />
            </h1>
            <p class="hovered-job-description">
              {@html hoveredData.metadata.description}
            </p>
          {/if}
        </div>
      {/key}
    </div>
  </section>
</IntersectionObserver>

<style>
  section {
    width: 95%;
    max-width: 1168px;
    margin: auto;
    margin-bottom: var(--section-margin-bottom);
  }

  .flex {
    display: flex;
    flex-direction: row;
  }

  .jobs-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 60%;
  }

  .jobs-container {
    flex: 2;
  }

  .hovered-job {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 1rem 1rem 3rem;
  }

  .hovered-job-title {
    margin-bottom: 1rem;
    display: flex;
    place-items: center;
  }

  .hovered-job-description {
    font-weight: 300;
    line-height: 1.1;
  }

  :global(.hovered-job-description p, .hovered-job-description ul) {
    margin-bottom: 1rem;
  }

  .job-image {
    max-height: 1.5rem;
    margin-left: 0.5rem;
    display: inline;
  }

  @media screen and (max-width: 768px) {
    .flex {
      flex-direction: column;
    }

    .hovered-job {
      padding: 2rem 0 1rem 0;
    }
  }

  @media screen and (max-width: 568px) {
    .hovered-job-title {
      font-size: 1.5rem;
    }

    :global(.hovered-job-description p) {
      font-size: 1rem;
    }

    .job-image {
      max-height: 1.25rem;
    }
  }
</style>
