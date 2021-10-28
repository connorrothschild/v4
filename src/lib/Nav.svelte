<script>
  import NavListItem from "./NavListItem.svelte";
  import ColorSwitcher from "$lib/ColorSwitcher.svelte";
</script>

<div id="nav">
  <ul class="left">
    <NavListItem code="" title="CR" />
  </ul>
  <ul class="right">
    <NavListItem code={"experience"} title={"Work"} />
    <NavListItem code={"post"} title={"Blog"} />
    <NavListItem code={"project"} title={"Projects"} />
    <NavListItem code={"award"} title={"Awards"} />
    <li><ColorSwitcher /></li>
  </ul>
</div>

<style>
  #nav {
    display: flex;
    place-items: center;
    position: fixed;
    z-index: 1000;
    background: var(--tertiary-color);
    height: var(--nav-height);
    padding: 0 1rem;
    margin: 0;
    width: calc(100vw - 2rem);
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
  }

  .left {
    display: flex;
    place-items: center;
  }

  :global(.left li) {
    margin-left: 0;
    font-weight: 100;
    letter-spacing: 1px;
    font-size: 2rem;
  }

  .right {
    flex: 1;
    text-align: right;
    justify-content: flex-end;
  }

  /* When nav and icon would overlap, apply padding */
  @media screen and (max-width: 560px) {
    :global(.left li) {
      font-size: 1.5rem;
    }
  }
</style>
