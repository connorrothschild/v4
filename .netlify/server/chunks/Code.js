import { c as create_ssr_component, j as compute_rest_props, d as add_attribute, k as spread, e as escape, l as escape_attribute_value, o as escape_object } from "./index.js";
import "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";
import "prismjs/plugins/line-highlight/prism-line-highlight.js";
import "prismjs/plugins/file-highlight/prism-file-highlight.js";
import "prism-svelte";
import "prismjs/components/prism-bash.js";
import "prismjs/components/prism-css.js";
import "prismjs/components/prism-r.js";
import "prismjs/components/prism-json.js";
import "prismjs/components/prism-yaml.js";
const prismLineNumbers = "";
const prismCommandLine = "";
const prismLineHighlight = "";
const Code_svelte_svelte_type_style_lang = "";
const css = {
  code: ".filename-container.svelte-lvx87{text-align:right;width:100%;height:30px;border-radius:5px 5px 0 0;background:rgba(var(--accent-color-rgb), 0.9);display:flex;justify-content:flex-end;place-items:center;position:absolute;top:0;right:0}.filename.svelte-lvx87{color:var(--primary-color);padding:0.4rem;font-weight:400}.language.svelte-lvx87{position:absolute;top:0;right:0;color:#cecece;font-size:0.7rem;text-transform:uppercase;padding:3px 4px;background:rgba(1, 22, 39, 0.79);user-select:none}.has-filename.svelte-lvx87{padding-top:calc(1rem + 30px) !important}",
  map: null
};
const Code = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let prismClasses;
  let $$restProps = compute_rest_props($$props, [
    "code",
    "filename",
    "highlightedLines",
    "language",
    "showLanguage",
    "showLineNumbers",
    "normalizeWhiteSpace",
    "normalizeWhiteSpaceConfig",
    "classes"
  ]);
  let { code = "" } = $$props;
  let { filename = "" } = $$props;
  let { highlightedLines = "" } = $$props;
  let { language = "javascript" } = $$props;
  let { showLanguage = true } = $$props;
  let { showLineNumbers = false } = $$props;
  let { normalizeWhiteSpace = true } = $$props;
  let { normalizeWhiteSpaceConfig = {
    "remove-trailing": true,
    "remove-indent": false
  } } = $$props;
  let { classes = "" } = $$props;
  let fakeCodeEl;
  let preEl;
  let formattedCode = "";
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.filename === void 0 && $$bindings.filename && filename !== void 0)
    $$bindings.filename(filename);
  if ($$props.highlightedLines === void 0 && $$bindings.highlightedLines && highlightedLines !== void 0)
    $$bindings.highlightedLines(highlightedLines);
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  if ($$props.showLanguage === void 0 && $$bindings.showLanguage && showLanguage !== void 0)
    $$bindings.showLanguage(showLanguage);
  if ($$props.showLineNumbers === void 0 && $$bindings.showLineNumbers && showLineNumbers !== void 0)
    $$bindings.showLineNumbers(showLineNumbers);
  if ($$props.normalizeWhiteSpace === void 0 && $$bindings.normalizeWhiteSpace && normalizeWhiteSpace !== void 0)
    $$bindings.normalizeWhiteSpace(normalizeWhiteSpace);
  if ($$props.normalizeWhiteSpaceConfig === void 0 && $$bindings.normalizeWhiteSpaceConfig && normalizeWhiteSpaceConfig !== void 0)
    $$bindings.normalizeWhiteSpaceConfig(normalizeWhiteSpaceConfig);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  $$result.css.add(css);
  prismClasses = `language-${language} ${showLineNumbers || highlightedLines.length > 0 ? "line-numbers" : ""} ${normalizeWhiteSpace === true ? "" : "no-whitespace-normalization"}`;
  {
    if (typeof Prism !== "undefined" && code) {
      formattedCode = Prism.highlight(code, Prism.languages["r"], language);
    }
  }
  return `<code style="${"display: none;"}"${add_attribute("this", fakeCodeEl, 0)}>${slots.default ? slots.default({}) : ``}</code>
<pre${spread(
    [
      {
        class: escape(prismClasses, true) + " " + escape(classes, true) + " " + escape(filename.length > 0 ? "has-filename" : "", true)
      },
      {
        "data-line": escape_attribute_value(highlightedLines)
      },
      escape_object($$restProps)
    ],
    { classes: "svelte-lvx87" }
  )}${add_attribute("this", preEl, 0)}>  ${filename.length > 0 ? `<div class="${"filename-container svelte-lvx87"}">
      <span class="${"filename svelte-lvx87"}">${escape(filename)}</span>
    </div>` : ``}
  ${showLanguage && filename.length == 0 ? `<span class="${"language svelte-lvx87"}">${escape(language)}</span>` : ``}
  <code class="${"language-" + escape(language, true) + " svelte-lvx87"}">
    <!-- HTML_TAG_START -->${formattedCode}<!-- HTML_TAG_END -->
  </code>
</pre>`;
});
export {
  Code as C
};
