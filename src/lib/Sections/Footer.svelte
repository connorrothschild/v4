<footer>
  <h1>Built by Connor Rothschild, using Sveltekit</h1>
  <div class="buttons">
    <a
      class="no-underline"
      target="_blank"
      href="https://twitter.com/CL_Rothschild">Follow me on Twitter</a
    >
    <a
      class="no-underline"
      target="_blank"
      href="mailto:connor@connorrothschild.com">Get in touch</a
    >
    <a
      class="no-underline"
      target="_blank"
      href="github.com/connorrothschild/connorrothschild.com"
      >Browse source code</a
    >
  </div>
</footer>

<style>
  footer {
    background: rgba(var(--accent-color-rgb), 0.05);
    /* background: linear-gradient(
      to bottom,
      rgba(var(--accent-color-rgb), 0) 0%,
      rgba(var(--accent-color-rgb), 0.2) 50%
    ); */
    margin-top: 6rem;
    display: flex;
    padding: 5rem 1rem;
    flex-direction: column;
  }

  h1 {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }

  /* .buttons {
    margin-top: 1rem;
  } */

  a {
    font-size: 1.2rem;
    font-weight: 200;
    font-family: var(--font-sans);
    background: rgba(var(--accent-color-rgb), 0.1);
    padding: 0.35rem 0.65rem;
    margin-right: 0.2rem;
    border-radius: 5px;
  }
</style>
