<script>
  import { fade } from "svelte/transition";
  import sticky from "../../actions/stickyDetector.js";

  let isStuck = false;

  function handleStuck(e) {
    isStuck = e.detail.isStuck;
  }

  $: isStuck, runTransition();

  let active = false;

  function runTransition() {
    isStuck ? (active = true) : (active = false);
  }
</script>

<div class="wrapper">
  {#if active}
    <div transition:fade={{ duration: 200 }} class="transition-overlay" />
  {/if}
  <div class="right fixed sticky-stack">
    <div class="fixed-step zero">
      <h1 class="title">
        Hi, I'm <span class="gradient-accented" style="font-weight: 600;"
          >Connor Rothschild.</span
        >
      </h1>
    </div>
    <div class="fixed-step one">
      <h2 class="subtitle">
        And I tell visual stories on the web. Right now, I lead the interactives
        and visualization team at <a
          href="https://www.mokshadata.com/"
          target="_blank">Moksha Data</a
        >.
      </h2>
    </div>
    <div class="fixed-step two">
      <h3>
        I make data make sense for people in the <strong>government</strong> and
        <strong>nonprofit</strong> space. At Moksha, I lead the development of interactives,
        web applications, and visual essays for our partners in the social impact
        space.
      </h3>
    </div>
    <div class="fixed-step three">
      <h3>
        We make it easier for you to talk about the impact you're making in your
        community, through <strong>data-driven</strong> and
        <strong>engaging</strong> visual stories. Interested in working with us?
        <a href="mailto:connor@mokshadata.com?subject=Project%20Inquiry"
          >Reach out.</a
        >
      </h3>
    </div>
    <div
      class="buffer"
      use:sticky={{ stickToTop: true, rootMargin: "10%" }}
      on:stuck={handleStuck}
    />
  </div>
</div>

<style>
  .transition-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: var(--tertiary-color);
    z-index: 10;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: visible;
  }

  .fixed-step {
    min-height: 50vh;
    display: flex;
    place-items: center;
    justify-content: center;
    color: var(--heading-color);
    text-align: left;
  }

  h1 {
    font-size: 5rem;
    line-height: 0.9;
    font-weight: 900;
    letter-spacing: -2px;
    margin-right: auto;
    text-align: left;
    letter-spacing: -1px;
    font-weight: 200;
  }

  h2 {
    font-size: 3rem;
    line-height: 1.1;
    font-weight: 200;
    font-family: var(--font-serif);
    margin-bottom: 2rem;
    font-weight: 300;
    margin-right: auto;
  }

  h3 {
    font-size: 1.75rem;
    line-height: 1.1;
    font-weight: 200;
    font-family: var(--font-sans);
    margin-right: auto;
    color: var(--pure-text-color);
  }

  strong {
    font-weight: 400;
  }

  .wrapper {
    display: flex;
    position: relative;
  }

  .sticky-stack {
    overflow: unset;
  }

  .sticky-stack .fixed-step {
    position: sticky;
    /* min-height: 50vh; */
  }

  .sticky-stack .zero {
    top: 0vh;
  }

  .sticky-stack .one {
    top: 20vh;
  }

  .sticky-stack .two {
    top: 35vh;
  }

  .sticky-stack .three {
    top: 50vh;
  }

  .buffer {
    top: 60vh;
    height: 20vh;
    position: sticky;
  }

  @media (max-width: 1068px) {
    h2 {
      font-size: 2.1rem;
    }

    h3 {
      font-size: 1.7rem;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2.1rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 568px) {
    h1 {
      font-size: 3.5rem;
    }

    h2 {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 468px) {
    h1 {
      font-size: 3.15rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1rem;
    }
  }
</style>
