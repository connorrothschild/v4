<script>
  import Output from "./Output.svelte";
  import SvelteInput from "./SvelteInput.svelte";
  import D3Input from "./D3Input.svelte";

  import ScrollHelper from "./ScrollHelper.svelte";
  import Code from "$lib/Global/Code.svelte";

  let value;

  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";

  $: scrollTo = (value) => {
    document.getElementById("steps-container").scrollTo({
      left: scrollyElementWidth * value - 32 * value, // Some padding, idk why
      behavior: "smooth",
    });
  };
  const handleScrollClick = () => {
    const next = value + 1;
    if (!document.getElementById(`step-${next}`)?.offsetLeft) return;

    scrollTo(next);
    value = next;
  };

  let MAX_VALUE = 4;

  // The first time we reach MAX_VALUE, set hasFinished to true
  let hasFinished = false;
  $: value, value === MAX_VALUE ? (hasFinished = true) : null;

  let scrollyElementWidth;

  // Keep track of scroll progress via scrollLeft and element width
  // import sticky from "../../actions/stickyDetector";

  // export let stickToTop = true;

  // let isStuck = false;
  // $: console.log(isStuck);

  // function handleStuck(e) {
  //   isStuck = e.detail.isStuck;
  // }

  // const handleScroll = (e) => {
  //   const section = document.getElementById("steps-container");
  //   if (!section) return;

  //   // Do not proceed if the section is not at the top of the screen
  //   console.log(section.offsetTop);

  //   // Prevent default scroll behavior unless we're at the end
  //   const sectionWidth = section.scrollWidth;
  //   const scrolledPx = Math.round(section.scrollLeft + section.clientWidth);
  //   const isScrollingUp = e.deltaY < 0;
  //   // Increment scrollLeft equal to the scroll delta
  //   if (sectionWidth !== scrolledPx || isScrollingUp) {
  //     if (isScrollingUp && section.scrollLeft === 0) return;
  //     section.scrollLeft += e.deltaY;
  //     e.preventDefault();
  //   }
  // };

  $: translateX = 0;

  let objectRef;
  let sectionRef;
  let windowWidth;
  $: dynamicHeight = sectionRef ? handleDynamicHeight(sectionRef) : null;
  $: windowWidth,
    (dynamicHeight = sectionRef ? handleDynamicHeight(sectionRef) : null);

  $: calcDynamicHeight = (objectWidth) => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    return objectWidth - vw + vh + 150;
  };

  $: handleDynamicHeight = () => {
    const objectWidth = objectRef.scrollWidth;
    const dynamicHeight = calcDynamicHeight(objectWidth);
    return dynamicHeight;
  };

  const handleScroll = (e) => {
    // window.addEventListener("scroll", () => {
    //   const offsetTop = -sectionRef.offsetTop;
    //   translateX = offsetTop;
    // });
  };

  onMount(() => {
    window.addEventListener("scroll", () => {
      if (!sectionRef) return;
      const offsetTop = -sectionRef.offsetTop;
      translateX = offsetTop;
    });

    return () => {
      window.removeEventListener("scroll", () => {
        const offsetTop = -sectionRef.offsetTop;
        translateX = offsetTop;
      });
    };
  });

  let currentInput = "svelte";
</script>

<svelte:window on:resize={() => (windowWidth = window.innerWidth)} />
<!-- <section class="asdjfdsfansdjksd" on:mousewheel={handleScroll}> -->
<!-- on:touchmove={handleTouchmove}
  on:touchstart={handleTouchmove}
  on:touchend={handleTouchmove} -->
<section
  class="asdjfdsfansdjksd"
  on:wheel={handleScroll}
  style:height={`${dynamicHeight}px`}
