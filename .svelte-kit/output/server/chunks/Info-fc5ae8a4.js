import { c as create_ssr_component } from "./app-2f09f60b.js";
/* empty css                                             */const css = {
  code: '.info.svelte-1oeu49g::before{content:"\u2757\uFE0F";font-size:1.5rem;margin-right:1rem}.info.svelte-1oeu49g{display:flex;place-items:center;border-radius:10px;font-weight:normal;background:var(--semitransparent-bg);box-shadow:2px 2px 5px 1px var(--box-shadow-color);padding:1rem;margin:1.75rem 0}.info .text p:not(:last-child){margin-bottom:1rem}.info .text p:last-child{margin-bottom:0}',
  map: null
};
const Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"info svelte-1oeu49g"}"><div class="${"text"}"><p>${slots.default ? slots.default({}) : ``}</p></div>
</div>`;
});
export { Info as I };
