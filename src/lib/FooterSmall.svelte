<script>
</script>

<footer>
  <div class="flex-container">
    <div class="left">
      <!-- <h2 class="thanks">Thanks for visiting the personal site of</h2> -->
      <h1 class="name">Connor Rothschild</h1>
      <h2 class="copyright">© 2021</h2>
    </div>
    <div class="right">
      <div class="links">
        <a
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/connor-rothschild/">LinkedIn</a
        >
        <a
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/connorrothschild/">GitHub</a
        >
        <a
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/intent/follow?screen_name=CL_Rothschild"
          >Twitter</a
        >
        <a
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:connor@connorrothschild.com">Email</a
        >
      </div>
    </div>
  </div>
</footer>

<style>
  footer {
    display: flex;
    place-items: center;
    background: var(--text-color);
    height: 200px;
    padding: 3rem 1rem;
    background: linear-gradient(
      to bottom right,
      var(--text-color) 0%,
      var(--accent-color) 150%
    );
    color: var(--pure-background-color);
  }

  .flex-container {
    max-width: 1268px;
    height: 100%;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    place-items: center;
  }

  footer h1,
  footer h2 {
    color: var(--pure-background-color);
  }

  footer h1::selection,
  footer h2::selection,
  footer a::selection {
    background: var(--pure-background-color);
    color: var(--pure-text-color);
  }

  .left {
    text-align: left;
  }

  .name {
    font-size: 4rem;
    font-weight: 100;
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .copyright {
    font-size: 1.5rem;
    font-weight: 100;
  }

  .links {
    display: flex;
    flex-direction: column;
    place-items: flex-end;
    text-align: right;
  }

  .link {
    font-family: var(--font-sans);
    /* letter-spacing: 0.05rem; */
    padding-bottom: 0.25rem;
    margin-bottom: 0.25rem;
    font-weight: 300;
    color: var(--pure-background-color);
    /* text-transform: uppercase; */
    font-size: 1.5rem;
  }

  @media screen and (max-width: 800px) {
    .left,
    .right {
      justify-content: center;
    }

    .left {
      align-self: flex-start;
      flex: 5;
    }

    .right {
      align-self: flex-end;
      flex: 1;
    }
  }

  @media screen and (max-width: 600px) {
    .name {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 500px) {
    .name {
      font-size: 2.5rem;
    }
    .link {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 400px) {
    .name {
      font-size: 2rem;
    }
  }
</style>
