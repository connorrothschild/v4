<script>
</script>

<footer>
  <div class="flex-container">
    <div class="left">
      <h1 class="name">Thanks for visiting <span class="wave">👋</span></h1>
      <div class="column-content copyright">
        <p style="font-weight: 400; font-size: 1.2rem;">Connor Rothschild</p>
        <p style="font-size: .95rem;">All rights reserved © 2023</p>
      </div>
    </div>
    <div class="right">
      <div class="column">
        <h5 class="column-header">Connect</h5>
        <div class="column-content connect">
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
        </div>
      </div>
      <div class="column">
        <h5 class="column-header">Contact</h5>
        <div class="column-content contact">
          <a
            class="link"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:connor@connorrothschild.com">Personal</a
          >
          <a
            class="link"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:connor@mokshadata.com">Work</a
          >
          <a
            class="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://calendly.com/connorrothschild/meeting">Meet</a
          >
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  footer {
    display: flex;
    place-items: center;
    height: 300px;
    padding: 3rem 1rem;
    background: var(--footer-bg);
    color: var(--pure-text-color);
    position: relative;
    z-index: 99;
    box-shadow: -1px -1px 6px var(--box-shadow-color);
    transition: height 300ms ease;
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

  footer h1 {
    color: var(--pure-text-color);
  }

  .right {
    display: flex;
    justify-content: space-evenly;
  }

  .left,
  .right {
    flex: 1;
  }

  .left {
    text-align: left;
  }

  .name {
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 1rem;
    letter-spacing: 0.025rem;
  }

  .copyright {
    font-size: 0.85rem;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--pure-text-color);
    font-family: var(--font-sans);
  }

  .column-header {
    text-align: center;
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-family: var(--font-serif);
    font-weight: 600;
    font-size: 2rem;
    color: var(--pure-text-color);
  }

  .column-content {
    display: flex;
    flex-direction: column;
  }

  .column-content.copyright {
    place-items: flex-start;
  }

  .column-content.connect,
  .column-content.contact {
    place-items: center;
  }

  .link {
    color: var(--pure-text-color);
    font-family: var(--font-sans);
    margin-bottom: 0.15rem;
    padding-bottom: 0.25rem;
    font-weight: 200;
    font-size: 1.1rem;
    letter-spacing: 0.025rem;
    width: min-content;
    text-transform: uppercase;
  }

  .wave:hover {
    display: inline-block;
    animation: wiggle 700ms linear forwards;
  }

  @keyframes wiggle {
    0% {
      transform: rotate(0);
    }
    20% {
      transform: rotate(7.5deg);
    }
    40% {
      transform: rotate(-7.5deg);
    }
    60% {
      transform: rotate(7.5deg);
    }
    80% {
      transform: rotate(-7.5deg);
    }
    100% {
      transform: rotate(0);
    }
  }

  @media screen and (max-width: 868px) {
    footer {
      height: 400px;
    }
    .flex-container {
      flex-direction: column;
    }
    .left {
      width: 100%;
    }
    .right {
      width: 80%;
      margin-left: auto;
      justify-content: flex-end;
      place-items: flex-end !important;
    }
    .right .column:first-of-type {
      margin-right: 10%;
    }
    .name {
      font-size: 2.5rem;
    }
    .link {
      font-size: 1rem;
    }
    .column-content.connect,
    .column-content.contact {
      place-items: flex-end;
    }
  }

  @media screen and (max-width: 468px) {
    .right {
      width: 100%;
      justify-content: space-between;
    }

    .right .column:first-of-type .column-content {
      align-items: flex-start;
    }

    .right .column:last-of-type .column-content {
      align-items: flex-end;
    }

    .name {
      font-size: 2rem;
    }

    .copyright {
      font-size: 0.65rem;
    }
  }
</style>
