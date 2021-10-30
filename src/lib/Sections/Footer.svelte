<footer>
  <h1>Built by Connor Rothschild, using Sveltekit</h1>
  <a class="no-underline" href="#">Follow me on Twitter</a>
  <a class="no-underline" href="#">Get in touch</a>
  <a class="no-underline" href="#">Browse source code</a>
</footer>

<style>
  footer {
    background: rgba(var(--accent-color-rgb), 0.1);
    background: linear-gradient(
      to bottom,
      var(--tertiary-color) 0,
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
