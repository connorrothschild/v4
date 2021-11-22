import { c as create_ssr_component, o as compute_rest_props, e as escape, a as add_attribute, p as spread, q as escape_attribute_value, r as escape_object } from "./app-2f09f60b.js";
import "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";
import "prismjs/plugins/line-highlight/prism-line-highlight.js";
import "prismjs/plugins/file-highlight/prism-file-highlight.js";
import "prismjs/components/prism-bash.js";
import "prismjs/components/prism-css.js";
import "prismjs/components/prism-r.js";
import "prismjs/components/prism-json.js";
import "prismjs/components/prism-yaml.js";
var prismLineNumbers = "";
var prismCommandLine = "";
var prismLineHighlight = "";
const blocks = "(if|else if|await|then|catch|each|html|debug)";
Prism.languages.svelte = Prism.languages.extend("markup", {
  each: {
    pattern: new RegExp("{[#/]each(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),
    inside: {
      "language-javascript": [
        {
          pattern: /(as[\s\S]*)\([\s\S]*\)(?=\s*\})/,
          lookbehind: true,
          inside: Prism.languages["javascript"]
        },
        {
          pattern: /(as[\s]*)[\s\S]*(?=\s*)/,
          lookbehind: true,
          inside: Prism.languages["javascript"]
        },
        {
          pattern: /(#each[\s]*)[\s\S]*(?=as)/,
          lookbehind: true,
          inside: Prism.languages["javascript"]
        }
      ],
      keyword: /[#/]each|as/,
      punctuation: /{|}/
    }
  },
  block: {
    pattern: new RegExp("{[#:/@]/s" + blocks + "(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),
    inside: {
      punctuation: /^{|}$/,
      keyword: [new RegExp("[#:/@]" + blocks + "( )*"), /as/, /then/],
      "language-javascript": {
        pattern: /[\s\S]*/,
        inside: Prism.languages["javascript"]
      }
    }
  },
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?:"[^"]*"|'[^']*'|{[\s\S]+?}(?=[\s/>])))|(?=[\s/>])))+)?\s*\/?>/i,
    greedy: true,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/i,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      },
      "language-javascript": {
        pattern: /\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,
        inside: Prism.languages["javascript"]
      },
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
        inside: {
          punctuation: [
            /^=/,
            {
              pattern: /^(\s*)["']|["']$/,
              lookbehind: true
            }
          ],
          "language-javascript": {
            pattern: /{[\s\S]+}/,
            inside: Prism.languages["javascript"]
          }
        }
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
  },
  "language-javascript": {
    pattern: /\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,
    lookbehind: true,
    inside: Prism.languages["javascript"]
  }
});
Prism.languages.svelte["tag"].inside["attr-value"].inside["entity"] = Prism.languages.svelte["entity"];
Prism.hooks.add("wrap", (env) => {
  if (env.type === "entity") {
    env.attributes["title"] = env.content.replace(/&amp;/, "&");
  }
});
Object.defineProperty(Prism.languages.svelte.tag, "addInlined", {
  value: function addInlined(tagName, lang) {
    const includedCdataInside = {};
    includedCdataInside["language-" + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: Prism.languages[lang]
    };
    includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
    const inside = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside["language-" + lang] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[lang]
    };
    const def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, tagName), "i"),
      lookbehind: true,
      greedy: true,
      inside
    };
    Prism.languages.insertBefore("svelte", "cdata", def);
  }
});
Prism.languages.svelte.tag.addInlined("style", "css");
Prism.languages.svelte.tag.addInlined("script", "javascript");
var Code_svelte_svelte_type_style_lang = "";
const css = {
  code: ".filename-container.svelte-qjxfwc{text-align:right;width:100%;height:30px;margin-bottom:-0.55em;border-radius:5px 5px 0 0;background:rgba(var(--accent-color-rgb), 0.9);display:flex;justify-content:flex-end;place-items:center}.filename.svelte-qjxfwc{color:white;padding:0.4rem;letter-spacing:1.4px;font-weight:400}.language.svelte-qjxfwc{position:absolute;top:0;right:0;color:#cecece;font-size:0.7rem;text-transform:uppercase;padding:3px 4px;background:rgba(1, 22, 39, 0.79);user-select:none}",
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
  return `${filename.length > 0 ? `<div class="${"filename-container svelte-qjxfwc"}"><span class="${"filename svelte-qjxfwc"}">${escape(filename)}</span></div>` : ``}
<code style="${"display: none;"}"${add_attribute("this", fakeCodeEl, 0)}>${slots.default ? slots.default({}) : ``}</code>
<pre${spread([
    {
      class: escape(prismClasses) + " " + escape(classes)
    },
    {
      "data-line": escape_attribute_value(highlightedLines)
    },
    escape_object($$restProps)
  ], "svelte-qjxfwc")}${add_attribute("this", preEl, 0)}>${showLanguage && filename.length == 0 ? `<span class="${"language svelte-qjxfwc"}">${escape(language)}</span>` : ``}
  <code class="${"language-" + escape(language) + " svelte-qjxfwc"}"><!-- HTML_TAG_START -->${formattedCode}<!-- HTML_TAG_END --></code>
</pre>`;
});
export { Code as C };
