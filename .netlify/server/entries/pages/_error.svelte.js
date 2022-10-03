import { c as create_ssr_component, b as subscribe, e as escape } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: ".error.svelte-1hyovu9{margin:auto;margin-top:calc(var(--nav-height) + 3rem);max-width:1068px;width:95%;padding:1rem}h1.svelte-1hyovu9{font-size:3rem;margin-bottom:2rem}h2.svelte-1hyovu9{font-family:var(--font-mono);font-size:1rem;margin-bottom:0.75rem;padding:0.75rem;width:max-content;background:var(--semitransparent-bg);box-shadow:1px 1px 6px var(--box-shadow-color);border-radius:3px}p.svelte-1hyovu9{margin-bottom:1rem;cursor:pointer}pre.svelte-1hyovu9{font-family:var(--font-mono);overflow-x:scroll;overflow-y:visible;height:max-content;padding:1rem;background:var(--semitransparent-bg);box-shadow:1px 1px 6px var(--box-shadow-color)}h1.svelte-1hyovu9,p.svelte-1hyovu9,pre.svelte-1hyovu9{color:var(--text-color)}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="${"error svelte-1hyovu9"}"><h1 class="${"svelte-1hyovu9"}">There was an error \u2639\uFE0F</h1>
  <h2 class="${"svelte-1hyovu9"}">Error ${escape($page.status)}</h2>

  <p class="${"svelte-1hyovu9"}">${escape("Show")} the technical details <!-- HTML_TAG_START -->${"&darr;"}<!-- HTML_TAG_END --></p>
  ${``}
</div>`;
});
export {
  Error as default
};
