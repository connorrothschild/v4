<script>
  /* Final version: https://svelte.dev/repl/82181dc9c8c04053a7ebabd03c654d1d?version=3.44.3 */
  import Scroll from "./Scroll.svelte";

  import { tweened } from "svelte/motion";

  let currentStep;
  let number = tweened(0);

  $: if (currentStep == 0) {
    number.set(100);
  } else if (currentStep == 1) {
    number.set(200);
  } else if (currentStep == 2) {
    number.set(300);
  }
</script>

<section>
  <Scroll bind:value={currentStep}>
    {#each [1, 2, 3] as text, i}
      <div class="step" class:active={currentStep === i}>
        <div class="step-content">
          <p class="example-step-paragraph">Step {text}</p>
        </div>
      </div>
    {/each}
  </Scroll>
  <h1 class="sticky">{Math.round($number)}</h1>
</section>

<style>
  section {
    height: 80vh;
    overflow-y: scroll;
    background: var(--semitransparent-bg);
    margin-bottom: 1.15rem;
    z-index: 3;
    position: relative;
  }

  .step {
    height: 60vh;
    display: flex;
    place-items: center;
    justify-content: center;
  }

  .step-content {
    background: whitesmoke;
    padding: 0.5rem 1rem;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    transition: background 500ms ease, color 500ms ease;
  }

  .sticky {
    position: sticky;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 1rem;
  }

  :global(.step-content .example-step-paragraph) {
    color: #ccc;
    margin-bottom: 0;
  }

  :global(.step.active .step-content) {
    background: white !important;
  }

  :global(.step.active .step-content .example-step-paragraph) {
    color: black !important;
  }
</style>
