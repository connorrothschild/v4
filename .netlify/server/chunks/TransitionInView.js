import { c as create_ssr_component, v as validate_component, d as add_attribute } from "./index.js";
import { I as IntersectionObserver_1 } from "./IntersectionObserver.js";
const TransitionInView_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(prefers-reduced-motion: no-preference){.transitioning-container.svelte-zf2mv8{transition:opacity 1000ms ease 200ms, transform 1000ms ease;opacity:0;transform:translateX(-5%)}.intersecting.svelte-zf2mv8{opacity:1;transform:none}}div.svelte-zf2mv8{height:100%;width:100%}",
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
    $$rendered = `${validate_component(IntersectionObserver_1, "IntersectionObserver").$$render(
      $$result,
      { element, once: true, intersecting },
      {
        intersecting: ($$value) => {
          intersecting = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="${"svelte-zf2mv8"}"${add_attribute("this", element, 0)}><div class="${[
            "transitioning-container svelte-zf2mv8",
            intersecting ? "intersecting" : ""
          ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  TransitionInView as T
};
