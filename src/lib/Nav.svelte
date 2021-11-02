<script>
  import NavListItem from "./NavListItem.svelte";
  import ColorSwitcher from "$lib/ColorSwitcher.svelte";
</script>

<!-- The first nav stays at the top of the page so user can scroll to it 
But it is invisible
Since #nav is fixed, the user can never scroll to it -->
<div id="home" />
<div id="nav">
  <ul class="left">
    <NavListItem code={""} title={"CR"} />
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
  /* #home {
    display: none;
  } */

  #nav {
    display: flex;
    place-items: center;
    position: fixed;
    z-index: 99;
    background: var(--tertiary-color);
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
    font-weight: 100;
    letter-spacing: 1px;
    font-size: 2rem;
  }

  .right {
    flex: 1;
    text-align: right;
    justify-content: flex-end;
    place-items: center;
    padding-right: 1rem;
  }

  /* When nav and icon would overlap, apply padding */
  @media screen and (max-width: 560px) {
    :global(.left li) {
      font-size: 1.5rem;
    }
  }
</style>
