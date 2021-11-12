<script>
  import NavListItem from "$lib/NavListItem.svelte";
</script>

<div id="nav">
  <ul class="left">
    <NavListItem code={""} title={"CR"} />
  </ul>
  <!-- <ul class="right">
    <NavListItem code={"experience"} title={"Work"} />
    <NavListItem code={"post"} title={"Blog"} />
    <NavListItem code={"project"} title={"Projects"} />
    <NavListItem code={"award"} title={"Awards"} />
  </ul> -->
</div>

<style>
  #nav {
    display: flex;
    place-items: center;
    position: absolute;
    top: 0;
    z-index: 101;
    height: var(--nav-height);
    margin: 0 auto;
    width: auto;
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
  }

  .left {
    display: flex;
    place-items: center;
    padding-left: 1rem;
  }

  @media screen and (max-width: 560px) {
    :global(.left li) {
      font-size: 1.5rem;
    }

    :global(.right li) {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 460px) {
    .left {
      padding-left: 0.85rem;
    }

    :global(.left li) {
      font-size: 1.35rem;
    }
  }
</style>
