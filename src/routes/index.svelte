<script>
  import Spinner from "$lib/Spinner.svelte";
  import Transition from "$lib/Transitions/Home.svelte";
  let options = ["Axios", "Texas Policy Lab", "USSOCOM"];
</script>

<Transition />
<main>
  <section>
    <h1 class="title">
      Hi, I'm <span
        class="gradient-accented block-if-mobile"
        style="font-weight: 600;">Connor Rothschild</span
      >
    </h1>
    <h2 class="subtitle">
      I'm a data scientist who specializes in telling visual stories on the web.
      Right now, I'm doing that at <a
        href="https://www.mokshadata.com/"
        target="_blank">Moksha Data</a
      >. Previously, I did similar work at <Spinner {options} />
    </h2>
  </section>

  <section class="content">
    <p>
      During my time at Rice University, I found that nothing motivates me like <em
        >impact</em
      >. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
      explicabo? Blanditiis, laborum aliquid odit magni possimus numquam
      necessitatibus cumque vel. Impedit animi possimus culpa explicabo mollitia
      fugit delectus dolores qui!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, explicabo?
      Blanditiis, laborum aliquid odit magni possimus numquam necessitatibus
      cumque vel. Impedit animi possimus culpa explicabo mollitia fugit delectus
      dolores qui!
    </p>

    <a sveltekit:prefetch href="/post" class="pulled-right padding-bottom"
      >See my blog &#8594;</a
    >
  </section>
</main>

<style>
  main {
    max-width: 780px;
    margin: 0 auto;
    padding: 1em;
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
    font-size: 64px;
    text-align: left;
    letter-spacing: -1px;
    font-weight: 200;
  }

  .subtitle {
    font-size: 32px;
    line-height: 1.5;
    margin-bottom: 2rem;
    font-weight: 300;
  }

  p {
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3.5rem;
    }
    h2 {
      font-size: 1.75rem;
    }
    .block-if-mobile {
      display: block;
    }
  }

  @media (max-width: 568px) {
    h1 {
      font-size: 3.5rem;
    }
    h2 {
      font-size: 1.5rem;
      line-height: 1.25;
    }
  }
</style>
