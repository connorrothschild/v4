<script>
  export let value;
  export let onTop;

  import { fade } from "svelte/transition";
</script>

<pre
  style:z-index={onTop ? 1 : 0}
  class="input svelte language-html has-filename"
  data-line=""
  tabindex="0"><div class="filename-container svelte-file"><span
      class="filename">Svelte input</span
    ></div><code class="s-FmIZz_qVofT0 language-html"
    >{#if value >= 0}<span in:fade={{ delay: 2000 }} out:fade
        ><span class="token tag"
          ><span class="token tag"
            ><span class="token punctuation">&lt;</span>svg</span
          ></span
        ></span
      >{/if}{#if value >= 1}<span in:fade={{ delay: 2000 }} out:fade> <span
          class="token attr-name">width</span
        ><span class="token attr-value"
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
