<script>
  import NavListItem from "./NavListItem.svelte";
  import ColorSwitcher from "$lib/ColorSwitcher.svelte";
</script>

<div id="nav">
  <ul class="left">
    <NavListItem code={""} title={"CR"} />
  </ul>
  <ul class="right">
    <NavListItem code={"experience"} title={"Work"} />
    <NavListItem code={"post"} title={"Blog"} />
    <NavListItem code={"project"} title={"Projects"} />
    <NavListItem code={"award"} title={"Awards"} />
    <!-- <li><ColorSwitcher /></li> -->
  </ul>
</div>

<style>
  #nav {
    display: flex;
    place-items: center;
    /* position: fixed; */
    z-index: 99;
    background: var(--primary-color);
    height: var(--nav-height);
    margin: 0 auto;
    width: 100%;
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

  :global(.left li) {
    margin-left: 0;
    font-weight: 300;
    letter-spacing: 1px;
    font-size: 2rem;
    font-family: var(--font-serif);
  }

  .right {
    flex: 1;
    text-align: right;
    justify-content: flex-end;
    place-items: center;
    padding-right: 1rem;
  }

  :global(.right li) {
    font-family: var(--font-sans);
    font-weight: 200;
    font-size: 1.2rem;
    letter-spacing: 0.025rem;
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
    .right {
      padding-right: 0.85rem;
    }

    .left {
      padding-left: 0.85rem;
    }

    :global(.left li) {
      font-size: 1.35rem;
    }

    :global(.right li) {
      font-size: 0.8rem;
      margin-left: 0.75rem;
    }
  }
</style>
