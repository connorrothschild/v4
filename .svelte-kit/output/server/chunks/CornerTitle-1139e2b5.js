import { c as create_ssr_component, e as escape } from "./app-2f09f60b.js";
var CornerTitle_svelte_svelte_type_style_lang = "";
const css = {
  code: ".corner.svelte-1o6wnzi{position:fixed;top:var(--nav-height);left:0;padding:1rem;opacity:1;transition:opacity 500ms ease 500ms}.corner-title.svelte-1o6wnzi{font-size:1.15rem;line-height:1.1;font-weight:700;letter-spacing:0.64px;color:var(--pure-text-color);margin-bottom:0.5rem}.corner-subtitle.svelte-1o6wnzi{font-size:1rem;font-weight:100;letter-spacing:0.64px;color:var(--text-color)}",
  map: null
};
const CornerTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cornerTitleWidth;
  let { title } = $$props;
  let { subtitle } = $$props;
  let { intersecting } = $$props;
  let w;
  let pageHasLoaded = false;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.intersecting === void 0 && $$bindings.intersecting && intersecting !== void 0)
    $$bindings.intersecting(intersecting);
  $$result.css.add(css);
  cornerTitleWidth = (w - 768) / 2 * 0.85;
  return `
${!intersecting && w > 1168 && pageHasLoaded ? `<div aria-hidden="${"true"}" class="${"corner svelte-1o6wnzi"}" style="${"max-width: " + escape(cornerTitleWidth) + "px"}"><p class="${"corner-title svelte-1o6wnzi"}">${escape(title)}</p>
    <p class="${"corner-subtitle svelte-1o6wnzi"}">${escape(subtitle)}</p></div>` : ``}`;
});
export { CornerTitle as C };
