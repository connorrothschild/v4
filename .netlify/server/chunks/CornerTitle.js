import { c as create_ssr_component, e as escape } from "./index.js";
const CornerTitle_svelte_svelte_type_style_lang = "";
const css = {
  code: ".corner.svelte-ykf32{position:fixed;top:var(--nav-height);left:0;padding:1rem;opacity:1;transition:opacity 500ms ease 500ms}.corner-title.svelte-ykf32{font-size:1.15rem;line-height:1.1;font-weight:700;letter-spacing:0.64px;color:var(--pure-text-color);margin-bottom:0.25rem}.corner-subtitle.svelte-ykf32{font-size:0.9rem;font-weight:100;letter-spacing:0.64px;color:var(--text-color);margin-bottom:0.75rem}.scroll-to-top.svelte-ykf32{font-size:0.85rem;text-transform:uppercase;color:var(--accent-color);cursor:pointer}",
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
${!intersecting && w > 1168 && pageHasLoaded ? `<div aria-hidden="${"true"}" class="${"corner svelte-ykf32"}" style="${"max-width: " + escape(cornerTitleWidth, true) + "px"}"><p class="${"corner-title svelte-ykf32"}">${escape(title)}</p>
    <p class="${"corner-subtitle svelte-ykf32"}">${escape(subtitle)}</p>
    <p class="${"scroll-to-top svelte-ykf32"}">Scroll to top \u2191
    </p></div>` : ``}`;
});
export {
  CornerTitle as C
};
