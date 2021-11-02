<footer>
  <div class="me">
    <h2 class="thanks">Thanks for visiting the personal site of</h2>
    <h1 class="name">Connor Rothschild</h1>
  </div>
  <div class="you">
    <h1 class="stay-in-touch">Let's stay in touch</h1>
    <div class="links">
      <a
        class="link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/CL_Rothschild">Twitter</a
      >
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
        href="github.com/connorrothschild/">GitHub</a
      >
      <a
        class="link"
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:connor@connorrothschild.com">Email</a
      >
    </div>
  </div>
</footer>

<style>
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    width: 100vw;
    height: var(--footer-height);

    background: var(--text-color);
    color: var(--pure-background-color);
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

  .me,
  .you {
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }

  .me {
    display: flex;
    flex-direction: column;
  }

  .thanks {
    font-family: var(--font-sans);
    margin-bottom: 1rem;
    font-weight: 200;
    font-size: 1.8rem;
    /* color: var(--accent-color); */
  }

  .name {
    font-size: 4rem;
    font-weight: 100;
    line-height: 1;
  }

  .stay-in-touch {
    line-height: 1;
    margin-bottom: 2rem;
    font-size: 3.5rem;
    font-weight: 200;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
  }

  .btn-link {
    font-size: 1.2rem;
    font-weight: 200;
    font-family: var(--font-sans);
    background: rgba(var(--accent-color-rgb), 0.1);
    padding: 0.35rem 0.65rem;
    margin: 0.35rem 0.35rem 0 0;
    border-radius: 5px;
  }

  .links {
    display: flex;
    justify-content: space-between;
    max-width: 400px;
  }

  .link {
    margin-right: 0.35rem;
    font-family: var(--font-sans);
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    padding-bottom: 0.5rem;
    font-weight: 200;
  }

  @media screen and (max-width: 1068px) {
    .thanks {
      font-size: 1.55rem;
    }
    .name,
    .stay-in-touch {
      font-size: 3.5rem;
    }
  }

  @media screen and (max-width: 900px) {
    .thanks {
      font-size: 1.25rem;
    }
    .name,
    .stay-in-touch {
      font-size: 2.825rem;
    }
  }

  @media screen and (max-width: 768px) {
    footer {
      flex-direction: column;
    }

    .me,
    .you {
      justify-content: center;
      flex: 1;
    }

    .me {
      align-self: flex-start;
    }

    .you {
      align-self: flex-end;
    }
  }

  @media screen and (max-width: 600px) {
    .name,
    .stay-in-touch {
      font-size: 2rem;
    }

    .link {
      font-size: 0.85rem;
      margin-right: 0.5rem;
    }

    .you {
      align-self: flex-start;
    }
  }

  @media screen and (max-width: 500px) {
    .thanks {
      font-size: 1.1rem;
    }

    .name,
    .stay-in-touch {
      font-size: 11vw;
    }
  }
</style>
