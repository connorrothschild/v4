<script>
  // Svelte Imports
  import { afterUpdate, tick, onMount } from "svelte";

  // Prism Imports
  import "prismjs";
  import "prismjs/plugins/line-numbers/prism-line-numbers.js";
  import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";
  import "prismjs/plugins/line-numbers/prism-line-numbers.css";
  import "prismjs/plugins/command-line/prism-command-line.css";
  import "prismjs/plugins/line-highlight/prism-line-highlight.css";

  import "prismjs/plugins/line-highlight/prism-line-highlight.js";
  import "prismjs/plugins/file-highlight/prism-file-highlight.js";

  import "prism-svelte";
  import "prismjs/components/prism-bash.js";
  import "prismjs/components/prism-css.js";
  import "prismjs/components/prism-r.js";
  import "prismjs/components/prism-json.js";
  import "prismjs/components/prism-yaml.js";

  // The code being used
  export let code = "";

  export let filename = "";
  export let highlightedLines = "";
  // link https://prismjs.com/#supported-languages
  // import from 'prismjs/components/prism-{lanugage-name}.js'
  // The language being rendered
  export let language = "javascript";
  export let showLanguage = true;

  // link https://prismjs.com/plugins/line-numbers/
  // Turns on and off line numbers
  export let showLineNumbers = false;

  // Link https://prismjs.com/plugins/normalize-whitespace/
  // Turns on and off cleanup plugin
  export let normalizeWhiteSpace = true;
  //
  // The defualt config for cleanup white space
  export let normalizeWhiteSpaceConfig = {
    "remove-trailing": true,
    "remove-indent": false,
    // "left-trim": true,
    // "right-trim": true,
    // "break-lines": 80,
    // indent: 2,
    // "remove-initial-line-feed": false,
    // "tabs-to-spaces": 4,
    // "spaces-to-tabs": 4,
  };

  // CSS Classes specified by the user of the component
  export let classes = "";

  // This is the fake coding element
  let fakeCodeEl;

  // This is pre Element
  let preEl;

  // This stored the formatted HTML to display
  let formattedCode = "";

  // creates the prism classes
  $: prismClasses = `language-${language} ${
    showLineNumbers || highlightedLines.length > 0 ? "line-numbers" : ""
  } ${normalizeWhiteSpace === true ? "" : "no-whitespace-normalization"}`;

  onMount(() => {
    if (normalizeWhiteSpace) {
      Prism.plugins.NormalizeWhitespace.setDefaults(normalizeWhiteSpaceConfig);
    }
  });

  afterUpdate(async (node) => {
    // code variable if they are using a prop
    // Have to use innerText because innerHTML will create weird escape characaters
    if (fakeCodeEl && fakeCodeEl.innerText !== "") {
      code = fakeCodeEl.innerText;
    }
    // We need to wait till everything been rendered before we can
    // call highlightAll and load all the plugins
    await tick();
    // This will make sure all the plugins are loaded
    // Prism.highlight will not do that
    Prism.highlightAllUnder(preEl);
  });

  $: console.log(Prism.languages);

  // Only run if Prism is defined and we provide code
  $: if (typeof Prism !== "undefined" && code) {
    formattedCode = Prism.highlight(code, Prism.languages["r"], language);
  }
</script>

{#if filename.length > 0}
  <div class="filename-container"><span class="filename">{filename}</span></div>
{/if}
<code style="display: none;" bind:this={fakeCodeEl}>
  <slot />
</code>
<pre
  class="{prismClasses} {classes}"
  data-line={highlightedLines}
  bind:this={preEl}
  {...$$restProps}>
  {#if showLanguage && filename.length == 0}
    <span class="language">{language}</span>
  {/if}
  <code class="language-{language}">
    {@html formattedCode}
  </code>
</pre>

<style>
  .filename-container {
    text-align: right;
    width: 100%;
    height: 30px;
    margin-bottom: -0.55em;
    border-radius: 5px 5px 0 0;
    background: rgba(var(--accent-color-rgb), 0.9);
    display: flex;
    justify-content: flex-end;
    place-items: center;
  }

  .filename {
    color: white;
    padding: 0.4rem;
    letter-spacing: 1.4px;
    font-weight: 100;
  }

  .language {
    position: absolute;
    top: 0;
    right: 0;
    color: #cecece;
    font-size: 0.7rem;
    text-transform: uppercase;
    padding: 3px 4px;
    background: rgba(1, 22, 39, 0.79);
  }
</style>
