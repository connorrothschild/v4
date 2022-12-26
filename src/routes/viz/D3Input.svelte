<script>
  export let value;
  export let MAX_VALUE;

  import { fade } from "svelte/transition";
</script>

<pre class="input d3 language-js has-filename" data-line="" tabindex="0"><div
    class="filename-container d3-file"><span class="filename">D3 input</span
    ></div><code class="s-FmIZz_qVofT0 language-js"
    >{#if value >= 0}<span in:fade={{ delay: 1000 }} out:fade
        ><span class="token keyword">const</span> <span class="token">svg</span
        > <span class="token operator">=</span> <span class="token">d3</span
        ><span class="token punctuation">.</span><span class="token function"
          >select</span
        ><span class="token punctuation">(</span><span class="token string"
          >'body'</span
        ><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function"
          >append</span
        ><span class="token punctuation">(</span><span class="token string"
          >'svg'</span
        ><span class="token punctuation">)</span></span
      >{/if}{#if value >= 1}<span in:fade={{ delay: 1000 }} out:fade>   
    <span class="token punctuation">.</span><span class="token function"
          >attr</span
        ><span class="token punctuation">(</span><span class="token string"
          >'width'</span
        ><span class="token punctuation">,</span> <span class="token number"
          >300</span
        ><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function"
          >attr</span
        ><span class="token punctuation">(</span><span class="token string"
          >'height'</span
        ><span class="token punctuation">,</span> <span class="token number"
          >300</span
        ><span class="token punctuation">)</span><span class="token punctuation"
          >;</span
        >
            </span>{/if}
{#if value >= 2}<span in:fade={{ delay: 1000 }} out:fade
        >svg
  <span class="token punctuation">.</span><span class="token function"
          >selectAll</span
        ><span class="token punctuation">(</span><span class="token string"
          >"circle"</span
        ><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function"
          >data</span
        ><span class="token punctuation">(</span>data<span
          class="token punctuation">)</span
        >
  <span class="token punctuation">.</span><span class="token function"
          >join</span
        ><span class="token punctuation">(</span><span class="token string"
          >"circle"</span
        ><span class="token punctuation">)</span></span
      >{/if}
  {#if value >= 3}<span in:fade={{ delay: 1000 }} out:fade
        ><span class="token punctuation">.</span><span class="token function"
          >attr</span
        ><span class="token punctuation">(</span><span class="token string"
          >"cx"</span
        ><span class="token punctuation">,</span> <span class="token parameter"
          >d</span
        > <span class="token operator">=&gt;</span> <span class="token function"
          >xScale</span
        ><span class="token punctuation">(</span>d<span
          class="token punctuation">.</span
        >x<span class="token punctuation">)</span><span
          class="token punctuation">)</span
        >
  <span class="token punctuation">.</span><span class="token function"
          >attr</span
        ><span class="token punctuation">(</span><span class="token string"
          >"cy"</span
        ><span class="token punctuation">,</span> <span class="token parameter"
          >d</span
        > <span class="token operator">=&gt;</span> <span class="token function"
          >yScale</span
        ><span class="token punctuation">(</span>d<span
          class="token punctuation">.</span
        >y<span class="token punctuation">)</span><span
          class="token punctuation">)</span
        >
  <span class="token punctuation">.</span><span class="token function"
          >attr</span
        ><span class="token punctuation">(</span><span class="token string"
          >"r"</span
        ><span class="token punctuation">,</span> <span class="token parameter"
          >d</span
        > <span class="token operator">=&gt;</span> d<span
          class="token punctuation">.</span
        >r<span class="token punctuation">)</span></span
      >{/if}
</code></pre>
