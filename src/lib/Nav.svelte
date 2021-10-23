<script>
  import NavListItem from "./NavListItem.svelte";
</script>

<ul id="nav">
  <NavListItem code={""} title={"Home"} />
  <NavListItem code={"experience"} title={"Work"} />
  <NavListItem code={"project"} title={"Projects"} />
  <NavListItem code={"award"} title={"Awards"} />
  <NavListItem code={"post"} title={"Blog"} />
</ul>

<style>
  ul {
    width: 90%;
    max-width: 768px;
    padding: 1em;
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
  }

  @media screen and (max-width: 560px) {
    ul {
      width: 88%;
      padding: 1.1em 0;
      list-style-type: none;
      display: flex;
      margin: 0 auto 0 0;
    }
  }
</style>
