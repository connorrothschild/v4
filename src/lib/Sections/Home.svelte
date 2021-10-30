<script>
  import Transition from "$lib/Transition.svelte";
  import ScrollIntro from "./ScrollIntro.svelte";
</script>

<Transition />
<section>
  <ScrollIntro />

  <!-- <div>
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
    </h2>
  </div>

  <div class="content transition-content">
    <p>
      I make data make sense for people in the <strong>government</strong> and
      <strong>nonprofit</strong> space. At Moksha, I lead the development of interactives,
      web applications, and visual essays for our partners in the social impact space.
    </p>
    <p>
      We make it easier for you to talk about the impact you're making in your
      community, through <strong>data-driven</strong> and
      <strong>engaging</strong> visual stories.
    </p>
    <p>
      Interested in working with us? <a
        href="mailto:connor@mokshadata.com?subject=Project%20Inquiry"
        >Reach out.</a
      >
    </p>
  </div> -->
</section>

<style>
  section {
    max-width: 1068px;
    padding: 1rem;
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
    color: var(--text-color);
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
