<script>
  import { page } from "$app/stores";

  import { currentIcon } from "../stores/global.js";

  const setCurrent = function (icon) {
    currentIcon.set(icon);
  };
</script>

<ul>
  <li>
    <a
      on:mouseover={() => {
        setCurrent("home");
      }}
      on:focus={() => {
        setCurrent("home");
      }}
      on:mouseout={() => {
        setCurrent(null);
      }}
      on:blur={() => {
        setCurrent(null);
      }}
      sveltekit:prefetch
      href="/"
      class={$page.path == "/" ? "current" : ""}>Home</a
    >
  </li>
  <li>
    <a
      on:mouseover={() => {
        setCurrent("experience");
      }}
      on:focus={() => {
        setCurrent("experience");
      }}
      on:mouseout={() => {
        setCurrent(null);
      }}
      on:blur={() => {
        setCurrent(null);
      }}
      sveltekit:prefetch
      href="/experience"
      class={$page.path == "/experience" ? "current" : ""}>Work</a
    >
  </li>
  <li>
    <a
      on:mouseover={() => {
        setCurrent("projects");
      }}
      on:focus={() => {
        setCurrent("projects");
      }}
      on:mouseout={() => {
        setCurrent(null);
      }}
      on:blur={() => {
        setCurrent(null);
      }}
      sveltekit:prefetch
      href="/projects"
      class={$page.path == "/projects" ? "current" : ""}>Projects</a
    >
  </li>
  <li>
    <a
      on:mouseover={() => {
        setCurrent("blog");
      }}
      on:focus={() => {
        setCurrent("blog");
      }}
      on:mouseout={() => {
        setCurrent(null);
      }}
      on:blur={() => {
        setCurrent(null);
      }}
      sveltekit:prefetch
      href="/blog"
      class={$page.path == "/blog" ? "current" : ""}>Blog</a
    >
  </li>
</ul>

<style>
  /* nav {
    max-width: 768px;
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
