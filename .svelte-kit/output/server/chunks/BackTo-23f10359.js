import { c as create_ssr_component, s as subscribe, a as add_attribute } from "./app-2f09f60b.js";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText.js";
import { p as pageTransitionDelay } from "./global-472f6872.js";
import "bowser";
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_pageTransitionDelay;
  $$unsubscribe_pageTransitionDelay = subscribe(pageTransitionDelay, (value) => value);
  let { split = "chars" } = $$props;
  gsap.registerPlugin(SplitText);
  if ($$props.split === void 0 && $$bindings.split && split !== void 0)
    $$bindings.split(split);
  $$unsubscribe_pageTransitionDelay();
  return ``;
});
var BackTo_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-1clgk59{font-size:1rem;text-transform:uppercase;letter-spacing:0;font-weight:300;font-family:var(--font-sans)}",
  map: null
};
const BackTo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { text = "" } = $$props;
  let { classes = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  $$result.css.add(css);
  return `<div${add_attribute("class", classes, 0)}><a class="${"padding-bottom svelte-1clgk59"}"${add_attribute("href", href, 0)} sveltekit:prefetch>\u2190 <!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END --></a>
</div>`;
});
export { BackTo as B, Transition as T };
