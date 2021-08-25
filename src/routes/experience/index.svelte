<script>
  import JobSection from "$lib/JobSection.svelte";
  let jobs = ["moksha", "axios", "socom", "tpl"];
</script>

<main>
  <h1 class="page-title">
    Where I've <span style="color: var(--accent-color); font-weight: 900;"
      >worked</span
    >
  </h1>

  {#each jobs as job}
    <JobSection {job} />
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
