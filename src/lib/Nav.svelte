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
    margin: 0 auto;
    padding: 1em;
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 560px) {
    ul {
      width: 85%;
      margin: auto 0;
      padding: 1em;
      list-style-type: none;
      display: flex;
      margin-right: auto;
    }
  }
</style>
