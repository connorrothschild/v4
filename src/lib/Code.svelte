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

  // The code being used
  export let code = "";

  // link https://prismjs.com/#supported-languages
  // import from 'prismjs/components/prism-{lanugage-name}.js'
  // The language being rendered
  export let language = "javascript";

  // link https://prismjs.com/plugins/line-numbers/
  // Turns on and off line numbers
  export let showLineNumbers = false;

  // Link https://prismjs.com/plugins/normalize-whitespace/
  // Turns on and off cleanup plugin
  export let normalizeWhiteSpace = true;
  //
  // The defualt config for cleanup white space
  export let normalizeWhiteSpaceConfig = {
    // "remove-trailing": true,
    // "remove-indent": true,
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
    showLineNumbers ? "line-numbers" : ""
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

  // Only run if Prism is defined and we code
  $: if (typeof Prism !== "undefined" && code) {
    formattedCode = Prism.highlight(code, Prism.languages[language], language);
  }
</script>

<code style="display: none;" bind:this={fakeCodeEl}>
  <slot />
</code>
<pre
  class="{prismClasses} {classes}"
  bind:this={preEl}
  {...$$restProps}>
  <code class="language-{language}">
    {@html formattedCode}
  </code>
</pre>
