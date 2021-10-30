<footer>
  <h1>Built by Connor Rothschild, using Sveltekit</h1>
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
</footer>

<style>
  footer {
    background: rgba(var(--accent-color-rgb), 0.1);
    background: linear-gradient(
      to bottom,
      rgba(var(--accent-color-rgb), 0) 0%,
      rgba(var(--accent-color-rgb), 0.2) 50%
    );
    margin-top: 6rem;
    display: flex;
    padding: 5rem 1rem;
    flex-direction: column;
  }

  h1 {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
  }

  a {
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
    font-weight: 200;
  }
</style>
