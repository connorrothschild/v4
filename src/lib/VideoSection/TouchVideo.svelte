<script>
  export let projects;
  export let videosLoaded;

  import TouchVideoSection from "./TouchVideoSection.svelte";
</script>

<div>
  <div class="projects">
    {#each projects as project, i}
      <TouchVideoSection {project} {i} {videosLoaded} />
    {/each}
  </div>
</div>

<style>
  .projects {
    flex: 1;
    display: flex;
    overflow: auto;
  }
</style>
