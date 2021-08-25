<script>
  import { page } from "$app/stores";
</script>

<ul>
  <li>
    <a sveltekit:prefetch href="/" class={$page.path == "/" ? "current" : ""}
      >Home</a
    >
  </li>
  <li>
    <a
      sveltekit:prefetch
      href="/experience"
      class={$page.path == "/experience" ? "current" : ""}>Work</a
    >
  </li>
  <li>
    <a
      sveltekit:prefetch
      href="/projects"
      class={$page.path == "/projects" ? "current" : ""}>Projects</a
    >
  </li>
  <li>
    <a
      sveltekit:prefetch
      href="/blog"
      class={$page.path == "/blog" ? "current" : ""}>Blog</a
    >
  </li>
</ul>

<style>
  /* nav {
    max-width: 860px;
    margin: 0 auto;
    padding: 1em;
  } */
  ul {
    width: 90%;
    margin: 0 auto;
    padding: 1em;
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
  }

  li {
    display: inline-block;
    padding: 0;
    margin: 0;
  }

  a {
    color: var(--text-color);
    font-family: var(--font-serif);
    text-transform: uppercase;
  }

  .current {
    color: var(--accent-color);
    border-bottom: 2px solid var(--accent-color);
  }

  .current:hover {
    text-decoration: none;
  }
</style>
