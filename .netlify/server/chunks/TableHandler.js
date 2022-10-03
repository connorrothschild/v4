import { c as create_ssr_component, e as escape, d as add_attribute } from "./index.js";
const TableHandler_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-1yizkq9{margin:1.35rem auto}img.svelte-1yizkq9{margin-bottom:0.5rem}a.svelte-1yizkq9{font-weight:300;font-family:var(--font-sans);text-align:right;width:100%;margin-left:auto;display:block}@media screen and (max-width: 768px){div.svelte-1yizkq9{width:100% !important}}",
  map: null
};
const TableHandler = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  let { link } = $$props;
  let { width = "100%" } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  $$result.css.add(css);
  return `<div style="${"width: " + escape(width, true) + ";"}" class="${"svelte-1yizkq9"}"><img loading="${"lazy"}"${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} width="${"100%"}" class="${"svelte-1yizkq9"}">
  <a${add_attribute("href", link, 0)} target="${"_blank"}" rel="${"noopener noreferrer"}" class="${"no-underline svelte-1yizkq9"}">The original, interactive table can be found here</a>
</div>`;
});
export {
  TableHandler as T
};
