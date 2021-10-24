<script>
  import Spinner from "$lib/Spinner.svelte";
  import Transition from "$lib/Transition.svelte";
  let options = ["Axios", "Texas Policy Lab", "USSOCOM"];
</script>

<Transition />
<main>
  <section>
    <h1 class="title transition-title">
      Hi, I'm <span class="gradient-accented" style="font-weight: 600;"
        >Connor Rothschild.</span
      >
    </h1>
    <h2 class="subtitle transition-subtitle">
      I tell visual stories on the web. Right now, I lead the interactives and
      visualization team at <a
        href="https://www.mokshadata.com/"
        target="_blank">Moksha Data</a
      >.
      <!-- Previously, I did similar work at <Spinner {options} /> -->
    </h2>
  </section>

  <section class="content transition-content">
    <p>
      I make data make sense for people in the government and nonprofit space.
      At Moksha, I lead the development of interactives, web applications, and
      visual essays for our partners in the social impact space.
    </p>
    <p>
      We make it easier for you to talk about the impact you're making in your
      community, through data-driven and engaging visual stories.
    </p>
    <p>
      Interested in working with us? <a
        href="mailto:connor@mokshadata.com?subject=Project%20Inquiry"
        >Reach out.</a
      >
    </p>
  </section>
  <div class="link-container block pulled-right transition-content">
    <a sveltekit:prefetch href="/experience">More about me &#8594;</a>
  </div>
</main>

<style>
  main {
    max-width: 860px;
    margin: 0 auto;
    padding: 1em;
    width: 90%;
    margin-bottom: 2rem;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex: 1;
  }

  .title {
    margin: 3rem 0 2rem;
    font-size: 74px;
    text-align: left;
    letter-spacing: -1px;
    font-weight: 200;
  }

  .subtitle {
    font-size: 32px;
    line-height: 1.3;
    margin-bottom: 2rem;
    font-weight: 300;
  }

  .subtitle {
    width: 80%;
  }

  .content {
    width: 70%;
    text-align: justify;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    color: rgb(70, 70, 70);
    letter-spacing: 0.12px;
  }

  .link-container {
    margin-top: 1rem;
  }

  @media (max-width: 900px) {
    .title {
      font-size: 8vw;
    }

    .subtitle {
      font-size: 3.5vw;
    }

    p {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 768px) {
    .title {
      font-size: 8vw; /* 3.5rem; */
    }
    .subtitle {
      font-size: 4vw; /* 1.75rem; */
      width: auto;
    }
    .content {
      width: 90%;
      text-align: left;
    }

    p {
      font-size: 1.15rem;
    }
  }

  @media (max-width: 568px) {
    .title {
      font-size: 3.5rem;
      margin: 1rem 0 1.5rem 0;
    }

    .subtitle {
      font-size: 1.35rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 468px) {
    .title {
      font-size: 3rem;
    }

    .subtitle {
      font-size: 1.35rem;
    }

    .content {
      width: auto;
    }
  }
</style>
