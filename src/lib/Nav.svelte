<script>
  import NavListItem from "./NavListItem.svelte";
</script>

<ul id="nav">
  <NavListItem code={""} title={"Home"} />
  <NavListItem code={"experience"} title={"Work"} />
  <NavListItem code={"projects"} title={"Projects"} />
  <NavListItem code={"blog"} title={"Blog"} />
</ul>

<style>
  ul {
    width: 90%;
    margin: 0 auto;
    padding: 1em;
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 560px) {
    ul {
      justify-content: flex-start;
    }
  }
</style>
