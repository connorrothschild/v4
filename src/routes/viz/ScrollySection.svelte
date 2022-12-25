<script>
  import ScrollHelper from "./ScrollHelper.svelte";
  import Code from "$lib/Global/Code.svelte";

  let value;

  import { fade } from "svelte/transition";

  const handleScrollClick = () => {
    const next = value + 1;
    if (!document.getElementById(`step-${next}`)?.offsetLeft) return;

    document.getElementById("steps-container").scrollTo({
      left: document.getElementById(`step-${next}`).offsetLeft - 30,
      behavior: "smooth",
    });
    value = next;
  };
</script>

<section>
  <!-- {#if value === 0} -->
  <div class="scroll-helper" on:click={handleScrollClick}>Scroll &rarr;</div>
  <!-- {/if} -->
  <div class="asdjfdsfansdjksd steps-container">
    <ScrollHelper bind:value>
      <div class="step" class:active={value === 0} id="step-0">
        <div class="step-content">
          <p>
            Our chart begins with an SVG element. Creating a container SVG
            element is a prerequisite for any SVG chart. How would we create our
            SVG element in <span class='label d3'>D3</span>?
          </p>
          <Code language="js">
            {`
                const svg = d3.select('body')
    .append('svg')
                `}
          </Code>
          <p>Let's compare that with creating an SVG element in <span class='label svelte'>Svelte</span>.</p>
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
            In <span class='label d3'>D3</span>, we assign those attributes in the existing selection chain,
            in <code>.attr()</code> methods.
          </p>
          <Code language="js">
            {`
.attr('width', 300)
.attr('height', 300)
                `}
          </Code>
          <p>In <span class='label svelte'>Svelte</span>, we write those attributes directly.</p>
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
            Once our SVG element is created, we'll want to render some circles.
            In <span class='label d3'>D3</span>, we'll use three methods—<code>selectAll()</code>,
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
            In <span class='label svelte'>Svelte</span>, we can use the <code>each</code> directive to bind data
            to our selection. Within the <code>each</code> block, we write the element
            we want to render.
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
            >. In <span class='label d3'>D3</span>, we use the <code>attr()</code> method to bind data to attributes.
          </p>
          <Code language="js">
            {`
.attr("cx", d => xScale(d.x))
.attr("cy", d => yScale(d.y))
.attr("r", d => d.r)
                    `}
          </Code>
          <p>
            While in <span class='label svelte'>Svelte</span>, we just write the attributes directly, and wrap
            them in curly braces (<code>{`{}`}</code>) to bind data.
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
      <div class="spacer" id="step-4" />
    </ScrollHelper>
  </div>

  <div class="sticky right">
    <div class="inputs">
        <!-- BEGIN D3 INPUT -->
      <pre class="input d3 language-js" data-line="" tabindex="0"><div
          class="filename-container d3-file"><span class="filename"
            >D3 input</span
          ></div><code class="s-FmIZz_qVofT0 language-js"
          >{#if value >= 0}<span in:fade={{ delay: 1000 }} out:fade
              ><span class="token keyword">const</span> <span class="token"
                >svg</span
              > <span class="token operator">=</span> <span class="token"
                >d3</span
              ><span class="token punctuation">.</span><span
                class="token function">select</span
              ><span class="token punctuation">(</span><span
                class="token string">'body'</span
              ><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function"
                >append</span
              ><span class="token punctuation">(</span><span
                class="token string">'svg'</span
              ><span class="token punctuation">)</span></span
            >{/if}{#if value >= 1}<span in:fade={{ delay: 1000 }} out:fade>   
    <span class="token punctuation">.</span><span class="token function"
                >attr</span
              ><span class="token punctuation">(</span><span
                class="token string">'width'</span
              ><span class="token punctuation">,</span> <span
                class="token number">300</span
              ><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function"
                >attr</span
              ><span class="token punctuation">(</span><span
                class="token string">'height'</span
              ><span class="token punctuation">,</span> <span
                class="token number">300</span
              ><span class="token punctuation">)</span><span
                class="token punctuation">;</span
              >
            </span>{/if}
{#if value >= 2}<span in:fade={{ delay: 1000 }} out:fade
              >svg
  <span class="token punctuation">.</span><span class="token function"
                >selectAll</span
              ><span class="token punctuation">(</span><span
                class="token string">"circle"</span
              ><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function"
                >data</span
              ><span class="token punctuation">(</span>data<span
                class="token punctuation">)</span
              >
  <span class="token punctuation">.</span><span class="token function"
                >join</span
              ><span class="token punctuation">(</span><span
                class="token string">"circle"</span
              ><span class="token punctuation">)</span></span
            >{/if}
  {#if value >= 3}<span in:fade={{ delay: 1000 }} out:fade
              ><span class="token punctuation">.</span><span
                class="token function">attr</span
              ><span class="token punctuation">(</span><span
                class="token string">"cx"</span
              ><span class="token punctuation">,</span> <span
                class="token parameter">d</span
              > <span class="token operator">=&gt;</span> <span
                class="token function">xScale</span
              ><span class="token punctuation">(</span>d<span
                class="token punctuation">.</span
              >x<span class="token punctuation">)</span><span
                class="token punctuation">)</span
              >
  <span class="token punctuation">.</span><span class="token function"
                >attr</span
              ><span class="token punctuation">(</span><span
                class="token string">"cy"</span
              ><span class="token punctuation">,</span> <span
                class="token parameter">d</span
              > <span class="token operator">=&gt;</span> <span
                class="token function">yScale</span
              ><span class="token punctuation">(</span>d<span
                class="token punctuation">.</span
              >y<span class="token punctuation">)</span><span
                class="token punctuation">)</span
              >
  <span class="token punctuation">.</span><span class="token function"
                >attr</span
              ><span class="token punctuation">(</span><span
                class="token string">"r"</span
              ><span class="token punctuation">,</span> <span
                class="token parameter">d</span
              > <span class="token operator">=&gt;</span> d<span
                class="token punctuation">.</span
              >r<span class="token punctuation">)</span></span
            >{/if}
</code></pre>

        <!-- BEGIN SVELTE INPUT -->
      <pre class="input svelte language-html" data-line="" tabindex="0"><div
          class="filename-container svelte-file"><span class="filename"
            >Svelte input</span
          ></div><code class="s-FmIZz_qVofT0 language-html"
          >{#if value >= 0}<span in:fade={{ delay: 2000 }} out:fade
              ><span class="token tag"
                ><span class="token tag"
                  ><span class="token punctuation">&lt;</span>svg</span
                ></span
              ></span
            >{/if}{#if value >= 1}<span
              in:fade={{ delay: 2000 }}
              out:fade> <span class="token attr-name">width</span><span
                class="token attr-value"
                ><span class="token punctuation attr-equals">=</span><span
                  class="token punctuation">"</span
                >300<span class="token punctuation">"</span></span
              > <span class="token attr-name">height</span><span
                class="token attr-value"
                ><span class="token punctuation attr-equals">=</span><span
                  class="token punctuation">"</span
                >300<span class="token punctuation">"</span></span
              ></span
            >{/if}{#if value >= 0}<span in:fade={{ delay: 2000 }} out:fade
              ><span class="token tag" /><span class="token punctuation"
                >&gt;<span class="token tag" /></span
              ></span
            >{/if}
    {#if value >= 2}<span in:fade={{ delay: 2000 }} out:fade
              ><span class="token each"
                ><span class="token punctuation">{`{`}</span><span
                  class="token keyword">#each</span
                > <span class="token language-javascript">data </span><span
                  class="token keyword">as</span
                > <span class="token language-javascript"
                  >d<span class="token punctuation">{`}`}</span></span
                ></span
              >
        <span class="token tag"
                ><span class="token tag"
                  ><span class="token punctuation">&lt;</span>circle</span
                ></span
              ></span
            >{/if}{#if value >= 3}<span in:fade={{ delay: 2000 }} out:fade>
            <span class="token attr-name">cx=</span><span
                class="token language-javascript"
                ><span class="token punctuation">{`{`}</span><span
                  class="token function">xScale</span
                ><span class="token punctuation">(</span>d<span
                  class="token punctuation">.</span
                >x<span class="token punctuation">)</span><span
                  class="token punctuation">{`}`}</span
                ></span
              >
            <span class="token attr-name">cy=</span><span
                class="token language-javascript"
                ><span class="token punctuation">{`{`}</span><span
                  class="token function">yScale</span
                ><span class="token punctuation">(</span>d<span
                  class="token punctuation">.</span
                >y<span class="token punctuation">)</span><span
                  class="token punctuation">{`}`}</span
                ></span
              >
            <span class="token attr-name">r=</span><span
                class="token language-javascript"
                ><span class="token punctuation">{`{`}</span>d<span
                  class="token punctuation">.</span
                >r<span class="token punctuation">{`}`}</span></span
              >
        </span>{/if} {#if value >= 2}<span in:fade={{ delay: 2000 }} out:fade
              ><span class="token punctuation">/&gt;</span>
    <span class="token each"
                ><span class="token punctuation">{`{`}</span><span
                  class="token keyword">/each</span
                ><span class="token punctuation">{`}`}</span></span
              ></span
            >{/if}
{#if value >= 0}<span in:fade={{ delay: 2000 }} out:fade
              ><span class="token tag"
                ><span class="token punctuation">&lt;/</span>svg</span
              ><span class="token punctuation">&gt;</span></span
            >{/if}
</code></pre>
    </div>

    <!-- BEGIN OUTPUT -->
    <pre class="output language-html"><div class="filename-container"><span
          class="filename">Compiled output for both</span
        ></div><code class="language-html"
        ><span class="token tag"
          ><span class="token tag" class:active={value === 0 || value === 1}
            ><span
              class="token punctuation"
              class:active={value === 0 || value === 1}>&lt;</span
            >svg</span
          > <span class="token attr-name" class:active={value === 1}>width</span
          ><span class="token attr-value" class:active={value === 1}
            ><span
              class="token punctuation attr-equals"
              class:active={value === 1}>=</span
            ><span class="token punctuation" class:active={value === 1}>"</span
            >300<span class="token punctuation" class:active={value === 1}
              >"</span
            ></span
          > <span class="token attr-name" class:active={value === 1}
            >height</span
          ><span class="token attr-value" class:active={value === 1}
            ><span
              class="token punctuation attr-equals"
              class:active={value === 1}>=</span
            ><span class="token punctuation" class:active={value === 1}>"</span
            >300<span class="token punctuation" class:active={value === 1}
              >"</span
            ></span
          ><span
            class="token punctuation"
            class:active={value === 0 || value === 1}>&gt;</span
          ></span
        >
    <span class="token tag"
          ><span class="token tag" class:active={value === 2}
            ><span class="token punctuation" class:active={value === 2}
              >&lt;</span
            >circle</span
          > <span class="token attr-name" class:active={value === 3}>cx</span
          ><span class="token attr-value" class:active={value === 3}
            ><span
              class="token punctuation attr-equals"
              class:active={value === 3}>=</span
            ><span class="token punctuation" class:active={value === 3}>"</span
            >54<span class="token punctuation" class:active={value === 3}
              >"</span
            ></span
          > <span class="token attr-name" class:active={value === 3}>cy</span
          ><span class="token attr-value" class:active={value === 3}
            ><span
              class="token punctuation attr-equals"
              class:active={value === 3}>=</span
            ><span class="token punctuation" class:active={value === 3}>"</span
            >246<span class="token punctuation" class:active={value === 3}
              >"</span
            ></span
          > <span class="token attr-name" class:active={value === 3}>r</span
          ><span class="token attr-value" class:active={value === 3}
            ><span
              class="token punctuation attr-equals"
              class:active={value === 3}>=</span
            ><span class="token punctuation" class:active={value === 3}>"</span
            >25<span class="token punctuation" class:active={value === 3}
              >"</span
            ></span
          > <span class="token punctuation" class:active={value === 3}
            >/&gt;</span
          ></span
        >
    <span class="token tag"
          ><span class="token tag" class:active={value === 2}
            ><span class="token punctuation" class:active={value === 2}
              >&lt;</span
            >circle</span
          > <span class="token attr-name" class:active={value === 3}>cx</span
          ><span class="token attr-value" class:active={value === 3}
            ><span
              class="token punctuation attr-equals"
              class:active={value === 3}>=</span
            ><span class="token punctuation" class:active={value === 3}>"</span
            >108<span class="token punctuation" class:active={value === 3}
              >"</span
            ></span
          > <span class="token attr-name" class:active={value === 3}>cy</span
          ><span class="token attr-value" class:active={value === 3}
            ><span
              class="token punctuation attr-equals"
              class:active={value === 3}>=</span
            ><span class="token punctuation" class:active={value === 3}>"</span
            >192<span class="token punctuation" class:active={value === 3}
              >"</span
            ></span
          > <span class="token attr-name" class:active={value === 3}>r</span
          ><span class="token attr-value" class:active={value === 3}
            ><span
              class="token punctuation attr-equals"
              class:active={value === 3}>=</span
            ><span class="token punctuation" class:active={value === 3}>"</span
            >25<span class="token punctuation" class:active={value === 3}
              >"</span
            ></span
          > <span class="token punctuation" class:active={value === 3}
            >/&gt;</span
          ></span
        >
    <span class="token tag"
          ><span class="token tag" class:active={value === 2}
            ><span class="token punctuation" class:active={value === 2}
              >&lt;</span
            >circle</span
          > <span class="token attr-name" class:active={value === 3}>cx</span
          ><span class="token attr-value" class:active={value === 3}
            ><span
              class="token punctuation attr-equals"
              class:active={value === 3}>=</span
            ><span class="token punctuation" class:active={value === 3}>"</span
            >162<span class="token punctuation" class:active={value === 3}
              >"</span
            ></span
          > <span class="token attr-name" class:active={value === 3}>cy</span
          ><span class="token attr-value" class:active={value === 3}
            ><span
              class="token punctuation attr-equals"
              class:active={value === 3}>=</span
            ><span class="token punctuation" class:active={value === 3}>"</span
            >138<span class="token punctuation" class:active={value === 3}
              >"</span
            ></span
          > <span class="token attr-name" class:active={value === 3}>r</span
          ><span class="token attr-value" class:active={value === 3}
            ><span
              class="token punctuation attr-equals"
              class:active={value === 3}>=</span
            ><span class="token punctuation" class:active={value === 3}>"</span
            >25<span class="token punctuation" class:active={value === 3}
              >"</span
            ></span
          > <span class="token punctuation" class:active={value === 3}
            >/&gt;</span
          ></span
        >
    <span class="token tag"
          ><span class="token tag" class:active={value === 2}
            ><span class="token punctuation" class:active={value === 2}
              >&lt;</span
            >circle</span
          > <span class="token attr-name" class:active={value === 3}>cx</span
          ><span class="token attr-value" class:active={value === 3}
            ><span
              class="token punctuation attr-equals"
              class:active={value === 3}>=</span
            ><span class="token punctuation" class:active={value === 3}>"</span
            >216<span class="token punctuation" class:active={value === 3}
              >"</span
            ></span
          > <span class="token attr-name" class:active={value === 3}>cy</span
          ><span class="token attr-value" class:active={value === 3}
            ><span
              class="token punctuation attr-equals"
              class:active={value === 3}>=</span
            ><span class="token punctuation" class:active={value === 3}>"</span
            >84<span class="token punctuation" class:active={value === 3}
              >"</span
            ></span
          > <span class="token attr-name" class:active={value === 3}>r</span
          ><span class="token attr-value" class:active={value === 3}
            ><span
              class="token punctuation attr-equals"
              class:active={value === 3}>=</span
            ><span class="token punctuation" class:active={value === 3}>"</span
            >25<span class="token punctuation" class:active={value === 3}
              >"</span
            ></span
          > <span class="token punctuation" class:active={value === 3}
            >/&gt;</span
          ></span
        >
    <span class="token tag"
          ><span class="token tag" class:active={value === 2}
            ><span class="token punctuation" class:active={value === 2}
              >&lt;</span
            >circle</span
          > <span class="token attr-name" class:active={value === 3}>cx</span
          ><span class="token attr-value" class:active={value === 3}
            ><span
              class="token punctuation attr-equals"
              class:active={value === 3}>=</span
            ><span class="token punctuation" class:active={value === 3}>"</span
            >270<span class="token punctuation" class:active={value === 3}
              >"</span
            ></span
          > <span class="token attr-name" class:active={value === 3}>cy</span
          ><span class="token attr-value" class:active={value === 3}
            ><span
              class="token punctuation attr-equals"
              class:active={value === 3}>=</span
            ><span class="token punctuation" class:active={value === 3}>"</span
            >30<span class="token punctuation" class:active={value === 3}
              >"</span
            ></span
          > <span class="token attr-name" class:active={value === 3}>r</span
          ><span class="token attr-value" class:active={value === 3}
            ><span
              class="token punctuation attr-equals"
              class:active={value === 3}>=</span
            ><span class="token punctuation" class:active={value === 3}>"</span
            >25<span class="token punctuation" class:active={value === 3}
              >"</span
            ></span
          > <span class="token punctuation" class:active={value === 3}
            >/&gt;</span
          ></span
        >
<span class="token tag"
          ><span class="token tag" class:active={value === 0 || value === 1}
            ><span
              class="token punctuation"
              class:active={value === 0 || value === 1}>&lt;/</span
            >svg</span
          ><span
            class="token punctuation"
            class:active={value === 0 || value === 1}>&gt;</span
          ></span
        ></code
      ></pre>
  </div>
</section>

<style>
  section {
    position: relative;
    left: calc(-48vw + 50%);
    width: 96vw;
    max-width: none;
    display: flex;
    flex-direction: row;
    margin: 1rem 0;
    /* overflow-x: hidden; */
    height: 95vh;
  }

  .spacer {
    width: 100vw;
  }

  .sticky {
    position: sticky;
    top: 0;
    height: 100vh;
  }

  .output {
    position: sticky;
    /* top: 50%;
    transform: translateY(-50%); */
    top: 100%;
    /* right: 1rem; */
    height: 205px;
    width: 390px;
    margin-left: auto;
    margin-right: 2rem;
    box-shadow: 1px 1px 25px rgba(255, 255, 255, 0.3);
  }

  section {
    text-align: center;
    transition: background 100ms;
    display: flex;
    z-index: 250;
  }

  .step {
    /* height: 80vh; */
    width: 55vw;
    margin-right: 55vw;
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

  .steps-container {
    flex: 1 1 50%;
    z-index: 10;
    position: absolute;
    /* top: 50%;
    transform: translateY(-50%); */
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  /* Comment out the following line to always make it 'text-on-top' */
  /* @media screen and (max-width: 768px) { */
  section {
    flex-direction: column-reverse;
  }
  .sticky {
    width: 100%;
    margin: auto;
  }

  .token {
    transition: color 300ms ease;
  }

  .output .token:not(.active) {
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

  .input {
    width: 49%;
    flex: 1 1 50%;
    position: absolute;
    top: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(10px);
  }

  .d3 {
    left: 0.5%;
  }

  .svelte {
    left: 50.5%;
  }

  :global(.step-content pre[class*="language-"]:last-child) {
    margin-bottom: 0 !important;
  }

  /* Overwrite pre styles from global CSS */
  pre {
    max-width: unset;
    min-width: unset;
    padding-top: 40px;
  }

  .filename-container {
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

  .filename-container.d3-file {
    background: #004e82;
  }

  .filename-container.svelte-file {
    background: #ff3e00;
  }

  .filename {
    color: white;
    padding: 0.5rem;
    font-weight: 400;
  }

  .scroll-helper {
    position: absolute;
    bottom: 220px;
    right: 0;
    padding: 1rem;
    z-index: 100;
    cursor: pointer;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    user-select: none;
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
</style>