>
  <div class="sticky-boi" bind:this={sectionRef}>
    <div class="steps-outer">
      <ScrollHelper
        bind:value
        bind:elementWidth={scrollyElementWidth}
        bind:container={objectRef}
        {translateX}
      >
        <div class="step" class:active={value === 0} id="step-0">
          <div class="step-content">
            <p>
              Our chart begins with an SVG element. Creating a container SVG
              element is a prerequisite for any SVG chart. How would we create
              our SVG element in <span class="label d3">D3</span>?
            </p>
            <Code language="js">
              {`
                const svg = d3.select('body')
    .append('svg')
                `}
            </Code>
            <p>
              Let's compare that with creating an SVG element in <span
                class="label svelte">Svelte</span
              >.
            </p>
            <Code language="svelte">
              {`
                <svg></svg>
                `}
            </Code>
          </div>
        </div>
        <div class="step" class:active={value === 1} id="step-1">
          <div class="step-content">
            <p>
              Next, we need to assign the SVG element a <code>width</code> and
              <code>height</code>.
            </p>
            <p>
              In <span class="label d3">D3</span>, we assign those attributes in
              the existing selection chain, in <code>.attr()</code> methods.
            </p>
            <Code language="js">
              {`
.attr('width', 300)
.attr('height', 300)
                `}
            </Code>
            <p>
              In <span class="label svelte">Svelte</span>, we write those
              attributes directly.
            </p>
            <Code language="svelte">
              {`
                <svg width="300" height="300"></svg>
                `}
            </Code>
          </div>
        </div>
        <div class="step" class:active={value === 2} id="step-2">
          <div class="step-content">
            <p>
              Once our SVG element is created, we'll want to render some
              circles. In <span class="label d3">D3</span>, we'll use three
              methods—<code>selectAll()</code>,
              <code>data()</code>, and <code>join()</code>—to bind data to our
              selection.
            </p>
            <Code language="js">
              {`
svg
  .selectAll("circle")
  .data(data)
  .join("circle")
  `}
            </Code>
            <p>
              In <span class="label svelte">Svelte</span>, we can use the
              <code>each</code>
              directive to bind data to our selection. Within the
              <code>each</code> block, we write the element we want to render.
            </p>
            <Code language="svelte">
              {`
<svg width="300" height="300">
    {#each data as d}
        <circle />
    {/each}
</svg>
                `}
            </Code>
          </div>
        </div>
        <div class="step" class:active={value === 3} id="step-3">
          <div class="step-content">
            <p>
              Now that we have circles, we want to <strong
                >bind data to their attributes</strong
              >. In <span class="label d3">D3</span>, we use the
              <code>attr()</code> method to bind data to attributes.
            </p>
            <Code language="js">
              {`
.attr("cx", d => xScale(d.x))
.attr("cy", d => yScale(d.y))
.attr("r", d => d.r)
                    `}
            </Code>
            <p>
              While in <span class="label svelte">Svelte</span>, we just write
              the attributes directly, and wrap them in curly braces (<code
                >{`{}`}</code
              >) to bind data.
            </p>
            <Code language="svelte">
              {`
<circle 
    cx={xScale(d.x)}
    cy={yScale(d.y)} 
    r={d.r} 
/>
                        `}
            </Code>
          </div>
        </div>
        <div class="step" class:active={value === 4} id="step-4">
          <div class="step-content">
            <p>
              And so the differences between <span class="label d3">D3</span>
              and
              <span class="label svelte">Svelte</span>
              are equivalent to the differences between <em>instructions</em>
              and
              <em>authoring</em>. In <span class="label d3">D3</span>, we write
              instructions to tell JavaScript what to render; in
              <span class="label svelte">Svelte</span>, we write our output
              directly.
            </p>
          </div>
        </div>
      </ScrollHelper>
    </div>

    <div class="sticky right">
      <div class="inputs">
        <div class="fixed-corner">
          {#if !hasFinished}
            <p class="scroll-helper" on:click={handleScrollClick}>
              Scroll &rarr;
            </p>
          {:else}
            <div in:fly={{ x: 50, delay: 250 }} class="steps-buttons">
              <p>Step</p>
              {#each [0, 1, 2, 3, 4] as step}
                <p
                  class="step-button"
                  class:active={value === step}
                  on:click={() => scrollTo(step)}
                >
                  {step + 1}
                </p>
              {/each}
            </div>
          {/if}
        </div>

        <D3Input {value} onTop={currentInput === "d3"} />
        <SvelteInput {value} onTop={currentInput === "svelte"} />

        <button
          class="switch-on-top"
          on:click={() => {
            currentInput = currentInput === "d3" ? "svelte" : "d3";
          }}
          >{currentInput === "d3" ? "Switch to Svelte" : "Switch to D3"}</button
        >
      </div>

      <!-- BEGIN OUTPUT -->
      <Output {value} {MAX_VALUE} />
    </div>
  </div>
</section>

<style>
  section {
    position: relative;
    /* left: calc(-48vw + 50%);
    width: 96vw; */
    width: 100vw;
    left: calc(-50vw + 50%);
    max-width: none;
    /* display: flex;
    flex-direction: row; */
    margin: 1rem 0;
    /* overflow-x: hidden; */
    height: 95vh;
  }

  .sticky {
    height: 100vh;
  }

  section {
    text-align: center;
    transition: background 100ms;
    /* display: flex; */
    z-index: 250;
    margin-bottom: 100px;
  }

  .step {
    /* height: 80vh; */
    width: 50%; /* var(--stepWidth); */
    margin-right: 55%;
    display: flex;
    place-items: center;
    justify-content: center;
  }

  .step-content {
    font-size: 1rem;
    background: whitesmoke;
    border-radius: 5px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: background 500ms ease;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    text-align: left;
    /* width: 75%; */
    margin: auto;
    width: max-content;
    transition: all 300ms ease;
    max-width: 668px;
  }

  .step.active .step-content {
    background: white;
  }

  .step-content p {
    font-family: GT;
    color: rgb(146, 146, 146);
    transition: all 300ms ease;
  }
  .step.active .step-content p {
    color: black;
  }

  strong {
    font-weight: 600;
    color: black;
  }

  .step-content p:not(:last-child) {
    margin-bottom: 0.75rem;
  }

  .steps-outer {
    z-index: 100;
    position: absolute;
    /* top: 50%;
    transform: translateY(-50%); */
    bottom: 1rem;
    left: 0;
    width: 100%;
    /* height: 100%; */
  }

  /* Comment out the following line to always make it 'text-on-top' */
  /* @media screen and (max-width: 768px) { */
  section {
    flex-direction: column-reverse;
  }
  /* .sticky {
    width: 100%;
    margin: auto;
  } */

  .token {
    transition: color 300ms ease;
  }

  .output code .token:not(.active) {
    color: rgba(255, 255, 255, 0.2);
  }
  /* .input .token:not(.active) {
    color: rgba(0, 0, 0, 0);
  } */

  /* Structure */
  .inputs {
    /* height: 100%; */
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    /* background: white; */
  }

  :global(.asdjfdsfansdjksd .input) {
    width: 49%;
    flex: 1 1 50%;
    position: absolute;
    top: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(10px);
    border: none;
  }

  :global(.asdjfdsfansdjksd .input.d3) {
    left: 0.5%;
  }

  :global(.asdjfdsfansdjksd .input.svelte) {
    left: 50.5%;
  }

  @media screen and (max-width: 868px) {
    :global(.asdjfdsfansdjksd .input.d3) {
      left: 0;
      width: 100%;
      height: 100%;
    }

    :global(.asdjfdsfansdjksd .input.svelte) {
      left: 0;
      width: 100%;
      height: 100%;
    }

    .step {
      width: 97.5%;
    }
    :global(.asdjfdsfansdjksd .step p) {
      font-size: 1rem;
    }

    /* :global(.asdjfdsfansdjksd .input code) {
      font-size: 0.6rem;
      line-height: 1 !important;
    } */
  }

  :global(.step-content pre[class*="language-"]:last-child) {
    margin-bottom: 0 !important;
  }

  /* Overwrite pre styles from global CSS */
  :global(.viz-article-body pre.has-filename) {
    max-width: unset;
    min-width: unset;
    padding-top: 40px !important;
  }

  :global(.viz-article-body .filename-container) {
    text-align: left;
    width: 100%;
    height: 30px;
    border-radius: 3px 3px 0 0;
    background: black;
    display: flex;
    justify-content: flex-start;
    place-items: center;

    position: absolute;
    top: 0;
    right: 0;
  }

  :global(.viz-article-body .filename-container.d3-file) {
    background: #004e82;
  }

  :global(.viz-article-body .filename-container.svelte-file) {
    background: #ff3e00;
  }

  :global(.viz-article-body .filename) {
    color: white;
    padding: 0.5rem;
    font-weight: 400;
    font-family: var(--font-mono);
  }

  .label {
    padding: 1px 4px;
    font-weight: 400;
    color: white;
    border-radius: 3px;
  }

  .label.d3 {
    background: #004e82;
  }

  .label.svelte {
    background: #ff3e00;
  }

  /* FIXME: DECIDE: Omit code chunks from step-content? */
  /* :global(.asdjfdsfansdjksd .step-content pre) {
        display: none;
    } */

  .fixed-corner {
    position: absolute;
    bottom: -7px;
    right: 7px;
    border-radius: 0 0 6px 6px;
    transform: translate(0, 100%);
    background: rgba(0, 0, 0, 0.85);
    padding: 8px 6px 6px 6px;
    z-index: -1;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    user-select: none;
    line-height: 1;
    width: 170px;
    height: 50px;
    display: flex;
    justify-content: center;
    place-items: center;
  }

  .scroll-helper {
    cursor: pointer;
    width: 100%;
    text-align: center;
  }

  .steps-buttons {
    display: flex;
    place-items: center;
    justify-content: center;
    gap: 6px;
  }

  .steps-buttons .step-button {
    border-radius: 50%;
    width: 12px;
    height: 12px;
    display: flex;
    justify-content: center;
    place-items: center;
    transition: opacity 300ms ease;
    cursor: pointer;
  }

  .step-button:not(.active) {
    opacity: 0.3;
  }

  .step {
    /* transform: translate(100%) */
    transform: translateX(100%);
  }

  .step:last-of-type {
    margin-right: 0;
    padding-right: 2rem;
  }

  /* .steps-outer {
    position: sticky;
    top: 0;
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
  } */

  .sticky-boi {
    position: sticky;
    top: 0;
    height: 97.5vh;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    z-index: 99;
  }
  /* @media screen and (min-width: 868px) {
    .sticky-boi {
      top: var(--nav-height);
      height: calc(97.5vh - var(--nav-height));
    }
  } */

  .switch-on-top {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem;
    padding: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    background: #fff;
    color: #000;
    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
    font-family: var(--font-mono);
    z-index: 100;
  }

  @media screen and (min-width: 868px) {
    .switch-on-top {
      display: none;
    }
  }
</style>
