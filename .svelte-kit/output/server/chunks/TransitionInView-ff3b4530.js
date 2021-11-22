import { c as create_ssr_component, v as validate_component, a as add_attribute } from "./app-2f09f60b.js";
import { I as IntersectionObserver_1 } from "./IntersectionObserver-89b2e997.js";
var TransitionInView_svelte_svelte_type_style_lang = "";
const css = {
  code: ".opacity-container.svelte-vb2yke{transition:opacity 1000ms ease 200ms;opacity:0}.intersecting.svelte-vb2yke{opacity:1}div.svelte-vb2yke{height:100%;width:100%}",
  map: null
};
const TransitionInView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let element;
  let intersecting;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(IntersectionObserver_1, "IntersectionObserver").$$render($$result, { element, once: true, intersecting }, {
      intersecting: ($$value) => {
        intersecting = $$value;
        $$settled = false;
      }
    }, {
      default: () => `<div class="${"svelte-vb2yke"}"${add_attribute("this", element, 0)}><div class="${["opacity-container svelte-vb2yke", intersecting ? "intersecting" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div></div>`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export { TransitionInView as T };
